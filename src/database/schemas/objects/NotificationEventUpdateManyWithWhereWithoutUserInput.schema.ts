/* eslint-disable */
import { z } from 'zod';
import { NotificationEventScalarWhereInputObjectSchema } from './NotificationEventScalarWhereInput.schema';
import { NotificationEventUpdateManyMutationInputObjectSchema } from './NotificationEventUpdateManyMutationInput.schema';
import { NotificationEventUncheckedUpdateManyWithoutUserInputObjectSchema } from './NotificationEventUncheckedUpdateManyWithoutUserInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventUpdateManyWithWhereWithoutUserInput>;
export const NotificationEventUpdateManyWithWhereWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventScalarWhereInputObjectSchema), data: z.union([z.lazy(() => NotificationEventUpdateManyMutationInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
