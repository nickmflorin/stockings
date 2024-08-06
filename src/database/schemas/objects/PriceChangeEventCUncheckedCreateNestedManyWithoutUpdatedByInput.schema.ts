/* eslint-disable */
import { z } from 'zod';
import { PriceChangeEventCCreateWithoutUpdatedByInputObjectSchema } from './PriceChangeEventCCreateWithoutUpdatedByInput.schema';
import { PriceChangeEventCUncheckedCreateWithoutUpdatedByInputObjectSchema } from './PriceChangeEventCUncheckedCreateWithoutUpdatedByInput.schema';
import { PriceChangeEventCCreateOrConnectWithoutUpdatedByInputObjectSchema } from './PriceChangeEventCCreateOrConnectWithoutUpdatedByInput.schema';
import { PriceChangeEventCCreateManyUpdatedByInputEnvelopeObjectSchema } from './PriceChangeEventCCreateManyUpdatedByInputEnvelope.schema';
import { PriceChangeEventCWhereUniqueInputObjectSchema } from './PriceChangeEventCWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCUncheckedCreateNestedManyWithoutUpdatedByInput>;
export const PriceChangeEventCUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => PriceChangeEventCCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCCreateWithoutUpdatedByInputObjectSchema).array(),
    z.lazy(() => PriceChangeEventCUncheckedCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => PriceChangeEventCCreateOrConnectWithoutUpdatedByInputObjectSchema),
    z.lazy(() => PriceChangeEventCCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => PriceChangeEventCCreateManyUpdatedByInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema),
    z.lazy(() => PriceChangeEventCWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
