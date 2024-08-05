/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutUpdatedProductRecordsInputObjectSchema } from './UserUpdateWithoutUpdatedProductRecordsInput.schema';
import { UserUncheckedUpdateWithoutUpdatedProductRecordsInputObjectSchema } from './UserUncheckedUpdateWithoutUpdatedProductRecordsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUpdatedProductRecordsInput>;
export const UserUpdateToOneWithWhereWithoutUpdatedProductRecordsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => UserUpdateWithoutUpdatedProductRecordsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutUpdatedProductRecordsInputObjectSchema)])
}).strict() as SchemaType;
