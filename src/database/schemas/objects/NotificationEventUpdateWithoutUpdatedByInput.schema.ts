/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';
import { EnumNotificationEventContentTypeFieldUpdateOperationsInputObjectSchema } from './EnumNotificationEventContentTypeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutCreatedNotificationEventsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutCreatedNotificationEventsNestedInput.schema';
import { ProductUpdateOneRequiredWithoutNotificationEventsNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutNotificationEventsNestedInput.schema';
import { UserUpdateOneRequiredWithoutNotificationEventsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutNotificationEventsNestedInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventUpdateWithoutUpdatedByInput>;
export const NotificationEventUpdateWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), contentType: z.union([z.lazy(() => NotificationEventContentTypeSchema),
    z.lazy(() => EnumNotificationEventContentTypeFieldUpdateOperationsInputObjectSchema)]).optional(), createdBy: z.lazy(() => UserUpdateOneRequiredWithoutCreatedNotificationEventsNestedInputObjectSchema).optional(), product: z.lazy(() => ProductUpdateOneRequiredWithoutNotificationEventsNestedInputObjectSchema).optional(), user: z.lazy(() => UserUpdateOneRequiredWithoutNotificationEventsNestedInputObjectSchema).optional()
}).strict() as SchemaType;
