/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutCreatedProductRecordsInputObjectSchema } from './UserCreateWithoutCreatedProductRecordsInput.schema';
import { UserUncheckedCreateWithoutCreatedProductRecordsInputObjectSchema } from './UserUncheckedCreateWithoutCreatedProductRecordsInput.schema';
import { UserCreateOrConnectWithoutCreatedProductRecordsInputObjectSchema } from './UserCreateOrConnectWithoutCreatedProductRecordsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutCreatedProductRecordsInput>;
export const UserCreateNestedOneWithoutCreatedProductRecordsInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutCreatedProductRecordsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutCreatedProductRecordsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedProductRecordsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
