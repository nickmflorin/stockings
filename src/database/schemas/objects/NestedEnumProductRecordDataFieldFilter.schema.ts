/* eslint-disable */
import { z } from 'zod';
import { ProductRecordDataFieldSchema } from '../enums/ProductRecordDataField.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NestedEnumProductRecordDataFieldFilter>;
export const NestedEnumProductRecordDataFieldFilterObjectSchema: SchemaType = z.object({
    equals: z.lazy(() => ProductRecordDataFieldSchema).optional(), in: z.lazy(() => ProductRecordDataFieldSchema).array().optional(), notIn: z.lazy(() => ProductRecordDataFieldSchema).array().optional(), not: z.union([z.lazy(() => ProductRecordDataFieldSchema),
    z.lazy(() => NestedEnumProductRecordDataFieldFilterObjectSchema)]).optional()
}).strict() as SchemaType;
