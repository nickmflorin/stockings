/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutCreatedProductRecordsInputObjectSchema } from './UserUpdateWithoutCreatedProductRecordsInput.schema';
import { UserUncheckedUpdateWithoutCreatedProductRecordsInputObjectSchema } from './UserUncheckedUpdateWithoutCreatedProductRecordsInput.schema';
import { UserCreateWithoutCreatedProductRecordsInputObjectSchema } from './UserCreateWithoutCreatedProductRecordsInput.schema';
import { UserUncheckedCreateWithoutCreatedProductRecordsInputObjectSchema } from './UserUncheckedCreateWithoutCreatedProductRecordsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutCreatedProductRecordsInput>;
export const UserUpsertWithoutCreatedProductRecordsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => UserUpdateWithoutCreatedProductRecordsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutCreatedProductRecordsInputObjectSchema)]), create: z.union([z.lazy(() => UserCreateWithoutCreatedProductRecordsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutCreatedProductRecordsInputObjectSchema)]), where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict() as SchemaType;
