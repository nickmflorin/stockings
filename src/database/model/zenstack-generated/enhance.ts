import { type EnhancementContext, type EnhancementOptions, type ZodSchemas, type AuthUser } from '@zenstackhq/runtime';
import { createEnhancement } from '@zenstackhq/runtime/enhancements';
import modelMeta from './model-meta';
import policy from './policy';
const zodSchemas = undefined;

import { Prisma as _Prisma, PrismaClient as _PrismaClient } from '../generated';
import type { InternalArgs, DynamicClientExtensionThis } from '../generated/runtime/library';
import type * as _P from './.logical-prisma-client/index-fixed';
import type { Prisma, PrismaClient } from './.logical-prisma-client/index-fixed';


export namespace auth {
    type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
    export type User = WithRequired<Partial<_P.User>, 'id'> & Record<string, unknown>;
}




// overload for plain PrismaClient
export function enhance<ExtArgs extends Record<string, any> & InternalArgs>(
    prisma: _PrismaClient<any, any, ExtArgs>,
    context?: EnhancementContext<auth.User>, options?: EnhancementOptions): PrismaClient;

// overload for extended PrismaClient
export function enhance<ExtArgs extends Record<string, any> & InternalArgs>(
    prisma: DynamicClientExtensionThis<_Prisma.TypeMap<ExtArgs>, _Prisma.TypeMapCb, ExtArgs>,
    context?: EnhancementContext<auth.User>, options?: EnhancementOptions): DynamicClientExtensionThis<Prisma.TypeMap<ExtArgs>, Prisma.TypeMapCb, ExtArgs>;

export function enhance(prisma: any, context?: EnhancementContext<auth.User>, options?: EnhancementOptions): any {
    return createEnhancement(prisma, {
        modelMeta,
        policy,
        zodSchemas: zodSchemas as unknown as (ZodSchemas | undefined),
        prismaModule: _Prisma,
        ...options
    }, context);
}

