/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
import { NullableEnumProductStatusFieldUpdateOperationsInputObjectSchema } from './NullableEnumProductStatusFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { EnumProductCategoryFieldUpdateOperationsInputObjectSchema } from './EnumProductCategoryFieldUpdateOperationsInput.schema';
import { ProductUpdatesubCategoriesInputObjectSchema } from './ProductUpdatesubCategoriesInput.schema';
import { ProductSubCategorySchema } from '../enums/ProductSubCategory.schema';
import { ProductRecordUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './ProductRecordUncheckedUpdateManyWithoutProductNestedInput.schema';
import { NotificationEventUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './NotificationEventUncheckedUpdateManyWithoutProductNestedInput.schema';
import { PriceChangeEventCUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './PriceChangeEventCUncheckedUpdateManyWithoutProductNestedInput.schema';
import { StatusChangeEventUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './StatusChangeEventUncheckedUpdateManyWithoutProductNestedInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductUncheckedUpdateWithoutUpdatedByInput>;
export const ProductUncheckedUpdateWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), createdById: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), name: z.union([z.string(),
    z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), slug: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), code: z.union([z.string(),
    z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), imageSrc: z.union([z.string(),
    z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), status: z.union([z.lazy(() => ProductStatusSchema),
    z.lazy(() => NullableEnumProductStatusFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), statusRecordedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), price: z.union([z.number(),
    z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), priceRecordedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), category: z.union([z.lazy(() => ProductCategorySchema),
    z.lazy(() => EnumProductCategoryFieldUpdateOperationsInputObjectSchema)]).optional(), subCategories: z.union([z.lazy(() => ProductUpdatesubCategoriesInputObjectSchema),
    z.lazy(() => ProductSubCategorySchema).array()]).optional(), records: z.lazy(() => ProductRecordUncheckedUpdateManyWithoutProductNestedInputObjectSchema).optional(), notificationEvents: z.lazy(() => NotificationEventUncheckedUpdateManyWithoutProductNestedInputObjectSchema).optional(), delegate_aux_Product_notificationEvents_PriceChange_0: z.lazy(() => PriceChangeEventCUncheckedUpdateManyWithoutProductNestedInputObjectSchema).optional(), delegate_aux_Product_notificationEvents_StatusChang_0: z.lazy(() => StatusChangeEventUncheckedUpdateManyWithoutProductNestedInputObjectSchema).optional()
}).strict() as SchemaType;
