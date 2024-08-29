import { intersection, uniq } from "lodash-es";
import { z } from "zod";

import { ProductStatus, PriceChangeCondition, productStatusesAreAny } from "~/database/model";

export const BaseProductSubscriptionSchema = z.object({
  enabled: z.boolean(),
});

const StatusChangeSubscriptionConditionSchema = z.object({
  id: z.string().optional(),
  fromStatus: z.array(z.nativeEnum(ProductStatus)),
  toStatus: z.array(z.nativeEnum(ProductStatus)),
});

export const StatusChangeSubscriptionConditionRefinement =
  (prefixPath: string[] = []) =>
  (data: z.infer<typeof StatusChangeSubscriptionConditionSchema>, ctx: z.RefinementCtx) => {
    if (data.fromStatus.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 1,
        type: "array",
        inclusive: true,
        path: [...prefixPath, "fromStatus"],
        message: "At least one beginning state status must be selected.",
      });
    } else if (uniq(data.fromStatus).length !== data.fromStatus.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: [...prefixPath, "fromStatus"],
        message: "The beginning state statuses must be a unique list.",
      });
    }
    if (data.toStatus.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 1,
        type: "array",
        inclusive: true,
        path: [...prefixPath, "toStatus"],
        message: "At least one end state status must be selected.",
      });
    } else if (uniq(data.toStatus).length !== data.toStatus.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: [...prefixPath, "toStatus"],
        message: "The ending state statuses must be a unique list.",
      });
    }
  };

export const StatusChangeSubscriptionSchema = z
  .object({
    enabled: z.boolean(),
    conditions: z.array(StatusChangeSubscriptionConditionSchema),
  })
  .superRefine(({ enabled, conditions }, ctx: z.RefinementCtx) => {
    if (enabled) {
      if (conditions.length === 0) {
        /* TODO: We have to revisit this in terms of whether or not including an error at the
           'conditions' top level will be picked up by the form. */
        ctx.addIssue({
          code: z.ZodIssueCode.too_small,
          minimum: 1,
          type: "array",
          inclusive: true,
          path: ["conditions"],
          message:
            "At least one condition must be defined if status change notifications are enabled.",
        });
      }
      for (let i = 0; i < conditions.length; i++) {
        const condition = conditions[i];
        StatusChangeSubscriptionConditionRefinement(["conditions", `${i}`])(condition, ctx);
        if (
          !productStatusesAreAny(condition.fromStatus) &&
          !productStatusesAreAny(condition.toStatus) &&
          intersection(condition.fromStatus, condition.toStatus).length !== 0
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["conditions", `${i}`, "toStatus"],
            message: "A status cannot appear in both the 'from' and 'to' status lists.",
          });
        }
      }
    }
  });

export const PriceChangeSubscriptionSchema = z
  .object({
    enabled: z.boolean(),
    conditions: z.array(z.nativeEnum(PriceChangeCondition)),
  })
  .superRefine(({ enabled, conditions }, ctx: z.RefinementCtx) => {
    if (enabled) {
      if (conditions.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_small,
          minimum: 1,
          type: "array",
          inclusive: true,
          path: ["conditions"],
          message: "At least one price change event must selected.",
        });
      } else if (uniq(conditions).length !== conditions.length) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["conditions"],
          message: "The conditions must be a unique list.",
        });
      }
    }
  });

export const SubscribeToProductSchema = z
  .object({
    priceChangeConditions: z.array(z.nativeEnum(PriceChangeCondition)),
    statusChangeConditions: z.array(StatusChangeSubscriptionConditionSchema),
  })
  .superRefine(({ priceChangeConditions, statusChangeConditions }, ctx: z.RefinementCtx) => {
    for (let i = 0; i < statusChangeConditions.length; i++) {
      const condition = statusChangeConditions[i];
      StatusChangeSubscriptionConditionRefinement(["statusChangeConditions", `${i}`])(
        condition,
        ctx,
      );
      if (
        !productStatusesAreAny(condition.fromStatus) &&
        !productStatusesAreAny(condition.toStatus) &&
        intersection(condition.fromStatus, condition.toStatus).length !== 0
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["statusChangeConditions", `${i}`, "toStatus"],
          message: "A status cannot appear in both the 'from' and 'to' status lists.",
        });
      }
    }
    if (uniq(priceChangeConditions).length !== priceChangeConditions.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["priceChangeConditions"],
        message: "The conditions must be a unique list.",
      });
    }
  });
