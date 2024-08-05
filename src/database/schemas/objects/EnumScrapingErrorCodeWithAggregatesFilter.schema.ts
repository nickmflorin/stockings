/* eslint-disable */
import { z } from 'zod';
import { ScrapingErrorCodeSchema } from '../enums/ScrapingErrorCode.schema';
import { NestedEnumScrapingErrorCodeWithAggregatesFilterObjectSchema } from './NestedEnumScrapingErrorCodeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumScrapingErrorCodeFilterObjectSchema } from './NestedEnumScrapingErrorCodeFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.EnumScrapingErrorCodeWithAggregatesFilter>;
export const EnumScrapingErrorCodeWithAggregatesFilterObjectSchema: SchemaType = z.object({
    equals: z.lazy(() => ScrapingErrorCodeSchema).optional(), in: z.lazy(() => ScrapingErrorCodeSchema).array().optional(), notIn: z.lazy(() => ScrapingErrorCodeSchema).array().optional(), not: z.union([z.lazy(() => ScrapingErrorCodeSchema),
    z.lazy(() => NestedEnumScrapingErrorCodeWithAggregatesFilterObjectSchema)]).optional(), _count: z.lazy(() => NestedIntFilterObjectSchema).optional(), _min: z.lazy(() => NestedEnumScrapingErrorCodeFilterObjectSchema).optional(), _max: z.lazy(() => NestedEnumScrapingErrorCodeFilterObjectSchema).optional()
}).strict() as SchemaType;
