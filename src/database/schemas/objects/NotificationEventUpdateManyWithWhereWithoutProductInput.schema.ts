/* eslint-disable */
import { z } from 'zod';
import { NotificationEventScalarWhereInputObjectSchema } from './NotificationEventScalarWhereInput.schema';
import { NotificationEventUpdateManyMutationInputObjectSchema } from './NotificationEventUpdateManyMutationInput.schema';
import { NotificationEventUncheckedUpdateManyWithoutProductInputObjectSchema } from './NotificationEventUncheckedUpdateManyWithoutProductInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventUpdateManyWithWhereWithoutProductInput>;
export const NotificationEventUpdateManyWithWhereWithoutProductInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventScalarWhereInputObjectSchema), data: z.union([z.lazy(() => NotificationEventUpdateManyMutationInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedUpdateManyWithoutProductInputObjectSchema)])
}).strict() as SchemaType;
