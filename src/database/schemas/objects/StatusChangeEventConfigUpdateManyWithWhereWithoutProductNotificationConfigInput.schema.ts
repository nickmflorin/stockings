/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventConfigScalarWhereInputObjectSchema } from './StatusChangeEventConfigScalarWhereInput.schema';
import { StatusChangeEventConfigUpdateManyMutationInputObjectSchema } from './StatusChangeEventConfigUpdateManyMutationInput.schema';
import { StatusChangeEventConfigUncheckedUpdateManyWithoutProductNotificationConfigInputObjectSchema } from './StatusChangeEventConfigUncheckedUpdateManyWithoutProductNotificationConfigInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigUpdateManyWithWhereWithoutProductNotificationConfigInput>;
export const StatusChangeEventConfigUpdateManyWithWhereWithoutProductNotificationConfigInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => StatusChangeEventConfigScalarWhereInputObjectSchema), data: z.union([z.lazy(() => StatusChangeEventConfigUpdateManyMutationInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigUncheckedUpdateManyWithoutProductNotificationConfigInputObjectSchema)])
}).strict() as SchemaType;
