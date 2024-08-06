/* eslint-disable */
import { z } from 'zod';
import { NotificationEventWhereUniqueInputObjectSchema } from './NotificationEventWhereUniqueInput.schema';
import { NotificationEventUpdateWithoutUserInputObjectSchema } from './NotificationEventUpdateWithoutUserInput.schema';
import { NotificationEventUncheckedUpdateWithoutUserInputObjectSchema } from './NotificationEventUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventUpdateWithWhereUniqueWithoutUserInput>;
export const NotificationEventUpdateWithWhereUniqueWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => NotificationEventUpdateWithoutUserInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
