/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutUpdatedProductsInputObjectSchema } from './UserCreateWithoutUpdatedProductsInput.schema';
import { UserUncheckedCreateWithoutUpdatedProductsInputObjectSchema } from './UserUncheckedCreateWithoutUpdatedProductsInput.schema';
import { UserCreateOrConnectWithoutUpdatedProductsInputObjectSchema } from './UserCreateOrConnectWithoutUpdatedProductsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutUpdatedProductsInput>;
export const UserCreateNestedOneWithoutUpdatedProductsInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutUpdatedProductsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutUpdatedProductsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedProductsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
