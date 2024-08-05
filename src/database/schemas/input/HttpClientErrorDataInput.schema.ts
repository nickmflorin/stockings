
/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@zenstackhq/runtime/models';

;
import { HttpClientErrorDataSelectObjectSchema } from '../objects/HttpClientErrorDataSelect.schema';
;
import { HttpClientErrorDataWhereUniqueInputObjectSchema } from '../objects/HttpClientErrorDataWhereUniqueInput.schema';
import { HttpClientErrorDataWhereInputObjectSchema } from '../objects/HttpClientErrorDataWhereInput.schema';
import { HttpClientErrorDataOrderByWithRelationInputObjectSchema } from '../objects/HttpClientErrorDataOrderByWithRelationInput.schema';
import { HttpClientErrorDataScalarFieldEnumSchema } from '../enums/HttpClientErrorDataScalarFieldEnum.schema';
import { HttpClientErrorDataCreateInputObjectSchema } from '../objects/HttpClientErrorDataCreateInput.schema';
import { HttpClientErrorDataUncheckedCreateInputObjectSchema } from '../objects/HttpClientErrorDataUncheckedCreateInput.schema';
import { HttpClientErrorDataCreateManyInputObjectSchema } from '../objects/HttpClientErrorDataCreateManyInput.schema';
import { HttpClientErrorDataUpdateInputObjectSchema } from '../objects/HttpClientErrorDataUpdateInput.schema';
import { HttpClientErrorDataUncheckedUpdateInputObjectSchema } from '../objects/HttpClientErrorDataUncheckedUpdateInput.schema';
import { HttpClientErrorDataUpdateManyMutationInputObjectSchema } from '../objects/HttpClientErrorDataUpdateManyMutationInput.schema';
import { HttpClientErrorDataUncheckedUpdateManyInputObjectSchema } from '../objects/HttpClientErrorDataUncheckedUpdateManyInput.schema';
import { HttpClientErrorDataCountAggregateInputObjectSchema } from '../objects/HttpClientErrorDataCountAggregateInput.schema';
import { HttpClientErrorDataMinAggregateInputObjectSchema } from '../objects/HttpClientErrorDataMinAggregateInput.schema';
import { HttpClientErrorDataMaxAggregateInputObjectSchema } from '../objects/HttpClientErrorDataMaxAggregateInput.schema';
import { HttpClientErrorDataAvgAggregateInputObjectSchema } from '../objects/HttpClientErrorDataAvgAggregateInput.schema';
import { HttpClientErrorDataSumAggregateInputObjectSchema } from '../objects/HttpClientErrorDataSumAggregateInput.schema';
import { HttpClientErrorDataOrderByWithAggregationInputObjectSchema } from '../objects/HttpClientErrorDataOrderByWithAggregationInput.schema';
import { HttpClientErrorDataScalarWhereWithAggregatesInputObjectSchema } from '../objects/HttpClientErrorDataScalarWhereWithAggregatesInput.schema'

type HttpClientErrorDataInputSchemaType = {
    findUnique: z.ZodType<Prisma.HttpClientErrorDataFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.HttpClientErrorDataFindFirstArgs>,
    findMany: z.ZodType<Prisma.HttpClientErrorDataFindManyArgs>,
    create: z.ZodType<Prisma.HttpClientErrorDataCreateArgs>,
    createMany: z.ZodType<Prisma.HttpClientErrorDataCreateManyArgs>,
    delete: z.ZodType<Prisma.HttpClientErrorDataDeleteArgs>,
    deleteMany: z.ZodType<Prisma.HttpClientErrorDataDeleteManyArgs>,
    update: z.ZodType<Prisma.HttpClientErrorDataUpdateArgs>,
    updateMany: z.ZodType<Prisma.HttpClientErrorDataUpdateManyArgs>,
    upsert: z.ZodType<Prisma.HttpClientErrorDataUpsertArgs>,
    aggregate: z.ZodType<Prisma.HttpClientErrorDataAggregateArgs>,
    groupBy: z.ZodType<Prisma.HttpClientErrorDataGroupByArgs>,
    count: z.ZodType<Prisma.HttpClientErrorDataCountArgs>
}

export const HttpClientErrorDataInputSchema = {
    findUnique: z.object({ select: z.lazy(() => HttpClientErrorDataSelectObjectSchema.optional()), where: HttpClientErrorDataWhereUniqueInputObjectSchema }), findFirst: z.object({ select: z.lazy(() => HttpClientErrorDataSelectObjectSchema.optional()), where: HttpClientErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([HttpClientErrorDataOrderByWithRelationInputObjectSchema, HttpClientErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: HttpClientErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(HttpClientErrorDataScalarFieldEnumSchema).optional() }), findMany: z.object({ select: z.lazy(() => HttpClientErrorDataSelectObjectSchema.optional()), where: HttpClientErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([HttpClientErrorDataOrderByWithRelationInputObjectSchema, HttpClientErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: HttpClientErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(HttpClientErrorDataScalarFieldEnumSchema).optional() }), create: z.object({ select: z.lazy(() => HttpClientErrorDataSelectObjectSchema.optional()), data: z.union([HttpClientErrorDataCreateInputObjectSchema, HttpClientErrorDataUncheckedCreateInputObjectSchema]) }), createMany: z.object({ data: z.union([HttpClientErrorDataCreateManyInputObjectSchema, z.array(HttpClientErrorDataCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }), 'delete': z.object({ select: z.lazy(() => HttpClientErrorDataSelectObjectSchema.optional()), where: HttpClientErrorDataWhereUniqueInputObjectSchema }), deleteMany: z.object({ where: HttpClientErrorDataWhereInputObjectSchema.optional() }), update: z.object({ select: z.lazy(() => HttpClientErrorDataSelectObjectSchema.optional()), data: z.union([HttpClientErrorDataUpdateInputObjectSchema, HttpClientErrorDataUncheckedUpdateInputObjectSchema]), where: HttpClientErrorDataWhereUniqueInputObjectSchema }), updateMany: z.object({ data: z.union([HttpClientErrorDataUpdateManyMutationInputObjectSchema, HttpClientErrorDataUncheckedUpdateManyInputObjectSchema]), where: HttpClientErrorDataWhereInputObjectSchema.optional() }), upsert: z.object({ select: z.lazy(() => HttpClientErrorDataSelectObjectSchema.optional()), where: HttpClientErrorDataWhereUniqueInputObjectSchema, create: z.union([HttpClientErrorDataCreateInputObjectSchema, HttpClientErrorDataUncheckedCreateInputObjectSchema]), update: z.union([HttpClientErrorDataUpdateInputObjectSchema, HttpClientErrorDataUncheckedUpdateInputObjectSchema]) }), aggregate: z.object({ where: HttpClientErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([HttpClientErrorDataOrderByWithRelationInputObjectSchema, HttpClientErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: HttpClientErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), HttpClientErrorDataCountAggregateInputObjectSchema]).optional(), _min: HttpClientErrorDataMinAggregateInputObjectSchema.optional(), _max: HttpClientErrorDataMaxAggregateInputObjectSchema.optional(), _avg: HttpClientErrorDataAvgAggregateInputObjectSchema.optional(), _sum: HttpClientErrorDataSumAggregateInputObjectSchema.optional() }), groupBy: z.object({ where: HttpClientErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([HttpClientErrorDataOrderByWithAggregationInputObjectSchema, HttpClientErrorDataOrderByWithAggregationInputObjectSchema.array()]).optional(), having: HttpClientErrorDataScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(HttpClientErrorDataScalarFieldEnumSchema), _count: z.union([z.literal(true), HttpClientErrorDataCountAggregateInputObjectSchema]).optional(), _min: HttpClientErrorDataMinAggregateInputObjectSchema.optional(), _max: HttpClientErrorDataMaxAggregateInputObjectSchema.optional(), _avg: HttpClientErrorDataAvgAggregateInputObjectSchema.optional(), _sum: HttpClientErrorDataSumAggregateInputObjectSchema.optional() }), count: z.object({ where: HttpClientErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([HttpClientErrorDataOrderByWithRelationInputObjectSchema, HttpClientErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: HttpClientErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(HttpClientErrorDataScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), HttpClientErrorDataCountAggregateInputObjectSchema]).optional() })
} as HttpClientErrorDataInputSchemaType;
