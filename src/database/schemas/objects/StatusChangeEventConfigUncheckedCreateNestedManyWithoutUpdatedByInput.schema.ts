/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventConfigCreateWithoutUpdatedByInputObjectSchema } from './StatusChangeEventConfigCreateWithoutUpdatedByInput.schema';
import { StatusChangeEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema } from './StatusChangeEventConfigUncheckedCreateWithoutUpdatedByInput.schema';
import { StatusChangeEventConfigCreateOrConnectWithoutUpdatedByInputObjectSchema } from './StatusChangeEventConfigCreateOrConnectWithoutUpdatedByInput.schema';
import { StatusChangeEventConfigCreateManyUpdatedByInputEnvelopeObjectSchema } from './StatusChangeEventConfigCreateManyUpdatedByInputEnvelope.schema';
import { StatusChangeEventConfigWhereUniqueInputObjectSchema } from './StatusChangeEventConfigWhereUniqueInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigUncheckedCreateNestedManyWithoutUpdatedByInput>;
export const StatusChangeEventConfigUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => StatusChangeEventConfigCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigCreateWithoutUpdatedByInputObjectSchema).array(),
    z.lazy(() => StatusChangeEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => StatusChangeEventConfigCreateOrConnectWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => StatusChangeEventConfigCreateManyUpdatedByInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
