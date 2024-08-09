import { type EnhancementContext, type EnhancementOptions, type ZodSchemas, type AuthUser } from '@zenstackhq/runtime';
import { createEnhancement } from '@zenstackhq/runtime/enhancements';
import modelMeta from './model-meta';
import policy from './policy';
const zodSchemas = undefined;

import { Prisma } from '../generated';
import type * as _P from '../generated';


export namespace auth {
    type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
    export type User = WithRequired<Partial<_P.User>, 'id'> & Record<string, unknown>;
}




export function enhance<DbClient extends object>(prisma: DbClient, context?: EnhancementContext<auth.User>, options?: EnhancementOptions): DbClient {
    return createEnhancement(prisma, {
        modelMeta,
        policy,
        zodSchemas: zodSchemas as unknown as (ZodSchemas | undefined),
        prismaModule: Prisma,
        ...options
    }, context) as DbClient;
}

