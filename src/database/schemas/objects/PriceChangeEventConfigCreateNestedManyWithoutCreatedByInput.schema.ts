/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventConfigCreateWithoutCreatedByInputObjectSchema } from './PriceChangeEventConfigCreateWithoutCreatedByInput.schema';
import { PriceChangeEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema } from './PriceChangeEventConfigUncheckedCreateWithoutCreatedByInput.schema';
import { PriceChangeEventConfigCreateOrConnectWithoutCreatedByInputObjectSchema } from './PriceChangeEventConfigCreateOrConnectWithoutCreatedByInput.schema';
import { PriceChangeEventConfigCreateManyCreatedByInputEnvelopeObjectSchema } from './PriceChangeEventConfigCreateManyCreatedByInputEnvelope.schema';
import { PriceChangeEventConfigWhereUniqueInputObjectSchema } from './PriceChangeEventConfigWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigCreateNestedManyWithoutCreatedByInput>;
export const PriceChangeEventConfigCreateNestedManyWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => PriceChangeEventConfigCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigCreateWithoutCreatedByInputObjectSchema).array(),
    z.lazy(() => PriceChangeEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => PriceChangeEventConfigCreateOrConnectWithoutCreatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => PriceChangeEventConfigCreateManyCreatedByInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
