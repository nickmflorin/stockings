
/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '../../../../generated/models';

;
import { StatusChangeEventSelectObjectSchema } from '../objects/StatusChangeEventSelect.schema';
import { StatusChangeEventIncludeObjectSchema } from '../objects/StatusChangeEventInclude.schema';
import { StatusChangeEventWhereUniqueInputObjectSchema } from '../objects/StatusChangeEventWhereUniqueInput.schema';
import { StatusChangeEventWhereInputObjectSchema } from '../objects/StatusChangeEventWhereInput.schema';
import { StatusChangeEventOrderByWithRelationInputObjectSchema } from '../objects/StatusChangeEventOrderByWithRelationInput.schema';
import { StatusChangeEventScalarFieldEnumSchema } from '../enums/StatusChangeEventScalarFieldEnum.schema';
import { StatusChangeEventCreateInputObjectSchema } from '../objects/StatusChangeEventCreateInput.schema';
import { StatusChangeEventUncheckedCreateInputObjectSchema } from '../objects/StatusChangeEventUncheckedCreateInput.schema';
import { StatusChangeEventCreateManyInputObjectSchema } from '../objects/StatusChangeEventCreateManyInput.schema';
import { StatusChangeEventUpdateInputObjectSchema } from '../objects/StatusChangeEventUpdateInput.schema';
import { StatusChangeEventUncheckedUpdateInputObjectSchema } from '../objects/StatusChangeEventUncheckedUpdateInput.schema';
import { StatusChangeEventUpdateManyMutationInputObjectSchema } from '../objects/StatusChangeEventUpdateManyMutationInput.schema';
import { StatusChangeEventUncheckedUpdateManyInputObjectSchema } from '../objects/StatusChangeEventUncheckedUpdateManyInput.schema';
import { StatusChangeEventCountAggregateInputObjectSchema } from '../objects/StatusChangeEventCountAggregateInput.schema';
import { StatusChangeEventMinAggregateInputObjectSchema } from '../objects/StatusChangeEventMinAggregateInput.schema';
import { StatusChangeEventMaxAggregateInputObjectSchema } from '../objects/StatusChangeEventMaxAggregateInput.schema';
import { StatusChangeEventOrderByWithAggregationInputObjectSchema } from '../objects/StatusChangeEventOrderByWithAggregationInput.schema';
import { StatusChangeEventScalarWhereWithAggregatesInputObjectSchema } from '../objects/StatusChangeEventScalarWhereWithAggregatesInput.schema'

type StatusChangeEventInputSchemaType = {
    findUnique: z.ZodType<Prisma.StatusChangeEventFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.StatusChangeEventFindFirstArgs>,
    findMany: z.ZodType<Prisma.StatusChangeEventFindManyArgs>,
    create: z.ZodType<Prisma.StatusChangeEventCreateArgs>,
    createMany: z.ZodType<Prisma.StatusChangeEventCreateManyArgs>,
    delete: z.ZodType<Prisma.StatusChangeEventDeleteArgs>,
    deleteMany: z.ZodType<Prisma.StatusChangeEventDeleteManyArgs>,
    update: z.ZodType<Prisma.StatusChangeEventUpdateArgs>,
    updateMany: z.ZodType<Prisma.StatusChangeEventUpdateManyArgs>,
    upsert: z.ZodType<Prisma.StatusChangeEventUpsertArgs>,
    aggregate: z.ZodType<Prisma.StatusChangeEventAggregateArgs>,
    groupBy: z.ZodType<Prisma.StatusChangeEventGroupByArgs>,
    count: z.ZodType<Prisma.StatusChangeEventCountArgs>
}

export const StatusChangeEventInputSchema = {
    findUnique: z.object({ select: z.lazy(() => StatusChangeEventSelectObjectSchema.optional()), include: z.lazy(() => StatusChangeEventIncludeObjectSchema.optional()), where: StatusChangeEventWhereUniqueInputObjectSchema }), findFirst: z.object({ select: z.lazy(() => StatusChangeEventSelectObjectSchema.optional()), include: z.lazy(() => StatusChangeEventIncludeObjectSchema.optional()), where: StatusChangeEventWhereInputObjectSchema.optional(), orderBy: z.union([StatusChangeEventOrderByWithRelationInputObjectSchema, StatusChangeEventOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: StatusChangeEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(StatusChangeEventScalarFieldEnumSchema).optional() }), findMany: z.object({ select: z.lazy(() => StatusChangeEventSelectObjectSchema.optional()), include: z.lazy(() => StatusChangeEventIncludeObjectSchema.optional()), where: StatusChangeEventWhereInputObjectSchema.optional(), orderBy: z.union([StatusChangeEventOrderByWithRelationInputObjectSchema, StatusChangeEventOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: StatusChangeEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(StatusChangeEventScalarFieldEnumSchema).optional() }), create: z.object({ select: z.lazy(() => StatusChangeEventSelectObjectSchema.optional()), include: z.lazy(() => StatusChangeEventIncludeObjectSchema.optional()), data: z.union([StatusChangeEventCreateInputObjectSchema, StatusChangeEventUncheckedCreateInputObjectSchema]) }), createMany: z.object({ data: z.union([StatusChangeEventCreateManyInputObjectSchema, z.array(StatusChangeEventCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }), 'delete': z.object({ select: z.lazy(() => StatusChangeEventSelectObjectSchema.optional()), include: z.lazy(() => StatusChangeEventIncludeObjectSchema.optional()), where: StatusChangeEventWhereUniqueInputObjectSchema }), deleteMany: z.object({ where: StatusChangeEventWhereInputObjectSchema.optional() }), update: z.object({ select: z.lazy(() => StatusChangeEventSelectObjectSchema.optional()), include: z.lazy(() => StatusChangeEventIncludeObjectSchema.optional()), data: z.union([StatusChangeEventUpdateInputObjectSchema, StatusChangeEventUncheckedUpdateInputObjectSchema]), where: StatusChangeEventWhereUniqueInputObjectSchema }), updateMany: z.object({ data: z.union([StatusChangeEventUpdateManyMutationInputObjectSchema, StatusChangeEventUncheckedUpdateManyInputObjectSchema]), where: StatusChangeEventWhereInputObjectSchema.optional() }), upsert: z.object({ select: z.lazy(() => StatusChangeEventSelectObjectSchema.optional()), include: z.lazy(() => StatusChangeEventIncludeObjectSchema.optional()), where: StatusChangeEventWhereUniqueInputObjectSchema, create: z.union([StatusChangeEventCreateInputObjectSchema, StatusChangeEventUncheckedCreateInputObjectSchema]), update: z.union([StatusChangeEventUpdateInputObjectSchema, StatusChangeEventUncheckedUpdateInputObjectSchema]) }), aggregate: z.object({ where: StatusChangeEventWhereInputObjectSchema.optional(), orderBy: z.union([StatusChangeEventOrderByWithRelationInputObjectSchema, StatusChangeEventOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: StatusChangeEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), StatusChangeEventCountAggregateInputObjectSchema]).optional(), _min: StatusChangeEventMinAggregateInputObjectSchema.optional(), _max: StatusChangeEventMaxAggregateInputObjectSchema.optional() }), groupBy: z.object({ where: StatusChangeEventWhereInputObjectSchema.optional(), orderBy: z.union([StatusChangeEventOrderByWithAggregationInputObjectSchema, StatusChangeEventOrderByWithAggregationInputObjectSchema.array()]).optional(), having: StatusChangeEventScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(StatusChangeEventScalarFieldEnumSchema), _count: z.union([z.literal(true), StatusChangeEventCountAggregateInputObjectSchema]).optional(), _min: StatusChangeEventMinAggregateInputObjectSchema.optional(), _max: StatusChangeEventMaxAggregateInputObjectSchema.optional() }), count: z.object({ where: StatusChangeEventWhereInputObjectSchema.optional(), orderBy: z.union([StatusChangeEventOrderByWithRelationInputObjectSchema, StatusChangeEventOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: StatusChangeEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(StatusChangeEventScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), StatusChangeEventCountAggregateInputObjectSchema]).optional() })
} as StatusChangeEventInputSchemaType;
