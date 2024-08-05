/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventConfigCreateWithoutUpdatedByInputObjectSchema } from './PriceChangeEventConfigCreateWithoutUpdatedByInput.schema';
import { PriceChangeEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema } from './PriceChangeEventConfigUncheckedCreateWithoutUpdatedByInput.schema';
import { PriceChangeEventConfigCreateOrConnectWithoutUpdatedByInputObjectSchema } from './PriceChangeEventConfigCreateOrConnectWithoutUpdatedByInput.schema';
import { PriceChangeEventConfigCreateManyUpdatedByInputEnvelopeObjectSchema } from './PriceChangeEventConfigCreateManyUpdatedByInputEnvelope.schema';
import { PriceChangeEventConfigWhereUniqueInputObjectSchema } from './PriceChangeEventConfigWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigUncheckedCreateNestedManyWithoutUpdatedByInput>;
export const PriceChangeEventConfigUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => PriceChangeEventConfigCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigCreateWithoutUpdatedByInputObjectSchema).array(),
    z.lazy(() => PriceChangeEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => PriceChangeEventConfigCreateOrConnectWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => PriceChangeEventConfigCreateManyUpdatedByInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
