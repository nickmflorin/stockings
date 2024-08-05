/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutCreatedProductsInputObjectSchema } from './UserUpdateWithoutCreatedProductsInput.schema';
import { UserUncheckedUpdateWithoutCreatedProductsInputObjectSchema } from './UserUncheckedUpdateWithoutCreatedProductsInput.schema';
import { UserCreateWithoutCreatedProductsInputObjectSchema } from './UserCreateWithoutCreatedProductsInput.schema';
import { UserUncheckedCreateWithoutCreatedProductsInputObjectSchema } from './UserUncheckedCreateWithoutCreatedProductsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutCreatedProductsInput>;
export const UserUpsertWithoutCreatedProductsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => UserUpdateWithoutCreatedProductsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutCreatedProductsInputObjectSchema)]), create: z.union([z.lazy(() => UserCreateWithoutCreatedProductsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutCreatedProductsInputObjectSchema)]), where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict() as SchemaType;
