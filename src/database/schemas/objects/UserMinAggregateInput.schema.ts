/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserMinAggregateInputType>;
export const UserMinAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), clerkId: z.literal(true).optional(), firstName: z.literal(true).optional(), lastName: z.literal(true).optional(), profileImageUrl: z.literal(true).optional(), emailAddress: z.literal(true).optional(), createdAt: z.literal(true).optional(), updatedAt: z.literal(true).optional()
}).strict() as SchemaType;
