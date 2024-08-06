/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventCreateWithoutUpdatedByInputObjectSchema } from './StatusChangeEventCreateWithoutUpdatedByInput.schema';
import { StatusChangeEventUncheckedCreateWithoutUpdatedByInputObjectSchema } from './StatusChangeEventUncheckedCreateWithoutUpdatedByInput.schema';
import { StatusChangeEventCreateOrConnectWithoutUpdatedByInputObjectSchema } from './StatusChangeEventCreateOrConnectWithoutUpdatedByInput.schema';
import { StatusChangeEventCreateManyUpdatedByInputEnvelopeObjectSchema } from './StatusChangeEventCreateManyUpdatedByInputEnvelope.schema';
import { StatusChangeEventWhereUniqueInputObjectSchema } from './StatusChangeEventWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventCreateNestedManyWithoutUpdatedByInput>;
export const StatusChangeEventCreateNestedManyWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => StatusChangeEventCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventCreateWithoutUpdatedByInputObjectSchema).array(),
    z.lazy(() => StatusChangeEventUncheckedCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => StatusChangeEventCreateOrConnectWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => StatusChangeEventCreateManyUpdatedByInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
