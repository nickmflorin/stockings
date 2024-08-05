/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigScalarWhereInputObjectSchema } from './NotificationEventConfigScalarWhereInput.schema';
import { NotificationEventConfigUpdateManyMutationInputObjectSchema } from './NotificationEventConfigUpdateManyMutationInput.schema';
import { NotificationEventConfigUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './NotificationEventConfigUncheckedUpdateManyWithoutCreatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigUpdateManyWithWhereWithoutCreatedByInput>;
export const NotificationEventConfigUpdateManyWithWhereWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventConfigScalarWhereInputObjectSchema), data: z.union([z.lazy(() => NotificationEventConfigUpdateManyMutationInputObjectSchema),
    z.lazy(() => NotificationEventConfigUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
