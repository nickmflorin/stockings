/* eslint-disable */
import { z } from 'zod';
import { ProductRecordDataFieldSchema } from '../enums/ProductRecordDataField.schema';
import { NestedEnumProductRecordDataFieldWithAggregatesFilterObjectSchema } from './NestedEnumProductRecordDataFieldWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumProductRecordDataFieldFilterObjectSchema } from './NestedEnumProductRecordDataFieldFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.EnumProductRecordDataFieldWithAggregatesFilter>;
export const EnumProductRecordDataFieldWithAggregatesFilterObjectSchema: SchemaType = z.object({
    equals: z.lazy(() => ProductRecordDataFieldSchema).optional(), in: z.lazy(() => ProductRecordDataFieldSchema).array().optional(), notIn: z.lazy(() => ProductRecordDataFieldSchema).array().optional(), not: z.union([z.lazy(() => ProductRecordDataFieldSchema),
    z.lazy(() => NestedEnumProductRecordDataFieldWithAggregatesFilterObjectSchema)]).optional(), _count: z.lazy(() => NestedIntFilterObjectSchema).optional(), _min: z.lazy(() => NestedEnumProductRecordDataFieldFilterObjectSchema).optional(), _max: z.lazy(() => NestedEnumProductRecordDataFieldFilterObjectSchema).optional()
}).strict() as SchemaType;
