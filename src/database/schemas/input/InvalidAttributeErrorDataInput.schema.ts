
/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '../../../../generated/models';

;
import { InvalidAttributeErrorDataSelectObjectSchema } from '../objects/InvalidAttributeErrorDataSelect.schema';
;
import { InvalidAttributeErrorDataWhereUniqueInputObjectSchema } from '../objects/InvalidAttributeErrorDataWhereUniqueInput.schema';
import { InvalidAttributeErrorDataWhereInputObjectSchema } from '../objects/InvalidAttributeErrorDataWhereInput.schema';
import { InvalidAttributeErrorDataOrderByWithRelationInputObjectSchema } from '../objects/InvalidAttributeErrorDataOrderByWithRelationInput.schema';
import { InvalidAttributeErrorDataScalarFieldEnumSchema } from '../enums/InvalidAttributeErrorDataScalarFieldEnum.schema';
import { InvalidAttributeErrorDataCreateInputObjectSchema } from '../objects/InvalidAttributeErrorDataCreateInput.schema';
import { InvalidAttributeErrorDataUncheckedCreateInputObjectSchema } from '../objects/InvalidAttributeErrorDataUncheckedCreateInput.schema';
import { InvalidAttributeErrorDataCreateManyInputObjectSchema } from '../objects/InvalidAttributeErrorDataCreateManyInput.schema';
import { InvalidAttributeErrorDataUpdateInputObjectSchema } from '../objects/InvalidAttributeErrorDataUpdateInput.schema';
import { InvalidAttributeErrorDataUncheckedUpdateInputObjectSchema } from '../objects/InvalidAttributeErrorDataUncheckedUpdateInput.schema';
import { InvalidAttributeErrorDataUpdateManyMutationInputObjectSchema } from '../objects/InvalidAttributeErrorDataUpdateManyMutationInput.schema';
import { InvalidAttributeErrorDataUncheckedUpdateManyInputObjectSchema } from '../objects/InvalidAttributeErrorDataUncheckedUpdateManyInput.schema';
import { InvalidAttributeErrorDataCountAggregateInputObjectSchema } from '../objects/InvalidAttributeErrorDataCountAggregateInput.schema';
import { InvalidAttributeErrorDataMinAggregateInputObjectSchema } from '../objects/InvalidAttributeErrorDataMinAggregateInput.schema';
import { InvalidAttributeErrorDataMaxAggregateInputObjectSchema } from '../objects/InvalidAttributeErrorDataMaxAggregateInput.schema';
import { InvalidAttributeErrorDataOrderByWithAggregationInputObjectSchema } from '../objects/InvalidAttributeErrorDataOrderByWithAggregationInput.schema';
import { InvalidAttributeErrorDataScalarWhereWithAggregatesInputObjectSchema } from '../objects/InvalidAttributeErrorDataScalarWhereWithAggregatesInput.schema'

type InvalidAttributeErrorDataInputSchemaType = {
    findUnique: z.ZodType<Prisma.InvalidAttributeErrorDataFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.InvalidAttributeErrorDataFindFirstArgs>,
    findMany: z.ZodType<Prisma.InvalidAttributeErrorDataFindManyArgs>,
    create: z.ZodType<Prisma.InvalidAttributeErrorDataCreateArgs>,
    createMany: z.ZodType<Prisma.InvalidAttributeErrorDataCreateManyArgs>,
    delete: z.ZodType<Prisma.InvalidAttributeErrorDataDeleteArgs>,
    deleteMany: z.ZodType<Prisma.InvalidAttributeErrorDataDeleteManyArgs>,
    update: z.ZodType<Prisma.InvalidAttributeErrorDataUpdateArgs>,
    updateMany: z.ZodType<Prisma.InvalidAttributeErrorDataUpdateManyArgs>,
    upsert: z.ZodType<Prisma.InvalidAttributeErrorDataUpsertArgs>,
    aggregate: z.ZodType<Prisma.InvalidAttributeErrorDataAggregateArgs>,
    groupBy: z.ZodType<Prisma.InvalidAttributeErrorDataGroupByArgs>,
    count: z.ZodType<Prisma.InvalidAttributeErrorDataCountArgs>
}

export const InvalidAttributeErrorDataInputSchema = {
    findUnique: z.object({ select: z.lazy(() => InvalidAttributeErrorDataSelectObjectSchema.optional()), where: InvalidAttributeErrorDataWhereUniqueInputObjectSchema }), findFirst: z.object({ select: z.lazy(() => InvalidAttributeErrorDataSelectObjectSchema.optional()), where: InvalidAttributeErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([InvalidAttributeErrorDataOrderByWithRelationInputObjectSchema, InvalidAttributeErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: InvalidAttributeErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(InvalidAttributeErrorDataScalarFieldEnumSchema).optional() }), findMany: z.object({ select: z.lazy(() => InvalidAttributeErrorDataSelectObjectSchema.optional()), where: InvalidAttributeErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([InvalidAttributeErrorDataOrderByWithRelationInputObjectSchema, InvalidAttributeErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: InvalidAttributeErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(InvalidAttributeErrorDataScalarFieldEnumSchema).optional() }), create: z.object({ select: z.lazy(() => InvalidAttributeErrorDataSelectObjectSchema.optional()), data: z.union([InvalidAttributeErrorDataCreateInputObjectSchema, InvalidAttributeErrorDataUncheckedCreateInputObjectSchema]) }), createMany: z.object({ data: z.union([InvalidAttributeErrorDataCreateManyInputObjectSchema, z.array(InvalidAttributeErrorDataCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }), 'delete': z.object({ select: z.lazy(() => InvalidAttributeErrorDataSelectObjectSchema.optional()), where: InvalidAttributeErrorDataWhereUniqueInputObjectSchema }), deleteMany: z.object({ where: InvalidAttributeErrorDataWhereInputObjectSchema.optional() }), update: z.object({ select: z.lazy(() => InvalidAttributeErrorDataSelectObjectSchema.optional()), data: z.union([InvalidAttributeErrorDataUpdateInputObjectSchema, InvalidAttributeErrorDataUncheckedUpdateInputObjectSchema]), where: InvalidAttributeErrorDataWhereUniqueInputObjectSchema }), updateMany: z.object({ data: z.union([InvalidAttributeErrorDataUpdateManyMutationInputObjectSchema, InvalidAttributeErrorDataUncheckedUpdateManyInputObjectSchema]), where: InvalidAttributeErrorDataWhereInputObjectSchema.optional() }), upsert: z.object({ select: z.lazy(() => InvalidAttributeErrorDataSelectObjectSchema.optional()), where: InvalidAttributeErrorDataWhereUniqueInputObjectSchema, create: z.union([InvalidAttributeErrorDataCreateInputObjectSchema, InvalidAttributeErrorDataUncheckedCreateInputObjectSchema]), update: z.union([InvalidAttributeErrorDataUpdateInputObjectSchema, InvalidAttributeErrorDataUncheckedUpdateInputObjectSchema]) }), aggregate: z.object({ where: InvalidAttributeErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([InvalidAttributeErrorDataOrderByWithRelationInputObjectSchema, InvalidAttributeErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: InvalidAttributeErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), InvalidAttributeErrorDataCountAggregateInputObjectSchema]).optional(), _min: InvalidAttributeErrorDataMinAggregateInputObjectSchema.optional(), _max: InvalidAttributeErrorDataMaxAggregateInputObjectSchema.optional() }), groupBy: z.object({ where: InvalidAttributeErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([InvalidAttributeErrorDataOrderByWithAggregationInputObjectSchema, InvalidAttributeErrorDataOrderByWithAggregationInputObjectSchema.array()]).optional(), having: InvalidAttributeErrorDataScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(InvalidAttributeErrorDataScalarFieldEnumSchema), _count: z.union([z.literal(true), InvalidAttributeErrorDataCountAggregateInputObjectSchema]).optional(), _min: InvalidAttributeErrorDataMinAggregateInputObjectSchema.optional(), _max: InvalidAttributeErrorDataMaxAggregateInputObjectSchema.optional() }), count: z.object({ where: InvalidAttributeErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([InvalidAttributeErrorDataOrderByWithRelationInputObjectSchema, InvalidAttributeErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: InvalidAttributeErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(InvalidAttributeErrorDataScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), InvalidAttributeErrorDataCountAggregateInputObjectSchema]).optional() })
} as InvalidAttributeErrorDataInputSchemaType;
