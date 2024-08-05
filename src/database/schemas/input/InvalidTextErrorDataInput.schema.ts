
/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@zenstackhq/runtime/models';

;
import { InvalidTextErrorDataSelectObjectSchema } from '../objects/InvalidTextErrorDataSelect.schema';
;
import { InvalidTextErrorDataWhereUniqueInputObjectSchema } from '../objects/InvalidTextErrorDataWhereUniqueInput.schema';
import { InvalidTextErrorDataWhereInputObjectSchema } from '../objects/InvalidTextErrorDataWhereInput.schema';
import { InvalidTextErrorDataOrderByWithRelationInputObjectSchema } from '../objects/InvalidTextErrorDataOrderByWithRelationInput.schema';
import { InvalidTextErrorDataScalarFieldEnumSchema } from '../enums/InvalidTextErrorDataScalarFieldEnum.schema';
import { InvalidTextErrorDataCreateInputObjectSchema } from '../objects/InvalidTextErrorDataCreateInput.schema';
import { InvalidTextErrorDataUncheckedCreateInputObjectSchema } from '../objects/InvalidTextErrorDataUncheckedCreateInput.schema';
import { InvalidTextErrorDataCreateManyInputObjectSchema } from '../objects/InvalidTextErrorDataCreateManyInput.schema';
import { InvalidTextErrorDataUpdateInputObjectSchema } from '../objects/InvalidTextErrorDataUpdateInput.schema';
import { InvalidTextErrorDataUncheckedUpdateInputObjectSchema } from '../objects/InvalidTextErrorDataUncheckedUpdateInput.schema';
import { InvalidTextErrorDataUpdateManyMutationInputObjectSchema } from '../objects/InvalidTextErrorDataUpdateManyMutationInput.schema';
import { InvalidTextErrorDataUncheckedUpdateManyInputObjectSchema } from '../objects/InvalidTextErrorDataUncheckedUpdateManyInput.schema';
import { InvalidTextErrorDataCountAggregateInputObjectSchema } from '../objects/InvalidTextErrorDataCountAggregateInput.schema';
import { InvalidTextErrorDataMinAggregateInputObjectSchema } from '../objects/InvalidTextErrorDataMinAggregateInput.schema';
import { InvalidTextErrorDataMaxAggregateInputObjectSchema } from '../objects/InvalidTextErrorDataMaxAggregateInput.schema';
import { InvalidTextErrorDataOrderByWithAggregationInputObjectSchema } from '../objects/InvalidTextErrorDataOrderByWithAggregationInput.schema';
import { InvalidTextErrorDataScalarWhereWithAggregatesInputObjectSchema } from '../objects/InvalidTextErrorDataScalarWhereWithAggregatesInput.schema'

type InvalidTextErrorDataInputSchemaType = {
    findUnique: z.ZodType<Prisma.InvalidTextErrorDataFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.InvalidTextErrorDataFindFirstArgs>,
    findMany: z.ZodType<Prisma.InvalidTextErrorDataFindManyArgs>,
    create: z.ZodType<Prisma.InvalidTextErrorDataCreateArgs>,
    createMany: z.ZodType<Prisma.InvalidTextErrorDataCreateManyArgs>,
    delete: z.ZodType<Prisma.InvalidTextErrorDataDeleteArgs>,
    deleteMany: z.ZodType<Prisma.InvalidTextErrorDataDeleteManyArgs>,
    update: z.ZodType<Prisma.InvalidTextErrorDataUpdateArgs>,
    updateMany: z.ZodType<Prisma.InvalidTextErrorDataUpdateManyArgs>,
    upsert: z.ZodType<Prisma.InvalidTextErrorDataUpsertArgs>,
    aggregate: z.ZodType<Prisma.InvalidTextErrorDataAggregateArgs>,
    groupBy: z.ZodType<Prisma.InvalidTextErrorDataGroupByArgs>,
    count: z.ZodType<Prisma.InvalidTextErrorDataCountArgs>
}

export const InvalidTextErrorDataInputSchema = {
    findUnique: z.object({ select: z.lazy(() => InvalidTextErrorDataSelectObjectSchema.optional()), where: InvalidTextErrorDataWhereUniqueInputObjectSchema }), findFirst: z.object({ select: z.lazy(() => InvalidTextErrorDataSelectObjectSchema.optional()), where: InvalidTextErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([InvalidTextErrorDataOrderByWithRelationInputObjectSchema, InvalidTextErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: InvalidTextErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(InvalidTextErrorDataScalarFieldEnumSchema).optional() }), findMany: z.object({ select: z.lazy(() => InvalidTextErrorDataSelectObjectSchema.optional()), where: InvalidTextErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([InvalidTextErrorDataOrderByWithRelationInputObjectSchema, InvalidTextErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: InvalidTextErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(InvalidTextErrorDataScalarFieldEnumSchema).optional() }), create: z.object({ select: z.lazy(() => InvalidTextErrorDataSelectObjectSchema.optional()), data: z.union([InvalidTextErrorDataCreateInputObjectSchema, InvalidTextErrorDataUncheckedCreateInputObjectSchema]) }), createMany: z.object({ data: z.union([InvalidTextErrorDataCreateManyInputObjectSchema, z.array(InvalidTextErrorDataCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }), 'delete': z.object({ select: z.lazy(() => InvalidTextErrorDataSelectObjectSchema.optional()), where: InvalidTextErrorDataWhereUniqueInputObjectSchema }), deleteMany: z.object({ where: InvalidTextErrorDataWhereInputObjectSchema.optional() }), update: z.object({ select: z.lazy(() => InvalidTextErrorDataSelectObjectSchema.optional()), data: z.union([InvalidTextErrorDataUpdateInputObjectSchema, InvalidTextErrorDataUncheckedUpdateInputObjectSchema]), where: InvalidTextErrorDataWhereUniqueInputObjectSchema }), updateMany: z.object({ data: z.union([InvalidTextErrorDataUpdateManyMutationInputObjectSchema, InvalidTextErrorDataUncheckedUpdateManyInputObjectSchema]), where: InvalidTextErrorDataWhereInputObjectSchema.optional() }), upsert: z.object({ select: z.lazy(() => InvalidTextErrorDataSelectObjectSchema.optional()), where: InvalidTextErrorDataWhereUniqueInputObjectSchema, create: z.union([InvalidTextErrorDataCreateInputObjectSchema, InvalidTextErrorDataUncheckedCreateInputObjectSchema]), update: z.union([InvalidTextErrorDataUpdateInputObjectSchema, InvalidTextErrorDataUncheckedUpdateInputObjectSchema]) }), aggregate: z.object({ where: InvalidTextErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([InvalidTextErrorDataOrderByWithRelationInputObjectSchema, InvalidTextErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: InvalidTextErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), InvalidTextErrorDataCountAggregateInputObjectSchema]).optional(), _min: InvalidTextErrorDataMinAggregateInputObjectSchema.optional(), _max: InvalidTextErrorDataMaxAggregateInputObjectSchema.optional() }), groupBy: z.object({ where: InvalidTextErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([InvalidTextErrorDataOrderByWithAggregationInputObjectSchema, InvalidTextErrorDataOrderByWithAggregationInputObjectSchema.array()]).optional(), having: InvalidTextErrorDataScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(InvalidTextErrorDataScalarFieldEnumSchema), _count: z.union([z.literal(true), InvalidTextErrorDataCountAggregateInputObjectSchema]).optional(), _min: InvalidTextErrorDataMinAggregateInputObjectSchema.optional(), _max: InvalidTextErrorDataMaxAggregateInputObjectSchema.optional() }), count: z.object({ where: InvalidTextErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([InvalidTextErrorDataOrderByWithRelationInputObjectSchema, InvalidTextErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: InvalidTextErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(InvalidTextErrorDataScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), InvalidTextErrorDataCountAggregateInputObjectSchema]).optional() })
} as InvalidTextErrorDataInputSchemaType;
