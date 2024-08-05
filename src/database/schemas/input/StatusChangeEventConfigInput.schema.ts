
/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@zenstackhq/runtime/models';

;
import { StatusChangeEventConfigSelectObjectSchema } from '../objects/StatusChangeEventConfigSelect.schema';
import { StatusChangeEventConfigIncludeObjectSchema } from '../objects/StatusChangeEventConfigInclude.schema';
import { StatusChangeEventConfigWhereUniqueInputObjectSchema } from '../objects/StatusChangeEventConfigWhereUniqueInput.schema';
import { StatusChangeEventConfigWhereInputObjectSchema } from '../objects/StatusChangeEventConfigWhereInput.schema';
import { StatusChangeEventConfigOrderByWithRelationInputObjectSchema } from '../objects/StatusChangeEventConfigOrderByWithRelationInput.schema';
import { StatusChangeEventConfigScalarFieldEnumSchema } from '../enums/StatusChangeEventConfigScalarFieldEnum.schema';
import { StatusChangeEventConfigCreateInputObjectSchema } from '../objects/StatusChangeEventConfigCreateInput.schema';
import { StatusChangeEventConfigUncheckedCreateInputObjectSchema } from '../objects/StatusChangeEventConfigUncheckedCreateInput.schema';
import { StatusChangeEventConfigCreateManyInputObjectSchema } from '../objects/StatusChangeEventConfigCreateManyInput.schema';
import { StatusChangeEventConfigUpdateInputObjectSchema } from '../objects/StatusChangeEventConfigUpdateInput.schema';
import { StatusChangeEventConfigUncheckedUpdateInputObjectSchema } from '../objects/StatusChangeEventConfigUncheckedUpdateInput.schema';
import { StatusChangeEventConfigUpdateManyMutationInputObjectSchema } from '../objects/StatusChangeEventConfigUpdateManyMutationInput.schema';
import { StatusChangeEventConfigUncheckedUpdateManyInputObjectSchema } from '../objects/StatusChangeEventConfigUncheckedUpdateManyInput.schema';
import { StatusChangeEventConfigCountAggregateInputObjectSchema } from '../objects/StatusChangeEventConfigCountAggregateInput.schema';
import { StatusChangeEventConfigMinAggregateInputObjectSchema } from '../objects/StatusChangeEventConfigMinAggregateInput.schema';
import { StatusChangeEventConfigMaxAggregateInputObjectSchema } from '../objects/StatusChangeEventConfigMaxAggregateInput.schema';
import { StatusChangeEventConfigOrderByWithAggregationInputObjectSchema } from '../objects/StatusChangeEventConfigOrderByWithAggregationInput.schema';
import { StatusChangeEventConfigScalarWhereWithAggregatesInputObjectSchema } from '../objects/StatusChangeEventConfigScalarWhereWithAggregatesInput.schema'

type StatusChangeEventConfigInputSchemaType = {
    findUnique: z.ZodType<Prisma.StatusChangeEventConfigFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.StatusChangeEventConfigFindFirstArgs>,
    findMany: z.ZodType<Prisma.StatusChangeEventConfigFindManyArgs>,
    create: z.ZodType<Prisma.StatusChangeEventConfigCreateArgs>,
    createMany: z.ZodType<Prisma.StatusChangeEventConfigCreateManyArgs>,
    delete: z.ZodType<Prisma.StatusChangeEventConfigDeleteArgs>,
    deleteMany: z.ZodType<Prisma.StatusChangeEventConfigDeleteManyArgs>,
    update: z.ZodType<Prisma.StatusChangeEventConfigUpdateArgs>,
    updateMany: z.ZodType<Prisma.StatusChangeEventConfigUpdateManyArgs>,
    upsert: z.ZodType<Prisma.StatusChangeEventConfigUpsertArgs>,
    aggregate: z.ZodType<Prisma.StatusChangeEventConfigAggregateArgs>,
    groupBy: z.ZodType<Prisma.StatusChangeEventConfigGroupByArgs>,
    count: z.ZodType<Prisma.StatusChangeEventConfigCountArgs>
}

export const StatusChangeEventConfigInputSchema = {
    findUnique: z.object({ select: z.lazy(() => StatusChangeEventConfigSelectObjectSchema.optional()), include: z.lazy(() => StatusChangeEventConfigIncludeObjectSchema.optional()), where: StatusChangeEventConfigWhereUniqueInputObjectSchema }), findFirst: z.object({ select: z.lazy(() => StatusChangeEventConfigSelectObjectSchema.optional()), include: z.lazy(() => StatusChangeEventConfigIncludeObjectSchema.optional()), where: StatusChangeEventConfigWhereInputObjectSchema.optional(), orderBy: z.union([StatusChangeEventConfigOrderByWithRelationInputObjectSchema, StatusChangeEventConfigOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: StatusChangeEventConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(StatusChangeEventConfigScalarFieldEnumSchema).optional() }), findMany: z.object({ select: z.lazy(() => StatusChangeEventConfigSelectObjectSchema.optional()), include: z.lazy(() => StatusChangeEventConfigIncludeObjectSchema.optional()), where: StatusChangeEventConfigWhereInputObjectSchema.optional(), orderBy: z.union([StatusChangeEventConfigOrderByWithRelationInputObjectSchema, StatusChangeEventConfigOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: StatusChangeEventConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(StatusChangeEventConfigScalarFieldEnumSchema).optional() }), create: z.object({ select: z.lazy(() => StatusChangeEventConfigSelectObjectSchema.optional()), include: z.lazy(() => StatusChangeEventConfigIncludeObjectSchema.optional()), data: z.union([StatusChangeEventConfigCreateInputObjectSchema, StatusChangeEventConfigUncheckedCreateInputObjectSchema]) }), createMany: z.object({ data: z.union([StatusChangeEventConfigCreateManyInputObjectSchema, z.array(StatusChangeEventConfigCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }), 'delete': z.object({ select: z.lazy(() => StatusChangeEventConfigSelectObjectSchema.optional()), include: z.lazy(() => StatusChangeEventConfigIncludeObjectSchema.optional()), where: StatusChangeEventConfigWhereUniqueInputObjectSchema }), deleteMany: z.object({ where: StatusChangeEventConfigWhereInputObjectSchema.optional() }), update: z.object({ select: z.lazy(() => StatusChangeEventConfigSelectObjectSchema.optional()), include: z.lazy(() => StatusChangeEventConfigIncludeObjectSchema.optional()), data: z.union([StatusChangeEventConfigUpdateInputObjectSchema, StatusChangeEventConfigUncheckedUpdateInputObjectSchema]), where: StatusChangeEventConfigWhereUniqueInputObjectSchema }), updateMany: z.object({ data: z.union([StatusChangeEventConfigUpdateManyMutationInputObjectSchema, StatusChangeEventConfigUncheckedUpdateManyInputObjectSchema]), where: StatusChangeEventConfigWhereInputObjectSchema.optional() }), upsert: z.object({ select: z.lazy(() => StatusChangeEventConfigSelectObjectSchema.optional()), include: z.lazy(() => StatusChangeEventConfigIncludeObjectSchema.optional()), where: StatusChangeEventConfigWhereUniqueInputObjectSchema, create: z.union([StatusChangeEventConfigCreateInputObjectSchema, StatusChangeEventConfigUncheckedCreateInputObjectSchema]), update: z.union([StatusChangeEventConfigUpdateInputObjectSchema, StatusChangeEventConfigUncheckedUpdateInputObjectSchema]) }), aggregate: z.object({ where: StatusChangeEventConfigWhereInputObjectSchema.optional(), orderBy: z.union([StatusChangeEventConfigOrderByWithRelationInputObjectSchema, StatusChangeEventConfigOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: StatusChangeEventConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), StatusChangeEventConfigCountAggregateInputObjectSchema]).optional(), _min: StatusChangeEventConfigMinAggregateInputObjectSchema.optional(), _max: StatusChangeEventConfigMaxAggregateInputObjectSchema.optional() }), groupBy: z.object({ where: StatusChangeEventConfigWhereInputObjectSchema.optional(), orderBy: z.union([StatusChangeEventConfigOrderByWithAggregationInputObjectSchema, StatusChangeEventConfigOrderByWithAggregationInputObjectSchema.array()]).optional(), having: StatusChangeEventConfigScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(StatusChangeEventConfigScalarFieldEnumSchema), _count: z.union([z.literal(true), StatusChangeEventConfigCountAggregateInputObjectSchema]).optional(), _min: StatusChangeEventConfigMinAggregateInputObjectSchema.optional(), _max: StatusChangeEventConfigMaxAggregateInputObjectSchema.optional() }), count: z.object({ where: StatusChangeEventConfigWhereInputObjectSchema.optional(), orderBy: z.union([StatusChangeEventConfigOrderByWithRelationInputObjectSchema, StatusChangeEventConfigOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: StatusChangeEventConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(StatusChangeEventConfigScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), StatusChangeEventConfigCountAggregateInputObjectSchema]).optional() })
} as StatusChangeEventConfigInputSchemaType;
