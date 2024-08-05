/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutCreatedProductsInputObjectSchema } from './UserUpdateWithoutCreatedProductsInput.schema';
import { UserUncheckedUpdateWithoutCreatedProductsInputObjectSchema } from './UserUncheckedUpdateWithoutCreatedProductsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatedProductsInput>;
export const UserUpdateToOneWithWhereWithoutCreatedProductsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => UserUpdateWithoutCreatedProductsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutCreatedProductsInputObjectSchema)])
}).strict() as SchemaType;
