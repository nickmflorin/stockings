/* eslint-disable */
import { z } from 'zod';
import { ProductRecordErrorWhereInputObjectSchema } from './ProductRecordErrorWhereInput.schema';
import { EnumScrapingErrorCodeFilterObjectSchema } from './EnumScrapingErrorCodeFilter.schema';
import { ScrapingErrorCodeSchema } from '../enums/ScrapingErrorCode.schema';
import { EnumProductRecordDataFieldFilterObjectSchema } from './EnumProductRecordDataFieldFilter.schema';
import { ProductRecordDataFieldSchema } from '../enums/ProductRecordDataField.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ProductRecordRelationFilterObjectSchema } from './ProductRecordRelationFilter.schema';
import { ProductRecordWhereInputObjectSchema } from './ProductRecordWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordErrorWhereUniqueInput>;
export const ProductRecordErrorWhereUniqueInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), errorId: z.string().optional(), recordId: z.string().optional(), AND: z.union([z.lazy(() => ProductRecordErrorWhereInputObjectSchema),
    z.lazy(() => ProductRecordErrorWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => ProductRecordErrorWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => ProductRecordErrorWhereInputObjectSchema),
    z.lazy(() => ProductRecordErrorWhereInputObjectSchema).array()]).optional(), errorCode: z.union([z.lazy(() => EnumScrapingErrorCodeFilterObjectSchema),
    z.lazy(() => ScrapingErrorCodeSchema)]).optional(), field: z.union([z.lazy(() => EnumProductRecordDataFieldFilterObjectSchema),
    z.lazy(() => ProductRecordDataFieldSchema)]).optional(), message: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), record: z.union([z.lazy(() => ProductRecordRelationFilterObjectSchema),
    z.lazy(() => ProductRecordWhereInputObjectSchema)]).optional()
}).strict() as SchemaType;
