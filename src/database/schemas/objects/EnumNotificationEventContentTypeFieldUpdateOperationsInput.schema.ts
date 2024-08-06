/* eslint-disable */
import { z } from 'zod';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.EnumNotificationEventContentTypeFieldUpdateOperationsInput>;
export const EnumNotificationEventContentTypeFieldUpdateOperationsInputObjectSchema: SchemaType = z.object({
    set: z.lazy(() => NotificationEventContentTypeSchema).optional()
}).strict() as SchemaType;
