/* eslint-disable */
import { z } from 'zod';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
import { ProductRecordCreatemanuallyChangedFieldsInputObjectSchema } from './ProductRecordCreatemanuallyChangedFieldsInput.schema';
import { ProductRecordDataFieldSchema } from '../enums/ProductRecordDataField.schema';
import { ProductRecordErrorUncheckedCreateNestedManyWithoutRecordInputObjectSchema } from './ProductRecordErrorUncheckedCreateNestedManyWithoutRecordInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordUncheckedCreateWithoutUpdatedByInput>;
export const ProductRecordUncheckedCreateWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), createdById: z.string(), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), timestamp: z.union([z.date().optional(), z.string().datetime().optional()]), productId: z.string(), price: z.union([z.number(),
    z.null()]).optional().nullable(), rawPrice: z.union([z.string(),
    z.null()]).optional().nullable(), status: z.union([z.lazy(() => ProductStatusSchema),
    z.null()]).optional().nullable(), wasManuallyCreated: z.boolean().optional(), manuallyChangedFields: z.union([z.lazy(() => ProductRecordCreatemanuallyChangedFieldsInputObjectSchema),
    z.lazy(() => ProductRecordDataFieldSchema).array()]).optional(), errors: z.lazy(() => ProductRecordErrorUncheckedCreateNestedManyWithoutRecordInputObjectSchema).optional()
}).strict() as SchemaType;
