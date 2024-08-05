/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCreatedProductRecordsInputObjectSchema } from './UserCreateWithoutCreatedProductRecordsInput.schema';
import { UserUncheckedCreateWithoutCreatedProductRecordsInputObjectSchema } from './UserUncheckedCreateWithoutCreatedProductRecordsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutCreatedProductRecordsInput>;
export const UserCreateOrConnectWithoutCreatedProductRecordsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => UserCreateWithoutCreatedProductRecordsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutCreatedProductRecordsInputObjectSchema)])
}).strict() as SchemaType;
