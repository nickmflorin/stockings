/* eslint-disable */
import { z } from 'zod';
import { ScrapingErrorCodeSchema } from '../enums/ScrapingErrorCode.schema';
import { ProductRecordDataFieldSchema } from '../enums/ProductRecordDataField.schema';
import { ProductRecordCreateNestedOneWithoutErrorsInputObjectSchema } from './ProductRecordCreateNestedOneWithoutErrorsInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordErrorCreateInput>;
export const ProductRecordErrorCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), errorId: z.string(), errorCode: z.lazy(() => ScrapingErrorCodeSchema), field: z.lazy(() => ProductRecordDataFieldSchema), message: z.string(), record: z.lazy(() => ProductRecordCreateNestedOneWithoutErrorsInputObjectSchema)
}).strict() as SchemaType;
