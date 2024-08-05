
/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@zenstackhq/runtime/models';

;
import { UserSelectObjectSchema } from '../objects/UserSelect.schema';
import { UserIncludeObjectSchema } from '../objects/UserInclude.schema';
import { UserWhereUniqueInputObjectSchema } from '../objects/UserWhereUniqueInput.schema';
import { UserWhereInputObjectSchema } from '../objects/UserWhereInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from '../objects/UserOrderByWithRelationInput.schema';
import { UserScalarFieldEnumSchema } from '../enums/UserScalarFieldEnum.schema';
import { UserCreateInputObjectSchema } from '../objects/UserCreateInput.schema';
import { UserUncheckedCreateInputObjectSchema } from '../objects/UserUncheckedCreateInput.schema';
import { UserCreateManyInputObjectSchema } from '../objects/UserCreateManyInput.schema';
import { UserUpdateInputObjectSchema } from '../objects/UserUpdateInput.schema';
import { UserUncheckedUpdateInputObjectSchema } from '../objects/UserUncheckedUpdateInput.schema';
import { UserUpdateManyMutationInputObjectSchema } from '../objects/UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyInputObjectSchema } from '../objects/UserUncheckedUpdateManyInput.schema';
import { UserCountAggregateInputObjectSchema } from '../objects/UserCountAggregateInput.schema';
import { UserMinAggregateInputObjectSchema } from '../objects/UserMinAggregateInput.schema';
import { UserMaxAggregateInputObjectSchema } from '../objects/UserMaxAggregateInput.schema';
import { UserOrderByWithAggregationInputObjectSchema } from '../objects/UserOrderByWithAggregationInput.schema';
import { UserScalarWhereWithAggregatesInputObjectSchema } from '../objects/UserScalarWhereWithAggregatesInput.schema'

type UserInputSchemaType = {
    findUnique: z.ZodType<Prisma.UserFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.UserFindFirstArgs>,
    findMany: z.ZodType<Prisma.UserFindManyArgs>,
    create: z.ZodType<Prisma.UserCreateArgs>,
    createMany: z.ZodType<Prisma.UserCreateManyArgs>,
    delete: z.ZodType<Prisma.UserDeleteArgs>,
    deleteMany: z.ZodType<Prisma.UserDeleteManyArgs>,
    update: z.ZodType<Prisma.UserUpdateArgs>,
    updateMany: z.ZodType<Prisma.UserUpdateManyArgs>,
    upsert: z.ZodType<Prisma.UserUpsertArgs>,
    aggregate: z.ZodType<Prisma.UserAggregateArgs>,
    groupBy: z.ZodType<Prisma.UserGroupByArgs>,
    count: z.ZodType<Prisma.UserCountArgs>
}

export const UserInputSchema = {
    findUnique: z.object({ select: z.lazy(() => UserSelectObjectSchema.optional()), include: z.lazy(() => UserIncludeObjectSchema.optional()), where: UserWhereUniqueInputObjectSchema }), findFirst: z.object({ select: z.lazy(() => UserSelectObjectSchema.optional()), include: z.lazy(() => UserIncludeObjectSchema.optional()), where: UserWhereInputObjectSchema.optional(), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(UserScalarFieldEnumSchema).optional() }), findMany: z.object({ select: z.lazy(() => UserSelectObjectSchema.optional()), include: z.lazy(() => UserIncludeObjectSchema.optional()), where: UserWhereInputObjectSchema.optional(), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(UserScalarFieldEnumSchema).optional() }), create: z.object({ select: z.lazy(() => UserSelectObjectSchema.optional()), include: z.lazy(() => UserIncludeObjectSchema.optional()), data: z.union([UserCreateInputObjectSchema, UserUncheckedCreateInputObjectSchema]) }), createMany: z.object({ data: z.union([UserCreateManyInputObjectSchema, z.array(UserCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }), 'delete': z.object({ select: z.lazy(() => UserSelectObjectSchema.optional()), include: z.lazy(() => UserIncludeObjectSchema.optional()), where: UserWhereUniqueInputObjectSchema }), deleteMany: z.object({ where: UserWhereInputObjectSchema.optional() }), update: z.object({ select: z.lazy(() => UserSelectObjectSchema.optional()), include: z.lazy(() => UserIncludeObjectSchema.optional()), data: z.union([UserUpdateInputObjectSchema, UserUncheckedUpdateInputObjectSchema]), where: UserWhereUniqueInputObjectSchema }), updateMany: z.object({ data: z.union([UserUpdateManyMutationInputObjectSchema, UserUncheckedUpdateManyInputObjectSchema]), where: UserWhereInputObjectSchema.optional() }), upsert: z.object({ select: z.lazy(() => UserSelectObjectSchema.optional()), include: z.lazy(() => UserIncludeObjectSchema.optional()), where: UserWhereUniqueInputObjectSchema, create: z.union([UserCreateInputObjectSchema, UserUncheckedCreateInputObjectSchema]), update: z.union([UserUpdateInputObjectSchema, UserUncheckedUpdateInputObjectSchema]) }), aggregate: z.object({ where: UserWhereInputObjectSchema.optional(), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), UserCountAggregateInputObjectSchema]).optional(), _min: UserMinAggregateInputObjectSchema.optional(), _max: UserMaxAggregateInputObjectSchema.optional() }), groupBy: z.object({ where: UserWhereInputObjectSchema.optional(), orderBy: z.union([UserOrderByWithAggregationInputObjectSchema, UserOrderByWithAggregationInputObjectSchema.array()]).optional(), having: UserScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(UserScalarFieldEnumSchema), _count: z.union([z.literal(true), UserCountAggregateInputObjectSchema]).optional(), _min: UserMinAggregateInputObjectSchema.optional(), _max: UserMaxAggregateInputObjectSchema.optional() }), count: z.object({ where: UserWhereInputObjectSchema.optional(), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(UserScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), UserCountAggregateInputObjectSchema]).optional() })
} as UserInputSchemaType;
