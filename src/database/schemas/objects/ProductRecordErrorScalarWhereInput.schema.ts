/* eslint-disable */
import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { EnumScrapingErrorCodeFilterObjectSchema } from './EnumScrapingErrorCodeFilter.schema';
import { ScrapingErrorCodeSchema } from '../enums/ScrapingErrorCode.schema';
import { EnumProductRecordDataFieldFilterObjectSchema } from './EnumProductRecordDataFieldFilter.schema';
import { ProductRecordDataFieldSchema } from '../enums/ProductRecordDataField.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordErrorScalarWhereInput>;
export const ProductRecordErrorScalarWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => ProductRecordErrorScalarWhereInputObjectSchema),
    z.lazy(() => ProductRecordErrorScalarWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => ProductRecordErrorScalarWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => ProductRecordErrorScalarWhereInputObjectSchema),
    z.lazy(() => ProductRecordErrorScalarWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), errorId: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), errorCode: z.union([z.lazy(() => EnumScrapingErrorCodeFilterObjectSchema),
    z.lazy(() => ScrapingErrorCodeSchema)]).optional(), recordId: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), field: z.union([z.lazy(() => EnumProductRecordDataFieldFilterObjectSchema),
    z.lazy(() => ProductRecordDataFieldSchema)]).optional(), message: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional()
}).strict() as SchemaType;
