/* eslint-disable */
import { z } from 'zod';
import { NotificationEventCreateWithoutProductInputObjectSchema } from './NotificationEventCreateWithoutProductInput.schema';
import { NotificationEventUncheckedCreateWithoutProductInputObjectSchema } from './NotificationEventUncheckedCreateWithoutProductInput.schema';
import { NotificationEventCreateOrConnectWithoutProductInputObjectSchema } from './NotificationEventCreateOrConnectWithoutProductInput.schema';
import { NotificationEventCreateManyProductInputEnvelopeObjectSchema } from './NotificationEventCreateManyProductInputEnvelope.schema';
import { NotificationEventWhereUniqueInputObjectSchema } from './NotificationEventWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventCreateNestedManyWithoutProductInput>;
export const NotificationEventCreateNestedManyWithoutProductInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => NotificationEventCreateWithoutProductInputObjectSchema),
    z.lazy(() => NotificationEventCreateWithoutProductInputObjectSchema).array(),
    z.lazy(() => NotificationEventUncheckedCreateWithoutProductInputObjectSchema),
    z.lazy(() => NotificationEventUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => NotificationEventCreateOrConnectWithoutProductInputObjectSchema),
    z.lazy(() => NotificationEventCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(), createMany: z.lazy(() => NotificationEventCreateManyProductInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => NotificationEventWhereUniqueInputObjectSchema),
    z.lazy(() => NotificationEventWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
