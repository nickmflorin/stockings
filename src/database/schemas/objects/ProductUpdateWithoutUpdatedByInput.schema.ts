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
import { UserUpdateOneRequiredWithoutCreatedProductsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutCreatedProductsNestedInput.schema';
import { ProductRecordUpdateManyWithoutProductNestedInputObjectSchema } from './ProductRecordUpdateManyWithoutProductNestedInput.schema';
import { NotificationEventUpdateManyWithoutProductNestedInputObjectSchema } from './NotificationEventUpdateManyWithoutProductNestedInput.schema';
import { PriceChangeEventCUpdateManyWithoutProductNestedInputObjectSchema } from './PriceChangeEventCUpdateManyWithoutProductNestedInput.schema';
import { StatusChangeEventUpdateManyWithoutProductNestedInputObjectSchema } from './StatusChangeEventUpdateManyWithoutProductNestedInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductUpdateWithoutUpdatedByInput>;
export const ProductUpdateWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
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
    z.lazy(() => ProductSubCategorySchema).array()]).optional(), createdBy: z.lazy(() => UserUpdateOneRequiredWithoutCreatedProductsNestedInputObjectSchema).optional(), records: z.lazy(() => ProductRecordUpdateManyWithoutProductNestedInputObjectSchema).optional(), notificationEvents: z.lazy(() => NotificationEventUpdateManyWithoutProductNestedInputObjectSchema).optional(), delegate_aux_Product_notificationEvents_PriceChange_0: z.lazy(() => PriceChangeEventCUpdateManyWithoutProductNestedInputObjectSchema).optional(), delegate_aux_Product_notificationEvents_StatusChang_0: z.lazy(() => StatusChangeEventUpdateManyWithoutProductNestedInputObjectSchema).optional()
}).strict() as SchemaType;
