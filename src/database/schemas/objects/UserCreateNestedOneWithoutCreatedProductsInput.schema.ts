/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutCreatedProductsInputObjectSchema } from './UserCreateWithoutCreatedProductsInput.schema';
import { UserUncheckedCreateWithoutCreatedProductsInputObjectSchema } from './UserUncheckedCreateWithoutCreatedProductsInput.schema';
import { UserCreateOrConnectWithoutCreatedProductsInputObjectSchema } from './UserCreateOrConnectWithoutCreatedProductsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutCreatedProductsInput>;
export const UserCreateNestedOneWithoutCreatedProductsInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutCreatedProductsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutCreatedProductsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedProductsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
