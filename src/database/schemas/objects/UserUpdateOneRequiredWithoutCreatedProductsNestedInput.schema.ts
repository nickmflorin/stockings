/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutCreatedProductsInputObjectSchema } from './UserCreateWithoutCreatedProductsInput.schema';
import { UserUncheckedCreateWithoutCreatedProductsInputObjectSchema } from './UserUncheckedCreateWithoutCreatedProductsInput.schema';
import { UserCreateOrConnectWithoutCreatedProductsInputObjectSchema } from './UserCreateOrConnectWithoutCreatedProductsInput.schema';
import { UserUpsertWithoutCreatedProductsInputObjectSchema } from './UserUpsertWithoutCreatedProductsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutCreatedProductsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutCreatedProductsInput.schema';
import { UserUpdateWithoutCreatedProductsInputObjectSchema } from './UserUpdateWithoutCreatedProductsInput.schema';
import { UserUncheckedUpdateWithoutCreatedProductsInputObjectSchema } from './UserUncheckedUpdateWithoutCreatedProductsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserUpdateOneRequiredWithoutCreatedProductsNestedInput>;
export const UserUpdateOneRequiredWithoutCreatedProductsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutCreatedProductsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutCreatedProductsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedProductsInputObjectSchema).optional(), upsert: z.lazy(() => UserUpsertWithoutCreatedProductsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCreatedProductsInputObjectSchema),
    z.lazy(() => UserUpdateWithoutCreatedProductsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutCreatedProductsInputObjectSchema)]).optional()
}).strict() as SchemaType;
