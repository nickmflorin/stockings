/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NotificationEventConfigUncheckedUpdateManyWithoutProductNotificationConfigNestedInputObjectSchema } from './NotificationEventConfigUncheckedUpdateManyWithoutProductNotificationConfigNestedInput.schema';
import { PriceChangeEventConfigUncheckedUpdateManyWithoutProductNotificationConfigNestedInputObjectSchema } from './PriceChangeEventConfigUncheckedUpdateManyWithoutProductNotificationConfigNestedInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUncheckedUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1Input>;
export const ProductNotificationConfigUncheckedUpdateWithoutDelegate_aux_ProductNotificationConfig_eventConfigs_1InputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), createdById: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedById: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), productId: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), userId: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), eventConfigs: z.lazy(() => NotificationEventConfigUncheckedUpdateManyWithoutProductNotificationConfigNestedInputObjectSchema).optional(), delegate_aux_ProductNotificationConfig_eventConfigs_0: z.lazy(() => PriceChangeEventConfigUncheckedUpdateManyWithoutProductNotificationConfigNestedInputObjectSchema).optional()
}).strict() as SchemaType;
