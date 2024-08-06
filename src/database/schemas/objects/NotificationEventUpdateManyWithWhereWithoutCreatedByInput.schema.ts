/* eslint-disable */
import { z } from 'zod';
import { NotificationEventScalarWhereInputObjectSchema } from './NotificationEventScalarWhereInput.schema';
import { NotificationEventUpdateManyMutationInputObjectSchema } from './NotificationEventUpdateManyMutationInput.schema';
import { NotificationEventUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './NotificationEventUncheckedUpdateManyWithoutCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventUpdateManyWithWhereWithoutCreatedByInput>;
export const NotificationEventUpdateManyWithWhereWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventScalarWhereInputObjectSchema), data: z.union([z.lazy(() => NotificationEventUpdateManyMutationInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict() as SchemaType;
