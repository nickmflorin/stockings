/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventCreateWithoutProductInputObjectSchema } from './StatusChangeEventCreateWithoutProductInput.schema';
import { StatusChangeEventUncheckedCreateWithoutProductInputObjectSchema } from './StatusChangeEventUncheckedCreateWithoutProductInput.schema';
import { StatusChangeEventCreateOrConnectWithoutProductInputObjectSchema } from './StatusChangeEventCreateOrConnectWithoutProductInput.schema';
import { StatusChangeEventCreateManyProductInputEnvelopeObjectSchema } from './StatusChangeEventCreateManyProductInputEnvelope.schema';
import { StatusChangeEventWhereUniqueInputObjectSchema } from './StatusChangeEventWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventUncheckedCreateNestedManyWithoutProductInput>;
export const StatusChangeEventUncheckedCreateNestedManyWithoutProductInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => StatusChangeEventCreateWithoutProductInputObjectSchema),
    z.lazy(() => StatusChangeEventCreateWithoutProductInputObjectSchema).array(),
    z.lazy(() => StatusChangeEventUncheckedCreateWithoutProductInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => StatusChangeEventCreateOrConnectWithoutProductInputObjectSchema),
    z.lazy(() => StatusChangeEventCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(), createMany: z.lazy(() => StatusChangeEventCreateManyProductInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
