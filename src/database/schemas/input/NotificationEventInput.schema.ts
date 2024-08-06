
/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '../../../../generated/models';

;
import { NotificationEventSelectObjectSchema } from '../objects/NotificationEventSelect.schema';
import { NotificationEventIncludeObjectSchema } from '../objects/NotificationEventInclude.schema';
import { NotificationEventWhereUniqueInputObjectSchema } from '../objects/NotificationEventWhereUniqueInput.schema';
import { NotificationEventWhereInputObjectSchema } from '../objects/NotificationEventWhereInput.schema';
import { NotificationEventOrderByWithRelationInputObjectSchema } from '../objects/NotificationEventOrderByWithRelationInput.schema';
import { NotificationEventScalarFieldEnumSchema } from '../enums/NotificationEventScalarFieldEnum.schema';
import { NotificationEventCreateInputObjectSchema } from '../objects/NotificationEventCreateInput.schema';
import { NotificationEventUncheckedCreateInputObjectSchema } from '../objects/NotificationEventUncheckedCreateInput.schema';
import { NotificationEventCreateManyInputObjectSchema } from '../objects/NotificationEventCreateManyInput.schema';
import { NotificationEventUpdateInputObjectSchema } from '../objects/NotificationEventUpdateInput.schema';
import { NotificationEventUncheckedUpdateInputObjectSchema } from '../objects/NotificationEventUncheckedUpdateInput.schema';
import { NotificationEventUpdateManyMutationInputObjectSchema } from '../objects/NotificationEventUpdateManyMutationInput.schema';
import { NotificationEventUncheckedUpdateManyInputObjectSchema } from '../objects/NotificationEventUncheckedUpdateManyInput.schema';
import { NotificationEventCountAggregateInputObjectSchema } from '../objects/NotificationEventCountAggregateInput.schema';
import { NotificationEventMinAggregateInputObjectSchema } from '../objects/NotificationEventMinAggregateInput.schema';
import { NotificationEventMaxAggregateInputObjectSchema } from '../objects/NotificationEventMaxAggregateInput.schema';
import { NotificationEventOrderByWithAggregationInputObjectSchema } from '../objects/NotificationEventOrderByWithAggregationInput.schema';
import { NotificationEventScalarWhereWithAggregatesInputObjectSchema } from '../objects/NotificationEventScalarWhereWithAggregatesInput.schema'

type NotificationEventInputSchemaType = {
    findUnique: z.ZodType<Prisma.NotificationEventFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.NotificationEventFindFirstArgs>,
    findMany: z.ZodType<Prisma.NotificationEventFindManyArgs>,
    create: z.ZodType<Prisma.NotificationEventCreateArgs>,
    createMany: z.ZodType<Prisma.NotificationEventCreateManyArgs>,
    delete: z.ZodType<Prisma.NotificationEventDeleteArgs>,
    deleteMany: z.ZodType<Prisma.NotificationEventDeleteManyArgs>,
    update: z.ZodType<Prisma.NotificationEventUpdateArgs>,
    updateMany: z.ZodType<Prisma.NotificationEventUpdateManyArgs>,
    upsert: z.ZodType<Prisma.NotificationEventUpsertArgs>,
    aggregate: z.ZodType<Prisma.NotificationEventAggregateArgs>,
    groupBy: z.ZodType<Prisma.NotificationEventGroupByArgs>,
    count: z.ZodType<Prisma.NotificationEventCountArgs>
}

export const NotificationEventInputSchema = {
    findUnique: z.object({ select: z.lazy(() => NotificationEventSelectObjectSchema.optional()), include: z.lazy(() => NotificationEventIncludeObjectSchema.optional()), where: NotificationEventWhereUniqueInputObjectSchema }), findFirst: z.object({ select: z.lazy(() => NotificationEventSelectObjectSchema.optional()), include: z.lazy(() => NotificationEventIncludeObjectSchema.optional()), where: NotificationEventWhereInputObjectSchema.optional(), orderBy: z.union([NotificationEventOrderByWithRelationInputObjectSchema, NotificationEventOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: NotificationEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(NotificationEventScalarFieldEnumSchema).optional() }), findMany: z.object({ select: z.lazy(() => NotificationEventSelectObjectSchema.optional()), include: z.lazy(() => NotificationEventIncludeObjectSchema.optional()), where: NotificationEventWhereInputObjectSchema.optional(), orderBy: z.union([NotificationEventOrderByWithRelationInputObjectSchema, NotificationEventOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: NotificationEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(NotificationEventScalarFieldEnumSchema).optional() }), create: z.object({ select: z.lazy(() => NotificationEventSelectObjectSchema.optional()), include: z.lazy(() => NotificationEventIncludeObjectSchema.optional()), data: z.union([NotificationEventCreateInputObjectSchema, NotificationEventUncheckedCreateInputObjectSchema]) }), createMany: z.object({ data: z.union([NotificationEventCreateManyInputObjectSchema, z.array(NotificationEventCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }), 'delete': z.object({ select: z.lazy(() => NotificationEventSelectObjectSchema.optional()), include: z.lazy(() => NotificationEventIncludeObjectSchema.optional()), where: NotificationEventWhereUniqueInputObjectSchema }), deleteMany: z.object({ where: NotificationEventWhereInputObjectSchema.optional() }), update: z.object({ select: z.lazy(() => NotificationEventSelectObjectSchema.optional()), include: z.lazy(() => NotificationEventIncludeObjectSchema.optional()), data: z.union([NotificationEventUpdateInputObjectSchema, NotificationEventUncheckedUpdateInputObjectSchema]), where: NotificationEventWhereUniqueInputObjectSchema }), updateMany: z.object({ data: z.union([NotificationEventUpdateManyMutationInputObjectSchema, NotificationEventUncheckedUpdateManyInputObjectSchema]), where: NotificationEventWhereInputObjectSchema.optional() }), upsert: z.object({ select: z.lazy(() => NotificationEventSelectObjectSchema.optional()), include: z.lazy(() => NotificationEventIncludeObjectSchema.optional()), where: NotificationEventWhereUniqueInputObjectSchema, create: z.union([NotificationEventCreateInputObjectSchema, NotificationEventUncheckedCreateInputObjectSchema]), update: z.union([NotificationEventUpdateInputObjectSchema, NotificationEventUncheckedUpdateInputObjectSchema]) }), aggregate: z.object({ where: NotificationEventWhereInputObjectSchema.optional(), orderBy: z.union([NotificationEventOrderByWithRelationInputObjectSchema, NotificationEventOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: NotificationEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), NotificationEventCountAggregateInputObjectSchema]).optional(), _min: NotificationEventMinAggregateInputObjectSchema.optional(), _max: NotificationEventMaxAggregateInputObjectSchema.optional() }), groupBy: z.object({ where: NotificationEventWhereInputObjectSchema.optional(), orderBy: z.union([NotificationEventOrderByWithAggregationInputObjectSchema, NotificationEventOrderByWithAggregationInputObjectSchema.array()]).optional(), having: NotificationEventScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(NotificationEventScalarFieldEnumSchema), _count: z.union([z.literal(true), NotificationEventCountAggregateInputObjectSchema]).optional(), _min: NotificationEventMinAggregateInputObjectSchema.optional(), _max: NotificationEventMaxAggregateInputObjectSchema.optional() }), count: z.object({ where: NotificationEventWhereInputObjectSchema.optional(), orderBy: z.union([NotificationEventOrderByWithRelationInputObjectSchema, NotificationEventOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: NotificationEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(NotificationEventScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), NotificationEventCountAggregateInputObjectSchema]).optional() })
} as NotificationEventInputSchemaType;
