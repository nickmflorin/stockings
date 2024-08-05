/* eslint-disable */
import { z } from 'zod';
import { ProductRecordDataFieldSchema } from '../enums/ProductRecordDataField.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.EnumProductRecordDataFieldFieldUpdateOperationsInput>;
export const EnumProductRecordDataFieldFieldUpdateOperationsInputObjectSchema: SchemaType = z.object({
    set: z.lazy(() => ProductRecordDataFieldSchema).optional()
}).strict() as SchemaType;
