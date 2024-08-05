/* eslint-disable */
import { z } from 'zod';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
import { ProductRecordCreatemanuallyChangedFieldsInputObjectSchema } from './ProductRecordCreatemanuallyChangedFieldsInput.schema';
import { ProductRecordDataFieldSchema } from '../enums/ProductRecordDataField.schema';
import { UserCreateNestedOneWithoutCreatedProductRecordsInputObjectSchema } from './UserCreateNestedOneWithoutCreatedProductRecordsInput.schema';
import { UserCreateNestedOneWithoutUpdatedProductRecordsInputObjectSchema } from './UserCreateNestedOneWithoutUpdatedProductRecordsInput.schema';
import { ProductRecordErrorCreateNestedManyWithoutRecordInputObjectSchema } from './ProductRecordErrorCreateNestedManyWithoutRecordInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordCreateWithoutProductInput>;
export const ProductRecordCreateWithoutProductInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), timestamp: z.union([z.date().optional(), z.string().datetime().optional()]), price: z.union([z.number(),
    z.null()]).optional().nullable(), rawPrice: z.union([z.string(),
    z.null()]).optional().nullable(), status: z.union([z.lazy(() => ProductStatusSchema),
    z.null()]).optional().nullable(), wasManuallyCreated: z.boolean().optional(), manuallyChangedFields: z.union([z.lazy(() => ProductRecordCreatemanuallyChangedFieldsInputObjectSchema),
    z.lazy(() => ProductRecordDataFieldSchema).array()]).optional(), createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedProductRecordsInputObjectSchema), updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedProductRecordsInputObjectSchema), errors: z.lazy(() => ProductRecordErrorCreateNestedManyWithoutRecordInputObjectSchema).optional()
}).strict() as SchemaType;
