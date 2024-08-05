/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventConfigCreateWithoutProductNotificationConfigInputObjectSchema } from './PriceChangeEventConfigCreateWithoutProductNotificationConfigInput.schema';
import { PriceChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema } from './PriceChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInput.schema';
import { PriceChangeEventConfigCreateOrConnectWithoutProductNotificationConfigInputObjectSchema } from './PriceChangeEventConfigCreateOrConnectWithoutProductNotificationConfigInput.schema';
import { PriceChangeEventConfigCreateManyProductNotificationConfigInputEnvelopeObjectSchema } from './PriceChangeEventConfigCreateManyProductNotificationConfigInputEnvelope.schema';
import { PriceChangeEventConfigWhereUniqueInputObjectSchema } from './PriceChangeEventConfigWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigCreateNestedManyWithoutProductNotificationConfigInput>;
export const PriceChangeEventConfigCreateNestedManyWithoutProductNotificationConfigInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => PriceChangeEventConfigCreateWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigCreateWithoutProductNotificationConfigInputObjectSchema).array(),
    z.lazy(() => PriceChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUncheckedCreateWithoutProductNotificationConfigInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => PriceChangeEventConfigCreateOrConnectWithoutProductNotificationConfigInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigCreateOrConnectWithoutProductNotificationConfigInputObjectSchema).array()]).optional(), createMany: z.lazy(() => PriceChangeEventConfigCreateManyProductNotificationConfigInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
