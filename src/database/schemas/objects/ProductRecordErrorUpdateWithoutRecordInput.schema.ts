/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ScrapingErrorCodeSchema } from '../enums/ScrapingErrorCode.schema';
import { EnumScrapingErrorCodeFieldUpdateOperationsInputObjectSchema } from './EnumScrapingErrorCodeFieldUpdateOperationsInput.schema';
import { ProductRecordDataFieldSchema } from '../enums/ProductRecordDataField.schema';
import { EnumProductRecordDataFieldFieldUpdateOperationsInputObjectSchema } from './EnumProductRecordDataFieldFieldUpdateOperationsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordErrorUpdateWithoutRecordInput>;
export const ProductRecordErrorUpdateWithoutRecordInputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), errorId: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), errorCode: z.union([z.lazy(() => ScrapingErrorCodeSchema),
    z.lazy(() => EnumScrapingErrorCodeFieldUpdateOperationsInputObjectSchema)]).optional(), field: z.union([z.lazy(() => ProductRecordDataFieldSchema),
    z.lazy(() => EnumProductRecordDataFieldFieldUpdateOperationsInputObjectSchema)]).optional(), message: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict() as SchemaType;
