/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutUpdatedProductsInputObjectSchema } from './UserUpdateWithoutUpdatedProductsInput.schema';
import { UserUncheckedUpdateWithoutUpdatedProductsInputObjectSchema } from './UserUncheckedUpdateWithoutUpdatedProductsInput.schema';
import { UserCreateWithoutUpdatedProductsInputObjectSchema } from './UserCreateWithoutUpdatedProductsInput.schema';
import { UserUncheckedCreateWithoutUpdatedProductsInputObjectSchema } from './UserUncheckedCreateWithoutUpdatedProductsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutUpdatedProductsInput>;
export const UserUpsertWithoutUpdatedProductsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => UserUpdateWithoutUpdatedProductsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutUpdatedProductsInputObjectSchema)]), create: z.union([z.lazy(() => UserCreateWithoutUpdatedProductsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutUpdatedProductsInputObjectSchema)]), where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict() as SchemaType;
