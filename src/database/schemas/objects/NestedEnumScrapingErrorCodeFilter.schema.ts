/* eslint-disable */
import { z } from 'zod';
import { ScrapingErrorCodeSchema } from '../enums/ScrapingErrorCode.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NestedEnumScrapingErrorCodeFilter>;
export const NestedEnumScrapingErrorCodeFilterObjectSchema: SchemaType = z.object({
    equals: z.lazy(() => ScrapingErrorCodeSchema).optional(), in: z.lazy(() => ScrapingErrorCodeSchema).array().optional(), notIn: z.lazy(() => ScrapingErrorCodeSchema).array().optional(), not: z.union([z.lazy(() => ScrapingErrorCodeSchema),
    z.lazy(() => NestedEnumScrapingErrorCodeFilterObjectSchema)]).optional()
}).strict() as SchemaType;
