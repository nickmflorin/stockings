/* eslint-disable */
import { z } from 'zod';
import { ProductRecordDataFieldSchema } from '../enums/ProductRecordDataField.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordUpdatemanuallyChangedFieldsInput>;
export const ProductRecordUpdatemanuallyChangedFieldsInputObjectSchema: SchemaType = z.object({
    set: z.lazy(() => ProductRecordDataFieldSchema).array().optional(), push: z.union([z.lazy(() => ProductRecordDataFieldSchema),
    z.lazy(() => ProductRecordDataFieldSchema).array()]).optional()
}).strict() as SchemaType;
