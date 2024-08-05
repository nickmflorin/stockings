/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';
import { EnumNotificationEventConfigContentTypeFieldUpdateOperationsInputObjectSchema } from './EnumNotificationEventConfigContentTypeFieldUpdateOperationsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigUncheckedUpdateManyWithoutCreatedByInput>;
export const NotificationEventConfigUncheckedUpdateManyWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedById: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), productNotificationConfigId: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), contentType: z.union([z.lazy(() => NotificationEventConfigContentTypeSchema),
    z.lazy(() => EnumNotificationEventConfigContentTypeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict() as SchemaType;
