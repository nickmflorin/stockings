/* eslint-disable */
import { z } from 'zod';
import { NotificationEventCreateWithoutUserInputObjectSchema } from './NotificationEventCreateWithoutUserInput.schema';
import { NotificationEventUncheckedCreateWithoutUserInputObjectSchema } from './NotificationEventUncheckedCreateWithoutUserInput.schema';
import { NotificationEventCreateOrConnectWithoutUserInputObjectSchema } from './NotificationEventCreateOrConnectWithoutUserInput.schema';
import { NotificationEventCreateManyUserInputEnvelopeObjectSchema } from './NotificationEventCreateManyUserInputEnvelope.schema';
import { NotificationEventWhereUniqueInputObjectSchema } from './NotificationEventWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventUncheckedCreateNestedManyWithoutUserInput>;
export const NotificationEventUncheckedCreateNestedManyWithoutUserInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => NotificationEventCreateWithoutUserInputObjectSchema),
    z.lazy(() => NotificationEventCreateWithoutUserInputObjectSchema).array(),
    z.lazy(() => NotificationEventUncheckedCreateWithoutUserInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => NotificationEventCreateOrConnectWithoutUserInputObjectSchema),
    z.lazy(() => NotificationEventCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), createMany: z.lazy(() => NotificationEventCreateManyUserInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => NotificationEventWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
