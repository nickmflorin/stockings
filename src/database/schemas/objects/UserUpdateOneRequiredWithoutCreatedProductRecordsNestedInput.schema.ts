/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutCreatedProductRecordsInputObjectSchema } from './UserCreateWithoutCreatedProductRecordsInput.schema';
import { UserUncheckedCreateWithoutCreatedProductRecordsInputObjectSchema } from './UserUncheckedCreateWithoutCreatedProductRecordsInput.schema';
import { UserCreateOrConnectWithoutCreatedProductRecordsInputObjectSchema } from './UserCreateOrConnectWithoutCreatedProductRecordsInput.schema';
import { UserUpsertWithoutCreatedProductRecordsInputObjectSchema } from './UserUpsertWithoutCreatedProductRecordsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutCreatedProductRecordsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutCreatedProductRecordsInput.schema';
import { UserUpdateWithoutCreatedProductRecordsInputObjectSchema } from './UserUpdateWithoutCreatedProductRecordsInput.schema';
import { UserUncheckedUpdateWithoutCreatedProductRecordsInputObjectSchema } from './UserUncheckedUpdateWithoutCreatedProductRecordsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserUpdateOneRequiredWithoutCreatedProductRecordsNestedInput>;
export const UserUpdateOneRequiredWithoutCreatedProductRecordsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutCreatedProductRecordsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutCreatedProductRecordsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedProductRecordsInputObjectSchema).optional(), upsert: z.lazy(() => UserUpsertWithoutCreatedProductRecordsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCreatedProductRecordsInputObjectSchema),
    z.lazy(() => UserUpdateWithoutCreatedProductRecordsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutCreatedProductRecordsInputObjectSchema)]).optional()
}).strict() as SchemaType;
