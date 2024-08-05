/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventConfigCreateWithoutProductNotificationConfigInputObjectSchema } from './StatusChangeEventConfigCreateWithoutProductNotificationConfigInput.schema';
import { StatusChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema } from './StatusChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInput.schema';
import { StatusChangeEventConfigCreateOrConnectWithoutProductNotificationConfigInputObjectSchema } from './StatusChangeEventConfigCreateOrConnectWithoutProductNotificationConfigInput.schema';
import { StatusChangeEventConfigCreateManyProductNotificationConfigInputEnvelopeObjectSchema } from './StatusChangeEventConfigCreateManyProductNotificationConfigInputEnvelope.schema';
import { StatusChangeEventConfigWhereUniqueInputObjectSchema } from './StatusChangeEventConfigWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigUncheckedCreateNestedManyWithoutProductNotificationConfigInput>;
export const StatusChangeEventConfigUncheckedCreateNestedManyWithoutProductNotificationConfigInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => StatusChangeEventConfigCreateWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigCreateWithoutProductNotificationConfigInputObjectSchema).array(),
    z.lazy(() => StatusChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => StatusChangeEventConfigCreateOrConnectWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigCreateOrConnectWithoutProductNotificationConfigInputObjectSchema).array()]).optional(), createMany: z.lazy(() => StatusChangeEventConfigCreateManyProductNotificationConfigInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
