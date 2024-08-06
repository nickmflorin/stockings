/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventCreateWithoutCreatedByInputObjectSchema } from './StatusChangeEventCreateWithoutCreatedByInput.schema';
import { StatusChangeEventUncheckedCreateWithoutCreatedByInputObjectSchema } from './StatusChangeEventUncheckedCreateWithoutCreatedByInput.schema';
import { StatusChangeEventCreateOrConnectWithoutCreatedByInputObjectSchema } from './StatusChangeEventCreateOrConnectWithoutCreatedByInput.schema';
import { StatusChangeEventCreateManyCreatedByInputEnvelopeObjectSchema } from './StatusChangeEventCreateManyCreatedByInputEnvelope.schema';
import { StatusChangeEventWhereUniqueInputObjectSchema } from './StatusChangeEventWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventUncheckedCreateNestedManyWithoutCreatedByInput>;
export const StatusChangeEventUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => StatusChangeEventCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventCreateWithoutCreatedByInputObjectSchema).array(),
    z.lazy(() => StatusChangeEventUncheckedCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => StatusChangeEventCreateOrConnectWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => StatusChangeEventCreateManyCreatedByInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
