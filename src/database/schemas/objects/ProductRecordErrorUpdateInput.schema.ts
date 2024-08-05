/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ScrapingErrorCodeSchema } from '../enums/ScrapingErrorCode.schema';
import { EnumScrapingErrorCodeFieldUpdateOperationsInputObjectSchema } from './EnumScrapingErrorCodeFieldUpdateOperationsInput.schema';
import { ProductRecordDataFieldSchema } from '../enums/ProductRecordDataField.schema';
import { EnumProductRecordDataFieldFieldUpdateOperationsInputObjectSchema } from './EnumProductRecordDataFieldFieldUpdateOperationsInput.schema';
import { ProductRecordUpdateOneRequiredWithoutErrorsNestedInputObjectSchema } from './ProductRecordUpdateOneRequiredWithoutErrorsNestedInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordErrorUpdateInput>;
export const ProductRecordErrorUpdateInputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), errorId: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), errorCode: z.union([z.lazy(() => ScrapingErrorCodeSchema),
    z.lazy(() => EnumScrapingErrorCodeFieldUpdateOperationsInputObjectSchema)]).optional(), field: z.union([z.lazy(() => ProductRecordDataFieldSchema),
    z.lazy(() => EnumProductRecordDataFieldFieldUpdateOperationsInputObjectSchema)]).optional(), message: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), record: z.lazy(() => ProductRecordUpdateOneRequiredWithoutErrorsNestedInputObjectSchema).optional()
}).strict() as SchemaType;
