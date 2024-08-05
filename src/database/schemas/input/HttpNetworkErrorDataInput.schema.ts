
/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '../../../../generated/models';

;
import { HttpNetworkErrorDataSelectObjectSchema } from '../objects/HttpNetworkErrorDataSelect.schema';
;
import { HttpNetworkErrorDataWhereUniqueInputObjectSchema } from '../objects/HttpNetworkErrorDataWhereUniqueInput.schema';
import { HttpNetworkErrorDataWhereInputObjectSchema } from '../objects/HttpNetworkErrorDataWhereInput.schema';
import { HttpNetworkErrorDataOrderByWithRelationInputObjectSchema } from '../objects/HttpNetworkErrorDataOrderByWithRelationInput.schema';
import { HttpNetworkErrorDataScalarFieldEnumSchema } from '../enums/HttpNetworkErrorDataScalarFieldEnum.schema';
import { HttpNetworkErrorDataCreateInputObjectSchema } from '../objects/HttpNetworkErrorDataCreateInput.schema';
import { HttpNetworkErrorDataUncheckedCreateInputObjectSchema } from '../objects/HttpNetworkErrorDataUncheckedCreateInput.schema';
import { HttpNetworkErrorDataCreateManyInputObjectSchema } from '../objects/HttpNetworkErrorDataCreateManyInput.schema';
import { HttpNetworkErrorDataUpdateInputObjectSchema } from '../objects/HttpNetworkErrorDataUpdateInput.schema';
import { HttpNetworkErrorDataUncheckedUpdateInputObjectSchema } from '../objects/HttpNetworkErrorDataUncheckedUpdateInput.schema';
import { HttpNetworkErrorDataUpdateManyMutationInputObjectSchema } from '../objects/HttpNetworkErrorDataUpdateManyMutationInput.schema';
import { HttpNetworkErrorDataUncheckedUpdateManyInputObjectSchema } from '../objects/HttpNetworkErrorDataUncheckedUpdateManyInput.schema';
import { HttpNetworkErrorDataCountAggregateInputObjectSchema } from '../objects/HttpNetworkErrorDataCountAggregateInput.schema';
import { HttpNetworkErrorDataMinAggregateInputObjectSchema } from '../objects/HttpNetworkErrorDataMinAggregateInput.schema';
import { HttpNetworkErrorDataMaxAggregateInputObjectSchema } from '../objects/HttpNetworkErrorDataMaxAggregateInput.schema';
import { HttpNetworkErrorDataOrderByWithAggregationInputObjectSchema } from '../objects/HttpNetworkErrorDataOrderByWithAggregationInput.schema';
import { HttpNetworkErrorDataScalarWhereWithAggregatesInputObjectSchema } from '../objects/HttpNetworkErrorDataScalarWhereWithAggregatesInput.schema'

type HttpNetworkErrorDataInputSchemaType = {
    findUnique: z.ZodType<Prisma.HttpNetworkErrorDataFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.HttpNetworkErrorDataFindFirstArgs>,
    findMany: z.ZodType<Prisma.HttpNetworkErrorDataFindManyArgs>,
    create: z.ZodType<Prisma.HttpNetworkErrorDataCreateArgs>,
    createMany: z.ZodType<Prisma.HttpNetworkErrorDataCreateManyArgs>,
    delete: z.ZodType<Prisma.HttpNetworkErrorDataDeleteArgs>,
    deleteMany: z.ZodType<Prisma.HttpNetworkErrorDataDeleteManyArgs>,
    update: z.ZodType<Prisma.HttpNetworkErrorDataUpdateArgs>,
    updateMany: z.ZodType<Prisma.HttpNetworkErrorDataUpdateManyArgs>,
    upsert: z.ZodType<Prisma.HttpNetworkErrorDataUpsertArgs>,
    aggregate: z.ZodType<Prisma.HttpNetworkErrorDataAggregateArgs>,
    groupBy: z.ZodType<Prisma.HttpNetworkErrorDataGroupByArgs>,
    count: z.ZodType<Prisma.HttpNetworkErrorDataCountArgs>
}

export const HttpNetworkErrorDataInputSchema = {
    findUnique: z.object({ select: z.lazy(() => HttpNetworkErrorDataSelectObjectSchema.optional()), where: HttpNetworkErrorDataWhereUniqueInputObjectSchema }), findFirst: z.object({ select: z.lazy(() => HttpNetworkErrorDataSelectObjectSchema.optional()), where: HttpNetworkErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([HttpNetworkErrorDataOrderByWithRelationInputObjectSchema, HttpNetworkErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: HttpNetworkErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(HttpNetworkErrorDataScalarFieldEnumSchema).optional() }), findMany: z.object({ select: z.lazy(() => HttpNetworkErrorDataSelectObjectSchema.optional()), where: HttpNetworkErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([HttpNetworkErrorDataOrderByWithRelationInputObjectSchema, HttpNetworkErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: HttpNetworkErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(HttpNetworkErrorDataScalarFieldEnumSchema).optional() }), create: z.object({ select: z.lazy(() => HttpNetworkErrorDataSelectObjectSchema.optional()), data: z.union([HttpNetworkErrorDataCreateInputObjectSchema, HttpNetworkErrorDataUncheckedCreateInputObjectSchema]) }), createMany: z.object({ data: z.union([HttpNetworkErrorDataCreateManyInputObjectSchema, z.array(HttpNetworkErrorDataCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }), 'delete': z.object({ select: z.lazy(() => HttpNetworkErrorDataSelectObjectSchema.optional()), where: HttpNetworkErrorDataWhereUniqueInputObjectSchema }), deleteMany: z.object({ where: HttpNetworkErrorDataWhereInputObjectSchema.optional() }), update: z.object({ select: z.lazy(() => HttpNetworkErrorDataSelectObjectSchema.optional()), data: z.union([HttpNetworkErrorDataUpdateInputObjectSchema, HttpNetworkErrorDataUncheckedUpdateInputObjectSchema]), where: HttpNetworkErrorDataWhereUniqueInputObjectSchema }), updateMany: z.object({ data: z.union([HttpNetworkErrorDataUpdateManyMutationInputObjectSchema, HttpNetworkErrorDataUncheckedUpdateManyInputObjectSchema]), where: HttpNetworkErrorDataWhereInputObjectSchema.optional() }), upsert: z.object({ select: z.lazy(() => HttpNetworkErrorDataSelectObjectSchema.optional()), where: HttpNetworkErrorDataWhereUniqueInputObjectSchema, create: z.union([HttpNetworkErrorDataCreateInputObjectSchema, HttpNetworkErrorDataUncheckedCreateInputObjectSchema]), update: z.union([HttpNetworkErrorDataUpdateInputObjectSchema, HttpNetworkErrorDataUncheckedUpdateInputObjectSchema]) }), aggregate: z.object({ where: HttpNetworkErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([HttpNetworkErrorDataOrderByWithRelationInputObjectSchema, HttpNetworkErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: HttpNetworkErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), HttpNetworkErrorDataCountAggregateInputObjectSchema]).optional(), _min: HttpNetworkErrorDataMinAggregateInputObjectSchema.optional(), _max: HttpNetworkErrorDataMaxAggregateInputObjectSchema.optional() }), groupBy: z.object({ where: HttpNetworkErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([HttpNetworkErrorDataOrderByWithAggregationInputObjectSchema, HttpNetworkErrorDataOrderByWithAggregationInputObjectSchema.array()]).optional(), having: HttpNetworkErrorDataScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(HttpNetworkErrorDataScalarFieldEnumSchema), _count: z.union([z.literal(true), HttpNetworkErrorDataCountAggregateInputObjectSchema]).optional(), _min: HttpNetworkErrorDataMinAggregateInputObjectSchema.optional(), _max: HttpNetworkErrorDataMaxAggregateInputObjectSchema.optional() }), count: z.object({ where: HttpNetworkErrorDataWhereInputObjectSchema.optional(), orderBy: z.union([HttpNetworkErrorDataOrderByWithRelationInputObjectSchema, HttpNetworkErrorDataOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: HttpNetworkErrorDataWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(HttpNetworkErrorDataScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), HttpNetworkErrorDataCountAggregateInputObjectSchema]).optional() })
} as HttpNetworkErrorDataInputSchemaType;
