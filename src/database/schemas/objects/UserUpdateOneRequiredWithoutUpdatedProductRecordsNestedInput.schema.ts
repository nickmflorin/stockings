/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutUpdatedProductRecordsInputObjectSchema } from './UserCreateWithoutUpdatedProductRecordsInput.schema';
import { UserUncheckedCreateWithoutUpdatedProductRecordsInputObjectSchema } from './UserUncheckedCreateWithoutUpdatedProductRecordsInput.schema';
import { UserCreateOrConnectWithoutUpdatedProductRecordsInputObjectSchema } from './UserCreateOrConnectWithoutUpdatedProductRecordsInput.schema';
import { UserUpsertWithoutUpdatedProductRecordsInputObjectSchema } from './UserUpsertWithoutUpdatedProductRecordsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutUpdatedProductRecordsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutUpdatedProductRecordsInput.schema';
import { UserUpdateWithoutUpdatedProductRecordsInputObjectSchema } from './UserUpdateWithoutUpdatedProductRecordsInput.schema';
import { UserUncheckedUpdateWithoutUpdatedProductRecordsInputObjectSchema } from './UserUncheckedUpdateWithoutUpdatedProductRecordsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserUpdateOneRequiredWithoutUpdatedProductRecordsNestedInput>;
export const UserUpdateOneRequiredWithoutUpdatedProductRecordsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutUpdatedProductRecordsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutUpdatedProductRecordsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedProductRecordsInputObjectSchema).optional(), upsert: z.lazy(() => UserUpsertWithoutUpdatedProductRecordsInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUpdatedProductRecordsInputObjectSchema),
    z.lazy(() => UserUpdateWithoutUpdatedProductRecordsInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutUpdatedProductRecordsInputObjectSchema)]).optional()
}).strict() as SchemaType;
