
/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@zenstackhq/runtime/models';

;
import { MissingTextErrorDataSelectObjectSchema } from '../objects/MissingTextErrorDataSelect.schema';
;
import { MissingTextErrorDataWhereUniqueInputObjectSchema } from '../objects/MissingTextErrorDataWhereUniqueInput.schema';
import { MissingTextErrorDataWhereInputObjectSchema } from '../objects/MissingTextErrorDataWhereInput.schema';
import { MissingTextErrorDataOrderByWithRelationInputObjectSchema } from '../objects/MissingTextErrorDataOrderByWithRelationInput.schema';
import { MissingTextErrorDataScalarFieldEnumSchema } from '../enums/MissingTextErrorDataScalarFieldEnum.schema';
import { MissingTextErrorDataCreateInputObjectSchema } from '../objects/MissingTextErrorDataCreateInput.schema';
import { MissingTextErrorDataUncheckedCreateInputObjectSchema } from '../objects/MissingTextErrorDataUncheckedCreateInput.schema';
import { MissingTextErrorDataCreateManyInputObjectSchema } from '../objects/MissingTextErrorDataCreateManyInput.schema';
import { MissingTextErrorDataUpdateInputObjectSchema } from '../objects/MissingTextErrorDataUpdateInput.schema';
import { MissingTextErrorDataUncheckedUpdateInputObjectSchema } from '../objects/MissingTextErrorDataUncheckedUpdateInput.schema';
import { MissingTextErrorDataUpdateManyMutationInputObjectSchema } from '../objects/MissingTextErrorDataUpdateManyMutationInput.schema';
import { MissingTextErrorDataUncheckedUpdateManyInputObjectSchema } from '../objects/MissingTextErrorDataUncheckedUpdateManyInput.schema';
import { MissingTextErrorDataCountAggregateInputObjectSchema } from '../objects/MissingTextErrorDataCountAggregateInput.schema';
import { MissingTextErrorDataMinAggregateInputObjectSchema } from '../objects/MissingTextErrorDataMinAggregateInput.schema';
import { MissingTextErrorDataMaxAggregateInputObjectSchema } from '../objects/MissingTextErrorDataMaxAggregateInput.schema';
import { MissingTextErrorDataOrderByWithAggregationInputObjectSchema } from '../objects/MissingTextErrorDataOrderByWithAggregationInput.schema';
import { MissingTextErrorDataScalarWhereWithAggregatesInputObjectSchema } from '../objects/MissingTextErrorDataScalarWhereWithAggregatesInput.schema'

type MissingTextErrorDataInputSchemaType = {
    findUnique: z.ZodType<Prisma.MissingTextErrorDataFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.MissingTextErrorDataFindFirstArgs>,
    findMany: z.ZodType<Prisma.MissingTextErrorDataFindManyArgs>,
    create: z.ZodType<Prisma.MissingTextErrorDataCreateArgs>,
    createMany: z.ZodType<Prisma.MissingTextErrorDataCreateManyArgs>,
    delete: z.ZodType<Prisma.MissingTextErrorDataDeleteArgs>,
    deleteMany: z.ZodType<Prisma.MissingTextErrorDataDeleteManyArgs>,
    update: z.ZodType<Prisma.MissingTextErrorDataUpdateArgs>,
    updateMany: z.ZodType<Prisma.MissingTextErrorDataUpdateManyArgs>,
    upsert: z.ZodType<Prisma.MissingTextErrorDataUpsertArgs>,
    aggregate: z.ZodType<Prisma.MissingTextErrorDataAggregateArgs>,
    groupBy: z.ZodType<Prisma.MissingTextErrorDataGroupByArgs>,
    count: z.ZodType<Prisma.MissingTextErrorDataCountArgs>
}

export const MissingTextErrorDataInputSchema = {
    findUnique: z.object({ select: z.lazy(() => MissingTextErrorDataSelectObjectSchema.optional()), where: MissingTextErrorDataWhereUniqueInputObjectSchema }), findFirst: z.object({ select: z.lazy(() => MissingTextErrorDataSelectObjectSchema.optional()), where: MissingTextErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([MissingTextErrorDataOrderByWithRelationInputObjectSchema, MissingTextErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: MissingTextErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(MissingTextErrorDataScalarFieldEnumSchema).optional() }), findMany: z.object({ select: z.lazy(() => MissingTextErrorDataSelectObjectSchema.optional()), where: MissingTextErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([MissingTextErrorDataOrderByWithRelationInputObjectSchema, MissingTextErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: MissingTextErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(MissingTextErrorDataScalarFieldEnumSchema).optional() }), create: z.object({ select: z.lazy(() => MissingTextErrorDataSelectObjectSchema.optional()), data: z.union([MissingTextErrorDataCreateInputObjectSchema, MissingTextErrorDataUncheckedCreateInputObjectSchema]) }), createMany: z.object({ data: z.union([MissingTextErrorDataCreateManyInputObjectSchema, z.array(MissingTextErrorDataCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }), 'delete': z.object({ select: z.lazy(() => MissingTextErrorDataSelectObjectSchema.optional()), where: MissingTextErrorDataWhereUniqueInputObjectSchema }), deleteMany: z.object({ where: MissingTextErrorDataWhereInputObjectSchema.optional() }), update: z.object({ select: z.lazy(() => MissingTextErrorDataSelectObjectSchema.optional()), data: z.union([MissingTextErrorDataUpdateInputObjectSchema, MissingTextErrorDataUncheckedUpdateInputObjectSchema]), where: MissingTextErrorDataWhereUniqueInputObjectSchema }), updateMany: z.object({ data: z.union([MissingTextErrorDataUpdateManyMutationInputObjectSchema, MissingTextErrorDataUncheckedUpdateManyInputObjectSchema]), where: MissingTextErrorDataWhereInputObjectSchema.optional() }), upsert: z.object({ select: z.lazy(() => MissingTextErrorDataSelectObjectSchema.optional()), where: MissingTextErrorDataWhereUniqueInputObjectSchema, create: z.union([MissingTextErrorDataCreateInputObjectSchema, MissingTextErrorDataUncheckedCreateInputObjectSchema]), update: z.union([MissingTextErrorDataUpdateInputObjectSchema, MissingTextErrorDataUncheckedUpdateInputObjectSchema]) }), aggregate: z.object({ where: MissingTextErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([MissingTextErrorDataOrderByWithRelationInputObjectSchema, MissingTextErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: MissingTextErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), MissingTextErrorDataCountAggregateInputObjectSchema]).optional(), _min: MissingTextErrorDataMinAggregateInputObjectSchema.optional(), _max: MissingTextErrorDataMaxAggregateInputObjectSchema.optional() }), groupBy: z.object({ where: MissingTextErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([MissingTextErrorDataOrderByWithAggregationInputObjectSchema, MissingTextErrorDataOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MissingTextErrorDataScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(MissingTextErrorDataScalarFieldEnumSchema), _count: z.union([z.literal(true), MissingTextErrorDataCountAggregateInputObjectSchema]).optional(), _min: MissingTextErrorDataMinAggregateInputObjectSchema.optional(), _max: MissingTextErrorDataMaxAggregateInputObjectSchema.optional() }), count: z.object({ where: MissingTextErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([MissingTextErrorDataOrderByWithRelationInputObjectSchema, MissingTextErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: MissingTextErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(MissingTextErrorDataScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), MissingTextErrorDataCountAggregateInputObjectSchema]).optional() })
} as MissingTextErrorDataInputSchemaType;
