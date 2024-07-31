
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
 * Model MissingAttributeErrorData
 * 
 */
export type MissingAttributeErrorData = $Result.DefaultSelection<Prisma.$MissingAttributeErrorDataPayload>
/**
 * Model InvalidAttributeErrorData
 * 
 */
export type InvalidAttributeErrorData = $Result.DefaultSelection<Prisma.$InvalidAttributeErrorDataPayload>
/**
 * Model InvalidTextErrorData
 * 
 */
export type InvalidTextErrorData = $Result.DefaultSelection<Prisma.$InvalidTextErrorDataPayload>
/**
 * Model MissingTextErrorData
 * 
 */
export type MissingTextErrorData = $Result.DefaultSelection<Prisma.$MissingTextErrorDataPayload>
/**
 * Model NonUniqueTextErrorData
 * 
 */
export type NonUniqueTextErrorData = $Result.DefaultSelection<Prisma.$NonUniqueTextErrorDataPayload>
/**
 * Model MissingElementErrorData
 * 
 */
export type MissingElementErrorData = $Result.DefaultSelection<Prisma.$MissingElementErrorDataPayload>
/**
 * Model NonUniqueElementErrorData
 * 
 */
export type NonUniqueElementErrorData = $Result.DefaultSelection<Prisma.$NonUniqueElementErrorDataPayload>
/**
 * Model ScrapingErrorRecord
 * 
 */
export type ScrapingErrorRecord = $Result.DefaultSelection<Prisma.$ScrapingErrorRecordPayload>
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
  export const ElementAttribute: {
  HREF: 'HREF',
  SRC: 'SRC',
  VALUE: 'VALUE',
  DATA_GA_PRODUCT_NAME: 'DATA_GA_PRODUCT_NAME'
};

export type ElementAttribute = (typeof ElementAttribute)[keyof typeof ElementAttribute]


export const ScrapingErrorCode: {
  MISSING_ATTRIBUTE: 'MISSING_ATTRIBUTE',
  INVALID_ATTRIBUTE: 'INVALID_ATTRIBUTE',
  MISSING_TEXT: 'MISSING_TEXT',
  INVALID_TEXT: 'INVALID_TEXT',
  NONUNIQUE_TEXT: 'NONUNIQUE_TEXT',
  MISSING_ELEMENT: 'MISSING_ELEMENT',
  NONUNIQUE_ELEMENT: 'NONUNIQUE_ELEMENT',
  HTTP_NETWORK: 'HTTP_NETWORK',
  HTTP_CLIENT: 'HTTP_CLIENT',
  HTTP_SERIALIZATION: 'HTTP_SERIALIZATION'
};

export type ScrapingErrorCode = (typeof ScrapingErrorCode)[keyof typeof ScrapingErrorCode]


export const ProductRecordStatus: {
  OUT_OF_STOCK: 'OUT_OF_STOCK',
  IN_STOCK: 'IN_STOCK',
  AVAILABLE_FOR_BACKORDER: 'AVAILABLE_FOR_BACKORDER',
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

export type ElementAttribute = $Enums.ElementAttribute

export const ElementAttribute: typeof $Enums.ElementAttribute

export type ScrapingErrorCode = $Enums.ScrapingErrorCode

export const ScrapingErrorCode: typeof $Enums.ScrapingErrorCode

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
   * `prisma.missingAttributeErrorData`: Exposes CRUD operations for the **MissingAttributeErrorData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MissingAttributeErrorData
    * const missingAttributeErrorData = await prisma.missingAttributeErrorData.findMany()
    * ```
    */
  get missingAttributeErrorData(): Prisma.MissingAttributeErrorDataDelegate<ExtArgs>;

  /**
   * `prisma.invalidAttributeErrorData`: Exposes CRUD operations for the **InvalidAttributeErrorData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvalidAttributeErrorData
    * const invalidAttributeErrorData = await prisma.invalidAttributeErrorData.findMany()
    * ```
    */
  get invalidAttributeErrorData(): Prisma.InvalidAttributeErrorDataDelegate<ExtArgs>;

  /**
   * `prisma.invalidTextErrorData`: Exposes CRUD operations for the **InvalidTextErrorData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvalidTextErrorData
    * const invalidTextErrorData = await prisma.invalidTextErrorData.findMany()
    * ```
    */
  get invalidTextErrorData(): Prisma.InvalidTextErrorDataDelegate<ExtArgs>;

  /**
   * `prisma.missingTextErrorData`: Exposes CRUD operations for the **MissingTextErrorData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MissingTextErrorData
    * const missingTextErrorData = await prisma.missingTextErrorData.findMany()
    * ```
    */
  get missingTextErrorData(): Prisma.MissingTextErrorDataDelegate<ExtArgs>;

  /**
   * `prisma.nonUniqueTextErrorData`: Exposes CRUD operations for the **NonUniqueTextErrorData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NonUniqueTextErrorData
    * const nonUniqueTextErrorData = await prisma.nonUniqueTextErrorData.findMany()
    * ```
    */
  get nonUniqueTextErrorData(): Prisma.NonUniqueTextErrorDataDelegate<ExtArgs>;

  /**
   * `prisma.missingElementErrorData`: Exposes CRUD operations for the **MissingElementErrorData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MissingElementErrorData
    * const missingElementErrorData = await prisma.missingElementErrorData.findMany()
    * ```
    */
  get missingElementErrorData(): Prisma.MissingElementErrorDataDelegate<ExtArgs>;

  /**
   * `prisma.nonUniqueElementErrorData`: Exposes CRUD operations for the **NonUniqueElementErrorData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NonUniqueElementErrorData
    * const nonUniqueElementErrorData = await prisma.nonUniqueElementErrorData.findMany()
    * ```
    */
  get nonUniqueElementErrorData(): Prisma.NonUniqueElementErrorDataDelegate<ExtArgs>;

  /**
   * `prisma.scrapingErrorRecord`: Exposes CRUD operations for the **ScrapingErrorRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScrapingErrorRecords
    * const scrapingErrorRecords = await prisma.scrapingErrorRecord.findMany()
    * ```
    */
  get scrapingErrorRecord(): Prisma.ScrapingErrorRecordDelegate<ExtArgs>;

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
   * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
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
    MissingAttributeErrorData: 'MissingAttributeErrorData',
    InvalidAttributeErrorData: 'InvalidAttributeErrorData',
    InvalidTextErrorData: 'InvalidTextErrorData',
    MissingTextErrorData: 'MissingTextErrorData',
    NonUniqueTextErrorData: 'NonUniqueTextErrorData',
    MissingElementErrorData: 'MissingElementErrorData',
    NonUniqueElementErrorData: 'NonUniqueElementErrorData',
    ScrapingErrorRecord: 'ScrapingErrorRecord',
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
      modelProps: 'user' | 'missingAttributeErrorData' | 'invalidAttributeErrorData' | 'invalidTextErrorData' | 'missingTextErrorData' | 'nonUniqueTextErrorData' | 'missingElementErrorData' | 'nonUniqueElementErrorData' | 'scrapingErrorRecord' | 'productRecordedRecord' | 'productRecord' | 'product'
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
      MissingAttributeErrorData: {
        payload: Prisma.$MissingAttributeErrorDataPayload<ExtArgs>
        fields: Prisma.MissingAttributeErrorDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissingAttributeErrorDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingAttributeErrorDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissingAttributeErrorDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingAttributeErrorDataPayload>
          }
          findFirst: {
            args: Prisma.MissingAttributeErrorDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingAttributeErrorDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissingAttributeErrorDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingAttributeErrorDataPayload>
          }
          findMany: {
            args: Prisma.MissingAttributeErrorDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingAttributeErrorDataPayload>[]
          }
          create: {
            args: Prisma.MissingAttributeErrorDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingAttributeErrorDataPayload>
          }
          createMany: {
            args: Prisma.MissingAttributeErrorDataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MissingAttributeErrorDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingAttributeErrorDataPayload>
          }
          update: {
            args: Prisma.MissingAttributeErrorDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingAttributeErrorDataPayload>
          }
          deleteMany: {
            args: Prisma.MissingAttributeErrorDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MissingAttributeErrorDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MissingAttributeErrorDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingAttributeErrorDataPayload>
          }
          aggregate: {
            args: Prisma.MissingAttributeErrorDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMissingAttributeErrorData>
          }
          groupBy: {
            args: Prisma.MissingAttributeErrorDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MissingAttributeErrorDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissingAttributeErrorDataCountArgs<ExtArgs>,
            result: $Utils.Optional<MissingAttributeErrorDataCountAggregateOutputType> | number
          }
        }
      }
      InvalidAttributeErrorData: {
        payload: Prisma.$InvalidAttributeErrorDataPayload<ExtArgs>
        fields: Prisma.InvalidAttributeErrorDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvalidAttributeErrorDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvalidAttributeErrorDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvalidAttributeErrorDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvalidAttributeErrorDataPayload>
          }
          findFirst: {
            args: Prisma.InvalidAttributeErrorDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvalidAttributeErrorDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvalidAttributeErrorDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvalidAttributeErrorDataPayload>
          }
          findMany: {
            args: Prisma.InvalidAttributeErrorDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvalidAttributeErrorDataPayload>[]
          }
          create: {
            args: Prisma.InvalidAttributeErrorDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvalidAttributeErrorDataPayload>
          }
          createMany: {
            args: Prisma.InvalidAttributeErrorDataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InvalidAttributeErrorDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvalidAttributeErrorDataPayload>
          }
          update: {
            args: Prisma.InvalidAttributeErrorDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvalidAttributeErrorDataPayload>
          }
          deleteMany: {
            args: Prisma.InvalidAttributeErrorDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InvalidAttributeErrorDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InvalidAttributeErrorDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvalidAttributeErrorDataPayload>
          }
          aggregate: {
            args: Prisma.InvalidAttributeErrorDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInvalidAttributeErrorData>
          }
          groupBy: {
            args: Prisma.InvalidAttributeErrorDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InvalidAttributeErrorDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvalidAttributeErrorDataCountArgs<ExtArgs>,
            result: $Utils.Optional<InvalidAttributeErrorDataCountAggregateOutputType> | number
          }
        }
      }
      InvalidTextErrorData: {
        payload: Prisma.$InvalidTextErrorDataPayload<ExtArgs>
        fields: Prisma.InvalidTextErrorDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvalidTextErrorDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvalidTextErrorDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvalidTextErrorDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvalidTextErrorDataPayload>
          }
          findFirst: {
            args: Prisma.InvalidTextErrorDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvalidTextErrorDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvalidTextErrorDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvalidTextErrorDataPayload>
          }
          findMany: {
            args: Prisma.InvalidTextErrorDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvalidTextErrorDataPayload>[]
          }
          create: {
            args: Prisma.InvalidTextErrorDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvalidTextErrorDataPayload>
          }
          createMany: {
            args: Prisma.InvalidTextErrorDataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InvalidTextErrorDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvalidTextErrorDataPayload>
          }
          update: {
            args: Prisma.InvalidTextErrorDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvalidTextErrorDataPayload>
          }
          deleteMany: {
            args: Prisma.InvalidTextErrorDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InvalidTextErrorDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InvalidTextErrorDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvalidTextErrorDataPayload>
          }
          aggregate: {
            args: Prisma.InvalidTextErrorDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInvalidTextErrorData>
          }
          groupBy: {
            args: Prisma.InvalidTextErrorDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InvalidTextErrorDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvalidTextErrorDataCountArgs<ExtArgs>,
            result: $Utils.Optional<InvalidTextErrorDataCountAggregateOutputType> | number
          }
        }
      }
      MissingTextErrorData: {
        payload: Prisma.$MissingTextErrorDataPayload<ExtArgs>
        fields: Prisma.MissingTextErrorDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissingTextErrorDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingTextErrorDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissingTextErrorDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingTextErrorDataPayload>
          }
          findFirst: {
            args: Prisma.MissingTextErrorDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingTextErrorDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissingTextErrorDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingTextErrorDataPayload>
          }
          findMany: {
            args: Prisma.MissingTextErrorDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingTextErrorDataPayload>[]
          }
          create: {
            args: Prisma.MissingTextErrorDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingTextErrorDataPayload>
          }
          createMany: {
            args: Prisma.MissingTextErrorDataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MissingTextErrorDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingTextErrorDataPayload>
          }
          update: {
            args: Prisma.MissingTextErrorDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingTextErrorDataPayload>
          }
          deleteMany: {
            args: Prisma.MissingTextErrorDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MissingTextErrorDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MissingTextErrorDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingTextErrorDataPayload>
          }
          aggregate: {
            args: Prisma.MissingTextErrorDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMissingTextErrorData>
          }
          groupBy: {
            args: Prisma.MissingTextErrorDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MissingTextErrorDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissingTextErrorDataCountArgs<ExtArgs>,
            result: $Utils.Optional<MissingTextErrorDataCountAggregateOutputType> | number
          }
        }
      }
      NonUniqueTextErrorData: {
        payload: Prisma.$NonUniqueTextErrorDataPayload<ExtArgs>
        fields: Prisma.NonUniqueTextErrorDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NonUniqueTextErrorDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NonUniqueTextErrorDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NonUniqueTextErrorDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NonUniqueTextErrorDataPayload>
          }
          findFirst: {
            args: Prisma.NonUniqueTextErrorDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NonUniqueTextErrorDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NonUniqueTextErrorDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NonUniqueTextErrorDataPayload>
          }
          findMany: {
            args: Prisma.NonUniqueTextErrorDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NonUniqueTextErrorDataPayload>[]
          }
          create: {
            args: Prisma.NonUniqueTextErrorDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NonUniqueTextErrorDataPayload>
          }
          createMany: {
            args: Prisma.NonUniqueTextErrorDataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NonUniqueTextErrorDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NonUniqueTextErrorDataPayload>
          }
          update: {
            args: Prisma.NonUniqueTextErrorDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NonUniqueTextErrorDataPayload>
          }
          deleteMany: {
            args: Prisma.NonUniqueTextErrorDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NonUniqueTextErrorDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NonUniqueTextErrorDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NonUniqueTextErrorDataPayload>
          }
          aggregate: {
            args: Prisma.NonUniqueTextErrorDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNonUniqueTextErrorData>
          }
          groupBy: {
            args: Prisma.NonUniqueTextErrorDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NonUniqueTextErrorDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.NonUniqueTextErrorDataCountArgs<ExtArgs>,
            result: $Utils.Optional<NonUniqueTextErrorDataCountAggregateOutputType> | number
          }
        }
      }
      MissingElementErrorData: {
        payload: Prisma.$MissingElementErrorDataPayload<ExtArgs>
        fields: Prisma.MissingElementErrorDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissingElementErrorDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingElementErrorDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissingElementErrorDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingElementErrorDataPayload>
          }
          findFirst: {
            args: Prisma.MissingElementErrorDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingElementErrorDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissingElementErrorDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingElementErrorDataPayload>
          }
          findMany: {
            args: Prisma.MissingElementErrorDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingElementErrorDataPayload>[]
          }
          create: {
            args: Prisma.MissingElementErrorDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingElementErrorDataPayload>
          }
          createMany: {
            args: Prisma.MissingElementErrorDataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MissingElementErrorDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingElementErrorDataPayload>
          }
          update: {
            args: Prisma.MissingElementErrorDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingElementErrorDataPayload>
          }
          deleteMany: {
            args: Prisma.MissingElementErrorDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MissingElementErrorDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MissingElementErrorDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MissingElementErrorDataPayload>
          }
          aggregate: {
            args: Prisma.MissingElementErrorDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMissingElementErrorData>
          }
          groupBy: {
            args: Prisma.MissingElementErrorDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MissingElementErrorDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissingElementErrorDataCountArgs<ExtArgs>,
            result: $Utils.Optional<MissingElementErrorDataCountAggregateOutputType> | number
          }
        }
      }
      NonUniqueElementErrorData: {
        payload: Prisma.$NonUniqueElementErrorDataPayload<ExtArgs>
        fields: Prisma.NonUniqueElementErrorDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NonUniqueElementErrorDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NonUniqueElementErrorDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NonUniqueElementErrorDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NonUniqueElementErrorDataPayload>
          }
          findFirst: {
            args: Prisma.NonUniqueElementErrorDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NonUniqueElementErrorDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NonUniqueElementErrorDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NonUniqueElementErrorDataPayload>
          }
          findMany: {
            args: Prisma.NonUniqueElementErrorDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NonUniqueElementErrorDataPayload>[]
          }
          create: {
            args: Prisma.NonUniqueElementErrorDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NonUniqueElementErrorDataPayload>
          }
          createMany: {
            args: Prisma.NonUniqueElementErrorDataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NonUniqueElementErrorDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NonUniqueElementErrorDataPayload>
          }
          update: {
            args: Prisma.NonUniqueElementErrorDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NonUniqueElementErrorDataPayload>
          }
          deleteMany: {
            args: Prisma.NonUniqueElementErrorDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NonUniqueElementErrorDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NonUniqueElementErrorDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NonUniqueElementErrorDataPayload>
          }
          aggregate: {
            args: Prisma.NonUniqueElementErrorDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNonUniqueElementErrorData>
          }
          groupBy: {
            args: Prisma.NonUniqueElementErrorDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NonUniqueElementErrorDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.NonUniqueElementErrorDataCountArgs<ExtArgs>,
            result: $Utils.Optional<NonUniqueElementErrorDataCountAggregateOutputType> | number
          }
        }
      }
      ScrapingErrorRecord: {
        payload: Prisma.$ScrapingErrorRecordPayload<ExtArgs>
        fields: Prisma.ScrapingErrorRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScrapingErrorRecordFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScrapingErrorRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScrapingErrorRecordFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScrapingErrorRecordPayload>
          }
          findFirst: {
            args: Prisma.ScrapingErrorRecordFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScrapingErrorRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScrapingErrorRecordFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScrapingErrorRecordPayload>
          }
          findMany: {
            args: Prisma.ScrapingErrorRecordFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScrapingErrorRecordPayload>[]
          }
          create: {
            args: Prisma.ScrapingErrorRecordCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScrapingErrorRecordPayload>
          }
          createMany: {
            args: Prisma.ScrapingErrorRecordCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ScrapingErrorRecordDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScrapingErrorRecordPayload>
          }
          update: {
            args: Prisma.ScrapingErrorRecordUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScrapingErrorRecordPayload>
          }
          deleteMany: {
            args: Prisma.ScrapingErrorRecordDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ScrapingErrorRecordUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ScrapingErrorRecordUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScrapingErrorRecordPayload>
          }
          aggregate: {
            args: Prisma.ScrapingErrorRecordAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateScrapingErrorRecord>
          }
          groupBy: {
            args: Prisma.ScrapingErrorRecordGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ScrapingErrorRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScrapingErrorRecordCountArgs<ExtArgs>,
            result: $Utils.Optional<ScrapingErrorRecordCountAggregateOutputType> | number
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
   * Model MissingAttributeErrorData
   */

  export type AggregateMissingAttributeErrorData = {
    _count: MissingAttributeErrorDataCountAggregateOutputType | null
    _min: MissingAttributeErrorDataMinAggregateOutputType | null
    _max: MissingAttributeErrorDataMaxAggregateOutputType | null
  }

  export type MissingAttributeErrorDataMinAggregateOutputType = {
    id: string | null
    attribute: $Enums.ElementAttribute | null
    parentHtml: string | null
  }

  export type MissingAttributeErrorDataMaxAggregateOutputType = {
    id: string | null
    attribute: $Enums.ElementAttribute | null
    parentHtml: string | null
  }

  export type MissingAttributeErrorDataCountAggregateOutputType = {
    id: number
    attribute: number
    parentHtml: number
    _all: number
  }


  export type MissingAttributeErrorDataMinAggregateInputType = {
    id?: true
    attribute?: true
    parentHtml?: true
  }

  export type MissingAttributeErrorDataMaxAggregateInputType = {
    id?: true
    attribute?: true
    parentHtml?: true
  }

  export type MissingAttributeErrorDataCountAggregateInputType = {
    id?: true
    attribute?: true
    parentHtml?: true
    _all?: true
  }

  export type MissingAttributeErrorDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissingAttributeErrorData to aggregate.
     */
    where?: MissingAttributeErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissingAttributeErrorData to fetch.
     */
    orderBy?: MissingAttributeErrorDataOrderByWithRelationInput | MissingAttributeErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissingAttributeErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissingAttributeErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissingAttributeErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MissingAttributeErrorData
    **/
    _count?: true | MissingAttributeErrorDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissingAttributeErrorDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissingAttributeErrorDataMaxAggregateInputType
  }

  export type GetMissingAttributeErrorDataAggregateType<T extends MissingAttributeErrorDataAggregateArgs> = {
        [P in keyof T & keyof AggregateMissingAttributeErrorData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMissingAttributeErrorData[P]>
      : GetScalarType<T[P], AggregateMissingAttributeErrorData[P]>
  }




  export type MissingAttributeErrorDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissingAttributeErrorDataWhereInput
    orderBy?: MissingAttributeErrorDataOrderByWithAggregationInput | MissingAttributeErrorDataOrderByWithAggregationInput[]
    by: MissingAttributeErrorDataScalarFieldEnum[] | MissingAttributeErrorDataScalarFieldEnum
    having?: MissingAttributeErrorDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissingAttributeErrorDataCountAggregateInputType | true
    _min?: MissingAttributeErrorDataMinAggregateInputType
    _max?: MissingAttributeErrorDataMaxAggregateInputType
  }

  export type MissingAttributeErrorDataGroupByOutputType = {
    id: string
    attribute: $Enums.ElementAttribute
    parentHtml: string | null
    _count: MissingAttributeErrorDataCountAggregateOutputType | null
    _min: MissingAttributeErrorDataMinAggregateOutputType | null
    _max: MissingAttributeErrorDataMaxAggregateOutputType | null
  }

  type GetMissingAttributeErrorDataGroupByPayload<T extends MissingAttributeErrorDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissingAttributeErrorDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissingAttributeErrorDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissingAttributeErrorDataGroupByOutputType[P]>
            : GetScalarType<T[P], MissingAttributeErrorDataGroupByOutputType[P]>
        }
      >
    >


  export type MissingAttributeErrorDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attribute?: boolean
    parentHtml?: boolean
  }, ExtArgs["result"]["missingAttributeErrorData"]>

  export type MissingAttributeErrorDataSelectScalar = {
    id?: boolean
    attribute?: boolean
    parentHtml?: boolean
  }


  export type $MissingAttributeErrorDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MissingAttributeErrorData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      attribute: $Enums.ElementAttribute
      parentHtml: string | null
    }, ExtArgs["result"]["missingAttributeErrorData"]>
    composites: {}
  }


  type MissingAttributeErrorDataGetPayload<S extends boolean | null | undefined | MissingAttributeErrorDataDefaultArgs> = $Result.GetResult<Prisma.$MissingAttributeErrorDataPayload, S>

  type MissingAttributeErrorDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MissingAttributeErrorDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MissingAttributeErrorDataCountAggregateInputType | true
    }

  export interface MissingAttributeErrorDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MissingAttributeErrorData'], meta: { name: 'MissingAttributeErrorData' } }
    /**
     * Find zero or one MissingAttributeErrorData that matches the filter.
     * @param {MissingAttributeErrorDataFindUniqueArgs} args - Arguments to find a MissingAttributeErrorData
     * @example
     * // Get one MissingAttributeErrorData
     * const missingAttributeErrorData = await prisma.missingAttributeErrorData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MissingAttributeErrorDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MissingAttributeErrorDataFindUniqueArgs<ExtArgs>>
    ): Prisma__MissingAttributeErrorDataClient<$Result.GetResult<Prisma.$MissingAttributeErrorDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MissingAttributeErrorData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MissingAttributeErrorDataFindUniqueOrThrowArgs} args - Arguments to find a MissingAttributeErrorData
     * @example
     * // Get one MissingAttributeErrorData
     * const missingAttributeErrorData = await prisma.missingAttributeErrorData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MissingAttributeErrorDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MissingAttributeErrorDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MissingAttributeErrorDataClient<$Result.GetResult<Prisma.$MissingAttributeErrorDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MissingAttributeErrorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissingAttributeErrorDataFindFirstArgs} args - Arguments to find a MissingAttributeErrorData
     * @example
     * // Get one MissingAttributeErrorData
     * const missingAttributeErrorData = await prisma.missingAttributeErrorData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MissingAttributeErrorDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MissingAttributeErrorDataFindFirstArgs<ExtArgs>>
    ): Prisma__MissingAttributeErrorDataClient<$Result.GetResult<Prisma.$MissingAttributeErrorDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MissingAttributeErrorData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissingAttributeErrorDataFindFirstOrThrowArgs} args - Arguments to find a MissingAttributeErrorData
     * @example
     * // Get one MissingAttributeErrorData
     * const missingAttributeErrorData = await prisma.missingAttributeErrorData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MissingAttributeErrorDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MissingAttributeErrorDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MissingAttributeErrorDataClient<$Result.GetResult<Prisma.$MissingAttributeErrorDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MissingAttributeErrorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissingAttributeErrorDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MissingAttributeErrorData
     * const missingAttributeErrorData = await prisma.missingAttributeErrorData.findMany()
     * 
     * // Get first 10 MissingAttributeErrorData
     * const missingAttributeErrorData = await prisma.missingAttributeErrorData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missingAttributeErrorDataWithIdOnly = await prisma.missingAttributeErrorData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MissingAttributeErrorDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MissingAttributeErrorDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissingAttributeErrorDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MissingAttributeErrorData.
     * @param {MissingAttributeErrorDataCreateArgs} args - Arguments to create a MissingAttributeErrorData.
     * @example
     * // Create one MissingAttributeErrorData
     * const MissingAttributeErrorData = await prisma.missingAttributeErrorData.create({
     *   data: {
     *     // ... data to create a MissingAttributeErrorData
     *   }
     * })
     * 
    **/
    create<T extends MissingAttributeErrorDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MissingAttributeErrorDataCreateArgs<ExtArgs>>
    ): Prisma__MissingAttributeErrorDataClient<$Result.GetResult<Prisma.$MissingAttributeErrorDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MissingAttributeErrorData.
     *     @param {MissingAttributeErrorDataCreateManyArgs} args - Arguments to create many MissingAttributeErrorData.
     *     @example
     *     // Create many MissingAttributeErrorData
     *     const missingAttributeErrorData = await prisma.missingAttributeErrorData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MissingAttributeErrorDataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MissingAttributeErrorDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MissingAttributeErrorData.
     * @param {MissingAttributeErrorDataDeleteArgs} args - Arguments to delete one MissingAttributeErrorData.
     * @example
     * // Delete one MissingAttributeErrorData
     * const MissingAttributeErrorData = await prisma.missingAttributeErrorData.delete({
     *   where: {
     *     // ... filter to delete one MissingAttributeErrorData
     *   }
     * })
     * 
    **/
    delete<T extends MissingAttributeErrorDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MissingAttributeErrorDataDeleteArgs<ExtArgs>>
    ): Prisma__MissingAttributeErrorDataClient<$Result.GetResult<Prisma.$MissingAttributeErrorDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MissingAttributeErrorData.
     * @param {MissingAttributeErrorDataUpdateArgs} args - Arguments to update one MissingAttributeErrorData.
     * @example
     * // Update one MissingAttributeErrorData
     * const missingAttributeErrorData = await prisma.missingAttributeErrorData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MissingAttributeErrorDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MissingAttributeErrorDataUpdateArgs<ExtArgs>>
    ): Prisma__MissingAttributeErrorDataClient<$Result.GetResult<Prisma.$MissingAttributeErrorDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MissingAttributeErrorData.
     * @param {MissingAttributeErrorDataDeleteManyArgs} args - Arguments to filter MissingAttributeErrorData to delete.
     * @example
     * // Delete a few MissingAttributeErrorData
     * const { count } = await prisma.missingAttributeErrorData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MissingAttributeErrorDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MissingAttributeErrorDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MissingAttributeErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissingAttributeErrorDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MissingAttributeErrorData
     * const missingAttributeErrorData = await prisma.missingAttributeErrorData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MissingAttributeErrorDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MissingAttributeErrorDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MissingAttributeErrorData.
     * @param {MissingAttributeErrorDataUpsertArgs} args - Arguments to update or create a MissingAttributeErrorData.
     * @example
     * // Update or create a MissingAttributeErrorData
     * const missingAttributeErrorData = await prisma.missingAttributeErrorData.upsert({
     *   create: {
     *     // ... data to create a MissingAttributeErrorData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MissingAttributeErrorData we want to update
     *   }
     * })
    **/
    upsert<T extends MissingAttributeErrorDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MissingAttributeErrorDataUpsertArgs<ExtArgs>>
    ): Prisma__MissingAttributeErrorDataClient<$Result.GetResult<Prisma.$MissingAttributeErrorDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MissingAttributeErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissingAttributeErrorDataCountArgs} args - Arguments to filter MissingAttributeErrorData to count.
     * @example
     * // Count the number of MissingAttributeErrorData
     * const count = await prisma.missingAttributeErrorData.count({
     *   where: {
     *     // ... the filter for the MissingAttributeErrorData we want to count
     *   }
     * })
    **/
    count<T extends MissingAttributeErrorDataCountArgs>(
      args?: Subset<T, MissingAttributeErrorDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissingAttributeErrorDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MissingAttributeErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissingAttributeErrorDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MissingAttributeErrorDataAggregateArgs>(args: Subset<T, MissingAttributeErrorDataAggregateArgs>): Prisma.PrismaPromise<GetMissingAttributeErrorDataAggregateType<T>>

    /**
     * Group by MissingAttributeErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissingAttributeErrorDataGroupByArgs} args - Group by arguments.
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
      T extends MissingAttributeErrorDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissingAttributeErrorDataGroupByArgs['orderBy'] }
        : { orderBy?: MissingAttributeErrorDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MissingAttributeErrorDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissingAttributeErrorDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MissingAttributeErrorData model
   */
  readonly fields: MissingAttributeErrorDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MissingAttributeErrorData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissingAttributeErrorDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MissingAttributeErrorData model
   */ 
  interface MissingAttributeErrorDataFieldRefs {
    readonly id: FieldRef<"MissingAttributeErrorData", 'String'>
    readonly attribute: FieldRef<"MissingAttributeErrorData", 'ElementAttribute'>
    readonly parentHtml: FieldRef<"MissingAttributeErrorData", 'String'>
  }
    

  // Custom InputTypes

  /**
   * MissingAttributeErrorData findUnique
   */
  export type MissingAttributeErrorDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingAttributeErrorData
     */
    select?: MissingAttributeErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which MissingAttributeErrorData to fetch.
     */
    where: MissingAttributeErrorDataWhereUniqueInput
  }


  /**
   * MissingAttributeErrorData findUniqueOrThrow
   */
  export type MissingAttributeErrorDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingAttributeErrorData
     */
    select?: MissingAttributeErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which MissingAttributeErrorData to fetch.
     */
    where: MissingAttributeErrorDataWhereUniqueInput
  }


  /**
   * MissingAttributeErrorData findFirst
   */
  export type MissingAttributeErrorDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingAttributeErrorData
     */
    select?: MissingAttributeErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which MissingAttributeErrorData to fetch.
     */
    where?: MissingAttributeErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissingAttributeErrorData to fetch.
     */
    orderBy?: MissingAttributeErrorDataOrderByWithRelationInput | MissingAttributeErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissingAttributeErrorData.
     */
    cursor?: MissingAttributeErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissingAttributeErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissingAttributeErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissingAttributeErrorData.
     */
    distinct?: MissingAttributeErrorDataScalarFieldEnum | MissingAttributeErrorDataScalarFieldEnum[]
  }


  /**
   * MissingAttributeErrorData findFirstOrThrow
   */
  export type MissingAttributeErrorDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingAttributeErrorData
     */
    select?: MissingAttributeErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which MissingAttributeErrorData to fetch.
     */
    where?: MissingAttributeErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissingAttributeErrorData to fetch.
     */
    orderBy?: MissingAttributeErrorDataOrderByWithRelationInput | MissingAttributeErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissingAttributeErrorData.
     */
    cursor?: MissingAttributeErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissingAttributeErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissingAttributeErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissingAttributeErrorData.
     */
    distinct?: MissingAttributeErrorDataScalarFieldEnum | MissingAttributeErrorDataScalarFieldEnum[]
  }


  /**
   * MissingAttributeErrorData findMany
   */
  export type MissingAttributeErrorDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingAttributeErrorData
     */
    select?: MissingAttributeErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which MissingAttributeErrorData to fetch.
     */
    where?: MissingAttributeErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissingAttributeErrorData to fetch.
     */
    orderBy?: MissingAttributeErrorDataOrderByWithRelationInput | MissingAttributeErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MissingAttributeErrorData.
     */
    cursor?: MissingAttributeErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissingAttributeErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissingAttributeErrorData.
     */
    skip?: number
    distinct?: MissingAttributeErrorDataScalarFieldEnum | MissingAttributeErrorDataScalarFieldEnum[]
  }


  /**
   * MissingAttributeErrorData create
   */
  export type MissingAttributeErrorDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingAttributeErrorData
     */
    select?: MissingAttributeErrorDataSelect<ExtArgs> | null
    /**
     * The data needed to create a MissingAttributeErrorData.
     */
    data: XOR<MissingAttributeErrorDataCreateInput, MissingAttributeErrorDataUncheckedCreateInput>
  }


  /**
   * MissingAttributeErrorData createMany
   */
  export type MissingAttributeErrorDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MissingAttributeErrorData.
     */
    data: MissingAttributeErrorDataCreateManyInput | MissingAttributeErrorDataCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * MissingAttributeErrorData update
   */
  export type MissingAttributeErrorDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingAttributeErrorData
     */
    select?: MissingAttributeErrorDataSelect<ExtArgs> | null
    /**
     * The data needed to update a MissingAttributeErrorData.
     */
    data: XOR<MissingAttributeErrorDataUpdateInput, MissingAttributeErrorDataUncheckedUpdateInput>
    /**
     * Choose, which MissingAttributeErrorData to update.
     */
    where: MissingAttributeErrorDataWhereUniqueInput
  }


  /**
   * MissingAttributeErrorData updateMany
   */
  export type MissingAttributeErrorDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MissingAttributeErrorData.
     */
    data: XOR<MissingAttributeErrorDataUpdateManyMutationInput, MissingAttributeErrorDataUncheckedUpdateManyInput>
    /**
     * Filter which MissingAttributeErrorData to update
     */
    where?: MissingAttributeErrorDataWhereInput
  }


  /**
   * MissingAttributeErrorData upsert
   */
  export type MissingAttributeErrorDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingAttributeErrorData
     */
    select?: MissingAttributeErrorDataSelect<ExtArgs> | null
    /**
     * The filter to search for the MissingAttributeErrorData to update in case it exists.
     */
    where: MissingAttributeErrorDataWhereUniqueInput
    /**
     * In case the MissingAttributeErrorData found by the `where` argument doesn't exist, create a new MissingAttributeErrorData with this data.
     */
    create: XOR<MissingAttributeErrorDataCreateInput, MissingAttributeErrorDataUncheckedCreateInput>
    /**
     * In case the MissingAttributeErrorData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissingAttributeErrorDataUpdateInput, MissingAttributeErrorDataUncheckedUpdateInput>
  }


  /**
   * MissingAttributeErrorData delete
   */
  export type MissingAttributeErrorDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingAttributeErrorData
     */
    select?: MissingAttributeErrorDataSelect<ExtArgs> | null
    /**
     * Filter which MissingAttributeErrorData to delete.
     */
    where: MissingAttributeErrorDataWhereUniqueInput
  }


  /**
   * MissingAttributeErrorData deleteMany
   */
  export type MissingAttributeErrorDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissingAttributeErrorData to delete
     */
    where?: MissingAttributeErrorDataWhereInput
  }


  /**
   * MissingAttributeErrorData without action
   */
  export type MissingAttributeErrorDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingAttributeErrorData
     */
    select?: MissingAttributeErrorDataSelect<ExtArgs> | null
  }



  /**
   * Model InvalidAttributeErrorData
   */

  export type AggregateInvalidAttributeErrorData = {
    _count: InvalidAttributeErrorDataCountAggregateOutputType | null
    _min: InvalidAttributeErrorDataMinAggregateOutputType | null
    _max: InvalidAttributeErrorDataMaxAggregateOutputType | null
  }

  export type InvalidAttributeErrorDataMinAggregateOutputType = {
    id: string | null
    attribute: $Enums.ElementAttribute | null
    parentHtml: string | null
    value: string | null
  }

  export type InvalidAttributeErrorDataMaxAggregateOutputType = {
    id: string | null
    attribute: $Enums.ElementAttribute | null
    parentHtml: string | null
    value: string | null
  }

  export type InvalidAttributeErrorDataCountAggregateOutputType = {
    id: number
    attribute: number
    parentHtml: number
    value: number
    _all: number
  }


  export type InvalidAttributeErrorDataMinAggregateInputType = {
    id?: true
    attribute?: true
    parentHtml?: true
    value?: true
  }

  export type InvalidAttributeErrorDataMaxAggregateInputType = {
    id?: true
    attribute?: true
    parentHtml?: true
    value?: true
  }

  export type InvalidAttributeErrorDataCountAggregateInputType = {
    id?: true
    attribute?: true
    parentHtml?: true
    value?: true
    _all?: true
  }

  export type InvalidAttributeErrorDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvalidAttributeErrorData to aggregate.
     */
    where?: InvalidAttributeErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvalidAttributeErrorData to fetch.
     */
    orderBy?: InvalidAttributeErrorDataOrderByWithRelationInput | InvalidAttributeErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvalidAttributeErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvalidAttributeErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvalidAttributeErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvalidAttributeErrorData
    **/
    _count?: true | InvalidAttributeErrorDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvalidAttributeErrorDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvalidAttributeErrorDataMaxAggregateInputType
  }

  export type GetInvalidAttributeErrorDataAggregateType<T extends InvalidAttributeErrorDataAggregateArgs> = {
        [P in keyof T & keyof AggregateInvalidAttributeErrorData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvalidAttributeErrorData[P]>
      : GetScalarType<T[P], AggregateInvalidAttributeErrorData[P]>
  }




  export type InvalidAttributeErrorDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvalidAttributeErrorDataWhereInput
    orderBy?: InvalidAttributeErrorDataOrderByWithAggregationInput | InvalidAttributeErrorDataOrderByWithAggregationInput[]
    by: InvalidAttributeErrorDataScalarFieldEnum[] | InvalidAttributeErrorDataScalarFieldEnum
    having?: InvalidAttributeErrorDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvalidAttributeErrorDataCountAggregateInputType | true
    _min?: InvalidAttributeErrorDataMinAggregateInputType
    _max?: InvalidAttributeErrorDataMaxAggregateInputType
  }

  export type InvalidAttributeErrorDataGroupByOutputType = {
    id: string
    attribute: $Enums.ElementAttribute
    parentHtml: string | null
    value: string
    _count: InvalidAttributeErrorDataCountAggregateOutputType | null
    _min: InvalidAttributeErrorDataMinAggregateOutputType | null
    _max: InvalidAttributeErrorDataMaxAggregateOutputType | null
  }

  type GetInvalidAttributeErrorDataGroupByPayload<T extends InvalidAttributeErrorDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvalidAttributeErrorDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvalidAttributeErrorDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvalidAttributeErrorDataGroupByOutputType[P]>
            : GetScalarType<T[P], InvalidAttributeErrorDataGroupByOutputType[P]>
        }
      >
    >


  export type InvalidAttributeErrorDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attribute?: boolean
    parentHtml?: boolean
    value?: boolean
  }, ExtArgs["result"]["invalidAttributeErrorData"]>

  export type InvalidAttributeErrorDataSelectScalar = {
    id?: boolean
    attribute?: boolean
    parentHtml?: boolean
    value?: boolean
  }


  export type $InvalidAttributeErrorDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvalidAttributeErrorData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      attribute: $Enums.ElementAttribute
      parentHtml: string | null
      value: string
    }, ExtArgs["result"]["invalidAttributeErrorData"]>
    composites: {}
  }


  type InvalidAttributeErrorDataGetPayload<S extends boolean | null | undefined | InvalidAttributeErrorDataDefaultArgs> = $Result.GetResult<Prisma.$InvalidAttributeErrorDataPayload, S>

  type InvalidAttributeErrorDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InvalidAttributeErrorDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvalidAttributeErrorDataCountAggregateInputType | true
    }

  export interface InvalidAttributeErrorDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvalidAttributeErrorData'], meta: { name: 'InvalidAttributeErrorData' } }
    /**
     * Find zero or one InvalidAttributeErrorData that matches the filter.
     * @param {InvalidAttributeErrorDataFindUniqueArgs} args - Arguments to find a InvalidAttributeErrorData
     * @example
     * // Get one InvalidAttributeErrorData
     * const invalidAttributeErrorData = await prisma.invalidAttributeErrorData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InvalidAttributeErrorDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InvalidAttributeErrorDataFindUniqueArgs<ExtArgs>>
    ): Prisma__InvalidAttributeErrorDataClient<$Result.GetResult<Prisma.$InvalidAttributeErrorDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one InvalidAttributeErrorData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InvalidAttributeErrorDataFindUniqueOrThrowArgs} args - Arguments to find a InvalidAttributeErrorData
     * @example
     * // Get one InvalidAttributeErrorData
     * const invalidAttributeErrorData = await prisma.invalidAttributeErrorData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InvalidAttributeErrorDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InvalidAttributeErrorDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InvalidAttributeErrorDataClient<$Result.GetResult<Prisma.$InvalidAttributeErrorDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first InvalidAttributeErrorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvalidAttributeErrorDataFindFirstArgs} args - Arguments to find a InvalidAttributeErrorData
     * @example
     * // Get one InvalidAttributeErrorData
     * const invalidAttributeErrorData = await prisma.invalidAttributeErrorData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InvalidAttributeErrorDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InvalidAttributeErrorDataFindFirstArgs<ExtArgs>>
    ): Prisma__InvalidAttributeErrorDataClient<$Result.GetResult<Prisma.$InvalidAttributeErrorDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first InvalidAttributeErrorData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvalidAttributeErrorDataFindFirstOrThrowArgs} args - Arguments to find a InvalidAttributeErrorData
     * @example
     * // Get one InvalidAttributeErrorData
     * const invalidAttributeErrorData = await prisma.invalidAttributeErrorData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InvalidAttributeErrorDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InvalidAttributeErrorDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InvalidAttributeErrorDataClient<$Result.GetResult<Prisma.$InvalidAttributeErrorDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more InvalidAttributeErrorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvalidAttributeErrorDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvalidAttributeErrorData
     * const invalidAttributeErrorData = await prisma.invalidAttributeErrorData.findMany()
     * 
     * // Get first 10 InvalidAttributeErrorData
     * const invalidAttributeErrorData = await prisma.invalidAttributeErrorData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invalidAttributeErrorDataWithIdOnly = await prisma.invalidAttributeErrorData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InvalidAttributeErrorDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InvalidAttributeErrorDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvalidAttributeErrorDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a InvalidAttributeErrorData.
     * @param {InvalidAttributeErrorDataCreateArgs} args - Arguments to create a InvalidAttributeErrorData.
     * @example
     * // Create one InvalidAttributeErrorData
     * const InvalidAttributeErrorData = await prisma.invalidAttributeErrorData.create({
     *   data: {
     *     // ... data to create a InvalidAttributeErrorData
     *   }
     * })
     * 
    **/
    create<T extends InvalidAttributeErrorDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InvalidAttributeErrorDataCreateArgs<ExtArgs>>
    ): Prisma__InvalidAttributeErrorDataClient<$Result.GetResult<Prisma.$InvalidAttributeErrorDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many InvalidAttributeErrorData.
     *     @param {InvalidAttributeErrorDataCreateManyArgs} args - Arguments to create many InvalidAttributeErrorData.
     *     @example
     *     // Create many InvalidAttributeErrorData
     *     const invalidAttributeErrorData = await prisma.invalidAttributeErrorData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InvalidAttributeErrorDataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InvalidAttributeErrorDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InvalidAttributeErrorData.
     * @param {InvalidAttributeErrorDataDeleteArgs} args - Arguments to delete one InvalidAttributeErrorData.
     * @example
     * // Delete one InvalidAttributeErrorData
     * const InvalidAttributeErrorData = await prisma.invalidAttributeErrorData.delete({
     *   where: {
     *     // ... filter to delete one InvalidAttributeErrorData
     *   }
     * })
     * 
    **/
    delete<T extends InvalidAttributeErrorDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InvalidAttributeErrorDataDeleteArgs<ExtArgs>>
    ): Prisma__InvalidAttributeErrorDataClient<$Result.GetResult<Prisma.$InvalidAttributeErrorDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one InvalidAttributeErrorData.
     * @param {InvalidAttributeErrorDataUpdateArgs} args - Arguments to update one InvalidAttributeErrorData.
     * @example
     * // Update one InvalidAttributeErrorData
     * const invalidAttributeErrorData = await prisma.invalidAttributeErrorData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InvalidAttributeErrorDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InvalidAttributeErrorDataUpdateArgs<ExtArgs>>
    ): Prisma__InvalidAttributeErrorDataClient<$Result.GetResult<Prisma.$InvalidAttributeErrorDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more InvalidAttributeErrorData.
     * @param {InvalidAttributeErrorDataDeleteManyArgs} args - Arguments to filter InvalidAttributeErrorData to delete.
     * @example
     * // Delete a few InvalidAttributeErrorData
     * const { count } = await prisma.invalidAttributeErrorData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InvalidAttributeErrorDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InvalidAttributeErrorDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvalidAttributeErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvalidAttributeErrorDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvalidAttributeErrorData
     * const invalidAttributeErrorData = await prisma.invalidAttributeErrorData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InvalidAttributeErrorDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InvalidAttributeErrorDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InvalidAttributeErrorData.
     * @param {InvalidAttributeErrorDataUpsertArgs} args - Arguments to update or create a InvalidAttributeErrorData.
     * @example
     * // Update or create a InvalidAttributeErrorData
     * const invalidAttributeErrorData = await prisma.invalidAttributeErrorData.upsert({
     *   create: {
     *     // ... data to create a InvalidAttributeErrorData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvalidAttributeErrorData we want to update
     *   }
     * })
    **/
    upsert<T extends InvalidAttributeErrorDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InvalidAttributeErrorDataUpsertArgs<ExtArgs>>
    ): Prisma__InvalidAttributeErrorDataClient<$Result.GetResult<Prisma.$InvalidAttributeErrorDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of InvalidAttributeErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvalidAttributeErrorDataCountArgs} args - Arguments to filter InvalidAttributeErrorData to count.
     * @example
     * // Count the number of InvalidAttributeErrorData
     * const count = await prisma.invalidAttributeErrorData.count({
     *   where: {
     *     // ... the filter for the InvalidAttributeErrorData we want to count
     *   }
     * })
    **/
    count<T extends InvalidAttributeErrorDataCountArgs>(
      args?: Subset<T, InvalidAttributeErrorDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvalidAttributeErrorDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvalidAttributeErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvalidAttributeErrorDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvalidAttributeErrorDataAggregateArgs>(args: Subset<T, InvalidAttributeErrorDataAggregateArgs>): Prisma.PrismaPromise<GetInvalidAttributeErrorDataAggregateType<T>>

    /**
     * Group by InvalidAttributeErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvalidAttributeErrorDataGroupByArgs} args - Group by arguments.
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
      T extends InvalidAttributeErrorDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvalidAttributeErrorDataGroupByArgs['orderBy'] }
        : { orderBy?: InvalidAttributeErrorDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvalidAttributeErrorDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvalidAttributeErrorDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvalidAttributeErrorData model
   */
  readonly fields: InvalidAttributeErrorDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvalidAttributeErrorData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvalidAttributeErrorDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the InvalidAttributeErrorData model
   */ 
  interface InvalidAttributeErrorDataFieldRefs {
    readonly id: FieldRef<"InvalidAttributeErrorData", 'String'>
    readonly attribute: FieldRef<"InvalidAttributeErrorData", 'ElementAttribute'>
    readonly parentHtml: FieldRef<"InvalidAttributeErrorData", 'String'>
    readonly value: FieldRef<"InvalidAttributeErrorData", 'String'>
  }
    

  // Custom InputTypes

  /**
   * InvalidAttributeErrorData findUnique
   */
  export type InvalidAttributeErrorDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidAttributeErrorData
     */
    select?: InvalidAttributeErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which InvalidAttributeErrorData to fetch.
     */
    where: InvalidAttributeErrorDataWhereUniqueInput
  }


  /**
   * InvalidAttributeErrorData findUniqueOrThrow
   */
  export type InvalidAttributeErrorDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidAttributeErrorData
     */
    select?: InvalidAttributeErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which InvalidAttributeErrorData to fetch.
     */
    where: InvalidAttributeErrorDataWhereUniqueInput
  }


  /**
   * InvalidAttributeErrorData findFirst
   */
  export type InvalidAttributeErrorDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidAttributeErrorData
     */
    select?: InvalidAttributeErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which InvalidAttributeErrorData to fetch.
     */
    where?: InvalidAttributeErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvalidAttributeErrorData to fetch.
     */
    orderBy?: InvalidAttributeErrorDataOrderByWithRelationInput | InvalidAttributeErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvalidAttributeErrorData.
     */
    cursor?: InvalidAttributeErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvalidAttributeErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvalidAttributeErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvalidAttributeErrorData.
     */
    distinct?: InvalidAttributeErrorDataScalarFieldEnum | InvalidAttributeErrorDataScalarFieldEnum[]
  }


  /**
   * InvalidAttributeErrorData findFirstOrThrow
   */
  export type InvalidAttributeErrorDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidAttributeErrorData
     */
    select?: InvalidAttributeErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which InvalidAttributeErrorData to fetch.
     */
    where?: InvalidAttributeErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvalidAttributeErrorData to fetch.
     */
    orderBy?: InvalidAttributeErrorDataOrderByWithRelationInput | InvalidAttributeErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvalidAttributeErrorData.
     */
    cursor?: InvalidAttributeErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvalidAttributeErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvalidAttributeErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvalidAttributeErrorData.
     */
    distinct?: InvalidAttributeErrorDataScalarFieldEnum | InvalidAttributeErrorDataScalarFieldEnum[]
  }


  /**
   * InvalidAttributeErrorData findMany
   */
  export type InvalidAttributeErrorDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidAttributeErrorData
     */
    select?: InvalidAttributeErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which InvalidAttributeErrorData to fetch.
     */
    where?: InvalidAttributeErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvalidAttributeErrorData to fetch.
     */
    orderBy?: InvalidAttributeErrorDataOrderByWithRelationInput | InvalidAttributeErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvalidAttributeErrorData.
     */
    cursor?: InvalidAttributeErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvalidAttributeErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvalidAttributeErrorData.
     */
    skip?: number
    distinct?: InvalidAttributeErrorDataScalarFieldEnum | InvalidAttributeErrorDataScalarFieldEnum[]
  }


  /**
   * InvalidAttributeErrorData create
   */
  export type InvalidAttributeErrorDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidAttributeErrorData
     */
    select?: InvalidAttributeErrorDataSelect<ExtArgs> | null
    /**
     * The data needed to create a InvalidAttributeErrorData.
     */
    data: XOR<InvalidAttributeErrorDataCreateInput, InvalidAttributeErrorDataUncheckedCreateInput>
  }


  /**
   * InvalidAttributeErrorData createMany
   */
  export type InvalidAttributeErrorDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvalidAttributeErrorData.
     */
    data: InvalidAttributeErrorDataCreateManyInput | InvalidAttributeErrorDataCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * InvalidAttributeErrorData update
   */
  export type InvalidAttributeErrorDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidAttributeErrorData
     */
    select?: InvalidAttributeErrorDataSelect<ExtArgs> | null
    /**
     * The data needed to update a InvalidAttributeErrorData.
     */
    data: XOR<InvalidAttributeErrorDataUpdateInput, InvalidAttributeErrorDataUncheckedUpdateInput>
    /**
     * Choose, which InvalidAttributeErrorData to update.
     */
    where: InvalidAttributeErrorDataWhereUniqueInput
  }


  /**
   * InvalidAttributeErrorData updateMany
   */
  export type InvalidAttributeErrorDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvalidAttributeErrorData.
     */
    data: XOR<InvalidAttributeErrorDataUpdateManyMutationInput, InvalidAttributeErrorDataUncheckedUpdateManyInput>
    /**
     * Filter which InvalidAttributeErrorData to update
     */
    where?: InvalidAttributeErrorDataWhereInput
  }


  /**
   * InvalidAttributeErrorData upsert
   */
  export type InvalidAttributeErrorDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidAttributeErrorData
     */
    select?: InvalidAttributeErrorDataSelect<ExtArgs> | null
    /**
     * The filter to search for the InvalidAttributeErrorData to update in case it exists.
     */
    where: InvalidAttributeErrorDataWhereUniqueInput
    /**
     * In case the InvalidAttributeErrorData found by the `where` argument doesn't exist, create a new InvalidAttributeErrorData with this data.
     */
    create: XOR<InvalidAttributeErrorDataCreateInput, InvalidAttributeErrorDataUncheckedCreateInput>
    /**
     * In case the InvalidAttributeErrorData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvalidAttributeErrorDataUpdateInput, InvalidAttributeErrorDataUncheckedUpdateInput>
  }


  /**
   * InvalidAttributeErrorData delete
   */
  export type InvalidAttributeErrorDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidAttributeErrorData
     */
    select?: InvalidAttributeErrorDataSelect<ExtArgs> | null
    /**
     * Filter which InvalidAttributeErrorData to delete.
     */
    where: InvalidAttributeErrorDataWhereUniqueInput
  }


  /**
   * InvalidAttributeErrorData deleteMany
   */
  export type InvalidAttributeErrorDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvalidAttributeErrorData to delete
     */
    where?: InvalidAttributeErrorDataWhereInput
  }


  /**
   * InvalidAttributeErrorData without action
   */
  export type InvalidAttributeErrorDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidAttributeErrorData
     */
    select?: InvalidAttributeErrorDataSelect<ExtArgs> | null
  }



  /**
   * Model InvalidTextErrorData
   */

  export type AggregateInvalidTextErrorData = {
    _count: InvalidTextErrorDataCountAggregateOutputType | null
    _min: InvalidTextErrorDataMinAggregateOutputType | null
    _max: InvalidTextErrorDataMaxAggregateOutputType | null
  }

  export type InvalidTextErrorDataMinAggregateOutputType = {
    id: string | null
    parentHtml: string | null
    value: string | null
  }

  export type InvalidTextErrorDataMaxAggregateOutputType = {
    id: string | null
    parentHtml: string | null
    value: string | null
  }

  export type InvalidTextErrorDataCountAggregateOutputType = {
    id: number
    parentHtml: number
    value: number
    _all: number
  }


  export type InvalidTextErrorDataMinAggregateInputType = {
    id?: true
    parentHtml?: true
    value?: true
  }

  export type InvalidTextErrorDataMaxAggregateInputType = {
    id?: true
    parentHtml?: true
    value?: true
  }

  export type InvalidTextErrorDataCountAggregateInputType = {
    id?: true
    parentHtml?: true
    value?: true
    _all?: true
  }

  export type InvalidTextErrorDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvalidTextErrorData to aggregate.
     */
    where?: InvalidTextErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvalidTextErrorData to fetch.
     */
    orderBy?: InvalidTextErrorDataOrderByWithRelationInput | InvalidTextErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvalidTextErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvalidTextErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvalidTextErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvalidTextErrorData
    **/
    _count?: true | InvalidTextErrorDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvalidTextErrorDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvalidTextErrorDataMaxAggregateInputType
  }

  export type GetInvalidTextErrorDataAggregateType<T extends InvalidTextErrorDataAggregateArgs> = {
        [P in keyof T & keyof AggregateInvalidTextErrorData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvalidTextErrorData[P]>
      : GetScalarType<T[P], AggregateInvalidTextErrorData[P]>
  }




  export type InvalidTextErrorDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvalidTextErrorDataWhereInput
    orderBy?: InvalidTextErrorDataOrderByWithAggregationInput | InvalidTextErrorDataOrderByWithAggregationInput[]
    by: InvalidTextErrorDataScalarFieldEnum[] | InvalidTextErrorDataScalarFieldEnum
    having?: InvalidTextErrorDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvalidTextErrorDataCountAggregateInputType | true
    _min?: InvalidTextErrorDataMinAggregateInputType
    _max?: InvalidTextErrorDataMaxAggregateInputType
  }

  export type InvalidTextErrorDataGroupByOutputType = {
    id: string
    parentHtml: string
    value: string
    _count: InvalidTextErrorDataCountAggregateOutputType | null
    _min: InvalidTextErrorDataMinAggregateOutputType | null
    _max: InvalidTextErrorDataMaxAggregateOutputType | null
  }

  type GetInvalidTextErrorDataGroupByPayload<T extends InvalidTextErrorDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvalidTextErrorDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvalidTextErrorDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvalidTextErrorDataGroupByOutputType[P]>
            : GetScalarType<T[P], InvalidTextErrorDataGroupByOutputType[P]>
        }
      >
    >


  export type InvalidTextErrorDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentHtml?: boolean
    value?: boolean
  }, ExtArgs["result"]["invalidTextErrorData"]>

  export type InvalidTextErrorDataSelectScalar = {
    id?: boolean
    parentHtml?: boolean
    value?: boolean
  }


  export type $InvalidTextErrorDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvalidTextErrorData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      parentHtml: string
      value: string
    }, ExtArgs["result"]["invalidTextErrorData"]>
    composites: {}
  }


  type InvalidTextErrorDataGetPayload<S extends boolean | null | undefined | InvalidTextErrorDataDefaultArgs> = $Result.GetResult<Prisma.$InvalidTextErrorDataPayload, S>

  type InvalidTextErrorDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InvalidTextErrorDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvalidTextErrorDataCountAggregateInputType | true
    }

  export interface InvalidTextErrorDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvalidTextErrorData'], meta: { name: 'InvalidTextErrorData' } }
    /**
     * Find zero or one InvalidTextErrorData that matches the filter.
     * @param {InvalidTextErrorDataFindUniqueArgs} args - Arguments to find a InvalidTextErrorData
     * @example
     * // Get one InvalidTextErrorData
     * const invalidTextErrorData = await prisma.invalidTextErrorData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InvalidTextErrorDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InvalidTextErrorDataFindUniqueArgs<ExtArgs>>
    ): Prisma__InvalidTextErrorDataClient<$Result.GetResult<Prisma.$InvalidTextErrorDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one InvalidTextErrorData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InvalidTextErrorDataFindUniqueOrThrowArgs} args - Arguments to find a InvalidTextErrorData
     * @example
     * // Get one InvalidTextErrorData
     * const invalidTextErrorData = await prisma.invalidTextErrorData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InvalidTextErrorDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InvalidTextErrorDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InvalidTextErrorDataClient<$Result.GetResult<Prisma.$InvalidTextErrorDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first InvalidTextErrorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvalidTextErrorDataFindFirstArgs} args - Arguments to find a InvalidTextErrorData
     * @example
     * // Get one InvalidTextErrorData
     * const invalidTextErrorData = await prisma.invalidTextErrorData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InvalidTextErrorDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InvalidTextErrorDataFindFirstArgs<ExtArgs>>
    ): Prisma__InvalidTextErrorDataClient<$Result.GetResult<Prisma.$InvalidTextErrorDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first InvalidTextErrorData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvalidTextErrorDataFindFirstOrThrowArgs} args - Arguments to find a InvalidTextErrorData
     * @example
     * // Get one InvalidTextErrorData
     * const invalidTextErrorData = await prisma.invalidTextErrorData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InvalidTextErrorDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InvalidTextErrorDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InvalidTextErrorDataClient<$Result.GetResult<Prisma.$InvalidTextErrorDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more InvalidTextErrorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvalidTextErrorDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvalidTextErrorData
     * const invalidTextErrorData = await prisma.invalidTextErrorData.findMany()
     * 
     * // Get first 10 InvalidTextErrorData
     * const invalidTextErrorData = await prisma.invalidTextErrorData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invalidTextErrorDataWithIdOnly = await prisma.invalidTextErrorData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InvalidTextErrorDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InvalidTextErrorDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvalidTextErrorDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a InvalidTextErrorData.
     * @param {InvalidTextErrorDataCreateArgs} args - Arguments to create a InvalidTextErrorData.
     * @example
     * // Create one InvalidTextErrorData
     * const InvalidTextErrorData = await prisma.invalidTextErrorData.create({
     *   data: {
     *     // ... data to create a InvalidTextErrorData
     *   }
     * })
     * 
    **/
    create<T extends InvalidTextErrorDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InvalidTextErrorDataCreateArgs<ExtArgs>>
    ): Prisma__InvalidTextErrorDataClient<$Result.GetResult<Prisma.$InvalidTextErrorDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many InvalidTextErrorData.
     *     @param {InvalidTextErrorDataCreateManyArgs} args - Arguments to create many InvalidTextErrorData.
     *     @example
     *     // Create many InvalidTextErrorData
     *     const invalidTextErrorData = await prisma.invalidTextErrorData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InvalidTextErrorDataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InvalidTextErrorDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InvalidTextErrorData.
     * @param {InvalidTextErrorDataDeleteArgs} args - Arguments to delete one InvalidTextErrorData.
     * @example
     * // Delete one InvalidTextErrorData
     * const InvalidTextErrorData = await prisma.invalidTextErrorData.delete({
     *   where: {
     *     // ... filter to delete one InvalidTextErrorData
     *   }
     * })
     * 
    **/
    delete<T extends InvalidTextErrorDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InvalidTextErrorDataDeleteArgs<ExtArgs>>
    ): Prisma__InvalidTextErrorDataClient<$Result.GetResult<Prisma.$InvalidTextErrorDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one InvalidTextErrorData.
     * @param {InvalidTextErrorDataUpdateArgs} args - Arguments to update one InvalidTextErrorData.
     * @example
     * // Update one InvalidTextErrorData
     * const invalidTextErrorData = await prisma.invalidTextErrorData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InvalidTextErrorDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InvalidTextErrorDataUpdateArgs<ExtArgs>>
    ): Prisma__InvalidTextErrorDataClient<$Result.GetResult<Prisma.$InvalidTextErrorDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more InvalidTextErrorData.
     * @param {InvalidTextErrorDataDeleteManyArgs} args - Arguments to filter InvalidTextErrorData to delete.
     * @example
     * // Delete a few InvalidTextErrorData
     * const { count } = await prisma.invalidTextErrorData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InvalidTextErrorDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InvalidTextErrorDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvalidTextErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvalidTextErrorDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvalidTextErrorData
     * const invalidTextErrorData = await prisma.invalidTextErrorData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InvalidTextErrorDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InvalidTextErrorDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InvalidTextErrorData.
     * @param {InvalidTextErrorDataUpsertArgs} args - Arguments to update or create a InvalidTextErrorData.
     * @example
     * // Update or create a InvalidTextErrorData
     * const invalidTextErrorData = await prisma.invalidTextErrorData.upsert({
     *   create: {
     *     // ... data to create a InvalidTextErrorData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvalidTextErrorData we want to update
     *   }
     * })
    **/
    upsert<T extends InvalidTextErrorDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InvalidTextErrorDataUpsertArgs<ExtArgs>>
    ): Prisma__InvalidTextErrorDataClient<$Result.GetResult<Prisma.$InvalidTextErrorDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of InvalidTextErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvalidTextErrorDataCountArgs} args - Arguments to filter InvalidTextErrorData to count.
     * @example
     * // Count the number of InvalidTextErrorData
     * const count = await prisma.invalidTextErrorData.count({
     *   where: {
     *     // ... the filter for the InvalidTextErrorData we want to count
     *   }
     * })
    **/
    count<T extends InvalidTextErrorDataCountArgs>(
      args?: Subset<T, InvalidTextErrorDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvalidTextErrorDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvalidTextErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvalidTextErrorDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvalidTextErrorDataAggregateArgs>(args: Subset<T, InvalidTextErrorDataAggregateArgs>): Prisma.PrismaPromise<GetInvalidTextErrorDataAggregateType<T>>

    /**
     * Group by InvalidTextErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvalidTextErrorDataGroupByArgs} args - Group by arguments.
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
      T extends InvalidTextErrorDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvalidTextErrorDataGroupByArgs['orderBy'] }
        : { orderBy?: InvalidTextErrorDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvalidTextErrorDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvalidTextErrorDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvalidTextErrorData model
   */
  readonly fields: InvalidTextErrorDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvalidTextErrorData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvalidTextErrorDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the InvalidTextErrorData model
   */ 
  interface InvalidTextErrorDataFieldRefs {
    readonly id: FieldRef<"InvalidTextErrorData", 'String'>
    readonly parentHtml: FieldRef<"InvalidTextErrorData", 'String'>
    readonly value: FieldRef<"InvalidTextErrorData", 'String'>
  }
    

  // Custom InputTypes

  /**
   * InvalidTextErrorData findUnique
   */
  export type InvalidTextErrorDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidTextErrorData
     */
    select?: InvalidTextErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which InvalidTextErrorData to fetch.
     */
    where: InvalidTextErrorDataWhereUniqueInput
  }


  /**
   * InvalidTextErrorData findUniqueOrThrow
   */
  export type InvalidTextErrorDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidTextErrorData
     */
    select?: InvalidTextErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which InvalidTextErrorData to fetch.
     */
    where: InvalidTextErrorDataWhereUniqueInput
  }


  /**
   * InvalidTextErrorData findFirst
   */
  export type InvalidTextErrorDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidTextErrorData
     */
    select?: InvalidTextErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which InvalidTextErrorData to fetch.
     */
    where?: InvalidTextErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvalidTextErrorData to fetch.
     */
    orderBy?: InvalidTextErrorDataOrderByWithRelationInput | InvalidTextErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvalidTextErrorData.
     */
    cursor?: InvalidTextErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvalidTextErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvalidTextErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvalidTextErrorData.
     */
    distinct?: InvalidTextErrorDataScalarFieldEnum | InvalidTextErrorDataScalarFieldEnum[]
  }


  /**
   * InvalidTextErrorData findFirstOrThrow
   */
  export type InvalidTextErrorDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidTextErrorData
     */
    select?: InvalidTextErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which InvalidTextErrorData to fetch.
     */
    where?: InvalidTextErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvalidTextErrorData to fetch.
     */
    orderBy?: InvalidTextErrorDataOrderByWithRelationInput | InvalidTextErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvalidTextErrorData.
     */
    cursor?: InvalidTextErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvalidTextErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvalidTextErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvalidTextErrorData.
     */
    distinct?: InvalidTextErrorDataScalarFieldEnum | InvalidTextErrorDataScalarFieldEnum[]
  }


  /**
   * InvalidTextErrorData findMany
   */
  export type InvalidTextErrorDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidTextErrorData
     */
    select?: InvalidTextErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which InvalidTextErrorData to fetch.
     */
    where?: InvalidTextErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvalidTextErrorData to fetch.
     */
    orderBy?: InvalidTextErrorDataOrderByWithRelationInput | InvalidTextErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvalidTextErrorData.
     */
    cursor?: InvalidTextErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvalidTextErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvalidTextErrorData.
     */
    skip?: number
    distinct?: InvalidTextErrorDataScalarFieldEnum | InvalidTextErrorDataScalarFieldEnum[]
  }


  /**
   * InvalidTextErrorData create
   */
  export type InvalidTextErrorDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidTextErrorData
     */
    select?: InvalidTextErrorDataSelect<ExtArgs> | null
    /**
     * The data needed to create a InvalidTextErrorData.
     */
    data: XOR<InvalidTextErrorDataCreateInput, InvalidTextErrorDataUncheckedCreateInput>
  }


  /**
   * InvalidTextErrorData createMany
   */
  export type InvalidTextErrorDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvalidTextErrorData.
     */
    data: InvalidTextErrorDataCreateManyInput | InvalidTextErrorDataCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * InvalidTextErrorData update
   */
  export type InvalidTextErrorDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidTextErrorData
     */
    select?: InvalidTextErrorDataSelect<ExtArgs> | null
    /**
     * The data needed to update a InvalidTextErrorData.
     */
    data: XOR<InvalidTextErrorDataUpdateInput, InvalidTextErrorDataUncheckedUpdateInput>
    /**
     * Choose, which InvalidTextErrorData to update.
     */
    where: InvalidTextErrorDataWhereUniqueInput
  }


  /**
   * InvalidTextErrorData updateMany
   */
  export type InvalidTextErrorDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvalidTextErrorData.
     */
    data: XOR<InvalidTextErrorDataUpdateManyMutationInput, InvalidTextErrorDataUncheckedUpdateManyInput>
    /**
     * Filter which InvalidTextErrorData to update
     */
    where?: InvalidTextErrorDataWhereInput
  }


  /**
   * InvalidTextErrorData upsert
   */
  export type InvalidTextErrorDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidTextErrorData
     */
    select?: InvalidTextErrorDataSelect<ExtArgs> | null
    /**
     * The filter to search for the InvalidTextErrorData to update in case it exists.
     */
    where: InvalidTextErrorDataWhereUniqueInput
    /**
     * In case the InvalidTextErrorData found by the `where` argument doesn't exist, create a new InvalidTextErrorData with this data.
     */
    create: XOR<InvalidTextErrorDataCreateInput, InvalidTextErrorDataUncheckedCreateInput>
    /**
     * In case the InvalidTextErrorData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvalidTextErrorDataUpdateInput, InvalidTextErrorDataUncheckedUpdateInput>
  }


  /**
   * InvalidTextErrorData delete
   */
  export type InvalidTextErrorDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidTextErrorData
     */
    select?: InvalidTextErrorDataSelect<ExtArgs> | null
    /**
     * Filter which InvalidTextErrorData to delete.
     */
    where: InvalidTextErrorDataWhereUniqueInput
  }


  /**
   * InvalidTextErrorData deleteMany
   */
  export type InvalidTextErrorDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvalidTextErrorData to delete
     */
    where?: InvalidTextErrorDataWhereInput
  }


  /**
   * InvalidTextErrorData without action
   */
  export type InvalidTextErrorDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvalidTextErrorData
     */
    select?: InvalidTextErrorDataSelect<ExtArgs> | null
  }



  /**
   * Model MissingTextErrorData
   */

  export type AggregateMissingTextErrorData = {
    _count: MissingTextErrorDataCountAggregateOutputType | null
    _min: MissingTextErrorDataMinAggregateOutputType | null
    _max: MissingTextErrorDataMaxAggregateOutputType | null
  }

  export type MissingTextErrorDataMinAggregateOutputType = {
    id: string | null
    parentHtml: string | null
  }

  export type MissingTextErrorDataMaxAggregateOutputType = {
    id: string | null
    parentHtml: string | null
  }

  export type MissingTextErrorDataCountAggregateOutputType = {
    id: number
    parentHtml: number
    _all: number
  }


  export type MissingTextErrorDataMinAggregateInputType = {
    id?: true
    parentHtml?: true
  }

  export type MissingTextErrorDataMaxAggregateInputType = {
    id?: true
    parentHtml?: true
  }

  export type MissingTextErrorDataCountAggregateInputType = {
    id?: true
    parentHtml?: true
    _all?: true
  }

  export type MissingTextErrorDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissingTextErrorData to aggregate.
     */
    where?: MissingTextErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissingTextErrorData to fetch.
     */
    orderBy?: MissingTextErrorDataOrderByWithRelationInput | MissingTextErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissingTextErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissingTextErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissingTextErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MissingTextErrorData
    **/
    _count?: true | MissingTextErrorDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissingTextErrorDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissingTextErrorDataMaxAggregateInputType
  }

  export type GetMissingTextErrorDataAggregateType<T extends MissingTextErrorDataAggregateArgs> = {
        [P in keyof T & keyof AggregateMissingTextErrorData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMissingTextErrorData[P]>
      : GetScalarType<T[P], AggregateMissingTextErrorData[P]>
  }




  export type MissingTextErrorDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissingTextErrorDataWhereInput
    orderBy?: MissingTextErrorDataOrderByWithAggregationInput | MissingTextErrorDataOrderByWithAggregationInput[]
    by: MissingTextErrorDataScalarFieldEnum[] | MissingTextErrorDataScalarFieldEnum
    having?: MissingTextErrorDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissingTextErrorDataCountAggregateInputType | true
    _min?: MissingTextErrorDataMinAggregateInputType
    _max?: MissingTextErrorDataMaxAggregateInputType
  }

  export type MissingTextErrorDataGroupByOutputType = {
    id: string
    parentHtml: string
    _count: MissingTextErrorDataCountAggregateOutputType | null
    _min: MissingTextErrorDataMinAggregateOutputType | null
    _max: MissingTextErrorDataMaxAggregateOutputType | null
  }

  type GetMissingTextErrorDataGroupByPayload<T extends MissingTextErrorDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissingTextErrorDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissingTextErrorDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissingTextErrorDataGroupByOutputType[P]>
            : GetScalarType<T[P], MissingTextErrorDataGroupByOutputType[P]>
        }
      >
    >


  export type MissingTextErrorDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentHtml?: boolean
  }, ExtArgs["result"]["missingTextErrorData"]>

  export type MissingTextErrorDataSelectScalar = {
    id?: boolean
    parentHtml?: boolean
  }


  export type $MissingTextErrorDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MissingTextErrorData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      parentHtml: string
    }, ExtArgs["result"]["missingTextErrorData"]>
    composites: {}
  }


  type MissingTextErrorDataGetPayload<S extends boolean | null | undefined | MissingTextErrorDataDefaultArgs> = $Result.GetResult<Prisma.$MissingTextErrorDataPayload, S>

  type MissingTextErrorDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MissingTextErrorDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MissingTextErrorDataCountAggregateInputType | true
    }

  export interface MissingTextErrorDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MissingTextErrorData'], meta: { name: 'MissingTextErrorData' } }
    /**
     * Find zero or one MissingTextErrorData that matches the filter.
     * @param {MissingTextErrorDataFindUniqueArgs} args - Arguments to find a MissingTextErrorData
     * @example
     * // Get one MissingTextErrorData
     * const missingTextErrorData = await prisma.missingTextErrorData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MissingTextErrorDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MissingTextErrorDataFindUniqueArgs<ExtArgs>>
    ): Prisma__MissingTextErrorDataClient<$Result.GetResult<Prisma.$MissingTextErrorDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MissingTextErrorData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MissingTextErrorDataFindUniqueOrThrowArgs} args - Arguments to find a MissingTextErrorData
     * @example
     * // Get one MissingTextErrorData
     * const missingTextErrorData = await prisma.missingTextErrorData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MissingTextErrorDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MissingTextErrorDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MissingTextErrorDataClient<$Result.GetResult<Prisma.$MissingTextErrorDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MissingTextErrorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissingTextErrorDataFindFirstArgs} args - Arguments to find a MissingTextErrorData
     * @example
     * // Get one MissingTextErrorData
     * const missingTextErrorData = await prisma.missingTextErrorData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MissingTextErrorDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MissingTextErrorDataFindFirstArgs<ExtArgs>>
    ): Prisma__MissingTextErrorDataClient<$Result.GetResult<Prisma.$MissingTextErrorDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MissingTextErrorData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissingTextErrorDataFindFirstOrThrowArgs} args - Arguments to find a MissingTextErrorData
     * @example
     * // Get one MissingTextErrorData
     * const missingTextErrorData = await prisma.missingTextErrorData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MissingTextErrorDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MissingTextErrorDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MissingTextErrorDataClient<$Result.GetResult<Prisma.$MissingTextErrorDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MissingTextErrorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissingTextErrorDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MissingTextErrorData
     * const missingTextErrorData = await prisma.missingTextErrorData.findMany()
     * 
     * // Get first 10 MissingTextErrorData
     * const missingTextErrorData = await prisma.missingTextErrorData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missingTextErrorDataWithIdOnly = await prisma.missingTextErrorData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MissingTextErrorDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MissingTextErrorDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissingTextErrorDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MissingTextErrorData.
     * @param {MissingTextErrorDataCreateArgs} args - Arguments to create a MissingTextErrorData.
     * @example
     * // Create one MissingTextErrorData
     * const MissingTextErrorData = await prisma.missingTextErrorData.create({
     *   data: {
     *     // ... data to create a MissingTextErrorData
     *   }
     * })
     * 
    **/
    create<T extends MissingTextErrorDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MissingTextErrorDataCreateArgs<ExtArgs>>
    ): Prisma__MissingTextErrorDataClient<$Result.GetResult<Prisma.$MissingTextErrorDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MissingTextErrorData.
     *     @param {MissingTextErrorDataCreateManyArgs} args - Arguments to create many MissingTextErrorData.
     *     @example
     *     // Create many MissingTextErrorData
     *     const missingTextErrorData = await prisma.missingTextErrorData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MissingTextErrorDataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MissingTextErrorDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MissingTextErrorData.
     * @param {MissingTextErrorDataDeleteArgs} args - Arguments to delete one MissingTextErrorData.
     * @example
     * // Delete one MissingTextErrorData
     * const MissingTextErrorData = await prisma.missingTextErrorData.delete({
     *   where: {
     *     // ... filter to delete one MissingTextErrorData
     *   }
     * })
     * 
    **/
    delete<T extends MissingTextErrorDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MissingTextErrorDataDeleteArgs<ExtArgs>>
    ): Prisma__MissingTextErrorDataClient<$Result.GetResult<Prisma.$MissingTextErrorDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MissingTextErrorData.
     * @param {MissingTextErrorDataUpdateArgs} args - Arguments to update one MissingTextErrorData.
     * @example
     * // Update one MissingTextErrorData
     * const missingTextErrorData = await prisma.missingTextErrorData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MissingTextErrorDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MissingTextErrorDataUpdateArgs<ExtArgs>>
    ): Prisma__MissingTextErrorDataClient<$Result.GetResult<Prisma.$MissingTextErrorDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MissingTextErrorData.
     * @param {MissingTextErrorDataDeleteManyArgs} args - Arguments to filter MissingTextErrorData to delete.
     * @example
     * // Delete a few MissingTextErrorData
     * const { count } = await prisma.missingTextErrorData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MissingTextErrorDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MissingTextErrorDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MissingTextErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissingTextErrorDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MissingTextErrorData
     * const missingTextErrorData = await prisma.missingTextErrorData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MissingTextErrorDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MissingTextErrorDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MissingTextErrorData.
     * @param {MissingTextErrorDataUpsertArgs} args - Arguments to update or create a MissingTextErrorData.
     * @example
     * // Update or create a MissingTextErrorData
     * const missingTextErrorData = await prisma.missingTextErrorData.upsert({
     *   create: {
     *     // ... data to create a MissingTextErrorData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MissingTextErrorData we want to update
     *   }
     * })
    **/
    upsert<T extends MissingTextErrorDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MissingTextErrorDataUpsertArgs<ExtArgs>>
    ): Prisma__MissingTextErrorDataClient<$Result.GetResult<Prisma.$MissingTextErrorDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MissingTextErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissingTextErrorDataCountArgs} args - Arguments to filter MissingTextErrorData to count.
     * @example
     * // Count the number of MissingTextErrorData
     * const count = await prisma.missingTextErrorData.count({
     *   where: {
     *     // ... the filter for the MissingTextErrorData we want to count
     *   }
     * })
    **/
    count<T extends MissingTextErrorDataCountArgs>(
      args?: Subset<T, MissingTextErrorDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissingTextErrorDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MissingTextErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissingTextErrorDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MissingTextErrorDataAggregateArgs>(args: Subset<T, MissingTextErrorDataAggregateArgs>): Prisma.PrismaPromise<GetMissingTextErrorDataAggregateType<T>>

    /**
     * Group by MissingTextErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissingTextErrorDataGroupByArgs} args - Group by arguments.
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
      T extends MissingTextErrorDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissingTextErrorDataGroupByArgs['orderBy'] }
        : { orderBy?: MissingTextErrorDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MissingTextErrorDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissingTextErrorDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MissingTextErrorData model
   */
  readonly fields: MissingTextErrorDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MissingTextErrorData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissingTextErrorDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MissingTextErrorData model
   */ 
  interface MissingTextErrorDataFieldRefs {
    readonly id: FieldRef<"MissingTextErrorData", 'String'>
    readonly parentHtml: FieldRef<"MissingTextErrorData", 'String'>
  }
    

  // Custom InputTypes

  /**
   * MissingTextErrorData findUnique
   */
  export type MissingTextErrorDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingTextErrorData
     */
    select?: MissingTextErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which MissingTextErrorData to fetch.
     */
    where: MissingTextErrorDataWhereUniqueInput
  }


  /**
   * MissingTextErrorData findUniqueOrThrow
   */
  export type MissingTextErrorDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingTextErrorData
     */
    select?: MissingTextErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which MissingTextErrorData to fetch.
     */
    where: MissingTextErrorDataWhereUniqueInput
  }


  /**
   * MissingTextErrorData findFirst
   */
  export type MissingTextErrorDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingTextErrorData
     */
    select?: MissingTextErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which MissingTextErrorData to fetch.
     */
    where?: MissingTextErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissingTextErrorData to fetch.
     */
    orderBy?: MissingTextErrorDataOrderByWithRelationInput | MissingTextErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissingTextErrorData.
     */
    cursor?: MissingTextErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissingTextErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissingTextErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissingTextErrorData.
     */
    distinct?: MissingTextErrorDataScalarFieldEnum | MissingTextErrorDataScalarFieldEnum[]
  }


  /**
   * MissingTextErrorData findFirstOrThrow
   */
  export type MissingTextErrorDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingTextErrorData
     */
    select?: MissingTextErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which MissingTextErrorData to fetch.
     */
    where?: MissingTextErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissingTextErrorData to fetch.
     */
    orderBy?: MissingTextErrorDataOrderByWithRelationInput | MissingTextErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissingTextErrorData.
     */
    cursor?: MissingTextErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissingTextErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissingTextErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissingTextErrorData.
     */
    distinct?: MissingTextErrorDataScalarFieldEnum | MissingTextErrorDataScalarFieldEnum[]
  }


  /**
   * MissingTextErrorData findMany
   */
  export type MissingTextErrorDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingTextErrorData
     */
    select?: MissingTextErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which MissingTextErrorData to fetch.
     */
    where?: MissingTextErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissingTextErrorData to fetch.
     */
    orderBy?: MissingTextErrorDataOrderByWithRelationInput | MissingTextErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MissingTextErrorData.
     */
    cursor?: MissingTextErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissingTextErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissingTextErrorData.
     */
    skip?: number
    distinct?: MissingTextErrorDataScalarFieldEnum | MissingTextErrorDataScalarFieldEnum[]
  }


  /**
   * MissingTextErrorData create
   */
  export type MissingTextErrorDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingTextErrorData
     */
    select?: MissingTextErrorDataSelect<ExtArgs> | null
    /**
     * The data needed to create a MissingTextErrorData.
     */
    data: XOR<MissingTextErrorDataCreateInput, MissingTextErrorDataUncheckedCreateInput>
  }


  /**
   * MissingTextErrorData createMany
   */
  export type MissingTextErrorDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MissingTextErrorData.
     */
    data: MissingTextErrorDataCreateManyInput | MissingTextErrorDataCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * MissingTextErrorData update
   */
  export type MissingTextErrorDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingTextErrorData
     */
    select?: MissingTextErrorDataSelect<ExtArgs> | null
    /**
     * The data needed to update a MissingTextErrorData.
     */
    data: XOR<MissingTextErrorDataUpdateInput, MissingTextErrorDataUncheckedUpdateInput>
    /**
     * Choose, which MissingTextErrorData to update.
     */
    where: MissingTextErrorDataWhereUniqueInput
  }


  /**
   * MissingTextErrorData updateMany
   */
  export type MissingTextErrorDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MissingTextErrorData.
     */
    data: XOR<MissingTextErrorDataUpdateManyMutationInput, MissingTextErrorDataUncheckedUpdateManyInput>
    /**
     * Filter which MissingTextErrorData to update
     */
    where?: MissingTextErrorDataWhereInput
  }


  /**
   * MissingTextErrorData upsert
   */
  export type MissingTextErrorDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingTextErrorData
     */
    select?: MissingTextErrorDataSelect<ExtArgs> | null
    /**
     * The filter to search for the MissingTextErrorData to update in case it exists.
     */
    where: MissingTextErrorDataWhereUniqueInput
    /**
     * In case the MissingTextErrorData found by the `where` argument doesn't exist, create a new MissingTextErrorData with this data.
     */
    create: XOR<MissingTextErrorDataCreateInput, MissingTextErrorDataUncheckedCreateInput>
    /**
     * In case the MissingTextErrorData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissingTextErrorDataUpdateInput, MissingTextErrorDataUncheckedUpdateInput>
  }


  /**
   * MissingTextErrorData delete
   */
  export type MissingTextErrorDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingTextErrorData
     */
    select?: MissingTextErrorDataSelect<ExtArgs> | null
    /**
     * Filter which MissingTextErrorData to delete.
     */
    where: MissingTextErrorDataWhereUniqueInput
  }


  /**
   * MissingTextErrorData deleteMany
   */
  export type MissingTextErrorDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissingTextErrorData to delete
     */
    where?: MissingTextErrorDataWhereInput
  }


  /**
   * MissingTextErrorData without action
   */
  export type MissingTextErrorDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingTextErrorData
     */
    select?: MissingTextErrorDataSelect<ExtArgs> | null
  }



  /**
   * Model NonUniqueTextErrorData
   */

  export type AggregateNonUniqueTextErrorData = {
    _count: NonUniqueTextErrorDataCountAggregateOutputType | null
    _min: NonUniqueTextErrorDataMinAggregateOutputType | null
    _max: NonUniqueTextErrorDataMaxAggregateOutputType | null
  }

  export type NonUniqueTextErrorDataMinAggregateOutputType = {
    id: string | null
    parentHtml: string | null
  }

  export type NonUniqueTextErrorDataMaxAggregateOutputType = {
    id: string | null
    parentHtml: string | null
  }

  export type NonUniqueTextErrorDataCountAggregateOutputType = {
    id: number
    parentHtml: number
    _all: number
  }


  export type NonUniqueTextErrorDataMinAggregateInputType = {
    id?: true
    parentHtml?: true
  }

  export type NonUniqueTextErrorDataMaxAggregateInputType = {
    id?: true
    parentHtml?: true
  }

  export type NonUniqueTextErrorDataCountAggregateInputType = {
    id?: true
    parentHtml?: true
    _all?: true
  }

  export type NonUniqueTextErrorDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NonUniqueTextErrorData to aggregate.
     */
    where?: NonUniqueTextErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NonUniqueTextErrorData to fetch.
     */
    orderBy?: NonUniqueTextErrorDataOrderByWithRelationInput | NonUniqueTextErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NonUniqueTextErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NonUniqueTextErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NonUniqueTextErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NonUniqueTextErrorData
    **/
    _count?: true | NonUniqueTextErrorDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NonUniqueTextErrorDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NonUniqueTextErrorDataMaxAggregateInputType
  }

  export type GetNonUniqueTextErrorDataAggregateType<T extends NonUniqueTextErrorDataAggregateArgs> = {
        [P in keyof T & keyof AggregateNonUniqueTextErrorData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNonUniqueTextErrorData[P]>
      : GetScalarType<T[P], AggregateNonUniqueTextErrorData[P]>
  }




  export type NonUniqueTextErrorDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NonUniqueTextErrorDataWhereInput
    orderBy?: NonUniqueTextErrorDataOrderByWithAggregationInput | NonUniqueTextErrorDataOrderByWithAggregationInput[]
    by: NonUniqueTextErrorDataScalarFieldEnum[] | NonUniqueTextErrorDataScalarFieldEnum
    having?: NonUniqueTextErrorDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NonUniqueTextErrorDataCountAggregateInputType | true
    _min?: NonUniqueTextErrorDataMinAggregateInputType
    _max?: NonUniqueTextErrorDataMaxAggregateInputType
  }

  export type NonUniqueTextErrorDataGroupByOutputType = {
    id: string
    parentHtml: string
    _count: NonUniqueTextErrorDataCountAggregateOutputType | null
    _min: NonUniqueTextErrorDataMinAggregateOutputType | null
    _max: NonUniqueTextErrorDataMaxAggregateOutputType | null
  }

  type GetNonUniqueTextErrorDataGroupByPayload<T extends NonUniqueTextErrorDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NonUniqueTextErrorDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NonUniqueTextErrorDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NonUniqueTextErrorDataGroupByOutputType[P]>
            : GetScalarType<T[P], NonUniqueTextErrorDataGroupByOutputType[P]>
        }
      >
    >


  export type NonUniqueTextErrorDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentHtml?: boolean
  }, ExtArgs["result"]["nonUniqueTextErrorData"]>

  export type NonUniqueTextErrorDataSelectScalar = {
    id?: boolean
    parentHtml?: boolean
  }


  export type $NonUniqueTextErrorDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NonUniqueTextErrorData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      parentHtml: string
    }, ExtArgs["result"]["nonUniqueTextErrorData"]>
    composites: {}
  }


  type NonUniqueTextErrorDataGetPayload<S extends boolean | null | undefined | NonUniqueTextErrorDataDefaultArgs> = $Result.GetResult<Prisma.$NonUniqueTextErrorDataPayload, S>

  type NonUniqueTextErrorDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NonUniqueTextErrorDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NonUniqueTextErrorDataCountAggregateInputType | true
    }

  export interface NonUniqueTextErrorDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NonUniqueTextErrorData'], meta: { name: 'NonUniqueTextErrorData' } }
    /**
     * Find zero or one NonUniqueTextErrorData that matches the filter.
     * @param {NonUniqueTextErrorDataFindUniqueArgs} args - Arguments to find a NonUniqueTextErrorData
     * @example
     * // Get one NonUniqueTextErrorData
     * const nonUniqueTextErrorData = await prisma.nonUniqueTextErrorData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NonUniqueTextErrorDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NonUniqueTextErrorDataFindUniqueArgs<ExtArgs>>
    ): Prisma__NonUniqueTextErrorDataClient<$Result.GetResult<Prisma.$NonUniqueTextErrorDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one NonUniqueTextErrorData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NonUniqueTextErrorDataFindUniqueOrThrowArgs} args - Arguments to find a NonUniqueTextErrorData
     * @example
     * // Get one NonUniqueTextErrorData
     * const nonUniqueTextErrorData = await prisma.nonUniqueTextErrorData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NonUniqueTextErrorDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NonUniqueTextErrorDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NonUniqueTextErrorDataClient<$Result.GetResult<Prisma.$NonUniqueTextErrorDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first NonUniqueTextErrorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonUniqueTextErrorDataFindFirstArgs} args - Arguments to find a NonUniqueTextErrorData
     * @example
     * // Get one NonUniqueTextErrorData
     * const nonUniqueTextErrorData = await prisma.nonUniqueTextErrorData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NonUniqueTextErrorDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NonUniqueTextErrorDataFindFirstArgs<ExtArgs>>
    ): Prisma__NonUniqueTextErrorDataClient<$Result.GetResult<Prisma.$NonUniqueTextErrorDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first NonUniqueTextErrorData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonUniqueTextErrorDataFindFirstOrThrowArgs} args - Arguments to find a NonUniqueTextErrorData
     * @example
     * // Get one NonUniqueTextErrorData
     * const nonUniqueTextErrorData = await prisma.nonUniqueTextErrorData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NonUniqueTextErrorDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NonUniqueTextErrorDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NonUniqueTextErrorDataClient<$Result.GetResult<Prisma.$NonUniqueTextErrorDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more NonUniqueTextErrorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonUniqueTextErrorDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NonUniqueTextErrorData
     * const nonUniqueTextErrorData = await prisma.nonUniqueTextErrorData.findMany()
     * 
     * // Get first 10 NonUniqueTextErrorData
     * const nonUniqueTextErrorData = await prisma.nonUniqueTextErrorData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nonUniqueTextErrorDataWithIdOnly = await prisma.nonUniqueTextErrorData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NonUniqueTextErrorDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NonUniqueTextErrorDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NonUniqueTextErrorDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a NonUniqueTextErrorData.
     * @param {NonUniqueTextErrorDataCreateArgs} args - Arguments to create a NonUniqueTextErrorData.
     * @example
     * // Create one NonUniqueTextErrorData
     * const NonUniqueTextErrorData = await prisma.nonUniqueTextErrorData.create({
     *   data: {
     *     // ... data to create a NonUniqueTextErrorData
     *   }
     * })
     * 
    **/
    create<T extends NonUniqueTextErrorDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NonUniqueTextErrorDataCreateArgs<ExtArgs>>
    ): Prisma__NonUniqueTextErrorDataClient<$Result.GetResult<Prisma.$NonUniqueTextErrorDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many NonUniqueTextErrorData.
     *     @param {NonUniqueTextErrorDataCreateManyArgs} args - Arguments to create many NonUniqueTextErrorData.
     *     @example
     *     // Create many NonUniqueTextErrorData
     *     const nonUniqueTextErrorData = await prisma.nonUniqueTextErrorData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NonUniqueTextErrorDataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NonUniqueTextErrorDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NonUniqueTextErrorData.
     * @param {NonUniqueTextErrorDataDeleteArgs} args - Arguments to delete one NonUniqueTextErrorData.
     * @example
     * // Delete one NonUniqueTextErrorData
     * const NonUniqueTextErrorData = await prisma.nonUniqueTextErrorData.delete({
     *   where: {
     *     // ... filter to delete one NonUniqueTextErrorData
     *   }
     * })
     * 
    **/
    delete<T extends NonUniqueTextErrorDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NonUniqueTextErrorDataDeleteArgs<ExtArgs>>
    ): Prisma__NonUniqueTextErrorDataClient<$Result.GetResult<Prisma.$NonUniqueTextErrorDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one NonUniqueTextErrorData.
     * @param {NonUniqueTextErrorDataUpdateArgs} args - Arguments to update one NonUniqueTextErrorData.
     * @example
     * // Update one NonUniqueTextErrorData
     * const nonUniqueTextErrorData = await prisma.nonUniqueTextErrorData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NonUniqueTextErrorDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NonUniqueTextErrorDataUpdateArgs<ExtArgs>>
    ): Prisma__NonUniqueTextErrorDataClient<$Result.GetResult<Prisma.$NonUniqueTextErrorDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more NonUniqueTextErrorData.
     * @param {NonUniqueTextErrorDataDeleteManyArgs} args - Arguments to filter NonUniqueTextErrorData to delete.
     * @example
     * // Delete a few NonUniqueTextErrorData
     * const { count } = await prisma.nonUniqueTextErrorData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NonUniqueTextErrorDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NonUniqueTextErrorDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NonUniqueTextErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonUniqueTextErrorDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NonUniqueTextErrorData
     * const nonUniqueTextErrorData = await prisma.nonUniqueTextErrorData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NonUniqueTextErrorDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NonUniqueTextErrorDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NonUniqueTextErrorData.
     * @param {NonUniqueTextErrorDataUpsertArgs} args - Arguments to update or create a NonUniqueTextErrorData.
     * @example
     * // Update or create a NonUniqueTextErrorData
     * const nonUniqueTextErrorData = await prisma.nonUniqueTextErrorData.upsert({
     *   create: {
     *     // ... data to create a NonUniqueTextErrorData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NonUniqueTextErrorData we want to update
     *   }
     * })
    **/
    upsert<T extends NonUniqueTextErrorDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NonUniqueTextErrorDataUpsertArgs<ExtArgs>>
    ): Prisma__NonUniqueTextErrorDataClient<$Result.GetResult<Prisma.$NonUniqueTextErrorDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of NonUniqueTextErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonUniqueTextErrorDataCountArgs} args - Arguments to filter NonUniqueTextErrorData to count.
     * @example
     * // Count the number of NonUniqueTextErrorData
     * const count = await prisma.nonUniqueTextErrorData.count({
     *   where: {
     *     // ... the filter for the NonUniqueTextErrorData we want to count
     *   }
     * })
    **/
    count<T extends NonUniqueTextErrorDataCountArgs>(
      args?: Subset<T, NonUniqueTextErrorDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NonUniqueTextErrorDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NonUniqueTextErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonUniqueTextErrorDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NonUniqueTextErrorDataAggregateArgs>(args: Subset<T, NonUniqueTextErrorDataAggregateArgs>): Prisma.PrismaPromise<GetNonUniqueTextErrorDataAggregateType<T>>

    /**
     * Group by NonUniqueTextErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonUniqueTextErrorDataGroupByArgs} args - Group by arguments.
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
      T extends NonUniqueTextErrorDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NonUniqueTextErrorDataGroupByArgs['orderBy'] }
        : { orderBy?: NonUniqueTextErrorDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NonUniqueTextErrorDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNonUniqueTextErrorDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NonUniqueTextErrorData model
   */
  readonly fields: NonUniqueTextErrorDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NonUniqueTextErrorData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NonUniqueTextErrorDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the NonUniqueTextErrorData model
   */ 
  interface NonUniqueTextErrorDataFieldRefs {
    readonly id: FieldRef<"NonUniqueTextErrorData", 'String'>
    readonly parentHtml: FieldRef<"NonUniqueTextErrorData", 'String'>
  }
    

  // Custom InputTypes

  /**
   * NonUniqueTextErrorData findUnique
   */
  export type NonUniqueTextErrorDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonUniqueTextErrorData
     */
    select?: NonUniqueTextErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which NonUniqueTextErrorData to fetch.
     */
    where: NonUniqueTextErrorDataWhereUniqueInput
  }


  /**
   * NonUniqueTextErrorData findUniqueOrThrow
   */
  export type NonUniqueTextErrorDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonUniqueTextErrorData
     */
    select?: NonUniqueTextErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which NonUniqueTextErrorData to fetch.
     */
    where: NonUniqueTextErrorDataWhereUniqueInput
  }


  /**
   * NonUniqueTextErrorData findFirst
   */
  export type NonUniqueTextErrorDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonUniqueTextErrorData
     */
    select?: NonUniqueTextErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which NonUniqueTextErrorData to fetch.
     */
    where?: NonUniqueTextErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NonUniqueTextErrorData to fetch.
     */
    orderBy?: NonUniqueTextErrorDataOrderByWithRelationInput | NonUniqueTextErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NonUniqueTextErrorData.
     */
    cursor?: NonUniqueTextErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NonUniqueTextErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NonUniqueTextErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NonUniqueTextErrorData.
     */
    distinct?: NonUniqueTextErrorDataScalarFieldEnum | NonUniqueTextErrorDataScalarFieldEnum[]
  }


  /**
   * NonUniqueTextErrorData findFirstOrThrow
   */
  export type NonUniqueTextErrorDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonUniqueTextErrorData
     */
    select?: NonUniqueTextErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which NonUniqueTextErrorData to fetch.
     */
    where?: NonUniqueTextErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NonUniqueTextErrorData to fetch.
     */
    orderBy?: NonUniqueTextErrorDataOrderByWithRelationInput | NonUniqueTextErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NonUniqueTextErrorData.
     */
    cursor?: NonUniqueTextErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NonUniqueTextErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NonUniqueTextErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NonUniqueTextErrorData.
     */
    distinct?: NonUniqueTextErrorDataScalarFieldEnum | NonUniqueTextErrorDataScalarFieldEnum[]
  }


  /**
   * NonUniqueTextErrorData findMany
   */
  export type NonUniqueTextErrorDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonUniqueTextErrorData
     */
    select?: NonUniqueTextErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which NonUniqueTextErrorData to fetch.
     */
    where?: NonUniqueTextErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NonUniqueTextErrorData to fetch.
     */
    orderBy?: NonUniqueTextErrorDataOrderByWithRelationInput | NonUniqueTextErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NonUniqueTextErrorData.
     */
    cursor?: NonUniqueTextErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NonUniqueTextErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NonUniqueTextErrorData.
     */
    skip?: number
    distinct?: NonUniqueTextErrorDataScalarFieldEnum | NonUniqueTextErrorDataScalarFieldEnum[]
  }


  /**
   * NonUniqueTextErrorData create
   */
  export type NonUniqueTextErrorDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonUniqueTextErrorData
     */
    select?: NonUniqueTextErrorDataSelect<ExtArgs> | null
    /**
     * The data needed to create a NonUniqueTextErrorData.
     */
    data: XOR<NonUniqueTextErrorDataCreateInput, NonUniqueTextErrorDataUncheckedCreateInput>
  }


  /**
   * NonUniqueTextErrorData createMany
   */
  export type NonUniqueTextErrorDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NonUniqueTextErrorData.
     */
    data: NonUniqueTextErrorDataCreateManyInput | NonUniqueTextErrorDataCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * NonUniqueTextErrorData update
   */
  export type NonUniqueTextErrorDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonUniqueTextErrorData
     */
    select?: NonUniqueTextErrorDataSelect<ExtArgs> | null
    /**
     * The data needed to update a NonUniqueTextErrorData.
     */
    data: XOR<NonUniqueTextErrorDataUpdateInput, NonUniqueTextErrorDataUncheckedUpdateInput>
    /**
     * Choose, which NonUniqueTextErrorData to update.
     */
    where: NonUniqueTextErrorDataWhereUniqueInput
  }


  /**
   * NonUniqueTextErrorData updateMany
   */
  export type NonUniqueTextErrorDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NonUniqueTextErrorData.
     */
    data: XOR<NonUniqueTextErrorDataUpdateManyMutationInput, NonUniqueTextErrorDataUncheckedUpdateManyInput>
    /**
     * Filter which NonUniqueTextErrorData to update
     */
    where?: NonUniqueTextErrorDataWhereInput
  }


  /**
   * NonUniqueTextErrorData upsert
   */
  export type NonUniqueTextErrorDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonUniqueTextErrorData
     */
    select?: NonUniqueTextErrorDataSelect<ExtArgs> | null
    /**
     * The filter to search for the NonUniqueTextErrorData to update in case it exists.
     */
    where: NonUniqueTextErrorDataWhereUniqueInput
    /**
     * In case the NonUniqueTextErrorData found by the `where` argument doesn't exist, create a new NonUniqueTextErrorData with this data.
     */
    create: XOR<NonUniqueTextErrorDataCreateInput, NonUniqueTextErrorDataUncheckedCreateInput>
    /**
     * In case the NonUniqueTextErrorData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NonUniqueTextErrorDataUpdateInput, NonUniqueTextErrorDataUncheckedUpdateInput>
  }


  /**
   * NonUniqueTextErrorData delete
   */
  export type NonUniqueTextErrorDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonUniqueTextErrorData
     */
    select?: NonUniqueTextErrorDataSelect<ExtArgs> | null
    /**
     * Filter which NonUniqueTextErrorData to delete.
     */
    where: NonUniqueTextErrorDataWhereUniqueInput
  }


  /**
   * NonUniqueTextErrorData deleteMany
   */
  export type NonUniqueTextErrorDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NonUniqueTextErrorData to delete
     */
    where?: NonUniqueTextErrorDataWhereInput
  }


  /**
   * NonUniqueTextErrorData without action
   */
  export type NonUniqueTextErrorDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonUniqueTextErrorData
     */
    select?: NonUniqueTextErrorDataSelect<ExtArgs> | null
  }



  /**
   * Model MissingElementErrorData
   */

  export type AggregateMissingElementErrorData = {
    _count: MissingElementErrorDataCountAggregateOutputType | null
    _min: MissingElementErrorDataMinAggregateOutputType | null
    _max: MissingElementErrorDataMaxAggregateOutputType | null
  }

  export type MissingElementErrorDataMinAggregateOutputType = {
    id: string | null
    parentHtml: string | null
    selector: string | null
  }

  export type MissingElementErrorDataMaxAggregateOutputType = {
    id: string | null
    parentHtml: string | null
    selector: string | null
  }

  export type MissingElementErrorDataCountAggregateOutputType = {
    id: number
    parentHtml: number
    selector: number
    _all: number
  }


  export type MissingElementErrorDataMinAggregateInputType = {
    id?: true
    parentHtml?: true
    selector?: true
  }

  export type MissingElementErrorDataMaxAggregateInputType = {
    id?: true
    parentHtml?: true
    selector?: true
  }

  export type MissingElementErrorDataCountAggregateInputType = {
    id?: true
    parentHtml?: true
    selector?: true
    _all?: true
  }

  export type MissingElementErrorDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissingElementErrorData to aggregate.
     */
    where?: MissingElementErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissingElementErrorData to fetch.
     */
    orderBy?: MissingElementErrorDataOrderByWithRelationInput | MissingElementErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissingElementErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissingElementErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissingElementErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MissingElementErrorData
    **/
    _count?: true | MissingElementErrorDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissingElementErrorDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissingElementErrorDataMaxAggregateInputType
  }

  export type GetMissingElementErrorDataAggregateType<T extends MissingElementErrorDataAggregateArgs> = {
        [P in keyof T & keyof AggregateMissingElementErrorData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMissingElementErrorData[P]>
      : GetScalarType<T[P], AggregateMissingElementErrorData[P]>
  }




  export type MissingElementErrorDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissingElementErrorDataWhereInput
    orderBy?: MissingElementErrorDataOrderByWithAggregationInput | MissingElementErrorDataOrderByWithAggregationInput[]
    by: MissingElementErrorDataScalarFieldEnum[] | MissingElementErrorDataScalarFieldEnum
    having?: MissingElementErrorDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissingElementErrorDataCountAggregateInputType | true
    _min?: MissingElementErrorDataMinAggregateInputType
    _max?: MissingElementErrorDataMaxAggregateInputType
  }

  export type MissingElementErrorDataGroupByOutputType = {
    id: string
    parentHtml: string | null
    selector: string
    _count: MissingElementErrorDataCountAggregateOutputType | null
    _min: MissingElementErrorDataMinAggregateOutputType | null
    _max: MissingElementErrorDataMaxAggregateOutputType | null
  }

  type GetMissingElementErrorDataGroupByPayload<T extends MissingElementErrorDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissingElementErrorDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissingElementErrorDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissingElementErrorDataGroupByOutputType[P]>
            : GetScalarType<T[P], MissingElementErrorDataGroupByOutputType[P]>
        }
      >
    >


  export type MissingElementErrorDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentHtml?: boolean
    selector?: boolean
  }, ExtArgs["result"]["missingElementErrorData"]>

  export type MissingElementErrorDataSelectScalar = {
    id?: boolean
    parentHtml?: boolean
    selector?: boolean
  }


  export type $MissingElementErrorDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MissingElementErrorData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      parentHtml: string | null
      selector: string
    }, ExtArgs["result"]["missingElementErrorData"]>
    composites: {}
  }


  type MissingElementErrorDataGetPayload<S extends boolean | null | undefined | MissingElementErrorDataDefaultArgs> = $Result.GetResult<Prisma.$MissingElementErrorDataPayload, S>

  type MissingElementErrorDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MissingElementErrorDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MissingElementErrorDataCountAggregateInputType | true
    }

  export interface MissingElementErrorDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MissingElementErrorData'], meta: { name: 'MissingElementErrorData' } }
    /**
     * Find zero or one MissingElementErrorData that matches the filter.
     * @param {MissingElementErrorDataFindUniqueArgs} args - Arguments to find a MissingElementErrorData
     * @example
     * // Get one MissingElementErrorData
     * const missingElementErrorData = await prisma.missingElementErrorData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MissingElementErrorDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MissingElementErrorDataFindUniqueArgs<ExtArgs>>
    ): Prisma__MissingElementErrorDataClient<$Result.GetResult<Prisma.$MissingElementErrorDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MissingElementErrorData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MissingElementErrorDataFindUniqueOrThrowArgs} args - Arguments to find a MissingElementErrorData
     * @example
     * // Get one MissingElementErrorData
     * const missingElementErrorData = await prisma.missingElementErrorData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MissingElementErrorDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MissingElementErrorDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MissingElementErrorDataClient<$Result.GetResult<Prisma.$MissingElementErrorDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MissingElementErrorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissingElementErrorDataFindFirstArgs} args - Arguments to find a MissingElementErrorData
     * @example
     * // Get one MissingElementErrorData
     * const missingElementErrorData = await prisma.missingElementErrorData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MissingElementErrorDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MissingElementErrorDataFindFirstArgs<ExtArgs>>
    ): Prisma__MissingElementErrorDataClient<$Result.GetResult<Prisma.$MissingElementErrorDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MissingElementErrorData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissingElementErrorDataFindFirstOrThrowArgs} args - Arguments to find a MissingElementErrorData
     * @example
     * // Get one MissingElementErrorData
     * const missingElementErrorData = await prisma.missingElementErrorData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MissingElementErrorDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MissingElementErrorDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MissingElementErrorDataClient<$Result.GetResult<Prisma.$MissingElementErrorDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MissingElementErrorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissingElementErrorDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MissingElementErrorData
     * const missingElementErrorData = await prisma.missingElementErrorData.findMany()
     * 
     * // Get first 10 MissingElementErrorData
     * const missingElementErrorData = await prisma.missingElementErrorData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missingElementErrorDataWithIdOnly = await prisma.missingElementErrorData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MissingElementErrorDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MissingElementErrorDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissingElementErrorDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MissingElementErrorData.
     * @param {MissingElementErrorDataCreateArgs} args - Arguments to create a MissingElementErrorData.
     * @example
     * // Create one MissingElementErrorData
     * const MissingElementErrorData = await prisma.missingElementErrorData.create({
     *   data: {
     *     // ... data to create a MissingElementErrorData
     *   }
     * })
     * 
    **/
    create<T extends MissingElementErrorDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MissingElementErrorDataCreateArgs<ExtArgs>>
    ): Prisma__MissingElementErrorDataClient<$Result.GetResult<Prisma.$MissingElementErrorDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MissingElementErrorData.
     *     @param {MissingElementErrorDataCreateManyArgs} args - Arguments to create many MissingElementErrorData.
     *     @example
     *     // Create many MissingElementErrorData
     *     const missingElementErrorData = await prisma.missingElementErrorData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MissingElementErrorDataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MissingElementErrorDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MissingElementErrorData.
     * @param {MissingElementErrorDataDeleteArgs} args - Arguments to delete one MissingElementErrorData.
     * @example
     * // Delete one MissingElementErrorData
     * const MissingElementErrorData = await prisma.missingElementErrorData.delete({
     *   where: {
     *     // ... filter to delete one MissingElementErrorData
     *   }
     * })
     * 
    **/
    delete<T extends MissingElementErrorDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MissingElementErrorDataDeleteArgs<ExtArgs>>
    ): Prisma__MissingElementErrorDataClient<$Result.GetResult<Prisma.$MissingElementErrorDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MissingElementErrorData.
     * @param {MissingElementErrorDataUpdateArgs} args - Arguments to update one MissingElementErrorData.
     * @example
     * // Update one MissingElementErrorData
     * const missingElementErrorData = await prisma.missingElementErrorData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MissingElementErrorDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MissingElementErrorDataUpdateArgs<ExtArgs>>
    ): Prisma__MissingElementErrorDataClient<$Result.GetResult<Prisma.$MissingElementErrorDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MissingElementErrorData.
     * @param {MissingElementErrorDataDeleteManyArgs} args - Arguments to filter MissingElementErrorData to delete.
     * @example
     * // Delete a few MissingElementErrorData
     * const { count } = await prisma.missingElementErrorData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MissingElementErrorDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MissingElementErrorDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MissingElementErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissingElementErrorDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MissingElementErrorData
     * const missingElementErrorData = await prisma.missingElementErrorData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MissingElementErrorDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MissingElementErrorDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MissingElementErrorData.
     * @param {MissingElementErrorDataUpsertArgs} args - Arguments to update or create a MissingElementErrorData.
     * @example
     * // Update or create a MissingElementErrorData
     * const missingElementErrorData = await prisma.missingElementErrorData.upsert({
     *   create: {
     *     // ... data to create a MissingElementErrorData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MissingElementErrorData we want to update
     *   }
     * })
    **/
    upsert<T extends MissingElementErrorDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MissingElementErrorDataUpsertArgs<ExtArgs>>
    ): Prisma__MissingElementErrorDataClient<$Result.GetResult<Prisma.$MissingElementErrorDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MissingElementErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissingElementErrorDataCountArgs} args - Arguments to filter MissingElementErrorData to count.
     * @example
     * // Count the number of MissingElementErrorData
     * const count = await prisma.missingElementErrorData.count({
     *   where: {
     *     // ... the filter for the MissingElementErrorData we want to count
     *   }
     * })
    **/
    count<T extends MissingElementErrorDataCountArgs>(
      args?: Subset<T, MissingElementErrorDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissingElementErrorDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MissingElementErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissingElementErrorDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MissingElementErrorDataAggregateArgs>(args: Subset<T, MissingElementErrorDataAggregateArgs>): Prisma.PrismaPromise<GetMissingElementErrorDataAggregateType<T>>

    /**
     * Group by MissingElementErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissingElementErrorDataGroupByArgs} args - Group by arguments.
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
      T extends MissingElementErrorDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissingElementErrorDataGroupByArgs['orderBy'] }
        : { orderBy?: MissingElementErrorDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MissingElementErrorDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissingElementErrorDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MissingElementErrorData model
   */
  readonly fields: MissingElementErrorDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MissingElementErrorData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissingElementErrorDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MissingElementErrorData model
   */ 
  interface MissingElementErrorDataFieldRefs {
    readonly id: FieldRef<"MissingElementErrorData", 'String'>
    readonly parentHtml: FieldRef<"MissingElementErrorData", 'String'>
    readonly selector: FieldRef<"MissingElementErrorData", 'String'>
  }
    

  // Custom InputTypes

  /**
   * MissingElementErrorData findUnique
   */
  export type MissingElementErrorDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingElementErrorData
     */
    select?: MissingElementErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which MissingElementErrorData to fetch.
     */
    where: MissingElementErrorDataWhereUniqueInput
  }


  /**
   * MissingElementErrorData findUniqueOrThrow
   */
  export type MissingElementErrorDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingElementErrorData
     */
    select?: MissingElementErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which MissingElementErrorData to fetch.
     */
    where: MissingElementErrorDataWhereUniqueInput
  }


  /**
   * MissingElementErrorData findFirst
   */
  export type MissingElementErrorDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingElementErrorData
     */
    select?: MissingElementErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which MissingElementErrorData to fetch.
     */
    where?: MissingElementErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissingElementErrorData to fetch.
     */
    orderBy?: MissingElementErrorDataOrderByWithRelationInput | MissingElementErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissingElementErrorData.
     */
    cursor?: MissingElementErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissingElementErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissingElementErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissingElementErrorData.
     */
    distinct?: MissingElementErrorDataScalarFieldEnum | MissingElementErrorDataScalarFieldEnum[]
  }


  /**
   * MissingElementErrorData findFirstOrThrow
   */
  export type MissingElementErrorDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingElementErrorData
     */
    select?: MissingElementErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which MissingElementErrorData to fetch.
     */
    where?: MissingElementErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissingElementErrorData to fetch.
     */
    orderBy?: MissingElementErrorDataOrderByWithRelationInput | MissingElementErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissingElementErrorData.
     */
    cursor?: MissingElementErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissingElementErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissingElementErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissingElementErrorData.
     */
    distinct?: MissingElementErrorDataScalarFieldEnum | MissingElementErrorDataScalarFieldEnum[]
  }


  /**
   * MissingElementErrorData findMany
   */
  export type MissingElementErrorDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingElementErrorData
     */
    select?: MissingElementErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which MissingElementErrorData to fetch.
     */
    where?: MissingElementErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissingElementErrorData to fetch.
     */
    orderBy?: MissingElementErrorDataOrderByWithRelationInput | MissingElementErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MissingElementErrorData.
     */
    cursor?: MissingElementErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissingElementErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissingElementErrorData.
     */
    skip?: number
    distinct?: MissingElementErrorDataScalarFieldEnum | MissingElementErrorDataScalarFieldEnum[]
  }


  /**
   * MissingElementErrorData create
   */
  export type MissingElementErrorDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingElementErrorData
     */
    select?: MissingElementErrorDataSelect<ExtArgs> | null
    /**
     * The data needed to create a MissingElementErrorData.
     */
    data: XOR<MissingElementErrorDataCreateInput, MissingElementErrorDataUncheckedCreateInput>
  }


  /**
   * MissingElementErrorData createMany
   */
  export type MissingElementErrorDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MissingElementErrorData.
     */
    data: MissingElementErrorDataCreateManyInput | MissingElementErrorDataCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * MissingElementErrorData update
   */
  export type MissingElementErrorDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingElementErrorData
     */
    select?: MissingElementErrorDataSelect<ExtArgs> | null
    /**
     * The data needed to update a MissingElementErrorData.
     */
    data: XOR<MissingElementErrorDataUpdateInput, MissingElementErrorDataUncheckedUpdateInput>
    /**
     * Choose, which MissingElementErrorData to update.
     */
    where: MissingElementErrorDataWhereUniqueInput
  }


  /**
   * MissingElementErrorData updateMany
   */
  export type MissingElementErrorDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MissingElementErrorData.
     */
    data: XOR<MissingElementErrorDataUpdateManyMutationInput, MissingElementErrorDataUncheckedUpdateManyInput>
    /**
     * Filter which MissingElementErrorData to update
     */
    where?: MissingElementErrorDataWhereInput
  }


  /**
   * MissingElementErrorData upsert
   */
  export type MissingElementErrorDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingElementErrorData
     */
    select?: MissingElementErrorDataSelect<ExtArgs> | null
    /**
     * The filter to search for the MissingElementErrorData to update in case it exists.
     */
    where: MissingElementErrorDataWhereUniqueInput
    /**
     * In case the MissingElementErrorData found by the `where` argument doesn't exist, create a new MissingElementErrorData with this data.
     */
    create: XOR<MissingElementErrorDataCreateInput, MissingElementErrorDataUncheckedCreateInput>
    /**
     * In case the MissingElementErrorData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissingElementErrorDataUpdateInput, MissingElementErrorDataUncheckedUpdateInput>
  }


  /**
   * MissingElementErrorData delete
   */
  export type MissingElementErrorDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingElementErrorData
     */
    select?: MissingElementErrorDataSelect<ExtArgs> | null
    /**
     * Filter which MissingElementErrorData to delete.
     */
    where: MissingElementErrorDataWhereUniqueInput
  }


  /**
   * MissingElementErrorData deleteMany
   */
  export type MissingElementErrorDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissingElementErrorData to delete
     */
    where?: MissingElementErrorDataWhereInput
  }


  /**
   * MissingElementErrorData without action
   */
  export type MissingElementErrorDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissingElementErrorData
     */
    select?: MissingElementErrorDataSelect<ExtArgs> | null
  }



  /**
   * Model NonUniqueElementErrorData
   */

  export type AggregateNonUniqueElementErrorData = {
    _count: NonUniqueElementErrorDataCountAggregateOutputType | null
    _min: NonUniqueElementErrorDataMinAggregateOutputType | null
    _max: NonUniqueElementErrorDataMaxAggregateOutputType | null
  }

  export type NonUniqueElementErrorDataMinAggregateOutputType = {
    id: string | null
    parentHtml: string | null
    selector: string | null
  }

  export type NonUniqueElementErrorDataMaxAggregateOutputType = {
    id: string | null
    parentHtml: string | null
    selector: string | null
  }

  export type NonUniqueElementErrorDataCountAggregateOutputType = {
    id: number
    parentHtml: number
    selector: number
    _all: number
  }


  export type NonUniqueElementErrorDataMinAggregateInputType = {
    id?: true
    parentHtml?: true
    selector?: true
  }

  export type NonUniqueElementErrorDataMaxAggregateInputType = {
    id?: true
    parentHtml?: true
    selector?: true
  }

  export type NonUniqueElementErrorDataCountAggregateInputType = {
    id?: true
    parentHtml?: true
    selector?: true
    _all?: true
  }

  export type NonUniqueElementErrorDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NonUniqueElementErrorData to aggregate.
     */
    where?: NonUniqueElementErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NonUniqueElementErrorData to fetch.
     */
    orderBy?: NonUniqueElementErrorDataOrderByWithRelationInput | NonUniqueElementErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NonUniqueElementErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NonUniqueElementErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NonUniqueElementErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NonUniqueElementErrorData
    **/
    _count?: true | NonUniqueElementErrorDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NonUniqueElementErrorDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NonUniqueElementErrorDataMaxAggregateInputType
  }

  export type GetNonUniqueElementErrorDataAggregateType<T extends NonUniqueElementErrorDataAggregateArgs> = {
        [P in keyof T & keyof AggregateNonUniqueElementErrorData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNonUniqueElementErrorData[P]>
      : GetScalarType<T[P], AggregateNonUniqueElementErrorData[P]>
  }




  export type NonUniqueElementErrorDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NonUniqueElementErrorDataWhereInput
    orderBy?: NonUniqueElementErrorDataOrderByWithAggregationInput | NonUniqueElementErrorDataOrderByWithAggregationInput[]
    by: NonUniqueElementErrorDataScalarFieldEnum[] | NonUniqueElementErrorDataScalarFieldEnum
    having?: NonUniqueElementErrorDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NonUniqueElementErrorDataCountAggregateInputType | true
    _min?: NonUniqueElementErrorDataMinAggregateInputType
    _max?: NonUniqueElementErrorDataMaxAggregateInputType
  }

  export type NonUniqueElementErrorDataGroupByOutputType = {
    id: string
    parentHtml: string | null
    selector: string
    _count: NonUniqueElementErrorDataCountAggregateOutputType | null
    _min: NonUniqueElementErrorDataMinAggregateOutputType | null
    _max: NonUniqueElementErrorDataMaxAggregateOutputType | null
  }

  type GetNonUniqueElementErrorDataGroupByPayload<T extends NonUniqueElementErrorDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NonUniqueElementErrorDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NonUniqueElementErrorDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NonUniqueElementErrorDataGroupByOutputType[P]>
            : GetScalarType<T[P], NonUniqueElementErrorDataGroupByOutputType[P]>
        }
      >
    >


  export type NonUniqueElementErrorDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentHtml?: boolean
    selector?: boolean
  }, ExtArgs["result"]["nonUniqueElementErrorData"]>

  export type NonUniqueElementErrorDataSelectScalar = {
    id?: boolean
    parentHtml?: boolean
    selector?: boolean
  }


  export type $NonUniqueElementErrorDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NonUniqueElementErrorData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      parentHtml: string | null
      selector: string
    }, ExtArgs["result"]["nonUniqueElementErrorData"]>
    composites: {}
  }


  type NonUniqueElementErrorDataGetPayload<S extends boolean | null | undefined | NonUniqueElementErrorDataDefaultArgs> = $Result.GetResult<Prisma.$NonUniqueElementErrorDataPayload, S>

  type NonUniqueElementErrorDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NonUniqueElementErrorDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NonUniqueElementErrorDataCountAggregateInputType | true
    }

  export interface NonUniqueElementErrorDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NonUniqueElementErrorData'], meta: { name: 'NonUniqueElementErrorData' } }
    /**
     * Find zero or one NonUniqueElementErrorData that matches the filter.
     * @param {NonUniqueElementErrorDataFindUniqueArgs} args - Arguments to find a NonUniqueElementErrorData
     * @example
     * // Get one NonUniqueElementErrorData
     * const nonUniqueElementErrorData = await prisma.nonUniqueElementErrorData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NonUniqueElementErrorDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NonUniqueElementErrorDataFindUniqueArgs<ExtArgs>>
    ): Prisma__NonUniqueElementErrorDataClient<$Result.GetResult<Prisma.$NonUniqueElementErrorDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one NonUniqueElementErrorData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NonUniqueElementErrorDataFindUniqueOrThrowArgs} args - Arguments to find a NonUniqueElementErrorData
     * @example
     * // Get one NonUniqueElementErrorData
     * const nonUniqueElementErrorData = await prisma.nonUniqueElementErrorData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NonUniqueElementErrorDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NonUniqueElementErrorDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NonUniqueElementErrorDataClient<$Result.GetResult<Prisma.$NonUniqueElementErrorDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first NonUniqueElementErrorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonUniqueElementErrorDataFindFirstArgs} args - Arguments to find a NonUniqueElementErrorData
     * @example
     * // Get one NonUniqueElementErrorData
     * const nonUniqueElementErrorData = await prisma.nonUniqueElementErrorData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NonUniqueElementErrorDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NonUniqueElementErrorDataFindFirstArgs<ExtArgs>>
    ): Prisma__NonUniqueElementErrorDataClient<$Result.GetResult<Prisma.$NonUniqueElementErrorDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first NonUniqueElementErrorData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonUniqueElementErrorDataFindFirstOrThrowArgs} args - Arguments to find a NonUniqueElementErrorData
     * @example
     * // Get one NonUniqueElementErrorData
     * const nonUniqueElementErrorData = await prisma.nonUniqueElementErrorData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NonUniqueElementErrorDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NonUniqueElementErrorDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NonUniqueElementErrorDataClient<$Result.GetResult<Prisma.$NonUniqueElementErrorDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more NonUniqueElementErrorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonUniqueElementErrorDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NonUniqueElementErrorData
     * const nonUniqueElementErrorData = await prisma.nonUniqueElementErrorData.findMany()
     * 
     * // Get first 10 NonUniqueElementErrorData
     * const nonUniqueElementErrorData = await prisma.nonUniqueElementErrorData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nonUniqueElementErrorDataWithIdOnly = await prisma.nonUniqueElementErrorData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NonUniqueElementErrorDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NonUniqueElementErrorDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NonUniqueElementErrorDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a NonUniqueElementErrorData.
     * @param {NonUniqueElementErrorDataCreateArgs} args - Arguments to create a NonUniqueElementErrorData.
     * @example
     * // Create one NonUniqueElementErrorData
     * const NonUniqueElementErrorData = await prisma.nonUniqueElementErrorData.create({
     *   data: {
     *     // ... data to create a NonUniqueElementErrorData
     *   }
     * })
     * 
    **/
    create<T extends NonUniqueElementErrorDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NonUniqueElementErrorDataCreateArgs<ExtArgs>>
    ): Prisma__NonUniqueElementErrorDataClient<$Result.GetResult<Prisma.$NonUniqueElementErrorDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many NonUniqueElementErrorData.
     *     @param {NonUniqueElementErrorDataCreateManyArgs} args - Arguments to create many NonUniqueElementErrorData.
     *     @example
     *     // Create many NonUniqueElementErrorData
     *     const nonUniqueElementErrorData = await prisma.nonUniqueElementErrorData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NonUniqueElementErrorDataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NonUniqueElementErrorDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NonUniqueElementErrorData.
     * @param {NonUniqueElementErrorDataDeleteArgs} args - Arguments to delete one NonUniqueElementErrorData.
     * @example
     * // Delete one NonUniqueElementErrorData
     * const NonUniqueElementErrorData = await prisma.nonUniqueElementErrorData.delete({
     *   where: {
     *     // ... filter to delete one NonUniqueElementErrorData
     *   }
     * })
     * 
    **/
    delete<T extends NonUniqueElementErrorDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NonUniqueElementErrorDataDeleteArgs<ExtArgs>>
    ): Prisma__NonUniqueElementErrorDataClient<$Result.GetResult<Prisma.$NonUniqueElementErrorDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one NonUniqueElementErrorData.
     * @param {NonUniqueElementErrorDataUpdateArgs} args - Arguments to update one NonUniqueElementErrorData.
     * @example
     * // Update one NonUniqueElementErrorData
     * const nonUniqueElementErrorData = await prisma.nonUniqueElementErrorData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NonUniqueElementErrorDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NonUniqueElementErrorDataUpdateArgs<ExtArgs>>
    ): Prisma__NonUniqueElementErrorDataClient<$Result.GetResult<Prisma.$NonUniqueElementErrorDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more NonUniqueElementErrorData.
     * @param {NonUniqueElementErrorDataDeleteManyArgs} args - Arguments to filter NonUniqueElementErrorData to delete.
     * @example
     * // Delete a few NonUniqueElementErrorData
     * const { count } = await prisma.nonUniqueElementErrorData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NonUniqueElementErrorDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NonUniqueElementErrorDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NonUniqueElementErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonUniqueElementErrorDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NonUniqueElementErrorData
     * const nonUniqueElementErrorData = await prisma.nonUniqueElementErrorData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NonUniqueElementErrorDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NonUniqueElementErrorDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NonUniqueElementErrorData.
     * @param {NonUniqueElementErrorDataUpsertArgs} args - Arguments to update or create a NonUniqueElementErrorData.
     * @example
     * // Update or create a NonUniqueElementErrorData
     * const nonUniqueElementErrorData = await prisma.nonUniqueElementErrorData.upsert({
     *   create: {
     *     // ... data to create a NonUniqueElementErrorData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NonUniqueElementErrorData we want to update
     *   }
     * })
    **/
    upsert<T extends NonUniqueElementErrorDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NonUniqueElementErrorDataUpsertArgs<ExtArgs>>
    ): Prisma__NonUniqueElementErrorDataClient<$Result.GetResult<Prisma.$NonUniqueElementErrorDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of NonUniqueElementErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonUniqueElementErrorDataCountArgs} args - Arguments to filter NonUniqueElementErrorData to count.
     * @example
     * // Count the number of NonUniqueElementErrorData
     * const count = await prisma.nonUniqueElementErrorData.count({
     *   where: {
     *     // ... the filter for the NonUniqueElementErrorData we want to count
     *   }
     * })
    **/
    count<T extends NonUniqueElementErrorDataCountArgs>(
      args?: Subset<T, NonUniqueElementErrorDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NonUniqueElementErrorDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NonUniqueElementErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonUniqueElementErrorDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NonUniqueElementErrorDataAggregateArgs>(args: Subset<T, NonUniqueElementErrorDataAggregateArgs>): Prisma.PrismaPromise<GetNonUniqueElementErrorDataAggregateType<T>>

    /**
     * Group by NonUniqueElementErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonUniqueElementErrorDataGroupByArgs} args - Group by arguments.
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
      T extends NonUniqueElementErrorDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NonUniqueElementErrorDataGroupByArgs['orderBy'] }
        : { orderBy?: NonUniqueElementErrorDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NonUniqueElementErrorDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNonUniqueElementErrorDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NonUniqueElementErrorData model
   */
  readonly fields: NonUniqueElementErrorDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NonUniqueElementErrorData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NonUniqueElementErrorDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the NonUniqueElementErrorData model
   */ 
  interface NonUniqueElementErrorDataFieldRefs {
    readonly id: FieldRef<"NonUniqueElementErrorData", 'String'>
    readonly parentHtml: FieldRef<"NonUniqueElementErrorData", 'String'>
    readonly selector: FieldRef<"NonUniqueElementErrorData", 'String'>
  }
    

  // Custom InputTypes

  /**
   * NonUniqueElementErrorData findUnique
   */
  export type NonUniqueElementErrorDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonUniqueElementErrorData
     */
    select?: NonUniqueElementErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which NonUniqueElementErrorData to fetch.
     */
    where: NonUniqueElementErrorDataWhereUniqueInput
  }


  /**
   * NonUniqueElementErrorData findUniqueOrThrow
   */
  export type NonUniqueElementErrorDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonUniqueElementErrorData
     */
    select?: NonUniqueElementErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which NonUniqueElementErrorData to fetch.
     */
    where: NonUniqueElementErrorDataWhereUniqueInput
  }


  /**
   * NonUniqueElementErrorData findFirst
   */
  export type NonUniqueElementErrorDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonUniqueElementErrorData
     */
    select?: NonUniqueElementErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which NonUniqueElementErrorData to fetch.
     */
    where?: NonUniqueElementErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NonUniqueElementErrorData to fetch.
     */
    orderBy?: NonUniqueElementErrorDataOrderByWithRelationInput | NonUniqueElementErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NonUniqueElementErrorData.
     */
    cursor?: NonUniqueElementErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NonUniqueElementErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NonUniqueElementErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NonUniqueElementErrorData.
     */
    distinct?: NonUniqueElementErrorDataScalarFieldEnum | NonUniqueElementErrorDataScalarFieldEnum[]
  }


  /**
   * NonUniqueElementErrorData findFirstOrThrow
   */
  export type NonUniqueElementErrorDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonUniqueElementErrorData
     */
    select?: NonUniqueElementErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which NonUniqueElementErrorData to fetch.
     */
    where?: NonUniqueElementErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NonUniqueElementErrorData to fetch.
     */
    orderBy?: NonUniqueElementErrorDataOrderByWithRelationInput | NonUniqueElementErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NonUniqueElementErrorData.
     */
    cursor?: NonUniqueElementErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NonUniqueElementErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NonUniqueElementErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NonUniqueElementErrorData.
     */
    distinct?: NonUniqueElementErrorDataScalarFieldEnum | NonUniqueElementErrorDataScalarFieldEnum[]
  }


  /**
   * NonUniqueElementErrorData findMany
   */
  export type NonUniqueElementErrorDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonUniqueElementErrorData
     */
    select?: NonUniqueElementErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which NonUniqueElementErrorData to fetch.
     */
    where?: NonUniqueElementErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NonUniqueElementErrorData to fetch.
     */
    orderBy?: NonUniqueElementErrorDataOrderByWithRelationInput | NonUniqueElementErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NonUniqueElementErrorData.
     */
    cursor?: NonUniqueElementErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NonUniqueElementErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NonUniqueElementErrorData.
     */
    skip?: number
    distinct?: NonUniqueElementErrorDataScalarFieldEnum | NonUniqueElementErrorDataScalarFieldEnum[]
  }


  /**
   * NonUniqueElementErrorData create
   */
  export type NonUniqueElementErrorDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonUniqueElementErrorData
     */
    select?: NonUniqueElementErrorDataSelect<ExtArgs> | null
    /**
     * The data needed to create a NonUniqueElementErrorData.
     */
    data: XOR<NonUniqueElementErrorDataCreateInput, NonUniqueElementErrorDataUncheckedCreateInput>
  }


  /**
   * NonUniqueElementErrorData createMany
   */
  export type NonUniqueElementErrorDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NonUniqueElementErrorData.
     */
    data: NonUniqueElementErrorDataCreateManyInput | NonUniqueElementErrorDataCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * NonUniqueElementErrorData update
   */
  export type NonUniqueElementErrorDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonUniqueElementErrorData
     */
    select?: NonUniqueElementErrorDataSelect<ExtArgs> | null
    /**
     * The data needed to update a NonUniqueElementErrorData.
     */
    data: XOR<NonUniqueElementErrorDataUpdateInput, NonUniqueElementErrorDataUncheckedUpdateInput>
    /**
     * Choose, which NonUniqueElementErrorData to update.
     */
    where: NonUniqueElementErrorDataWhereUniqueInput
  }


  /**
   * NonUniqueElementErrorData updateMany
   */
  export type NonUniqueElementErrorDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NonUniqueElementErrorData.
     */
    data: XOR<NonUniqueElementErrorDataUpdateManyMutationInput, NonUniqueElementErrorDataUncheckedUpdateManyInput>
    /**
     * Filter which NonUniqueElementErrorData to update
     */
    where?: NonUniqueElementErrorDataWhereInput
  }


  /**
   * NonUniqueElementErrorData upsert
   */
  export type NonUniqueElementErrorDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonUniqueElementErrorData
     */
    select?: NonUniqueElementErrorDataSelect<ExtArgs> | null
    /**
     * The filter to search for the NonUniqueElementErrorData to update in case it exists.
     */
    where: NonUniqueElementErrorDataWhereUniqueInput
    /**
     * In case the NonUniqueElementErrorData found by the `where` argument doesn't exist, create a new NonUniqueElementErrorData with this data.
     */
    create: XOR<NonUniqueElementErrorDataCreateInput, NonUniqueElementErrorDataUncheckedCreateInput>
    /**
     * In case the NonUniqueElementErrorData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NonUniqueElementErrorDataUpdateInput, NonUniqueElementErrorDataUncheckedUpdateInput>
  }


  /**
   * NonUniqueElementErrorData delete
   */
  export type NonUniqueElementErrorDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonUniqueElementErrorData
     */
    select?: NonUniqueElementErrorDataSelect<ExtArgs> | null
    /**
     * Filter which NonUniqueElementErrorData to delete.
     */
    where: NonUniqueElementErrorDataWhereUniqueInput
  }


  /**
   * NonUniqueElementErrorData deleteMany
   */
  export type NonUniqueElementErrorDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NonUniqueElementErrorData to delete
     */
    where?: NonUniqueElementErrorDataWhereInput
  }


  /**
   * NonUniqueElementErrorData without action
   */
  export type NonUniqueElementErrorDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonUniqueElementErrorData
     */
    select?: NonUniqueElementErrorDataSelect<ExtArgs> | null
  }



  /**
   * Model ScrapingErrorRecord
   */

  export type AggregateScrapingErrorRecord = {
    _count: ScrapingErrorRecordCountAggregateOutputType | null
    _min: ScrapingErrorRecordMinAggregateOutputType | null
    _max: ScrapingErrorRecordMaxAggregateOutputType | null
  }

  export type ScrapingErrorRecordMinAggregateOutputType = {
    id: string | null
    errorId: string | null
    errorCode: $Enums.ScrapingErrorCode | null
  }

  export type ScrapingErrorRecordMaxAggregateOutputType = {
    id: string | null
    errorId: string | null
    errorCode: $Enums.ScrapingErrorCode | null
  }

  export type ScrapingErrorRecordCountAggregateOutputType = {
    id: number
    errorId: number
    errorCode: number
    _all: number
  }


  export type ScrapingErrorRecordMinAggregateInputType = {
    id?: true
    errorId?: true
    errorCode?: true
  }

  export type ScrapingErrorRecordMaxAggregateInputType = {
    id?: true
    errorId?: true
    errorCode?: true
  }

  export type ScrapingErrorRecordCountAggregateInputType = {
    id?: true
    errorId?: true
    errorCode?: true
    _all?: true
  }

  export type ScrapingErrorRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScrapingErrorRecord to aggregate.
     */
    where?: ScrapingErrorRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapingErrorRecords to fetch.
     */
    orderBy?: ScrapingErrorRecordOrderByWithRelationInput | ScrapingErrorRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScrapingErrorRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapingErrorRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapingErrorRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScrapingErrorRecords
    **/
    _count?: true | ScrapingErrorRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScrapingErrorRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScrapingErrorRecordMaxAggregateInputType
  }

  export type GetScrapingErrorRecordAggregateType<T extends ScrapingErrorRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateScrapingErrorRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScrapingErrorRecord[P]>
      : GetScalarType<T[P], AggregateScrapingErrorRecord[P]>
  }




  export type ScrapingErrorRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScrapingErrorRecordWhereInput
    orderBy?: ScrapingErrorRecordOrderByWithAggregationInput | ScrapingErrorRecordOrderByWithAggregationInput[]
    by: ScrapingErrorRecordScalarFieldEnum[] | ScrapingErrorRecordScalarFieldEnum
    having?: ScrapingErrorRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScrapingErrorRecordCountAggregateInputType | true
    _min?: ScrapingErrorRecordMinAggregateInputType
    _max?: ScrapingErrorRecordMaxAggregateInputType
  }

  export type ScrapingErrorRecordGroupByOutputType = {
    id: string
    errorId: string
    errorCode: $Enums.ScrapingErrorCode
    _count: ScrapingErrorRecordCountAggregateOutputType | null
    _min: ScrapingErrorRecordMinAggregateOutputType | null
    _max: ScrapingErrorRecordMaxAggregateOutputType | null
  }

  type GetScrapingErrorRecordGroupByPayload<T extends ScrapingErrorRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScrapingErrorRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScrapingErrorRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScrapingErrorRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ScrapingErrorRecordGroupByOutputType[P]>
        }
      >
    >


  export type ScrapingErrorRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    errorId?: boolean
    errorCode?: boolean
  }, ExtArgs["result"]["scrapingErrorRecord"]>

  export type ScrapingErrorRecordSelectScalar = {
    id?: boolean
    errorId?: boolean
    errorCode?: boolean
  }


  export type $ScrapingErrorRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScrapingErrorRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      errorId: string
      errorCode: $Enums.ScrapingErrorCode
    }, ExtArgs["result"]["scrapingErrorRecord"]>
    composites: {}
  }


  type ScrapingErrorRecordGetPayload<S extends boolean | null | undefined | ScrapingErrorRecordDefaultArgs> = $Result.GetResult<Prisma.$ScrapingErrorRecordPayload, S>

  type ScrapingErrorRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ScrapingErrorRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ScrapingErrorRecordCountAggregateInputType | true
    }

  export interface ScrapingErrorRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScrapingErrorRecord'], meta: { name: 'ScrapingErrorRecord' } }
    /**
     * Find zero or one ScrapingErrorRecord that matches the filter.
     * @param {ScrapingErrorRecordFindUniqueArgs} args - Arguments to find a ScrapingErrorRecord
     * @example
     * // Get one ScrapingErrorRecord
     * const scrapingErrorRecord = await prisma.scrapingErrorRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ScrapingErrorRecordFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ScrapingErrorRecordFindUniqueArgs<ExtArgs>>
    ): Prisma__ScrapingErrorRecordClient<$Result.GetResult<Prisma.$ScrapingErrorRecordPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ScrapingErrorRecord that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ScrapingErrorRecordFindUniqueOrThrowArgs} args - Arguments to find a ScrapingErrorRecord
     * @example
     * // Get one ScrapingErrorRecord
     * const scrapingErrorRecord = await prisma.scrapingErrorRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ScrapingErrorRecordFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ScrapingErrorRecordFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ScrapingErrorRecordClient<$Result.GetResult<Prisma.$ScrapingErrorRecordPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ScrapingErrorRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapingErrorRecordFindFirstArgs} args - Arguments to find a ScrapingErrorRecord
     * @example
     * // Get one ScrapingErrorRecord
     * const scrapingErrorRecord = await prisma.scrapingErrorRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ScrapingErrorRecordFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ScrapingErrorRecordFindFirstArgs<ExtArgs>>
    ): Prisma__ScrapingErrorRecordClient<$Result.GetResult<Prisma.$ScrapingErrorRecordPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ScrapingErrorRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapingErrorRecordFindFirstOrThrowArgs} args - Arguments to find a ScrapingErrorRecord
     * @example
     * // Get one ScrapingErrorRecord
     * const scrapingErrorRecord = await prisma.scrapingErrorRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ScrapingErrorRecordFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ScrapingErrorRecordFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ScrapingErrorRecordClient<$Result.GetResult<Prisma.$ScrapingErrorRecordPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ScrapingErrorRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapingErrorRecordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScrapingErrorRecords
     * const scrapingErrorRecords = await prisma.scrapingErrorRecord.findMany()
     * 
     * // Get first 10 ScrapingErrorRecords
     * const scrapingErrorRecords = await prisma.scrapingErrorRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scrapingErrorRecordWithIdOnly = await prisma.scrapingErrorRecord.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ScrapingErrorRecordFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScrapingErrorRecordFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapingErrorRecordPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ScrapingErrorRecord.
     * @param {ScrapingErrorRecordCreateArgs} args - Arguments to create a ScrapingErrorRecord.
     * @example
     * // Create one ScrapingErrorRecord
     * const ScrapingErrorRecord = await prisma.scrapingErrorRecord.create({
     *   data: {
     *     // ... data to create a ScrapingErrorRecord
     *   }
     * })
     * 
    **/
    create<T extends ScrapingErrorRecordCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ScrapingErrorRecordCreateArgs<ExtArgs>>
    ): Prisma__ScrapingErrorRecordClient<$Result.GetResult<Prisma.$ScrapingErrorRecordPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ScrapingErrorRecords.
     *     @param {ScrapingErrorRecordCreateManyArgs} args - Arguments to create many ScrapingErrorRecords.
     *     @example
     *     // Create many ScrapingErrorRecords
     *     const scrapingErrorRecord = await prisma.scrapingErrorRecord.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ScrapingErrorRecordCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScrapingErrorRecordCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ScrapingErrorRecord.
     * @param {ScrapingErrorRecordDeleteArgs} args - Arguments to delete one ScrapingErrorRecord.
     * @example
     * // Delete one ScrapingErrorRecord
     * const ScrapingErrorRecord = await prisma.scrapingErrorRecord.delete({
     *   where: {
     *     // ... filter to delete one ScrapingErrorRecord
     *   }
     * })
     * 
    **/
    delete<T extends ScrapingErrorRecordDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ScrapingErrorRecordDeleteArgs<ExtArgs>>
    ): Prisma__ScrapingErrorRecordClient<$Result.GetResult<Prisma.$ScrapingErrorRecordPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ScrapingErrorRecord.
     * @param {ScrapingErrorRecordUpdateArgs} args - Arguments to update one ScrapingErrorRecord.
     * @example
     * // Update one ScrapingErrorRecord
     * const scrapingErrorRecord = await prisma.scrapingErrorRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ScrapingErrorRecordUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ScrapingErrorRecordUpdateArgs<ExtArgs>>
    ): Prisma__ScrapingErrorRecordClient<$Result.GetResult<Prisma.$ScrapingErrorRecordPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ScrapingErrorRecords.
     * @param {ScrapingErrorRecordDeleteManyArgs} args - Arguments to filter ScrapingErrorRecords to delete.
     * @example
     * // Delete a few ScrapingErrorRecords
     * const { count } = await prisma.scrapingErrorRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ScrapingErrorRecordDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScrapingErrorRecordDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScrapingErrorRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapingErrorRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScrapingErrorRecords
     * const scrapingErrorRecord = await prisma.scrapingErrorRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ScrapingErrorRecordUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ScrapingErrorRecordUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ScrapingErrorRecord.
     * @param {ScrapingErrorRecordUpsertArgs} args - Arguments to update or create a ScrapingErrorRecord.
     * @example
     * // Update or create a ScrapingErrorRecord
     * const scrapingErrorRecord = await prisma.scrapingErrorRecord.upsert({
     *   create: {
     *     // ... data to create a ScrapingErrorRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScrapingErrorRecord we want to update
     *   }
     * })
    **/
    upsert<T extends ScrapingErrorRecordUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ScrapingErrorRecordUpsertArgs<ExtArgs>>
    ): Prisma__ScrapingErrorRecordClient<$Result.GetResult<Prisma.$ScrapingErrorRecordPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ScrapingErrorRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapingErrorRecordCountArgs} args - Arguments to filter ScrapingErrorRecords to count.
     * @example
     * // Count the number of ScrapingErrorRecords
     * const count = await prisma.scrapingErrorRecord.count({
     *   where: {
     *     // ... the filter for the ScrapingErrorRecords we want to count
     *   }
     * })
    **/
    count<T extends ScrapingErrorRecordCountArgs>(
      args?: Subset<T, ScrapingErrorRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScrapingErrorRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScrapingErrorRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapingErrorRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScrapingErrorRecordAggregateArgs>(args: Subset<T, ScrapingErrorRecordAggregateArgs>): Prisma.PrismaPromise<GetScrapingErrorRecordAggregateType<T>>

    /**
     * Group by ScrapingErrorRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapingErrorRecordGroupByArgs} args - Group by arguments.
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
      T extends ScrapingErrorRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScrapingErrorRecordGroupByArgs['orderBy'] }
        : { orderBy?: ScrapingErrorRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScrapingErrorRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScrapingErrorRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScrapingErrorRecord model
   */
  readonly fields: ScrapingErrorRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScrapingErrorRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScrapingErrorRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ScrapingErrorRecord model
   */ 
  interface ScrapingErrorRecordFieldRefs {
    readonly id: FieldRef<"ScrapingErrorRecord", 'String'>
    readonly errorId: FieldRef<"ScrapingErrorRecord", 'String'>
    readonly errorCode: FieldRef<"ScrapingErrorRecord", 'ScrapingErrorCode'>
  }
    

  // Custom InputTypes

  /**
   * ScrapingErrorRecord findUnique
   */
  export type ScrapingErrorRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingErrorRecord
     */
    select?: ScrapingErrorRecordSelect<ExtArgs> | null
    /**
     * Filter, which ScrapingErrorRecord to fetch.
     */
    where: ScrapingErrorRecordWhereUniqueInput
  }


  /**
   * ScrapingErrorRecord findUniqueOrThrow
   */
  export type ScrapingErrorRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingErrorRecord
     */
    select?: ScrapingErrorRecordSelect<ExtArgs> | null
    /**
     * Filter, which ScrapingErrorRecord to fetch.
     */
    where: ScrapingErrorRecordWhereUniqueInput
  }


  /**
   * ScrapingErrorRecord findFirst
   */
  export type ScrapingErrorRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingErrorRecord
     */
    select?: ScrapingErrorRecordSelect<ExtArgs> | null
    /**
     * Filter, which ScrapingErrorRecord to fetch.
     */
    where?: ScrapingErrorRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapingErrorRecords to fetch.
     */
    orderBy?: ScrapingErrorRecordOrderByWithRelationInput | ScrapingErrorRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScrapingErrorRecords.
     */
    cursor?: ScrapingErrorRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapingErrorRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapingErrorRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapingErrorRecords.
     */
    distinct?: ScrapingErrorRecordScalarFieldEnum | ScrapingErrorRecordScalarFieldEnum[]
  }


  /**
   * ScrapingErrorRecord findFirstOrThrow
   */
  export type ScrapingErrorRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingErrorRecord
     */
    select?: ScrapingErrorRecordSelect<ExtArgs> | null
    /**
     * Filter, which ScrapingErrorRecord to fetch.
     */
    where?: ScrapingErrorRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapingErrorRecords to fetch.
     */
    orderBy?: ScrapingErrorRecordOrderByWithRelationInput | ScrapingErrorRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScrapingErrorRecords.
     */
    cursor?: ScrapingErrorRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapingErrorRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapingErrorRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapingErrorRecords.
     */
    distinct?: ScrapingErrorRecordScalarFieldEnum | ScrapingErrorRecordScalarFieldEnum[]
  }


  /**
   * ScrapingErrorRecord findMany
   */
  export type ScrapingErrorRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingErrorRecord
     */
    select?: ScrapingErrorRecordSelect<ExtArgs> | null
    /**
     * Filter, which ScrapingErrorRecords to fetch.
     */
    where?: ScrapingErrorRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapingErrorRecords to fetch.
     */
    orderBy?: ScrapingErrorRecordOrderByWithRelationInput | ScrapingErrorRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScrapingErrorRecords.
     */
    cursor?: ScrapingErrorRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapingErrorRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapingErrorRecords.
     */
    skip?: number
    distinct?: ScrapingErrorRecordScalarFieldEnum | ScrapingErrorRecordScalarFieldEnum[]
  }


  /**
   * ScrapingErrorRecord create
   */
  export type ScrapingErrorRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingErrorRecord
     */
    select?: ScrapingErrorRecordSelect<ExtArgs> | null
    /**
     * The data needed to create a ScrapingErrorRecord.
     */
    data: XOR<ScrapingErrorRecordCreateInput, ScrapingErrorRecordUncheckedCreateInput>
  }


  /**
   * ScrapingErrorRecord createMany
   */
  export type ScrapingErrorRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScrapingErrorRecords.
     */
    data: ScrapingErrorRecordCreateManyInput | ScrapingErrorRecordCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ScrapingErrorRecord update
   */
  export type ScrapingErrorRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingErrorRecord
     */
    select?: ScrapingErrorRecordSelect<ExtArgs> | null
    /**
     * The data needed to update a ScrapingErrorRecord.
     */
    data: XOR<ScrapingErrorRecordUpdateInput, ScrapingErrorRecordUncheckedUpdateInput>
    /**
     * Choose, which ScrapingErrorRecord to update.
     */
    where: ScrapingErrorRecordWhereUniqueInput
  }


  /**
   * ScrapingErrorRecord updateMany
   */
  export type ScrapingErrorRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScrapingErrorRecords.
     */
    data: XOR<ScrapingErrorRecordUpdateManyMutationInput, ScrapingErrorRecordUncheckedUpdateManyInput>
    /**
     * Filter which ScrapingErrorRecords to update
     */
    where?: ScrapingErrorRecordWhereInput
  }


  /**
   * ScrapingErrorRecord upsert
   */
  export type ScrapingErrorRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingErrorRecord
     */
    select?: ScrapingErrorRecordSelect<ExtArgs> | null
    /**
     * The filter to search for the ScrapingErrorRecord to update in case it exists.
     */
    where: ScrapingErrorRecordWhereUniqueInput
    /**
     * In case the ScrapingErrorRecord found by the `where` argument doesn't exist, create a new ScrapingErrorRecord with this data.
     */
    create: XOR<ScrapingErrorRecordCreateInput, ScrapingErrorRecordUncheckedCreateInput>
    /**
     * In case the ScrapingErrorRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScrapingErrorRecordUpdateInput, ScrapingErrorRecordUncheckedUpdateInput>
  }


  /**
   * ScrapingErrorRecord delete
   */
  export type ScrapingErrorRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingErrorRecord
     */
    select?: ScrapingErrorRecordSelect<ExtArgs> | null
    /**
     * Filter which ScrapingErrorRecord to delete.
     */
    where: ScrapingErrorRecordWhereUniqueInput
  }


  /**
   * ScrapingErrorRecord deleteMany
   */
  export type ScrapingErrorRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScrapingErrorRecords to delete
     */
    where?: ScrapingErrorRecordWhereInput
  }


  /**
   * ScrapingErrorRecord without action
   */
  export type ScrapingErrorRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingErrorRecord
     */
    select?: ScrapingErrorRecordSelect<ExtArgs> | null
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


  export const MissingAttributeErrorDataScalarFieldEnum: {
    id: 'id',
    attribute: 'attribute',
    parentHtml: 'parentHtml'
  };

  export type MissingAttributeErrorDataScalarFieldEnum = (typeof MissingAttributeErrorDataScalarFieldEnum)[keyof typeof MissingAttributeErrorDataScalarFieldEnum]


  export const InvalidAttributeErrorDataScalarFieldEnum: {
    id: 'id',
    attribute: 'attribute',
    parentHtml: 'parentHtml',
    value: 'value'
  };

  export type InvalidAttributeErrorDataScalarFieldEnum = (typeof InvalidAttributeErrorDataScalarFieldEnum)[keyof typeof InvalidAttributeErrorDataScalarFieldEnum]


  export const InvalidTextErrorDataScalarFieldEnum: {
    id: 'id',
    parentHtml: 'parentHtml',
    value: 'value'
  };

  export type InvalidTextErrorDataScalarFieldEnum = (typeof InvalidTextErrorDataScalarFieldEnum)[keyof typeof InvalidTextErrorDataScalarFieldEnum]


  export const MissingTextErrorDataScalarFieldEnum: {
    id: 'id',
    parentHtml: 'parentHtml'
  };

  export type MissingTextErrorDataScalarFieldEnum = (typeof MissingTextErrorDataScalarFieldEnum)[keyof typeof MissingTextErrorDataScalarFieldEnum]


  export const NonUniqueTextErrorDataScalarFieldEnum: {
    id: 'id',
    parentHtml: 'parentHtml'
  };

  export type NonUniqueTextErrorDataScalarFieldEnum = (typeof NonUniqueTextErrorDataScalarFieldEnum)[keyof typeof NonUniqueTextErrorDataScalarFieldEnum]


  export const MissingElementErrorDataScalarFieldEnum: {
    id: 'id',
    parentHtml: 'parentHtml',
    selector: 'selector'
  };

  export type MissingElementErrorDataScalarFieldEnum = (typeof MissingElementErrorDataScalarFieldEnum)[keyof typeof MissingElementErrorDataScalarFieldEnum]


  export const NonUniqueElementErrorDataScalarFieldEnum: {
    id: 'id',
    parentHtml: 'parentHtml',
    selector: 'selector'
  };

  export type NonUniqueElementErrorDataScalarFieldEnum = (typeof NonUniqueElementErrorDataScalarFieldEnum)[keyof typeof NonUniqueElementErrorDataScalarFieldEnum]


  export const ScrapingErrorRecordScalarFieldEnum: {
    id: 'id',
    errorId: 'errorId',
    errorCode: 'errorCode'
  };

  export type ScrapingErrorRecordScalarFieldEnum = (typeof ScrapingErrorRecordScalarFieldEnum)[keyof typeof ScrapingErrorRecordScalarFieldEnum]


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
   * Reference to a field of type 'ElementAttribute'
   */
  export type EnumElementAttributeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ElementAttribute'>
    


  /**
   * Reference to a field of type 'ElementAttribute[]'
   */
  export type ListEnumElementAttributeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ElementAttribute[]'>
    


  /**
   * Reference to a field of type 'ScrapingErrorCode'
   */
  export type EnumScrapingErrorCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScrapingErrorCode'>
    


  /**
   * Reference to a field of type 'ScrapingErrorCode[]'
   */
  export type ListEnumScrapingErrorCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScrapingErrorCode[]'>
    


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

  export type MissingAttributeErrorDataWhereInput = {
    AND?: MissingAttributeErrorDataWhereInput | MissingAttributeErrorDataWhereInput[]
    OR?: MissingAttributeErrorDataWhereInput[]
    NOT?: MissingAttributeErrorDataWhereInput | MissingAttributeErrorDataWhereInput[]
    id?: UuidFilter<"MissingAttributeErrorData"> | string
    attribute?: EnumElementAttributeFilter<"MissingAttributeErrorData"> | $Enums.ElementAttribute
    parentHtml?: StringNullableFilter<"MissingAttributeErrorData"> | string | null
  }

  export type MissingAttributeErrorDataOrderByWithRelationInput = {
    id?: SortOrder
    attribute?: SortOrder
    parentHtml?: SortOrderInput | SortOrder
  }

  export type MissingAttributeErrorDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MissingAttributeErrorDataWhereInput | MissingAttributeErrorDataWhereInput[]
    OR?: MissingAttributeErrorDataWhereInput[]
    NOT?: MissingAttributeErrorDataWhereInput | MissingAttributeErrorDataWhereInput[]
    attribute?: EnumElementAttributeFilter<"MissingAttributeErrorData"> | $Enums.ElementAttribute
    parentHtml?: StringNullableFilter<"MissingAttributeErrorData"> | string | null
  }, "id">

  export type MissingAttributeErrorDataOrderByWithAggregationInput = {
    id?: SortOrder
    attribute?: SortOrder
    parentHtml?: SortOrderInput | SortOrder
    _count?: MissingAttributeErrorDataCountOrderByAggregateInput
    _max?: MissingAttributeErrorDataMaxOrderByAggregateInput
    _min?: MissingAttributeErrorDataMinOrderByAggregateInput
  }

  export type MissingAttributeErrorDataScalarWhereWithAggregatesInput = {
    AND?: MissingAttributeErrorDataScalarWhereWithAggregatesInput | MissingAttributeErrorDataScalarWhereWithAggregatesInput[]
    OR?: MissingAttributeErrorDataScalarWhereWithAggregatesInput[]
    NOT?: MissingAttributeErrorDataScalarWhereWithAggregatesInput | MissingAttributeErrorDataScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MissingAttributeErrorData"> | string
    attribute?: EnumElementAttributeWithAggregatesFilter<"MissingAttributeErrorData"> | $Enums.ElementAttribute
    parentHtml?: StringNullableWithAggregatesFilter<"MissingAttributeErrorData"> | string | null
  }

  export type InvalidAttributeErrorDataWhereInput = {
    AND?: InvalidAttributeErrorDataWhereInput | InvalidAttributeErrorDataWhereInput[]
    OR?: InvalidAttributeErrorDataWhereInput[]
    NOT?: InvalidAttributeErrorDataWhereInput | InvalidAttributeErrorDataWhereInput[]
    id?: UuidFilter<"InvalidAttributeErrorData"> | string
    attribute?: EnumElementAttributeFilter<"InvalidAttributeErrorData"> | $Enums.ElementAttribute
    parentHtml?: StringNullableFilter<"InvalidAttributeErrorData"> | string | null
    value?: StringFilter<"InvalidAttributeErrorData"> | string
  }

  export type InvalidAttributeErrorDataOrderByWithRelationInput = {
    id?: SortOrder
    attribute?: SortOrder
    parentHtml?: SortOrderInput | SortOrder
    value?: SortOrder
  }

  export type InvalidAttributeErrorDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvalidAttributeErrorDataWhereInput | InvalidAttributeErrorDataWhereInput[]
    OR?: InvalidAttributeErrorDataWhereInput[]
    NOT?: InvalidAttributeErrorDataWhereInput | InvalidAttributeErrorDataWhereInput[]
    attribute?: EnumElementAttributeFilter<"InvalidAttributeErrorData"> | $Enums.ElementAttribute
    parentHtml?: StringNullableFilter<"InvalidAttributeErrorData"> | string | null
    value?: StringFilter<"InvalidAttributeErrorData"> | string
  }, "id">

  export type InvalidAttributeErrorDataOrderByWithAggregationInput = {
    id?: SortOrder
    attribute?: SortOrder
    parentHtml?: SortOrderInput | SortOrder
    value?: SortOrder
    _count?: InvalidAttributeErrorDataCountOrderByAggregateInput
    _max?: InvalidAttributeErrorDataMaxOrderByAggregateInput
    _min?: InvalidAttributeErrorDataMinOrderByAggregateInput
  }

  export type InvalidAttributeErrorDataScalarWhereWithAggregatesInput = {
    AND?: InvalidAttributeErrorDataScalarWhereWithAggregatesInput | InvalidAttributeErrorDataScalarWhereWithAggregatesInput[]
    OR?: InvalidAttributeErrorDataScalarWhereWithAggregatesInput[]
    NOT?: InvalidAttributeErrorDataScalarWhereWithAggregatesInput | InvalidAttributeErrorDataScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"InvalidAttributeErrorData"> | string
    attribute?: EnumElementAttributeWithAggregatesFilter<"InvalidAttributeErrorData"> | $Enums.ElementAttribute
    parentHtml?: StringNullableWithAggregatesFilter<"InvalidAttributeErrorData"> | string | null
    value?: StringWithAggregatesFilter<"InvalidAttributeErrorData"> | string
  }

  export type InvalidTextErrorDataWhereInput = {
    AND?: InvalidTextErrorDataWhereInput | InvalidTextErrorDataWhereInput[]
    OR?: InvalidTextErrorDataWhereInput[]
    NOT?: InvalidTextErrorDataWhereInput | InvalidTextErrorDataWhereInput[]
    id?: UuidFilter<"InvalidTextErrorData"> | string
    parentHtml?: StringFilter<"InvalidTextErrorData"> | string
    value?: StringFilter<"InvalidTextErrorData"> | string
  }

  export type InvalidTextErrorDataOrderByWithRelationInput = {
    id?: SortOrder
    parentHtml?: SortOrder
    value?: SortOrder
  }

  export type InvalidTextErrorDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvalidTextErrorDataWhereInput | InvalidTextErrorDataWhereInput[]
    OR?: InvalidTextErrorDataWhereInput[]
    NOT?: InvalidTextErrorDataWhereInput | InvalidTextErrorDataWhereInput[]
    parentHtml?: StringFilter<"InvalidTextErrorData"> | string
    value?: StringFilter<"InvalidTextErrorData"> | string
  }, "id">

  export type InvalidTextErrorDataOrderByWithAggregationInput = {
    id?: SortOrder
    parentHtml?: SortOrder
    value?: SortOrder
    _count?: InvalidTextErrorDataCountOrderByAggregateInput
    _max?: InvalidTextErrorDataMaxOrderByAggregateInput
    _min?: InvalidTextErrorDataMinOrderByAggregateInput
  }

  export type InvalidTextErrorDataScalarWhereWithAggregatesInput = {
    AND?: InvalidTextErrorDataScalarWhereWithAggregatesInput | InvalidTextErrorDataScalarWhereWithAggregatesInput[]
    OR?: InvalidTextErrorDataScalarWhereWithAggregatesInput[]
    NOT?: InvalidTextErrorDataScalarWhereWithAggregatesInput | InvalidTextErrorDataScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"InvalidTextErrorData"> | string
    parentHtml?: StringWithAggregatesFilter<"InvalidTextErrorData"> | string
    value?: StringWithAggregatesFilter<"InvalidTextErrorData"> | string
  }

  export type MissingTextErrorDataWhereInput = {
    AND?: MissingTextErrorDataWhereInput | MissingTextErrorDataWhereInput[]
    OR?: MissingTextErrorDataWhereInput[]
    NOT?: MissingTextErrorDataWhereInput | MissingTextErrorDataWhereInput[]
    id?: UuidFilter<"MissingTextErrorData"> | string
    parentHtml?: StringFilter<"MissingTextErrorData"> | string
  }

  export type MissingTextErrorDataOrderByWithRelationInput = {
    id?: SortOrder
    parentHtml?: SortOrder
  }

  export type MissingTextErrorDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MissingTextErrorDataWhereInput | MissingTextErrorDataWhereInput[]
    OR?: MissingTextErrorDataWhereInput[]
    NOT?: MissingTextErrorDataWhereInput | MissingTextErrorDataWhereInput[]
    parentHtml?: StringFilter<"MissingTextErrorData"> | string
  }, "id">

  export type MissingTextErrorDataOrderByWithAggregationInput = {
    id?: SortOrder
    parentHtml?: SortOrder
    _count?: MissingTextErrorDataCountOrderByAggregateInput
    _max?: MissingTextErrorDataMaxOrderByAggregateInput
    _min?: MissingTextErrorDataMinOrderByAggregateInput
  }

  export type MissingTextErrorDataScalarWhereWithAggregatesInput = {
    AND?: MissingTextErrorDataScalarWhereWithAggregatesInput | MissingTextErrorDataScalarWhereWithAggregatesInput[]
    OR?: MissingTextErrorDataScalarWhereWithAggregatesInput[]
    NOT?: MissingTextErrorDataScalarWhereWithAggregatesInput | MissingTextErrorDataScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MissingTextErrorData"> | string
    parentHtml?: StringWithAggregatesFilter<"MissingTextErrorData"> | string
  }

  export type NonUniqueTextErrorDataWhereInput = {
    AND?: NonUniqueTextErrorDataWhereInput | NonUniqueTextErrorDataWhereInput[]
    OR?: NonUniqueTextErrorDataWhereInput[]
    NOT?: NonUniqueTextErrorDataWhereInput | NonUniqueTextErrorDataWhereInput[]
    id?: UuidFilter<"NonUniqueTextErrorData"> | string
    parentHtml?: StringFilter<"NonUniqueTextErrorData"> | string
  }

  export type NonUniqueTextErrorDataOrderByWithRelationInput = {
    id?: SortOrder
    parentHtml?: SortOrder
  }

  export type NonUniqueTextErrorDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NonUniqueTextErrorDataWhereInput | NonUniqueTextErrorDataWhereInput[]
    OR?: NonUniqueTextErrorDataWhereInput[]
    NOT?: NonUniqueTextErrorDataWhereInput | NonUniqueTextErrorDataWhereInput[]
    parentHtml?: StringFilter<"NonUniqueTextErrorData"> | string
  }, "id">

  export type NonUniqueTextErrorDataOrderByWithAggregationInput = {
    id?: SortOrder
    parentHtml?: SortOrder
    _count?: NonUniqueTextErrorDataCountOrderByAggregateInput
    _max?: NonUniqueTextErrorDataMaxOrderByAggregateInput
    _min?: NonUniqueTextErrorDataMinOrderByAggregateInput
  }

  export type NonUniqueTextErrorDataScalarWhereWithAggregatesInput = {
    AND?: NonUniqueTextErrorDataScalarWhereWithAggregatesInput | NonUniqueTextErrorDataScalarWhereWithAggregatesInput[]
    OR?: NonUniqueTextErrorDataScalarWhereWithAggregatesInput[]
    NOT?: NonUniqueTextErrorDataScalarWhereWithAggregatesInput | NonUniqueTextErrorDataScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"NonUniqueTextErrorData"> | string
    parentHtml?: StringWithAggregatesFilter<"NonUniqueTextErrorData"> | string
  }

  export type MissingElementErrorDataWhereInput = {
    AND?: MissingElementErrorDataWhereInput | MissingElementErrorDataWhereInput[]
    OR?: MissingElementErrorDataWhereInput[]
    NOT?: MissingElementErrorDataWhereInput | MissingElementErrorDataWhereInput[]
    id?: UuidFilter<"MissingElementErrorData"> | string
    parentHtml?: StringNullableFilter<"MissingElementErrorData"> | string | null
    selector?: StringFilter<"MissingElementErrorData"> | string
  }

  export type MissingElementErrorDataOrderByWithRelationInput = {
    id?: SortOrder
    parentHtml?: SortOrderInput | SortOrder
    selector?: SortOrder
  }

  export type MissingElementErrorDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MissingElementErrorDataWhereInput | MissingElementErrorDataWhereInput[]
    OR?: MissingElementErrorDataWhereInput[]
    NOT?: MissingElementErrorDataWhereInput | MissingElementErrorDataWhereInput[]
    parentHtml?: StringNullableFilter<"MissingElementErrorData"> | string | null
    selector?: StringFilter<"MissingElementErrorData"> | string
  }, "id">

  export type MissingElementErrorDataOrderByWithAggregationInput = {
    id?: SortOrder
    parentHtml?: SortOrderInput | SortOrder
    selector?: SortOrder
    _count?: MissingElementErrorDataCountOrderByAggregateInput
    _max?: MissingElementErrorDataMaxOrderByAggregateInput
    _min?: MissingElementErrorDataMinOrderByAggregateInput
  }

  export type MissingElementErrorDataScalarWhereWithAggregatesInput = {
    AND?: MissingElementErrorDataScalarWhereWithAggregatesInput | MissingElementErrorDataScalarWhereWithAggregatesInput[]
    OR?: MissingElementErrorDataScalarWhereWithAggregatesInput[]
    NOT?: MissingElementErrorDataScalarWhereWithAggregatesInput | MissingElementErrorDataScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MissingElementErrorData"> | string
    parentHtml?: StringNullableWithAggregatesFilter<"MissingElementErrorData"> | string | null
    selector?: StringWithAggregatesFilter<"MissingElementErrorData"> | string
  }

  export type NonUniqueElementErrorDataWhereInput = {
    AND?: NonUniqueElementErrorDataWhereInput | NonUniqueElementErrorDataWhereInput[]
    OR?: NonUniqueElementErrorDataWhereInput[]
    NOT?: NonUniqueElementErrorDataWhereInput | NonUniqueElementErrorDataWhereInput[]
    id?: UuidFilter<"NonUniqueElementErrorData"> | string
    parentHtml?: StringNullableFilter<"NonUniqueElementErrorData"> | string | null
    selector?: StringFilter<"NonUniqueElementErrorData"> | string
  }

  export type NonUniqueElementErrorDataOrderByWithRelationInput = {
    id?: SortOrder
    parentHtml?: SortOrderInput | SortOrder
    selector?: SortOrder
  }

  export type NonUniqueElementErrorDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NonUniqueElementErrorDataWhereInput | NonUniqueElementErrorDataWhereInput[]
    OR?: NonUniqueElementErrorDataWhereInput[]
    NOT?: NonUniqueElementErrorDataWhereInput | NonUniqueElementErrorDataWhereInput[]
    parentHtml?: StringNullableFilter<"NonUniqueElementErrorData"> | string | null
    selector?: StringFilter<"NonUniqueElementErrorData"> | string
  }, "id">

  export type NonUniqueElementErrorDataOrderByWithAggregationInput = {
    id?: SortOrder
    parentHtml?: SortOrderInput | SortOrder
    selector?: SortOrder
    _count?: NonUniqueElementErrorDataCountOrderByAggregateInput
    _max?: NonUniqueElementErrorDataMaxOrderByAggregateInput
    _min?: NonUniqueElementErrorDataMinOrderByAggregateInput
  }

  export type NonUniqueElementErrorDataScalarWhereWithAggregatesInput = {
    AND?: NonUniqueElementErrorDataScalarWhereWithAggregatesInput | NonUniqueElementErrorDataScalarWhereWithAggregatesInput[]
    OR?: NonUniqueElementErrorDataScalarWhereWithAggregatesInput[]
    NOT?: NonUniqueElementErrorDataScalarWhereWithAggregatesInput | NonUniqueElementErrorDataScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"NonUniqueElementErrorData"> | string
    parentHtml?: StringNullableWithAggregatesFilter<"NonUniqueElementErrorData"> | string | null
    selector?: StringWithAggregatesFilter<"NonUniqueElementErrorData"> | string
  }

  export type ScrapingErrorRecordWhereInput = {
    AND?: ScrapingErrorRecordWhereInput | ScrapingErrorRecordWhereInput[]
    OR?: ScrapingErrorRecordWhereInput[]
    NOT?: ScrapingErrorRecordWhereInput | ScrapingErrorRecordWhereInput[]
    id?: UuidFilter<"ScrapingErrorRecord"> | string
    errorId?: UuidFilter<"ScrapingErrorRecord"> | string
    errorCode?: EnumScrapingErrorCodeFilter<"ScrapingErrorRecord"> | $Enums.ScrapingErrorCode
  }

  export type ScrapingErrorRecordOrderByWithRelationInput = {
    id?: SortOrder
    errorId?: SortOrder
    errorCode?: SortOrder
  }

  export type ScrapingErrorRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    errorId?: string
    AND?: ScrapingErrorRecordWhereInput | ScrapingErrorRecordWhereInput[]
    OR?: ScrapingErrorRecordWhereInput[]
    NOT?: ScrapingErrorRecordWhereInput | ScrapingErrorRecordWhereInput[]
    errorCode?: EnumScrapingErrorCodeFilter<"ScrapingErrorRecord"> | $Enums.ScrapingErrorCode
  }, "id" | "errorId">

  export type ScrapingErrorRecordOrderByWithAggregationInput = {
    id?: SortOrder
    errorId?: SortOrder
    errorCode?: SortOrder
    _count?: ScrapingErrorRecordCountOrderByAggregateInput
    _max?: ScrapingErrorRecordMaxOrderByAggregateInput
    _min?: ScrapingErrorRecordMinOrderByAggregateInput
  }

  export type ScrapingErrorRecordScalarWhereWithAggregatesInput = {
    AND?: ScrapingErrorRecordScalarWhereWithAggregatesInput | ScrapingErrorRecordScalarWhereWithAggregatesInput[]
    OR?: ScrapingErrorRecordScalarWhereWithAggregatesInput[]
    NOT?: ScrapingErrorRecordScalarWhereWithAggregatesInput | ScrapingErrorRecordScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ScrapingErrorRecord"> | string
    errorId?: UuidWithAggregatesFilter<"ScrapingErrorRecord"> | string
    errorCode?: EnumScrapingErrorCodeWithAggregatesFilter<"ScrapingErrorRecord"> | $Enums.ScrapingErrorCode
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

  export type MissingAttributeErrorDataCreateInput = {
    id?: string
    attribute: $Enums.ElementAttribute
    parentHtml?: string | null
  }

  export type MissingAttributeErrorDataUncheckedCreateInput = {
    id?: string
    attribute: $Enums.ElementAttribute
    parentHtml?: string | null
  }

  export type MissingAttributeErrorDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attribute?: EnumElementAttributeFieldUpdateOperationsInput | $Enums.ElementAttribute
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MissingAttributeErrorDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attribute?: EnumElementAttributeFieldUpdateOperationsInput | $Enums.ElementAttribute
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MissingAttributeErrorDataCreateManyInput = {
    id?: string
    attribute: $Enums.ElementAttribute
    parentHtml?: string | null
  }

  export type MissingAttributeErrorDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    attribute?: EnumElementAttributeFieldUpdateOperationsInput | $Enums.ElementAttribute
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MissingAttributeErrorDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    attribute?: EnumElementAttributeFieldUpdateOperationsInput | $Enums.ElementAttribute
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvalidAttributeErrorDataCreateInput = {
    id?: string
    attribute: $Enums.ElementAttribute
    parentHtml?: string | null
    value: string
  }

  export type InvalidAttributeErrorDataUncheckedCreateInput = {
    id?: string
    attribute: $Enums.ElementAttribute
    parentHtml?: string | null
    value: string
  }

  export type InvalidAttributeErrorDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attribute?: EnumElementAttributeFieldUpdateOperationsInput | $Enums.ElementAttribute
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
    value?: StringFieldUpdateOperationsInput | string
  }

  export type InvalidAttributeErrorDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attribute?: EnumElementAttributeFieldUpdateOperationsInput | $Enums.ElementAttribute
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
    value?: StringFieldUpdateOperationsInput | string
  }

  export type InvalidAttributeErrorDataCreateManyInput = {
    id?: string
    attribute: $Enums.ElementAttribute
    parentHtml?: string | null
    value: string
  }

  export type InvalidAttributeErrorDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    attribute?: EnumElementAttributeFieldUpdateOperationsInput | $Enums.ElementAttribute
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
    value?: StringFieldUpdateOperationsInput | string
  }

  export type InvalidAttributeErrorDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    attribute?: EnumElementAttributeFieldUpdateOperationsInput | $Enums.ElementAttribute
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
    value?: StringFieldUpdateOperationsInput | string
  }

  export type InvalidTextErrorDataCreateInput = {
    id?: string
    parentHtml: string
    value: string
  }

  export type InvalidTextErrorDataUncheckedCreateInput = {
    id?: string
    parentHtml: string
    value: string
  }

  export type InvalidTextErrorDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type InvalidTextErrorDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type InvalidTextErrorDataCreateManyInput = {
    id?: string
    parentHtml: string
    value: string
  }

  export type InvalidTextErrorDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type InvalidTextErrorDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type MissingTextErrorDataCreateInput = {
    id?: string
    parentHtml: string
  }

  export type MissingTextErrorDataUncheckedCreateInput = {
    id?: string
    parentHtml: string
  }

  export type MissingTextErrorDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: StringFieldUpdateOperationsInput | string
  }

  export type MissingTextErrorDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: StringFieldUpdateOperationsInput | string
  }

  export type MissingTextErrorDataCreateManyInput = {
    id?: string
    parentHtml: string
  }

  export type MissingTextErrorDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: StringFieldUpdateOperationsInput | string
  }

  export type MissingTextErrorDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: StringFieldUpdateOperationsInput | string
  }

  export type NonUniqueTextErrorDataCreateInput = {
    id?: string
    parentHtml: string
  }

  export type NonUniqueTextErrorDataUncheckedCreateInput = {
    id?: string
    parentHtml: string
  }

  export type NonUniqueTextErrorDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: StringFieldUpdateOperationsInput | string
  }

  export type NonUniqueTextErrorDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: StringFieldUpdateOperationsInput | string
  }

  export type NonUniqueTextErrorDataCreateManyInput = {
    id?: string
    parentHtml: string
  }

  export type NonUniqueTextErrorDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: StringFieldUpdateOperationsInput | string
  }

  export type NonUniqueTextErrorDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: StringFieldUpdateOperationsInput | string
  }

  export type MissingElementErrorDataCreateInput = {
    id?: string
    parentHtml?: string | null
    selector: string
  }

  export type MissingElementErrorDataUncheckedCreateInput = {
    id?: string
    parentHtml?: string | null
    selector: string
  }

  export type MissingElementErrorDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
    selector?: StringFieldUpdateOperationsInput | string
  }

  export type MissingElementErrorDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
    selector?: StringFieldUpdateOperationsInput | string
  }

  export type MissingElementErrorDataCreateManyInput = {
    id?: string
    parentHtml?: string | null
    selector: string
  }

  export type MissingElementErrorDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
    selector?: StringFieldUpdateOperationsInput | string
  }

  export type MissingElementErrorDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
    selector?: StringFieldUpdateOperationsInput | string
  }

  export type NonUniqueElementErrorDataCreateInput = {
    id?: string
    parentHtml?: string | null
    selector: string
  }

  export type NonUniqueElementErrorDataUncheckedCreateInput = {
    id?: string
    parentHtml?: string | null
    selector: string
  }

  export type NonUniqueElementErrorDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
    selector?: StringFieldUpdateOperationsInput | string
  }

  export type NonUniqueElementErrorDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
    selector?: StringFieldUpdateOperationsInput | string
  }

  export type NonUniqueElementErrorDataCreateManyInput = {
    id?: string
    parentHtml?: string | null
    selector: string
  }

  export type NonUniqueElementErrorDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
    selector?: StringFieldUpdateOperationsInput | string
  }

  export type NonUniqueElementErrorDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
    selector?: StringFieldUpdateOperationsInput | string
  }

  export type ScrapingErrorRecordCreateInput = {
    id?: string
    errorId: string
    errorCode: $Enums.ScrapingErrorCode
  }

  export type ScrapingErrorRecordUncheckedCreateInput = {
    id?: string
    errorId: string
    errorCode: $Enums.ScrapingErrorCode
  }

  export type ScrapingErrorRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorId?: StringFieldUpdateOperationsInput | string
    errorCode?: EnumScrapingErrorCodeFieldUpdateOperationsInput | $Enums.ScrapingErrorCode
  }

  export type ScrapingErrorRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorId?: StringFieldUpdateOperationsInput | string
    errorCode?: EnumScrapingErrorCodeFieldUpdateOperationsInput | $Enums.ScrapingErrorCode
  }

  export type ScrapingErrorRecordCreateManyInput = {
    id?: string
    errorId: string
    errorCode: $Enums.ScrapingErrorCode
  }

  export type ScrapingErrorRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorId?: StringFieldUpdateOperationsInput | string
    errorCode?: EnumScrapingErrorCodeFieldUpdateOperationsInput | $Enums.ScrapingErrorCode
  }

  export type ScrapingErrorRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorId?: StringFieldUpdateOperationsInput | string
    errorCode?: EnumScrapingErrorCodeFieldUpdateOperationsInput | $Enums.ScrapingErrorCode
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

  export type EnumElementAttributeFilter<$PrismaModel = never> = {
    equals?: $Enums.ElementAttribute | EnumElementAttributeFieldRefInput<$PrismaModel>
    in?: $Enums.ElementAttribute[] | ListEnumElementAttributeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ElementAttribute[] | ListEnumElementAttributeFieldRefInput<$PrismaModel>
    not?: NestedEnumElementAttributeFilter<$PrismaModel> | $Enums.ElementAttribute
  }

  export type MissingAttributeErrorDataCountOrderByAggregateInput = {
    id?: SortOrder
    attribute?: SortOrder
    parentHtml?: SortOrder
  }

  export type MissingAttributeErrorDataMaxOrderByAggregateInput = {
    id?: SortOrder
    attribute?: SortOrder
    parentHtml?: SortOrder
  }

  export type MissingAttributeErrorDataMinOrderByAggregateInput = {
    id?: SortOrder
    attribute?: SortOrder
    parentHtml?: SortOrder
  }

  export type EnumElementAttributeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ElementAttribute | EnumElementAttributeFieldRefInput<$PrismaModel>
    in?: $Enums.ElementAttribute[] | ListEnumElementAttributeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ElementAttribute[] | ListEnumElementAttributeFieldRefInput<$PrismaModel>
    not?: NestedEnumElementAttributeWithAggregatesFilter<$PrismaModel> | $Enums.ElementAttribute
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumElementAttributeFilter<$PrismaModel>
    _max?: NestedEnumElementAttributeFilter<$PrismaModel>
  }

  export type InvalidAttributeErrorDataCountOrderByAggregateInput = {
    id?: SortOrder
    attribute?: SortOrder
    parentHtml?: SortOrder
    value?: SortOrder
  }

  export type InvalidAttributeErrorDataMaxOrderByAggregateInput = {
    id?: SortOrder
    attribute?: SortOrder
    parentHtml?: SortOrder
    value?: SortOrder
  }

  export type InvalidAttributeErrorDataMinOrderByAggregateInput = {
    id?: SortOrder
    attribute?: SortOrder
    parentHtml?: SortOrder
    value?: SortOrder
  }

  export type InvalidTextErrorDataCountOrderByAggregateInput = {
    id?: SortOrder
    parentHtml?: SortOrder
    value?: SortOrder
  }

  export type InvalidTextErrorDataMaxOrderByAggregateInput = {
    id?: SortOrder
    parentHtml?: SortOrder
    value?: SortOrder
  }

  export type InvalidTextErrorDataMinOrderByAggregateInput = {
    id?: SortOrder
    parentHtml?: SortOrder
    value?: SortOrder
  }

  export type MissingTextErrorDataCountOrderByAggregateInput = {
    id?: SortOrder
    parentHtml?: SortOrder
  }

  export type MissingTextErrorDataMaxOrderByAggregateInput = {
    id?: SortOrder
    parentHtml?: SortOrder
  }

  export type MissingTextErrorDataMinOrderByAggregateInput = {
    id?: SortOrder
    parentHtml?: SortOrder
  }

  export type NonUniqueTextErrorDataCountOrderByAggregateInput = {
    id?: SortOrder
    parentHtml?: SortOrder
  }

  export type NonUniqueTextErrorDataMaxOrderByAggregateInput = {
    id?: SortOrder
    parentHtml?: SortOrder
  }

  export type NonUniqueTextErrorDataMinOrderByAggregateInput = {
    id?: SortOrder
    parentHtml?: SortOrder
  }

  export type MissingElementErrorDataCountOrderByAggregateInput = {
    id?: SortOrder
    parentHtml?: SortOrder
    selector?: SortOrder
  }

  export type MissingElementErrorDataMaxOrderByAggregateInput = {
    id?: SortOrder
    parentHtml?: SortOrder
    selector?: SortOrder
  }

  export type MissingElementErrorDataMinOrderByAggregateInput = {
    id?: SortOrder
    parentHtml?: SortOrder
    selector?: SortOrder
  }

  export type NonUniqueElementErrorDataCountOrderByAggregateInput = {
    id?: SortOrder
    parentHtml?: SortOrder
    selector?: SortOrder
  }

  export type NonUniqueElementErrorDataMaxOrderByAggregateInput = {
    id?: SortOrder
    parentHtml?: SortOrder
    selector?: SortOrder
  }

  export type NonUniqueElementErrorDataMinOrderByAggregateInput = {
    id?: SortOrder
    parentHtml?: SortOrder
    selector?: SortOrder
  }

  export type EnumScrapingErrorCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.ScrapingErrorCode | EnumScrapingErrorCodeFieldRefInput<$PrismaModel>
    in?: $Enums.ScrapingErrorCode[] | ListEnumScrapingErrorCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScrapingErrorCode[] | ListEnumScrapingErrorCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumScrapingErrorCodeFilter<$PrismaModel> | $Enums.ScrapingErrorCode
  }

  export type ScrapingErrorRecordCountOrderByAggregateInput = {
    id?: SortOrder
    errorId?: SortOrder
    errorCode?: SortOrder
  }

  export type ScrapingErrorRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    errorId?: SortOrder
    errorCode?: SortOrder
  }

  export type ScrapingErrorRecordMinOrderByAggregateInput = {
    id?: SortOrder
    errorId?: SortOrder
    errorCode?: SortOrder
  }

  export type EnumScrapingErrorCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScrapingErrorCode | EnumScrapingErrorCodeFieldRefInput<$PrismaModel>
    in?: $Enums.ScrapingErrorCode[] | ListEnumScrapingErrorCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScrapingErrorCode[] | ListEnumScrapingErrorCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumScrapingErrorCodeWithAggregatesFilter<$PrismaModel> | $Enums.ScrapingErrorCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScrapingErrorCodeFilter<$PrismaModel>
    _max?: NestedEnumScrapingErrorCodeFilter<$PrismaModel>
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

  export type EnumElementAttributeFieldUpdateOperationsInput = {
    set?: $Enums.ElementAttribute
  }

  export type EnumScrapingErrorCodeFieldUpdateOperationsInput = {
    set?: $Enums.ScrapingErrorCode
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

  export type NestedEnumElementAttributeFilter<$PrismaModel = never> = {
    equals?: $Enums.ElementAttribute | EnumElementAttributeFieldRefInput<$PrismaModel>
    in?: $Enums.ElementAttribute[] | ListEnumElementAttributeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ElementAttribute[] | ListEnumElementAttributeFieldRefInput<$PrismaModel>
    not?: NestedEnumElementAttributeFilter<$PrismaModel> | $Enums.ElementAttribute
  }

  export type NestedEnumElementAttributeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ElementAttribute | EnumElementAttributeFieldRefInput<$PrismaModel>
    in?: $Enums.ElementAttribute[] | ListEnumElementAttributeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ElementAttribute[] | ListEnumElementAttributeFieldRefInput<$PrismaModel>
    not?: NestedEnumElementAttributeWithAggregatesFilter<$PrismaModel> | $Enums.ElementAttribute
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumElementAttributeFilter<$PrismaModel>
    _max?: NestedEnumElementAttributeFilter<$PrismaModel>
  }

  export type NestedEnumScrapingErrorCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.ScrapingErrorCode | EnumScrapingErrorCodeFieldRefInput<$PrismaModel>
    in?: $Enums.ScrapingErrorCode[] | ListEnumScrapingErrorCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScrapingErrorCode[] | ListEnumScrapingErrorCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumScrapingErrorCodeFilter<$PrismaModel> | $Enums.ScrapingErrorCode
  }

  export type NestedEnumScrapingErrorCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScrapingErrorCode | EnumScrapingErrorCodeFieldRefInput<$PrismaModel>
    in?: $Enums.ScrapingErrorCode[] | ListEnumScrapingErrorCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScrapingErrorCode[] | ListEnumScrapingErrorCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumScrapingErrorCodeWithAggregatesFilter<$PrismaModel> | $Enums.ScrapingErrorCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScrapingErrorCodeFilter<$PrismaModel>
    _max?: NestedEnumScrapingErrorCodeFilter<$PrismaModel>
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
     * @deprecated Use MissingAttributeErrorDataDefaultArgs instead
     */
    export type MissingAttributeErrorDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MissingAttributeErrorDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvalidAttributeErrorDataDefaultArgs instead
     */
    export type InvalidAttributeErrorDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvalidAttributeErrorDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvalidTextErrorDataDefaultArgs instead
     */
    export type InvalidTextErrorDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvalidTextErrorDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MissingTextErrorDataDefaultArgs instead
     */
    export type MissingTextErrorDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MissingTextErrorDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NonUniqueTextErrorDataDefaultArgs instead
     */
    export type NonUniqueTextErrorDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NonUniqueTextErrorDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MissingElementErrorDataDefaultArgs instead
     */
    export type MissingElementErrorDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MissingElementErrorDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NonUniqueElementErrorDataDefaultArgs instead
     */
    export type NonUniqueElementErrorDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NonUniqueElementErrorDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScrapingErrorRecordDefaultArgs instead
     */
    export type ScrapingErrorRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScrapingErrorRecordDefaultArgs<ExtArgs>
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