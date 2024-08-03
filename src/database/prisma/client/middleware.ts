import { Prisma } from "~/database/model";

export const getModel = (name: Prisma.ModelName): Prisma.DMMF.Model => {
  const model = Prisma.dmmf.datamodel.models.find(m => m.name === name);
  if (!model) {
    throw new TypeError(`Invalid model name '${name}'.`);
  }
  return model;
};

export const modelHasField = (name: Prisma.ModelName | Prisma.DMMF.Model, field: string) => {
  const m = typeof name === "string" ? getModel(name) : name;
  return m.fields.find(f => f.name === field) !== undefined;
};

export const safeEnumValue = <E extends Record<string, string>>(
  value: string,
  prismaEnum: E,
): E[keyof E] => {
  const v = value.toUpperCase();
  if (prismaEnum[v] === undefined) {
    throw new TypeError(
      `Invalid enum value '${value}' detected for enum, must be one of ${Object.values(
        prismaEnum,
      ).join(", ")}'`,
    );
  }
  return v as E[keyof E];
};
type UpdateAction = Extract<Prisma.PrismaAction, `update${string}`>;

const UPDATE_ACTIONS: UpdateAction[] = ["update", "updateMany"];
const UPDATE_OR_UPSERT_ACTIONS: (UpdateAction | "upsert")[] = [...UPDATE_ACTIONS, "upsert"];

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const getUpdateData = (args: any, action: UpdateAction | "upsert") =>
  ({
    upsert: args.update,
    update: args.data,
    updateMany: args.data,
  })[action];

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const updateDataHasField = (field: string, args: any, action: UpdateAction | "upsert"): boolean => {
  const data = getUpdateData(args, action);
  if (typeof data === "object" && data !== null && data[field] !== undefined) {
    return true;
  }
  return false;
};

const FIELDS_REQUIRED_ON_UPDATE = ["updatedById"];
const FIELDS_PROHIBITED_ON_UPDATE = ["createdById", "createdAt", "assignedAt"];

export const ModelMetaDataMiddleware: Prisma.Middleware = async (
  { action, model, args, ...params },
  next,
) => {
  if (UPDATE_OR_UPSERT_ACTIONS.includes(action as UpdateAction | "upsert") && model) {
    for (const field of FIELDS_REQUIRED_ON_UPDATE) {
      if (
        modelHasField(model, field) &&
        !updateDataHasField(field, args, action as UpdateAction | "upsert")
      ) {
        throw new Error(
          `For action '${action}' on model '${model}', the field '${field}' is required.`,
        );
      }
    }
    for (const field of FIELDS_PROHIBITED_ON_UPDATE) {
      if (
        modelHasField(model, field) &&
        updateDataHasField(field, args, action as UpdateAction | "upsert")
      ) {
        throw new Error(
          `For action '${action}' on model '${model}', the field '${field}' is prohibited.`,
        );
      }
    }
  }
  return next({ ...params, action, model, args });
};
