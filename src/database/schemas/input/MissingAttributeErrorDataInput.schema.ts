
/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@zenstackhq/runtime/models';

;
import { MissingAttributeErrorDataSelectObjectSchema } from '../objects/MissingAttributeErrorDataSelect.schema';
;
import { MissingAttributeErrorDataWhereUniqueInputObjectSchema } from '../objects/MissingAttributeErrorDataWhereUniqueInput.schema';
import { MissingAttributeErrorDataWhereInputObjectSchema } from '../objects/MissingAttributeErrorDataWhereInput.schema';
import { MissingAttributeErrorDataOrderByWithRelationInputObjectSchema } from '../objects/MissingAttributeErrorDataOrderByWithRelationInput.schema';
import { MissingAttributeErrorDataScalarFieldEnumSchema } from '../enums/MissingAttributeErrorDataScalarFieldEnum.schema';
import { MissingAttributeErrorDataCreateInputObjectSchema } from '../objects/MissingAttributeErrorDataCreateInput.schema';
import { MissingAttributeErrorDataUncheckedCreateInputObjectSchema } from '../objects/MissingAttributeErrorDataUncheckedCreateInput.schema';
import { MissingAttributeErrorDataCreateManyInputObjectSchema } from '../objects/MissingAttributeErrorDataCreateManyInput.schema';
import { MissingAttributeErrorDataUpdateInputObjectSchema } from '../objects/MissingAttributeErrorDataUpdateInput.schema';
import { MissingAttributeErrorDataUncheckedUpdateInputObjectSchema } from '../objects/MissingAttributeErrorDataUncheckedUpdateInput.schema';
import { MissingAttributeErrorDataUpdateManyMutationInputObjectSchema } from '../objects/MissingAttributeErrorDataUpdateManyMutationInput.schema';
import { MissingAttributeErrorDataUncheckedUpdateManyInputObjectSchema } from '../objects/MissingAttributeErrorDataUncheckedUpdateManyInput.schema';
import { MissingAttributeErrorDataCountAggregateInputObjectSchema } from '../objects/MissingAttributeErrorDataCountAggregateInput.schema';
import { MissingAttributeErrorDataMinAggregateInputObjectSchema } from '../objects/MissingAttributeErrorDataMinAggregateInput.schema';
import { MissingAttributeErrorDataMaxAggregateInputObjectSchema } from '../objects/MissingAttributeErrorDataMaxAggregateInput.schema';
import { MissingAttributeErrorDataOrderByWithAggregationInputObjectSchema } from '../objects/MissingAttributeErrorDataOrderByWithAggregationInput.schema';
import { MissingAttributeErrorDataScalarWhereWithAggregatesInputObjectSchema } from '../objects/MissingAttributeErrorDataScalarWhereWithAggregatesInput.schema'

type MissingAttributeErrorDataInputSchemaType = {
    findUnique: z.ZodType<Prisma.MissingAttributeErrorDataFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.MissingAttributeErrorDataFindFirstArgs>,
    findMany: z.ZodType<Prisma.MissingAttributeErrorDataFindManyArgs>,
    create: z.ZodType<Prisma.MissingAttributeErrorDataCreateArgs>,
    createMany: z.ZodType<Prisma.MissingAttributeErrorDataCreateManyArgs>,
    delete: z.ZodType<Prisma.MissingAttributeErrorDataDeleteArgs>,
    deleteMany: z.ZodType<Prisma.MissingAttributeErrorDataDeleteManyArgs>,
    update: z.ZodType<Prisma.MissingAttributeErrorDataUpdateArgs>,
    updateMany: z.ZodType<Prisma.MissingAttributeErrorDataUpdateManyArgs>,
    upsert: z.ZodType<Prisma.MissingAttributeErrorDataUpsertArgs>,
    aggregate: z.ZodType<Prisma.MissingAttributeErrorDataAggregateArgs>,
    groupBy: z.ZodType<Prisma.MissingAttributeErrorDataGroupByArgs>,
    count: z.ZodType<Prisma.MissingAttributeErrorDataCountArgs>
}

export const MissingAttributeErrorDataInputSchema = {
    findUnique: z.object({ select: z.lazy(() => MissingAttributeErrorDataSelectObjectSchema.optional()), where: MissingAttributeErrorDataWhereUniqueInputObjectSchema }), findFirst: z.object({ select: z.lazy(() => MissingAttributeErrorDataSelectObjectSchema.optional()), where: MissingAttributeErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([MissingAttributeErrorDataOrderByWithRelationInputObjectSchema, MissingAttributeErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: MissingAttributeErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(MissingAttributeErrorDataScalarFieldEnumSchema).optional() }), findMany: z.object({ select: z.lazy(() => MissingAttributeErrorDataSelectObjectSchema.optional()), where: MissingAttributeErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([MissingAttributeErrorDataOrderByWithRelationInputObjectSchema, MissingAttributeErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: MissingAttributeErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(MissingAttributeErrorDataScalarFieldEnumSchema).optional() }), create: z.object({ select: z.lazy(() => MissingAttributeErrorDataSelectObjectSchema.optional()), data: z.union([MissingAttributeErrorDataCreateInputObjectSchema, MissingAttributeErrorDataUncheckedCreateInputObjectSchema]) }), createMany: z.object({ data: z.union([MissingAttributeErrorDataCreateManyInputObjectSchema, z.array(MissingAttributeErrorDataCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }), 'delete': z.object({ select: z.lazy(() => MissingAttributeErrorDataSelectObjectSchema.optional()), where: MissingAttributeErrorDataWhereUniqueInputObjectSchema }), deleteMany: z.object({ where: MissingAttributeErrorDataWhereInputObjectSchema.optional() }), update: z.object({ select: z.lazy(() => MissingAttributeErrorDataSelectObjectSchema.optional()), data: z.union([MissingAttributeErrorDataUpdateInputObjectSchema, MissingAttributeErrorDataUncheckedUpdateInputObjectSchema]), where: MissingAttributeErrorDataWhereUniqueInputObjectSchema }), updateMany: z.object({ data: z.union([MissingAttributeErrorDataUpdateManyMutationInputObjectSchema, MissingAttributeErrorDataUncheckedUpdateManyInputObjectSchema]), where: MissingAttributeErrorDataWhereInputObjectSchema.optional() }), upsert: z.object({ select: z.lazy(() => MissingAttributeErrorDataSelectObjectSchema.optional()), where: MissingAttributeErrorDataWhereUniqueInputObjectSchema, create: z.union([MissingAttributeErrorDataCreateInputObjectSchema, MissingAttributeErrorDataUncheckedCreateInputObjectSchema]), update: z.union([MissingAttributeErrorDataUpdateInputObjectSchema, MissingAttributeErrorDataUncheckedUpdateInputObjectSchema]) }), aggregate: z.object({ where: MissingAttributeErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([MissingAttributeErrorDataOrderByWithRelationInputObjectSchema, MissingAttributeErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: MissingAttributeErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), MissingAttributeErrorDataCountAggregateInputObjectSchema]).optional(), _min: MissingAttributeErrorDataMinAggregateInputObjectSchema.optional(), _max: MissingAttributeErrorDataMaxAggregateInputObjectSchema.optional() }), groupBy: z.object({ where: MissingAttributeErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([MissingAttributeErrorDataOrderByWithAggregationInputObjectSchema, MissingAttributeErrorDataOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MissingAttributeErrorDataScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(MissingAttributeErrorDataScalarFieldEnumSchema), _count: z.union([z.literal(true), MissingAttributeErrorDataCountAggregateInputObjectSchema]).optional(), _min: MissingAttributeErrorDataMinAggregateInputObjectSchema.optional(), _max: MissingAttributeErrorDataMaxAggregateInputObjectSchema.optional() }), count: z.object({ where: MissingAttributeErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([MissingAttributeErrorDataOrderByWithRelationInputObjectSchema, MissingAttributeErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: MissingAttributeErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(MissingAttributeErrorDataScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), MissingAttributeErrorDataCountAggregateInputObjectSchema]).optional() })
} as MissingAttributeErrorDataInputSchemaType;
