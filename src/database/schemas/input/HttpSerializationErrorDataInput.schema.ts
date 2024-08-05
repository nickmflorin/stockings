
/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '../../../../generated/models';

;
import { HttpSerializationErrorDataSelectObjectSchema } from '../objects/HttpSerializationErrorDataSelect.schema';
;
import { HttpSerializationErrorDataWhereUniqueInputObjectSchema } from '../objects/HttpSerializationErrorDataWhereUniqueInput.schema';
import { HttpSerializationErrorDataWhereInputObjectSchema } from '../objects/HttpSerializationErrorDataWhereInput.schema';
import { HttpSerializationErrorDataOrderByWithRelationInputObjectSchema } from '../objects/HttpSerializationErrorDataOrderByWithRelationInput.schema';
import { HttpSerializationErrorDataScalarFieldEnumSchema } from '../enums/HttpSerializationErrorDataScalarFieldEnum.schema';
import { HttpSerializationErrorDataCreateInputObjectSchema } from '../objects/HttpSerializationErrorDataCreateInput.schema';
import { HttpSerializationErrorDataUncheckedCreateInputObjectSchema } from '../objects/HttpSerializationErrorDataUncheckedCreateInput.schema';
import { HttpSerializationErrorDataCreateManyInputObjectSchema } from '../objects/HttpSerializationErrorDataCreateManyInput.schema';
import { HttpSerializationErrorDataUpdateInputObjectSchema } from '../objects/HttpSerializationErrorDataUpdateInput.schema';
import { HttpSerializationErrorDataUncheckedUpdateInputObjectSchema } from '../objects/HttpSerializationErrorDataUncheckedUpdateInput.schema';
import { HttpSerializationErrorDataUpdateManyMutationInputObjectSchema } from '../objects/HttpSerializationErrorDataUpdateManyMutationInput.schema';
import { HttpSerializationErrorDataUncheckedUpdateManyInputObjectSchema } from '../objects/HttpSerializationErrorDataUncheckedUpdateManyInput.schema';
import { HttpSerializationErrorDataCountAggregateInputObjectSchema } from '../objects/HttpSerializationErrorDataCountAggregateInput.schema';
import { HttpSerializationErrorDataMinAggregateInputObjectSchema } from '../objects/HttpSerializationErrorDataMinAggregateInput.schema';
import { HttpSerializationErrorDataMaxAggregateInputObjectSchema } from '../objects/HttpSerializationErrorDataMaxAggregateInput.schema';
import { HttpSerializationErrorDataOrderByWithAggregationInputObjectSchema } from '../objects/HttpSerializationErrorDataOrderByWithAggregationInput.schema';
import { HttpSerializationErrorDataScalarWhereWithAggregatesInputObjectSchema } from '../objects/HttpSerializationErrorDataScalarWhereWithAggregatesInput.schema'

type HttpSerializationErrorDataInputSchemaType = {
    findUnique: z.ZodType<Prisma.HttpSerializationErrorDataFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.HttpSerializationErrorDataFindFirstArgs>,
    findMany: z.ZodType<Prisma.HttpSerializationErrorDataFindManyArgs>,
    create: z.ZodType<Prisma.HttpSerializationErrorDataCreateArgs>,
    createMany: z.ZodType<Prisma.HttpSerializationErrorDataCreateManyArgs>,
    delete: z.ZodType<Prisma.HttpSerializationErrorDataDeleteArgs>,
    deleteMany: z.ZodType<Prisma.HttpSerializationErrorDataDeleteManyArgs>,
    update: z.ZodType<Prisma.HttpSerializationErrorDataUpdateArgs>,
    updateMany: z.ZodType<Prisma.HttpSerializationErrorDataUpdateManyArgs>,
    upsert: z.ZodType<Prisma.HttpSerializationErrorDataUpsertArgs>,
    aggregate: z.ZodType<Prisma.HttpSerializationErrorDataAggregateArgs>,
    groupBy: z.ZodType<Prisma.HttpSerializationErrorDataGroupByArgs>,
    count: z.ZodType<Prisma.HttpSerializationErrorDataCountArgs>
}

export const HttpSerializationErrorDataInputSchema = {
    findUnique: z.object({ select: z.lazy(() => HttpSerializationErrorDataSelectObjectSchema.optional()), where: HttpSerializationErrorDataWhereUniqueInputObjectSchema }), findFirst: z.object({ select: z.lazy(() => HttpSerializationErrorDataSelectObjectSchema.optional()), where: HttpSerializationErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([HttpSerializationErrorDataOrderByWithRelationInputObjectSchema, HttpSerializationErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: HttpSerializationErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(HttpSerializationErrorDataScalarFieldEnumSchema).optional() }), findMany: z.object({ select: z.lazy(() => HttpSerializationErrorDataSelectObjectSchema.optional()), where: HttpSerializationErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([HttpSerializationErrorDataOrderByWithRelationInputObjectSchema, HttpSerializationErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: HttpSerializationErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(HttpSerializationErrorDataScalarFieldEnumSchema).optional() }), create: z.object({ select: z.lazy(() => HttpSerializationErrorDataSelectObjectSchema.optional()), data: z.union([HttpSerializationErrorDataCreateInputObjectSchema, HttpSerializationErrorDataUncheckedCreateInputObjectSchema]) }), createMany: z.object({ data: z.union([HttpSerializationErrorDataCreateManyInputObjectSchema, z.array(HttpSerializationErrorDataCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }), 'delete': z.object({ select: z.lazy(() => HttpSerializationErrorDataSelectObjectSchema.optional()), where: HttpSerializationErrorDataWhereUniqueInputObjectSchema }), deleteMany: z.object({ where: HttpSerializationErrorDataWhereInputObjectSchema.optional() }), update: z.object({ select: z.lazy(() => HttpSerializationErrorDataSelectObjectSchema.optional()), data: z.union([HttpSerializationErrorDataUpdateInputObjectSchema, HttpSerializationErrorDataUncheckedUpdateInputObjectSchema]), where: HttpSerializationErrorDataWhereUniqueInputObjectSchema }), updateMany: z.object({ data: z.union([HttpSerializationErrorDataUpdateManyMutationInputObjectSchema, HttpSerializationErrorDataUncheckedUpdateManyInputObjectSchema]), where: HttpSerializationErrorDataWhereInputObjectSchema.optional() }), upsert: z.object({ select: z.lazy(() => HttpSerializationErrorDataSelectObjectSchema.optional()), where: HttpSerializationErrorDataWhereUniqueInputObjectSchema, create: z.union([HttpSerializationErrorDataCreateInputObjectSchema, HttpSerializationErrorDataUncheckedCreateInputObjectSchema]), update: z.union([HttpSerializationErrorDataUpdateInputObjectSchema, HttpSerializationErrorDataUncheckedUpdateInputObjectSchema]) }), aggregate: z.object({ where: HttpSerializationErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([HttpSerializationErrorDataOrderByWithRelationInputObjectSchema, HttpSerializationErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: HttpSerializationErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), HttpSerializationErrorDataCountAggregateInputObjectSchema]).optional(), _min: HttpSerializationErrorDataMinAggregateInputObjectSchema.optional(), _max: HttpSerializationErrorDataMaxAggregateInputObjectSchema.optional() }), groupBy: z.object({ where: HttpSerializationErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([HttpSerializationErrorDataOrderByWithAggregationInputObjectSchema, HttpSerializationErrorDataOrderByWithAggregationInputObjectSchema.array()]).optional(), having: HttpSerializationErrorDataScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(HttpSerializationErrorDataScalarFieldEnumSchema), _count: z.union([z.literal(true), HttpSerializationErrorDataCountAggregateInputObjectSchema]).optional(), _min: HttpSerializationErrorDataMinAggregateInputObjectSchema.optional(), _max: HttpSerializationErrorDataMaxAggregateInputObjectSchema.optional() }), count: z.object({ where: HttpSerializationErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([HttpSerializationErrorDataOrderByWithRelationInputObjectSchema, HttpSerializationErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: HttpSerializationErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(HttpSerializationErrorDataScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), HttpSerializationErrorDataCountAggregateInputObjectSchema]).optional() })
} as HttpSerializationErrorDataInputSchemaType;
