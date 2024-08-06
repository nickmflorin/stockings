
/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '../../../../generated/models';

;
import { PriceChangeEventCSelectObjectSchema } from '../objects/PriceChangeEventCSelect.schema';
import { PriceChangeEventCIncludeObjectSchema } from '../objects/PriceChangeEventCInclude.schema';
import { PriceChangeEventCWhereUniqueInputObjectSchema } from '../objects/PriceChangeEventCWhereUniqueInput.schema';
import { PriceChangeEventCWhereInputObjectSchema } from '../objects/PriceChangeEventCWhereInput.schema';
import { PriceChangeEventCOrderByWithRelationInputObjectSchema } from '../objects/PriceChangeEventCOrderByWithRelationInput.schema';
import { PriceChangeEventCScalarFieldEnumSchema } from '../enums/PriceChangeEventCScalarFieldEnum.schema';
import { PriceChangeEventCCreateInputObjectSchema } from '../objects/PriceChangeEventCCreateInput.schema';
import { PriceChangeEventCUncheckedCreateInputObjectSchema } from '../objects/PriceChangeEventCUncheckedCreateInput.schema';
import { PriceChangeEventCCreateManyInputObjectSchema } from '../objects/PriceChangeEventCCreateManyInput.schema';
import { PriceChangeEventCUpdateInputObjectSchema } from '../objects/PriceChangeEventCUpdateInput.schema';
import { PriceChangeEventCUncheckedUpdateInputObjectSchema } from '../objects/PriceChangeEventCUncheckedUpdateInput.schema';
import { PriceChangeEventCUpdateManyMutationInputObjectSchema } from '../objects/PriceChangeEventCUpdateManyMutationInput.schema';
import { PriceChangeEventCUncheckedUpdateManyInputObjectSchema } from '../objects/PriceChangeEventCUncheckedUpdateManyInput.schema';
import { PriceChangeEventCCountAggregateInputObjectSchema } from '../objects/PriceChangeEventCCountAggregateInput.schema';
import { PriceChangeEventCMinAggregateInputObjectSchema } from '../objects/PriceChangeEventCMinAggregateInput.schema';
import { PriceChangeEventCMaxAggregateInputObjectSchema } from '../objects/PriceChangeEventCMaxAggregateInput.schema';
import { PriceChangeEventCOrderByWithAggregationInputObjectSchema } from '../objects/PriceChangeEventCOrderByWithAggregationInput.schema';
import { PriceChangeEventCScalarWhereWithAggregatesInputObjectSchema } from '../objects/PriceChangeEventCScalarWhereWithAggregatesInput.schema'

type PriceChangeEventCInputSchemaType = {
    findUnique: z.ZodType<Prisma.PriceChangeEventCFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.PriceChangeEventCFindFirstArgs>,
    findMany: z.ZodType<Prisma.PriceChangeEventCFindManyArgs>,
    create: z.ZodType<Prisma.PriceChangeEventCCreateArgs>,
    createMany: z.ZodType<Prisma.PriceChangeEventCCreateManyArgs>,
    delete: z.ZodType<Prisma.PriceChangeEventCDeleteArgs>,
    deleteMany: z.ZodType<Prisma.PriceChangeEventCDeleteManyArgs>,
    update: z.ZodType<Prisma.PriceChangeEventCUpdateArgs>,
    updateMany: z.ZodType<Prisma.PriceChangeEventCUpdateManyArgs>,
    upsert: z.ZodType<Prisma.PriceChangeEventCUpsertArgs>,
    aggregate: z.ZodType<Prisma.PriceChangeEventCAggregateArgs>,
    groupBy: z.ZodType<Prisma.PriceChangeEventCGroupByArgs>,
    count: z.ZodType<Prisma.PriceChangeEventCCountArgs>
}

export const PriceChangeEventCInputSchema = {
    findUnique: z.object({ select: z.lazy(() => PriceChangeEventCSelectObjectSchema.optional()), include: z.lazy(() => PriceChangeEventCIncludeObjectSchema.optional()), where: PriceChangeEventCWhereUniqueInputObjectSchema }), findFirst: z.object({ select: z.lazy(() => PriceChangeEventCSelectObjectSchema.optional()), include: z.lazy(() => PriceChangeEventCIncludeObjectSchema.optional()), where: PriceChangeEventCWhereInputObjectSchema.optional(), orderBy: z.union([PriceChangeEventCOrderByWithRelationInputObjectSchema, PriceChangeEventCOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: PriceChangeEventCWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(PriceChangeEventCScalarFieldEnumSchema).optional() }), findMany: z.object({ select: z.lazy(() => PriceChangeEventCSelectObjectSchema.optional()), include: z.lazy(() => PriceChangeEventCIncludeObjectSchema.optional()), where: PriceChangeEventCWhereInputObjectSchema.optional(), orderBy: z.union([PriceChangeEventCOrderByWithRelationInputObjectSchema, PriceChangeEventCOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: PriceChangeEventCWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(PriceChangeEventCScalarFieldEnumSchema).optional() }), create: z.object({ select: z.lazy(() => PriceChangeEventCSelectObjectSchema.optional()), include: z.lazy(() => PriceChangeEventCIncludeObjectSchema.optional()), data: z.union([PriceChangeEventCCreateInputObjectSchema, PriceChangeEventCUncheckedCreateInputObjectSchema]) }), createMany: z.object({ data: z.union([PriceChangeEventCCreateManyInputObjectSchema, z.array(PriceChangeEventCCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }), 'delete': z.object({ select: z.lazy(() => PriceChangeEventCSelectObjectSchema.optional()), include: z.lazy(() => PriceChangeEventCIncludeObjectSchema.optional()), where: PriceChangeEventCWhereUniqueInputObjectSchema }), deleteMany: z.object({ where: PriceChangeEventCWhereInputObjectSchema.optional() }), update: z.object({ select: z.lazy(() => PriceChangeEventCSelectObjectSchema.optional()), include: z.lazy(() => PriceChangeEventCIncludeObjectSchema.optional()), data: z.union([PriceChangeEventCUpdateInputObjectSchema, PriceChangeEventCUncheckedUpdateInputObjectSchema]), where: PriceChangeEventCWhereUniqueInputObjectSchema }), updateMany: z.object({ data: z.union([PriceChangeEventCUpdateManyMutationInputObjectSchema, PriceChangeEventCUncheckedUpdateManyInputObjectSchema]), where: PriceChangeEventCWhereInputObjectSchema.optional() }), upsert: z.object({ select: z.lazy(() => PriceChangeEventCSelectObjectSchema.optional()), include: z.lazy(() => PriceChangeEventCIncludeObjectSchema.optional()), where: PriceChangeEventCWhereUniqueInputObjectSchema, create: z.union([PriceChangeEventCCreateInputObjectSchema, PriceChangeEventCUncheckedCreateInputObjectSchema]), update: z.union([PriceChangeEventCUpdateInputObjectSchema, PriceChangeEventCUncheckedUpdateInputObjectSchema]) }), aggregate: z.object({ where: PriceChangeEventCWhereInputObjectSchema.optional(), orderBy: z.union([PriceChangeEventCOrderByWithRelationInputObjectSchema, PriceChangeEventCOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: PriceChangeEventCWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), PriceChangeEventCCountAggregateInputObjectSchema]).optional(), _min: PriceChangeEventCMinAggregateInputObjectSchema.optional(), _max: PriceChangeEventCMaxAggregateInputObjectSchema.optional() }), groupBy: z.object({ where: PriceChangeEventCWhereInputObjectSchema.optional(), orderBy: z.union([PriceChangeEventCOrderByWithAggregationInputObjectSchema, PriceChangeEventCOrderByWithAggregationInputObjectSchema.array()]).optional(), having: PriceChangeEventCScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(PriceChangeEventCScalarFieldEnumSchema), _count: z.union([z.literal(true), PriceChangeEventCCountAggregateInputObjectSchema]).optional(), _min: PriceChangeEventCMinAggregateInputObjectSchema.optional(), _max: PriceChangeEventCMaxAggregateInputObjectSchema.optional() }), count: z.object({ where: PriceChangeEventCWhereInputObjectSchema.optional(), orderBy: z.union([PriceChangeEventCOrderByWithRelationInputObjectSchema, PriceChangeEventCOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: PriceChangeEventCWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(PriceChangeEventCScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), PriceChangeEventCCountAggregateInputObjectSchema]).optional() })
} as PriceChangeEventCInputSchemaType;
