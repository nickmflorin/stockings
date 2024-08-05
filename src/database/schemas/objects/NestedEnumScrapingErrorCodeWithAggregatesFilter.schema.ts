/* eslint-disable */
import { z } from 'zod';
import { ScrapingErrorCodeSchema } from '../enums/ScrapingErrorCode.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumScrapingErrorCodeFilterObjectSchema } from './NestedEnumScrapingErrorCodeFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NestedEnumScrapingErrorCodeWithAggregatesFilter>;
export const NestedEnumScrapingErrorCodeWithAggregatesFilterObjectSchema: SchemaType = z.object({
    equals: z.lazy(() => ScrapingErrorCodeSchema).optional(), in: z.lazy(() => ScrapingErrorCodeSchema).array().optional(), notIn: z.lazy(() => ScrapingErrorCodeSchema).array().optional(), not: z.union([z.lazy(() => ScrapingErrorCodeSchema),
    z.lazy(() => NestedEnumScrapingErrorCodeWithAggregatesFilterObjectSchema)]).optional(), _count: z.lazy(() => NestedIntFilterObjectSchema).optional(), _min: z.lazy(() => NestedEnumScrapingErrorCodeFilterObjectSchema).optional(), _max: z.lazy(() => NestedEnumScrapingErrorCodeFilterObjectSchema).optional()
}).strict() as SchemaType;
