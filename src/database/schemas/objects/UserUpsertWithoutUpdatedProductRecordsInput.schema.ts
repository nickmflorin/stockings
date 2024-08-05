/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutUpdatedProductRecordsInputObjectSchema } from './UserUpdateWithoutUpdatedProductRecordsInput.schema';
import { UserUncheckedUpdateWithoutUpdatedProductRecordsInputObjectSchema } from './UserUncheckedUpdateWithoutUpdatedProductRecordsInput.schema';
import { UserCreateWithoutUpdatedProductRecordsInputObjectSchema } from './UserCreateWithoutUpdatedProductRecordsInput.schema';
import { UserUncheckedCreateWithoutUpdatedProductRecordsInputObjectSchema } from './UserUncheckedCreateWithoutUpdatedProductRecordsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutUpdatedProductRecordsInput>;
export const UserUpsertWithoutUpdatedProductRecordsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => UserUpdateWithoutUpdatedProductRecordsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutUpdatedProductRecordsInputObjectSchema)]), create: z.union([z.lazy(() => UserCreateWithoutUpdatedProductRecordsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutUpdatedProductRecordsInputObjectSchema)]), where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict() as SchemaType;
