/* eslint-disable */
import { z } from 'zod';
import { ScrapingErrorCodeSchema } from '../enums/ScrapingErrorCode.schema';
import { ProductRecordDataFieldSchema } from '../enums/ProductRecordDataField.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordErrorCreateWithoutRecordInput>;
export const ProductRecordErrorCreateWithoutRecordInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), errorId: z.string(), errorCode: z.lazy(() => ScrapingErrorCodeSchema), field: z.lazy(() => ProductRecordDataFieldSchema), message: z.string()
}).strict() as SchemaType;
