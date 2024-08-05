/* eslint-disable */
import { z } from 'zod';
import { ProductCreateWithoutRecordsInputObjectSchema } from './ProductCreateWithoutRecordsInput.schema';
import { ProductUncheckedCreateWithoutRecordsInputObjectSchema } from './ProductUncheckedCreateWithoutRecordsInput.schema';
import { ProductCreateOrConnectWithoutRecordsInputObjectSchema } from './ProductCreateOrConnectWithoutRecordsInput.schema';
import { ProductUpsertWithoutRecordsInputObjectSchema } from './ProductUpsertWithoutRecordsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateToOneWithWhereWithoutRecordsInputObjectSchema } from './ProductUpdateToOneWithWhereWithoutRecordsInput.schema';
import { ProductUpdateWithoutRecordsInputObjectSchema } from './ProductUpdateWithoutRecordsInput.schema';
import { ProductUncheckedUpdateWithoutRecordsInputObjectSchema } from './ProductUncheckedUpdateWithoutRecordsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductUpdateOneRequiredWithoutRecordsNestedInput>;
export const ProductUpdateOneRequiredWithoutRecordsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductCreateWithoutRecordsInputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutRecordsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutRecordsInputObjectSchema).optional(), upsert: z.lazy(() => ProductUpsertWithoutRecordsInputObjectSchema).optional(), connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => ProductUpdateToOneWithWhereWithoutRecordsInputObjectSchema),
    z.lazy(() => ProductUpdateWithoutRecordsInputObjectSchema),
    z.lazy(() => ProductUncheckedUpdateWithoutRecordsInputObjectSchema)]).optional()
}).strict() as SchemaType;
