/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventConfigCreateWithoutCreatedByInputObjectSchema } from './StatusChangeEventConfigCreateWithoutCreatedByInput.schema';
import { StatusChangeEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema } from './StatusChangeEventConfigUncheckedCreateWithoutCreatedByInput.schema';
import { StatusChangeEventConfigCreateOrConnectWithoutCreatedByInputObjectSchema } from './StatusChangeEventConfigCreateOrConnectWithoutCreatedByInput.schema';
import { StatusChangeEventConfigCreateManyCreatedByInputEnvelopeObjectSchema } from './StatusChangeEventConfigCreateManyCreatedByInputEnvelope.schema';
import { StatusChangeEventConfigWhereUniqueInputObjectSchema } from './StatusChangeEventConfigWhereUniqueInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigUncheckedCreateNestedManyWithoutCreatedByInput>;
export const StatusChangeEventConfigUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => StatusChangeEventConfigCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigCreateWithoutCreatedByInputObjectSchema).array(),
    z.lazy(() => StatusChangeEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => StatusChangeEventConfigCreateOrConnectWithoutCreatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(), createMany: z.lazy(() => StatusChangeEventConfigCreateManyCreatedByInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
