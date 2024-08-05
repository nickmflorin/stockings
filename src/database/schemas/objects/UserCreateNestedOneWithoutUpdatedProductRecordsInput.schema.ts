/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutUpdatedProductRecordsInputObjectSchema } from './UserCreateWithoutUpdatedProductRecordsInput.schema';
import { UserUncheckedCreateWithoutUpdatedProductRecordsInputObjectSchema } from './UserUncheckedCreateWithoutUpdatedProductRecordsInput.schema';
import { UserCreateOrConnectWithoutUpdatedProductRecordsInputObjectSchema } from './UserCreateOrConnectWithoutUpdatedProductRecordsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutUpdatedProductRecordsInput>;
export const UserCreateNestedOneWithoutUpdatedProductRecordsInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutUpdatedProductRecordsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutUpdatedProductRecordsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedProductRecordsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
