/* eslint-disable */
import { z } from 'zod';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { EnumScrapingErrorCodeWithAggregatesFilterObjectSchema } from './EnumScrapingErrorCodeWithAggregatesFilter.schema';
import { ScrapingErrorCodeSchema } from '../enums/ScrapingErrorCode.schema';
import { EnumProductRecordDataFieldWithAggregatesFilterObjectSchema } from './EnumProductRecordDataFieldWithAggregatesFilter.schema';
import { ProductRecordDataFieldSchema } from '../enums/ProductRecordDataField.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordErrorScalarWhereWithAggregatesInput>;
export const ProductRecordErrorScalarWhereWithAggregatesInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => ProductRecordErrorScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => ProductRecordErrorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: z.lazy(() => ProductRecordErrorScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => ProductRecordErrorScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => ProductRecordErrorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), errorId: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), errorCode: z.union([z.lazy(() => EnumScrapingErrorCodeWithAggregatesFilterObjectSchema),
    z.lazy(() => ScrapingErrorCodeSchema)]).optional(), recordId: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), field: z.union([z.lazy(() => EnumProductRecordDataFieldWithAggregatesFilterObjectSchema),
    z.lazy(() => ProductRecordDataFieldSchema)]).optional(), message: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional()
}).strict() as SchemaType;
