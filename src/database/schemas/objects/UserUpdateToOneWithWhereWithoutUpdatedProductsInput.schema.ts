/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutUpdatedProductsInputObjectSchema } from './UserUpdateWithoutUpdatedProductsInput.schema';
import { UserUncheckedUpdateWithoutUpdatedProductsInputObjectSchema } from './UserUncheckedUpdateWithoutUpdatedProductsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUpdatedProductsInput>;
export const UserUpdateToOneWithWhereWithoutUpdatedProductsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => UserUpdateWithoutUpdatedProductsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutUpdatedProductsInputObjectSchema)])
}).strict() as SchemaType;
