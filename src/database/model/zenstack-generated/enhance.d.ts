import { type EnhancementContext, type EnhancementOptions } from '@zenstackhq/runtime';
import { Prisma as _Prisma, PrismaClient as _PrismaClient } from '../generated';
import type { InternalArgs, DynamicClientExtensionThis } from '../generated/runtime/library';
import type * as _P from './.logical-prisma-client/index-fixed';
import type { Prisma, PrismaClient } from './.logical-prisma-client/index-fixed';
export declare namespace auth {
    type WithRequired<T, K extends keyof T> = T & {
        [P in K]-?: T[P];
    };
    export type User = WithRequired<Partial<_P.User>, 'id'> & Record<string, unknown>;
    export {};
}
export declare function enhance<ExtArgs extends Record<string, any> & InternalArgs>(prisma: _PrismaClient<any, any, ExtArgs>, context?: EnhancementContext<auth.User>, options?: EnhancementOptions): PrismaClient;
export declare function enhance<ExtArgs extends Record<string, any> & InternalArgs>(prisma: DynamicClientExtensionThis<_Prisma.TypeMap<ExtArgs>, _Prisma.TypeMapCb, ExtArgs>, context?: EnhancementContext<auth.User>, options?: EnhancementOptions): DynamicClientExtensionThis<Prisma.TypeMap<ExtArgs>, Prisma.TypeMapCb, ExtArgs>;
