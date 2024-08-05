/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutCreatedProductRecordsInputObjectSchema } from './UserUpdateWithoutCreatedProductRecordsInput.schema';
import { UserUncheckedUpdateWithoutCreatedProductRecordsInputObjectSchema } from './UserUncheckedUpdateWithoutCreatedProductRecordsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatedProductRecordsInput>;
export const UserUpdateToOneWithWhereWithoutCreatedProductRecordsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => UserUpdateWithoutCreatedProductRecordsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutCreatedProductRecordsInputObjectSchema)])
}).strict() as SchemaType;
