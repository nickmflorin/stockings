/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventConfigCreateWithoutProductNotificationConfigInputObjectSchema } from './PriceChangeEventConfigCreateWithoutProductNotificationConfigInput.schema';
import { PriceChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema } from './PriceChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInput.schema';
import { PriceChangeEventConfigCreateOrConnectWithoutProductNotificationConfigInputObjectSchema } from './PriceChangeEventConfigCreateOrConnectWithoutProductNotificationConfigInput.schema';
import { PriceChangeEventConfigUpsertWithWhereUniqueWithoutProductNotificationConfigInputObjectSchema } from './PriceChangeEventConfigUpsertWithWhereUniqueWithoutProductNotificationConfigInput.schema';
import { PriceChangeEventConfigCreateManyProductNotificationConfigInputEnvelopeObjectSchema } from './PriceChangeEventConfigCreateManyProductNotificationConfigInputEnvelope.schema';
import { PriceChangeEventConfigWhereUniqueInputObjectSchema } from './PriceChangeEventConfigWhereUniqueInput.schema';
import { PriceChangeEventConfigUpdateWithWhereUniqueWithoutProductNotificationConfigInputObjectSchema } from './PriceChangeEventConfigUpdateWithWhereUniqueWithoutProductNotificationConfigInput.schema';
import { PriceChangeEventConfigUpdateManyWithWhereWithoutProductNotificationConfigInputObjectSchema } from './PriceChangeEventConfigUpdateManyWithWhereWithoutProductNotificationConfigInput.schema';
import { PriceChangeEventConfigScalarWhereInputObjectSchema } from './PriceChangeEventConfigScalarWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigUpdateManyWithoutProductNotificationConfigNestedInput>;
export const PriceChangeEventConfigUpdateManyWithoutProductNotificationConfigNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => PriceChangeEventConfigCreateWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigCreateWithoutProductNotificationConfigInputObjectSchema).array(),
    z.lazy(() => PriceChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => PriceChangeEventConfigCreateOrConnectWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigCreateOrConnectWithoutProductNotificationConfigInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => PriceChangeEventConfigUpsertWithWhereUniqueWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUpsertWithWhereUniqueWithoutProductNotificationConfigInputObjectSchema).array()]).optional(), createMany: z.lazy(() => PriceChangeEventConfigCreateManyProductNotificationConfigInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => PriceChangeEventConfigUpdateWithWhereUniqueWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUpdateWithWhereUniqueWithoutProductNotificationConfigInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => PriceChangeEventConfigUpdateManyWithWhereWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUpdateManyWithWhereWithoutProductNotificationConfigInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => PriceChangeEventConfigScalarWhereInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
