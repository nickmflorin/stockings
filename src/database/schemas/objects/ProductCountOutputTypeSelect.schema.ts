/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductCountOutputTypeSelect>;
export const ProductCountOutputTypeSelectObjectSchema: SchemaType = z.object({
    records: z.boolean().optional(), notificationEvents: z.boolean().optional(), delegate_aux_Product_notificationEvents_PriceChange_0: z.boolean().optional(), delegate_aux_Product_notificationEvents_StatusChang_0: z.boolean().optional()
}).strict() as SchemaType;
