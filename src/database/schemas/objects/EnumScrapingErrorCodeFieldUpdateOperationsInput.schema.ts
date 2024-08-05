/* eslint-disable */
import { z } from 'zod';
import { ScrapingErrorCodeSchema } from '../enums/ScrapingErrorCode.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.EnumScrapingErrorCodeFieldUpdateOperationsInput>;
export const EnumScrapingErrorCodeFieldUpdateOperationsInputObjectSchema: SchemaType = z.object({
    set: z.lazy(() => ScrapingErrorCodeSchema).optional()
}).strict() as SchemaType;
