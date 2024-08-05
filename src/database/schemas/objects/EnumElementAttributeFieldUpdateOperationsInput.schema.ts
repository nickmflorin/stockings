/* eslint-disable */
import { z } from 'zod';
import { ElementAttributeSchema } from '../enums/ElementAttribute.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.EnumElementAttributeFieldUpdateOperationsInput>;
export const EnumElementAttributeFieldUpdateOperationsInputObjectSchema: SchemaType = z.object({
    set: z.lazy(() => ElementAttributeSchema).optional()
}).strict() as SchemaType;
