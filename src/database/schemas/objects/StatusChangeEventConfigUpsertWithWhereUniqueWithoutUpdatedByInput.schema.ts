/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventConfigWhereUniqueInputObjectSchema } from './StatusChangeEventConfigWhereUniqueInput.schema';
import { StatusChangeEventConfigUpdateWithoutUpdatedByInputObjectSchema } from './StatusChangeEventConfigUpdateWithoutUpdatedByInput.schema';
import { StatusChangeEventConfigUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './StatusChangeEventConfigUncheckedUpdateWithoutUpdatedByInput.schema';
import { StatusChangeEventConfigCreateWithoutUpdatedByInputObjectSchema } from './StatusChangeEventConfigCreateWithoutUpdatedByInput.schema';
import { StatusChangeEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema } from './StatusChangeEventConfigUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigUpsertWithWhereUniqueWithoutUpdatedByInput>;
export const StatusChangeEventConfigUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventConfigWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => StatusChangeEventConfigUpdateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUncheckedUpdateWithoutUpdatedByInputObjectSchema)]), create: z.union([z.lazy(() => StatusChangeEventConfigCreateWithoutUpdatedByInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
