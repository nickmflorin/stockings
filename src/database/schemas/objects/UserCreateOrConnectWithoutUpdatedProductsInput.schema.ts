/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUpdatedProductsInputObjectSchema } from './UserCreateWithoutUpdatedProductsInput.schema';
import { UserUncheckedCreateWithoutUpdatedProductsInputObjectSchema } from './UserUncheckedCreateWithoutUpdatedProductsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutUpdatedProductsInput>;
export const UserCreateOrConnectWithoutUpdatedProductsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => UserCreateWithoutUpdatedProductsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutUpdatedProductsInputObjectSchema)])
}).strict() as SchemaType;
