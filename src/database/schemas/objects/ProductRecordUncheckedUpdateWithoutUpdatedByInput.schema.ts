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
import { ProductRecordErrorUncheckedUpdateManyWithoutRecordNestedInputObjectSchema } from './ProductRecordErrorUncheckedUpdateManyWithoutRecordNestedInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordUncheckedUpdateWithoutUpdatedByInput>;
export const ProductRecordUncheckedUpdateWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), createdById: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), timestamp: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), productId: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), price: z.union([z.number(),
    z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), rawPrice: z.union([z.string(),
    z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), status: z.union([z.lazy(() => ProductStatusSchema),
    z.lazy(() => NullableEnumProductStatusFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), wasManuallyCreated: z.union([z.boolean(),
    z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(), manuallyChangedFields: z.union([z.lazy(() => ProductRecordUpdatemanuallyChangedFieldsInputObjectSchema),
    z.lazy(() => ProductRecordDataFieldSchema).array()]).optional(), errors: z.lazy(() => ProductRecordErrorUncheckedUpdateManyWithoutRecordNestedInputObjectSchema).optional()
}).strict() as SchemaType;
