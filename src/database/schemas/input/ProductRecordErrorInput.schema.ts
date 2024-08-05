
/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '../../../../generated/models';

;
import { ProductRecordErrorSelectObjectSchema } from '../objects/ProductRecordErrorSelect.schema';
import { ProductRecordErrorIncludeObjectSchema } from '../objects/ProductRecordErrorInclude.schema';
import { ProductRecordErrorWhereUniqueInputObjectSchema } from '../objects/ProductRecordErrorWhereUniqueInput.schema';
import { ProductRecordErrorWhereInputObjectSchema } from '../objects/ProductRecordErrorWhereInput.schema';
import { ProductRecordErrorOrderByWithRelationInputObjectSchema } from '../objects/ProductRecordErrorOrderByWithRelationInput.schema';
import { ProductRecordErrorScalarFieldEnumSchema } from '../enums/ProductRecordErrorScalarFieldEnum.schema';
import { ProductRecordErrorCreateInputObjectSchema } from '../objects/ProductRecordErrorCreateInput.schema';
import { ProductRecordErrorUncheckedCreateInputObjectSchema } from '../objects/ProductRecordErrorUncheckedCreateInput.schema';
import { ProductRecordErrorCreateManyInputObjectSchema } from '../objects/ProductRecordErrorCreateManyInput.schema';
import { ProductRecordErrorUpdateInputObjectSchema } from '../objects/ProductRecordErrorUpdateInput.schema';
import { ProductRecordErrorUncheckedUpdateInputObjectSchema } from '../objects/ProductRecordErrorUncheckedUpdateInput.schema';
import { ProductRecordErrorUpdateManyMutationInputObjectSchema } from '../objects/ProductRecordErrorUpdateManyMutationInput.schema';
import { ProductRecordErrorUncheckedUpdateManyInputObjectSchema } from '../objects/ProductRecordErrorUncheckedUpdateManyInput.schema';
import { ProductRecordErrorCountAggregateInputObjectSchema } from '../objects/ProductRecordErrorCountAggregateInput.schema';
import { ProductRecordErrorMinAggregateInputObjectSchema } from '../objects/ProductRecordErrorMinAggregateInput.schema';
import { ProductRecordErrorMaxAggregateInputObjectSchema } from '../objects/ProductRecordErrorMaxAggregateInput.schema';
import { ProductRecordErrorOrderByWithAggregationInputObjectSchema } from '../objects/ProductRecordErrorOrderByWithAggregationInput.schema';
import { ProductRecordErrorScalarWhereWithAggregatesInputObjectSchema } from '../objects/ProductRecordErrorScalarWhereWithAggregatesInput.schema'

type ProductRecordErrorInputSchemaType = {
    findUnique: z.ZodType<Prisma.ProductRecordErrorFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.ProductRecordErrorFindFirstArgs>,
    findMany: z.ZodType<Prisma.ProductRecordErrorFindManyArgs>,
    create: z.ZodType<Prisma.ProductRecordErrorCreateArgs>,
    createMany: z.ZodType<Prisma.ProductRecordErrorCreateManyArgs>,
    delete: z.ZodType<Prisma.ProductRecordErrorDeleteArgs>,
    deleteMany: z.ZodType<Prisma.ProductRecordErrorDeleteManyArgs>,
    update: z.ZodType<Prisma.ProductRecordErrorUpdateArgs>,
    updateMany: z.ZodType<Prisma.ProductRecordErrorUpdateManyArgs>,
    upsert: z.ZodType<Prisma.ProductRecordErrorUpsertArgs>,
    aggregate: z.ZodType<Prisma.ProductRecordErrorAggregateArgs>,
    groupBy: z.ZodType<Prisma.ProductRecordErrorGroupByArgs>,
    count: z.ZodType<Prisma.ProductRecordErrorCountArgs>
}

export const ProductRecordErrorInputSchema = {
    findUnique: z.object({ select: z.lazy(() => ProductRecordErrorSelectObjectSchema.optional()), include: z.lazy(() => ProductRecordErrorIncludeObjectSchema.optional()), where: ProductRecordErrorWhereUniqueInputObjectSchema }), findFirst: z.object({ select: z.lazy(() => ProductRecordErrorSelectObjectSchema.optional()), include: z.lazy(() => ProductRecordErrorIncludeObjectSchema.optional()), where: ProductRecordErrorWhereInputObjectSchema.optional(), orderBy: z.union([ProductRecordErrorOrderByWithRelationInputObjectSchema, ProductRecordErrorOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ProductRecordErrorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ProductRecordErrorScalarFieldEnumSchema).optional() }), findMany: z.object({ select: z.lazy(() => ProductRecordErrorSelectObjectSchema.optional()), include: z.lazy(() => ProductRecordErrorIncludeObjectSchema.optional()), where: ProductRecordErrorWhereInputObjectSchema.optional(), orderBy: z.union([ProductRecordErrorOrderByWithRelationInputObjectSchema, ProductRecordErrorOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ProductRecordErrorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ProductRecordErrorScalarFieldEnumSchema).optional() }), create: z.object({ select: z.lazy(() => ProductRecordErrorSelectObjectSchema.optional()), include: z.lazy(() => ProductRecordErrorIncludeObjectSchema.optional()), data: z.union([ProductRecordErrorCreateInputObjectSchema, ProductRecordErrorUncheckedCreateInputObjectSchema]) }), createMany: z.object({ data: z.union([ProductRecordErrorCreateManyInputObjectSchema, z.array(ProductRecordErrorCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }), 'delete': z.object({ select: z.lazy(() => ProductRecordErrorSelectObjectSchema.optional()), include: z.lazy(() => ProductRecordErrorIncludeObjectSchema.optional()), where: ProductRecordErrorWhereUniqueInputObjectSchema }), deleteMany: z.object({ where: ProductRecordErrorWhereInputObjectSchema.optional() }), update: z.object({ select: z.lazy(() => ProductRecordErrorSelectObjectSchema.optional()), include: z.lazy(() => ProductRecordErrorIncludeObjectSchema.optional()), data: z.union([ProductRecordErrorUpdateInputObjectSchema, ProductRecordErrorUncheckedUpdateInputObjectSchema]), where: ProductRecordErrorWhereUniqueInputObjectSchema }), updateMany: z.object({ data: z.union([ProductRecordErrorUpdateManyMutationInputObjectSchema, ProductRecordErrorUncheckedUpdateManyInputObjectSchema]), where: ProductRecordErrorWhereInputObjectSchema.optional() }), upsert: z.object({ select: z.lazy(() => ProductRecordErrorSelectObjectSchema.optional()), include: z.lazy(() => ProductRecordErrorIncludeObjectSchema.optional()), where: ProductRecordErrorWhereUniqueInputObjectSchema, create: z.union([ProductRecordErrorCreateInputObjectSchema, ProductRecordErrorUncheckedCreateInputObjectSchema]), update: z.union([ProductRecordErrorUpdateInputObjectSchema, ProductRecordErrorUncheckedUpdateInputObjectSchema]) }), aggregate: z.object({ where: ProductRecordErrorWhereInputObjectSchema.optional(), orderBy: z.union([ProductRecordErrorOrderByWithRelationInputObjectSchema, ProductRecordErrorOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ProductRecordErrorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), ProductRecordErrorCountAggregateInputObjectSchema]).optional(), _min: ProductRecordErrorMinAggregateInputObjectSchema.optional(), _max: ProductRecordErrorMaxAggregateInputObjectSchema.optional() }), groupBy: z.object({ where: ProductRecordErrorWhereInputObjectSchema.optional(), orderBy: z.union([ProductRecordErrorOrderByWithAggregationInputObjectSchema, ProductRecordErrorOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ProductRecordErrorScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ProductRecordErrorScalarFieldEnumSchema), _count: z.union([z.literal(true), ProductRecordErrorCountAggregateInputObjectSchema]).optional(), _min: ProductRecordErrorMinAggregateInputObjectSchema.optional(), _max: ProductRecordErrorMaxAggregateInputObjectSchema.optional() }), count: z.object({ where: ProductRecordErrorWhereInputObjectSchema.optional(), orderBy: z.union([ProductRecordErrorOrderByWithRelationInputObjectSchema, ProductRecordErrorOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ProductRecordErrorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ProductRecordErrorScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), ProductRecordErrorCountAggregateInputObjectSchema]).optional() })
} as ProductRecordErrorInputSchemaType;
