/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutUpdatedProductsInputObjectSchema } from './UserCreateWithoutUpdatedProductsInput.schema';
import { UserUncheckedCreateWithoutUpdatedProductsInputObjectSchema } from './UserUncheckedCreateWithoutUpdatedProductsInput.schema';
import { UserCreateOrConnectWithoutUpdatedProductsInputObjectSchema } from './UserCreateOrConnectWithoutUpdatedProductsInput.schema';
import { UserUpsertWithoutUpdatedProductsInputObjectSchema } from './UserUpsertWithoutUpdatedProductsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutUpdatedProductsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutUpdatedProductsInput.schema';
import { UserUpdateWithoutUpdatedProductsInputObjectSchema } from './UserUpdateWithoutUpdatedProductsInput.schema';
import { UserUncheckedUpdateWithoutUpdatedProductsInputObjectSchema } from './UserUncheckedUpdateWithoutUpdatedProductsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserUpdateOneRequiredWithoutUpdatedProductsNestedInput>;
export const UserUpdateOneRequiredWithoutUpdatedProductsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutUpdatedProductsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutUpdatedProductsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedProductsInputObjectSchema).optional(), upsert: z.lazy(() => UserUpsertWithoutUpdatedProductsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUpdatedProductsInputObjectSchema),
    z.lazy(() => UserUpdateWithoutUpdatedProductsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutUpdatedProductsInputObjectSchema)]).optional()
}).strict() as SchemaType;
