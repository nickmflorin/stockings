/* eslint-disable */
import { z } from 'zod';
import { NotificationEventWhereUniqueInputObjectSchema } from './NotificationEventWhereUniqueInput.schema';
import { NotificationEventUpdateWithoutUserInputObjectSchema } from './NotificationEventUpdateWithoutUserInput.schema';
import { NotificationEventUncheckedUpdateWithoutUserInputObjectSchema } from './NotificationEventUncheckedUpdateWithoutUserInput.schema';
import { NotificationEventCreateWithoutUserInputObjectSchema } from './NotificationEventCreateWithoutUserInput.schema';
import { NotificationEventUncheckedCreateWithoutUserInputObjectSchema } from './NotificationEventUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventUpsertWithWhereUniqueWithoutUserInput>;
export const NotificationEventUpsertWithWhereUniqueWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => NotificationEventUpdateWithoutUserInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedUpdateWithoutUserInputObjectSchema)]), create: z.union([z.lazy(() => NotificationEventCreateWithoutUserInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedCreateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
