
/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '../../../../generated/models';

;
import { NotificationEventConfigSelectObjectSchema } from '../objects/NotificationEventConfigSelect.schema';
import { NotificationEventConfigIncludeObjectSchema } from '../objects/NotificationEventConfigInclude.schema';
import { NotificationEventConfigWhereUniqueInputObjectSchema } from '../objects/NotificationEventConfigWhereUniqueInput.schema';
import { NotificationEventConfigWhereInputObjectSchema } from '../objects/NotificationEventConfigWhereInput.schema';
import { NotificationEventConfigOrderByWithRelationInputObjectSchema } from '../objects/NotificationEventConfigOrderByWithRelationInput.schema';
import { NotificationEventConfigScalarFieldEnumSchema } from '../enums/NotificationEventConfigScalarFieldEnum.schema';
import { NotificationEventConfigCreateInputObjectSchema } from '../objects/NotificationEventConfigCreateInput.schema';
import { NotificationEventConfigUncheckedCreateInputObjectSchema } from '../objects/NotificationEventConfigUncheckedCreateInput.schema';
import { NotificationEventConfigCreateManyInputObjectSchema } from '../objects/NotificationEventConfigCreateManyInput.schema';
import { NotificationEventConfigUpdateInputObjectSchema } from '../objects/NotificationEventConfigUpdateInput.schema';
import { NotificationEventConfigUncheckedUpdateInputObjectSchema } from '../objects/NotificationEventConfigUncheckedUpdateInput.schema';
import { NotificationEventConfigUpdateManyMutationInputObjectSchema } from '../objects/NotificationEventConfigUpdateManyMutationInput.schema';
import { NotificationEventConfigUncheckedUpdateManyInputObjectSchema } from '../objects/NotificationEventConfigUncheckedUpdateManyInput.schema';
import { NotificationEventConfigCountAggregateInputObjectSchema } from '../objects/NotificationEventConfigCountAggregateInput.schema';
import { NotificationEventConfigMinAggregateInputObjectSchema } from '../objects/NotificationEventConfigMinAggregateInput.schema';
import { NotificationEventConfigMaxAggregateInputObjectSchema } from '../objects/NotificationEventConfigMaxAggregateInput.schema';
import { NotificationEventConfigOrderByWithAggregationInputObjectSchema } from '../objects/NotificationEventConfigOrderByWithAggregationInput.schema';
import { NotificationEventConfigScalarWhereWithAggregatesInputObjectSchema } from '../objects/NotificationEventConfigScalarWhereWithAggregatesInput.schema'

type NotificationEventConfigInputSchemaType = {
    findUnique: z.ZodType<Prisma.NotificationEventConfigFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.NotificationEventConfigFindFirstArgs>,
    findMany: z.ZodType<Prisma.NotificationEventConfigFindManyArgs>,
    create: z.ZodType<Prisma.NotificationEventConfigCreateArgs>,
    createMany: z.ZodType<Prisma.NotificationEventConfigCreateManyArgs>,
    delete: z.ZodType<Prisma.NotificationEventConfigDeleteArgs>,
    deleteMany: z.ZodType<Prisma.NotificationEventConfigDeleteManyArgs>,
    update: z.ZodType<Prisma.NotificationEventConfigUpdateArgs>,
    updateMany: z.ZodType<Prisma.NotificationEventConfigUpdateManyArgs>,
    upsert: z.ZodType<Prisma.NotificationEventConfigUpsertArgs>,
    aggregate: z.ZodType<Prisma.NotificationEventConfigAggregateArgs>,
    groupBy: z.ZodType<Prisma.NotificationEventConfigGroupByArgs>,
    count: z.ZodType<Prisma.NotificationEventConfigCountArgs>
}

export const NotificationEventConfigInputSchema = {
    findUnique: z.object({ select: z.lazy(() => NotificationEventConfigSelectObjectSchema.optional()), include: z.lazy(() => NotificationEventConfigIncludeObjectSchema.optional()), where: NotificationEventConfigWhereUniqueInputObjectSchema }), findFirst: z.object({ select: z.lazy(() => NotificationEventConfigSelectObjectSchema.optional()), include: z.lazy(() => NotificationEventConfigIncludeObjectSchema.optional()), where: NotificationEventConfigWhereInputObjectSchema.optional(), orderBy: z.union([NotificationEventConfigOrderByWithRelationInputObjectSchema, NotificationEventConfigOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: NotificationEventConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(NotificationEventConfigScalarFieldEnumSchema).optional() }), findMany: z.object({ select: z.lazy(() => NotificationEventConfigSelectObjectSchema.optional()), include: z.lazy(() => NotificationEventConfigIncludeObjectSchema.optional()), where: NotificationEventConfigWhereInputObjectSchema.optional(), orderBy: z.union([NotificationEventConfigOrderByWithRelationInputObjectSchema, NotificationEventConfigOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: NotificationEventConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(NotificationEventConfigScalarFieldEnumSchema).optional() }), create: z.object({ select: z.lazy(() => NotificationEventConfigSelectObjectSchema.optional()), include: z.lazy(() => NotificationEventConfigIncludeObjectSchema.optional()), data: z.union([NotificationEventConfigCreateInputObjectSchema, NotificationEventConfigUncheckedCreateInputObjectSchema]) }), createMany: z.object({ data: z.union([NotificationEventConfigCreateManyInputObjectSchema, z.array(NotificationEventConfigCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }), 'delete': z.object({ select: z.lazy(() => NotificationEventConfigSelectObjectSchema.optional()), include: z.lazy(() => NotificationEventConfigIncludeObjectSchema.optional()), where: NotificationEventConfigWhereUniqueInputObjectSchema }), deleteMany: z.object({ where: NotificationEventConfigWhereInputObjectSchema.optional() }), update: z.object({ select: z.lazy(() => NotificationEventConfigSelectObjectSchema.optional()), include: z.lazy(() => NotificationEventConfigIncludeObjectSchema.optional()), data: z.union([NotificationEventConfigUpdateInputObjectSchema, NotificationEventConfigUncheckedUpdateInputObjectSchema]), where: NotificationEventConfigWhereUniqueInputObjectSchema }), updateMany: z.object({ data: z.union([NotificationEventConfigUpdateManyMutationInputObjectSchema, NotificationEventConfigUncheckedUpdateManyInputObjectSchema]), where: NotificationEventConfigWhereInputObjectSchema.optional() }), upsert: z.object({ select: z.lazy(() => NotificationEventConfigSelectObjectSchema.optional()), include: z.lazy(() => NotificationEventConfigIncludeObjectSchema.optional()), where: NotificationEventConfigWhereUniqueInputObjectSchema, create: z.union([NotificationEventConfigCreateInputObjectSchema, NotificationEventConfigUncheckedCreateInputObjectSchema]), update: z.union([NotificationEventConfigUpdateInputObjectSchema, NotificationEventConfigUncheckedUpdateInputObjectSchema]) }), aggregate: z.object({ where: NotificationEventConfigWhereInputObjectSchema.optional(), orderBy: z.union([NotificationEventConfigOrderByWithRelationInputObjectSchema, NotificationEventConfigOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: NotificationEventConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), NotificationEventConfigCountAggregateInputObjectSchema]).optional(), _min: NotificationEventConfigMinAggregateInputObjectSchema.optional(), _max: NotificationEventConfigMaxAggregateInputObjectSchema.optional() }), groupBy: z.object({ where: NotificationEventConfigWhereInputObjectSchema.optional(), orderBy: z.union([NotificationEventConfigOrderByWithAggregationInputObjectSchema, NotificationEventConfigOrderByWithAggregationInputObjectSchema.array()]).optional(), having: NotificationEventConfigScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(NotificationEventConfigScalarFieldEnumSchema), _count: z.union([z.literal(true), NotificationEventConfigCountAggregateInputObjectSchema]).optional(), _min: NotificationEventConfigMinAggregateInputObjectSchema.optional(), _max: NotificationEventConfigMaxAggregateInputObjectSchema.optional() }), count: z.object({ where: NotificationEventConfigWhereInputObjectSchema.optional(), orderBy: z.union([NotificationEventConfigOrderByWithRelationInputObjectSchema, NotificationEventConfigOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: NotificationEventConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(NotificationEventConfigScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), NotificationEventConfigCountAggregateInputObjectSchema]).optional() })
} as NotificationEventConfigInputSchemaType;
