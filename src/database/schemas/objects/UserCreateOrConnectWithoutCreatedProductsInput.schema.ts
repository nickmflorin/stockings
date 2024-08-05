/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCreatedProductsInputObjectSchema } from './UserCreateWithoutCreatedProductsInput.schema';
import { UserUncheckedCreateWithoutCreatedProductsInputObjectSchema } from './UserUncheckedCreateWithoutCreatedProductsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutCreatedProductsInput>;
export const UserCreateOrConnectWithoutCreatedProductsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => UserCreateWithoutCreatedProductsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutCreatedProductsInputObjectSchema)])
}).strict() as SchemaType;
