
/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@zenstackhq/runtime/models';

;
import { ProductSelectObjectSchema } from '../objects/ProductSelect.schema';
import { ProductIncludeObjectSchema } from '../objects/ProductInclude.schema';
import { ProductWhereUniqueInputObjectSchema } from '../objects/ProductWhereUniqueInput.schema';
import { ProductWhereInputObjectSchema } from '../objects/ProductWhereInput.schema';
import { ProductOrderByWithRelationInputObjectSchema } from '../objects/ProductOrderByWithRelationInput.schema';
import { ProductScalarFieldEnumSchema } from '../enums/ProductScalarFieldEnum.schema';
import { ProductCreateInputObjectSchema } from '../objects/ProductCreateInput.schema';
import { ProductUncheckedCreateInputObjectSchema } from '../objects/ProductUncheckedCreateInput.schema';
import { ProductCreateManyInputObjectSchema } from '../objects/ProductCreateManyInput.schema';
import { ProductUpdateInputObjectSchema } from '../objects/ProductUpdateInput.schema';
import { ProductUncheckedUpdateInputObjectSchema } from '../objects/ProductUncheckedUpdateInput.schema';
import { ProductUpdateManyMutationInputObjectSchema } from '../objects/ProductUpdateManyMutationInput.schema';
import { ProductUncheckedUpdateManyInputObjectSchema } from '../objects/ProductUncheckedUpdateManyInput.schema';
import { ProductCountAggregateInputObjectSchema } from '../objects/ProductCountAggregateInput.schema';
import { ProductMinAggregateInputObjectSchema } from '../objects/ProductMinAggregateInput.schema';
import { ProductMaxAggregateInputObjectSchema } from '../objects/ProductMaxAggregateInput.schema';
import { ProductAvgAggregateInputObjectSchema } from '../objects/ProductAvgAggregateInput.schema';
import { ProductSumAggregateInputObjectSchema } from '../objects/ProductSumAggregateInput.schema';
import { ProductOrderByWithAggregationInputObjectSchema } from '../objects/ProductOrderByWithAggregationInput.schema';
import { ProductScalarWhereWithAggregatesInputObjectSchema } from '../objects/ProductScalarWhereWithAggregatesInput.schema'

type ProductInputSchemaType = {
    findUnique: z.ZodType<Prisma.ProductFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.ProductFindFirstArgs>,
    findMany: z.ZodType<Prisma.ProductFindManyArgs>,
    create: z.ZodType<Prisma.ProductCreateArgs>,
    createMany: z.ZodType<Prisma.ProductCreateManyArgs>,
    delete: z.ZodType<Prisma.ProductDeleteArgs>,
    deleteMany: z.ZodType<Prisma.ProductDeleteManyArgs>,
    update: z.ZodType<Prisma.ProductUpdateArgs>,
    updateMany: z.ZodType<Prisma.ProductUpdateManyArgs>,
    upsert: z.ZodType<Prisma.ProductUpsertArgs>,
    aggregate: z.ZodType<Prisma.ProductAggregateArgs>,
    groupBy: z.ZodType<Prisma.ProductGroupByArgs>,
    count: z.ZodType<Prisma.ProductCountArgs>
}

export const ProductInputSchema = {
    findUnique: z.object({ select: z.lazy(() => ProductSelectObjectSchema.optional()), include: z.lazy(() => ProductIncludeObjectSchema.optional()), where: ProductWhereUniqueInputObjectSchema }), findFirst: z.object({ select: z.lazy(() => ProductSelectObjectSchema.optional()), include: z.lazy(() => ProductIncludeObjectSchema.optional()), where: ProductWhereInputObjectSchema.optional(), orderBy: z.union([ProductOrderByWithRelationInputObjectSchema, ProductOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ProductWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ProductScalarFieldEnumSchema).optional() }), findMany: z.object({ select: z.lazy(() => ProductSelectObjectSchema.optional()), include: z.lazy(() => ProductIncludeObjectSchema.optional()), where: ProductWhereInputObjectSchema.optional(), orderBy: z.union([ProductOrderByWithRelationInputObjectSchema, ProductOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ProductWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ProductScalarFieldEnumSchema).optional() }), create: z.object({ select: z.lazy(() => ProductSelectObjectSchema.optional()), include: z.lazy(() => ProductIncludeObjectSchema.optional()), data: z.union([ProductCreateInputObjectSchema, ProductUncheckedCreateInputObjectSchema]) }), createMany: z.object({ data: z.union([ProductCreateManyInputObjectSchema, z.array(ProductCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }), 'delete': z.object({ select: z.lazy(() => ProductSelectObjectSchema.optional()), include: z.lazy(() => ProductIncludeObjectSchema.optional()), where: ProductWhereUniqueInputObjectSchema }), deleteMany: z.object({ where: ProductWhereInputObjectSchema.optional() }), update: z.object({ select: z.lazy(() => ProductSelectObjectSchema.optional()), include: z.lazy(() => ProductIncludeObjectSchema.optional()), data: z.union([ProductUpdateInputObjectSchema, ProductUncheckedUpdateInputObjectSchema]), where: ProductWhereUniqueInputObjectSchema }), updateMany: z.object({ data: z.union([ProductUpdateManyMutationInputObjectSchema, ProductUncheckedUpdateManyInputObjectSchema]), where: ProductWhereInputObjectSchema.optional() }), upsert: z.object({ select: z.lazy(() => ProductSelectObjectSchema.optional()), include: z.lazy(() => ProductIncludeObjectSchema.optional()), where: ProductWhereUniqueInputObjectSchema, create: z.union([ProductCreateInputObjectSchema, ProductUncheckedCreateInputObjectSchema]), update: z.union([ProductUpdateInputObjectSchema, ProductUncheckedUpdateInputObjectSchema]) }), aggregate: z.object({ where: ProductWhereInputObjectSchema.optional(), orderBy: z.union([ProductOrderByWithRelationInputObjectSchema, ProductOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ProductWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), ProductCountAggregateInputObjectSchema]).optional(), _min: ProductMinAggregateInputObjectSchema.optional(), _max: ProductMaxAggregateInputObjectSchema.optional(), _avg: ProductAvgAggregateInputObjectSchema.optional(), _sum: ProductSumAggregateInputObjectSchema.optional() }), groupBy: z.object({ where: ProductWhereInputObjectSchema.optional(), orderBy: z.union([ProductOrderByWithAggregationInputObjectSchema, ProductOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ProductScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ProductScalarFieldEnumSchema), _count: z.union([z.literal(true), ProductCountAggregateInputObjectSchema]).optional(), _min: ProductMinAggregateInputObjectSchema.optional(), _max: ProductMaxAggregateInputObjectSchema.optional(), _avg: ProductAvgAggregateInputObjectSchema.optional(), _sum: ProductSumAggregateInputObjectSchema.optional() }), count: z.object({ where: ProductWhereInputObjectSchema.optional(), orderBy: z.union([ProductOrderByWithRelationInputObjectSchema, ProductOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ProductWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ProductScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), ProductCountAggregateInputObjectSchema]).optional() })
} as ProductInputSchemaType;
