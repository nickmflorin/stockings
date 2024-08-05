/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';
import { EnumNotificationEventConfigContentTypeFieldUpdateOperationsInputObjectSchema } from './EnumNotificationEventConfigContentTypeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutCreatedNotificationEventConfigsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutCreatedNotificationEventConfigsNestedInput.schema';
import { UserUpdateOneRequiredWithoutUpdatedNotificationEventConfigsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutUpdatedNotificationEventConfigsNestedInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigUpdateWithoutProductNotificationConfigInput>;
export const NotificationEventConfigUpdateWithoutProductNotificationConfigInputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), contentType: z.union([z.lazy(() => NotificationEventConfigContentTypeSchema),
    z.lazy(() => EnumNotificationEventConfigContentTypeFieldUpdateOperationsInputObjectSchema)]).optional(), createdBy: z.lazy(() => UserUpdateOneRequiredWithoutCreatedNotificationEventConfigsNestedInputObjectSchema).optional(), updatedBy: z.lazy(() => UserUpdateOneRequiredWithoutUpdatedNotificationEventConfigsNestedInputObjectSchema).optional()
}).strict() as SchemaType;
