/* eslint-disable */
import { z } from 'zod';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
import { ProductRecordCreatemanuallyChangedFieldsInputObjectSchema } from './ProductRecordCreatemanuallyChangedFieldsInput.schema';
import { ProductRecordDataFieldSchema } from '../enums/ProductRecordDataField.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordCreateManyProductInput>;
export const ProductRecordCreateManyProductInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), createdById: z.string(), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedById: z.string(), timestamp: z.union([z.date().optional(), z.string().datetime().optional()]), price: z.union([z.number(),
    z.null()]).optional().nullable(), rawPrice: z.union([z.string(),
    z.null()]).optional().nullable(), status: z.union([z.lazy(() => ProductStatusSchema),
    z.null()]).optional().nullable(), wasManuallyCreated: z.boolean().optional(), manuallyChangedFields: z.union([z.lazy(() => ProductRecordCreatemanuallyChangedFieldsInputObjectSchema),
    z.lazy(() => ProductRecordDataFieldSchema).array()]).optional()
}).strict() as SchemaType;
