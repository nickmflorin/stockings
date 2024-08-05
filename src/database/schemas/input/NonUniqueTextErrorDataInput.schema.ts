
/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '../../../../generated/models';

;
import { NonUniqueTextErrorDataSelectObjectSchema } from '../objects/NonUniqueTextErrorDataSelect.schema';
;
import { NonUniqueTextErrorDataWhereUniqueInputObjectSchema } from '../objects/NonUniqueTextErrorDataWhereUniqueInput.schema';
import { NonUniqueTextErrorDataWhereInputObjectSchema } from '../objects/NonUniqueTextErrorDataWhereInput.schema';
import { NonUniqueTextErrorDataOrderByWithRelationInputObjectSchema } from '../objects/NonUniqueTextErrorDataOrderByWithRelationInput.schema';
import { NonUniqueTextErrorDataScalarFieldEnumSchema } from '../enums/NonUniqueTextErrorDataScalarFieldEnum.schema';
import { NonUniqueTextErrorDataCreateInputObjectSchema } from '../objects/NonUniqueTextErrorDataCreateInput.schema';
import { NonUniqueTextErrorDataUncheckedCreateInputObjectSchema } from '../objects/NonUniqueTextErrorDataUncheckedCreateInput.schema';
import { NonUniqueTextErrorDataCreateManyInputObjectSchema } from '../objects/NonUniqueTextErrorDataCreateManyInput.schema';
import { NonUniqueTextErrorDataUpdateInputObjectSchema } from '../objects/NonUniqueTextErrorDataUpdateInput.schema';
import { NonUniqueTextErrorDataUncheckedUpdateInputObjectSchema } from '../objects/NonUniqueTextErrorDataUncheckedUpdateInput.schema';
import { NonUniqueTextErrorDataUpdateManyMutationInputObjectSchema } from '../objects/NonUniqueTextErrorDataUpdateManyMutationInput.schema';
import { NonUniqueTextErrorDataUncheckedUpdateManyInputObjectSchema } from '../objects/NonUniqueTextErrorDataUncheckedUpdateManyInput.schema';
import { NonUniqueTextErrorDataCountAggregateInputObjectSchema } from '../objects/NonUniqueTextErrorDataCountAggregateInput.schema';
import { NonUniqueTextErrorDataMinAggregateInputObjectSchema } from '../objects/NonUniqueTextErrorDataMinAggregateInput.schema';
import { NonUniqueTextErrorDataMaxAggregateInputObjectSchema } from '../objects/NonUniqueTextErrorDataMaxAggregateInput.schema';
import { NonUniqueTextErrorDataOrderByWithAggregationInputObjectSchema } from '../objects/NonUniqueTextErrorDataOrderByWithAggregationInput.schema';
import { NonUniqueTextErrorDataScalarWhereWithAggregatesInputObjectSchema } from '../objects/NonUniqueTextErrorDataScalarWhereWithAggregatesInput.schema'

type NonUniqueTextErrorDataInputSchemaType = {
    findUnique: z.ZodType<Prisma.NonUniqueTextErrorDataFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.NonUniqueTextErrorDataFindFirstArgs>,
    findMany: z.ZodType<Prisma.NonUniqueTextErrorDataFindManyArgs>,
    create: z.ZodType<Prisma.NonUniqueTextErrorDataCreateArgs>,
    createMany: z.ZodType<Prisma.NonUniqueTextErrorDataCreateManyArgs>,
    delete: z.ZodType<Prisma.NonUniqueTextErrorDataDeleteArgs>,
    deleteMany: z.ZodType<Prisma.NonUniqueTextErrorDataDeleteManyArgs>,
    update: z.ZodType<Prisma.NonUniqueTextErrorDataUpdateArgs>,
    updateMany: z.ZodType<Prisma.NonUniqueTextErrorDataUpdateManyArgs>,
    upsert: z.ZodType<Prisma.NonUniqueTextErrorDataUpsertArgs>,
    aggregate: z.ZodType<Prisma.NonUniqueTextErrorDataAggregateArgs>,
    groupBy: z.ZodType<Prisma.NonUniqueTextErrorDataGroupByArgs>,
    count: z.ZodType<Prisma.NonUniqueTextErrorDataCountArgs>
}

export const NonUniqueTextErrorDataInputSchema = {
    findUnique: z.object({ select: z.lazy(() => NonUniqueTextErrorDataSelectObjectSchema.optional()), where: NonUniqueTextErrorDataWhereUniqueInputObjectSchema }), findFirst: z.object({ select: z.lazy(() => NonUniqueTextErrorDataSelectObjectSchema.optional()), where: NonUniqueTextErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([NonUniqueTextErrorDataOrderByWithRelationInputObjectSchema, NonUniqueTextErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: NonUniqueTextErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(NonUniqueTextErrorDataScalarFieldEnumSchema).optional() }), findMany: z.object({ select: z.lazy(() => NonUniqueTextErrorDataSelectObjectSchema.optional()), where: NonUniqueTextErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([NonUniqueTextErrorDataOrderByWithRelationInputObjectSchema, NonUniqueTextErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: NonUniqueTextErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(NonUniqueTextErrorDataScalarFieldEnumSchema).optional() }), create: z.object({ select: z.lazy(() => NonUniqueTextErrorDataSelectObjectSchema.optional()), data: z.union([NonUniqueTextErrorDataCreateInputObjectSchema, NonUniqueTextErrorDataUncheckedCreateInputObjectSchema]) }), createMany: z.object({ data: z.union([NonUniqueTextErrorDataCreateManyInputObjectSchema, z.array(NonUniqueTextErrorDataCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }), 'delete': z.object({ select: z.lazy(() => NonUniqueTextErrorDataSelectObjectSchema.optional()), where: NonUniqueTextErrorDataWhereUniqueInputObjectSchema }), deleteMany: z.object({ where: NonUniqueTextErrorDataWhereInputObjectSchema.optional() }), update: z.object({ select: z.lazy(() => NonUniqueTextErrorDataSelectObjectSchema.optional()), data: z.union([NonUniqueTextErrorDataUpdateInputObjectSchema, NonUniqueTextErrorDataUncheckedUpdateInputObjectSchema]), where: NonUniqueTextErrorDataWhereUniqueInputObjectSchema }), updateMany: z.object({ data: z.union([NonUniqueTextErrorDataUpdateManyMutationInputObjectSchema, NonUniqueTextErrorDataUncheckedUpdateManyInputObjectSchema]), where: NonUniqueTextErrorDataWhereInputObjectSchema.optional() }), upsert: z.object({ select: z.lazy(() => NonUniqueTextErrorDataSelectObjectSchema.optional()), where: NonUniqueTextErrorDataWhereUniqueInputObjectSchema, create: z.union([NonUniqueTextErrorDataCreateInputObjectSchema, NonUniqueTextErrorDataUncheckedCreateInputObjectSchema]), update: z.union([NonUniqueTextErrorDataUpdateInputObjectSchema, NonUniqueTextErrorDataUncheckedUpdateInputObjectSchema]) }), aggregate: z.object({ where: NonUniqueTextErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([NonUniqueTextErrorDataOrderByWithRelationInputObjectSchema, NonUniqueTextErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: NonUniqueTextErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), NonUniqueTextErrorDataCountAggregateInputObjectSchema]).optional(), _min: NonUniqueTextErrorDataMinAggregateInputObjectSchema.optional(), _max: NonUniqueTextErrorDataMaxAggregateInputObjectSchema.optional() }), groupBy: z.object({ where: NonUniqueTextErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([NonUniqueTextErrorDataOrderByWithAggregationInputObjectSchema, NonUniqueTextErrorDataOrderByWithAggregationInputObjectSchema.array()]).optional(), having: NonUniqueTextErrorDataScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(NonUniqueTextErrorDataScalarFieldEnumSchema), _count: z.union([z.literal(true), NonUniqueTextErrorDataCountAggregateInputObjectSchema]).optional(), _min: NonUniqueTextErrorDataMinAggregateInputObjectSchema.optional(), _max: NonUniqueTextErrorDataMaxAggregateInputObjectSchema.optional() }), count: z.object({ where: NonUniqueTextErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([NonUniqueTextErrorDataOrderByWithRelationInputObjectSchema, NonUniqueTextErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: NonUniqueTextErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(NonUniqueTextErrorDataScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), NonUniqueTextErrorDataCountAggregateInputObjectSchema]).optional() })
} as NonUniqueTextErrorDataInputSchemaType;
