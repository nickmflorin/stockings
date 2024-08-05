
/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@zenstackhq/runtime/models';

;
import { ProductNotificationConfigSelectObjectSchema } from '../objects/ProductNotificationConfigSelect.schema';
import { ProductNotificationConfigIncludeObjectSchema } from '../objects/ProductNotificationConfigInclude.schema';
import { ProductNotificationConfigWhereUniqueInputObjectSchema } from '../objects/ProductNotificationConfigWhereUniqueInput.schema';
import { ProductNotificationConfigWhereInputObjectSchema } from '../objects/ProductNotificationConfigWhereInput.schema';
import { ProductNotificationConfigOrderByWithRelationInputObjectSchema } from '../objects/ProductNotificationConfigOrderByWithRelationInput.schema';
import { ProductNotificationConfigScalarFieldEnumSchema } from '../enums/ProductNotificationConfigScalarFieldEnum.schema';
import { ProductNotificationConfigCreateInputObjectSchema } from '../objects/ProductNotificationConfigCreateInput.schema';
import { ProductNotificationConfigUncheckedCreateInputObjectSchema } from '../objects/ProductNotificationConfigUncheckedCreateInput.schema';
import { ProductNotificationConfigCreateManyInputObjectSchema } from '../objects/ProductNotificationConfigCreateManyInput.schema';
import { ProductNotificationConfigUpdateInputObjectSchema } from '../objects/ProductNotificationConfigUpdateInput.schema';
import { ProductNotificationConfigUncheckedUpdateInputObjectSchema } from '../objects/ProductNotificationConfigUncheckedUpdateInput.schema';
import { ProductNotificationConfigUpdateManyMutationInputObjectSchema } from '../objects/ProductNotificationConfigUpdateManyMutationInput.schema';
import { ProductNotificationConfigUncheckedUpdateManyInputObjectSchema } from '../objects/ProductNotificationConfigUncheckedUpdateManyInput.schema';
import { ProductNotificationConfigCountAggregateInputObjectSchema } from '../objects/ProductNotificationConfigCountAggregateInput.schema';
import { ProductNotificationConfigMinAggregateInputObjectSchema } from '../objects/ProductNotificationConfigMinAggregateInput.schema';
import { ProductNotificationConfigMaxAggregateInputObjectSchema } from '../objects/ProductNotificationConfigMaxAggregateInput.schema';
import { ProductNotificationConfigOrderByWithAggregationInputObjectSchema } from '../objects/ProductNotificationConfigOrderByWithAggregationInput.schema';
import { ProductNotificationConfigScalarWhereWithAggregatesInputObjectSchema } from '../objects/ProductNotificationConfigScalarWhereWithAggregatesInput.schema'

type ProductNotificationConfigInputSchemaType = {
    findUnique: z.ZodType<Prisma.ProductNotificationConfigFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.ProductNotificationConfigFindFirstArgs>,
    findMany: z.ZodType<Prisma.ProductNotificationConfigFindManyArgs>,
    create: z.ZodType<Prisma.ProductNotificationConfigCreateArgs>,
    createMany: z.ZodType<Prisma.ProductNotificationConfigCreateManyArgs>,
    delete: z.ZodType<Prisma.ProductNotificationConfigDeleteArgs>,
    deleteMany: z.ZodType<Prisma.ProductNotificationConfigDeleteManyArgs>,
    update: z.ZodType<Prisma.ProductNotificationConfigUpdateArgs>,
    updateMany: z.ZodType<Prisma.ProductNotificationConfigUpdateManyArgs>,
    upsert: z.ZodType<Prisma.ProductNotificationConfigUpsertArgs>,
    aggregate: z.ZodType<Prisma.ProductNotificationConfigAggregateArgs>,
    groupBy: z.ZodType<Prisma.ProductNotificationConfigGroupByArgs>,
    count: z.ZodType<Prisma.ProductNotificationConfigCountArgs>
}

export const ProductNotificationConfigInputSchema = {
    findUnique: z.object({ select: z.lazy(() => ProductNotificationConfigSelectObjectSchema.optional()), include: z.lazy(() => ProductNotificationConfigIncludeObjectSchema.optional()), where: ProductNotificationConfigWhereUniqueInputObjectSchema }), findFirst: z.object({ select: z.lazy(() => ProductNotificationConfigSelectObjectSchema.optional()), include: z.lazy(() => ProductNotificationConfigIncludeObjectSchema.optional()), where: ProductNotificationConfigWhereInputObjectSchema.optional(), orderBy: z.union([ProductNotificationConfigOrderByWithRelationInputObjectSchema, ProductNotificationConfigOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ProductNotificationConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ProductNotificationConfigScalarFieldEnumSchema).optional() }), findMany: z.object({ select: z.lazy(() => ProductNotificationConfigSelectObjectSchema.optional()), include: z.lazy(() => ProductNotificationConfigIncludeObjectSchema.optional()), where: ProductNotificationConfigWhereInputObjectSchema.optional(), orderBy: z.union([ProductNotificationConfigOrderByWithRelationInputObjectSchema, ProductNotificationConfigOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ProductNotificationConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ProductNotificationConfigScalarFieldEnumSchema).optional() }), create: z.object({ select: z.lazy(() => ProductNotificationConfigSelectObjectSchema.optional()), include: z.lazy(() => ProductNotificationConfigIncludeObjectSchema.optional()), data: z.union([ProductNotificationConfigCreateInputObjectSchema, ProductNotificationConfigUncheckedCreateInputObjectSchema]) }), createMany: z.object({ data: z.union([ProductNotificationConfigCreateManyInputObjectSchema, z.array(ProductNotificationConfigCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }), 'delete': z.object({ select: z.lazy(() => ProductNotificationConfigSelectObjectSchema.optional()), include: z.lazy(() => ProductNotificationConfigIncludeObjectSchema.optional()), where: ProductNotificationConfigWhereUniqueInputObjectSchema }), deleteMany: z.object({ where: ProductNotificationConfigWhereInputObjectSchema.optional() }), update: z.object({ select: z.lazy(() => ProductNotificationConfigSelectObjectSchema.optional()), include: z.lazy(() => ProductNotificationConfigIncludeObjectSchema.optional()), data: z.union([ProductNotificationConfigUpdateInputObjectSchema, ProductNotificationConfigUncheckedUpdateInputObjectSchema]), where: ProductNotificationConfigWhereUniqueInputObjectSchema }), updateMany: z.object({ data: z.union([ProductNotificationConfigUpdateManyMutationInputObjectSchema, ProductNotificationConfigUncheckedUpdateManyInputObjectSchema]), where: ProductNotificationConfigWhereInputObjectSchema.optional() }), upsert: z.object({ select: z.lazy(() => ProductNotificationConfigSelectObjectSchema.optional()), include: z.lazy(() => ProductNotificationConfigIncludeObjectSchema.optional()), where: ProductNotificationConfigWhereUniqueInputObjectSchema, create: z.union([ProductNotificationConfigCreateInputObjectSchema, ProductNotificationConfigUncheckedCreateInputObjectSchema]), update: z.union([ProductNotificationConfigUpdateInputObjectSchema, ProductNotificationConfigUncheckedUpdateInputObjectSchema]) }), aggregate: z.object({ where: ProductNotificationConfigWhereInputObjectSchema.optional(), orderBy: z.union([ProductNotificationConfigOrderByWithRelationInputObjectSchema, ProductNotificationConfigOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ProductNotificationConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), ProductNotificationConfigCountAggregateInputObjectSchema]).optional(), _min: ProductNotificationConfigMinAggregateInputObjectSchema.optional(), _max: ProductNotificationConfigMaxAggregateInputObjectSchema.optional() }), groupBy: z.object({ where: ProductNotificationConfigWhereInputObjectSchema.optional(), orderBy: z.union([ProductNotificationConfigOrderByWithAggregationInputObjectSchema, ProductNotificationConfigOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ProductNotificationConfigScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ProductNotificationConfigScalarFieldEnumSchema), _count: z.union([z.literal(true), ProductNotificationConfigCountAggregateInputObjectSchema]).optional(), _min: ProductNotificationConfigMinAggregateInputObjectSchema.optional(), _max: ProductNotificationConfigMaxAggregateInputObjectSchema.optional() }), count: z.object({ where: ProductNotificationConfigWhereInputObjectSchema.optional(), orderBy: z.union([ProductNotificationConfigOrderByWithRelationInputObjectSchema, ProductNotificationConfigOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ProductNotificationConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ProductNotificationConfigScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), ProductNotificationConfigCountAggregateInputObjectSchema]).optional() })
} as ProductNotificationConfigInputSchemaType;
