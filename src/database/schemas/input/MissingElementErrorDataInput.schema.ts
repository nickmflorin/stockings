
/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@zenstackhq/runtime/models';

;
import { MissingElementErrorDataSelectObjectSchema } from '../objects/MissingElementErrorDataSelect.schema';
;
import { MissingElementErrorDataWhereUniqueInputObjectSchema } from '../objects/MissingElementErrorDataWhereUniqueInput.schema';
import { MissingElementErrorDataWhereInputObjectSchema } from '../objects/MissingElementErrorDataWhereInput.schema';
import { MissingElementErrorDataOrderByWithRelationInputObjectSchema } from '../objects/MissingElementErrorDataOrderByWithRelationInput.schema';
import { MissingElementErrorDataScalarFieldEnumSchema } from '../enums/MissingElementErrorDataScalarFieldEnum.schema';
import { MissingElementErrorDataCreateInputObjectSchema } from '../objects/MissingElementErrorDataCreateInput.schema';
import { MissingElementErrorDataUncheckedCreateInputObjectSchema } from '../objects/MissingElementErrorDataUncheckedCreateInput.schema';
import { MissingElementErrorDataCreateManyInputObjectSchema } from '../objects/MissingElementErrorDataCreateManyInput.schema';
import { MissingElementErrorDataUpdateInputObjectSchema } from '../objects/MissingElementErrorDataUpdateInput.schema';
import { MissingElementErrorDataUncheckedUpdateInputObjectSchema } from '../objects/MissingElementErrorDataUncheckedUpdateInput.schema';
import { MissingElementErrorDataUpdateManyMutationInputObjectSchema } from '../objects/MissingElementErrorDataUpdateManyMutationInput.schema';
import { MissingElementErrorDataUncheckedUpdateManyInputObjectSchema } from '../objects/MissingElementErrorDataUncheckedUpdateManyInput.schema';
import { MissingElementErrorDataCountAggregateInputObjectSchema } from '../objects/MissingElementErrorDataCountAggregateInput.schema';
import { MissingElementErrorDataMinAggregateInputObjectSchema } from '../objects/MissingElementErrorDataMinAggregateInput.schema';
import { MissingElementErrorDataMaxAggregateInputObjectSchema } from '../objects/MissingElementErrorDataMaxAggregateInput.schema';
import { MissingElementErrorDataOrderByWithAggregationInputObjectSchema } from '../objects/MissingElementErrorDataOrderByWithAggregationInput.schema';
import { MissingElementErrorDataScalarWhereWithAggregatesInputObjectSchema } from '../objects/MissingElementErrorDataScalarWhereWithAggregatesInput.schema'

type MissingElementErrorDataInputSchemaType = {
    findUnique: z.ZodType<Prisma.MissingElementErrorDataFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.MissingElementErrorDataFindFirstArgs>,
    findMany: z.ZodType<Prisma.MissingElementErrorDataFindManyArgs>,
    create: z.ZodType<Prisma.MissingElementErrorDataCreateArgs>,
    createMany: z.ZodType<Prisma.MissingElementErrorDataCreateManyArgs>,
    delete: z.ZodType<Prisma.MissingElementErrorDataDeleteArgs>,
    deleteMany: z.ZodType<Prisma.MissingElementErrorDataDeleteManyArgs>,
    update: z.ZodType<Prisma.MissingElementErrorDataUpdateArgs>,
    updateMany: z.ZodType<Prisma.MissingElementErrorDataUpdateManyArgs>,
    upsert: z.ZodType<Prisma.MissingElementErrorDataUpsertArgs>,
    aggregate: z.ZodType<Prisma.MissingElementErrorDataAggregateArgs>,
    groupBy: z.ZodType<Prisma.MissingElementErrorDataGroupByArgs>,
    count: z.ZodType<Prisma.MissingElementErrorDataCountArgs>
}

export const MissingElementErrorDataInputSchema = {
    findUnique: z.object({ select: z.lazy(() => MissingElementErrorDataSelectObjectSchema.optional()), where: MissingElementErrorDataWhereUniqueInputObjectSchema }), findFirst: z.object({ select: z.lazy(() => MissingElementErrorDataSelectObjectSchema.optional()), where: MissingElementErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([MissingElementErrorDataOrderByWithRelationInputObjectSchema, MissingElementErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: MissingElementErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(MissingElementErrorDataScalarFieldEnumSchema).optional() }), findMany: z.object({ select: z.lazy(() => MissingElementErrorDataSelectObjectSchema.optional()), where: MissingElementErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([MissingElementErrorDataOrderByWithRelationInputObjectSchema, MissingElementErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: MissingElementErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(MissingElementErrorDataScalarFieldEnumSchema).optional() }), create: z.object({ select: z.lazy(() => MissingElementErrorDataSelectObjectSchema.optional()), data: z.union([MissingElementErrorDataCreateInputObjectSchema, MissingElementErrorDataUncheckedCreateInputObjectSchema]) }), createMany: z.object({ data: z.union([MissingElementErrorDataCreateManyInputObjectSchema, z.array(MissingElementErrorDataCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }), 'delete': z.object({ select: z.lazy(() => MissingElementErrorDataSelectObjectSchema.optional()), where: MissingElementErrorDataWhereUniqueInputObjectSchema }), deleteMany: z.object({ where: MissingElementErrorDataWhereInputObjectSchema.optional() }), update: z.object({ select: z.lazy(() => MissingElementErrorDataSelectObjectSchema.optional()), data: z.union([MissingElementErrorDataUpdateInputObjectSchema, MissingElementErrorDataUncheckedUpdateInputObjectSchema]), where: MissingElementErrorDataWhereUniqueInputObjectSchema }), updateMany: z.object({ data: z.union([MissingElementErrorDataUpdateManyMutationInputObjectSchema, MissingElementErrorDataUncheckedUpdateManyInputObjectSchema]), where: MissingElementErrorDataWhereInputObjectSchema.optional() }), upsert: z.object({ select: z.lazy(() => MissingElementErrorDataSelectObjectSchema.optional()), where: MissingElementErrorDataWhereUniqueInputObjectSchema, create: z.union([MissingElementErrorDataCreateInputObjectSchema, MissingElementErrorDataUncheckedCreateInputObjectSchema]), update: z.union([MissingElementErrorDataUpdateInputObjectSchema, MissingElementErrorDataUncheckedUpdateInputObjectSchema]) }), aggregate: z.object({ where: MissingElementErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([MissingElementErrorDataOrderByWithRelationInputObjectSchema, MissingElementErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: MissingElementErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), MissingElementErrorDataCountAggregateInputObjectSchema]).optional(), _min: MissingElementErrorDataMinAggregateInputObjectSchema.optional(), _max: MissingElementErrorDataMaxAggregateInputObjectSchema.optional() }), groupBy: z.object({ where: MissingElementErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([MissingElementErrorDataOrderByWithAggregationInputObjectSchema, MissingElementErrorDataOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MissingElementErrorDataScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(MissingElementErrorDataScalarFieldEnumSchema), _count: z.union([z.literal(true), MissingElementErrorDataCountAggregateInputObjectSchema]).optional(), _min: MissingElementErrorDataMinAggregateInputObjectSchema.optional(), _max: MissingElementErrorDataMaxAggregateInputObjectSchema.optional() }), count: z.object({ where: MissingElementErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([MissingElementErrorDataOrderByWithRelationInputObjectSchema, MissingElementErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: MissingElementErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(MissingElementErrorDataScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), MissingElementErrorDataCountAggregateInputObjectSchema]).optional() })
} as MissingElementErrorDataInputSchemaType;
