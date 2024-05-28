
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ProductErrorRecord
 * 
 */
export type ProductErrorRecord = $Result.DefaultSelection<Prisma.$ProductErrorRecordPayload>
/**
 * Model ProductRecordedRecord
 * 
 */
export type ProductRecordedRecord = $Result.DefaultSelection<Prisma.$ProductRecordedRecordPayload>
/**
 * Model ProductRecord
 * 
 */
export type ProductRecord = $Result.DefaultSelection<Prisma.$ProductRecordPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProductRecordStatus: {
  OUT_OF_STOCK: 'OUT_OF_STOCK',
  IN_STOCK: 'IN_STOCK',
  NOT_LISTED: 'NOT_LISTED'
};

export type ProductRecordStatus = (typeof ProductRecordStatus)[keyof typeof ProductRecordStatus]


export const ProductRecordDataFields: {
  PRICE: 'PRICE',
  RAW_PRICE: 'RAW_PRICE',
  STATUS: 'STATUS'
};

export type ProductRecordDataFields = (typeof ProductRecordDataFields)[keyof typeof ProductRecordDataFields]


export const ProductRecordType: {
  RECORDED: 'RECORDED',
  ERROR: 'ERROR'
};

export type ProductRecordType = (typeof ProductRecordType)[keyof typeof ProductRecordType]

}

export type ProductRecordStatus = $Enums.ProductRecordStatus

export const ProductRecordStatus: typeof $Enums.ProductRecordStatus

export type ProductRecordDataFields = $Enums.ProductRecordDataFields

export const ProductRecordDataFields: typeof $Enums.ProductRecordDataFields

export type ProductRecordType = $Enums.ProductRecordType

export const ProductRecordType: typeof $Enums.ProductRecordType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.productErrorRecord`: Exposes CRUD operations for the **ProductErrorRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductErrorRecords
    * const productErrorRecords = await prisma.productErrorRecord.findMany()
    * ```
    */
  get productErrorRecord(): Prisma.ProductErrorRecordDelegate<ExtArgs>;

  /**
   * `prisma.productRecordedRecord`: Exposes CRUD operations for the **ProductRecordedRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductRecordedRecords
    * const productRecordedRecords = await prisma.productRecordedRecord.findMany()
    * ```
    */
  get productRecordedRecord(): Prisma.ProductRecordedRecordDelegate<ExtArgs>;

  /**
   * `prisma.productRecord`: Exposes CRUD operations for the **ProductRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductRecords
    * const productRecords = await prisma.productRecord.findMany()
    * ```
    */
  get productRecord(): Prisma.ProductRecordDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.8.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ProductErrorRecord: 'ProductErrorRecord',
    ProductRecordedRecord: 'ProductRecordedRecord',
    ProductRecord: 'ProductRecord',
    Product: 'Product'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'productErrorRecord' | 'productRecordedRecord' | 'productRecord' | 'product'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ProductErrorRecord: {
        payload: Prisma.$ProductErrorRecordPayload<ExtArgs>
        fields: Prisma.ProductErrorRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductErrorRecordFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductErrorRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductErrorRecordFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductErrorRecordPayload>
          }
          findFirst: {
            args: Prisma.ProductErrorRecordFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductErrorRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductErrorRecordFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductErrorRecordPayload>
          }
          findMany: {
            args: Prisma.ProductErrorRecordFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductErrorRecordPayload>[]
          }
          create: {
            args: Prisma.ProductErrorRecordCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductErrorRecordPayload>
          }
          createMany: {
            args: Prisma.ProductErrorRecordCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductErrorRecordDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductErrorRecordPayload>
          }
          update: {
            args: Prisma.ProductErrorRecordUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductErrorRecordPayload>
          }
          deleteMany: {
            args: Prisma.ProductErrorRecordDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductErrorRecordUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductErrorRecordUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductErrorRecordPayload>
          }
          aggregate: {
            args: Prisma.ProductErrorRecordAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductErrorRecord>
          }
          groupBy: {
            args: Prisma.ProductErrorRecordGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductErrorRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductErrorRecordCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductErrorRecordCountAggregateOutputType> | number
          }
        }
      }
      ProductRecordedRecord: {
        payload: Prisma.$ProductRecordedRecordPayload<ExtArgs>
        fields: Prisma.ProductRecordedRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductRecordedRecordFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordedRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductRecordedRecordFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordedRecordPayload>
          }
          findFirst: {
            args: Prisma.ProductRecordedRecordFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordedRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductRecordedRecordFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordedRecordPayload>
          }
          findMany: {
            args: Prisma.ProductRecordedRecordFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordedRecordPayload>[]
          }
          create: {
            args: Prisma.ProductRecordedRecordCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordedRecordPayload>
          }
          createMany: {
            args: Prisma.ProductRecordedRecordCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductRecordedRecordDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordedRecordPayload>
          }
          update: {
            args: Prisma.ProductRecordedRecordUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordedRecordPayload>
          }
          deleteMany: {
            args: Prisma.ProductRecordedRecordDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductRecordedRecordUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductRecordedRecordUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordedRecordPayload>
          }
          aggregate: {
            args: Prisma.ProductRecordedRecordAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductRecordedRecord>
          }
          groupBy: {
            args: Prisma.ProductRecordedRecordGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductRecordedRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductRecordedRecordCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductRecordedRecordCountAggregateOutputType> | number
          }
        }
      }
      ProductRecord: {
        payload: Prisma.$ProductRecordPayload<ExtArgs>
        fields: Prisma.ProductRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductRecordFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductRecordFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordPayload>
          }
          findFirst: {
            args: Prisma.ProductRecordFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductRecordFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordPayload>
          }
          findMany: {
            args: Prisma.ProductRecordFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordPayload>[]
          }
          create: {
            args: Prisma.ProductRecordCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordPayload>
          }
          createMany: {
            args: Prisma.ProductRecordCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductRecordDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordPayload>
          }
          update: {
            args: Prisma.ProductRecordUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordPayload>
          }
          deleteMany: {
            args: Prisma.ProductRecordDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductRecordUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductRecordUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordPayload>
          }
          aggregate: {
            args: Prisma.ProductRecordAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductRecord>
          }
          groupBy: {
            args: Prisma.ProductRecordGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductRecordCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductRecordCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdProducts: number
    updatedProducts: number
    createdProductRecords: number
    updatedProductRecords: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdProducts?: boolean | UserCountOutputTypeCountCreatedProductsArgs
    updatedProducts?: boolean | UserCountOutputTypeCountUpdatedProductsArgs
    createdProductRecords?: boolean | UserCountOutputTypeCountCreatedProductRecordsArgs
    updatedProductRecords?: boolean | UserCountOutputTypeCountUpdatedProductRecordsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedProductRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductRecordWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatedProductRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductRecordWhereInput
  }



  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    records: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    records?: boolean | ProductCountOutputTypeCountRecordsArgs
  }

  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductRecordWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    firstName: string | null
    lastName: string | null
    profileImageUrl: string | null
    emailAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    firstName: string | null
    lastName: string | null
    profileImageUrl: string | null
    emailAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    firstName: number
    lastName: number
    profileImageUrl: number
    emailAddress: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    firstName?: true
    lastName?: true
    profileImageUrl?: true
    emailAddress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    firstName?: true
    lastName?: true
    profileImageUrl?: true
    emailAddress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    firstName?: true
    lastName?: true
    profileImageUrl?: true
    emailAddress?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    firstName: string
    lastName: string
    profileImageUrl: string | null
    emailAddress: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    firstName?: boolean
    lastName?: boolean
    profileImageUrl?: boolean
    emailAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdProducts?: boolean | User$createdProductsArgs<ExtArgs>
    updatedProducts?: boolean | User$updatedProductsArgs<ExtArgs>
    createdProductRecords?: boolean | User$createdProductRecordsArgs<ExtArgs>
    updatedProductRecords?: boolean | User$updatedProductRecordsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    firstName?: boolean
    lastName?: boolean
    profileImageUrl?: boolean
    emailAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdProducts?: boolean | User$createdProductsArgs<ExtArgs>
    updatedProducts?: boolean | User$updatedProductsArgs<ExtArgs>
    createdProductRecords?: boolean | User$createdProductRecordsArgs<ExtArgs>
    updatedProductRecords?: boolean | User$updatedProductRecordsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdProducts: Prisma.$ProductPayload<ExtArgs>[]
      updatedProducts: Prisma.$ProductPayload<ExtArgs>[]
      createdProductRecords: Prisma.$ProductRecordPayload<ExtArgs>[]
      updatedProductRecords: Prisma.$ProductRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      firstName: string
      lastName: string
      profileImageUrl: string | null
      emailAddress: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    createdProducts<T extends User$createdProductsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    updatedProducts<T extends User$updatedProductsArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    createdProductRecords<T extends User$createdProductRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdProductRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductRecordPayload<ExtArgs>, T, 'findMany'> | Null>;

    updatedProductRecords<T extends User$updatedProductRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedProductRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductRecordPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly profileImageUrl: FieldRef<"User", 'String'>
    readonly emailAddress: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.createdProducts
   */
  export type User$createdProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * User.updatedProducts
   */
  export type User$updatedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * User.createdProductRecords
   */
  export type User$createdProductRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecord
     */
    select?: ProductRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRecordInclude<ExtArgs> | null
    where?: ProductRecordWhereInput
    orderBy?: ProductRecordOrderByWithRelationInput | ProductRecordOrderByWithRelationInput[]
    cursor?: ProductRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductRecordScalarFieldEnum | ProductRecordScalarFieldEnum[]
  }


  /**
   * User.updatedProductRecords
   */
  export type User$updatedProductRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecord
     */
    select?: ProductRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRecordInclude<ExtArgs> | null
    where?: ProductRecordWhereInput
    orderBy?: ProductRecordOrderByWithRelationInput | ProductRecordOrderByWithRelationInput[]
    cursor?: ProductRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductRecordScalarFieldEnum | ProductRecordScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model ProductErrorRecord
   */

  export type AggregateProductErrorRecord = {
    _count: ProductErrorRecordCountAggregateOutputType | null
    _min: ProductErrorRecordMinAggregateOutputType | null
    _max: ProductErrorRecordMaxAggregateOutputType | null
  }

  export type ProductErrorRecordMinAggregateOutputType = {
    id: string | null
    errorMessage: string | null
  }

  export type ProductErrorRecordMaxAggregateOutputType = {
    id: string | null
    errorMessage: string | null
  }

  export type ProductErrorRecordCountAggregateOutputType = {
    id: number
    errorMessage: number
    _all: number
  }


  export type ProductErrorRecordMinAggregateInputType = {
    id?: true
    errorMessage?: true
  }

  export type ProductErrorRecordMaxAggregateInputType = {
    id?: true
    errorMessage?: true
  }

  export type ProductErrorRecordCountAggregateInputType = {
    id?: true
    errorMessage?: true
    _all?: true
  }

  export type ProductErrorRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductErrorRecord to aggregate.
     */
    where?: ProductErrorRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductErrorRecords to fetch.
     */
    orderBy?: ProductErrorRecordOrderByWithRelationInput | ProductErrorRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductErrorRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductErrorRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductErrorRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductErrorRecords
    **/
    _count?: true | ProductErrorRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductErrorRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductErrorRecordMaxAggregateInputType
  }

  export type GetProductErrorRecordAggregateType<T extends ProductErrorRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateProductErrorRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductErrorRecord[P]>
      : GetScalarType<T[P], AggregateProductErrorRecord[P]>
  }




  export type ProductErrorRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductErrorRecordWhereInput
    orderBy?: ProductErrorRecordOrderByWithAggregationInput | ProductErrorRecordOrderByWithAggregationInput[]
    by: ProductErrorRecordScalarFieldEnum[] | ProductErrorRecordScalarFieldEnum
    having?: ProductErrorRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductErrorRecordCountAggregateInputType | true
    _min?: ProductErrorRecordMinAggregateInputType
    _max?: ProductErrorRecordMaxAggregateInputType
  }

  export type ProductErrorRecordGroupByOutputType = {
    id: string
    errorMessage: string
    _count: ProductErrorRecordCountAggregateOutputType | null
    _min: ProductErrorRecordMinAggregateOutputType | null
    _max: ProductErrorRecordMaxAggregateOutputType | null
  }

  type GetProductErrorRecordGroupByPayload<T extends ProductErrorRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductErrorRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductErrorRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductErrorRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ProductErrorRecordGroupByOutputType[P]>
        }
      >
    >


  export type ProductErrorRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    errorMessage?: boolean
  }, ExtArgs["result"]["productErrorRecord"]>

  export type ProductErrorRecordSelectScalar = {
    id?: boolean
    errorMessage?: boolean
  }


  export type $ProductErrorRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductErrorRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      errorMessage: string
    }, ExtArgs["result"]["productErrorRecord"]>
    composites: {}
  }


  type ProductErrorRecordGetPayload<S extends boolean | null | undefined | ProductErrorRecordDefaultArgs> = $Result.GetResult<Prisma.$ProductErrorRecordPayload, S>

  type ProductErrorRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductErrorRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductErrorRecordCountAggregateInputType | true
    }

  export interface ProductErrorRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductErrorRecord'], meta: { name: 'ProductErrorRecord' } }
    /**
     * Find zero or one ProductErrorRecord that matches the filter.
     * @param {ProductErrorRecordFindUniqueArgs} args - Arguments to find a ProductErrorRecord
     * @example
     * // Get one ProductErrorRecord
     * const productErrorRecord = await prisma.productErrorRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductErrorRecordFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductErrorRecordFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductErrorRecordClient<$Result.GetResult<Prisma.$ProductErrorRecordPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductErrorRecord that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductErrorRecordFindUniqueOrThrowArgs} args - Arguments to find a ProductErrorRecord
     * @example
     * // Get one ProductErrorRecord
     * const productErrorRecord = await prisma.productErrorRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductErrorRecordFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductErrorRecordFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductErrorRecordClient<$Result.GetResult<Prisma.$ProductErrorRecordPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductErrorRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductErrorRecordFindFirstArgs} args - Arguments to find a ProductErrorRecord
     * @example
     * // Get one ProductErrorRecord
     * const productErrorRecord = await prisma.productErrorRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductErrorRecordFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductErrorRecordFindFirstArgs<ExtArgs>>
    ): Prisma__ProductErrorRecordClient<$Result.GetResult<Prisma.$ProductErrorRecordPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductErrorRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductErrorRecordFindFirstOrThrowArgs} args - Arguments to find a ProductErrorRecord
     * @example
     * // Get one ProductErrorRecord
     * const productErrorRecord = await prisma.productErrorRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductErrorRecordFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductErrorRecordFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductErrorRecordClient<$Result.GetResult<Prisma.$ProductErrorRecordPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductErrorRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductErrorRecordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductErrorRecords
     * const productErrorRecords = await prisma.productErrorRecord.findMany()
     * 
     * // Get first 10 ProductErrorRecords
     * const productErrorRecords = await prisma.productErrorRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productErrorRecordWithIdOnly = await prisma.productErrorRecord.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductErrorRecordFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductErrorRecordFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductErrorRecordPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductErrorRecord.
     * @param {ProductErrorRecordCreateArgs} args - Arguments to create a ProductErrorRecord.
     * @example
     * // Create one ProductErrorRecord
     * const ProductErrorRecord = await prisma.productErrorRecord.create({
     *   data: {
     *     // ... data to create a ProductErrorRecord
     *   }
     * })
     * 
    **/
    create<T extends ProductErrorRecordCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductErrorRecordCreateArgs<ExtArgs>>
    ): Prisma__ProductErrorRecordClient<$Result.GetResult<Prisma.$ProductErrorRecordPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductErrorRecords.
     *     @param {ProductErrorRecordCreateManyArgs} args - Arguments to create many ProductErrorRecords.
     *     @example
     *     // Create many ProductErrorRecords
     *     const productErrorRecord = await prisma.productErrorRecord.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductErrorRecordCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductErrorRecordCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductErrorRecord.
     * @param {ProductErrorRecordDeleteArgs} args - Arguments to delete one ProductErrorRecord.
     * @example
     * // Delete one ProductErrorRecord
     * const ProductErrorRecord = await prisma.productErrorRecord.delete({
     *   where: {
     *     // ... filter to delete one ProductErrorRecord
     *   }
     * })
     * 
    **/
    delete<T extends ProductErrorRecordDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductErrorRecordDeleteArgs<ExtArgs>>
    ): Prisma__ProductErrorRecordClient<$Result.GetResult<Prisma.$ProductErrorRecordPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductErrorRecord.
     * @param {ProductErrorRecordUpdateArgs} args - Arguments to update one ProductErrorRecord.
     * @example
     * // Update one ProductErrorRecord
     * const productErrorRecord = await prisma.productErrorRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductErrorRecordUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductErrorRecordUpdateArgs<ExtArgs>>
    ): Prisma__ProductErrorRecordClient<$Result.GetResult<Prisma.$ProductErrorRecordPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductErrorRecords.
     * @param {ProductErrorRecordDeleteManyArgs} args - Arguments to filter ProductErrorRecords to delete.
     * @example
     * // Delete a few ProductErrorRecords
     * const { count } = await prisma.productErrorRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductErrorRecordDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductErrorRecordDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductErrorRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductErrorRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductErrorRecords
     * const productErrorRecord = await prisma.productErrorRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductErrorRecordUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductErrorRecordUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductErrorRecord.
     * @param {ProductErrorRecordUpsertArgs} args - Arguments to update or create a ProductErrorRecord.
     * @example
     * // Update or create a ProductErrorRecord
     * const productErrorRecord = await prisma.productErrorRecord.upsert({
     *   create: {
     *     // ... data to create a ProductErrorRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductErrorRecord we want to update
     *   }
     * })
    **/
    upsert<T extends ProductErrorRecordUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductErrorRecordUpsertArgs<ExtArgs>>
    ): Prisma__ProductErrorRecordClient<$Result.GetResult<Prisma.$ProductErrorRecordPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductErrorRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductErrorRecordCountArgs} args - Arguments to filter ProductErrorRecords to count.
     * @example
     * // Count the number of ProductErrorRecords
     * const count = await prisma.productErrorRecord.count({
     *   where: {
     *     // ... the filter for the ProductErrorRecords we want to count
     *   }
     * })
    **/
    count<T extends ProductErrorRecordCountArgs>(
      args?: Subset<T, ProductErrorRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductErrorRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductErrorRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductErrorRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductErrorRecordAggregateArgs>(args: Subset<T, ProductErrorRecordAggregateArgs>): Prisma.PrismaPromise<GetProductErrorRecordAggregateType<T>>

    /**
     * Group by ProductErrorRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductErrorRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductErrorRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductErrorRecordGroupByArgs['orderBy'] }
        : { orderBy?: ProductErrorRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductErrorRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductErrorRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductErrorRecord model
   */
  readonly fields: ProductErrorRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductErrorRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductErrorRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductErrorRecord model
   */ 
  interface ProductErrorRecordFieldRefs {
    readonly id: FieldRef<"ProductErrorRecord", 'String'>
    readonly errorMessage: FieldRef<"ProductErrorRecord", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ProductErrorRecord findUnique
   */
  export type ProductErrorRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductErrorRecord
     */
    select?: ProductErrorRecordSelect<ExtArgs> | null
    /**
     * Filter, which ProductErrorRecord to fetch.
     */
    where: ProductErrorRecordWhereUniqueInput
  }


  /**
   * ProductErrorRecord findUniqueOrThrow
   */
  export type ProductErrorRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductErrorRecord
     */
    select?: ProductErrorRecordSelect<ExtArgs> | null
    /**
     * Filter, which ProductErrorRecord to fetch.
     */
    where: ProductErrorRecordWhereUniqueInput
  }


  /**
   * ProductErrorRecord findFirst
   */
  export type ProductErrorRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductErrorRecord
     */
    select?: ProductErrorRecordSelect<ExtArgs> | null
    /**
     * Filter, which ProductErrorRecord to fetch.
     */
    where?: ProductErrorRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductErrorRecords to fetch.
     */
    orderBy?: ProductErrorRecordOrderByWithRelationInput | ProductErrorRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductErrorRecords.
     */
    cursor?: ProductErrorRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductErrorRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductErrorRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductErrorRecords.
     */
    distinct?: ProductErrorRecordScalarFieldEnum | ProductErrorRecordScalarFieldEnum[]
  }


  /**
   * ProductErrorRecord findFirstOrThrow
   */
  export type ProductErrorRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductErrorRecord
     */
    select?: ProductErrorRecordSelect<ExtArgs> | null
    /**
     * Filter, which ProductErrorRecord to fetch.
     */
    where?: ProductErrorRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductErrorRecords to fetch.
     */
    orderBy?: ProductErrorRecordOrderByWithRelationInput | ProductErrorRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductErrorRecords.
     */
    cursor?: ProductErrorRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductErrorRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductErrorRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductErrorRecords.
     */
    distinct?: ProductErrorRecordScalarFieldEnum | ProductErrorRecordScalarFieldEnum[]
  }


  /**
   * ProductErrorRecord findMany
   */
  export type ProductErrorRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductErrorRecord
     */
    select?: ProductErrorRecordSelect<ExtArgs> | null
    /**
     * Filter, which ProductErrorRecords to fetch.
     */
    where?: ProductErrorRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductErrorRecords to fetch.
     */
    orderBy?: ProductErrorRecordOrderByWithRelationInput | ProductErrorRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductErrorRecords.
     */
    cursor?: ProductErrorRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductErrorRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductErrorRecords.
     */
    skip?: number
    distinct?: ProductErrorRecordScalarFieldEnum | ProductErrorRecordScalarFieldEnum[]
  }


  /**
   * ProductErrorRecord create
   */
  export type ProductErrorRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductErrorRecord
     */
    select?: ProductErrorRecordSelect<ExtArgs> | null
    /**
     * The data needed to create a ProductErrorRecord.
     */
    data: XOR<ProductErrorRecordCreateInput, ProductErrorRecordUncheckedCreateInput>
  }


  /**
   * ProductErrorRecord createMany
   */
  export type ProductErrorRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductErrorRecords.
     */
    data: ProductErrorRecordCreateManyInput | ProductErrorRecordCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProductErrorRecord update
   */
  export type ProductErrorRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductErrorRecord
     */
    select?: ProductErrorRecordSelect<ExtArgs> | null
    /**
     * The data needed to update a ProductErrorRecord.
     */
    data: XOR<ProductErrorRecordUpdateInput, ProductErrorRecordUncheckedUpdateInput>
    /**
     * Choose, which ProductErrorRecord to update.
     */
    where: ProductErrorRecordWhereUniqueInput
  }


  /**
   * ProductErrorRecord updateMany
   */
  export type ProductErrorRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductErrorRecords.
     */
    data: XOR<ProductErrorRecordUpdateManyMutationInput, ProductErrorRecordUncheckedUpdateManyInput>
    /**
     * Filter which ProductErrorRecords to update
     */
    where?: ProductErrorRecordWhereInput
  }


  /**
   * ProductErrorRecord upsert
   */
  export type ProductErrorRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductErrorRecord
     */
    select?: ProductErrorRecordSelect<ExtArgs> | null
    /**
     * The filter to search for the ProductErrorRecord to update in case it exists.
     */
    where: ProductErrorRecordWhereUniqueInput
    /**
     * In case the ProductErrorRecord found by the `where` argument doesn't exist, create a new ProductErrorRecord with this data.
     */
    create: XOR<ProductErrorRecordCreateInput, ProductErrorRecordUncheckedCreateInput>
    /**
     * In case the ProductErrorRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductErrorRecordUpdateInput, ProductErrorRecordUncheckedUpdateInput>
  }


  /**
   * ProductErrorRecord delete
   */
  export type ProductErrorRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductErrorRecord
     */
    select?: ProductErrorRecordSelect<ExtArgs> | null
    /**
     * Filter which ProductErrorRecord to delete.
     */
    where: ProductErrorRecordWhereUniqueInput
  }


  /**
   * ProductErrorRecord deleteMany
   */
  export type ProductErrorRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductErrorRecords to delete
     */
    where?: ProductErrorRecordWhereInput
  }


  /**
   * ProductErrorRecord without action
   */
  export type ProductErrorRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductErrorRecord
     */
    select?: ProductErrorRecordSelect<ExtArgs> | null
  }



  /**
   * Model ProductRecordedRecord
   */

  export type AggregateProductRecordedRecord = {
    _count: ProductRecordedRecordCountAggregateOutputType | null
    _avg: ProductRecordedRecordAvgAggregateOutputType | null
    _sum: ProductRecordedRecordSumAggregateOutputType | null
    _min: ProductRecordedRecordMinAggregateOutputType | null
    _max: ProductRecordedRecordMaxAggregateOutputType | null
  }

  export type ProductRecordedRecordAvgAggregateOutputType = {
    price: number | null
  }

  export type ProductRecordedRecordSumAggregateOutputType = {
    price: number | null
  }

  export type ProductRecordedRecordMinAggregateOutputType = {
    id: string | null
    updatedAt: Date | null
    price: number | null
    rawPrice: string | null
    status: $Enums.ProductRecordStatus | null
    wasManuallyCreated: boolean | null
  }

  export type ProductRecordedRecordMaxAggregateOutputType = {
    id: string | null
    updatedAt: Date | null
    price: number | null
    rawPrice: string | null
    status: $Enums.ProductRecordStatus | null
    wasManuallyCreated: boolean | null
  }

  export type ProductRecordedRecordCountAggregateOutputType = {
    id: number
    updatedAt: number
    price: number
    rawPrice: number
    status: number
    wasManuallyCreated: number
    manuallyChangedFields: number
    _all: number
  }


  export type ProductRecordedRecordAvgAggregateInputType = {
    price?: true
  }

  export type ProductRecordedRecordSumAggregateInputType = {
    price?: true
  }

  export type ProductRecordedRecordMinAggregateInputType = {
    id?: true
    updatedAt?: true
    price?: true
    rawPrice?: true
    status?: true
    wasManuallyCreated?: true
  }

  export type ProductRecordedRecordMaxAggregateInputType = {
    id?: true
    updatedAt?: true
    price?: true
    rawPrice?: true
    status?: true
    wasManuallyCreated?: true
  }

  export type ProductRecordedRecordCountAggregateInputType = {
    id?: true
    updatedAt?: true
    price?: true
    rawPrice?: true
    status?: true
    wasManuallyCreated?: true
    manuallyChangedFields?: true
    _all?: true
  }

  export type ProductRecordedRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductRecordedRecord to aggregate.
     */
    where?: ProductRecordedRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRecordedRecords to fetch.
     */
    orderBy?: ProductRecordedRecordOrderByWithRelationInput | ProductRecordedRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductRecordedRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRecordedRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRecordedRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductRecordedRecords
    **/
    _count?: true | ProductRecordedRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductRecordedRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductRecordedRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductRecordedRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductRecordedRecordMaxAggregateInputType
  }

  export type GetProductRecordedRecordAggregateType<T extends ProductRecordedRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateProductRecordedRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductRecordedRecord[P]>
      : GetScalarType<T[P], AggregateProductRecordedRecord[P]>
  }




  export type ProductRecordedRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductRecordedRecordWhereInput
    orderBy?: ProductRecordedRecordOrderByWithAggregationInput | ProductRecordedRecordOrderByWithAggregationInput[]
    by: ProductRecordedRecordScalarFieldEnum[] | ProductRecordedRecordScalarFieldEnum
    having?: ProductRecordedRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductRecordedRecordCountAggregateInputType | true
    _avg?: ProductRecordedRecordAvgAggregateInputType
    _sum?: ProductRecordedRecordSumAggregateInputType
    _min?: ProductRecordedRecordMinAggregateInputType
    _max?: ProductRecordedRecordMaxAggregateInputType
  }

  export type ProductRecordedRecordGroupByOutputType = {
    id: string
    updatedAt: Date
    price: number
    rawPrice: string
    status: $Enums.ProductRecordStatus
    wasManuallyCreated: boolean
    manuallyChangedFields: $Enums.ProductRecordDataFields[]
    _count: ProductRecordedRecordCountAggregateOutputType | null
    _avg: ProductRecordedRecordAvgAggregateOutputType | null
    _sum: ProductRecordedRecordSumAggregateOutputType | null
    _min: ProductRecordedRecordMinAggregateOutputType | null
    _max: ProductRecordedRecordMaxAggregateOutputType | null
  }

  type GetProductRecordedRecordGroupByPayload<T extends ProductRecordedRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductRecordedRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductRecordedRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductRecordedRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ProductRecordedRecordGroupByOutputType[P]>
        }
      >
    >


  export type ProductRecordedRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updatedAt?: boolean
    price?: boolean
    rawPrice?: boolean
    status?: boolean
    wasManuallyCreated?: boolean
    manuallyChangedFields?: boolean
  }, ExtArgs["result"]["productRecordedRecord"]>

  export type ProductRecordedRecordSelectScalar = {
    id?: boolean
    updatedAt?: boolean
    price?: boolean
    rawPrice?: boolean
    status?: boolean
    wasManuallyCreated?: boolean
    manuallyChangedFields?: boolean
  }


  export type $ProductRecordedRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductRecordedRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      updatedAt: Date
      price: number
      rawPrice: string
      status: $Enums.ProductRecordStatus
      wasManuallyCreated: boolean
      manuallyChangedFields: $Enums.ProductRecordDataFields[]
    }, ExtArgs["result"]["productRecordedRecord"]>
    composites: {}
  }


  type ProductRecordedRecordGetPayload<S extends boolean | null | undefined | ProductRecordedRecordDefaultArgs> = $Result.GetResult<Prisma.$ProductRecordedRecordPayload, S>

  type ProductRecordedRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductRecordedRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductRecordedRecordCountAggregateInputType | true
    }

  export interface ProductRecordedRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductRecordedRecord'], meta: { name: 'ProductRecordedRecord' } }
    /**
     * Find zero or one ProductRecordedRecord that matches the filter.
     * @param {ProductRecordedRecordFindUniqueArgs} args - Arguments to find a ProductRecordedRecord
     * @example
     * // Get one ProductRecordedRecord
     * const productRecordedRecord = await prisma.productRecordedRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductRecordedRecordFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductRecordedRecordFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductRecordedRecordClient<$Result.GetResult<Prisma.$ProductRecordedRecordPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductRecordedRecord that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductRecordedRecordFindUniqueOrThrowArgs} args - Arguments to find a ProductRecordedRecord
     * @example
     * // Get one ProductRecordedRecord
     * const productRecordedRecord = await prisma.productRecordedRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductRecordedRecordFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductRecordedRecordFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductRecordedRecordClient<$Result.GetResult<Prisma.$ProductRecordedRecordPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductRecordedRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecordedRecordFindFirstArgs} args - Arguments to find a ProductRecordedRecord
     * @example
     * // Get one ProductRecordedRecord
     * const productRecordedRecord = await prisma.productRecordedRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductRecordedRecordFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductRecordedRecordFindFirstArgs<ExtArgs>>
    ): Prisma__ProductRecordedRecordClient<$Result.GetResult<Prisma.$ProductRecordedRecordPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductRecordedRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecordedRecordFindFirstOrThrowArgs} args - Arguments to find a ProductRecordedRecord
     * @example
     * // Get one ProductRecordedRecord
     * const productRecordedRecord = await prisma.productRecordedRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductRecordedRecordFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductRecordedRecordFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductRecordedRecordClient<$Result.GetResult<Prisma.$ProductRecordedRecordPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductRecordedRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecordedRecordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductRecordedRecords
     * const productRecordedRecords = await prisma.productRecordedRecord.findMany()
     * 
     * // Get first 10 ProductRecordedRecords
     * const productRecordedRecords = await prisma.productRecordedRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productRecordedRecordWithIdOnly = await prisma.productRecordedRecord.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductRecordedRecordFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductRecordedRecordFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductRecordedRecordPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductRecordedRecord.
     * @param {ProductRecordedRecordCreateArgs} args - Arguments to create a ProductRecordedRecord.
     * @example
     * // Create one ProductRecordedRecord
     * const ProductRecordedRecord = await prisma.productRecordedRecord.create({
     *   data: {
     *     // ... data to create a ProductRecordedRecord
     *   }
     * })
     * 
    **/
    create<T extends ProductRecordedRecordCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductRecordedRecordCreateArgs<ExtArgs>>
    ): Prisma__ProductRecordedRecordClient<$Result.GetResult<Prisma.$ProductRecordedRecordPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductRecordedRecords.
     *     @param {ProductRecordedRecordCreateManyArgs} args - Arguments to create many ProductRecordedRecords.
     *     @example
     *     // Create many ProductRecordedRecords
     *     const productRecordedRecord = await prisma.productRecordedRecord.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductRecordedRecordCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductRecordedRecordCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductRecordedRecord.
     * @param {ProductRecordedRecordDeleteArgs} args - Arguments to delete one ProductRecordedRecord.
     * @example
     * // Delete one ProductRecordedRecord
     * const ProductRecordedRecord = await prisma.productRecordedRecord.delete({
     *   where: {
     *     // ... filter to delete one ProductRecordedRecord
     *   }
     * })
     * 
    **/
    delete<T extends ProductRecordedRecordDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductRecordedRecordDeleteArgs<ExtArgs>>
    ): Prisma__ProductRecordedRecordClient<$Result.GetResult<Prisma.$ProductRecordedRecordPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductRecordedRecord.
     * @param {ProductRecordedRecordUpdateArgs} args - Arguments to update one ProductRecordedRecord.
     * @example
     * // Update one ProductRecordedRecord
     * const productRecordedRecord = await prisma.productRecordedRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductRecordedRecordUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductRecordedRecordUpdateArgs<ExtArgs>>
    ): Prisma__ProductRecordedRecordClient<$Result.GetResult<Prisma.$ProductRecordedRecordPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductRecordedRecords.
     * @param {ProductRecordedRecordDeleteManyArgs} args - Arguments to filter ProductRecordedRecords to delete.
     * @example
     * // Delete a few ProductRecordedRecords
     * const { count } = await prisma.productRecordedRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductRecordedRecordDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductRecordedRecordDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductRecordedRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecordedRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductRecordedRecords
     * const productRecordedRecord = await prisma.productRecordedRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductRecordedRecordUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductRecordedRecordUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductRecordedRecord.
     * @param {ProductRecordedRecordUpsertArgs} args - Arguments to update or create a ProductRecordedRecord.
     * @example
     * // Update or create a ProductRecordedRecord
     * const productRecordedRecord = await prisma.productRecordedRecord.upsert({
     *   create: {
     *     // ... data to create a ProductRecordedRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductRecordedRecord we want to update
     *   }
     * })
    **/
    upsert<T extends ProductRecordedRecordUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductRecordedRecordUpsertArgs<ExtArgs>>
    ): Prisma__ProductRecordedRecordClient<$Result.GetResult<Prisma.$ProductRecordedRecordPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductRecordedRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecordedRecordCountArgs} args - Arguments to filter ProductRecordedRecords to count.
     * @example
     * // Count the number of ProductRecordedRecords
     * const count = await prisma.productRecordedRecord.count({
     *   where: {
     *     // ... the filter for the ProductRecordedRecords we want to count
     *   }
     * })
    **/
    count<T extends ProductRecordedRecordCountArgs>(
      args?: Subset<T, ProductRecordedRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductRecordedRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductRecordedRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecordedRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductRecordedRecordAggregateArgs>(args: Subset<T, ProductRecordedRecordAggregateArgs>): Prisma.PrismaPromise<GetProductRecordedRecordAggregateType<T>>

    /**
     * Group by ProductRecordedRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecordedRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductRecordedRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductRecordedRecordGroupByArgs['orderBy'] }
        : { orderBy?: ProductRecordedRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductRecordedRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductRecordedRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductRecordedRecord model
   */
  readonly fields: ProductRecordedRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductRecordedRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductRecordedRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductRecordedRecord model
   */ 
  interface ProductRecordedRecordFieldRefs {
    readonly id: FieldRef<"ProductRecordedRecord", 'String'>
    readonly updatedAt: FieldRef<"ProductRecordedRecord", 'DateTime'>
    readonly price: FieldRef<"ProductRecordedRecord", 'Float'>
    readonly rawPrice: FieldRef<"ProductRecordedRecord", 'String'>
    readonly status: FieldRef<"ProductRecordedRecord", 'ProductRecordStatus'>
    readonly wasManuallyCreated: FieldRef<"ProductRecordedRecord", 'Boolean'>
    readonly manuallyChangedFields: FieldRef<"ProductRecordedRecord", 'ProductRecordDataFields[]'>
  }
    

  // Custom InputTypes

  /**
   * ProductRecordedRecord findUnique
   */
  export type ProductRecordedRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecordedRecord
     */
    select?: ProductRecordedRecordSelect<ExtArgs> | null
    /**
     * Filter, which ProductRecordedRecord to fetch.
     */
    where: ProductRecordedRecordWhereUniqueInput
  }


  /**
   * ProductRecordedRecord findUniqueOrThrow
   */
  export type ProductRecordedRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecordedRecord
     */
    select?: ProductRecordedRecordSelect<ExtArgs> | null
    /**
     * Filter, which ProductRecordedRecord to fetch.
     */
    where: ProductRecordedRecordWhereUniqueInput
  }


  /**
   * ProductRecordedRecord findFirst
   */
  export type ProductRecordedRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecordedRecord
     */
    select?: ProductRecordedRecordSelect<ExtArgs> | null
    /**
     * Filter, which ProductRecordedRecord to fetch.
     */
    where?: ProductRecordedRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRecordedRecords to fetch.
     */
    orderBy?: ProductRecordedRecordOrderByWithRelationInput | ProductRecordedRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductRecordedRecords.
     */
    cursor?: ProductRecordedRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRecordedRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRecordedRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductRecordedRecords.
     */
    distinct?: ProductRecordedRecordScalarFieldEnum | ProductRecordedRecordScalarFieldEnum[]
  }


  /**
   * ProductRecordedRecord findFirstOrThrow
   */
  export type ProductRecordedRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecordedRecord
     */
    select?: ProductRecordedRecordSelect<ExtArgs> | null
    /**
     * Filter, which ProductRecordedRecord to fetch.
     */
    where?: ProductRecordedRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRecordedRecords to fetch.
     */
    orderBy?: ProductRecordedRecordOrderByWithRelationInput | ProductRecordedRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductRecordedRecords.
     */
    cursor?: ProductRecordedRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRecordedRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRecordedRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductRecordedRecords.
     */
    distinct?: ProductRecordedRecordScalarFieldEnum | ProductRecordedRecordScalarFieldEnum[]
  }


  /**
   * ProductRecordedRecord findMany
   */
  export type ProductRecordedRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecordedRecord
     */
    select?: ProductRecordedRecordSelect<ExtArgs> | null
    /**
     * Filter, which ProductRecordedRecords to fetch.
     */
    where?: ProductRecordedRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRecordedRecords to fetch.
     */
    orderBy?: ProductRecordedRecordOrderByWithRelationInput | ProductRecordedRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductRecordedRecords.
     */
    cursor?: ProductRecordedRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRecordedRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRecordedRecords.
     */
    skip?: number
    distinct?: ProductRecordedRecordScalarFieldEnum | ProductRecordedRecordScalarFieldEnum[]
  }


  /**
   * ProductRecordedRecord create
   */
  export type ProductRecordedRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecordedRecord
     */
    select?: ProductRecordedRecordSelect<ExtArgs> | null
    /**
     * The data needed to create a ProductRecordedRecord.
     */
    data: XOR<ProductRecordedRecordCreateInput, ProductRecordedRecordUncheckedCreateInput>
  }


  /**
   * ProductRecordedRecord createMany
   */
  export type ProductRecordedRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductRecordedRecords.
     */
    data: ProductRecordedRecordCreateManyInput | ProductRecordedRecordCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProductRecordedRecord update
   */
  export type ProductRecordedRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecordedRecord
     */
    select?: ProductRecordedRecordSelect<ExtArgs> | null
    /**
     * The data needed to update a ProductRecordedRecord.
     */
    data: XOR<ProductRecordedRecordUpdateInput, ProductRecordedRecordUncheckedUpdateInput>
    /**
     * Choose, which ProductRecordedRecord to update.
     */
    where: ProductRecordedRecordWhereUniqueInput
  }


  /**
   * ProductRecordedRecord updateMany
   */
  export type ProductRecordedRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductRecordedRecords.
     */
    data: XOR<ProductRecordedRecordUpdateManyMutationInput, ProductRecordedRecordUncheckedUpdateManyInput>
    /**
     * Filter which ProductRecordedRecords to update
     */
    where?: ProductRecordedRecordWhereInput
  }


  /**
   * ProductRecordedRecord upsert
   */
  export type ProductRecordedRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecordedRecord
     */
    select?: ProductRecordedRecordSelect<ExtArgs> | null
    /**
     * The filter to search for the ProductRecordedRecord to update in case it exists.
     */
    where: ProductRecordedRecordWhereUniqueInput
    /**
     * In case the ProductRecordedRecord found by the `where` argument doesn't exist, create a new ProductRecordedRecord with this data.
     */
    create: XOR<ProductRecordedRecordCreateInput, ProductRecordedRecordUncheckedCreateInput>
    /**
     * In case the ProductRecordedRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductRecordedRecordUpdateInput, ProductRecordedRecordUncheckedUpdateInput>
  }


  /**
   * ProductRecordedRecord delete
   */
  export type ProductRecordedRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecordedRecord
     */
    select?: ProductRecordedRecordSelect<ExtArgs> | null
    /**
     * Filter which ProductRecordedRecord to delete.
     */
    where: ProductRecordedRecordWhereUniqueInput
  }


  /**
   * ProductRecordedRecord deleteMany
   */
  export type ProductRecordedRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductRecordedRecords to delete
     */
    where?: ProductRecordedRecordWhereInput
  }


  /**
   * ProductRecordedRecord without action
   */
  export type ProductRecordedRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecordedRecord
     */
    select?: ProductRecordedRecordSelect<ExtArgs> | null
  }



  /**
   * Model ProductRecord
   */

  export type AggregateProductRecord = {
    _count: ProductRecordCountAggregateOutputType | null
    _min: ProductRecordMinAggregateOutputType | null
    _max: ProductRecordMaxAggregateOutputType | null
  }

  export type ProductRecordMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    createdById: string | null
    updatedById: string | null
    recordType: $Enums.ProductRecordType | null
    recordId: string | null
    productId: string | null
  }

  export type ProductRecordMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    createdById: string | null
    updatedById: string | null
    recordType: $Enums.ProductRecordType | null
    recordId: string | null
    productId: string | null
  }

  export type ProductRecordCountAggregateOutputType = {
    id: number
    timestamp: number
    createdById: number
    updatedById: number
    recordType: number
    recordId: number
    productId: number
    _all: number
  }


  export type ProductRecordMinAggregateInputType = {
    id?: true
    timestamp?: true
    createdById?: true
    updatedById?: true
    recordType?: true
    recordId?: true
    productId?: true
  }

  export type ProductRecordMaxAggregateInputType = {
    id?: true
    timestamp?: true
    createdById?: true
    updatedById?: true
    recordType?: true
    recordId?: true
    productId?: true
  }

  export type ProductRecordCountAggregateInputType = {
    id?: true
    timestamp?: true
    createdById?: true
    updatedById?: true
    recordType?: true
    recordId?: true
    productId?: true
    _all?: true
  }

  export type ProductRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductRecord to aggregate.
     */
    where?: ProductRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRecords to fetch.
     */
    orderBy?: ProductRecordOrderByWithRelationInput | ProductRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductRecords
    **/
    _count?: true | ProductRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductRecordMaxAggregateInputType
  }

  export type GetProductRecordAggregateType<T extends ProductRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateProductRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductRecord[P]>
      : GetScalarType<T[P], AggregateProductRecord[P]>
  }




  export type ProductRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductRecordWhereInput
    orderBy?: ProductRecordOrderByWithAggregationInput | ProductRecordOrderByWithAggregationInput[]
    by: ProductRecordScalarFieldEnum[] | ProductRecordScalarFieldEnum
    having?: ProductRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductRecordCountAggregateInputType | true
    _min?: ProductRecordMinAggregateInputType
    _max?: ProductRecordMaxAggregateInputType
  }

  export type ProductRecordGroupByOutputType = {
    id: string
    timestamp: Date
    createdById: string
    updatedById: string
    recordType: $Enums.ProductRecordType
    recordId: string
    productId: string
    _count: ProductRecordCountAggregateOutputType | null
    _min: ProductRecordMinAggregateOutputType | null
    _max: ProductRecordMaxAggregateOutputType | null
  }

  type GetProductRecordGroupByPayload<T extends ProductRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ProductRecordGroupByOutputType[P]>
        }
      >
    >


  export type ProductRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    createdById?: boolean
    updatedById?: boolean
    recordType?: boolean
    recordId?: boolean
    productId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productRecord"]>

  export type ProductRecordSelectScalar = {
    id?: boolean
    timestamp?: boolean
    createdById?: boolean
    updatedById?: boolean
    recordType?: boolean
    recordId?: boolean
    productId?: boolean
  }

  export type ProductRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }


  export type $ProductRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductRecord"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      updatedBy: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      createdById: string
      updatedById: string
      recordType: $Enums.ProductRecordType
      recordId: string
      productId: string
    }, ExtArgs["result"]["productRecord"]>
    composites: {}
  }


  type ProductRecordGetPayload<S extends boolean | null | undefined | ProductRecordDefaultArgs> = $Result.GetResult<Prisma.$ProductRecordPayload, S>

  type ProductRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductRecordCountAggregateInputType | true
    }

  export interface ProductRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductRecord'], meta: { name: 'ProductRecord' } }
    /**
     * Find zero or one ProductRecord that matches the filter.
     * @param {ProductRecordFindUniqueArgs} args - Arguments to find a ProductRecord
     * @example
     * // Get one ProductRecord
     * const productRecord = await prisma.productRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductRecordFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductRecordFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductRecordClient<$Result.GetResult<Prisma.$ProductRecordPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductRecord that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductRecordFindUniqueOrThrowArgs} args - Arguments to find a ProductRecord
     * @example
     * // Get one ProductRecord
     * const productRecord = await prisma.productRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductRecordFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductRecordFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductRecordClient<$Result.GetResult<Prisma.$ProductRecordPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecordFindFirstArgs} args - Arguments to find a ProductRecord
     * @example
     * // Get one ProductRecord
     * const productRecord = await prisma.productRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductRecordFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductRecordFindFirstArgs<ExtArgs>>
    ): Prisma__ProductRecordClient<$Result.GetResult<Prisma.$ProductRecordPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecordFindFirstOrThrowArgs} args - Arguments to find a ProductRecord
     * @example
     * // Get one ProductRecord
     * const productRecord = await prisma.productRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductRecordFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductRecordFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductRecordClient<$Result.GetResult<Prisma.$ProductRecordPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductRecords
     * const productRecords = await prisma.productRecord.findMany()
     * 
     * // Get first 10 ProductRecords
     * const productRecords = await prisma.productRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productRecordWithIdOnly = await prisma.productRecord.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductRecordFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductRecordFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductRecordPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductRecord.
     * @param {ProductRecordCreateArgs} args - Arguments to create a ProductRecord.
     * @example
     * // Create one ProductRecord
     * const ProductRecord = await prisma.productRecord.create({
     *   data: {
     *     // ... data to create a ProductRecord
     *   }
     * })
     * 
    **/
    create<T extends ProductRecordCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductRecordCreateArgs<ExtArgs>>
    ): Prisma__ProductRecordClient<$Result.GetResult<Prisma.$ProductRecordPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductRecords.
     *     @param {ProductRecordCreateManyArgs} args - Arguments to create many ProductRecords.
     *     @example
     *     // Create many ProductRecords
     *     const productRecord = await prisma.productRecord.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductRecordCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductRecordCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductRecord.
     * @param {ProductRecordDeleteArgs} args - Arguments to delete one ProductRecord.
     * @example
     * // Delete one ProductRecord
     * const ProductRecord = await prisma.productRecord.delete({
     *   where: {
     *     // ... filter to delete one ProductRecord
     *   }
     * })
     * 
    **/
    delete<T extends ProductRecordDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductRecordDeleteArgs<ExtArgs>>
    ): Prisma__ProductRecordClient<$Result.GetResult<Prisma.$ProductRecordPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductRecord.
     * @param {ProductRecordUpdateArgs} args - Arguments to update one ProductRecord.
     * @example
     * // Update one ProductRecord
     * const productRecord = await prisma.productRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductRecordUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductRecordUpdateArgs<ExtArgs>>
    ): Prisma__ProductRecordClient<$Result.GetResult<Prisma.$ProductRecordPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductRecords.
     * @param {ProductRecordDeleteManyArgs} args - Arguments to filter ProductRecords to delete.
     * @example
     * // Delete a few ProductRecords
     * const { count } = await prisma.productRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductRecordDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductRecordDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductRecords
     * const productRecord = await prisma.productRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductRecordUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductRecordUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductRecord.
     * @param {ProductRecordUpsertArgs} args - Arguments to update or create a ProductRecord.
     * @example
     * // Update or create a ProductRecord
     * const productRecord = await prisma.productRecord.upsert({
     *   create: {
     *     // ... data to create a ProductRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductRecord we want to update
     *   }
     * })
    **/
    upsert<T extends ProductRecordUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductRecordUpsertArgs<ExtArgs>>
    ): Prisma__ProductRecordClient<$Result.GetResult<Prisma.$ProductRecordPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecordCountArgs} args - Arguments to filter ProductRecords to count.
     * @example
     * // Count the number of ProductRecords
     * const count = await prisma.productRecord.count({
     *   where: {
     *     // ... the filter for the ProductRecords we want to count
     *   }
     * })
    **/
    count<T extends ProductRecordCountArgs>(
      args?: Subset<T, ProductRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductRecordAggregateArgs>(args: Subset<T, ProductRecordAggregateArgs>): Prisma.PrismaPromise<GetProductRecordAggregateType<T>>

    /**
     * Group by ProductRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductRecordGroupByArgs['orderBy'] }
        : { orderBy?: ProductRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductRecord model
   */
  readonly fields: ProductRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    updatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductRecord model
   */ 
  interface ProductRecordFieldRefs {
    readonly id: FieldRef<"ProductRecord", 'String'>
    readonly timestamp: FieldRef<"ProductRecord", 'DateTime'>
    readonly createdById: FieldRef<"ProductRecord", 'String'>
    readonly updatedById: FieldRef<"ProductRecord", 'String'>
    readonly recordType: FieldRef<"ProductRecord", 'ProductRecordType'>
    readonly recordId: FieldRef<"ProductRecord", 'String'>
    readonly productId: FieldRef<"ProductRecord", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ProductRecord findUnique
   */
  export type ProductRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecord
     */
    select?: ProductRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRecordInclude<ExtArgs> | null
    /**
     * Filter, which ProductRecord to fetch.
     */
    where: ProductRecordWhereUniqueInput
  }


  /**
   * ProductRecord findUniqueOrThrow
   */
  export type ProductRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecord
     */
    select?: ProductRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRecordInclude<ExtArgs> | null
    /**
     * Filter, which ProductRecord to fetch.
     */
    where: ProductRecordWhereUniqueInput
  }


  /**
   * ProductRecord findFirst
   */
  export type ProductRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecord
     */
    select?: ProductRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRecordInclude<ExtArgs> | null
    /**
     * Filter, which ProductRecord to fetch.
     */
    where?: ProductRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRecords to fetch.
     */
    orderBy?: ProductRecordOrderByWithRelationInput | ProductRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductRecords.
     */
    cursor?: ProductRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductRecords.
     */
    distinct?: ProductRecordScalarFieldEnum | ProductRecordScalarFieldEnum[]
  }


  /**
   * ProductRecord findFirstOrThrow
   */
  export type ProductRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecord
     */
    select?: ProductRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRecordInclude<ExtArgs> | null
    /**
     * Filter, which ProductRecord to fetch.
     */
    where?: ProductRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRecords to fetch.
     */
    orderBy?: ProductRecordOrderByWithRelationInput | ProductRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductRecords.
     */
    cursor?: ProductRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductRecords.
     */
    distinct?: ProductRecordScalarFieldEnum | ProductRecordScalarFieldEnum[]
  }


  /**
   * ProductRecord findMany
   */
  export type ProductRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecord
     */
    select?: ProductRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRecordInclude<ExtArgs> | null
    /**
     * Filter, which ProductRecords to fetch.
     */
    where?: ProductRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRecords to fetch.
     */
    orderBy?: ProductRecordOrderByWithRelationInput | ProductRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductRecords.
     */
    cursor?: ProductRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRecords.
     */
    skip?: number
    distinct?: ProductRecordScalarFieldEnum | ProductRecordScalarFieldEnum[]
  }


  /**
   * ProductRecord create
   */
  export type ProductRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecord
     */
    select?: ProductRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductRecord.
     */
    data: XOR<ProductRecordCreateInput, ProductRecordUncheckedCreateInput>
  }


  /**
   * ProductRecord createMany
   */
  export type ProductRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductRecords.
     */
    data: ProductRecordCreateManyInput | ProductRecordCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProductRecord update
   */
  export type ProductRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecord
     */
    select?: ProductRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductRecord.
     */
    data: XOR<ProductRecordUpdateInput, ProductRecordUncheckedUpdateInput>
    /**
     * Choose, which ProductRecord to update.
     */
    where: ProductRecordWhereUniqueInput
  }


  /**
   * ProductRecord updateMany
   */
  export type ProductRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductRecords.
     */
    data: XOR<ProductRecordUpdateManyMutationInput, ProductRecordUncheckedUpdateManyInput>
    /**
     * Filter which ProductRecords to update
     */
    where?: ProductRecordWhereInput
  }


  /**
   * ProductRecord upsert
   */
  export type ProductRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecord
     */
    select?: ProductRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductRecord to update in case it exists.
     */
    where: ProductRecordWhereUniqueInput
    /**
     * In case the ProductRecord found by the `where` argument doesn't exist, create a new ProductRecord with this data.
     */
    create: XOR<ProductRecordCreateInput, ProductRecordUncheckedCreateInput>
    /**
     * In case the ProductRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductRecordUpdateInput, ProductRecordUncheckedUpdateInput>
  }


  /**
   * ProductRecord delete
   */
  export type ProductRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecord
     */
    select?: ProductRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRecordInclude<ExtArgs> | null
    /**
     * Filter which ProductRecord to delete.
     */
    where: ProductRecordWhereUniqueInput
  }


  /**
   * ProductRecord deleteMany
   */
  export type ProductRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductRecords to delete
     */
    where?: ProductRecordWhereInput
  }


  /**
   * ProductRecord without action
   */
  export type ProductRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecord
     */
    select?: ProductRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRecordInclude<ExtArgs> | null
  }



  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    createdById: string | null
    updatedAt: Date | null
    updatedById: string | null
    name: string | null
    slug: string | null
    code: string | null
    imageSrc: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    createdById: string | null
    updatedAt: Date | null
    updatedById: string | null
    name: string | null
    slug: string | null
    code: string | null
    imageSrc: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    createdAt: number
    createdById: number
    updatedAt: number
    updatedById: number
    name: number
    slug: number
    code: number
    imageSrc: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    createdAt?: true
    createdById?: true
    updatedAt?: true
    updatedById?: true
    name?: true
    slug?: true
    code?: true
    imageSrc?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    createdAt?: true
    createdById?: true
    updatedAt?: true
    updatedById?: true
    name?: true
    slug?: true
    code?: true
    imageSrc?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    createdAt?: true
    createdById?: true
    updatedAt?: true
    updatedById?: true
    name?: true
    slug?: true
    code?: true
    imageSrc?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    createdAt: Date
    createdById: string
    updatedAt: Date
    updatedById: string
    name: string
    slug: string
    code: string
    imageSrc: string
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    createdById?: boolean
    updatedAt?: boolean
    updatedById?: boolean
    name?: boolean
    slug?: boolean
    code?: boolean
    imageSrc?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
    records?: boolean | Product$recordsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    createdAt?: boolean
    createdById?: boolean
    updatedAt?: boolean
    updatedById?: boolean
    name?: boolean
    slug?: boolean
    code?: boolean
    imageSrc?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
    records?: boolean | Product$recordsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      updatedBy: Prisma.$UserPayload<ExtArgs>
      records: Prisma.$ProductRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      createdById: string
      updatedAt: Date
      updatedById: string
      name: string
      slug: string
      code: string
      imageSrc: string
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    updatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    records<T extends Product$recordsArgs<ExtArgs> = {}>(args?: Subset<T, Product$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductRecordPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly createdById: FieldRef<"Product", 'String'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
    readonly updatedById: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly code: FieldRef<"Product", 'String'>
    readonly imageSrc: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product.records
   */
  export type Product$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecord
     */
    select?: ProductRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRecordInclude<ExtArgs> | null
    where?: ProductRecordWhereInput
    orderBy?: ProductRecordOrderByWithRelationInput | ProductRecordOrderByWithRelationInput[]
    cursor?: ProductRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductRecordScalarFieldEnum | ProductRecordScalarFieldEnum[]
  }


  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    firstName: 'firstName',
    lastName: 'lastName',
    profileImageUrl: 'profileImageUrl',
    emailAddress: 'emailAddress',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductErrorRecordScalarFieldEnum: {
    id: 'id',
    errorMessage: 'errorMessage'
  };

  export type ProductErrorRecordScalarFieldEnum = (typeof ProductErrorRecordScalarFieldEnum)[keyof typeof ProductErrorRecordScalarFieldEnum]


  export const ProductRecordedRecordScalarFieldEnum: {
    id: 'id',
    updatedAt: 'updatedAt',
    price: 'price',
    rawPrice: 'rawPrice',
    status: 'status',
    wasManuallyCreated: 'wasManuallyCreated',
    manuallyChangedFields: 'manuallyChangedFields'
  };

  export type ProductRecordedRecordScalarFieldEnum = (typeof ProductRecordedRecordScalarFieldEnum)[keyof typeof ProductRecordedRecordScalarFieldEnum]


  export const ProductRecordScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    createdById: 'createdById',
    updatedById: 'updatedById',
    recordType: 'recordType',
    recordId: 'recordId',
    productId: 'productId'
  };

  export type ProductRecordScalarFieldEnum = (typeof ProductRecordScalarFieldEnum)[keyof typeof ProductRecordScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    createdById: 'createdById',
    updatedAt: 'updatedAt',
    updatedById: 'updatedById',
    name: 'name',
    slug: 'slug',
    code: 'code',
    imageSrc: 'imageSrc'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ProductRecordStatus'
   */
  export type EnumProductRecordStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductRecordStatus'>
    


  /**
   * Reference to a field of type 'ProductRecordStatus[]'
   */
  export type ListEnumProductRecordStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductRecordStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ProductRecordDataFields[]'
   */
  export type ListEnumProductRecordDataFieldsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductRecordDataFields[]'>
    


  /**
   * Reference to a field of type 'ProductRecordDataFields'
   */
  export type EnumProductRecordDataFieldsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductRecordDataFields'>
    


  /**
   * Reference to a field of type 'ProductRecordType'
   */
  export type EnumProductRecordTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductRecordType'>
    


  /**
   * Reference to a field of type 'ProductRecordType[]'
   */
  export type ListEnumProductRecordTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductRecordType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    profileImageUrl?: StringNullableFilter<"User"> | string | null
    emailAddress?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdProducts?: ProductListRelationFilter
    updatedProducts?: ProductListRelationFilter
    createdProductRecords?: ProductRecordListRelationFilter
    updatedProductRecords?: ProductRecordListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    emailAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdProducts?: ProductOrderByRelationAggregateInput
    updatedProducts?: ProductOrderByRelationAggregateInput
    createdProductRecords?: ProductRecordOrderByRelationAggregateInput
    updatedProductRecords?: ProductRecordOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    profileImageUrl?: StringNullableFilter<"User"> | string | null
    emailAddress?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdProducts?: ProductListRelationFilter
    updatedProducts?: ProductListRelationFilter
    createdProductRecords?: ProductRecordListRelationFilter
    updatedProductRecords?: ProductRecordListRelationFilter
  }, "id" | "clerkId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    emailAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    profileImageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailAddress?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProductErrorRecordWhereInput = {
    AND?: ProductErrorRecordWhereInput | ProductErrorRecordWhereInput[]
    OR?: ProductErrorRecordWhereInput[]
    NOT?: ProductErrorRecordWhereInput | ProductErrorRecordWhereInput[]
    id?: UuidFilter<"ProductErrorRecord"> | string
    errorMessage?: StringFilter<"ProductErrorRecord"> | string
  }

  export type ProductErrorRecordOrderByWithRelationInput = {
    id?: SortOrder
    errorMessage?: SortOrder
  }

  export type ProductErrorRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductErrorRecordWhereInput | ProductErrorRecordWhereInput[]
    OR?: ProductErrorRecordWhereInput[]
    NOT?: ProductErrorRecordWhereInput | ProductErrorRecordWhereInput[]
    errorMessage?: StringFilter<"ProductErrorRecord"> | string
  }, "id">

  export type ProductErrorRecordOrderByWithAggregationInput = {
    id?: SortOrder
    errorMessage?: SortOrder
    _count?: ProductErrorRecordCountOrderByAggregateInput
    _max?: ProductErrorRecordMaxOrderByAggregateInput
    _min?: ProductErrorRecordMinOrderByAggregateInput
  }

  export type ProductErrorRecordScalarWhereWithAggregatesInput = {
    AND?: ProductErrorRecordScalarWhereWithAggregatesInput | ProductErrorRecordScalarWhereWithAggregatesInput[]
    OR?: ProductErrorRecordScalarWhereWithAggregatesInput[]
    NOT?: ProductErrorRecordScalarWhereWithAggregatesInput | ProductErrorRecordScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProductErrorRecord"> | string
    errorMessage?: StringWithAggregatesFilter<"ProductErrorRecord"> | string
  }

  export type ProductRecordedRecordWhereInput = {
    AND?: ProductRecordedRecordWhereInput | ProductRecordedRecordWhereInput[]
    OR?: ProductRecordedRecordWhereInput[]
    NOT?: ProductRecordedRecordWhereInput | ProductRecordedRecordWhereInput[]
    id?: UuidFilter<"ProductRecordedRecord"> | string
    updatedAt?: DateTimeFilter<"ProductRecordedRecord"> | Date | string
    price?: FloatFilter<"ProductRecordedRecord"> | number
    rawPrice?: StringFilter<"ProductRecordedRecord"> | string
    status?: EnumProductRecordStatusFilter<"ProductRecordedRecord"> | $Enums.ProductRecordStatus
    wasManuallyCreated?: BoolFilter<"ProductRecordedRecord"> | boolean
    manuallyChangedFields?: EnumProductRecordDataFieldsNullableListFilter<"ProductRecordedRecord">
  }

  export type ProductRecordedRecordOrderByWithRelationInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    price?: SortOrder
    rawPrice?: SortOrder
    status?: SortOrder
    wasManuallyCreated?: SortOrder
    manuallyChangedFields?: SortOrder
  }

  export type ProductRecordedRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductRecordedRecordWhereInput | ProductRecordedRecordWhereInput[]
    OR?: ProductRecordedRecordWhereInput[]
    NOT?: ProductRecordedRecordWhereInput | ProductRecordedRecordWhereInput[]
    updatedAt?: DateTimeFilter<"ProductRecordedRecord"> | Date | string
    price?: FloatFilter<"ProductRecordedRecord"> | number
    rawPrice?: StringFilter<"ProductRecordedRecord"> | string
    status?: EnumProductRecordStatusFilter<"ProductRecordedRecord"> | $Enums.ProductRecordStatus
    wasManuallyCreated?: BoolFilter<"ProductRecordedRecord"> | boolean
    manuallyChangedFields?: EnumProductRecordDataFieldsNullableListFilter<"ProductRecordedRecord">
  }, "id">

  export type ProductRecordedRecordOrderByWithAggregationInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    price?: SortOrder
    rawPrice?: SortOrder
    status?: SortOrder
    wasManuallyCreated?: SortOrder
    manuallyChangedFields?: SortOrder
    _count?: ProductRecordedRecordCountOrderByAggregateInput
    _avg?: ProductRecordedRecordAvgOrderByAggregateInput
    _max?: ProductRecordedRecordMaxOrderByAggregateInput
    _min?: ProductRecordedRecordMinOrderByAggregateInput
    _sum?: ProductRecordedRecordSumOrderByAggregateInput
  }

  export type ProductRecordedRecordScalarWhereWithAggregatesInput = {
    AND?: ProductRecordedRecordScalarWhereWithAggregatesInput | ProductRecordedRecordScalarWhereWithAggregatesInput[]
    OR?: ProductRecordedRecordScalarWhereWithAggregatesInput[]
    NOT?: ProductRecordedRecordScalarWhereWithAggregatesInput | ProductRecordedRecordScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProductRecordedRecord"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductRecordedRecord"> | Date | string
    price?: FloatWithAggregatesFilter<"ProductRecordedRecord"> | number
    rawPrice?: StringWithAggregatesFilter<"ProductRecordedRecord"> | string
    status?: EnumProductRecordStatusWithAggregatesFilter<"ProductRecordedRecord"> | $Enums.ProductRecordStatus
    wasManuallyCreated?: BoolWithAggregatesFilter<"ProductRecordedRecord"> | boolean
    manuallyChangedFields?: EnumProductRecordDataFieldsNullableListFilter<"ProductRecordedRecord">
  }

  export type ProductRecordWhereInput = {
    AND?: ProductRecordWhereInput | ProductRecordWhereInput[]
    OR?: ProductRecordWhereInput[]
    NOT?: ProductRecordWhereInput | ProductRecordWhereInput[]
    id?: UuidFilter<"ProductRecord"> | string
    timestamp?: DateTimeFilter<"ProductRecord"> | Date | string
    createdById?: UuidFilter<"ProductRecord"> | string
    updatedById?: UuidFilter<"ProductRecord"> | string
    recordType?: EnumProductRecordTypeFilter<"ProductRecord"> | $Enums.ProductRecordType
    recordId?: UuidFilter<"ProductRecord"> | string
    productId?: UuidFilter<"ProductRecord"> | string
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    updatedBy?: XOR<UserRelationFilter, UserWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ProductRecordOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    recordType?: SortOrder
    recordId?: SortOrder
    productId?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    updatedBy?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type ProductRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    recordId?: string
    productId_recordId?: ProductRecordProductIdRecordIdCompoundUniqueInput
    AND?: ProductRecordWhereInput | ProductRecordWhereInput[]
    OR?: ProductRecordWhereInput[]
    NOT?: ProductRecordWhereInput | ProductRecordWhereInput[]
    timestamp?: DateTimeFilter<"ProductRecord"> | Date | string
    createdById?: UuidFilter<"ProductRecord"> | string
    updatedById?: UuidFilter<"ProductRecord"> | string
    recordType?: EnumProductRecordTypeFilter<"ProductRecord"> | $Enums.ProductRecordType
    productId?: UuidFilter<"ProductRecord"> | string
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    updatedBy?: XOR<UserRelationFilter, UserWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id" | "recordId" | "productId_recordId">

  export type ProductRecordOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    recordType?: SortOrder
    recordId?: SortOrder
    productId?: SortOrder
    _count?: ProductRecordCountOrderByAggregateInput
    _max?: ProductRecordMaxOrderByAggregateInput
    _min?: ProductRecordMinOrderByAggregateInput
  }

  export type ProductRecordScalarWhereWithAggregatesInput = {
    AND?: ProductRecordScalarWhereWithAggregatesInput | ProductRecordScalarWhereWithAggregatesInput[]
    OR?: ProductRecordScalarWhereWithAggregatesInput[]
    NOT?: ProductRecordScalarWhereWithAggregatesInput | ProductRecordScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProductRecord"> | string
    timestamp?: DateTimeWithAggregatesFilter<"ProductRecord"> | Date | string
    createdById?: UuidWithAggregatesFilter<"ProductRecord"> | string
    updatedById?: UuidWithAggregatesFilter<"ProductRecord"> | string
    recordType?: EnumProductRecordTypeWithAggregatesFilter<"ProductRecord"> | $Enums.ProductRecordType
    recordId?: UuidWithAggregatesFilter<"ProductRecord"> | string
    productId?: UuidWithAggregatesFilter<"ProductRecord"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: UuidFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    createdById?: UuidFilter<"Product"> | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    updatedById?: UuidFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    code?: StringFilter<"Product"> | string
    imageSrc?: StringFilter<"Product"> | string
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    updatedBy?: XOR<UserRelationFilter, UserWhereInput>
    records?: ProductRecordListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    updatedAt?: SortOrder
    updatedById?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    code?: SortOrder
    imageSrc?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    updatedBy?: UserOrderByWithRelationInput
    records?: ProductRecordOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    code?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    createdAt?: DateTimeFilter<"Product"> | Date | string
    createdById?: UuidFilter<"Product"> | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    updatedById?: UuidFilter<"Product"> | string
    imageSrc?: StringFilter<"Product"> | string
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    updatedBy?: XOR<UserRelationFilter, UserWhereInput>
    records?: ProductRecordListRelationFilter
  }, "id" | "name" | "slug" | "code">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    updatedAt?: SortOrder
    updatedById?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    code?: SortOrder
    imageSrc?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Product"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    createdById?: UuidWithAggregatesFilter<"Product"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedById?: UuidWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    slug?: StringWithAggregatesFilter<"Product"> | string
    code?: StringWithAggregatesFilter<"Product"> | string
    imageSrc?: StringWithAggregatesFilter<"Product"> | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    profileImageUrl?: string | null
    emailAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdProducts?: ProductCreateNestedManyWithoutCreatedByInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByInput
    createdProductRecords?: ProductRecordCreateNestedManyWithoutCreatedByInput
    updatedProductRecords?: ProductRecordCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    profileImageUrl?: string | null
    emailAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByInput
    createdProductRecords?: ProductRecordUncheckedCreateNestedManyWithoutCreatedByInput
    updatedProductRecords?: ProductRecordUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdProducts?: ProductUpdateManyWithoutCreatedByNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByNestedInput
    createdProductRecords?: ProductRecordUpdateManyWithoutCreatedByNestedInput
    updatedProductRecords?: ProductRecordUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdProductRecords?: ProductRecordUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedProductRecords?: ProductRecordUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    profileImageUrl?: string | null
    emailAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductErrorRecordCreateInput = {
    id?: string
    errorMessage: string
  }

  export type ProductErrorRecordUncheckedCreateInput = {
    id?: string
    errorMessage: string
  }

  export type ProductErrorRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorMessage?: StringFieldUpdateOperationsInput | string
  }

  export type ProductErrorRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorMessage?: StringFieldUpdateOperationsInput | string
  }

  export type ProductErrorRecordCreateManyInput = {
    id?: string
    errorMessage: string
  }

  export type ProductErrorRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorMessage?: StringFieldUpdateOperationsInput | string
  }

  export type ProductErrorRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorMessage?: StringFieldUpdateOperationsInput | string
  }

  export type ProductRecordedRecordCreateInput = {
    id?: string
    updatedAt?: Date | string
    price: number
    rawPrice: string
    status: $Enums.ProductRecordStatus
    wasManuallyCreated?: boolean
    manuallyChangedFields?: ProductRecordedRecordCreatemanuallyChangedFieldsInput | $Enums.ProductRecordDataFields[]
  }

  export type ProductRecordedRecordUncheckedCreateInput = {
    id?: string
    updatedAt?: Date | string
    price: number
    rawPrice: string
    status: $Enums.ProductRecordStatus
    wasManuallyCreated?: boolean
    manuallyChangedFields?: ProductRecordedRecordCreatemanuallyChangedFieldsInput | $Enums.ProductRecordDataFields[]
  }

  export type ProductRecordedRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    rawPrice?: StringFieldUpdateOperationsInput | string
    status?: EnumProductRecordStatusFieldUpdateOperationsInput | $Enums.ProductRecordStatus
    wasManuallyCreated?: BoolFieldUpdateOperationsInput | boolean
    manuallyChangedFields?: ProductRecordedRecordUpdatemanuallyChangedFieldsInput | $Enums.ProductRecordDataFields[]
  }

  export type ProductRecordedRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    rawPrice?: StringFieldUpdateOperationsInput | string
    status?: EnumProductRecordStatusFieldUpdateOperationsInput | $Enums.ProductRecordStatus
    wasManuallyCreated?: BoolFieldUpdateOperationsInput | boolean
    manuallyChangedFields?: ProductRecordedRecordUpdatemanuallyChangedFieldsInput | $Enums.ProductRecordDataFields[]
  }

  export type ProductRecordedRecordCreateManyInput = {
    id?: string
    updatedAt?: Date | string
    price: number
    rawPrice: string
    status: $Enums.ProductRecordStatus
    wasManuallyCreated?: boolean
    manuallyChangedFields?: ProductRecordedRecordCreatemanuallyChangedFieldsInput | $Enums.ProductRecordDataFields[]
  }

  export type ProductRecordedRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    rawPrice?: StringFieldUpdateOperationsInput | string
    status?: EnumProductRecordStatusFieldUpdateOperationsInput | $Enums.ProductRecordStatus
    wasManuallyCreated?: BoolFieldUpdateOperationsInput | boolean
    manuallyChangedFields?: ProductRecordedRecordUpdatemanuallyChangedFieldsInput | $Enums.ProductRecordDataFields[]
  }

  export type ProductRecordedRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    rawPrice?: StringFieldUpdateOperationsInput | string
    status?: EnumProductRecordStatusFieldUpdateOperationsInput | $Enums.ProductRecordStatus
    wasManuallyCreated?: BoolFieldUpdateOperationsInput | boolean
    manuallyChangedFields?: ProductRecordedRecordUpdatemanuallyChangedFieldsInput | $Enums.ProductRecordDataFields[]
  }

  export type ProductRecordCreateInput = {
    id?: string
    timestamp?: Date | string
    recordType: $Enums.ProductRecordType
    recordId: string
    createdBy: UserCreateNestedOneWithoutCreatedProductRecordsInput
    updatedBy: UserCreateNestedOneWithoutUpdatedProductRecordsInput
    product: ProductCreateNestedOneWithoutRecordsInput
  }

  export type ProductRecordUncheckedCreateInput = {
    id?: string
    timestamp?: Date | string
    createdById: string
    updatedById: string
    recordType: $Enums.ProductRecordType
    recordId: string
    productId: string
  }

  export type ProductRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    recordType?: EnumProductRecordTypeFieldUpdateOperationsInput | $Enums.ProductRecordType
    recordId?: StringFieldUpdateOperationsInput | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedProductRecordsNestedInput
    updatedBy?: UserUpdateOneRequiredWithoutUpdatedProductRecordsNestedInput
    product?: ProductUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type ProductRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    recordType?: EnumProductRecordTypeFieldUpdateOperationsInput | $Enums.ProductRecordType
    recordId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductRecordCreateManyInput = {
    id?: string
    timestamp?: Date | string
    createdById: string
    updatedById: string
    recordType: $Enums.ProductRecordType
    recordId: string
    productId: string
  }

  export type ProductRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    recordType?: EnumProductRecordTypeFieldUpdateOperationsInput | $Enums.ProductRecordType
    recordId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    recordType?: EnumProductRecordTypeFieldUpdateOperationsInput | $Enums.ProductRecordType
    recordId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    slug: string
    code: string
    imageSrc: string
    createdBy: UserCreateNestedOneWithoutCreatedProductsInput
    updatedBy: UserCreateNestedOneWithoutUpdatedProductsInput
    records?: ProductRecordCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    updatedById: string
    name: string
    slug: string
    code: string
    imageSrc: string
    records?: ProductRecordUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedProductsNestedInput
    updatedBy?: UserUpdateOneRequiredWithoutUpdatedProductsNestedInput
    records?: ProductRecordUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    records?: ProductRecordUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    updatedById: string
    name: string
    slug: string
    code: string
    imageSrc: string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductRecordListRelationFilter = {
    every?: ProductRecordWhereInput
    some?: ProductRecordWhereInput
    none?: ProductRecordWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImageUrl?: SortOrder
    emailAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImageUrl?: SortOrder
    emailAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImageUrl?: SortOrder
    emailAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProductErrorRecordCountOrderByAggregateInput = {
    id?: SortOrder
    errorMessage?: SortOrder
  }

  export type ProductErrorRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    errorMessage?: SortOrder
  }

  export type ProductErrorRecordMinOrderByAggregateInput = {
    id?: SortOrder
    errorMessage?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumProductRecordStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductRecordStatus | EnumProductRecordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductRecordStatus[] | ListEnumProductRecordStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductRecordStatus[] | ListEnumProductRecordStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductRecordStatusFilter<$PrismaModel> | $Enums.ProductRecordStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumProductRecordDataFieldsNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductRecordDataFields[] | ListEnumProductRecordDataFieldsFieldRefInput<$PrismaModel> | null
    has?: $Enums.ProductRecordDataFields | EnumProductRecordDataFieldsFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.ProductRecordDataFields[] | ListEnumProductRecordDataFieldsFieldRefInput<$PrismaModel>
    hasSome?: $Enums.ProductRecordDataFields[] | ListEnumProductRecordDataFieldsFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ProductRecordedRecordCountOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    price?: SortOrder
    rawPrice?: SortOrder
    status?: SortOrder
    wasManuallyCreated?: SortOrder
    manuallyChangedFields?: SortOrder
  }

  export type ProductRecordedRecordAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProductRecordedRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    price?: SortOrder
    rawPrice?: SortOrder
    status?: SortOrder
    wasManuallyCreated?: SortOrder
  }

  export type ProductRecordedRecordMinOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    price?: SortOrder
    rawPrice?: SortOrder
    status?: SortOrder
    wasManuallyCreated?: SortOrder
  }

  export type ProductRecordedRecordSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumProductRecordStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductRecordStatus | EnumProductRecordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductRecordStatus[] | ListEnumProductRecordStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductRecordStatus[] | ListEnumProductRecordStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductRecordStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductRecordStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductRecordStatusFilter<$PrismaModel>
    _max?: NestedEnumProductRecordStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumProductRecordTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductRecordType | EnumProductRecordTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductRecordType[] | ListEnumProductRecordTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductRecordType[] | ListEnumProductRecordTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProductRecordTypeFilter<$PrismaModel> | $Enums.ProductRecordType
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductRecordProductIdRecordIdCompoundUniqueInput = {
    productId: string
    recordId: string
  }

  export type ProductRecordCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    recordType?: SortOrder
    recordId?: SortOrder
    productId?: SortOrder
  }

  export type ProductRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    recordType?: SortOrder
    recordId?: SortOrder
    productId?: SortOrder
  }

  export type ProductRecordMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    recordType?: SortOrder
    recordId?: SortOrder
    productId?: SortOrder
  }

  export type EnumProductRecordTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductRecordType | EnumProductRecordTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductRecordType[] | ListEnumProductRecordTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductRecordType[] | ListEnumProductRecordTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProductRecordTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProductRecordType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductRecordTypeFilter<$PrismaModel>
    _max?: NestedEnumProductRecordTypeFilter<$PrismaModel>
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    updatedAt?: SortOrder
    updatedById?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    code?: SortOrder
    imageSrc?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    updatedAt?: SortOrder
    updatedById?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    code?: SortOrder
    imageSrc?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    updatedAt?: SortOrder
    updatedById?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    code?: SortOrder
    imageSrc?: SortOrder
  }

  export type ProductCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ProductCreateWithoutCreatedByInput, ProductUncheckedCreateWithoutCreatedByInput> | ProductCreateWithoutCreatedByInput[] | ProductUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCreatedByInput | ProductCreateOrConnectWithoutCreatedByInput[]
    createMany?: ProductCreateManyCreatedByInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<ProductCreateWithoutUpdatedByInput, ProductUncheckedCreateWithoutUpdatedByInput> | ProductCreateWithoutUpdatedByInput[] | ProductUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUpdatedByInput | ProductCreateOrConnectWithoutUpdatedByInput[]
    createMany?: ProductCreateManyUpdatedByInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductRecordCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ProductRecordCreateWithoutCreatedByInput, ProductRecordUncheckedCreateWithoutCreatedByInput> | ProductRecordCreateWithoutCreatedByInput[] | ProductRecordUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProductRecordCreateOrConnectWithoutCreatedByInput | ProductRecordCreateOrConnectWithoutCreatedByInput[]
    createMany?: ProductRecordCreateManyCreatedByInputEnvelope
    connect?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
  }

  export type ProductRecordCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<ProductRecordCreateWithoutUpdatedByInput, ProductRecordUncheckedCreateWithoutUpdatedByInput> | ProductRecordCreateWithoutUpdatedByInput[] | ProductRecordUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: ProductRecordCreateOrConnectWithoutUpdatedByInput | ProductRecordCreateOrConnectWithoutUpdatedByInput[]
    createMany?: ProductRecordCreateManyUpdatedByInputEnvelope
    connect?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ProductCreateWithoutCreatedByInput, ProductUncheckedCreateWithoutCreatedByInput> | ProductCreateWithoutCreatedByInput[] | ProductUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCreatedByInput | ProductCreateOrConnectWithoutCreatedByInput[]
    createMany?: ProductCreateManyCreatedByInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<ProductCreateWithoutUpdatedByInput, ProductUncheckedCreateWithoutUpdatedByInput> | ProductCreateWithoutUpdatedByInput[] | ProductUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUpdatedByInput | ProductCreateOrConnectWithoutUpdatedByInput[]
    createMany?: ProductCreateManyUpdatedByInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductRecordUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ProductRecordCreateWithoutCreatedByInput, ProductRecordUncheckedCreateWithoutCreatedByInput> | ProductRecordCreateWithoutCreatedByInput[] | ProductRecordUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProductRecordCreateOrConnectWithoutCreatedByInput | ProductRecordCreateOrConnectWithoutCreatedByInput[]
    createMany?: ProductRecordCreateManyCreatedByInputEnvelope
    connect?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
  }

  export type ProductRecordUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<ProductRecordCreateWithoutUpdatedByInput, ProductRecordUncheckedCreateWithoutUpdatedByInput> | ProductRecordCreateWithoutUpdatedByInput[] | ProductRecordUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: ProductRecordCreateOrConnectWithoutUpdatedByInput | ProductRecordCreateOrConnectWithoutUpdatedByInput[]
    createMany?: ProductRecordCreateManyUpdatedByInputEnvelope
    connect?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ProductCreateWithoutCreatedByInput, ProductUncheckedCreateWithoutCreatedByInput> | ProductCreateWithoutCreatedByInput[] | ProductUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCreatedByInput | ProductCreateOrConnectWithoutCreatedByInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCreatedByInput | ProductUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ProductCreateManyCreatedByInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCreatedByInput | ProductUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCreatedByInput | ProductUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<ProductCreateWithoutUpdatedByInput, ProductUncheckedCreateWithoutUpdatedByInput> | ProductCreateWithoutUpdatedByInput[] | ProductUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUpdatedByInput | ProductCreateOrConnectWithoutUpdatedByInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUpdatedByInput | ProductUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: ProductCreateManyUpdatedByInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUpdatedByInput | ProductUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUpdatedByInput | ProductUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductRecordUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ProductRecordCreateWithoutCreatedByInput, ProductRecordUncheckedCreateWithoutCreatedByInput> | ProductRecordCreateWithoutCreatedByInput[] | ProductRecordUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProductRecordCreateOrConnectWithoutCreatedByInput | ProductRecordCreateOrConnectWithoutCreatedByInput[]
    upsert?: ProductRecordUpsertWithWhereUniqueWithoutCreatedByInput | ProductRecordUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ProductRecordCreateManyCreatedByInputEnvelope
    set?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
    disconnect?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
    delete?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
    connect?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
    update?: ProductRecordUpdateWithWhereUniqueWithoutCreatedByInput | ProductRecordUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ProductRecordUpdateManyWithWhereWithoutCreatedByInput | ProductRecordUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ProductRecordScalarWhereInput | ProductRecordScalarWhereInput[]
  }

  export type ProductRecordUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<ProductRecordCreateWithoutUpdatedByInput, ProductRecordUncheckedCreateWithoutUpdatedByInput> | ProductRecordCreateWithoutUpdatedByInput[] | ProductRecordUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: ProductRecordCreateOrConnectWithoutUpdatedByInput | ProductRecordCreateOrConnectWithoutUpdatedByInput[]
    upsert?: ProductRecordUpsertWithWhereUniqueWithoutUpdatedByInput | ProductRecordUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: ProductRecordCreateManyUpdatedByInputEnvelope
    set?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
    disconnect?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
    delete?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
    connect?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
    update?: ProductRecordUpdateWithWhereUniqueWithoutUpdatedByInput | ProductRecordUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: ProductRecordUpdateManyWithWhereWithoutUpdatedByInput | ProductRecordUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: ProductRecordScalarWhereInput | ProductRecordScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ProductCreateWithoutCreatedByInput, ProductUncheckedCreateWithoutCreatedByInput> | ProductCreateWithoutCreatedByInput[] | ProductUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCreatedByInput | ProductCreateOrConnectWithoutCreatedByInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCreatedByInput | ProductUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ProductCreateManyCreatedByInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCreatedByInput | ProductUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCreatedByInput | ProductUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<ProductCreateWithoutUpdatedByInput, ProductUncheckedCreateWithoutUpdatedByInput> | ProductCreateWithoutUpdatedByInput[] | ProductUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUpdatedByInput | ProductCreateOrConnectWithoutUpdatedByInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUpdatedByInput | ProductUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: ProductCreateManyUpdatedByInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUpdatedByInput | ProductUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUpdatedByInput | ProductUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductRecordUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ProductRecordCreateWithoutCreatedByInput, ProductRecordUncheckedCreateWithoutCreatedByInput> | ProductRecordCreateWithoutCreatedByInput[] | ProductRecordUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProductRecordCreateOrConnectWithoutCreatedByInput | ProductRecordCreateOrConnectWithoutCreatedByInput[]
    upsert?: ProductRecordUpsertWithWhereUniqueWithoutCreatedByInput | ProductRecordUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ProductRecordCreateManyCreatedByInputEnvelope
    set?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
    disconnect?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
    delete?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
    connect?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
    update?: ProductRecordUpdateWithWhereUniqueWithoutCreatedByInput | ProductRecordUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ProductRecordUpdateManyWithWhereWithoutCreatedByInput | ProductRecordUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ProductRecordScalarWhereInput | ProductRecordScalarWhereInput[]
  }

  export type ProductRecordUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<ProductRecordCreateWithoutUpdatedByInput, ProductRecordUncheckedCreateWithoutUpdatedByInput> | ProductRecordCreateWithoutUpdatedByInput[] | ProductRecordUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: ProductRecordCreateOrConnectWithoutUpdatedByInput | ProductRecordCreateOrConnectWithoutUpdatedByInput[]
    upsert?: ProductRecordUpsertWithWhereUniqueWithoutUpdatedByInput | ProductRecordUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: ProductRecordCreateManyUpdatedByInputEnvelope
    set?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
    disconnect?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
    delete?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
    connect?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
    update?: ProductRecordUpdateWithWhereUniqueWithoutUpdatedByInput | ProductRecordUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: ProductRecordUpdateManyWithWhereWithoutUpdatedByInput | ProductRecordUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: ProductRecordScalarWhereInput | ProductRecordScalarWhereInput[]
  }

  export type ProductRecordedRecordCreatemanuallyChangedFieldsInput = {
    set: $Enums.ProductRecordDataFields[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumProductRecordStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProductRecordStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductRecordedRecordUpdatemanuallyChangedFieldsInput = {
    set?: $Enums.ProductRecordDataFields[]
    push?: $Enums.ProductRecordDataFields | $Enums.ProductRecordDataFields[]
  }

  export type UserCreateNestedOneWithoutCreatedProductRecordsInput = {
    create?: XOR<UserCreateWithoutCreatedProductRecordsInput, UserUncheckedCreateWithoutCreatedProductRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedProductRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedProductRecordsInput = {
    create?: XOR<UserCreateWithoutUpdatedProductRecordsInput, UserUncheckedCreateWithoutUpdatedProductRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedProductRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutRecordsInput = {
    create?: XOR<ProductCreateWithoutRecordsInput, ProductUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRecordsInput
    connect?: ProductWhereUniqueInput
  }

  export type EnumProductRecordTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProductRecordType
  }

  export type UserUpdateOneRequiredWithoutCreatedProductRecordsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedProductRecordsInput, UserUncheckedCreateWithoutCreatedProductRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedProductRecordsInput
    upsert?: UserUpsertWithoutCreatedProductRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedProductRecordsInput, UserUpdateWithoutCreatedProductRecordsInput>, UserUncheckedUpdateWithoutCreatedProductRecordsInput>
  }

  export type UserUpdateOneRequiredWithoutUpdatedProductRecordsNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedProductRecordsInput, UserUncheckedCreateWithoutUpdatedProductRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedProductRecordsInput
    upsert?: UserUpsertWithoutUpdatedProductRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatedProductRecordsInput, UserUpdateWithoutUpdatedProductRecordsInput>, UserUncheckedUpdateWithoutUpdatedProductRecordsInput>
  }

  export type ProductUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<ProductCreateWithoutRecordsInput, ProductUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRecordsInput
    upsert?: ProductUpsertWithoutRecordsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutRecordsInput, ProductUpdateWithoutRecordsInput>, ProductUncheckedUpdateWithoutRecordsInput>
  }

  export type UserCreateNestedOneWithoutCreatedProductsInput = {
    create?: XOR<UserCreateWithoutCreatedProductsInput, UserUncheckedCreateWithoutCreatedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedProductsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedProductsInput = {
    create?: XOR<UserCreateWithoutUpdatedProductsInput, UserUncheckedCreateWithoutUpdatedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedProductsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductRecordCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductRecordCreateWithoutProductInput, ProductRecordUncheckedCreateWithoutProductInput> | ProductRecordCreateWithoutProductInput[] | ProductRecordUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductRecordCreateOrConnectWithoutProductInput | ProductRecordCreateOrConnectWithoutProductInput[]
    createMany?: ProductRecordCreateManyProductInputEnvelope
    connect?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
  }

  export type ProductRecordUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductRecordCreateWithoutProductInput, ProductRecordUncheckedCreateWithoutProductInput> | ProductRecordCreateWithoutProductInput[] | ProductRecordUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductRecordCreateOrConnectWithoutProductInput | ProductRecordCreateOrConnectWithoutProductInput[]
    createMany?: ProductRecordCreateManyProductInputEnvelope
    connect?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedProductsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedProductsInput, UserUncheckedCreateWithoutCreatedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedProductsInput
    upsert?: UserUpsertWithoutCreatedProductsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedProductsInput, UserUpdateWithoutCreatedProductsInput>, UserUncheckedUpdateWithoutCreatedProductsInput>
  }

  export type UserUpdateOneRequiredWithoutUpdatedProductsNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedProductsInput, UserUncheckedCreateWithoutUpdatedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedProductsInput
    upsert?: UserUpsertWithoutUpdatedProductsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatedProductsInput, UserUpdateWithoutUpdatedProductsInput>, UserUncheckedUpdateWithoutUpdatedProductsInput>
  }

  export type ProductRecordUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductRecordCreateWithoutProductInput, ProductRecordUncheckedCreateWithoutProductInput> | ProductRecordCreateWithoutProductInput[] | ProductRecordUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductRecordCreateOrConnectWithoutProductInput | ProductRecordCreateOrConnectWithoutProductInput[]
    upsert?: ProductRecordUpsertWithWhereUniqueWithoutProductInput | ProductRecordUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductRecordCreateManyProductInputEnvelope
    set?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
    disconnect?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
    delete?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
    connect?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
    update?: ProductRecordUpdateWithWhereUniqueWithoutProductInput | ProductRecordUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductRecordUpdateManyWithWhereWithoutProductInput | ProductRecordUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductRecordScalarWhereInput | ProductRecordScalarWhereInput[]
  }

  export type ProductRecordUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductRecordCreateWithoutProductInput, ProductRecordUncheckedCreateWithoutProductInput> | ProductRecordCreateWithoutProductInput[] | ProductRecordUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductRecordCreateOrConnectWithoutProductInput | ProductRecordCreateOrConnectWithoutProductInput[]
    upsert?: ProductRecordUpsertWithWhereUniqueWithoutProductInput | ProductRecordUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductRecordCreateManyProductInputEnvelope
    set?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
    disconnect?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
    delete?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
    connect?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
    update?: ProductRecordUpdateWithWhereUniqueWithoutProductInput | ProductRecordUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductRecordUpdateManyWithWhereWithoutProductInput | ProductRecordUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductRecordScalarWhereInput | ProductRecordScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumProductRecordStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductRecordStatus | EnumProductRecordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductRecordStatus[] | ListEnumProductRecordStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductRecordStatus[] | ListEnumProductRecordStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductRecordStatusFilter<$PrismaModel> | $Enums.ProductRecordStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumProductRecordStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductRecordStatus | EnumProductRecordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductRecordStatus[] | ListEnumProductRecordStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductRecordStatus[] | ListEnumProductRecordStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductRecordStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductRecordStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductRecordStatusFilter<$PrismaModel>
    _max?: NestedEnumProductRecordStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumProductRecordTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductRecordType | EnumProductRecordTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductRecordType[] | ListEnumProductRecordTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductRecordType[] | ListEnumProductRecordTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProductRecordTypeFilter<$PrismaModel> | $Enums.ProductRecordType
  }

  export type NestedEnumProductRecordTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductRecordType | EnumProductRecordTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductRecordType[] | ListEnumProductRecordTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductRecordType[] | ListEnumProductRecordTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProductRecordTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProductRecordType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductRecordTypeFilter<$PrismaModel>
    _max?: NestedEnumProductRecordTypeFilter<$PrismaModel>
  }

  export type ProductCreateWithoutCreatedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    slug: string
    code: string
    imageSrc: string
    updatedBy: UserCreateNestedOneWithoutUpdatedProductsInput
    records?: ProductRecordCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCreatedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedById: string
    name: string
    slug: string
    code: string
    imageSrc: string
    records?: ProductRecordUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCreatedByInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCreatedByInput, ProductUncheckedCreateWithoutCreatedByInput>
  }

  export type ProductCreateManyCreatedByInputEnvelope = {
    data: ProductCreateManyCreatedByInput | ProductCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutUpdatedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    slug: string
    code: string
    imageSrc: string
    createdBy: UserCreateNestedOneWithoutCreatedProductsInput
    records?: ProductRecordCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUpdatedByInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    name: string
    slug: string
    code: string
    imageSrc: string
    records?: ProductRecordUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUpdatedByInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUpdatedByInput, ProductUncheckedCreateWithoutUpdatedByInput>
  }

  export type ProductCreateManyUpdatedByInputEnvelope = {
    data: ProductCreateManyUpdatedByInput | ProductCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type ProductRecordCreateWithoutCreatedByInput = {
    id?: string
    timestamp?: Date | string
    recordType: $Enums.ProductRecordType
    recordId: string
    updatedBy: UserCreateNestedOneWithoutUpdatedProductRecordsInput
    product: ProductCreateNestedOneWithoutRecordsInput
  }

  export type ProductRecordUncheckedCreateWithoutCreatedByInput = {
    id?: string
    timestamp?: Date | string
    updatedById: string
    recordType: $Enums.ProductRecordType
    recordId: string
    productId: string
  }

  export type ProductRecordCreateOrConnectWithoutCreatedByInput = {
    where: ProductRecordWhereUniqueInput
    create: XOR<ProductRecordCreateWithoutCreatedByInput, ProductRecordUncheckedCreateWithoutCreatedByInput>
  }

  export type ProductRecordCreateManyCreatedByInputEnvelope = {
    data: ProductRecordCreateManyCreatedByInput | ProductRecordCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ProductRecordCreateWithoutUpdatedByInput = {
    id?: string
    timestamp?: Date | string
    recordType: $Enums.ProductRecordType
    recordId: string
    createdBy: UserCreateNestedOneWithoutCreatedProductRecordsInput
    product: ProductCreateNestedOneWithoutRecordsInput
  }

  export type ProductRecordUncheckedCreateWithoutUpdatedByInput = {
    id?: string
    timestamp?: Date | string
    createdById: string
    recordType: $Enums.ProductRecordType
    recordId: string
    productId: string
  }

  export type ProductRecordCreateOrConnectWithoutUpdatedByInput = {
    where: ProductRecordWhereUniqueInput
    create: XOR<ProductRecordCreateWithoutUpdatedByInput, ProductRecordUncheckedCreateWithoutUpdatedByInput>
  }

  export type ProductRecordCreateManyUpdatedByInputEnvelope = {
    data: ProductRecordCreateManyUpdatedByInput | ProductRecordCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCreatedByInput, ProductUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ProductCreateWithoutCreatedByInput, ProductUncheckedCreateWithoutCreatedByInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCreatedByInput, ProductUncheckedUpdateWithoutCreatedByInput>
  }

  export type ProductUpdateManyWithWhereWithoutCreatedByInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: UuidFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    createdById?: UuidFilter<"Product"> | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    updatedById?: UuidFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    code?: StringFilter<"Product"> | string
    imageSrc?: StringFilter<"Product"> | string
  }

  export type ProductUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutUpdatedByInput, ProductUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<ProductCreateWithoutUpdatedByInput, ProductUncheckedCreateWithoutUpdatedByInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutUpdatedByInput, ProductUncheckedUpdateWithoutUpdatedByInput>
  }

  export type ProductUpdateManyWithWhereWithoutUpdatedByInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type ProductRecordUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ProductRecordWhereUniqueInput
    update: XOR<ProductRecordUpdateWithoutCreatedByInput, ProductRecordUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ProductRecordCreateWithoutCreatedByInput, ProductRecordUncheckedCreateWithoutCreatedByInput>
  }

  export type ProductRecordUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ProductRecordWhereUniqueInput
    data: XOR<ProductRecordUpdateWithoutCreatedByInput, ProductRecordUncheckedUpdateWithoutCreatedByInput>
  }

  export type ProductRecordUpdateManyWithWhereWithoutCreatedByInput = {
    where: ProductRecordScalarWhereInput
    data: XOR<ProductRecordUpdateManyMutationInput, ProductRecordUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ProductRecordScalarWhereInput = {
    AND?: ProductRecordScalarWhereInput | ProductRecordScalarWhereInput[]
    OR?: ProductRecordScalarWhereInput[]
    NOT?: ProductRecordScalarWhereInput | ProductRecordScalarWhereInput[]
    id?: UuidFilter<"ProductRecord"> | string
    timestamp?: DateTimeFilter<"ProductRecord"> | Date | string
    createdById?: UuidFilter<"ProductRecord"> | string
    updatedById?: UuidFilter<"ProductRecord"> | string
    recordType?: EnumProductRecordTypeFilter<"ProductRecord"> | $Enums.ProductRecordType
    recordId?: UuidFilter<"ProductRecord"> | string
    productId?: UuidFilter<"ProductRecord"> | string
  }

  export type ProductRecordUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: ProductRecordWhereUniqueInput
    update: XOR<ProductRecordUpdateWithoutUpdatedByInput, ProductRecordUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<ProductRecordCreateWithoutUpdatedByInput, ProductRecordUncheckedCreateWithoutUpdatedByInput>
  }

  export type ProductRecordUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: ProductRecordWhereUniqueInput
    data: XOR<ProductRecordUpdateWithoutUpdatedByInput, ProductRecordUncheckedUpdateWithoutUpdatedByInput>
  }

  export type ProductRecordUpdateManyWithWhereWithoutUpdatedByInput = {
    where: ProductRecordScalarWhereInput
    data: XOR<ProductRecordUpdateManyMutationInput, ProductRecordUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type UserCreateWithoutCreatedProductRecordsInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    profileImageUrl?: string | null
    emailAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdProducts?: ProductCreateNestedManyWithoutCreatedByInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByInput
    updatedProductRecords?: ProductRecordCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedProductRecordsInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    profileImageUrl?: string | null
    emailAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByInput
    updatedProductRecords?: ProductRecordUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedProductRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedProductRecordsInput, UserUncheckedCreateWithoutCreatedProductRecordsInput>
  }

  export type UserCreateWithoutUpdatedProductRecordsInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    profileImageUrl?: string | null
    emailAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdProducts?: ProductCreateNestedManyWithoutCreatedByInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByInput
    createdProductRecords?: ProductRecordCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutUpdatedProductRecordsInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    profileImageUrl?: string | null
    emailAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByInput
    createdProductRecords?: ProductRecordUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutUpdatedProductRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedProductRecordsInput, UserUncheckedCreateWithoutUpdatedProductRecordsInput>
  }

  export type ProductCreateWithoutRecordsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    slug: string
    code: string
    imageSrc: string
    createdBy: UserCreateNestedOneWithoutCreatedProductsInput
    updatedBy: UserCreateNestedOneWithoutUpdatedProductsInput
  }

  export type ProductUncheckedCreateWithoutRecordsInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    updatedById: string
    name: string
    slug: string
    code: string
    imageSrc: string
  }

  export type ProductCreateOrConnectWithoutRecordsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutRecordsInput, ProductUncheckedCreateWithoutRecordsInput>
  }

  export type UserUpsertWithoutCreatedProductRecordsInput = {
    update: XOR<UserUpdateWithoutCreatedProductRecordsInput, UserUncheckedUpdateWithoutCreatedProductRecordsInput>
    create: XOR<UserCreateWithoutCreatedProductRecordsInput, UserUncheckedCreateWithoutCreatedProductRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedProductRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedProductRecordsInput, UserUncheckedUpdateWithoutCreatedProductRecordsInput>
  }

  export type UserUpdateWithoutCreatedProductRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdProducts?: ProductUpdateManyWithoutCreatedByNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByNestedInput
    updatedProductRecords?: ProductRecordUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedProductRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByNestedInput
    updatedProductRecords?: ProductRecordUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUpsertWithoutUpdatedProductRecordsInput = {
    update: XOR<UserUpdateWithoutUpdatedProductRecordsInput, UserUncheckedUpdateWithoutUpdatedProductRecordsInput>
    create: XOR<UserCreateWithoutUpdatedProductRecordsInput, UserUncheckedCreateWithoutUpdatedProductRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatedProductRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatedProductRecordsInput, UserUncheckedUpdateWithoutUpdatedProductRecordsInput>
  }

  export type UserUpdateWithoutUpdatedProductRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdProducts?: ProductUpdateManyWithoutCreatedByNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByNestedInput
    createdProductRecords?: ProductRecordUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedProductRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdProductRecords?: ProductRecordUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ProductUpsertWithoutRecordsInput = {
    update: XOR<ProductUpdateWithoutRecordsInput, ProductUncheckedUpdateWithoutRecordsInput>
    create: XOR<ProductCreateWithoutRecordsInput, ProductUncheckedCreateWithoutRecordsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutRecordsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutRecordsInput, ProductUncheckedUpdateWithoutRecordsInput>
  }

  export type ProductUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedProductsNestedInput
    updatedBy?: UserUpdateOneRequiredWithoutUpdatedProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutCreatedProductsInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    profileImageUrl?: string | null
    emailAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByInput
    createdProductRecords?: ProductRecordCreateNestedManyWithoutCreatedByInput
    updatedProductRecords?: ProductRecordCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedProductsInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    profileImageUrl?: string | null
    emailAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByInput
    createdProductRecords?: ProductRecordUncheckedCreateNestedManyWithoutCreatedByInput
    updatedProductRecords?: ProductRecordUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedProductsInput, UserUncheckedCreateWithoutCreatedProductsInput>
  }

  export type UserCreateWithoutUpdatedProductsInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    profileImageUrl?: string | null
    emailAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdProducts?: ProductCreateNestedManyWithoutCreatedByInput
    createdProductRecords?: ProductRecordCreateNestedManyWithoutCreatedByInput
    updatedProductRecords?: ProductRecordCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutUpdatedProductsInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    profileImageUrl?: string | null
    emailAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByInput
    createdProductRecords?: ProductRecordUncheckedCreateNestedManyWithoutCreatedByInput
    updatedProductRecords?: ProductRecordUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutUpdatedProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedProductsInput, UserUncheckedCreateWithoutUpdatedProductsInput>
  }

  export type ProductRecordCreateWithoutProductInput = {
    id?: string
    timestamp?: Date | string
    recordType: $Enums.ProductRecordType
    recordId: string
    createdBy: UserCreateNestedOneWithoutCreatedProductRecordsInput
    updatedBy: UserCreateNestedOneWithoutUpdatedProductRecordsInput
  }

  export type ProductRecordUncheckedCreateWithoutProductInput = {
    id?: string
    timestamp?: Date | string
    createdById: string
    updatedById: string
    recordType: $Enums.ProductRecordType
    recordId: string
  }

  export type ProductRecordCreateOrConnectWithoutProductInput = {
    where: ProductRecordWhereUniqueInput
    create: XOR<ProductRecordCreateWithoutProductInput, ProductRecordUncheckedCreateWithoutProductInput>
  }

  export type ProductRecordCreateManyProductInputEnvelope = {
    data: ProductRecordCreateManyProductInput | ProductRecordCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedProductsInput = {
    update: XOR<UserUpdateWithoutCreatedProductsInput, UserUncheckedUpdateWithoutCreatedProductsInput>
    create: XOR<UserCreateWithoutCreatedProductsInput, UserUncheckedCreateWithoutCreatedProductsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedProductsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedProductsInput, UserUncheckedUpdateWithoutCreatedProductsInput>
  }

  export type UserUpdateWithoutCreatedProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedProducts?: ProductUpdateManyWithoutUpdatedByNestedInput
    createdProductRecords?: ProductRecordUpdateManyWithoutCreatedByNestedInput
    updatedProductRecords?: ProductRecordUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdProductRecords?: ProductRecordUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedProductRecords?: ProductRecordUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUpsertWithoutUpdatedProductsInput = {
    update: XOR<UserUpdateWithoutUpdatedProductsInput, UserUncheckedUpdateWithoutUpdatedProductsInput>
    create: XOR<UserCreateWithoutUpdatedProductsInput, UserUncheckedCreateWithoutUpdatedProductsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatedProductsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatedProductsInput, UserUncheckedUpdateWithoutUpdatedProductsInput>
  }

  export type UserUpdateWithoutUpdatedProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdProducts?: ProductUpdateManyWithoutCreatedByNestedInput
    createdProductRecords?: ProductRecordUpdateManyWithoutCreatedByNestedInput
    updatedProductRecords?: ProductRecordUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByNestedInput
    createdProductRecords?: ProductRecordUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedProductRecords?: ProductRecordUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type ProductRecordUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductRecordWhereUniqueInput
    update: XOR<ProductRecordUpdateWithoutProductInput, ProductRecordUncheckedUpdateWithoutProductInput>
    create: XOR<ProductRecordCreateWithoutProductInput, ProductRecordUncheckedCreateWithoutProductInput>
  }

  export type ProductRecordUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductRecordWhereUniqueInput
    data: XOR<ProductRecordUpdateWithoutProductInput, ProductRecordUncheckedUpdateWithoutProductInput>
  }

  export type ProductRecordUpdateManyWithWhereWithoutProductInput = {
    where: ProductRecordScalarWhereInput
    data: XOR<ProductRecordUpdateManyMutationInput, ProductRecordUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCreateManyCreatedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedById: string
    name: string
    slug: string
    code: string
    imageSrc: string
  }

  export type ProductCreateManyUpdatedByInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    name: string
    slug: string
    code: string
    imageSrc: string
  }

  export type ProductRecordCreateManyCreatedByInput = {
    id?: string
    timestamp?: Date | string
    updatedById: string
    recordType: $Enums.ProductRecordType
    recordId: string
    productId: string
  }

  export type ProductRecordCreateManyUpdatedByInput = {
    id?: string
    timestamp?: Date | string
    createdById: string
    recordType: $Enums.ProductRecordType
    recordId: string
    productId: string
  }

  export type ProductUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    updatedBy?: UserUpdateOneRequiredWithoutUpdatedProductsNestedInput
    records?: ProductRecordUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    records?: ProductRecordUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedProductsNestedInput
    records?: ProductRecordUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    records?: ProductRecordUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
  }

  export type ProductRecordUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    recordType?: EnumProductRecordTypeFieldUpdateOperationsInput | $Enums.ProductRecordType
    recordId?: StringFieldUpdateOperationsInput | string
    updatedBy?: UserUpdateOneRequiredWithoutUpdatedProductRecordsNestedInput
    product?: ProductUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type ProductRecordUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    recordType?: EnumProductRecordTypeFieldUpdateOperationsInput | $Enums.ProductRecordType
    recordId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductRecordUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    recordType?: EnumProductRecordTypeFieldUpdateOperationsInput | $Enums.ProductRecordType
    recordId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductRecordUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    recordType?: EnumProductRecordTypeFieldUpdateOperationsInput | $Enums.ProductRecordType
    recordId?: StringFieldUpdateOperationsInput | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedProductRecordsNestedInput
    product?: ProductUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type ProductRecordUncheckedUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    recordType?: EnumProductRecordTypeFieldUpdateOperationsInput | $Enums.ProductRecordType
    recordId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductRecordUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    recordType?: EnumProductRecordTypeFieldUpdateOperationsInput | $Enums.ProductRecordType
    recordId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductRecordCreateManyProductInput = {
    id?: string
    timestamp?: Date | string
    createdById: string
    updatedById: string
    recordType: $Enums.ProductRecordType
    recordId: string
  }

  export type ProductRecordUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    recordType?: EnumProductRecordTypeFieldUpdateOperationsInput | $Enums.ProductRecordType
    recordId?: StringFieldUpdateOperationsInput | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedProductRecordsNestedInput
    updatedBy?: UserUpdateOneRequiredWithoutUpdatedProductRecordsNestedInput
  }

  export type ProductRecordUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    recordType?: EnumProductRecordTypeFieldUpdateOperationsInput | $Enums.ProductRecordType
    recordId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductRecordUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    recordType?: EnumProductRecordTypeFieldUpdateOperationsInput | $Enums.ProductRecordType
    recordId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductErrorRecordDefaultArgs instead
     */
    export type ProductErrorRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductErrorRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductRecordedRecordDefaultArgs instead
     */
    export type ProductRecordedRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductRecordedRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductRecordDefaultArgs instead
     */
    export type ProductRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}