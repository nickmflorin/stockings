/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.EnumNotificationEventConfigContentTypeFieldUpdateOperationsInput>;
export const EnumNotificationEventConfigContentTypeFieldUpdateOperationsInputObjectSchema: SchemaType = z.object({
    set: z.lazy(() => NotificationEventConfigContentTypeSchema).optional()
}).strict() as SchemaType;
