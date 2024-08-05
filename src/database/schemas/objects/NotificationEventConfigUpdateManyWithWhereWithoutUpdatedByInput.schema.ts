/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigScalarWhereInputObjectSchema } from './NotificationEventConfigScalarWhereInput.schema';
import { NotificationEventConfigUpdateManyMutationInputObjectSchema } from './NotificationEventConfigUpdateManyMutationInput.schema';
import { NotificationEventConfigUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './NotificationEventConfigUncheckedUpdateManyWithoutUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigUpdateManyWithWhereWithoutUpdatedByInput>;
export const NotificationEventConfigUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => NotificationEventConfigScalarWhereInputObjectSchema), data: z.union([z.lazy(() => NotificationEventConfigUpdateManyMutationInputObjectSchema),
    z.lazy(() => NotificationEventConfigUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict() as SchemaType;
