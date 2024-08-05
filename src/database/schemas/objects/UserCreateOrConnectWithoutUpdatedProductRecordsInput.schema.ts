/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUpdatedProductRecordsInputObjectSchema } from './UserCreateWithoutUpdatedProductRecordsInput.schema';
import { UserUncheckedCreateWithoutUpdatedProductRecordsInputObjectSchema } from './UserUncheckedCreateWithoutUpdatedProductRecordsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutUpdatedProductRecordsInput>;
export const UserCreateOrConnectWithoutUpdatedProductRecordsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => UserCreateWithoutUpdatedProductRecordsInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutUpdatedProductRecordsInputObjectSchema)])
}).strict() as SchemaType;
