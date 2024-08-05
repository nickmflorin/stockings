
/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@zenstackhq/runtime/models';

;
import { PriceChangeEventConfigSelectObjectSchema } from '../objects/PriceChangeEventConfigSelect.schema';
import { PriceChangeEventConfigIncludeObjectSchema } from '../objects/PriceChangeEventConfigInclude.schema';
import { PriceChangeEventConfigWhereUniqueInputObjectSchema } from '../objects/PriceChangeEventConfigWhereUniqueInput.schema';
import { PriceChangeEventConfigWhereInputObjectSchema } from '../objects/PriceChangeEventConfigWhereInput.schema';
import { PriceChangeEventConfigOrderByWithRelationInputObjectSchema } from '../objects/PriceChangeEventConfigOrderByWithRelationInput.schema';
import { PriceChangeEventConfigScalarFieldEnumSchema } from '../enums/PriceChangeEventConfigScalarFieldEnum.schema';
import { PriceChangeEventConfigCreateInputObjectSchema } from '../objects/PriceChangeEventConfigCreateInput.schema';
import { PriceChangeEventConfigUncheckedCreateInputObjectSchema } from '../objects/PriceChangeEventConfigUncheckedCreateInput.schema';
import { PriceChangeEventConfigCreateManyInputObjectSchema } from '../objects/PriceChangeEventConfigCreateManyInput.schema';
import { PriceChangeEventConfigUpdateInputObjectSchema } from '../objects/PriceChangeEventConfigUpdateInput.schema';
import { PriceChangeEventConfigUncheckedUpdateInputObjectSchema } from '../objects/PriceChangeEventConfigUncheckedUpdateInput.schema';
import { PriceChangeEventConfigUpdateManyMutationInputObjectSchema } from '../objects/PriceChangeEventConfigUpdateManyMutationInput.schema';
import { PriceChangeEventConfigUncheckedUpdateManyInputObjectSchema } from '../objects/PriceChangeEventConfigUncheckedUpdateManyInput.schema';
import { PriceChangeEventConfigCountAggregateInputObjectSchema } from '../objects/PriceChangeEventConfigCountAggregateInput.schema';
import { PriceChangeEventConfigMinAggregateInputObjectSchema } from '../objects/PriceChangeEventConfigMinAggregateInput.schema';
import { PriceChangeEventConfigMaxAggregateInputObjectSchema } from '../objects/PriceChangeEventConfigMaxAggregateInput.schema';
import { PriceChangeEventConfigOrderByWithAggregationInputObjectSchema } from '../objects/PriceChangeEventConfigOrderByWithAggregationInput.schema';
import { PriceChangeEventConfigScalarWhereWithAggregatesInputObjectSchema } from '../objects/PriceChangeEventConfigScalarWhereWithAggregatesInput.schema'

type PriceChangeEventConfigInputSchemaType = {
    findUnique: z.ZodType<Prisma.PriceChangeEventConfigFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.PriceChangeEventConfigFindFirstArgs>,
    findMany: z.ZodType<Prisma.PriceChangeEventConfigFindManyArgs>,
    create: z.ZodType<Prisma.PriceChangeEventConfigCreateArgs>,
    createMany: z.ZodType<Prisma.PriceChangeEventConfigCreateManyArgs>,
    delete: z.ZodType<Prisma.PriceChangeEventConfigDeleteArgs>,
    deleteMany: z.ZodType<Prisma.PriceChangeEventConfigDeleteManyArgs>,
    update: z.ZodType<Prisma.PriceChangeEventConfigUpdateArgs>,
    updateMany: z.ZodType<Prisma.PriceChangeEventConfigUpdateManyArgs>,
    upsert: z.ZodType<Prisma.PriceChangeEventConfigUpsertArgs>,
    aggregate: z.ZodType<Prisma.PriceChangeEventConfigAggregateArgs>,
    groupBy: z.ZodType<Prisma.PriceChangeEventConfigGroupByArgs>,
    count: z.ZodType<Prisma.PriceChangeEventConfigCountArgs>
}

export const PriceChangeEventConfigInputSchema = {
    findUnique: z.object({ select: z.lazy(() => PriceChangeEventConfigSelectObjectSchema.optional()), include: z.lazy(() => PriceChangeEventConfigIncludeObjectSchema.optional()), where: PriceChangeEventConfigWhereUniqueInputObjectSchema }), findFirst: z.object({ select: z.lazy(() => PriceChangeEventConfigSelectObjectSchema.optional()), include: z.lazy(() => PriceChangeEventConfigIncludeObjectSchema.optional()), where: PriceChangeEventConfigWhereInputObjectSchema.optional(), orderBy: z.union([PriceChangeEventConfigOrderByWithRelationInputObjectSchema, PriceChangeEventConfigOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: PriceChangeEventConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(PriceChangeEventConfigScalarFieldEnumSchema).optional() }), findMany: z.object({ select: z.lazy(() => PriceChangeEventConfigSelectObjectSchema.optional()), include: z.lazy(() => PriceChangeEventConfigIncludeObjectSchema.optional()), where: PriceChangeEventConfigWhereInputObjectSchema.optional(), orderBy: z.union([PriceChangeEventConfigOrderByWithRelationInputObjectSchema, PriceChangeEventConfigOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: PriceChangeEventConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(PriceChangeEventConfigScalarFieldEnumSchema).optional() }), create: z.object({ select: z.lazy(() => PriceChangeEventConfigSelectObjectSchema.optional()), include: z.lazy(() => PriceChangeEventConfigIncludeObjectSchema.optional()), data: z.union([PriceChangeEventConfigCreateInputObjectSchema, PriceChangeEventConfigUncheckedCreateInputObjectSchema]) }), createMany: z.object({ data: z.union([PriceChangeEventConfigCreateManyInputObjectSchema, z.array(PriceChangeEventConfigCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }), 'delete': z.object({ select: z.lazy(() => PriceChangeEventConfigSelectObjectSchema.optional()), include: z.lazy(() => PriceChangeEventConfigIncludeObjectSchema.optional()), where: PriceChangeEventConfigWhereUniqueInputObjectSchema }), deleteMany: z.object({ where: PriceChangeEventConfigWhereInputObjectSchema.optional() }), update: z.object({ select: z.lazy(() => PriceChangeEventConfigSelectObjectSchema.optional()), include: z.lazy(() => PriceChangeEventConfigIncludeObjectSchema.optional()), data: z.union([PriceChangeEventConfigUpdateInputObjectSchema, PriceChangeEventConfigUncheckedUpdateInputObjectSchema]), where: PriceChangeEventConfigWhereUniqueInputObjectSchema }), updateMany: z.object({ data: z.union([PriceChangeEventConfigUpdateManyMutationInputObjectSchema, PriceChangeEventConfigUncheckedUpdateManyInputObjectSchema]), where: PriceChangeEventConfigWhereInputObjectSchema.optional() }), upsert: z.object({ select: z.lazy(() => PriceChangeEventConfigSelectObjectSchema.optional()), include: z.lazy(() => PriceChangeEventConfigIncludeObjectSchema.optional()), where: PriceChangeEventConfigWhereUniqueInputObjectSchema, create: z.union([PriceChangeEventConfigCreateInputObjectSchema, PriceChangeEventConfigUncheckedCreateInputObjectSchema]), update: z.union([PriceChangeEventConfigUpdateInputObjectSchema, PriceChangeEventConfigUncheckedUpdateInputObjectSchema]) }), aggregate: z.object({ where: PriceChangeEventConfigWhereInputObjectSchema.optional(), orderBy: z.union([PriceChangeEventConfigOrderByWithRelationInputObjectSchema, PriceChangeEventConfigOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: PriceChangeEventConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), PriceChangeEventConfigCountAggregateInputObjectSchema]).optional(), _min: PriceChangeEventConfigMinAggregateInputObjectSchema.optional(), _max: PriceChangeEventConfigMaxAggregateInputObjectSchema.optional() }), groupBy: z.object({ where: PriceChangeEventConfigWhereInputObjectSchema.optional(), orderBy: z.union([PriceChangeEventConfigOrderByWithAggregationInputObjectSchema, PriceChangeEventConfigOrderByWithAggregationInputObjectSchema.array()]).optional(), having: PriceChangeEventConfigScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(PriceChangeEventConfigScalarFieldEnumSchema), _count: z.union([z.literal(true), PriceChangeEventConfigCountAggregateInputObjectSchema]).optional(), _min: PriceChangeEventConfigMinAggregateInputObjectSchema.optional(), _max: PriceChangeEventConfigMaxAggregateInputObjectSchema.optional() }), count: z.object({ where: PriceChangeEventConfigWhereInputObjectSchema.optional(), orderBy: z.union([PriceChangeEventConfigOrderByWithRelationInputObjectSchema, PriceChangeEventConfigOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: PriceChangeEventConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(PriceChangeEventConfigScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), PriceChangeEventConfigCountAggregateInputObjectSchema]).optional() })
} as PriceChangeEventConfigInputSchemaType;
