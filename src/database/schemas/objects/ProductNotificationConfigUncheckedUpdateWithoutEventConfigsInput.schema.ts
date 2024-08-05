/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { PriceChangeEventConfigUncheckedUpdateManyWithoutProductNotificationConfigNestedInputObjectSchema } from './PriceChangeEventConfigUncheckedUpdateManyWithoutProductNotificationConfigNestedInput.schema';
import { StatusChangeEventConfigUncheckedUpdateManyWithoutProductNotificationConfigNestedInputObjectSchema } from './StatusChangeEventConfigUncheckedUpdateManyWithoutProductNotificationConfigNestedInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigUncheckedUpdateWithoutEventConfigsInput>;
export const ProductNotificationConfigUncheckedUpdateWithoutEventConfigsInputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), createdById: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedById: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), productId: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), userId: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), delegate_aux_ProductNotificationConfig_eventConfigs_0: z.lazy(() => PriceChangeEventConfigUncheckedUpdateManyWithoutProductNotificationConfigNestedInputObjectSchema).optional(), delegate_aux_ProductNotificationConfig_eventConfigs_1: z.lazy(() => StatusChangeEventConfigUncheckedUpdateManyWithoutProductNotificationConfigNestedInputObjectSchema).optional()
}).strict() as SchemaType;
