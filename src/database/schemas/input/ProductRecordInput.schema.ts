
/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '../../../../generated/models';

;
import { ProductRecordSelectObjectSchema } from '../objects/ProductRecordSelect.schema';
import { ProductRecordIncludeObjectSchema } from '../objects/ProductRecordInclude.schema';
import { ProductRecordWhereUniqueInputObjectSchema } from '../objects/ProductRecordWhereUniqueInput.schema';
import { ProductRecordWhereInputObjectSchema } from '../objects/ProductRecordWhereInput.schema';
import { ProductRecordOrderByWithRelationInputObjectSchema } from '../objects/ProductRecordOrderByWithRelationInput.schema';
import { ProductRecordScalarFieldEnumSchema } from '../enums/ProductRecordScalarFieldEnum.schema';
import { ProductRecordCreateInputObjectSchema } from '../objects/ProductRecordCreateInput.schema';
import { ProductRecordUncheckedCreateInputObjectSchema } from '../objects/ProductRecordUncheckedCreateInput.schema';
import { ProductRecordCreateManyInputObjectSchema } from '../objects/ProductRecordCreateManyInput.schema';
import { ProductRecordUpdateInputObjectSchema } from '../objects/ProductRecordUpdateInput.schema';
import { ProductRecordUncheckedUpdateInputObjectSchema } from '../objects/ProductRecordUncheckedUpdateInput.schema';
import { ProductRecordUpdateManyMutationInputObjectSchema } from '../objects/ProductRecordUpdateManyMutationInput.schema';
import { ProductRecordUncheckedUpdateManyInputObjectSchema } from '../objects/ProductRecordUncheckedUpdateManyInput.schema';
import { ProductRecordCountAggregateInputObjectSchema } from '../objects/ProductRecordCountAggregateInput.schema';
import { ProductRecordMinAggregateInputObjectSchema } from '../objects/ProductRecordMinAggregateInput.schema';
import { ProductRecordMaxAggregateInputObjectSchema } from '../objects/ProductRecordMaxAggregateInput.schema';
import { ProductRecordAvgAggregateInputObjectSchema } from '../objects/ProductRecordAvgAggregateInput.schema';
import { ProductRecordSumAggregateInputObjectSchema } from '../objects/ProductRecordSumAggregateInput.schema';
import { ProductRecordOrderByWithAggregationInputObjectSchema } from '../objects/ProductRecordOrderByWithAggregationInput.schema';
import { ProductRecordScalarWhereWithAggregatesInputObjectSchema } from '../objects/ProductRecordScalarWhereWithAggregatesInput.schema'

type ProductRecordInputSchemaType = {
    findUnique: z.ZodType<Prisma.ProductRecordFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.ProductRecordFindFirstArgs>,
    findMany: z.ZodType<Prisma.ProductRecordFindManyArgs>,
    create: z.ZodType<Prisma.ProductRecordCreateArgs>,
    createMany: z.ZodType<Prisma.ProductRecordCreateManyArgs>,
    delete: z.ZodType<Prisma.ProductRecordDeleteArgs>,
    deleteMany: z.ZodType<Prisma.ProductRecordDeleteManyArgs>,
    update: z.ZodType<Prisma.ProductRecordUpdateArgs>,
    updateMany: z.ZodType<Prisma.ProductRecordUpdateManyArgs>,
    upsert: z.ZodType<Prisma.ProductRecordUpsertArgs>,
    aggregate: z.ZodType<Prisma.ProductRecordAggregateArgs>,
    groupBy: z.ZodType<Prisma.ProductRecordGroupByArgs>,
    count: z.ZodType<Prisma.ProductRecordCountArgs>
}

export const ProductRecordInputSchema = {
    findUnique: z.object({ select: z.lazy(() => ProductRecordSelectObjectSchema.optional()), include: z.lazy(() => ProductRecordIncludeObjectSchema.optional()), where: ProductRecordWhereUniqueInputObjectSchema }), findFirst: z.object({ select: z.lazy(() => ProductRecordSelectObjectSchema.optional()), include: z.lazy(() => ProductRecordIncludeObjectSchema.optional()), where: ProductRecordWhereInputObjectSchema.optional(), orderBy: z.union([ProductRecordOrderByWithRelationInputObjectSchema, ProductRecordOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ProductRecordWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ProductRecordScalarFieldEnumSchema).optional() }), findMany: z.object({ select: z.lazy(() => ProductRecordSelectObjectSchema.optional()), include: z.lazy(() => ProductRecordIncludeObjectSchema.optional()), where: ProductRecordWhereInputObjectSchema.optional(), orderBy: z.union([ProductRecordOrderByWithRelationInputObjectSchema, ProductRecordOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ProductRecordWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ProductRecordScalarFieldEnumSchema).optional() }), create: z.object({ select: z.lazy(() => ProductRecordSelectObjectSchema.optional()), include: z.lazy(() => ProductRecordIncludeObjectSchema.optional()), data: z.union([ProductRecordCreateInputObjectSchema, ProductRecordUncheckedCreateInputObjectSchema]) }), createMany: z.object({ data: z.union([ProductRecordCreateManyInputObjectSchema, z.array(ProductRecordCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }), 'delete': z.object({ select: z.lazy(() => ProductRecordSelectObjectSchema.optional()), include: z.lazy(() => ProductRecordIncludeObjectSchema.optional()), where: ProductRecordWhereUniqueInputObjectSchema }), deleteMany: z.object({ where: ProductRecordWhereInputObjectSchema.optional() }), update: z.object({ select: z.lazy(() => ProductRecordSelectObjectSchema.optional()), include: z.lazy(() => ProductRecordIncludeObjectSchema.optional()), data: z.union([ProductRecordUpdateInputObjectSchema, ProductRecordUncheckedUpdateInputObjectSchema]), where: ProductRecordWhereUniqueInputObjectSchema }), updateMany: z.object({ data: z.union([ProductRecordUpdateManyMutationInputObjectSchema, ProductRecordUncheckedUpdateManyInputObjectSchema]), where: ProductRecordWhereInputObjectSchema.optional() }), upsert: z.object({ select: z.lazy(() => ProductRecordSelectObjectSchema.optional()), include: z.lazy(() => ProductRecordIncludeObjectSchema.optional()), where: ProductRecordWhereUniqueInputObjectSchema, create: z.union([ProductRecordCreateInputObjectSchema, ProductRecordUncheckedCreateInputObjectSchema]), update: z.union([ProductRecordUpdateInputObjectSchema, ProductRecordUncheckedUpdateInputObjectSchema]) }), aggregate: z.object({ where: ProductRecordWhereInputObjectSchema.optional(), orderBy: z.union([ProductRecordOrderByWithRelationInputObjectSchema, ProductRecordOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ProductRecordWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), ProductRecordCountAggregateInputObjectSchema]).optional(), _min: ProductRecordMinAggregateInputObjectSchema.optional(), _max: ProductRecordMaxAggregateInputObjectSchema.optional(), _avg: ProductRecordAvgAggregateInputObjectSchema.optional(), _sum: ProductRecordSumAggregateInputObjectSchema.optional() }), groupBy: z.object({ where: ProductRecordWhereInputObjectSchema.optional(), orderBy: z.union([ProductRecordOrderByWithAggregationInputObjectSchema, ProductRecordOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ProductRecordScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ProductRecordScalarFieldEnumSchema), _count: z.union([z.literal(true), ProductRecordCountAggregateInputObjectSchema]).optional(), _min: ProductRecordMinAggregateInputObjectSchema.optional(), _max: ProductRecordMaxAggregateInputObjectSchema.optional(), _avg: ProductRecordAvgAggregateInputObjectSchema.optional(), _sum: ProductRecordSumAggregateInputObjectSchema.optional() }), count: z.object({ where: ProductRecordWhereInputObjectSchema.optional(), orderBy: z.union([ProductRecordOrderByWithRelationInputObjectSchema, ProductRecordOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ProductRecordWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ProductRecordScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), ProductRecordCountAggregateInputObjectSchema]).optional() })
} as ProductRecordInputSchemaType;
