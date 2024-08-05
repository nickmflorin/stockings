/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ElementAttributeSchema } from '../enums/ElementAttribute.schema';
import { EnumElementAttributeFieldUpdateOperationsInputObjectSchema } from './EnumElementAttributeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.MissingAttributeErrorDataUpdateManyMutationInput>;
export const MissingAttributeErrorDataUpdateManyMutationInputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), attribute: z.union([z.lazy(() => ElementAttributeSchema),
    z.lazy(() => EnumElementAttributeFieldUpdateOperationsInputObjectSchema)]).optional(), parentHtml: z.union([z.string(),
    z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable()
}).strict() as SchemaType;
