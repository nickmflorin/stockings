/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
import { NullableEnumProductStatusFieldUpdateOperationsInputObjectSchema } from './NullableEnumProductStatusFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ProductRecordUpdatemanuallyChangedFieldsInputObjectSchema } from './ProductRecordUpdatemanuallyChangedFieldsInput.schema';
import { ProductRecordDataFieldSchema } from '../enums/ProductRecordDataField.schema';
import { UserUpdateOneRequiredWithoutCreatedProductRecordsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutCreatedProductRecordsNestedInput.schema';
import { UserUpdateOneRequiredWithoutUpdatedProductRecordsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutUpdatedProductRecordsNestedInput.schema';
import { ProductUpdateOneRequiredWithoutRecordsNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutRecordsNestedInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordUpdateWithoutErrorsInput>;
export const ProductRecordUpdateWithoutErrorsInputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), timestamp: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), price: z.union([z.number(),
    z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), rawPrice: z.union([z.string(),
    z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), status: z.union([z.lazy(() => ProductStatusSchema),
    z.lazy(() => NullableEnumProductStatusFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), wasManuallyCreated: z.union([z.boolean(),
    z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(), manuallyChangedFields: z.union([z.lazy(() => ProductRecordUpdatemanuallyChangedFieldsInputObjectSchema),
    z.lazy(() => ProductRecordDataFieldSchema).array()]).optional(), createdBy: z.lazy(() => UserUpdateOneRequiredWithoutCreatedProductRecordsNestedInputObjectSchema).optional(), updatedBy: z.lazy(() => UserUpdateOneRequiredWithoutUpdatedProductRecordsNestedInputObjectSchema).optional(), product: z.lazy(() => ProductUpdateOneRequiredWithoutRecordsNestedInputObjectSchema).optional()
}).strict() as SchemaType;
