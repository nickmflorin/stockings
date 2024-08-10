import { intersection, uniq } from "lodash-es";
import { z } from "zod";

import { ProductStatus, PriceChangeEventCondition, productStatusesAreAny } from "~/database/model";

const StatusChangeEventConditionSchema = z.object({
  id: z.string().optional(),
  fromStatus: z.array(z.nativeEnum(ProductStatus)),
  toStatus: z.array(z.nativeEnum(ProductStatus)),
});

export const StatusChangeEventConditionRefinement =
  (prefixPath: string[] = []) =>
  (data: z.infer<typeof StatusChangeEventConditionSchema>, ctx: z.RefinementCtx) => {
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

const StatusChangeSubscribedEventSchema = z.object({
  enabled: z.boolean(),
  conditions: z.array(StatusChangeEventConditionSchema),
});

export const StatusChangeSubscribedEventSchemaRefinement =
  (prefixPath: string[] = []) =>
  (
    { enabled, conditions }: z.infer<typeof StatusChangeSubscribedEventSchema>,
    ctx: z.RefinementCtx,
  ) => {
    if (enabled) {
      if (conditions.length === 0) {
        /* TODO: We have to revisit this in terms of whether or not including an error at the
           'conditions' top level will be picked up by the form. */
        ctx.addIssue({
          code: z.ZodIssueCode.too_small,
          minimum: 1,
          type: "array",
          inclusive: true,
          path: [...prefixPath, "conditions"],
          message:
            "At least one condition must be defined if status change notifications are enabled.",
        });
      }
      for (let i = 0; i < conditions.length; i++) {
        const condition = conditions[i];
        StatusChangeEventConditionRefinement([...prefixPath, "conditions", `${i}`])(condition, ctx);
        if (
          !productStatusesAreAny(condition.fromStatus) &&
          !productStatusesAreAny(condition.toStatus) &&
          intersection(condition.fromStatus, condition.toStatus).length !== 0
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: [...prefixPath, "conditions", `${i}`, "toStatus"],
            message: "A status cannot appear in both the 'from' and 'to' status lists.",
          });
        }
      }
    }
  };

const PriceChangeSubscribedEventSchema = z.object({
  enabled: z.boolean(),
  conditions: z.array(z.nativeEnum(PriceChangeEventCondition)),
});

export const PriceChangeSubscribedEventRefinement =
  (prefixPath: string[] = []) =>
  (
    { enabled, conditions }: z.infer<typeof PriceChangeSubscribedEventSchema>,
    ctx: z.RefinementCtx,
  ) => {
    if (enabled) {
      if (conditions.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_small,
          minimum: 1,
          type: "array",
          inclusive: true,
          path: [...prefixPath, "conditions"],
          message: "At least one price change event must selected.",
        });
      } else if (uniq(conditions).length !== conditions.length) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: [...prefixPath, "conditions"],
          message: "The conditions must be a unique list.",
        });
      }
    }
  };

export const ProductSubscriptionSchema = z
  .object({
    enabled: z.boolean(),
    priceChange: PriceChangeSubscribedEventSchema,
    statusChange: StatusChangeSubscribedEventSchema,
  })
  .superRefine((data, ctx) => {
    const { statusChange, priceChange, enabled } = data;
    if (enabled) {
      StatusChangeSubscribedEventSchemaRefinement(["statusChange"])(statusChange, ctx);
      PriceChangeSubscribedEventRefinement(["priceChange"])(priceChange, ctx);
    }
  });
