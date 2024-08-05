/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventConfigWhereUniqueInputObjectSchema } from './StatusChangeEventConfigWhereUniqueInput.schema';
import { StatusChangeEventConfigUpdateWithoutUpdatedByInputObjectSchema } from './StatusChangeEventConfigUpdateWithoutUpdatedByInput.schema';
import { StatusChangeEventConfigUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './StatusChangeEventConfigUncheckedUpdateWithoutUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigUpdateWithWhereUniqueWithoutUpdatedByInput>;
export const StatusChangeEventConfigUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => StatusChangeEventConfigUpdateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
