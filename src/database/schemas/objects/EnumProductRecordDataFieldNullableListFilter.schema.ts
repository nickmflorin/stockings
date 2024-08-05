/* eslint-disable */
import { z } from 'zod';
import { ProductRecordDataFieldSchema } from '../enums/ProductRecordDataField.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.EnumProductRecordDataFieldNullableListFilter>;
export const EnumProductRecordDataFieldNullableListFilterObjectSchema: SchemaType = z.object({
    equals: z.union([z.lazy(() => ProductRecordDataFieldSchema).array(),
    z.null()]).optional().nullable(), has: z.union([z.lazy(() => ProductRecordDataFieldSchema),
    z.null()]).optional().nullable(), hasEvery: z.lazy(() => ProductRecordDataFieldSchema).array().optional(), hasSome: z.lazy(() => ProductRecordDataFieldSchema).array().optional(), isEmpty: z.boolean().optional()
}).strict() as SchemaType;
