/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCCreateWithoutUserInputObjectSchema } from './PriceChangeEventCCreateWithoutUserInput.schema';
import { PriceChangeEventCUncheckedCreateWithoutUserInputObjectSchema } from './PriceChangeEventCUncheckedCreateWithoutUserInput.schema';
import { PriceChangeEventCCreateOrConnectWithoutUserInputObjectSchema } from './PriceChangeEventCCreateOrConnectWithoutUserInput.schema';
import { PriceChangeEventCCreateManyUserInputEnvelopeObjectSchema } from './PriceChangeEventCCreateManyUserInputEnvelope.schema';
import { PriceChangeEventCWhereUniqueInputObjectSchema } from './PriceChangeEventCWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCUncheckedCreateNestedManyWithoutUserInput>;
export const PriceChangeEventCUncheckedCreateNestedManyWithoutUserInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => PriceChangeEventCCreateWithoutUserInputObjectSchema),
    z.lazy(() => PriceChangeEventCCreateWithoutUserInputObjectSchema).array(),
    z.lazy(() => PriceChangeEventCUncheckedCreateWithoutUserInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => PriceChangeEventCCreateOrConnectWithoutUserInputObjectSchema),
    z.lazy(() => PriceChangeEventCCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), createMany: z.lazy(() => PriceChangeEventCCreateManyUserInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
