/* eslint-disable */
import { z } from 'zod';
import { ScrapingErrorCodeSchema } from '../enums/ScrapingErrorCode.schema';
import { NestedEnumScrapingErrorCodeFilterObjectSchema } from './NestedEnumScrapingErrorCodeFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.EnumScrapingErrorCodeFilter>;
export const EnumScrapingErrorCodeFilterObjectSchema: SchemaType = z.object({
    equals: z.lazy(() => ScrapingErrorCodeSchema).optional(), in: z.lazy(() => ScrapingErrorCodeSchema).array().optional(), notIn: z.lazy(() => ScrapingErrorCodeSchema).array().optional(), not: z.union([z.lazy(() => ScrapingErrorCodeSchema),
    z.lazy(() => NestedEnumScrapingErrorCodeFilterObjectSchema)]).optional()
}).strict() as SchemaType;
