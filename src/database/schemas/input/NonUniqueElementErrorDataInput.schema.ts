
/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '../../../../generated/models';

;
import { NonUniqueElementErrorDataSelectObjectSchema } from '../objects/NonUniqueElementErrorDataSelect.schema';
;
import { NonUniqueElementErrorDataWhereUniqueInputObjectSchema } from '../objects/NonUniqueElementErrorDataWhereUniqueInput.schema';
import { NonUniqueElementErrorDataWhereInputObjectSchema } from '../objects/NonUniqueElementErrorDataWhereInput.schema';
import { NonUniqueElementErrorDataOrderByWithRelationInputObjectSchema } from '../objects/NonUniqueElementErrorDataOrderByWithRelationInput.schema';
import { NonUniqueElementErrorDataScalarFieldEnumSchema } from '../enums/NonUniqueElementErrorDataScalarFieldEnum.schema';
import { NonUniqueElementErrorDataCreateInputObjectSchema } from '../objects/NonUniqueElementErrorDataCreateInput.schema';
import { NonUniqueElementErrorDataUncheckedCreateInputObjectSchema } from '../objects/NonUniqueElementErrorDataUncheckedCreateInput.schema';
import { NonUniqueElementErrorDataCreateManyInputObjectSchema } from '../objects/NonUniqueElementErrorDataCreateManyInput.schema';
import { NonUniqueElementErrorDataUpdateInputObjectSchema } from '../objects/NonUniqueElementErrorDataUpdateInput.schema';
import { NonUniqueElementErrorDataUncheckedUpdateInputObjectSchema } from '../objects/NonUniqueElementErrorDataUncheckedUpdateInput.schema';
import { NonUniqueElementErrorDataUpdateManyMutationInputObjectSchema } from '../objects/NonUniqueElementErrorDataUpdateManyMutationInput.schema';
import { NonUniqueElementErrorDataUncheckedUpdateManyInputObjectSchema } from '../objects/NonUniqueElementErrorDataUncheckedUpdateManyInput.schema';
import { NonUniqueElementErrorDataCountAggregateInputObjectSchema } from '../objects/NonUniqueElementErrorDataCountAggregateInput.schema';
import { NonUniqueElementErrorDataMinAggregateInputObjectSchema } from '../objects/NonUniqueElementErrorDataMinAggregateInput.schema';
import { NonUniqueElementErrorDataMaxAggregateInputObjectSchema } from '../objects/NonUniqueElementErrorDataMaxAggregateInput.schema';
import { NonUniqueElementErrorDataOrderByWithAggregationInputObjectSchema } from '../objects/NonUniqueElementErrorDataOrderByWithAggregationInput.schema';
import { NonUniqueElementErrorDataScalarWhereWithAggregatesInputObjectSchema } from '../objects/NonUniqueElementErrorDataScalarWhereWithAggregatesInput.schema'

type NonUniqueElementErrorDataInputSchemaType = {
    findUnique: z.ZodType<Prisma.NonUniqueElementErrorDataFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.NonUniqueElementErrorDataFindFirstArgs>,
    findMany: z.ZodType<Prisma.NonUniqueElementErrorDataFindManyArgs>,
    create: z.ZodType<Prisma.NonUniqueElementErrorDataCreateArgs>,
    createMany: z.ZodType<Prisma.NonUniqueElementErrorDataCreateManyArgs>,
    delete: z.ZodType<Prisma.NonUniqueElementErrorDataDeleteArgs>,
    deleteMany: z.ZodType<Prisma.NonUniqueElementErrorDataDeleteManyArgs>,
    update: z.ZodType<Prisma.NonUniqueElementErrorDataUpdateArgs>,
    updateMany: z.ZodType<Prisma.NonUniqueElementErrorDataUpdateManyArgs>,
    upsert: z.ZodType<Prisma.NonUniqueElementErrorDataUpsertArgs>,
    aggregate: z.ZodType<Prisma.NonUniqueElementErrorDataAggregateArgs>,
    groupBy: z.ZodType<Prisma.NonUniqueElementErrorDataGroupByArgs>,
    count: z.ZodType<Prisma.NonUniqueElementErrorDataCountArgs>
}

export const NonUniqueElementErrorDataInputSchema = {
    findUnique: z.object({ select: z.lazy(() => NonUniqueElementErrorDataSelectObjectSchema.optional()), where: NonUniqueElementErrorDataWhereUniqueInputObjectSchema }), findFirst: z.object({ select: z.lazy(() => NonUniqueElementErrorDataSelectObjectSchema.optional()), where: NonUniqueElementErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([NonUniqueElementErrorDataOrderByWithRelationInputObjectSchema, NonUniqueElementErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: NonUniqueElementErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(NonUniqueElementErrorDataScalarFieldEnumSchema).optional() }), findMany: z.object({ select: z.lazy(() => NonUniqueElementErrorDataSelectObjectSchema.optional()), where: NonUniqueElementErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([NonUniqueElementErrorDataOrderByWithRelationInputObjectSchema, NonUniqueElementErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: NonUniqueElementErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(NonUniqueElementErrorDataScalarFieldEnumSchema).optional() }), create: z.object({ select: z.lazy(() => NonUniqueElementErrorDataSelectObjectSchema.optional()), data: z.union([NonUniqueElementErrorDataCreateInputObjectSchema, NonUniqueElementErrorDataUncheckedCreateInputObjectSchema]) }), createMany: z.object({ data: z.union([NonUniqueElementErrorDataCreateManyInputObjectSchema, z.array(NonUniqueElementErrorDataCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }), 'delete': z.object({ select: z.lazy(() => NonUniqueElementErrorDataSelectObjectSchema.optional()), where: NonUniqueElementErrorDataWhereUniqueInputObjectSchema }), deleteMany: z.object({ where: NonUniqueElementErrorDataWhereInputObjectSchema.optional() }), update: z.object({ select: z.lazy(() => NonUniqueElementErrorDataSelectObjectSchema.optional()), data: z.union([NonUniqueElementErrorDataUpdateInputObjectSchema, NonUniqueElementErrorDataUncheckedUpdateInputObjectSchema]), where: NonUniqueElementErrorDataWhereUniqueInputObjectSchema }), updateMany: z.object({ data: z.union([NonUniqueElementErrorDataUpdateManyMutationInputObjectSchema, NonUniqueElementErrorDataUncheckedUpdateManyInputObjectSchema]), where: NonUniqueElementErrorDataWhereInputObjectSchema.optional() }), upsert: z.object({ select: z.lazy(() => NonUniqueElementErrorDataSelectObjectSchema.optional()), where: NonUniqueElementErrorDataWhereUniqueInputObjectSchema, create: z.union([NonUniqueElementErrorDataCreateInputObjectSchema, NonUniqueElementErrorDataUncheckedCreateInputObjectSchema]), update: z.union([NonUniqueElementErrorDataUpdateInputObjectSchema, NonUniqueElementErrorDataUncheckedUpdateInputObjectSchema]) }), aggregate: z.object({ where: NonUniqueElementErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([NonUniqueElementErrorDataOrderByWithRelationInputObjectSchema, NonUniqueElementErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: NonUniqueElementErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), NonUniqueElementErrorDataCountAggregateInputObjectSchema]).optional(), _min: NonUniqueElementErrorDataMinAggregateInputObjectSchema.optional(), _max: NonUniqueElementErrorDataMaxAggregateInputObjectSchema.optional() }), groupBy: z.object({ where: NonUniqueElementErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([NonUniqueElementErrorDataOrderByWithAggregationInputObjectSchema, NonUniqueElementErrorDataOrderByWithAggregationInputObjectSchema.array()]).optional(), having: NonUniqueElementErrorDataScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(NonUniqueElementErrorDataScalarFieldEnumSchema), _count: z.union([z.literal(true), NonUniqueElementErrorDataCountAggregateInputObjectSchema]).optional(), _min: NonUniqueElementErrorDataMinAggregateInputObjectSchema.optional(), _max: NonUniqueElementErrorDataMaxAggregateInputObjectSchema.optional() }), count: z.object({ where: NonUniqueElementErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([NonUniqueElementErrorDataOrderByWithRelationInputObjectSchema, NonUniqueElementErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: NonUniqueElementErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(NonUniqueElementErrorDataScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), NonUniqueElementErrorDataCountAggregateInputObjectSchema]).optional() })
} as NonUniqueElementErrorDataInputSchemaType;
