/* eslint-disable */
import { z } from 'zod';
import { ProductRecordDataFieldSchema } from '../enums/ProductRecordDataField.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordCreatemanuallyChangedFieldsInput>;
export const ProductRecordCreatemanuallyChangedFieldsInputObjectSchema: SchemaType = z.object({
    set: z.lazy(() => ProductRecordDataFieldSchema).array()
}).strict() as SchemaType;
