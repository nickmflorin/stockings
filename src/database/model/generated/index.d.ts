
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
 * Model HttpNetworkErrorData
 * 
 */
export type HttpNetworkErrorData = $Result.DefaultSelection<Prisma.$HttpNetworkErrorDataPayload>
/**
 * Model HttpSerializationErrorData
 * 
 */
export type HttpSerializationErrorData = $Result.DefaultSelection<Prisma.$HttpSerializationErrorDataPayload>
/**
 * Model HttpClientErrorData
 * 
 */
export type HttpClientErrorData = $Result.DefaultSelection<Prisma.$HttpClientErrorDataPayload>
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
 * Model ProductRecordError
 * 
 */
export type ProductRecordError = $Result.DefaultSelection<Prisma.$ProductRecordErrorPayload>
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
 * Model NotificationEvent
 * @@delegate(contentType)
 */
export type NotificationEvent = $Result.DefaultSelection<Prisma.$NotificationEventPayload>
/**
 * Model PriceChangeEventC
 * 
 */
export type PriceChangeEventC = $Result.DefaultSelection<Prisma.$PriceChangeEventCPayload>
/**
 * Model StatusChangeEvent
 * 
 */
export type StatusChangeEvent = $Result.DefaultSelection<Prisma.$StatusChangeEventPayload>

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


export const ProductRecordDataField: {
  PRICE: 'PRICE',
  RAW_PRICE: 'RAW_PRICE',
  STATUS: 'STATUS'
};

export type ProductRecordDataField = (typeof ProductRecordDataField)[keyof typeof ProductRecordDataField]


export const ProductStatus: {
  OUT_OF_STOCK: 'OUT_OF_STOCK',
  IN_STOCK: 'IN_STOCK',
  AVAILABLE_FOR_BACKORDER: 'AVAILABLE_FOR_BACKORDER',
  NOT_LISTED: 'NOT_LISTED'
};

export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus]


export const ProductCategory: {
  HandTools: 'HandTools'
};

export type ProductCategory = (typeof ProductCategory)[keyof typeof ProductCategory]


export const ProductSubCategory: {
  HandPlanes: 'HandPlanes',
  Saws: 'Saws',
  Chisels: 'Chisels',
  Spokeshaves: 'Spokeshaves',
  GreenWoodworking: 'GreenWoodworking',
  AccessoryTools: 'AccessoryTools'
};

export type ProductSubCategory = (typeof ProductSubCategory)[keyof typeof ProductSubCategory]


export const NotificationEventContentType: {
  PriceChange: 'PriceChange',
  StatusChange: 'StatusChange'
};

export type NotificationEventContentType = (typeof NotificationEventContentType)[keyof typeof NotificationEventContentType]


export const PriceChangeEventType: {
  PriceIncrease: 'PriceIncrease',
  PriceDecrease: 'PriceDecrease'
};

export type PriceChangeEventType = (typeof PriceChangeEventType)[keyof typeof PriceChangeEventType]

}

export type ElementAttribute = $Enums.ElementAttribute

export const ElementAttribute: typeof $Enums.ElementAttribute

export type ScrapingErrorCode = $Enums.ScrapingErrorCode

export const ScrapingErrorCode: typeof $Enums.ScrapingErrorCode

export type ProductRecordDataField = $Enums.ProductRecordDataField

export const ProductRecordDataField: typeof $Enums.ProductRecordDataField

export type ProductStatus = $Enums.ProductStatus

export const ProductStatus: typeof $Enums.ProductStatus

export type ProductCategory = $Enums.ProductCategory

export const ProductCategory: typeof $Enums.ProductCategory

export type ProductSubCategory = $Enums.ProductSubCategory

export const ProductSubCategory: typeof $Enums.ProductSubCategory

export type NotificationEventContentType = $Enums.NotificationEventContentType

export const NotificationEventContentType: typeof $Enums.NotificationEventContentType

export type PriceChangeEventType = $Enums.PriceChangeEventType

export const PriceChangeEventType: typeof $Enums.PriceChangeEventType

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
   * `prisma.httpNetworkErrorData`: Exposes CRUD operations for the **HttpNetworkErrorData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HttpNetworkErrorData
    * const httpNetworkErrorData = await prisma.httpNetworkErrorData.findMany()
    * ```
    */
  get httpNetworkErrorData(): Prisma.HttpNetworkErrorDataDelegate<ExtArgs>;

  /**
   * `prisma.httpSerializationErrorData`: Exposes CRUD operations for the **HttpSerializationErrorData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HttpSerializationErrorData
    * const httpSerializationErrorData = await prisma.httpSerializationErrorData.findMany()
    * ```
    */
  get httpSerializationErrorData(): Prisma.HttpSerializationErrorDataDelegate<ExtArgs>;

  /**
   * `prisma.httpClientErrorData`: Exposes CRUD operations for the **HttpClientErrorData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HttpClientErrorData
    * const httpClientErrorData = await prisma.httpClientErrorData.findMany()
    * ```
    */
  get httpClientErrorData(): Prisma.HttpClientErrorDataDelegate<ExtArgs>;

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
   * `prisma.productRecordError`: Exposes CRUD operations for the **ProductRecordError** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductRecordErrors
    * const productRecordErrors = await prisma.productRecordError.findMany()
    * ```
    */
  get productRecordError(): Prisma.ProductRecordErrorDelegate<ExtArgs>;

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

  /**
   * `prisma.notificationEvent`: Exposes CRUD operations for the **NotificationEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationEvents
    * const notificationEvents = await prisma.notificationEvent.findMany()
    * ```
    */
  get notificationEvent(): Prisma.NotificationEventDelegate<ExtArgs>;

  /**
   * `prisma.priceChangeEventC`: Exposes CRUD operations for the **PriceChangeEventC** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceChangeEventCS
    * const priceChangeEventCS = await prisma.priceChangeEventC.findMany()
    * ```
    */
  get priceChangeEventC(): Prisma.PriceChangeEventCDelegate<ExtArgs>;

  /**
   * `prisma.statusChangeEvent`: Exposes CRUD operations for the **StatusChangeEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StatusChangeEvents
    * const statusChangeEvents = await prisma.statusChangeEvent.findMany()
    * ```
    */
  get statusChangeEvent(): Prisma.StatusChangeEventDelegate<ExtArgs>;
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
    HttpNetworkErrorData: 'HttpNetworkErrorData',
    HttpSerializationErrorData: 'HttpSerializationErrorData',
    HttpClientErrorData: 'HttpClientErrorData',
    MissingAttributeErrorData: 'MissingAttributeErrorData',
    InvalidAttributeErrorData: 'InvalidAttributeErrorData',
    InvalidTextErrorData: 'InvalidTextErrorData',
    MissingTextErrorData: 'MissingTextErrorData',
    NonUniqueTextErrorData: 'NonUniqueTextErrorData',
    MissingElementErrorData: 'MissingElementErrorData',
    NonUniqueElementErrorData: 'NonUniqueElementErrorData',
    ProductRecordError: 'ProductRecordError',
    ProductRecord: 'ProductRecord',
    Product: 'Product',
    NotificationEvent: 'NotificationEvent',
    PriceChangeEventC: 'PriceChangeEventC',
    StatusChangeEvent: 'StatusChangeEvent'
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
      modelProps: 'user' | 'httpNetworkErrorData' | 'httpSerializationErrorData' | 'httpClientErrorData' | 'missingAttributeErrorData' | 'invalidAttributeErrorData' | 'invalidTextErrorData' | 'missingTextErrorData' | 'nonUniqueTextErrorData' | 'missingElementErrorData' | 'nonUniqueElementErrorData' | 'productRecordError' | 'productRecord' | 'product' | 'notificationEvent' | 'priceChangeEventC' | 'statusChangeEvent'
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
      HttpNetworkErrorData: {
        payload: Prisma.$HttpNetworkErrorDataPayload<ExtArgs>
        fields: Prisma.HttpNetworkErrorDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HttpNetworkErrorDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpNetworkErrorDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HttpNetworkErrorDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpNetworkErrorDataPayload>
          }
          findFirst: {
            args: Prisma.HttpNetworkErrorDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpNetworkErrorDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HttpNetworkErrorDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpNetworkErrorDataPayload>
          }
          findMany: {
            args: Prisma.HttpNetworkErrorDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpNetworkErrorDataPayload>[]
          }
          create: {
            args: Prisma.HttpNetworkErrorDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpNetworkErrorDataPayload>
          }
          createMany: {
            args: Prisma.HttpNetworkErrorDataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HttpNetworkErrorDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpNetworkErrorDataPayload>
          }
          update: {
            args: Prisma.HttpNetworkErrorDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpNetworkErrorDataPayload>
          }
          deleteMany: {
            args: Prisma.HttpNetworkErrorDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HttpNetworkErrorDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HttpNetworkErrorDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpNetworkErrorDataPayload>
          }
          aggregate: {
            args: Prisma.HttpNetworkErrorDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHttpNetworkErrorData>
          }
          groupBy: {
            args: Prisma.HttpNetworkErrorDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HttpNetworkErrorDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.HttpNetworkErrorDataCountArgs<ExtArgs>,
            result: $Utils.Optional<HttpNetworkErrorDataCountAggregateOutputType> | number
          }
        }
      }
      HttpSerializationErrorData: {
        payload: Prisma.$HttpSerializationErrorDataPayload<ExtArgs>
        fields: Prisma.HttpSerializationErrorDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HttpSerializationErrorDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpSerializationErrorDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HttpSerializationErrorDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpSerializationErrorDataPayload>
          }
          findFirst: {
            args: Prisma.HttpSerializationErrorDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpSerializationErrorDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HttpSerializationErrorDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpSerializationErrorDataPayload>
          }
          findMany: {
            args: Prisma.HttpSerializationErrorDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpSerializationErrorDataPayload>[]
          }
          create: {
            args: Prisma.HttpSerializationErrorDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpSerializationErrorDataPayload>
          }
          createMany: {
            args: Prisma.HttpSerializationErrorDataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HttpSerializationErrorDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpSerializationErrorDataPayload>
          }
          update: {
            args: Prisma.HttpSerializationErrorDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpSerializationErrorDataPayload>
          }
          deleteMany: {
            args: Prisma.HttpSerializationErrorDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HttpSerializationErrorDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HttpSerializationErrorDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpSerializationErrorDataPayload>
          }
          aggregate: {
            args: Prisma.HttpSerializationErrorDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHttpSerializationErrorData>
          }
          groupBy: {
            args: Prisma.HttpSerializationErrorDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HttpSerializationErrorDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.HttpSerializationErrorDataCountArgs<ExtArgs>,
            result: $Utils.Optional<HttpSerializationErrorDataCountAggregateOutputType> | number
          }
        }
      }
      HttpClientErrorData: {
        payload: Prisma.$HttpClientErrorDataPayload<ExtArgs>
        fields: Prisma.HttpClientErrorDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HttpClientErrorDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpClientErrorDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HttpClientErrorDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpClientErrorDataPayload>
          }
          findFirst: {
            args: Prisma.HttpClientErrorDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpClientErrorDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HttpClientErrorDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpClientErrorDataPayload>
          }
          findMany: {
            args: Prisma.HttpClientErrorDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpClientErrorDataPayload>[]
          }
          create: {
            args: Prisma.HttpClientErrorDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpClientErrorDataPayload>
          }
          createMany: {
            args: Prisma.HttpClientErrorDataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HttpClientErrorDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpClientErrorDataPayload>
          }
          update: {
            args: Prisma.HttpClientErrorDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpClientErrorDataPayload>
          }
          deleteMany: {
            args: Prisma.HttpClientErrorDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HttpClientErrorDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HttpClientErrorDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HttpClientErrorDataPayload>
          }
          aggregate: {
            args: Prisma.HttpClientErrorDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHttpClientErrorData>
          }
          groupBy: {
            args: Prisma.HttpClientErrorDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HttpClientErrorDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.HttpClientErrorDataCountArgs<ExtArgs>,
            result: $Utils.Optional<HttpClientErrorDataCountAggregateOutputType> | number
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
      ProductRecordError: {
        payload: Prisma.$ProductRecordErrorPayload<ExtArgs>
        fields: Prisma.ProductRecordErrorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductRecordErrorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordErrorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductRecordErrorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordErrorPayload>
          }
          findFirst: {
            args: Prisma.ProductRecordErrorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordErrorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductRecordErrorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordErrorPayload>
          }
          findMany: {
            args: Prisma.ProductRecordErrorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordErrorPayload>[]
          }
          create: {
            args: Prisma.ProductRecordErrorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordErrorPayload>
          }
          createMany: {
            args: Prisma.ProductRecordErrorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductRecordErrorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordErrorPayload>
          }
          update: {
            args: Prisma.ProductRecordErrorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordErrorPayload>
          }
          deleteMany: {
            args: Prisma.ProductRecordErrorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductRecordErrorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductRecordErrorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRecordErrorPayload>
          }
          aggregate: {
            args: Prisma.ProductRecordErrorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductRecordError>
          }
          groupBy: {
            args: Prisma.ProductRecordErrorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductRecordErrorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductRecordErrorCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductRecordErrorCountAggregateOutputType> | number
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
      NotificationEvent: {
        payload: Prisma.$NotificationEventPayload<ExtArgs>
        fields: Prisma.NotificationEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationEventFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationEventFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>
          }
          findFirst: {
            args: Prisma.NotificationEventFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationEventFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>
          }
          findMany: {
            args: Prisma.NotificationEventFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>[]
          }
          create: {
            args: Prisma.NotificationEventCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>
          }
          createMany: {
            args: Prisma.NotificationEventCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NotificationEventDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>
          }
          update: {
            args: Prisma.NotificationEventUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>
          }
          deleteMany: {
            args: Prisma.NotificationEventDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationEventUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NotificationEventUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>
          }
          aggregate: {
            args: Prisma.NotificationEventAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNotificationEvent>
          }
          groupBy: {
            args: Prisma.NotificationEventGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NotificationEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationEventCountArgs<ExtArgs>,
            result: $Utils.Optional<NotificationEventCountAggregateOutputType> | number
          }
        }
      }
      PriceChangeEventC: {
        payload: Prisma.$PriceChangeEventCPayload<ExtArgs>
        fields: Prisma.PriceChangeEventCFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceChangeEventCFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PriceChangeEventCPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceChangeEventCFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PriceChangeEventCPayload>
          }
          findFirst: {
            args: Prisma.PriceChangeEventCFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PriceChangeEventCPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceChangeEventCFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PriceChangeEventCPayload>
          }
          findMany: {
            args: Prisma.PriceChangeEventCFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PriceChangeEventCPayload>[]
          }
          create: {
            args: Prisma.PriceChangeEventCCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PriceChangeEventCPayload>
          }
          createMany: {
            args: Prisma.PriceChangeEventCCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PriceChangeEventCDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PriceChangeEventCPayload>
          }
          update: {
            args: Prisma.PriceChangeEventCUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PriceChangeEventCPayload>
          }
          deleteMany: {
            args: Prisma.PriceChangeEventCDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PriceChangeEventCUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PriceChangeEventCUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PriceChangeEventCPayload>
          }
          aggregate: {
            args: Prisma.PriceChangeEventCAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePriceChangeEventC>
          }
          groupBy: {
            args: Prisma.PriceChangeEventCGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PriceChangeEventCGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceChangeEventCCountArgs<ExtArgs>,
            result: $Utils.Optional<PriceChangeEventCCountAggregateOutputType> | number
          }
        }
      }
      StatusChangeEvent: {
        payload: Prisma.$StatusChangeEventPayload<ExtArgs>
        fields: Prisma.StatusChangeEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusChangeEventFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatusChangeEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusChangeEventFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatusChangeEventPayload>
          }
          findFirst: {
            args: Prisma.StatusChangeEventFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatusChangeEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusChangeEventFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatusChangeEventPayload>
          }
          findMany: {
            args: Prisma.StatusChangeEventFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatusChangeEventPayload>[]
          }
          create: {
            args: Prisma.StatusChangeEventCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatusChangeEventPayload>
          }
          createMany: {
            args: Prisma.StatusChangeEventCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StatusChangeEventDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatusChangeEventPayload>
          }
          update: {
            args: Prisma.StatusChangeEventUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatusChangeEventPayload>
          }
          deleteMany: {
            args: Prisma.StatusChangeEventDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StatusChangeEventUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StatusChangeEventUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatusChangeEventPayload>
          }
          aggregate: {
            args: Prisma.StatusChangeEventAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStatusChangeEvent>
          }
          groupBy: {
            args: Prisma.StatusChangeEventGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StatusChangeEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusChangeEventCountArgs<ExtArgs>,
            result: $Utils.Optional<StatusChangeEventCountAggregateOutputType> | number
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
    createdNotificationEvents: number
    updatedNotificationEvents: number
    notificationEvents: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdProducts?: boolean | UserCountOutputTypeCountCreatedProductsArgs
    updatedProducts?: boolean | UserCountOutputTypeCountUpdatedProductsArgs
    createdProductRecords?: boolean | UserCountOutputTypeCountCreatedProductRecordsArgs
    updatedProductRecords?: boolean | UserCountOutputTypeCountUpdatedProductRecordsArgs
    createdNotificationEvents?: boolean | UserCountOutputTypeCountCreatedNotificationEventsArgs
    updatedNotificationEvents?: boolean | UserCountOutputTypeCountUpdatedNotificationEventsArgs
    notificationEvents?: boolean | UserCountOutputTypeCountNotificationEventsArgs
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
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedNotificationEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationEventWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatedNotificationEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationEventWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationEventWhereInput
  }



  /**
   * Count Type ProductRecordCountOutputType
   */

  export type ProductRecordCountOutputType = {
    errors: number
  }

  export type ProductRecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    errors?: boolean | ProductRecordCountOutputTypeCountErrorsArgs
  }

  // Custom InputTypes

  /**
   * ProductRecordCountOutputType without action
   */
  export type ProductRecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecordCountOutputType
     */
    select?: ProductRecordCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductRecordCountOutputType without action
   */
  export type ProductRecordCountOutputTypeCountErrorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductRecordErrorWhereInput
  }



  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    records: number
    notificationEvents: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    records?: boolean | ProductCountOutputTypeCountRecordsArgs
    notificationEvents?: boolean | ProductCountOutputTypeCountNotificationEventsArgs
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
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountNotificationEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationEventWhereInput
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
    createdNotificationEvents?: boolean | User$createdNotificationEventsArgs<ExtArgs>
    updatedNotificationEvents?: boolean | User$updatedNotificationEventsArgs<ExtArgs>
    notificationEvents?: boolean | User$notificationEventsArgs<ExtArgs>
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
    createdNotificationEvents?: boolean | User$createdNotificationEventsArgs<ExtArgs>
    updatedNotificationEvents?: boolean | User$updatedNotificationEventsArgs<ExtArgs>
    notificationEvents?: boolean | User$notificationEventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdProducts: Prisma.$ProductPayload<ExtArgs>[]
      updatedProducts: Prisma.$ProductPayload<ExtArgs>[]
      createdProductRecords: Prisma.$ProductRecordPayload<ExtArgs>[]
      updatedProductRecords: Prisma.$ProductRecordPayload<ExtArgs>[]
      createdNotificationEvents: Prisma.$NotificationEventPayload<ExtArgs>[]
      updatedNotificationEvents: Prisma.$NotificationEventPayload<ExtArgs>[]
      notificationEvents: Prisma.$NotificationEventPayload<ExtArgs>[]
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

    createdNotificationEvents<T extends User$createdNotificationEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdNotificationEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, 'findMany'> | Null>;

    updatedNotificationEvents<T extends User$updatedNotificationEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedNotificationEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, 'findMany'> | Null>;

    notificationEvents<T extends User$notificationEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * User.createdNotificationEvents
   */
  export type User$createdNotificationEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationEventInclude<ExtArgs> | null
    where?: NotificationEventWhereInput
    orderBy?: NotificationEventOrderByWithRelationInput | NotificationEventOrderByWithRelationInput[]
    cursor?: NotificationEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationEventScalarFieldEnum | NotificationEventScalarFieldEnum[]
  }


  /**
   * User.updatedNotificationEvents
   */
  export type User$updatedNotificationEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationEventInclude<ExtArgs> | null
    where?: NotificationEventWhereInput
    orderBy?: NotificationEventOrderByWithRelationInput | NotificationEventOrderByWithRelationInput[]
    cursor?: NotificationEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationEventScalarFieldEnum | NotificationEventScalarFieldEnum[]
  }


  /**
   * User.notificationEvents
   */
  export type User$notificationEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationEventInclude<ExtArgs> | null
    where?: NotificationEventWhereInput
    orderBy?: NotificationEventOrderByWithRelationInput | NotificationEventOrderByWithRelationInput[]
    cursor?: NotificationEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationEventScalarFieldEnum | NotificationEventScalarFieldEnum[]
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
   * Model HttpNetworkErrorData
   */

  export type AggregateHttpNetworkErrorData = {
    _count: HttpNetworkErrorDataCountAggregateOutputType | null
    _min: HttpNetworkErrorDataMinAggregateOutputType | null
    _max: HttpNetworkErrorDataMaxAggregateOutputType | null
  }

  export type HttpNetworkErrorDataMinAggregateOutputType = {
    id: string | null
    url: string | null
  }

  export type HttpNetworkErrorDataMaxAggregateOutputType = {
    id: string | null
    url: string | null
  }

  export type HttpNetworkErrorDataCountAggregateOutputType = {
    id: number
    url: number
    _all: number
  }


  export type HttpNetworkErrorDataMinAggregateInputType = {
    id?: true
    url?: true
  }

  export type HttpNetworkErrorDataMaxAggregateInputType = {
    id?: true
    url?: true
  }

  export type HttpNetworkErrorDataCountAggregateInputType = {
    id?: true
    url?: true
    _all?: true
  }

  export type HttpNetworkErrorDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HttpNetworkErrorData to aggregate.
     */
    where?: HttpNetworkErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HttpNetworkErrorData to fetch.
     */
    orderBy?: HttpNetworkErrorDataOrderByWithRelationInput | HttpNetworkErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HttpNetworkErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HttpNetworkErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HttpNetworkErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HttpNetworkErrorData
    **/
    _count?: true | HttpNetworkErrorDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HttpNetworkErrorDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HttpNetworkErrorDataMaxAggregateInputType
  }

  export type GetHttpNetworkErrorDataAggregateType<T extends HttpNetworkErrorDataAggregateArgs> = {
        [P in keyof T & keyof AggregateHttpNetworkErrorData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHttpNetworkErrorData[P]>
      : GetScalarType<T[P], AggregateHttpNetworkErrorData[P]>
  }




  export type HttpNetworkErrorDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HttpNetworkErrorDataWhereInput
    orderBy?: HttpNetworkErrorDataOrderByWithAggregationInput | HttpNetworkErrorDataOrderByWithAggregationInput[]
    by: HttpNetworkErrorDataScalarFieldEnum[] | HttpNetworkErrorDataScalarFieldEnum
    having?: HttpNetworkErrorDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HttpNetworkErrorDataCountAggregateInputType | true
    _min?: HttpNetworkErrorDataMinAggregateInputType
    _max?: HttpNetworkErrorDataMaxAggregateInputType
  }

  export type HttpNetworkErrorDataGroupByOutputType = {
    id: string
    url: string
    _count: HttpNetworkErrorDataCountAggregateOutputType | null
    _min: HttpNetworkErrorDataMinAggregateOutputType | null
    _max: HttpNetworkErrorDataMaxAggregateOutputType | null
  }

  type GetHttpNetworkErrorDataGroupByPayload<T extends HttpNetworkErrorDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HttpNetworkErrorDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HttpNetworkErrorDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HttpNetworkErrorDataGroupByOutputType[P]>
            : GetScalarType<T[P], HttpNetworkErrorDataGroupByOutputType[P]>
        }
      >
    >


  export type HttpNetworkErrorDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
  }, ExtArgs["result"]["httpNetworkErrorData"]>

  export type HttpNetworkErrorDataSelectScalar = {
    id?: boolean
    url?: boolean
  }


  export type $HttpNetworkErrorDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HttpNetworkErrorData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
    }, ExtArgs["result"]["httpNetworkErrorData"]>
    composites: {}
  }


  type HttpNetworkErrorDataGetPayload<S extends boolean | null | undefined | HttpNetworkErrorDataDefaultArgs> = $Result.GetResult<Prisma.$HttpNetworkErrorDataPayload, S>

  type HttpNetworkErrorDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HttpNetworkErrorDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HttpNetworkErrorDataCountAggregateInputType | true
    }

  export interface HttpNetworkErrorDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HttpNetworkErrorData'], meta: { name: 'HttpNetworkErrorData' } }
    /**
     * Find zero or one HttpNetworkErrorData that matches the filter.
     * @param {HttpNetworkErrorDataFindUniqueArgs} args - Arguments to find a HttpNetworkErrorData
     * @example
     * // Get one HttpNetworkErrorData
     * const httpNetworkErrorData = await prisma.httpNetworkErrorData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HttpNetworkErrorDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HttpNetworkErrorDataFindUniqueArgs<ExtArgs>>
    ): Prisma__HttpNetworkErrorDataClient<$Result.GetResult<Prisma.$HttpNetworkErrorDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one HttpNetworkErrorData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HttpNetworkErrorDataFindUniqueOrThrowArgs} args - Arguments to find a HttpNetworkErrorData
     * @example
     * // Get one HttpNetworkErrorData
     * const httpNetworkErrorData = await prisma.httpNetworkErrorData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HttpNetworkErrorDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HttpNetworkErrorDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HttpNetworkErrorDataClient<$Result.GetResult<Prisma.$HttpNetworkErrorDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first HttpNetworkErrorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HttpNetworkErrorDataFindFirstArgs} args - Arguments to find a HttpNetworkErrorData
     * @example
     * // Get one HttpNetworkErrorData
     * const httpNetworkErrorData = await prisma.httpNetworkErrorData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HttpNetworkErrorDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HttpNetworkErrorDataFindFirstArgs<ExtArgs>>
    ): Prisma__HttpNetworkErrorDataClient<$Result.GetResult<Prisma.$HttpNetworkErrorDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first HttpNetworkErrorData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HttpNetworkErrorDataFindFirstOrThrowArgs} args - Arguments to find a HttpNetworkErrorData
     * @example
     * // Get one HttpNetworkErrorData
     * const httpNetworkErrorData = await prisma.httpNetworkErrorData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HttpNetworkErrorDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HttpNetworkErrorDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HttpNetworkErrorDataClient<$Result.GetResult<Prisma.$HttpNetworkErrorDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more HttpNetworkErrorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HttpNetworkErrorDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HttpNetworkErrorData
     * const httpNetworkErrorData = await prisma.httpNetworkErrorData.findMany()
     * 
     * // Get first 10 HttpNetworkErrorData
     * const httpNetworkErrorData = await prisma.httpNetworkErrorData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const httpNetworkErrorDataWithIdOnly = await prisma.httpNetworkErrorData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HttpNetworkErrorDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HttpNetworkErrorDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HttpNetworkErrorDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a HttpNetworkErrorData.
     * @param {HttpNetworkErrorDataCreateArgs} args - Arguments to create a HttpNetworkErrorData.
     * @example
     * // Create one HttpNetworkErrorData
     * const HttpNetworkErrorData = await prisma.httpNetworkErrorData.create({
     *   data: {
     *     // ... data to create a HttpNetworkErrorData
     *   }
     * })
     * 
    **/
    create<T extends HttpNetworkErrorDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HttpNetworkErrorDataCreateArgs<ExtArgs>>
    ): Prisma__HttpNetworkErrorDataClient<$Result.GetResult<Prisma.$HttpNetworkErrorDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many HttpNetworkErrorData.
     *     @param {HttpNetworkErrorDataCreateManyArgs} args - Arguments to create many HttpNetworkErrorData.
     *     @example
     *     // Create many HttpNetworkErrorData
     *     const httpNetworkErrorData = await prisma.httpNetworkErrorData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HttpNetworkErrorDataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HttpNetworkErrorDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HttpNetworkErrorData.
     * @param {HttpNetworkErrorDataDeleteArgs} args - Arguments to delete one HttpNetworkErrorData.
     * @example
     * // Delete one HttpNetworkErrorData
     * const HttpNetworkErrorData = await prisma.httpNetworkErrorData.delete({
     *   where: {
     *     // ... filter to delete one HttpNetworkErrorData
     *   }
     * })
     * 
    **/
    delete<T extends HttpNetworkErrorDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HttpNetworkErrorDataDeleteArgs<ExtArgs>>
    ): Prisma__HttpNetworkErrorDataClient<$Result.GetResult<Prisma.$HttpNetworkErrorDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one HttpNetworkErrorData.
     * @param {HttpNetworkErrorDataUpdateArgs} args - Arguments to update one HttpNetworkErrorData.
     * @example
     * // Update one HttpNetworkErrorData
     * const httpNetworkErrorData = await prisma.httpNetworkErrorData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HttpNetworkErrorDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HttpNetworkErrorDataUpdateArgs<ExtArgs>>
    ): Prisma__HttpNetworkErrorDataClient<$Result.GetResult<Prisma.$HttpNetworkErrorDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more HttpNetworkErrorData.
     * @param {HttpNetworkErrorDataDeleteManyArgs} args - Arguments to filter HttpNetworkErrorData to delete.
     * @example
     * // Delete a few HttpNetworkErrorData
     * const { count } = await prisma.httpNetworkErrorData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HttpNetworkErrorDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HttpNetworkErrorDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HttpNetworkErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HttpNetworkErrorDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HttpNetworkErrorData
     * const httpNetworkErrorData = await prisma.httpNetworkErrorData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HttpNetworkErrorDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HttpNetworkErrorDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HttpNetworkErrorData.
     * @param {HttpNetworkErrorDataUpsertArgs} args - Arguments to update or create a HttpNetworkErrorData.
     * @example
     * // Update or create a HttpNetworkErrorData
     * const httpNetworkErrorData = await prisma.httpNetworkErrorData.upsert({
     *   create: {
     *     // ... data to create a HttpNetworkErrorData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HttpNetworkErrorData we want to update
     *   }
     * })
    **/
    upsert<T extends HttpNetworkErrorDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HttpNetworkErrorDataUpsertArgs<ExtArgs>>
    ): Prisma__HttpNetworkErrorDataClient<$Result.GetResult<Prisma.$HttpNetworkErrorDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of HttpNetworkErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HttpNetworkErrorDataCountArgs} args - Arguments to filter HttpNetworkErrorData to count.
     * @example
     * // Count the number of HttpNetworkErrorData
     * const count = await prisma.httpNetworkErrorData.count({
     *   where: {
     *     // ... the filter for the HttpNetworkErrorData we want to count
     *   }
     * })
    **/
    count<T extends HttpNetworkErrorDataCountArgs>(
      args?: Subset<T, HttpNetworkErrorDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HttpNetworkErrorDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HttpNetworkErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HttpNetworkErrorDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HttpNetworkErrorDataAggregateArgs>(args: Subset<T, HttpNetworkErrorDataAggregateArgs>): Prisma.PrismaPromise<GetHttpNetworkErrorDataAggregateType<T>>

    /**
     * Group by HttpNetworkErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HttpNetworkErrorDataGroupByArgs} args - Group by arguments.
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
      T extends HttpNetworkErrorDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HttpNetworkErrorDataGroupByArgs['orderBy'] }
        : { orderBy?: HttpNetworkErrorDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HttpNetworkErrorDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHttpNetworkErrorDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HttpNetworkErrorData model
   */
  readonly fields: HttpNetworkErrorDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HttpNetworkErrorData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HttpNetworkErrorDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the HttpNetworkErrorData model
   */ 
  interface HttpNetworkErrorDataFieldRefs {
    readonly id: FieldRef<"HttpNetworkErrorData", 'String'>
    readonly url: FieldRef<"HttpNetworkErrorData", 'String'>
  }
    

  // Custom InputTypes

  /**
   * HttpNetworkErrorData findUnique
   */
  export type HttpNetworkErrorDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpNetworkErrorData
     */
    select?: HttpNetworkErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which HttpNetworkErrorData to fetch.
     */
    where: HttpNetworkErrorDataWhereUniqueInput
  }


  /**
   * HttpNetworkErrorData findUniqueOrThrow
   */
  export type HttpNetworkErrorDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpNetworkErrorData
     */
    select?: HttpNetworkErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which HttpNetworkErrorData to fetch.
     */
    where: HttpNetworkErrorDataWhereUniqueInput
  }


  /**
   * HttpNetworkErrorData findFirst
   */
  export type HttpNetworkErrorDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpNetworkErrorData
     */
    select?: HttpNetworkErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which HttpNetworkErrorData to fetch.
     */
    where?: HttpNetworkErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HttpNetworkErrorData to fetch.
     */
    orderBy?: HttpNetworkErrorDataOrderByWithRelationInput | HttpNetworkErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HttpNetworkErrorData.
     */
    cursor?: HttpNetworkErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HttpNetworkErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HttpNetworkErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HttpNetworkErrorData.
     */
    distinct?: HttpNetworkErrorDataScalarFieldEnum | HttpNetworkErrorDataScalarFieldEnum[]
  }


  /**
   * HttpNetworkErrorData findFirstOrThrow
   */
  export type HttpNetworkErrorDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpNetworkErrorData
     */
    select?: HttpNetworkErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which HttpNetworkErrorData to fetch.
     */
    where?: HttpNetworkErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HttpNetworkErrorData to fetch.
     */
    orderBy?: HttpNetworkErrorDataOrderByWithRelationInput | HttpNetworkErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HttpNetworkErrorData.
     */
    cursor?: HttpNetworkErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HttpNetworkErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HttpNetworkErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HttpNetworkErrorData.
     */
    distinct?: HttpNetworkErrorDataScalarFieldEnum | HttpNetworkErrorDataScalarFieldEnum[]
  }


  /**
   * HttpNetworkErrorData findMany
   */
  export type HttpNetworkErrorDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpNetworkErrorData
     */
    select?: HttpNetworkErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which HttpNetworkErrorData to fetch.
     */
    where?: HttpNetworkErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HttpNetworkErrorData to fetch.
     */
    orderBy?: HttpNetworkErrorDataOrderByWithRelationInput | HttpNetworkErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HttpNetworkErrorData.
     */
    cursor?: HttpNetworkErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HttpNetworkErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HttpNetworkErrorData.
     */
    skip?: number
    distinct?: HttpNetworkErrorDataScalarFieldEnum | HttpNetworkErrorDataScalarFieldEnum[]
  }


  /**
   * HttpNetworkErrorData create
   */
  export type HttpNetworkErrorDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpNetworkErrorData
     */
    select?: HttpNetworkErrorDataSelect<ExtArgs> | null
    /**
     * The data needed to create a HttpNetworkErrorData.
     */
    data: XOR<HttpNetworkErrorDataCreateInput, HttpNetworkErrorDataUncheckedCreateInput>
  }


  /**
   * HttpNetworkErrorData createMany
   */
  export type HttpNetworkErrorDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HttpNetworkErrorData.
     */
    data: HttpNetworkErrorDataCreateManyInput | HttpNetworkErrorDataCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * HttpNetworkErrorData update
   */
  export type HttpNetworkErrorDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpNetworkErrorData
     */
    select?: HttpNetworkErrorDataSelect<ExtArgs> | null
    /**
     * The data needed to update a HttpNetworkErrorData.
     */
    data: XOR<HttpNetworkErrorDataUpdateInput, HttpNetworkErrorDataUncheckedUpdateInput>
    /**
     * Choose, which HttpNetworkErrorData to update.
     */
    where: HttpNetworkErrorDataWhereUniqueInput
  }


  /**
   * HttpNetworkErrorData updateMany
   */
  export type HttpNetworkErrorDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HttpNetworkErrorData.
     */
    data: XOR<HttpNetworkErrorDataUpdateManyMutationInput, HttpNetworkErrorDataUncheckedUpdateManyInput>
    /**
     * Filter which HttpNetworkErrorData to update
     */
    where?: HttpNetworkErrorDataWhereInput
  }


  /**
   * HttpNetworkErrorData upsert
   */
  export type HttpNetworkErrorDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpNetworkErrorData
     */
    select?: HttpNetworkErrorDataSelect<ExtArgs> | null
    /**
     * The filter to search for the HttpNetworkErrorData to update in case it exists.
     */
    where: HttpNetworkErrorDataWhereUniqueInput
    /**
     * In case the HttpNetworkErrorData found by the `where` argument doesn't exist, create a new HttpNetworkErrorData with this data.
     */
    create: XOR<HttpNetworkErrorDataCreateInput, HttpNetworkErrorDataUncheckedCreateInput>
    /**
     * In case the HttpNetworkErrorData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HttpNetworkErrorDataUpdateInput, HttpNetworkErrorDataUncheckedUpdateInput>
  }


  /**
   * HttpNetworkErrorData delete
   */
  export type HttpNetworkErrorDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpNetworkErrorData
     */
    select?: HttpNetworkErrorDataSelect<ExtArgs> | null
    /**
     * Filter which HttpNetworkErrorData to delete.
     */
    where: HttpNetworkErrorDataWhereUniqueInput
  }


  /**
   * HttpNetworkErrorData deleteMany
   */
  export type HttpNetworkErrorDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HttpNetworkErrorData to delete
     */
    where?: HttpNetworkErrorDataWhereInput
  }


  /**
   * HttpNetworkErrorData without action
   */
  export type HttpNetworkErrorDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpNetworkErrorData
     */
    select?: HttpNetworkErrorDataSelect<ExtArgs> | null
  }



  /**
   * Model HttpSerializationErrorData
   */

  export type AggregateHttpSerializationErrorData = {
    _count: HttpSerializationErrorDataCountAggregateOutputType | null
    _min: HttpSerializationErrorDataMinAggregateOutputType | null
    _max: HttpSerializationErrorDataMaxAggregateOutputType | null
  }

  export type HttpSerializationErrorDataMinAggregateOutputType = {
    id: string | null
    url: string | null
  }

  export type HttpSerializationErrorDataMaxAggregateOutputType = {
    id: string | null
    url: string | null
  }

  export type HttpSerializationErrorDataCountAggregateOutputType = {
    id: number
    url: number
    _all: number
  }


  export type HttpSerializationErrorDataMinAggregateInputType = {
    id?: true
    url?: true
  }

  export type HttpSerializationErrorDataMaxAggregateInputType = {
    id?: true
    url?: true
  }

  export type HttpSerializationErrorDataCountAggregateInputType = {
    id?: true
    url?: true
    _all?: true
  }

  export type HttpSerializationErrorDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HttpSerializationErrorData to aggregate.
     */
    where?: HttpSerializationErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HttpSerializationErrorData to fetch.
     */
    orderBy?: HttpSerializationErrorDataOrderByWithRelationInput | HttpSerializationErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HttpSerializationErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HttpSerializationErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HttpSerializationErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HttpSerializationErrorData
    **/
    _count?: true | HttpSerializationErrorDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HttpSerializationErrorDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HttpSerializationErrorDataMaxAggregateInputType
  }

  export type GetHttpSerializationErrorDataAggregateType<T extends HttpSerializationErrorDataAggregateArgs> = {
        [P in keyof T & keyof AggregateHttpSerializationErrorData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHttpSerializationErrorData[P]>
      : GetScalarType<T[P], AggregateHttpSerializationErrorData[P]>
  }




  export type HttpSerializationErrorDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HttpSerializationErrorDataWhereInput
    orderBy?: HttpSerializationErrorDataOrderByWithAggregationInput | HttpSerializationErrorDataOrderByWithAggregationInput[]
    by: HttpSerializationErrorDataScalarFieldEnum[] | HttpSerializationErrorDataScalarFieldEnum
    having?: HttpSerializationErrorDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HttpSerializationErrorDataCountAggregateInputType | true
    _min?: HttpSerializationErrorDataMinAggregateInputType
    _max?: HttpSerializationErrorDataMaxAggregateInputType
  }

  export type HttpSerializationErrorDataGroupByOutputType = {
    id: string
    url: string
    _count: HttpSerializationErrorDataCountAggregateOutputType | null
    _min: HttpSerializationErrorDataMinAggregateOutputType | null
    _max: HttpSerializationErrorDataMaxAggregateOutputType | null
  }

  type GetHttpSerializationErrorDataGroupByPayload<T extends HttpSerializationErrorDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HttpSerializationErrorDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HttpSerializationErrorDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HttpSerializationErrorDataGroupByOutputType[P]>
            : GetScalarType<T[P], HttpSerializationErrorDataGroupByOutputType[P]>
        }
      >
    >


  export type HttpSerializationErrorDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
  }, ExtArgs["result"]["httpSerializationErrorData"]>

  export type HttpSerializationErrorDataSelectScalar = {
    id?: boolean
    url?: boolean
  }


  export type $HttpSerializationErrorDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HttpSerializationErrorData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
    }, ExtArgs["result"]["httpSerializationErrorData"]>
    composites: {}
  }


  type HttpSerializationErrorDataGetPayload<S extends boolean | null | undefined | HttpSerializationErrorDataDefaultArgs> = $Result.GetResult<Prisma.$HttpSerializationErrorDataPayload, S>

  type HttpSerializationErrorDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HttpSerializationErrorDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HttpSerializationErrorDataCountAggregateInputType | true
    }

  export interface HttpSerializationErrorDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HttpSerializationErrorData'], meta: { name: 'HttpSerializationErrorData' } }
    /**
     * Find zero or one HttpSerializationErrorData that matches the filter.
     * @param {HttpSerializationErrorDataFindUniqueArgs} args - Arguments to find a HttpSerializationErrorData
     * @example
     * // Get one HttpSerializationErrorData
     * const httpSerializationErrorData = await prisma.httpSerializationErrorData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HttpSerializationErrorDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HttpSerializationErrorDataFindUniqueArgs<ExtArgs>>
    ): Prisma__HttpSerializationErrorDataClient<$Result.GetResult<Prisma.$HttpSerializationErrorDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one HttpSerializationErrorData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HttpSerializationErrorDataFindUniqueOrThrowArgs} args - Arguments to find a HttpSerializationErrorData
     * @example
     * // Get one HttpSerializationErrorData
     * const httpSerializationErrorData = await prisma.httpSerializationErrorData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HttpSerializationErrorDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HttpSerializationErrorDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HttpSerializationErrorDataClient<$Result.GetResult<Prisma.$HttpSerializationErrorDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first HttpSerializationErrorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HttpSerializationErrorDataFindFirstArgs} args - Arguments to find a HttpSerializationErrorData
     * @example
     * // Get one HttpSerializationErrorData
     * const httpSerializationErrorData = await prisma.httpSerializationErrorData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HttpSerializationErrorDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HttpSerializationErrorDataFindFirstArgs<ExtArgs>>
    ): Prisma__HttpSerializationErrorDataClient<$Result.GetResult<Prisma.$HttpSerializationErrorDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first HttpSerializationErrorData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HttpSerializationErrorDataFindFirstOrThrowArgs} args - Arguments to find a HttpSerializationErrorData
     * @example
     * // Get one HttpSerializationErrorData
     * const httpSerializationErrorData = await prisma.httpSerializationErrorData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HttpSerializationErrorDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HttpSerializationErrorDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HttpSerializationErrorDataClient<$Result.GetResult<Prisma.$HttpSerializationErrorDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more HttpSerializationErrorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HttpSerializationErrorDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HttpSerializationErrorData
     * const httpSerializationErrorData = await prisma.httpSerializationErrorData.findMany()
     * 
     * // Get first 10 HttpSerializationErrorData
     * const httpSerializationErrorData = await prisma.httpSerializationErrorData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const httpSerializationErrorDataWithIdOnly = await prisma.httpSerializationErrorData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HttpSerializationErrorDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HttpSerializationErrorDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HttpSerializationErrorDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a HttpSerializationErrorData.
     * @param {HttpSerializationErrorDataCreateArgs} args - Arguments to create a HttpSerializationErrorData.
     * @example
     * // Create one HttpSerializationErrorData
     * const HttpSerializationErrorData = await prisma.httpSerializationErrorData.create({
     *   data: {
     *     // ... data to create a HttpSerializationErrorData
     *   }
     * })
     * 
    **/
    create<T extends HttpSerializationErrorDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HttpSerializationErrorDataCreateArgs<ExtArgs>>
    ): Prisma__HttpSerializationErrorDataClient<$Result.GetResult<Prisma.$HttpSerializationErrorDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many HttpSerializationErrorData.
     *     @param {HttpSerializationErrorDataCreateManyArgs} args - Arguments to create many HttpSerializationErrorData.
     *     @example
     *     // Create many HttpSerializationErrorData
     *     const httpSerializationErrorData = await prisma.httpSerializationErrorData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HttpSerializationErrorDataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HttpSerializationErrorDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HttpSerializationErrorData.
     * @param {HttpSerializationErrorDataDeleteArgs} args - Arguments to delete one HttpSerializationErrorData.
     * @example
     * // Delete one HttpSerializationErrorData
     * const HttpSerializationErrorData = await prisma.httpSerializationErrorData.delete({
     *   where: {
     *     // ... filter to delete one HttpSerializationErrorData
     *   }
     * })
     * 
    **/
    delete<T extends HttpSerializationErrorDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HttpSerializationErrorDataDeleteArgs<ExtArgs>>
    ): Prisma__HttpSerializationErrorDataClient<$Result.GetResult<Prisma.$HttpSerializationErrorDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one HttpSerializationErrorData.
     * @param {HttpSerializationErrorDataUpdateArgs} args - Arguments to update one HttpSerializationErrorData.
     * @example
     * // Update one HttpSerializationErrorData
     * const httpSerializationErrorData = await prisma.httpSerializationErrorData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HttpSerializationErrorDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HttpSerializationErrorDataUpdateArgs<ExtArgs>>
    ): Prisma__HttpSerializationErrorDataClient<$Result.GetResult<Prisma.$HttpSerializationErrorDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more HttpSerializationErrorData.
     * @param {HttpSerializationErrorDataDeleteManyArgs} args - Arguments to filter HttpSerializationErrorData to delete.
     * @example
     * // Delete a few HttpSerializationErrorData
     * const { count } = await prisma.httpSerializationErrorData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HttpSerializationErrorDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HttpSerializationErrorDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HttpSerializationErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HttpSerializationErrorDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HttpSerializationErrorData
     * const httpSerializationErrorData = await prisma.httpSerializationErrorData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HttpSerializationErrorDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HttpSerializationErrorDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HttpSerializationErrorData.
     * @param {HttpSerializationErrorDataUpsertArgs} args - Arguments to update or create a HttpSerializationErrorData.
     * @example
     * // Update or create a HttpSerializationErrorData
     * const httpSerializationErrorData = await prisma.httpSerializationErrorData.upsert({
     *   create: {
     *     // ... data to create a HttpSerializationErrorData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HttpSerializationErrorData we want to update
     *   }
     * })
    **/
    upsert<T extends HttpSerializationErrorDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HttpSerializationErrorDataUpsertArgs<ExtArgs>>
    ): Prisma__HttpSerializationErrorDataClient<$Result.GetResult<Prisma.$HttpSerializationErrorDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of HttpSerializationErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HttpSerializationErrorDataCountArgs} args - Arguments to filter HttpSerializationErrorData to count.
     * @example
     * // Count the number of HttpSerializationErrorData
     * const count = await prisma.httpSerializationErrorData.count({
     *   where: {
     *     // ... the filter for the HttpSerializationErrorData we want to count
     *   }
     * })
    **/
    count<T extends HttpSerializationErrorDataCountArgs>(
      args?: Subset<T, HttpSerializationErrorDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HttpSerializationErrorDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HttpSerializationErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HttpSerializationErrorDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HttpSerializationErrorDataAggregateArgs>(args: Subset<T, HttpSerializationErrorDataAggregateArgs>): Prisma.PrismaPromise<GetHttpSerializationErrorDataAggregateType<T>>

    /**
     * Group by HttpSerializationErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HttpSerializationErrorDataGroupByArgs} args - Group by arguments.
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
      T extends HttpSerializationErrorDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HttpSerializationErrorDataGroupByArgs['orderBy'] }
        : { orderBy?: HttpSerializationErrorDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HttpSerializationErrorDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHttpSerializationErrorDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HttpSerializationErrorData model
   */
  readonly fields: HttpSerializationErrorDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HttpSerializationErrorData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HttpSerializationErrorDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the HttpSerializationErrorData model
   */ 
  interface HttpSerializationErrorDataFieldRefs {
    readonly id: FieldRef<"HttpSerializationErrorData", 'String'>
    readonly url: FieldRef<"HttpSerializationErrorData", 'String'>
  }
    

  // Custom InputTypes

  /**
   * HttpSerializationErrorData findUnique
   */
  export type HttpSerializationErrorDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpSerializationErrorData
     */
    select?: HttpSerializationErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which HttpSerializationErrorData to fetch.
     */
    where: HttpSerializationErrorDataWhereUniqueInput
  }


  /**
   * HttpSerializationErrorData findUniqueOrThrow
   */
  export type HttpSerializationErrorDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpSerializationErrorData
     */
    select?: HttpSerializationErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which HttpSerializationErrorData to fetch.
     */
    where: HttpSerializationErrorDataWhereUniqueInput
  }


  /**
   * HttpSerializationErrorData findFirst
   */
  export type HttpSerializationErrorDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpSerializationErrorData
     */
    select?: HttpSerializationErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which HttpSerializationErrorData to fetch.
     */
    where?: HttpSerializationErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HttpSerializationErrorData to fetch.
     */
    orderBy?: HttpSerializationErrorDataOrderByWithRelationInput | HttpSerializationErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HttpSerializationErrorData.
     */
    cursor?: HttpSerializationErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HttpSerializationErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HttpSerializationErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HttpSerializationErrorData.
     */
    distinct?: HttpSerializationErrorDataScalarFieldEnum | HttpSerializationErrorDataScalarFieldEnum[]
  }


  /**
   * HttpSerializationErrorData findFirstOrThrow
   */
  export type HttpSerializationErrorDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpSerializationErrorData
     */
    select?: HttpSerializationErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which HttpSerializationErrorData to fetch.
     */
    where?: HttpSerializationErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HttpSerializationErrorData to fetch.
     */
    orderBy?: HttpSerializationErrorDataOrderByWithRelationInput | HttpSerializationErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HttpSerializationErrorData.
     */
    cursor?: HttpSerializationErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HttpSerializationErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HttpSerializationErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HttpSerializationErrorData.
     */
    distinct?: HttpSerializationErrorDataScalarFieldEnum | HttpSerializationErrorDataScalarFieldEnum[]
  }


  /**
   * HttpSerializationErrorData findMany
   */
  export type HttpSerializationErrorDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpSerializationErrorData
     */
    select?: HttpSerializationErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which HttpSerializationErrorData to fetch.
     */
    where?: HttpSerializationErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HttpSerializationErrorData to fetch.
     */
    orderBy?: HttpSerializationErrorDataOrderByWithRelationInput | HttpSerializationErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HttpSerializationErrorData.
     */
    cursor?: HttpSerializationErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HttpSerializationErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HttpSerializationErrorData.
     */
    skip?: number
    distinct?: HttpSerializationErrorDataScalarFieldEnum | HttpSerializationErrorDataScalarFieldEnum[]
  }


  /**
   * HttpSerializationErrorData create
   */
  export type HttpSerializationErrorDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpSerializationErrorData
     */
    select?: HttpSerializationErrorDataSelect<ExtArgs> | null
    /**
     * The data needed to create a HttpSerializationErrorData.
     */
    data: XOR<HttpSerializationErrorDataCreateInput, HttpSerializationErrorDataUncheckedCreateInput>
  }


  /**
   * HttpSerializationErrorData createMany
   */
  export type HttpSerializationErrorDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HttpSerializationErrorData.
     */
    data: HttpSerializationErrorDataCreateManyInput | HttpSerializationErrorDataCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * HttpSerializationErrorData update
   */
  export type HttpSerializationErrorDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpSerializationErrorData
     */
    select?: HttpSerializationErrorDataSelect<ExtArgs> | null
    /**
     * The data needed to update a HttpSerializationErrorData.
     */
    data: XOR<HttpSerializationErrorDataUpdateInput, HttpSerializationErrorDataUncheckedUpdateInput>
    /**
     * Choose, which HttpSerializationErrorData to update.
     */
    where: HttpSerializationErrorDataWhereUniqueInput
  }


  /**
   * HttpSerializationErrorData updateMany
   */
  export type HttpSerializationErrorDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HttpSerializationErrorData.
     */
    data: XOR<HttpSerializationErrorDataUpdateManyMutationInput, HttpSerializationErrorDataUncheckedUpdateManyInput>
    /**
     * Filter which HttpSerializationErrorData to update
     */
    where?: HttpSerializationErrorDataWhereInput
  }


  /**
   * HttpSerializationErrorData upsert
   */
  export type HttpSerializationErrorDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpSerializationErrorData
     */
    select?: HttpSerializationErrorDataSelect<ExtArgs> | null
    /**
     * The filter to search for the HttpSerializationErrorData to update in case it exists.
     */
    where: HttpSerializationErrorDataWhereUniqueInput
    /**
     * In case the HttpSerializationErrorData found by the `where` argument doesn't exist, create a new HttpSerializationErrorData with this data.
     */
    create: XOR<HttpSerializationErrorDataCreateInput, HttpSerializationErrorDataUncheckedCreateInput>
    /**
     * In case the HttpSerializationErrorData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HttpSerializationErrorDataUpdateInput, HttpSerializationErrorDataUncheckedUpdateInput>
  }


  /**
   * HttpSerializationErrorData delete
   */
  export type HttpSerializationErrorDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpSerializationErrorData
     */
    select?: HttpSerializationErrorDataSelect<ExtArgs> | null
    /**
     * Filter which HttpSerializationErrorData to delete.
     */
    where: HttpSerializationErrorDataWhereUniqueInput
  }


  /**
   * HttpSerializationErrorData deleteMany
   */
  export type HttpSerializationErrorDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HttpSerializationErrorData to delete
     */
    where?: HttpSerializationErrorDataWhereInput
  }


  /**
   * HttpSerializationErrorData without action
   */
  export type HttpSerializationErrorDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpSerializationErrorData
     */
    select?: HttpSerializationErrorDataSelect<ExtArgs> | null
  }



  /**
   * Model HttpClientErrorData
   */

  export type AggregateHttpClientErrorData = {
    _count: HttpClientErrorDataCountAggregateOutputType | null
    _avg: HttpClientErrorDataAvgAggregateOutputType | null
    _sum: HttpClientErrorDataSumAggregateOutputType | null
    _min: HttpClientErrorDataMinAggregateOutputType | null
    _max: HttpClientErrorDataMaxAggregateOutputType | null
  }

  export type HttpClientErrorDataAvgAggregateOutputType = {
    status: number | null
  }

  export type HttpClientErrorDataSumAggregateOutputType = {
    status: number | null
  }

  export type HttpClientErrorDataMinAggregateOutputType = {
    id: string | null
    url: string | null
    status: number | null
  }

  export type HttpClientErrorDataMaxAggregateOutputType = {
    id: string | null
    url: string | null
    status: number | null
  }

  export type HttpClientErrorDataCountAggregateOutputType = {
    id: number
    url: number
    status: number
    _all: number
  }


  export type HttpClientErrorDataAvgAggregateInputType = {
    status?: true
  }

  export type HttpClientErrorDataSumAggregateInputType = {
    status?: true
  }

  export type HttpClientErrorDataMinAggregateInputType = {
    id?: true
    url?: true
    status?: true
  }

  export type HttpClientErrorDataMaxAggregateInputType = {
    id?: true
    url?: true
    status?: true
  }

  export type HttpClientErrorDataCountAggregateInputType = {
    id?: true
    url?: true
    status?: true
    _all?: true
  }

  export type HttpClientErrorDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HttpClientErrorData to aggregate.
     */
    where?: HttpClientErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HttpClientErrorData to fetch.
     */
    orderBy?: HttpClientErrorDataOrderByWithRelationInput | HttpClientErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HttpClientErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HttpClientErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HttpClientErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HttpClientErrorData
    **/
    _count?: true | HttpClientErrorDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HttpClientErrorDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HttpClientErrorDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HttpClientErrorDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HttpClientErrorDataMaxAggregateInputType
  }

  export type GetHttpClientErrorDataAggregateType<T extends HttpClientErrorDataAggregateArgs> = {
        [P in keyof T & keyof AggregateHttpClientErrorData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHttpClientErrorData[P]>
      : GetScalarType<T[P], AggregateHttpClientErrorData[P]>
  }




  export type HttpClientErrorDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HttpClientErrorDataWhereInput
    orderBy?: HttpClientErrorDataOrderByWithAggregationInput | HttpClientErrorDataOrderByWithAggregationInput[]
    by: HttpClientErrorDataScalarFieldEnum[] | HttpClientErrorDataScalarFieldEnum
    having?: HttpClientErrorDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HttpClientErrorDataCountAggregateInputType | true
    _avg?: HttpClientErrorDataAvgAggregateInputType
    _sum?: HttpClientErrorDataSumAggregateInputType
    _min?: HttpClientErrorDataMinAggregateInputType
    _max?: HttpClientErrorDataMaxAggregateInputType
  }

  export type HttpClientErrorDataGroupByOutputType = {
    id: string
    url: string
    status: number
    _count: HttpClientErrorDataCountAggregateOutputType | null
    _avg: HttpClientErrorDataAvgAggregateOutputType | null
    _sum: HttpClientErrorDataSumAggregateOutputType | null
    _min: HttpClientErrorDataMinAggregateOutputType | null
    _max: HttpClientErrorDataMaxAggregateOutputType | null
  }

  type GetHttpClientErrorDataGroupByPayload<T extends HttpClientErrorDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HttpClientErrorDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HttpClientErrorDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HttpClientErrorDataGroupByOutputType[P]>
            : GetScalarType<T[P], HttpClientErrorDataGroupByOutputType[P]>
        }
      >
    >


  export type HttpClientErrorDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    status?: boolean
  }, ExtArgs["result"]["httpClientErrorData"]>

  export type HttpClientErrorDataSelectScalar = {
    id?: boolean
    url?: boolean
    status?: boolean
  }


  export type $HttpClientErrorDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HttpClientErrorData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      status: number
    }, ExtArgs["result"]["httpClientErrorData"]>
    composites: {}
  }


  type HttpClientErrorDataGetPayload<S extends boolean | null | undefined | HttpClientErrorDataDefaultArgs> = $Result.GetResult<Prisma.$HttpClientErrorDataPayload, S>

  type HttpClientErrorDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HttpClientErrorDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HttpClientErrorDataCountAggregateInputType | true
    }

  export interface HttpClientErrorDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HttpClientErrorData'], meta: { name: 'HttpClientErrorData' } }
    /**
     * Find zero or one HttpClientErrorData that matches the filter.
     * @param {HttpClientErrorDataFindUniqueArgs} args - Arguments to find a HttpClientErrorData
     * @example
     * // Get one HttpClientErrorData
     * const httpClientErrorData = await prisma.httpClientErrorData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HttpClientErrorDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HttpClientErrorDataFindUniqueArgs<ExtArgs>>
    ): Prisma__HttpClientErrorDataClient<$Result.GetResult<Prisma.$HttpClientErrorDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one HttpClientErrorData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HttpClientErrorDataFindUniqueOrThrowArgs} args - Arguments to find a HttpClientErrorData
     * @example
     * // Get one HttpClientErrorData
     * const httpClientErrorData = await prisma.httpClientErrorData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HttpClientErrorDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HttpClientErrorDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HttpClientErrorDataClient<$Result.GetResult<Prisma.$HttpClientErrorDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first HttpClientErrorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HttpClientErrorDataFindFirstArgs} args - Arguments to find a HttpClientErrorData
     * @example
     * // Get one HttpClientErrorData
     * const httpClientErrorData = await prisma.httpClientErrorData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HttpClientErrorDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HttpClientErrorDataFindFirstArgs<ExtArgs>>
    ): Prisma__HttpClientErrorDataClient<$Result.GetResult<Prisma.$HttpClientErrorDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first HttpClientErrorData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HttpClientErrorDataFindFirstOrThrowArgs} args - Arguments to find a HttpClientErrorData
     * @example
     * // Get one HttpClientErrorData
     * const httpClientErrorData = await prisma.httpClientErrorData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HttpClientErrorDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HttpClientErrorDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HttpClientErrorDataClient<$Result.GetResult<Prisma.$HttpClientErrorDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more HttpClientErrorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HttpClientErrorDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HttpClientErrorData
     * const httpClientErrorData = await prisma.httpClientErrorData.findMany()
     * 
     * // Get first 10 HttpClientErrorData
     * const httpClientErrorData = await prisma.httpClientErrorData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const httpClientErrorDataWithIdOnly = await prisma.httpClientErrorData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HttpClientErrorDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HttpClientErrorDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HttpClientErrorDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a HttpClientErrorData.
     * @param {HttpClientErrorDataCreateArgs} args - Arguments to create a HttpClientErrorData.
     * @example
     * // Create one HttpClientErrorData
     * const HttpClientErrorData = await prisma.httpClientErrorData.create({
     *   data: {
     *     // ... data to create a HttpClientErrorData
     *   }
     * })
     * 
    **/
    create<T extends HttpClientErrorDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HttpClientErrorDataCreateArgs<ExtArgs>>
    ): Prisma__HttpClientErrorDataClient<$Result.GetResult<Prisma.$HttpClientErrorDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many HttpClientErrorData.
     *     @param {HttpClientErrorDataCreateManyArgs} args - Arguments to create many HttpClientErrorData.
     *     @example
     *     // Create many HttpClientErrorData
     *     const httpClientErrorData = await prisma.httpClientErrorData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HttpClientErrorDataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HttpClientErrorDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HttpClientErrorData.
     * @param {HttpClientErrorDataDeleteArgs} args - Arguments to delete one HttpClientErrorData.
     * @example
     * // Delete one HttpClientErrorData
     * const HttpClientErrorData = await prisma.httpClientErrorData.delete({
     *   where: {
     *     // ... filter to delete one HttpClientErrorData
     *   }
     * })
     * 
    **/
    delete<T extends HttpClientErrorDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HttpClientErrorDataDeleteArgs<ExtArgs>>
    ): Prisma__HttpClientErrorDataClient<$Result.GetResult<Prisma.$HttpClientErrorDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one HttpClientErrorData.
     * @param {HttpClientErrorDataUpdateArgs} args - Arguments to update one HttpClientErrorData.
     * @example
     * // Update one HttpClientErrorData
     * const httpClientErrorData = await prisma.httpClientErrorData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HttpClientErrorDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HttpClientErrorDataUpdateArgs<ExtArgs>>
    ): Prisma__HttpClientErrorDataClient<$Result.GetResult<Prisma.$HttpClientErrorDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more HttpClientErrorData.
     * @param {HttpClientErrorDataDeleteManyArgs} args - Arguments to filter HttpClientErrorData to delete.
     * @example
     * // Delete a few HttpClientErrorData
     * const { count } = await prisma.httpClientErrorData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HttpClientErrorDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HttpClientErrorDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HttpClientErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HttpClientErrorDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HttpClientErrorData
     * const httpClientErrorData = await prisma.httpClientErrorData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HttpClientErrorDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HttpClientErrorDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HttpClientErrorData.
     * @param {HttpClientErrorDataUpsertArgs} args - Arguments to update or create a HttpClientErrorData.
     * @example
     * // Update or create a HttpClientErrorData
     * const httpClientErrorData = await prisma.httpClientErrorData.upsert({
     *   create: {
     *     // ... data to create a HttpClientErrorData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HttpClientErrorData we want to update
     *   }
     * })
    **/
    upsert<T extends HttpClientErrorDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HttpClientErrorDataUpsertArgs<ExtArgs>>
    ): Prisma__HttpClientErrorDataClient<$Result.GetResult<Prisma.$HttpClientErrorDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of HttpClientErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HttpClientErrorDataCountArgs} args - Arguments to filter HttpClientErrorData to count.
     * @example
     * // Count the number of HttpClientErrorData
     * const count = await prisma.httpClientErrorData.count({
     *   where: {
     *     // ... the filter for the HttpClientErrorData we want to count
     *   }
     * })
    **/
    count<T extends HttpClientErrorDataCountArgs>(
      args?: Subset<T, HttpClientErrorDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HttpClientErrorDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HttpClientErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HttpClientErrorDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HttpClientErrorDataAggregateArgs>(args: Subset<T, HttpClientErrorDataAggregateArgs>): Prisma.PrismaPromise<GetHttpClientErrorDataAggregateType<T>>

    /**
     * Group by HttpClientErrorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HttpClientErrorDataGroupByArgs} args - Group by arguments.
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
      T extends HttpClientErrorDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HttpClientErrorDataGroupByArgs['orderBy'] }
        : { orderBy?: HttpClientErrorDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HttpClientErrorDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHttpClientErrorDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HttpClientErrorData model
   */
  readonly fields: HttpClientErrorDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HttpClientErrorData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HttpClientErrorDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the HttpClientErrorData model
   */ 
  interface HttpClientErrorDataFieldRefs {
    readonly id: FieldRef<"HttpClientErrorData", 'String'>
    readonly url: FieldRef<"HttpClientErrorData", 'String'>
    readonly status: FieldRef<"HttpClientErrorData", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * HttpClientErrorData findUnique
   */
  export type HttpClientErrorDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpClientErrorData
     */
    select?: HttpClientErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which HttpClientErrorData to fetch.
     */
    where: HttpClientErrorDataWhereUniqueInput
  }


  /**
   * HttpClientErrorData findUniqueOrThrow
   */
  export type HttpClientErrorDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpClientErrorData
     */
    select?: HttpClientErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which HttpClientErrorData to fetch.
     */
    where: HttpClientErrorDataWhereUniqueInput
  }


  /**
   * HttpClientErrorData findFirst
   */
  export type HttpClientErrorDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpClientErrorData
     */
    select?: HttpClientErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which HttpClientErrorData to fetch.
     */
    where?: HttpClientErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HttpClientErrorData to fetch.
     */
    orderBy?: HttpClientErrorDataOrderByWithRelationInput | HttpClientErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HttpClientErrorData.
     */
    cursor?: HttpClientErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HttpClientErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HttpClientErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HttpClientErrorData.
     */
    distinct?: HttpClientErrorDataScalarFieldEnum | HttpClientErrorDataScalarFieldEnum[]
  }


  /**
   * HttpClientErrorData findFirstOrThrow
   */
  export type HttpClientErrorDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpClientErrorData
     */
    select?: HttpClientErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which HttpClientErrorData to fetch.
     */
    where?: HttpClientErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HttpClientErrorData to fetch.
     */
    orderBy?: HttpClientErrorDataOrderByWithRelationInput | HttpClientErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HttpClientErrorData.
     */
    cursor?: HttpClientErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HttpClientErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HttpClientErrorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HttpClientErrorData.
     */
    distinct?: HttpClientErrorDataScalarFieldEnum | HttpClientErrorDataScalarFieldEnum[]
  }


  /**
   * HttpClientErrorData findMany
   */
  export type HttpClientErrorDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpClientErrorData
     */
    select?: HttpClientErrorDataSelect<ExtArgs> | null
    /**
     * Filter, which HttpClientErrorData to fetch.
     */
    where?: HttpClientErrorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HttpClientErrorData to fetch.
     */
    orderBy?: HttpClientErrorDataOrderByWithRelationInput | HttpClientErrorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HttpClientErrorData.
     */
    cursor?: HttpClientErrorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HttpClientErrorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HttpClientErrorData.
     */
    skip?: number
    distinct?: HttpClientErrorDataScalarFieldEnum | HttpClientErrorDataScalarFieldEnum[]
  }


  /**
   * HttpClientErrorData create
   */
  export type HttpClientErrorDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpClientErrorData
     */
    select?: HttpClientErrorDataSelect<ExtArgs> | null
    /**
     * The data needed to create a HttpClientErrorData.
     */
    data: XOR<HttpClientErrorDataCreateInput, HttpClientErrorDataUncheckedCreateInput>
  }


  /**
   * HttpClientErrorData createMany
   */
  export type HttpClientErrorDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HttpClientErrorData.
     */
    data: HttpClientErrorDataCreateManyInput | HttpClientErrorDataCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * HttpClientErrorData update
   */
  export type HttpClientErrorDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpClientErrorData
     */
    select?: HttpClientErrorDataSelect<ExtArgs> | null
    /**
     * The data needed to update a HttpClientErrorData.
     */
    data: XOR<HttpClientErrorDataUpdateInput, HttpClientErrorDataUncheckedUpdateInput>
    /**
     * Choose, which HttpClientErrorData to update.
     */
    where: HttpClientErrorDataWhereUniqueInput
  }


  /**
   * HttpClientErrorData updateMany
   */
  export type HttpClientErrorDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HttpClientErrorData.
     */
    data: XOR<HttpClientErrorDataUpdateManyMutationInput, HttpClientErrorDataUncheckedUpdateManyInput>
    /**
     * Filter which HttpClientErrorData to update
     */
    where?: HttpClientErrorDataWhereInput
  }


  /**
   * HttpClientErrorData upsert
   */
  export type HttpClientErrorDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpClientErrorData
     */
    select?: HttpClientErrorDataSelect<ExtArgs> | null
    /**
     * The filter to search for the HttpClientErrorData to update in case it exists.
     */
    where: HttpClientErrorDataWhereUniqueInput
    /**
     * In case the HttpClientErrorData found by the `where` argument doesn't exist, create a new HttpClientErrorData with this data.
     */
    create: XOR<HttpClientErrorDataCreateInput, HttpClientErrorDataUncheckedCreateInput>
    /**
     * In case the HttpClientErrorData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HttpClientErrorDataUpdateInput, HttpClientErrorDataUncheckedUpdateInput>
  }


  /**
   * HttpClientErrorData delete
   */
  export type HttpClientErrorDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpClientErrorData
     */
    select?: HttpClientErrorDataSelect<ExtArgs> | null
    /**
     * Filter which HttpClientErrorData to delete.
     */
    where: HttpClientErrorDataWhereUniqueInput
  }


  /**
   * HttpClientErrorData deleteMany
   */
  export type HttpClientErrorDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HttpClientErrorData to delete
     */
    where?: HttpClientErrorDataWhereInput
  }


  /**
   * HttpClientErrorData without action
   */
  export type HttpClientErrorDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HttpClientErrorData
     */
    select?: HttpClientErrorDataSelect<ExtArgs> | null
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
    parentHtml: string | null
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
      parentHtml: string | null
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
    parentHtml: string | null
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
      parentHtml: string | null
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
    data?: XOR<MissingTextErrorDataCreateInput, MissingTextErrorDataUncheckedCreateInput>
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
    parentHtml: string | null
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
      parentHtml: string | null
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
    data?: XOR<NonUniqueTextErrorDataCreateInput, NonUniqueTextErrorDataUncheckedCreateInput>
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
   * Model ProductRecordError
   */

  export type AggregateProductRecordError = {
    _count: ProductRecordErrorCountAggregateOutputType | null
    _min: ProductRecordErrorMinAggregateOutputType | null
    _max: ProductRecordErrorMaxAggregateOutputType | null
  }

  export type ProductRecordErrorMinAggregateOutputType = {
    id: string | null
    errorId: string | null
    errorCode: $Enums.ScrapingErrorCode | null
    recordId: string | null
    field: $Enums.ProductRecordDataField | null
    message: string | null
  }

  export type ProductRecordErrorMaxAggregateOutputType = {
    id: string | null
    errorId: string | null
    errorCode: $Enums.ScrapingErrorCode | null
    recordId: string | null
    field: $Enums.ProductRecordDataField | null
    message: string | null
  }

  export type ProductRecordErrorCountAggregateOutputType = {
    id: number
    errorId: number
    errorCode: number
    recordId: number
    field: number
    message: number
    _all: number
  }


  export type ProductRecordErrorMinAggregateInputType = {
    id?: true
    errorId?: true
    errorCode?: true
    recordId?: true
    field?: true
    message?: true
  }

  export type ProductRecordErrorMaxAggregateInputType = {
    id?: true
    errorId?: true
    errorCode?: true
    recordId?: true
    field?: true
    message?: true
  }

  export type ProductRecordErrorCountAggregateInputType = {
    id?: true
    errorId?: true
    errorCode?: true
    recordId?: true
    field?: true
    message?: true
    _all?: true
  }

  export type ProductRecordErrorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductRecordError to aggregate.
     */
    where?: ProductRecordErrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRecordErrors to fetch.
     */
    orderBy?: ProductRecordErrorOrderByWithRelationInput | ProductRecordErrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductRecordErrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRecordErrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRecordErrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductRecordErrors
    **/
    _count?: true | ProductRecordErrorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductRecordErrorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductRecordErrorMaxAggregateInputType
  }

  export type GetProductRecordErrorAggregateType<T extends ProductRecordErrorAggregateArgs> = {
        [P in keyof T & keyof AggregateProductRecordError]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductRecordError[P]>
      : GetScalarType<T[P], AggregateProductRecordError[P]>
  }




  export type ProductRecordErrorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductRecordErrorWhereInput
    orderBy?: ProductRecordErrorOrderByWithAggregationInput | ProductRecordErrorOrderByWithAggregationInput[]
    by: ProductRecordErrorScalarFieldEnum[] | ProductRecordErrorScalarFieldEnum
    having?: ProductRecordErrorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductRecordErrorCountAggregateInputType | true
    _min?: ProductRecordErrorMinAggregateInputType
    _max?: ProductRecordErrorMaxAggregateInputType
  }

  export type ProductRecordErrorGroupByOutputType = {
    id: string
    errorId: string
    errorCode: $Enums.ScrapingErrorCode
    recordId: string
    field: $Enums.ProductRecordDataField
    message: string
    _count: ProductRecordErrorCountAggregateOutputType | null
    _min: ProductRecordErrorMinAggregateOutputType | null
    _max: ProductRecordErrorMaxAggregateOutputType | null
  }

  type GetProductRecordErrorGroupByPayload<T extends ProductRecordErrorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductRecordErrorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductRecordErrorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductRecordErrorGroupByOutputType[P]>
            : GetScalarType<T[P], ProductRecordErrorGroupByOutputType[P]>
        }
      >
    >


  export type ProductRecordErrorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    errorId?: boolean
    errorCode?: boolean
    recordId?: boolean
    field?: boolean
    message?: boolean
    record?: boolean | ProductRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productRecordError"]>

  export type ProductRecordErrorSelectScalar = {
    id?: boolean
    errorId?: boolean
    errorCode?: boolean
    recordId?: boolean
    field?: boolean
    message?: boolean
  }

  export type ProductRecordErrorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    record?: boolean | ProductRecordDefaultArgs<ExtArgs>
  }


  export type $ProductRecordErrorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductRecordError"
    objects: {
      record: Prisma.$ProductRecordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      errorId: string
      errorCode: $Enums.ScrapingErrorCode
      recordId: string
      field: $Enums.ProductRecordDataField
      message: string
    }, ExtArgs["result"]["productRecordError"]>
    composites: {}
  }


  type ProductRecordErrorGetPayload<S extends boolean | null | undefined | ProductRecordErrorDefaultArgs> = $Result.GetResult<Prisma.$ProductRecordErrorPayload, S>

  type ProductRecordErrorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductRecordErrorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductRecordErrorCountAggregateInputType | true
    }

  export interface ProductRecordErrorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductRecordError'], meta: { name: 'ProductRecordError' } }
    /**
     * Find zero or one ProductRecordError that matches the filter.
     * @param {ProductRecordErrorFindUniqueArgs} args - Arguments to find a ProductRecordError
     * @example
     * // Get one ProductRecordError
     * const productRecordError = await prisma.productRecordError.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductRecordErrorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductRecordErrorFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductRecordErrorClient<$Result.GetResult<Prisma.$ProductRecordErrorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductRecordError that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductRecordErrorFindUniqueOrThrowArgs} args - Arguments to find a ProductRecordError
     * @example
     * // Get one ProductRecordError
     * const productRecordError = await prisma.productRecordError.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductRecordErrorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductRecordErrorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductRecordErrorClient<$Result.GetResult<Prisma.$ProductRecordErrorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductRecordError that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecordErrorFindFirstArgs} args - Arguments to find a ProductRecordError
     * @example
     * // Get one ProductRecordError
     * const productRecordError = await prisma.productRecordError.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductRecordErrorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductRecordErrorFindFirstArgs<ExtArgs>>
    ): Prisma__ProductRecordErrorClient<$Result.GetResult<Prisma.$ProductRecordErrorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductRecordError that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecordErrorFindFirstOrThrowArgs} args - Arguments to find a ProductRecordError
     * @example
     * // Get one ProductRecordError
     * const productRecordError = await prisma.productRecordError.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductRecordErrorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductRecordErrorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductRecordErrorClient<$Result.GetResult<Prisma.$ProductRecordErrorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductRecordErrors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecordErrorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductRecordErrors
     * const productRecordErrors = await prisma.productRecordError.findMany()
     * 
     * // Get first 10 ProductRecordErrors
     * const productRecordErrors = await prisma.productRecordError.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productRecordErrorWithIdOnly = await prisma.productRecordError.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductRecordErrorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductRecordErrorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductRecordErrorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductRecordError.
     * @param {ProductRecordErrorCreateArgs} args - Arguments to create a ProductRecordError.
     * @example
     * // Create one ProductRecordError
     * const ProductRecordError = await prisma.productRecordError.create({
     *   data: {
     *     // ... data to create a ProductRecordError
     *   }
     * })
     * 
    **/
    create<T extends ProductRecordErrorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductRecordErrorCreateArgs<ExtArgs>>
    ): Prisma__ProductRecordErrorClient<$Result.GetResult<Prisma.$ProductRecordErrorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductRecordErrors.
     *     @param {ProductRecordErrorCreateManyArgs} args - Arguments to create many ProductRecordErrors.
     *     @example
     *     // Create many ProductRecordErrors
     *     const productRecordError = await prisma.productRecordError.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductRecordErrorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductRecordErrorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductRecordError.
     * @param {ProductRecordErrorDeleteArgs} args - Arguments to delete one ProductRecordError.
     * @example
     * // Delete one ProductRecordError
     * const ProductRecordError = await prisma.productRecordError.delete({
     *   where: {
     *     // ... filter to delete one ProductRecordError
     *   }
     * })
     * 
    **/
    delete<T extends ProductRecordErrorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductRecordErrorDeleteArgs<ExtArgs>>
    ): Prisma__ProductRecordErrorClient<$Result.GetResult<Prisma.$ProductRecordErrorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductRecordError.
     * @param {ProductRecordErrorUpdateArgs} args - Arguments to update one ProductRecordError.
     * @example
     * // Update one ProductRecordError
     * const productRecordError = await prisma.productRecordError.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductRecordErrorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductRecordErrorUpdateArgs<ExtArgs>>
    ): Prisma__ProductRecordErrorClient<$Result.GetResult<Prisma.$ProductRecordErrorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductRecordErrors.
     * @param {ProductRecordErrorDeleteManyArgs} args - Arguments to filter ProductRecordErrors to delete.
     * @example
     * // Delete a few ProductRecordErrors
     * const { count } = await prisma.productRecordError.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductRecordErrorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductRecordErrorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductRecordErrors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecordErrorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductRecordErrors
     * const productRecordError = await prisma.productRecordError.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductRecordErrorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductRecordErrorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductRecordError.
     * @param {ProductRecordErrorUpsertArgs} args - Arguments to update or create a ProductRecordError.
     * @example
     * // Update or create a ProductRecordError
     * const productRecordError = await prisma.productRecordError.upsert({
     *   create: {
     *     // ... data to create a ProductRecordError
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductRecordError we want to update
     *   }
     * })
    **/
    upsert<T extends ProductRecordErrorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductRecordErrorUpsertArgs<ExtArgs>>
    ): Prisma__ProductRecordErrorClient<$Result.GetResult<Prisma.$ProductRecordErrorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductRecordErrors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecordErrorCountArgs} args - Arguments to filter ProductRecordErrors to count.
     * @example
     * // Count the number of ProductRecordErrors
     * const count = await prisma.productRecordError.count({
     *   where: {
     *     // ... the filter for the ProductRecordErrors we want to count
     *   }
     * })
    **/
    count<T extends ProductRecordErrorCountArgs>(
      args?: Subset<T, ProductRecordErrorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductRecordErrorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductRecordError.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecordErrorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductRecordErrorAggregateArgs>(args: Subset<T, ProductRecordErrorAggregateArgs>): Prisma.PrismaPromise<GetProductRecordErrorAggregateType<T>>

    /**
     * Group by ProductRecordError.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRecordErrorGroupByArgs} args - Group by arguments.
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
      T extends ProductRecordErrorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductRecordErrorGroupByArgs['orderBy'] }
        : { orderBy?: ProductRecordErrorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductRecordErrorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductRecordErrorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductRecordError model
   */
  readonly fields: ProductRecordErrorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductRecordError.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductRecordErrorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    record<T extends ProductRecordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductRecordDefaultArgs<ExtArgs>>): Prisma__ProductRecordClient<$Result.GetResult<Prisma.$ProductRecordPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the ProductRecordError model
   */ 
  interface ProductRecordErrorFieldRefs {
    readonly id: FieldRef<"ProductRecordError", 'String'>
    readonly errorId: FieldRef<"ProductRecordError", 'String'>
    readonly errorCode: FieldRef<"ProductRecordError", 'ScrapingErrorCode'>
    readonly recordId: FieldRef<"ProductRecordError", 'String'>
    readonly field: FieldRef<"ProductRecordError", 'ProductRecordDataField'>
    readonly message: FieldRef<"ProductRecordError", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ProductRecordError findUnique
   */
  export type ProductRecordErrorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecordError
     */
    select?: ProductRecordErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRecordErrorInclude<ExtArgs> | null
    /**
     * Filter, which ProductRecordError to fetch.
     */
    where: ProductRecordErrorWhereUniqueInput
  }


  /**
   * ProductRecordError findUniqueOrThrow
   */
  export type ProductRecordErrorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecordError
     */
    select?: ProductRecordErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRecordErrorInclude<ExtArgs> | null
    /**
     * Filter, which ProductRecordError to fetch.
     */
    where: ProductRecordErrorWhereUniqueInput
  }


  /**
   * ProductRecordError findFirst
   */
  export type ProductRecordErrorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecordError
     */
    select?: ProductRecordErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRecordErrorInclude<ExtArgs> | null
    /**
     * Filter, which ProductRecordError to fetch.
     */
    where?: ProductRecordErrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRecordErrors to fetch.
     */
    orderBy?: ProductRecordErrorOrderByWithRelationInput | ProductRecordErrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductRecordErrors.
     */
    cursor?: ProductRecordErrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRecordErrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRecordErrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductRecordErrors.
     */
    distinct?: ProductRecordErrorScalarFieldEnum | ProductRecordErrorScalarFieldEnum[]
  }


  /**
   * ProductRecordError findFirstOrThrow
   */
  export type ProductRecordErrorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecordError
     */
    select?: ProductRecordErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRecordErrorInclude<ExtArgs> | null
    /**
     * Filter, which ProductRecordError to fetch.
     */
    where?: ProductRecordErrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRecordErrors to fetch.
     */
    orderBy?: ProductRecordErrorOrderByWithRelationInput | ProductRecordErrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductRecordErrors.
     */
    cursor?: ProductRecordErrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRecordErrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRecordErrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductRecordErrors.
     */
    distinct?: ProductRecordErrorScalarFieldEnum | ProductRecordErrorScalarFieldEnum[]
  }


  /**
   * ProductRecordError findMany
   */
  export type ProductRecordErrorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecordError
     */
    select?: ProductRecordErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRecordErrorInclude<ExtArgs> | null
    /**
     * Filter, which ProductRecordErrors to fetch.
     */
    where?: ProductRecordErrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRecordErrors to fetch.
     */
    orderBy?: ProductRecordErrorOrderByWithRelationInput | ProductRecordErrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductRecordErrors.
     */
    cursor?: ProductRecordErrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRecordErrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRecordErrors.
     */
    skip?: number
    distinct?: ProductRecordErrorScalarFieldEnum | ProductRecordErrorScalarFieldEnum[]
  }


  /**
   * ProductRecordError create
   */
  export type ProductRecordErrorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecordError
     */
    select?: ProductRecordErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRecordErrorInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductRecordError.
     */
    data: XOR<ProductRecordErrorCreateInput, ProductRecordErrorUncheckedCreateInput>
  }


  /**
   * ProductRecordError createMany
   */
  export type ProductRecordErrorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductRecordErrors.
     */
    data: ProductRecordErrorCreateManyInput | ProductRecordErrorCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProductRecordError update
   */
  export type ProductRecordErrorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecordError
     */
    select?: ProductRecordErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRecordErrorInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductRecordError.
     */
    data: XOR<ProductRecordErrorUpdateInput, ProductRecordErrorUncheckedUpdateInput>
    /**
     * Choose, which ProductRecordError to update.
     */
    where: ProductRecordErrorWhereUniqueInput
  }


  /**
   * ProductRecordError updateMany
   */
  export type ProductRecordErrorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductRecordErrors.
     */
    data: XOR<ProductRecordErrorUpdateManyMutationInput, ProductRecordErrorUncheckedUpdateManyInput>
    /**
     * Filter which ProductRecordErrors to update
     */
    where?: ProductRecordErrorWhereInput
  }


  /**
   * ProductRecordError upsert
   */
  export type ProductRecordErrorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecordError
     */
    select?: ProductRecordErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRecordErrorInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductRecordError to update in case it exists.
     */
    where: ProductRecordErrorWhereUniqueInput
    /**
     * In case the ProductRecordError found by the `where` argument doesn't exist, create a new ProductRecordError with this data.
     */
    create: XOR<ProductRecordErrorCreateInput, ProductRecordErrorUncheckedCreateInput>
    /**
     * In case the ProductRecordError was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductRecordErrorUpdateInput, ProductRecordErrorUncheckedUpdateInput>
  }


  /**
   * ProductRecordError delete
   */
  export type ProductRecordErrorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecordError
     */
    select?: ProductRecordErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRecordErrorInclude<ExtArgs> | null
    /**
     * Filter which ProductRecordError to delete.
     */
    where: ProductRecordErrorWhereUniqueInput
  }


  /**
   * ProductRecordError deleteMany
   */
  export type ProductRecordErrorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductRecordErrors to delete
     */
    where?: ProductRecordErrorWhereInput
  }


  /**
   * ProductRecordError without action
   */
  export type ProductRecordErrorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecordError
     */
    select?: ProductRecordErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRecordErrorInclude<ExtArgs> | null
  }



  /**
   * Model ProductRecord
   */

  export type AggregateProductRecord = {
    _count: ProductRecordCountAggregateOutputType | null
    _avg: ProductRecordAvgAggregateOutputType | null
    _sum: ProductRecordSumAggregateOutputType | null
    _min: ProductRecordMinAggregateOutputType | null
    _max: ProductRecordMaxAggregateOutputType | null
  }

  export type ProductRecordAvgAggregateOutputType = {
    price: number | null
  }

  export type ProductRecordSumAggregateOutputType = {
    price: number | null
  }

  export type ProductRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    createdById: string | null
    updatedAt: Date | null
    updatedById: string | null
    timestamp: Date | null
    productId: string | null
    price: number | null
    rawPrice: string | null
    status: $Enums.ProductStatus | null
    wasManuallyCreated: boolean | null
  }

  export type ProductRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    createdById: string | null
    updatedAt: Date | null
    updatedById: string | null
    timestamp: Date | null
    productId: string | null
    price: number | null
    rawPrice: string | null
    status: $Enums.ProductStatus | null
    wasManuallyCreated: boolean | null
  }

  export type ProductRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    createdById: number
    updatedAt: number
    updatedById: number
    timestamp: number
    productId: number
    price: number
    rawPrice: number
    status: number
    wasManuallyCreated: number
    manuallyChangedFields: number
    _all: number
  }


  export type ProductRecordAvgAggregateInputType = {
    price?: true
  }

  export type ProductRecordSumAggregateInputType = {
    price?: true
  }

  export type ProductRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    createdById?: true
    updatedAt?: true
    updatedById?: true
    timestamp?: true
    productId?: true
    price?: true
    rawPrice?: true
    status?: true
    wasManuallyCreated?: true
  }

  export type ProductRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    createdById?: true
    updatedAt?: true
    updatedById?: true
    timestamp?: true
    productId?: true
    price?: true
    rawPrice?: true
    status?: true
    wasManuallyCreated?: true
  }

  export type ProductRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    createdById?: true
    updatedAt?: true
    updatedById?: true
    timestamp?: true
    productId?: true
    price?: true
    rawPrice?: true
    status?: true
    wasManuallyCreated?: true
    manuallyChangedFields?: true
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
     * Select which fields to average
    **/
    _avg?: ProductRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductRecordSumAggregateInputType
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
    _avg?: ProductRecordAvgAggregateInputType
    _sum?: ProductRecordSumAggregateInputType
    _min?: ProductRecordMinAggregateInputType
    _max?: ProductRecordMaxAggregateInputType
  }

  export type ProductRecordGroupByOutputType = {
    id: string
    createdAt: Date
    createdById: string
    updatedAt: Date
    updatedById: string
    timestamp: Date
    productId: string
    price: number | null
    rawPrice: string | null
    status: $Enums.ProductStatus | null
    wasManuallyCreated: boolean
    manuallyChangedFields: $Enums.ProductRecordDataField[]
    _count: ProductRecordCountAggregateOutputType | null
    _avg: ProductRecordAvgAggregateOutputType | null
    _sum: ProductRecordSumAggregateOutputType | null
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
    createdAt?: boolean
    createdById?: boolean
    updatedAt?: boolean
    updatedById?: boolean
    timestamp?: boolean
    productId?: boolean
    price?: boolean
    rawPrice?: boolean
    status?: boolean
    wasManuallyCreated?: boolean
    manuallyChangedFields?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    errors?: boolean | ProductRecord$errorsArgs<ExtArgs>
    _count?: boolean | ProductRecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productRecord"]>

  export type ProductRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    createdById?: boolean
    updatedAt?: boolean
    updatedById?: boolean
    timestamp?: boolean
    productId?: boolean
    price?: boolean
    rawPrice?: boolean
    status?: boolean
    wasManuallyCreated?: boolean
    manuallyChangedFields?: boolean
  }

  export type ProductRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    errors?: boolean | ProductRecord$errorsArgs<ExtArgs>
    _count?: boolean | ProductRecordCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductRecord"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      updatedBy: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
      errors: Prisma.$ProductRecordErrorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      createdById: string
      updatedAt: Date
      updatedById: string
      timestamp: Date
      productId: string
      price: number | null
      rawPrice: string | null
      status: $Enums.ProductStatus | null
      wasManuallyCreated: boolean
      manuallyChangedFields: $Enums.ProductRecordDataField[]
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

    errors<T extends ProductRecord$errorsArgs<ExtArgs> = {}>(args?: Subset<T, ProductRecord$errorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductRecordErrorPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly createdAt: FieldRef<"ProductRecord", 'DateTime'>
    readonly createdById: FieldRef<"ProductRecord", 'String'>
    readonly updatedAt: FieldRef<"ProductRecord", 'DateTime'>
    readonly updatedById: FieldRef<"ProductRecord", 'String'>
    readonly timestamp: FieldRef<"ProductRecord", 'DateTime'>
    readonly productId: FieldRef<"ProductRecord", 'String'>
    readonly price: FieldRef<"ProductRecord", 'Float'>
    readonly rawPrice: FieldRef<"ProductRecord", 'String'>
    readonly status: FieldRef<"ProductRecord", 'ProductStatus'>
    readonly wasManuallyCreated: FieldRef<"ProductRecord", 'Boolean'>
    readonly manuallyChangedFields: FieldRef<"ProductRecord", 'ProductRecordDataField[]'>
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
   * ProductRecord.errors
   */
  export type ProductRecord$errorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRecordError
     */
    select?: ProductRecordErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRecordErrorInclude<ExtArgs> | null
    where?: ProductRecordErrorWhereInput
    orderBy?: ProductRecordErrorOrderByWithRelationInput | ProductRecordErrorOrderByWithRelationInput[]
    cursor?: ProductRecordErrorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductRecordErrorScalarFieldEnum | ProductRecordErrorScalarFieldEnum[]
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
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
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
    status: $Enums.ProductStatus | null
    statusRecordedAt: Date | null
    price: number | null
    priceRecordedAt: Date | null
    category: $Enums.ProductCategory | null
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
    status: $Enums.ProductStatus | null
    statusRecordedAt: Date | null
    price: number | null
    priceRecordedAt: Date | null
    category: $Enums.ProductCategory | null
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
    status: number
    statusRecordedAt: number
    price: number
    priceRecordedAt: number
    category: number
    subCategories: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
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
    status?: true
    statusRecordedAt?: true
    price?: true
    priceRecordedAt?: true
    category?: true
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
    status?: true
    statusRecordedAt?: true
    price?: true
    priceRecordedAt?: true
    category?: true
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
    status?: true
    statusRecordedAt?: true
    price?: true
    priceRecordedAt?: true
    category?: true
    subCategories?: true
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
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
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
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    createdAt: Date
    createdById: string
    updatedAt: Date
    updatedById: string
    name: string | null
    slug: string
    code: string | null
    imageSrc: string | null
    status: $Enums.ProductStatus | null
    statusRecordedAt: Date | null
    price: number | null
    priceRecordedAt: Date | null
    category: $Enums.ProductCategory
    subCategories: $Enums.ProductSubCategory[]
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
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
    status?: boolean
    statusRecordedAt?: boolean
    price?: boolean
    priceRecordedAt?: boolean
    category?: boolean
    subCategories?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
    records?: boolean | Product$recordsArgs<ExtArgs>
    notificationEvents?: boolean | Product$notificationEventsArgs<ExtArgs>
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
    status?: boolean
    statusRecordedAt?: boolean
    price?: boolean
    priceRecordedAt?: boolean
    category?: boolean
    subCategories?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
    records?: boolean | Product$recordsArgs<ExtArgs>
    notificationEvents?: boolean | Product$notificationEventsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      updatedBy: Prisma.$UserPayload<ExtArgs>
      records: Prisma.$ProductRecordPayload<ExtArgs>[]
      notificationEvents: Prisma.$NotificationEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      createdById: string
      updatedAt: Date
      updatedById: string
      name: string | null
      slug: string
      code: string | null
      imageSrc: string | null
      status: $Enums.ProductStatus | null
      statusRecordedAt: Date | null
      price: number | null
      priceRecordedAt: Date | null
      category: $Enums.ProductCategory
      subCategories: $Enums.ProductSubCategory[]
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

    notificationEvents<T extends Product$notificationEventsArgs<ExtArgs> = {}>(args?: Subset<T, Product$notificationEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly status: FieldRef<"Product", 'ProductStatus'>
    readonly statusRecordedAt: FieldRef<"Product", 'DateTime'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly priceRecordedAt: FieldRef<"Product", 'DateTime'>
    readonly category: FieldRef<"Product", 'ProductCategory'>
    readonly subCategories: FieldRef<"Product", 'ProductSubCategory[]'>
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
   * Product.notificationEvents
   */
  export type Product$notificationEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationEventInclude<ExtArgs> | null
    where?: NotificationEventWhereInput
    orderBy?: NotificationEventOrderByWithRelationInput | NotificationEventOrderByWithRelationInput[]
    cursor?: NotificationEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationEventScalarFieldEnum | NotificationEventScalarFieldEnum[]
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
   * Model NotificationEvent
   */

  export type AggregateNotificationEvent = {
    _count: NotificationEventCountAggregateOutputType | null
    _min: NotificationEventMinAggregateOutputType | null
    _max: NotificationEventMaxAggregateOutputType | null
  }

  export type NotificationEventMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    createdById: string | null
    updatedAt: Date | null
    updatedById: string | null
    productId: string | null
    userId: string | null
    contentType: $Enums.NotificationEventContentType | null
  }

  export type NotificationEventMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    createdById: string | null
    updatedAt: Date | null
    updatedById: string | null
    productId: string | null
    userId: string | null
    contentType: $Enums.NotificationEventContentType | null
  }

  export type NotificationEventCountAggregateOutputType = {
    id: number
    createdAt: number
    createdById: number
    updatedAt: number
    updatedById: number
    productId: number
    userId: number
    contentType: number
    _all: number
  }


  export type NotificationEventMinAggregateInputType = {
    id?: true
    createdAt?: true
    createdById?: true
    updatedAt?: true
    updatedById?: true
    productId?: true
    userId?: true
    contentType?: true
  }

  export type NotificationEventMaxAggregateInputType = {
    id?: true
    createdAt?: true
    createdById?: true
    updatedAt?: true
    updatedById?: true
    productId?: true
    userId?: true
    contentType?: true
  }

  export type NotificationEventCountAggregateInputType = {
    id?: true
    createdAt?: true
    createdById?: true
    updatedAt?: true
    updatedById?: true
    productId?: true
    userId?: true
    contentType?: true
    _all?: true
  }

  export type NotificationEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationEvent to aggregate.
     */
    where?: NotificationEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationEvents to fetch.
     */
    orderBy?: NotificationEventOrderByWithRelationInput | NotificationEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationEvents
    **/
    _count?: true | NotificationEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationEventMaxAggregateInputType
  }

  export type GetNotificationEventAggregateType<T extends NotificationEventAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationEvent[P]>
      : GetScalarType<T[P], AggregateNotificationEvent[P]>
  }




  export type NotificationEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationEventWhereInput
    orderBy?: NotificationEventOrderByWithAggregationInput | NotificationEventOrderByWithAggregationInput[]
    by: NotificationEventScalarFieldEnum[] | NotificationEventScalarFieldEnum
    having?: NotificationEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationEventCountAggregateInputType | true
    _min?: NotificationEventMinAggregateInputType
    _max?: NotificationEventMaxAggregateInputType
  }

  export type NotificationEventGroupByOutputType = {
    id: string
    createdAt: Date
    createdById: string
    updatedAt: Date
    updatedById: string
    productId: string
    userId: string
    contentType: $Enums.NotificationEventContentType
    _count: NotificationEventCountAggregateOutputType | null
    _min: NotificationEventMinAggregateOutputType | null
    _max: NotificationEventMaxAggregateOutputType | null
  }

  type GetNotificationEventGroupByPayload<T extends NotificationEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationEventGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationEventGroupByOutputType[P]>
        }
      >
    >


  export type NotificationEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    createdById?: boolean
    updatedAt?: boolean
    updatedById?: boolean
    productId?: boolean
    userId?: boolean
    contentType?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    delegate_aux_priceChangeEventC?: boolean | NotificationEvent$delegate_aux_priceChangeEventCArgs<ExtArgs>
    delegate_aux_statusChangeEvent?: boolean | NotificationEvent$delegate_aux_statusChangeEventArgs<ExtArgs>
  }, ExtArgs["result"]["notificationEvent"]>

  export type NotificationEventSelectScalar = {
    id?: boolean
    createdAt?: boolean
    createdById?: boolean
    updatedAt?: boolean
    updatedById?: boolean
    productId?: boolean
    userId?: boolean
    contentType?: boolean
  }

  export type NotificationEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    delegate_aux_priceChangeEventC?: boolean | NotificationEvent$delegate_aux_priceChangeEventCArgs<ExtArgs>
    delegate_aux_statusChangeEvent?: boolean | NotificationEvent$delegate_aux_statusChangeEventArgs<ExtArgs>
  }


  export type $NotificationEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationEvent"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      updatedBy: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      delegate_aux_priceChangeEventC: Prisma.$PriceChangeEventCPayload<ExtArgs> | null
      delegate_aux_statusChangeEvent: Prisma.$StatusChangeEventPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      createdById: string
      updatedAt: Date
      updatedById: string
      productId: string
      userId: string
      contentType: $Enums.NotificationEventContentType
    }, ExtArgs["result"]["notificationEvent"]>
    composites: {}
  }


  type NotificationEventGetPayload<S extends boolean | null | undefined | NotificationEventDefaultArgs> = $Result.GetResult<Prisma.$NotificationEventPayload, S>

  type NotificationEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationEventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationEventCountAggregateInputType | true
    }

  export interface NotificationEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationEvent'], meta: { name: 'NotificationEvent' } }
    /**
     * Find zero or one NotificationEvent that matches the filter.
     * @param {NotificationEventFindUniqueArgs} args - Arguments to find a NotificationEvent
     * @example
     * // Get one NotificationEvent
     * const notificationEvent = await prisma.notificationEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NotificationEventFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationEventFindUniqueArgs<ExtArgs>>
    ): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one NotificationEvent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NotificationEventFindUniqueOrThrowArgs} args - Arguments to find a NotificationEvent
     * @example
     * // Get one NotificationEvent
     * const notificationEvent = await prisma.notificationEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NotificationEventFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationEventFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first NotificationEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEventFindFirstArgs} args - Arguments to find a NotificationEvent
     * @example
     * // Get one NotificationEvent
     * const notificationEvent = await prisma.notificationEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NotificationEventFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationEventFindFirstArgs<ExtArgs>>
    ): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first NotificationEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEventFindFirstOrThrowArgs} args - Arguments to find a NotificationEvent
     * @example
     * // Get one NotificationEvent
     * const notificationEvent = await prisma.notificationEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NotificationEventFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationEventFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more NotificationEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationEvents
     * const notificationEvents = await prisma.notificationEvent.findMany()
     * 
     * // Get first 10 NotificationEvents
     * const notificationEvents = await prisma.notificationEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationEventWithIdOnly = await prisma.notificationEvent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NotificationEventFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationEventFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a NotificationEvent.
     * @param {NotificationEventCreateArgs} args - Arguments to create a NotificationEvent.
     * @example
     * // Create one NotificationEvent
     * const NotificationEvent = await prisma.notificationEvent.create({
     *   data: {
     *     // ... data to create a NotificationEvent
     *   }
     * })
     * 
    **/
    create<T extends NotificationEventCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationEventCreateArgs<ExtArgs>>
    ): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many NotificationEvents.
     *     @param {NotificationEventCreateManyArgs} args - Arguments to create many NotificationEvents.
     *     @example
     *     // Create many NotificationEvents
     *     const notificationEvent = await prisma.notificationEvent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NotificationEventCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationEventCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NotificationEvent.
     * @param {NotificationEventDeleteArgs} args - Arguments to delete one NotificationEvent.
     * @example
     * // Delete one NotificationEvent
     * const NotificationEvent = await prisma.notificationEvent.delete({
     *   where: {
     *     // ... filter to delete one NotificationEvent
     *   }
     * })
     * 
    **/
    delete<T extends NotificationEventDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationEventDeleteArgs<ExtArgs>>
    ): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one NotificationEvent.
     * @param {NotificationEventUpdateArgs} args - Arguments to update one NotificationEvent.
     * @example
     * // Update one NotificationEvent
     * const notificationEvent = await prisma.notificationEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NotificationEventUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationEventUpdateArgs<ExtArgs>>
    ): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more NotificationEvents.
     * @param {NotificationEventDeleteManyArgs} args - Arguments to filter NotificationEvents to delete.
     * @example
     * // Delete a few NotificationEvents
     * const { count } = await prisma.notificationEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NotificationEventDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationEventDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationEvents
     * const notificationEvent = await prisma.notificationEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NotificationEventUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationEventUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NotificationEvent.
     * @param {NotificationEventUpsertArgs} args - Arguments to update or create a NotificationEvent.
     * @example
     * // Update or create a NotificationEvent
     * const notificationEvent = await prisma.notificationEvent.upsert({
     *   create: {
     *     // ... data to create a NotificationEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationEvent we want to update
     *   }
     * })
    **/
    upsert<T extends NotificationEventUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationEventUpsertArgs<ExtArgs>>
    ): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of NotificationEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEventCountArgs} args - Arguments to filter NotificationEvents to count.
     * @example
     * // Count the number of NotificationEvents
     * const count = await prisma.notificationEvent.count({
     *   where: {
     *     // ... the filter for the NotificationEvents we want to count
     *   }
     * })
    **/
    count<T extends NotificationEventCountArgs>(
      args?: Subset<T, NotificationEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationEventAggregateArgs>(args: Subset<T, NotificationEventAggregateArgs>): Prisma.PrismaPromise<GetNotificationEventAggregateType<T>>

    /**
     * Group by NotificationEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEventGroupByArgs} args - Group by arguments.
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
      T extends NotificationEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationEventGroupByArgs['orderBy'] }
        : { orderBy?: NotificationEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationEvent model
   */
  readonly fields: NotificationEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    updatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    delegate_aux_priceChangeEventC<T extends NotificationEvent$delegate_aux_priceChangeEventCArgs<ExtArgs> = {}>(args?: Subset<T, NotificationEvent$delegate_aux_priceChangeEventCArgs<ExtArgs>>): Prisma__PriceChangeEventCClient<$Result.GetResult<Prisma.$PriceChangeEventCPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    delegate_aux_statusChangeEvent<T extends NotificationEvent$delegate_aux_statusChangeEventArgs<ExtArgs> = {}>(args?: Subset<T, NotificationEvent$delegate_aux_statusChangeEventArgs<ExtArgs>>): Prisma__StatusChangeEventClient<$Result.GetResult<Prisma.$StatusChangeEventPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the NotificationEvent model
   */ 
  interface NotificationEventFieldRefs {
    readonly id: FieldRef<"NotificationEvent", 'String'>
    readonly createdAt: FieldRef<"NotificationEvent", 'DateTime'>
    readonly createdById: FieldRef<"NotificationEvent", 'String'>
    readonly updatedAt: FieldRef<"NotificationEvent", 'DateTime'>
    readonly updatedById: FieldRef<"NotificationEvent", 'String'>
    readonly productId: FieldRef<"NotificationEvent", 'String'>
    readonly userId: FieldRef<"NotificationEvent", 'String'>
    readonly contentType: FieldRef<"NotificationEvent", 'NotificationEventContentType'>
  }
    

  // Custom InputTypes

  /**
   * NotificationEvent findUnique
   */
  export type NotificationEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * Filter, which NotificationEvent to fetch.
     */
    where: NotificationEventWhereUniqueInput
  }


  /**
   * NotificationEvent findUniqueOrThrow
   */
  export type NotificationEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * Filter, which NotificationEvent to fetch.
     */
    where: NotificationEventWhereUniqueInput
  }


  /**
   * NotificationEvent findFirst
   */
  export type NotificationEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * Filter, which NotificationEvent to fetch.
     */
    where?: NotificationEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationEvents to fetch.
     */
    orderBy?: NotificationEventOrderByWithRelationInput | NotificationEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationEvents.
     */
    cursor?: NotificationEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationEvents.
     */
    distinct?: NotificationEventScalarFieldEnum | NotificationEventScalarFieldEnum[]
  }


  /**
   * NotificationEvent findFirstOrThrow
   */
  export type NotificationEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * Filter, which NotificationEvent to fetch.
     */
    where?: NotificationEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationEvents to fetch.
     */
    orderBy?: NotificationEventOrderByWithRelationInput | NotificationEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationEvents.
     */
    cursor?: NotificationEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationEvents.
     */
    distinct?: NotificationEventScalarFieldEnum | NotificationEventScalarFieldEnum[]
  }


  /**
   * NotificationEvent findMany
   */
  export type NotificationEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * Filter, which NotificationEvents to fetch.
     */
    where?: NotificationEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationEvents to fetch.
     */
    orderBy?: NotificationEventOrderByWithRelationInput | NotificationEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationEvents.
     */
    cursor?: NotificationEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationEvents.
     */
    skip?: number
    distinct?: NotificationEventScalarFieldEnum | NotificationEventScalarFieldEnum[]
  }


  /**
   * NotificationEvent create
   */
  export type NotificationEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationEvent.
     */
    data: XOR<NotificationEventCreateInput, NotificationEventUncheckedCreateInput>
  }


  /**
   * NotificationEvent createMany
   */
  export type NotificationEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationEvents.
     */
    data: NotificationEventCreateManyInput | NotificationEventCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * NotificationEvent update
   */
  export type NotificationEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationEvent.
     */
    data: XOR<NotificationEventUpdateInput, NotificationEventUncheckedUpdateInput>
    /**
     * Choose, which NotificationEvent to update.
     */
    where: NotificationEventWhereUniqueInput
  }


  /**
   * NotificationEvent updateMany
   */
  export type NotificationEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationEvents.
     */
    data: XOR<NotificationEventUpdateManyMutationInput, NotificationEventUncheckedUpdateManyInput>
    /**
     * Filter which NotificationEvents to update
     */
    where?: NotificationEventWhereInput
  }


  /**
   * NotificationEvent upsert
   */
  export type NotificationEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationEvent to update in case it exists.
     */
    where: NotificationEventWhereUniqueInput
    /**
     * In case the NotificationEvent found by the `where` argument doesn't exist, create a new NotificationEvent with this data.
     */
    create: XOR<NotificationEventCreateInput, NotificationEventUncheckedCreateInput>
    /**
     * In case the NotificationEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationEventUpdateInput, NotificationEventUncheckedUpdateInput>
  }


  /**
   * NotificationEvent delete
   */
  export type NotificationEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * Filter which NotificationEvent to delete.
     */
    where: NotificationEventWhereUniqueInput
  }


  /**
   * NotificationEvent deleteMany
   */
  export type NotificationEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationEvents to delete
     */
    where?: NotificationEventWhereInput
  }


  /**
   * NotificationEvent.delegate_aux_priceChangeEventC
   */
  export type NotificationEvent$delegate_aux_priceChangeEventCArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceChangeEventC
     */
    select?: PriceChangeEventCSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PriceChangeEventCInclude<ExtArgs> | null
    where?: PriceChangeEventCWhereInput
  }


  /**
   * NotificationEvent.delegate_aux_statusChangeEvent
   */
  export type NotificationEvent$delegate_aux_statusChangeEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusChangeEvent
     */
    select?: StatusChangeEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusChangeEventInclude<ExtArgs> | null
    where?: StatusChangeEventWhereInput
  }


  /**
   * NotificationEvent without action
   */
  export type NotificationEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationEventInclude<ExtArgs> | null
  }



  /**
   * Model PriceChangeEventC
   */

  export type AggregatePriceChangeEventC = {
    _count: PriceChangeEventCCountAggregateOutputType | null
    _min: PriceChangeEventCMinAggregateOutputType | null
    _max: PriceChangeEventCMaxAggregateOutputType | null
  }

  export type PriceChangeEventCMinAggregateOutputType = {
    id: string | null
  }

  export type PriceChangeEventCMaxAggregateOutputType = {
    id: string | null
  }

  export type PriceChangeEventCCountAggregateOutputType = {
    id: number
    eventTypes: number
    _all: number
  }


  export type PriceChangeEventCMinAggregateInputType = {
    id?: true
  }

  export type PriceChangeEventCMaxAggregateInputType = {
    id?: true
  }

  export type PriceChangeEventCCountAggregateInputType = {
    id?: true
    eventTypes?: true
    _all?: true
  }

  export type PriceChangeEventCAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceChangeEventC to aggregate.
     */
    where?: PriceChangeEventCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceChangeEventCS to fetch.
     */
    orderBy?: PriceChangeEventCOrderByWithRelationInput | PriceChangeEventCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceChangeEventCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceChangeEventCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceChangeEventCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceChangeEventCS
    **/
    _count?: true | PriceChangeEventCCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceChangeEventCMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceChangeEventCMaxAggregateInputType
  }

  export type GetPriceChangeEventCAggregateType<T extends PriceChangeEventCAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceChangeEventC]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceChangeEventC[P]>
      : GetScalarType<T[P], AggregatePriceChangeEventC[P]>
  }




  export type PriceChangeEventCGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceChangeEventCWhereInput
    orderBy?: PriceChangeEventCOrderByWithAggregationInput | PriceChangeEventCOrderByWithAggregationInput[]
    by: PriceChangeEventCScalarFieldEnum[] | PriceChangeEventCScalarFieldEnum
    having?: PriceChangeEventCScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceChangeEventCCountAggregateInputType | true
    _min?: PriceChangeEventCMinAggregateInputType
    _max?: PriceChangeEventCMaxAggregateInputType
  }

  export type PriceChangeEventCGroupByOutputType = {
    id: string
    eventTypes: $Enums.PriceChangeEventType[]
    _count: PriceChangeEventCCountAggregateOutputType | null
    _min: PriceChangeEventCMinAggregateOutputType | null
    _max: PriceChangeEventCMaxAggregateOutputType | null
  }

  type GetPriceChangeEventCGroupByPayload<T extends PriceChangeEventCGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceChangeEventCGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceChangeEventCGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceChangeEventCGroupByOutputType[P]>
            : GetScalarType<T[P], PriceChangeEventCGroupByOutputType[P]>
        }
      >
    >


  export type PriceChangeEventCSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventTypes?: boolean
    delegate_aux_notificationEvent?: boolean | NotificationEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceChangeEventC"]>

  export type PriceChangeEventCSelectScalar = {
    id?: boolean
    eventTypes?: boolean
  }

  export type PriceChangeEventCInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    delegate_aux_notificationEvent?: boolean | NotificationEventDefaultArgs<ExtArgs>
  }


  export type $PriceChangeEventCPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceChangeEventC"
    objects: {
      delegate_aux_notificationEvent: Prisma.$NotificationEventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventTypes: $Enums.PriceChangeEventType[]
    }, ExtArgs["result"]["priceChangeEventC"]>
    composites: {}
  }


  type PriceChangeEventCGetPayload<S extends boolean | null | undefined | PriceChangeEventCDefaultArgs> = $Result.GetResult<Prisma.$PriceChangeEventCPayload, S>

  type PriceChangeEventCCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PriceChangeEventCFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PriceChangeEventCCountAggregateInputType | true
    }

  export interface PriceChangeEventCDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceChangeEventC'], meta: { name: 'PriceChangeEventC' } }
    /**
     * Find zero or one PriceChangeEventC that matches the filter.
     * @param {PriceChangeEventCFindUniqueArgs} args - Arguments to find a PriceChangeEventC
     * @example
     * // Get one PriceChangeEventC
     * const priceChangeEventC = await prisma.priceChangeEventC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PriceChangeEventCFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PriceChangeEventCFindUniqueArgs<ExtArgs>>
    ): Prisma__PriceChangeEventCClient<$Result.GetResult<Prisma.$PriceChangeEventCPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PriceChangeEventC that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PriceChangeEventCFindUniqueOrThrowArgs} args - Arguments to find a PriceChangeEventC
     * @example
     * // Get one PriceChangeEventC
     * const priceChangeEventC = await prisma.priceChangeEventC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PriceChangeEventCFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PriceChangeEventCFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PriceChangeEventCClient<$Result.GetResult<Prisma.$PriceChangeEventCPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PriceChangeEventC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceChangeEventCFindFirstArgs} args - Arguments to find a PriceChangeEventC
     * @example
     * // Get one PriceChangeEventC
     * const priceChangeEventC = await prisma.priceChangeEventC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PriceChangeEventCFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PriceChangeEventCFindFirstArgs<ExtArgs>>
    ): Prisma__PriceChangeEventCClient<$Result.GetResult<Prisma.$PriceChangeEventCPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PriceChangeEventC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceChangeEventCFindFirstOrThrowArgs} args - Arguments to find a PriceChangeEventC
     * @example
     * // Get one PriceChangeEventC
     * const priceChangeEventC = await prisma.priceChangeEventC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PriceChangeEventCFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PriceChangeEventCFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PriceChangeEventCClient<$Result.GetResult<Prisma.$PriceChangeEventCPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PriceChangeEventCS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceChangeEventCFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceChangeEventCS
     * const priceChangeEventCS = await prisma.priceChangeEventC.findMany()
     * 
     * // Get first 10 PriceChangeEventCS
     * const priceChangeEventCS = await prisma.priceChangeEventC.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceChangeEventCWithIdOnly = await prisma.priceChangeEventC.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PriceChangeEventCFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PriceChangeEventCFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceChangeEventCPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PriceChangeEventC.
     * @param {PriceChangeEventCCreateArgs} args - Arguments to create a PriceChangeEventC.
     * @example
     * // Create one PriceChangeEventC
     * const PriceChangeEventC = await prisma.priceChangeEventC.create({
     *   data: {
     *     // ... data to create a PriceChangeEventC
     *   }
     * })
     * 
    **/
    create<T extends PriceChangeEventCCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PriceChangeEventCCreateArgs<ExtArgs>>
    ): Prisma__PriceChangeEventCClient<$Result.GetResult<Prisma.$PriceChangeEventCPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PriceChangeEventCS.
     *     @param {PriceChangeEventCCreateManyArgs} args - Arguments to create many PriceChangeEventCS.
     *     @example
     *     // Create many PriceChangeEventCS
     *     const priceChangeEventC = await prisma.priceChangeEventC.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PriceChangeEventCCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PriceChangeEventCCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PriceChangeEventC.
     * @param {PriceChangeEventCDeleteArgs} args - Arguments to delete one PriceChangeEventC.
     * @example
     * // Delete one PriceChangeEventC
     * const PriceChangeEventC = await prisma.priceChangeEventC.delete({
     *   where: {
     *     // ... filter to delete one PriceChangeEventC
     *   }
     * })
     * 
    **/
    delete<T extends PriceChangeEventCDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PriceChangeEventCDeleteArgs<ExtArgs>>
    ): Prisma__PriceChangeEventCClient<$Result.GetResult<Prisma.$PriceChangeEventCPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PriceChangeEventC.
     * @param {PriceChangeEventCUpdateArgs} args - Arguments to update one PriceChangeEventC.
     * @example
     * // Update one PriceChangeEventC
     * const priceChangeEventC = await prisma.priceChangeEventC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PriceChangeEventCUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PriceChangeEventCUpdateArgs<ExtArgs>>
    ): Prisma__PriceChangeEventCClient<$Result.GetResult<Prisma.$PriceChangeEventCPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PriceChangeEventCS.
     * @param {PriceChangeEventCDeleteManyArgs} args - Arguments to filter PriceChangeEventCS to delete.
     * @example
     * // Delete a few PriceChangeEventCS
     * const { count } = await prisma.priceChangeEventC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PriceChangeEventCDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PriceChangeEventCDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceChangeEventCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceChangeEventCUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceChangeEventCS
     * const priceChangeEventC = await prisma.priceChangeEventC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PriceChangeEventCUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PriceChangeEventCUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PriceChangeEventC.
     * @param {PriceChangeEventCUpsertArgs} args - Arguments to update or create a PriceChangeEventC.
     * @example
     * // Update or create a PriceChangeEventC
     * const priceChangeEventC = await prisma.priceChangeEventC.upsert({
     *   create: {
     *     // ... data to create a PriceChangeEventC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceChangeEventC we want to update
     *   }
     * })
    **/
    upsert<T extends PriceChangeEventCUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PriceChangeEventCUpsertArgs<ExtArgs>>
    ): Prisma__PriceChangeEventCClient<$Result.GetResult<Prisma.$PriceChangeEventCPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PriceChangeEventCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceChangeEventCCountArgs} args - Arguments to filter PriceChangeEventCS to count.
     * @example
     * // Count the number of PriceChangeEventCS
     * const count = await prisma.priceChangeEventC.count({
     *   where: {
     *     // ... the filter for the PriceChangeEventCS we want to count
     *   }
     * })
    **/
    count<T extends PriceChangeEventCCountArgs>(
      args?: Subset<T, PriceChangeEventCCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceChangeEventCCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceChangeEventC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceChangeEventCAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PriceChangeEventCAggregateArgs>(args: Subset<T, PriceChangeEventCAggregateArgs>): Prisma.PrismaPromise<GetPriceChangeEventCAggregateType<T>>

    /**
     * Group by PriceChangeEventC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceChangeEventCGroupByArgs} args - Group by arguments.
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
      T extends PriceChangeEventCGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceChangeEventCGroupByArgs['orderBy'] }
        : { orderBy?: PriceChangeEventCGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PriceChangeEventCGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceChangeEventCGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceChangeEventC model
   */
  readonly fields: PriceChangeEventCFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceChangeEventC.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceChangeEventCClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    delegate_aux_notificationEvent<T extends NotificationEventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NotificationEventDefaultArgs<ExtArgs>>): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the PriceChangeEventC model
   */ 
  interface PriceChangeEventCFieldRefs {
    readonly id: FieldRef<"PriceChangeEventC", 'String'>
    readonly eventTypes: FieldRef<"PriceChangeEventC", 'PriceChangeEventType[]'>
  }
    

  // Custom InputTypes

  /**
   * PriceChangeEventC findUnique
   */
  export type PriceChangeEventCFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceChangeEventC
     */
    select?: PriceChangeEventCSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PriceChangeEventCInclude<ExtArgs> | null
    /**
     * Filter, which PriceChangeEventC to fetch.
     */
    where: PriceChangeEventCWhereUniqueInput
  }


  /**
   * PriceChangeEventC findUniqueOrThrow
   */
  export type PriceChangeEventCFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceChangeEventC
     */
    select?: PriceChangeEventCSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PriceChangeEventCInclude<ExtArgs> | null
    /**
     * Filter, which PriceChangeEventC to fetch.
     */
    where: PriceChangeEventCWhereUniqueInput
  }


  /**
   * PriceChangeEventC findFirst
   */
  export type PriceChangeEventCFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceChangeEventC
     */
    select?: PriceChangeEventCSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PriceChangeEventCInclude<ExtArgs> | null
    /**
     * Filter, which PriceChangeEventC to fetch.
     */
    where?: PriceChangeEventCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceChangeEventCS to fetch.
     */
    orderBy?: PriceChangeEventCOrderByWithRelationInput | PriceChangeEventCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceChangeEventCS.
     */
    cursor?: PriceChangeEventCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceChangeEventCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceChangeEventCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceChangeEventCS.
     */
    distinct?: PriceChangeEventCScalarFieldEnum | PriceChangeEventCScalarFieldEnum[]
  }


  /**
   * PriceChangeEventC findFirstOrThrow
   */
  export type PriceChangeEventCFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceChangeEventC
     */
    select?: PriceChangeEventCSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PriceChangeEventCInclude<ExtArgs> | null
    /**
     * Filter, which PriceChangeEventC to fetch.
     */
    where?: PriceChangeEventCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceChangeEventCS to fetch.
     */
    orderBy?: PriceChangeEventCOrderByWithRelationInput | PriceChangeEventCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceChangeEventCS.
     */
    cursor?: PriceChangeEventCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceChangeEventCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceChangeEventCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceChangeEventCS.
     */
    distinct?: PriceChangeEventCScalarFieldEnum | PriceChangeEventCScalarFieldEnum[]
  }


  /**
   * PriceChangeEventC findMany
   */
  export type PriceChangeEventCFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceChangeEventC
     */
    select?: PriceChangeEventCSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PriceChangeEventCInclude<ExtArgs> | null
    /**
     * Filter, which PriceChangeEventCS to fetch.
     */
    where?: PriceChangeEventCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceChangeEventCS to fetch.
     */
    orderBy?: PriceChangeEventCOrderByWithRelationInput | PriceChangeEventCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceChangeEventCS.
     */
    cursor?: PriceChangeEventCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceChangeEventCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceChangeEventCS.
     */
    skip?: number
    distinct?: PriceChangeEventCScalarFieldEnum | PriceChangeEventCScalarFieldEnum[]
  }


  /**
   * PriceChangeEventC create
   */
  export type PriceChangeEventCCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceChangeEventC
     */
    select?: PriceChangeEventCSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PriceChangeEventCInclude<ExtArgs> | null
    /**
     * The data needed to create a PriceChangeEventC.
     */
    data: XOR<PriceChangeEventCCreateInput, PriceChangeEventCUncheckedCreateInput>
  }


  /**
   * PriceChangeEventC createMany
   */
  export type PriceChangeEventCCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceChangeEventCS.
     */
    data: PriceChangeEventCCreateManyInput | PriceChangeEventCCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PriceChangeEventC update
   */
  export type PriceChangeEventCUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceChangeEventC
     */
    select?: PriceChangeEventCSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PriceChangeEventCInclude<ExtArgs> | null
    /**
     * The data needed to update a PriceChangeEventC.
     */
    data: XOR<PriceChangeEventCUpdateInput, PriceChangeEventCUncheckedUpdateInput>
    /**
     * Choose, which PriceChangeEventC to update.
     */
    where: PriceChangeEventCWhereUniqueInput
  }


  /**
   * PriceChangeEventC updateMany
   */
  export type PriceChangeEventCUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceChangeEventCS.
     */
    data: XOR<PriceChangeEventCUpdateManyMutationInput, PriceChangeEventCUncheckedUpdateManyInput>
    /**
     * Filter which PriceChangeEventCS to update
     */
    where?: PriceChangeEventCWhereInput
  }


  /**
   * PriceChangeEventC upsert
   */
  export type PriceChangeEventCUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceChangeEventC
     */
    select?: PriceChangeEventCSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PriceChangeEventCInclude<ExtArgs> | null
    /**
     * The filter to search for the PriceChangeEventC to update in case it exists.
     */
    where: PriceChangeEventCWhereUniqueInput
    /**
     * In case the PriceChangeEventC found by the `where` argument doesn't exist, create a new PriceChangeEventC with this data.
     */
    create: XOR<PriceChangeEventCCreateInput, PriceChangeEventCUncheckedCreateInput>
    /**
     * In case the PriceChangeEventC was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceChangeEventCUpdateInput, PriceChangeEventCUncheckedUpdateInput>
  }


  /**
   * PriceChangeEventC delete
   */
  export type PriceChangeEventCDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceChangeEventC
     */
    select?: PriceChangeEventCSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PriceChangeEventCInclude<ExtArgs> | null
    /**
     * Filter which PriceChangeEventC to delete.
     */
    where: PriceChangeEventCWhereUniqueInput
  }


  /**
   * PriceChangeEventC deleteMany
   */
  export type PriceChangeEventCDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceChangeEventCS to delete
     */
    where?: PriceChangeEventCWhereInput
  }


  /**
   * PriceChangeEventC without action
   */
  export type PriceChangeEventCDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceChangeEventC
     */
    select?: PriceChangeEventCSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PriceChangeEventCInclude<ExtArgs> | null
  }



  /**
   * Model StatusChangeEvent
   */

  export type AggregateStatusChangeEvent = {
    _count: StatusChangeEventCountAggregateOutputType | null
    _min: StatusChangeEventMinAggregateOutputType | null
    _max: StatusChangeEventMaxAggregateOutputType | null
  }

  export type StatusChangeEventMinAggregateOutputType = {
    id: string | null
  }

  export type StatusChangeEventMaxAggregateOutputType = {
    id: string | null
  }

  export type StatusChangeEventCountAggregateOutputType = {
    id: number
    eventTypes: number
    _all: number
  }


  export type StatusChangeEventMinAggregateInputType = {
    id?: true
  }

  export type StatusChangeEventMaxAggregateInputType = {
    id?: true
  }

  export type StatusChangeEventCountAggregateInputType = {
    id?: true
    eventTypes?: true
    _all?: true
  }

  export type StatusChangeEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusChangeEvent to aggregate.
     */
    where?: StatusChangeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusChangeEvents to fetch.
     */
    orderBy?: StatusChangeEventOrderByWithRelationInput | StatusChangeEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusChangeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusChangeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusChangeEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StatusChangeEvents
    **/
    _count?: true | StatusChangeEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusChangeEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusChangeEventMaxAggregateInputType
  }

  export type GetStatusChangeEventAggregateType<T extends StatusChangeEventAggregateArgs> = {
        [P in keyof T & keyof AggregateStatusChangeEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatusChangeEvent[P]>
      : GetScalarType<T[P], AggregateStatusChangeEvent[P]>
  }




  export type StatusChangeEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusChangeEventWhereInput
    orderBy?: StatusChangeEventOrderByWithAggregationInput | StatusChangeEventOrderByWithAggregationInput[]
    by: StatusChangeEventScalarFieldEnum[] | StatusChangeEventScalarFieldEnum
    having?: StatusChangeEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusChangeEventCountAggregateInputType | true
    _min?: StatusChangeEventMinAggregateInputType
    _max?: StatusChangeEventMaxAggregateInputType
  }

  export type StatusChangeEventGroupByOutputType = {
    id: string
    eventTypes: $Enums.ProductStatus[]
    _count: StatusChangeEventCountAggregateOutputType | null
    _min: StatusChangeEventMinAggregateOutputType | null
    _max: StatusChangeEventMaxAggregateOutputType | null
  }

  type GetStatusChangeEventGroupByPayload<T extends StatusChangeEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusChangeEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusChangeEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusChangeEventGroupByOutputType[P]>
            : GetScalarType<T[P], StatusChangeEventGroupByOutputType[P]>
        }
      >
    >


  export type StatusChangeEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventTypes?: boolean
    delegate_aux_notificationEvent?: boolean | NotificationEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statusChangeEvent"]>

  export type StatusChangeEventSelectScalar = {
    id?: boolean
    eventTypes?: boolean
  }

  export type StatusChangeEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    delegate_aux_notificationEvent?: boolean | NotificationEventDefaultArgs<ExtArgs>
  }


  export type $StatusChangeEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StatusChangeEvent"
    objects: {
      delegate_aux_notificationEvent: Prisma.$NotificationEventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventTypes: $Enums.ProductStatus[]
    }, ExtArgs["result"]["statusChangeEvent"]>
    composites: {}
  }


  type StatusChangeEventGetPayload<S extends boolean | null | undefined | StatusChangeEventDefaultArgs> = $Result.GetResult<Prisma.$StatusChangeEventPayload, S>

  type StatusChangeEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StatusChangeEventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StatusChangeEventCountAggregateInputType | true
    }

  export interface StatusChangeEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StatusChangeEvent'], meta: { name: 'StatusChangeEvent' } }
    /**
     * Find zero or one StatusChangeEvent that matches the filter.
     * @param {StatusChangeEventFindUniqueArgs} args - Arguments to find a StatusChangeEvent
     * @example
     * // Get one StatusChangeEvent
     * const statusChangeEvent = await prisma.statusChangeEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StatusChangeEventFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StatusChangeEventFindUniqueArgs<ExtArgs>>
    ): Prisma__StatusChangeEventClient<$Result.GetResult<Prisma.$StatusChangeEventPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one StatusChangeEvent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StatusChangeEventFindUniqueOrThrowArgs} args - Arguments to find a StatusChangeEvent
     * @example
     * // Get one StatusChangeEvent
     * const statusChangeEvent = await prisma.statusChangeEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StatusChangeEventFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StatusChangeEventFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StatusChangeEventClient<$Result.GetResult<Prisma.$StatusChangeEventPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first StatusChangeEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusChangeEventFindFirstArgs} args - Arguments to find a StatusChangeEvent
     * @example
     * // Get one StatusChangeEvent
     * const statusChangeEvent = await prisma.statusChangeEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StatusChangeEventFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StatusChangeEventFindFirstArgs<ExtArgs>>
    ): Prisma__StatusChangeEventClient<$Result.GetResult<Prisma.$StatusChangeEventPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first StatusChangeEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusChangeEventFindFirstOrThrowArgs} args - Arguments to find a StatusChangeEvent
     * @example
     * // Get one StatusChangeEvent
     * const statusChangeEvent = await prisma.statusChangeEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StatusChangeEventFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StatusChangeEventFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StatusChangeEventClient<$Result.GetResult<Prisma.$StatusChangeEventPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more StatusChangeEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusChangeEventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatusChangeEvents
     * const statusChangeEvents = await prisma.statusChangeEvent.findMany()
     * 
     * // Get first 10 StatusChangeEvents
     * const statusChangeEvents = await prisma.statusChangeEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusChangeEventWithIdOnly = await prisma.statusChangeEvent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StatusChangeEventFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StatusChangeEventFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusChangeEventPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a StatusChangeEvent.
     * @param {StatusChangeEventCreateArgs} args - Arguments to create a StatusChangeEvent.
     * @example
     * // Create one StatusChangeEvent
     * const StatusChangeEvent = await prisma.statusChangeEvent.create({
     *   data: {
     *     // ... data to create a StatusChangeEvent
     *   }
     * })
     * 
    **/
    create<T extends StatusChangeEventCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StatusChangeEventCreateArgs<ExtArgs>>
    ): Prisma__StatusChangeEventClient<$Result.GetResult<Prisma.$StatusChangeEventPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many StatusChangeEvents.
     *     @param {StatusChangeEventCreateManyArgs} args - Arguments to create many StatusChangeEvents.
     *     @example
     *     // Create many StatusChangeEvents
     *     const statusChangeEvent = await prisma.statusChangeEvent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StatusChangeEventCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StatusChangeEventCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StatusChangeEvent.
     * @param {StatusChangeEventDeleteArgs} args - Arguments to delete one StatusChangeEvent.
     * @example
     * // Delete one StatusChangeEvent
     * const StatusChangeEvent = await prisma.statusChangeEvent.delete({
     *   where: {
     *     // ... filter to delete one StatusChangeEvent
     *   }
     * })
     * 
    **/
    delete<T extends StatusChangeEventDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StatusChangeEventDeleteArgs<ExtArgs>>
    ): Prisma__StatusChangeEventClient<$Result.GetResult<Prisma.$StatusChangeEventPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one StatusChangeEvent.
     * @param {StatusChangeEventUpdateArgs} args - Arguments to update one StatusChangeEvent.
     * @example
     * // Update one StatusChangeEvent
     * const statusChangeEvent = await prisma.statusChangeEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StatusChangeEventUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StatusChangeEventUpdateArgs<ExtArgs>>
    ): Prisma__StatusChangeEventClient<$Result.GetResult<Prisma.$StatusChangeEventPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more StatusChangeEvents.
     * @param {StatusChangeEventDeleteManyArgs} args - Arguments to filter StatusChangeEvents to delete.
     * @example
     * // Delete a few StatusChangeEvents
     * const { count } = await prisma.statusChangeEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StatusChangeEventDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StatusChangeEventDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusChangeEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusChangeEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatusChangeEvents
     * const statusChangeEvent = await prisma.statusChangeEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StatusChangeEventUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StatusChangeEventUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StatusChangeEvent.
     * @param {StatusChangeEventUpsertArgs} args - Arguments to update or create a StatusChangeEvent.
     * @example
     * // Update or create a StatusChangeEvent
     * const statusChangeEvent = await prisma.statusChangeEvent.upsert({
     *   create: {
     *     // ... data to create a StatusChangeEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatusChangeEvent we want to update
     *   }
     * })
    **/
    upsert<T extends StatusChangeEventUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StatusChangeEventUpsertArgs<ExtArgs>>
    ): Prisma__StatusChangeEventClient<$Result.GetResult<Prisma.$StatusChangeEventPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of StatusChangeEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusChangeEventCountArgs} args - Arguments to filter StatusChangeEvents to count.
     * @example
     * // Count the number of StatusChangeEvents
     * const count = await prisma.statusChangeEvent.count({
     *   where: {
     *     // ... the filter for the StatusChangeEvents we want to count
     *   }
     * })
    **/
    count<T extends StatusChangeEventCountArgs>(
      args?: Subset<T, StatusChangeEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusChangeEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StatusChangeEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusChangeEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatusChangeEventAggregateArgs>(args: Subset<T, StatusChangeEventAggregateArgs>): Prisma.PrismaPromise<GetStatusChangeEventAggregateType<T>>

    /**
     * Group by StatusChangeEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusChangeEventGroupByArgs} args - Group by arguments.
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
      T extends StatusChangeEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusChangeEventGroupByArgs['orderBy'] }
        : { orderBy?: StatusChangeEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StatusChangeEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusChangeEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StatusChangeEvent model
   */
  readonly fields: StatusChangeEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StatusChangeEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusChangeEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    delegate_aux_notificationEvent<T extends NotificationEventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NotificationEventDefaultArgs<ExtArgs>>): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the StatusChangeEvent model
   */ 
  interface StatusChangeEventFieldRefs {
    readonly id: FieldRef<"StatusChangeEvent", 'String'>
    readonly eventTypes: FieldRef<"StatusChangeEvent", 'ProductStatus[]'>
  }
    

  // Custom InputTypes

  /**
   * StatusChangeEvent findUnique
   */
  export type StatusChangeEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusChangeEvent
     */
    select?: StatusChangeEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusChangeEventInclude<ExtArgs> | null
    /**
     * Filter, which StatusChangeEvent to fetch.
     */
    where: StatusChangeEventWhereUniqueInput
  }


  /**
   * StatusChangeEvent findUniqueOrThrow
   */
  export type StatusChangeEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusChangeEvent
     */
    select?: StatusChangeEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusChangeEventInclude<ExtArgs> | null
    /**
     * Filter, which StatusChangeEvent to fetch.
     */
    where: StatusChangeEventWhereUniqueInput
  }


  /**
   * StatusChangeEvent findFirst
   */
  export type StatusChangeEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusChangeEvent
     */
    select?: StatusChangeEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusChangeEventInclude<ExtArgs> | null
    /**
     * Filter, which StatusChangeEvent to fetch.
     */
    where?: StatusChangeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusChangeEvents to fetch.
     */
    orderBy?: StatusChangeEventOrderByWithRelationInput | StatusChangeEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusChangeEvents.
     */
    cursor?: StatusChangeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusChangeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusChangeEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusChangeEvents.
     */
    distinct?: StatusChangeEventScalarFieldEnum | StatusChangeEventScalarFieldEnum[]
  }


  /**
   * StatusChangeEvent findFirstOrThrow
   */
  export type StatusChangeEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusChangeEvent
     */
    select?: StatusChangeEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusChangeEventInclude<ExtArgs> | null
    /**
     * Filter, which StatusChangeEvent to fetch.
     */
    where?: StatusChangeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusChangeEvents to fetch.
     */
    orderBy?: StatusChangeEventOrderByWithRelationInput | StatusChangeEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusChangeEvents.
     */
    cursor?: StatusChangeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusChangeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusChangeEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusChangeEvents.
     */
    distinct?: StatusChangeEventScalarFieldEnum | StatusChangeEventScalarFieldEnum[]
  }


  /**
   * StatusChangeEvent findMany
   */
  export type StatusChangeEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusChangeEvent
     */
    select?: StatusChangeEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusChangeEventInclude<ExtArgs> | null
    /**
     * Filter, which StatusChangeEvents to fetch.
     */
    where?: StatusChangeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusChangeEvents to fetch.
     */
    orderBy?: StatusChangeEventOrderByWithRelationInput | StatusChangeEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StatusChangeEvents.
     */
    cursor?: StatusChangeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusChangeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusChangeEvents.
     */
    skip?: number
    distinct?: StatusChangeEventScalarFieldEnum | StatusChangeEventScalarFieldEnum[]
  }


  /**
   * StatusChangeEvent create
   */
  export type StatusChangeEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusChangeEvent
     */
    select?: StatusChangeEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusChangeEventInclude<ExtArgs> | null
    /**
     * The data needed to create a StatusChangeEvent.
     */
    data: XOR<StatusChangeEventCreateInput, StatusChangeEventUncheckedCreateInput>
  }


  /**
   * StatusChangeEvent createMany
   */
  export type StatusChangeEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatusChangeEvents.
     */
    data: StatusChangeEventCreateManyInput | StatusChangeEventCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * StatusChangeEvent update
   */
  export type StatusChangeEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusChangeEvent
     */
    select?: StatusChangeEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusChangeEventInclude<ExtArgs> | null
    /**
     * The data needed to update a StatusChangeEvent.
     */
    data: XOR<StatusChangeEventUpdateInput, StatusChangeEventUncheckedUpdateInput>
    /**
     * Choose, which StatusChangeEvent to update.
     */
    where: StatusChangeEventWhereUniqueInput
  }


  /**
   * StatusChangeEvent updateMany
   */
  export type StatusChangeEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StatusChangeEvents.
     */
    data: XOR<StatusChangeEventUpdateManyMutationInput, StatusChangeEventUncheckedUpdateManyInput>
    /**
     * Filter which StatusChangeEvents to update
     */
    where?: StatusChangeEventWhereInput
  }


  /**
   * StatusChangeEvent upsert
   */
  export type StatusChangeEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusChangeEvent
     */
    select?: StatusChangeEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusChangeEventInclude<ExtArgs> | null
    /**
     * The filter to search for the StatusChangeEvent to update in case it exists.
     */
    where: StatusChangeEventWhereUniqueInput
    /**
     * In case the StatusChangeEvent found by the `where` argument doesn't exist, create a new StatusChangeEvent with this data.
     */
    create: XOR<StatusChangeEventCreateInput, StatusChangeEventUncheckedCreateInput>
    /**
     * In case the StatusChangeEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusChangeEventUpdateInput, StatusChangeEventUncheckedUpdateInput>
  }


  /**
   * StatusChangeEvent delete
   */
  export type StatusChangeEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusChangeEvent
     */
    select?: StatusChangeEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusChangeEventInclude<ExtArgs> | null
    /**
     * Filter which StatusChangeEvent to delete.
     */
    where: StatusChangeEventWhereUniqueInput
  }


  /**
   * StatusChangeEvent deleteMany
   */
  export type StatusChangeEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusChangeEvents to delete
     */
    where?: StatusChangeEventWhereInput
  }


  /**
   * StatusChangeEvent without action
   */
  export type StatusChangeEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusChangeEvent
     */
    select?: StatusChangeEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusChangeEventInclude<ExtArgs> | null
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


  export const HttpNetworkErrorDataScalarFieldEnum: {
    id: 'id',
    url: 'url'
  };

  export type HttpNetworkErrorDataScalarFieldEnum = (typeof HttpNetworkErrorDataScalarFieldEnum)[keyof typeof HttpNetworkErrorDataScalarFieldEnum]


  export const HttpSerializationErrorDataScalarFieldEnum: {
    id: 'id',
    url: 'url'
  };

  export type HttpSerializationErrorDataScalarFieldEnum = (typeof HttpSerializationErrorDataScalarFieldEnum)[keyof typeof HttpSerializationErrorDataScalarFieldEnum]


  export const HttpClientErrorDataScalarFieldEnum: {
    id: 'id',
    url: 'url',
    status: 'status'
  };

  export type HttpClientErrorDataScalarFieldEnum = (typeof HttpClientErrorDataScalarFieldEnum)[keyof typeof HttpClientErrorDataScalarFieldEnum]


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


  export const ProductRecordErrorScalarFieldEnum: {
    id: 'id',
    errorId: 'errorId',
    errorCode: 'errorCode',
    recordId: 'recordId',
    field: 'field',
    message: 'message'
  };

  export type ProductRecordErrorScalarFieldEnum = (typeof ProductRecordErrorScalarFieldEnum)[keyof typeof ProductRecordErrorScalarFieldEnum]


  export const ProductRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    createdById: 'createdById',
    updatedAt: 'updatedAt',
    updatedById: 'updatedById',
    timestamp: 'timestamp',
    productId: 'productId',
    price: 'price',
    rawPrice: 'rawPrice',
    status: 'status',
    wasManuallyCreated: 'wasManuallyCreated',
    manuallyChangedFields: 'manuallyChangedFields'
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
    imageSrc: 'imageSrc',
    status: 'status',
    statusRecordedAt: 'statusRecordedAt',
    price: 'price',
    priceRecordedAt: 'priceRecordedAt',
    category: 'category',
    subCategories: 'subCategories'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const NotificationEventScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    createdById: 'createdById',
    updatedAt: 'updatedAt',
    updatedById: 'updatedById',
    productId: 'productId',
    userId: 'userId',
    contentType: 'contentType'
  };

  export type NotificationEventScalarFieldEnum = (typeof NotificationEventScalarFieldEnum)[keyof typeof NotificationEventScalarFieldEnum]


  export const PriceChangeEventCScalarFieldEnum: {
    id: 'id',
    eventTypes: 'eventTypes'
  };

  export type PriceChangeEventCScalarFieldEnum = (typeof PriceChangeEventCScalarFieldEnum)[keyof typeof PriceChangeEventCScalarFieldEnum]


  export const StatusChangeEventScalarFieldEnum: {
    id: 'id',
    eventTypes: 'eventTypes'
  };

  export type StatusChangeEventScalarFieldEnum = (typeof StatusChangeEventScalarFieldEnum)[keyof typeof StatusChangeEventScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'ProductRecordDataField'
   */
  export type EnumProductRecordDataFieldFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductRecordDataField'>
    


  /**
   * Reference to a field of type 'ProductRecordDataField[]'
   */
  export type ListEnumProductRecordDataFieldFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductRecordDataField[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ProductStatus'
   */
  export type EnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus'>
    


  /**
   * Reference to a field of type 'ProductStatus[]'
   */
  export type ListEnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ProductCategory'
   */
  export type EnumProductCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductCategory'>
    


  /**
   * Reference to a field of type 'ProductCategory[]'
   */
  export type ListEnumProductCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductCategory[]'>
    


  /**
   * Reference to a field of type 'ProductSubCategory[]'
   */
  export type ListEnumProductSubCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductSubCategory[]'>
    


  /**
   * Reference to a field of type 'ProductSubCategory'
   */
  export type EnumProductSubCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductSubCategory'>
    


  /**
   * Reference to a field of type 'NotificationEventContentType'
   */
  export type EnumNotificationEventContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationEventContentType'>
    


  /**
   * Reference to a field of type 'NotificationEventContentType[]'
   */
  export type ListEnumNotificationEventContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationEventContentType[]'>
    


  /**
   * Reference to a field of type 'PriceChangeEventType[]'
   */
  export type ListEnumPriceChangeEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriceChangeEventType[]'>
    


  /**
   * Reference to a field of type 'PriceChangeEventType'
   */
  export type EnumPriceChangeEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriceChangeEventType'>
    
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
    createdNotificationEvents?: NotificationEventListRelationFilter
    updatedNotificationEvents?: NotificationEventListRelationFilter
    notificationEvents?: NotificationEventListRelationFilter
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
    createdNotificationEvents?: NotificationEventOrderByRelationAggregateInput
    updatedNotificationEvents?: NotificationEventOrderByRelationAggregateInput
    notificationEvents?: NotificationEventOrderByRelationAggregateInput
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
    createdNotificationEvents?: NotificationEventListRelationFilter
    updatedNotificationEvents?: NotificationEventListRelationFilter
    notificationEvents?: NotificationEventListRelationFilter
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

  export type HttpNetworkErrorDataWhereInput = {
    AND?: HttpNetworkErrorDataWhereInput | HttpNetworkErrorDataWhereInput[]
    OR?: HttpNetworkErrorDataWhereInput[]
    NOT?: HttpNetworkErrorDataWhereInput | HttpNetworkErrorDataWhereInput[]
    id?: UuidFilter<"HttpNetworkErrorData"> | string
    url?: StringFilter<"HttpNetworkErrorData"> | string
  }

  export type HttpNetworkErrorDataOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type HttpNetworkErrorDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HttpNetworkErrorDataWhereInput | HttpNetworkErrorDataWhereInput[]
    OR?: HttpNetworkErrorDataWhereInput[]
    NOT?: HttpNetworkErrorDataWhereInput | HttpNetworkErrorDataWhereInput[]
    url?: StringFilter<"HttpNetworkErrorData"> | string
  }, "id">

  export type HttpNetworkErrorDataOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    _count?: HttpNetworkErrorDataCountOrderByAggregateInput
    _max?: HttpNetworkErrorDataMaxOrderByAggregateInput
    _min?: HttpNetworkErrorDataMinOrderByAggregateInput
  }

  export type HttpNetworkErrorDataScalarWhereWithAggregatesInput = {
    AND?: HttpNetworkErrorDataScalarWhereWithAggregatesInput | HttpNetworkErrorDataScalarWhereWithAggregatesInput[]
    OR?: HttpNetworkErrorDataScalarWhereWithAggregatesInput[]
    NOT?: HttpNetworkErrorDataScalarWhereWithAggregatesInput | HttpNetworkErrorDataScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"HttpNetworkErrorData"> | string
    url?: StringWithAggregatesFilter<"HttpNetworkErrorData"> | string
  }

  export type HttpSerializationErrorDataWhereInput = {
    AND?: HttpSerializationErrorDataWhereInput | HttpSerializationErrorDataWhereInput[]
    OR?: HttpSerializationErrorDataWhereInput[]
    NOT?: HttpSerializationErrorDataWhereInput | HttpSerializationErrorDataWhereInput[]
    id?: UuidFilter<"HttpSerializationErrorData"> | string
    url?: StringFilter<"HttpSerializationErrorData"> | string
  }

  export type HttpSerializationErrorDataOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type HttpSerializationErrorDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HttpSerializationErrorDataWhereInput | HttpSerializationErrorDataWhereInput[]
    OR?: HttpSerializationErrorDataWhereInput[]
    NOT?: HttpSerializationErrorDataWhereInput | HttpSerializationErrorDataWhereInput[]
    url?: StringFilter<"HttpSerializationErrorData"> | string
  }, "id">

  export type HttpSerializationErrorDataOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    _count?: HttpSerializationErrorDataCountOrderByAggregateInput
    _max?: HttpSerializationErrorDataMaxOrderByAggregateInput
    _min?: HttpSerializationErrorDataMinOrderByAggregateInput
  }

  export type HttpSerializationErrorDataScalarWhereWithAggregatesInput = {
    AND?: HttpSerializationErrorDataScalarWhereWithAggregatesInput | HttpSerializationErrorDataScalarWhereWithAggregatesInput[]
    OR?: HttpSerializationErrorDataScalarWhereWithAggregatesInput[]
    NOT?: HttpSerializationErrorDataScalarWhereWithAggregatesInput | HttpSerializationErrorDataScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"HttpSerializationErrorData"> | string
    url?: StringWithAggregatesFilter<"HttpSerializationErrorData"> | string
  }

  export type HttpClientErrorDataWhereInput = {
    AND?: HttpClientErrorDataWhereInput | HttpClientErrorDataWhereInput[]
    OR?: HttpClientErrorDataWhereInput[]
    NOT?: HttpClientErrorDataWhereInput | HttpClientErrorDataWhereInput[]
    id?: UuidFilter<"HttpClientErrorData"> | string
    url?: StringFilter<"HttpClientErrorData"> | string
    status?: IntFilter<"HttpClientErrorData"> | number
  }

  export type HttpClientErrorDataOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    status?: SortOrder
  }

  export type HttpClientErrorDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HttpClientErrorDataWhereInput | HttpClientErrorDataWhereInput[]
    OR?: HttpClientErrorDataWhereInput[]
    NOT?: HttpClientErrorDataWhereInput | HttpClientErrorDataWhereInput[]
    url?: StringFilter<"HttpClientErrorData"> | string
    status?: IntFilter<"HttpClientErrorData"> | number
  }, "id">

  export type HttpClientErrorDataOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    status?: SortOrder
    _count?: HttpClientErrorDataCountOrderByAggregateInput
    _avg?: HttpClientErrorDataAvgOrderByAggregateInput
    _max?: HttpClientErrorDataMaxOrderByAggregateInput
    _min?: HttpClientErrorDataMinOrderByAggregateInput
    _sum?: HttpClientErrorDataSumOrderByAggregateInput
  }

  export type HttpClientErrorDataScalarWhereWithAggregatesInput = {
    AND?: HttpClientErrorDataScalarWhereWithAggregatesInput | HttpClientErrorDataScalarWhereWithAggregatesInput[]
    OR?: HttpClientErrorDataScalarWhereWithAggregatesInput[]
    NOT?: HttpClientErrorDataScalarWhereWithAggregatesInput | HttpClientErrorDataScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"HttpClientErrorData"> | string
    url?: StringWithAggregatesFilter<"HttpClientErrorData"> | string
    status?: IntWithAggregatesFilter<"HttpClientErrorData"> | number
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
    parentHtml?: StringNullableFilter<"InvalidTextErrorData"> | string | null
    value?: StringFilter<"InvalidTextErrorData"> | string
  }

  export type InvalidTextErrorDataOrderByWithRelationInput = {
    id?: SortOrder
    parentHtml?: SortOrderInput | SortOrder
    value?: SortOrder
  }

  export type InvalidTextErrorDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvalidTextErrorDataWhereInput | InvalidTextErrorDataWhereInput[]
    OR?: InvalidTextErrorDataWhereInput[]
    NOT?: InvalidTextErrorDataWhereInput | InvalidTextErrorDataWhereInput[]
    parentHtml?: StringNullableFilter<"InvalidTextErrorData"> | string | null
    value?: StringFilter<"InvalidTextErrorData"> | string
  }, "id">

  export type InvalidTextErrorDataOrderByWithAggregationInput = {
    id?: SortOrder
    parentHtml?: SortOrderInput | SortOrder
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
    parentHtml?: StringNullableWithAggregatesFilter<"InvalidTextErrorData"> | string | null
    value?: StringWithAggregatesFilter<"InvalidTextErrorData"> | string
  }

  export type MissingTextErrorDataWhereInput = {
    AND?: MissingTextErrorDataWhereInput | MissingTextErrorDataWhereInput[]
    OR?: MissingTextErrorDataWhereInput[]
    NOT?: MissingTextErrorDataWhereInput | MissingTextErrorDataWhereInput[]
    id?: UuidFilter<"MissingTextErrorData"> | string
    parentHtml?: StringNullableFilter<"MissingTextErrorData"> | string | null
  }

  export type MissingTextErrorDataOrderByWithRelationInput = {
    id?: SortOrder
    parentHtml?: SortOrderInput | SortOrder
  }

  export type MissingTextErrorDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MissingTextErrorDataWhereInput | MissingTextErrorDataWhereInput[]
    OR?: MissingTextErrorDataWhereInput[]
    NOT?: MissingTextErrorDataWhereInput | MissingTextErrorDataWhereInput[]
    parentHtml?: StringNullableFilter<"MissingTextErrorData"> | string | null
  }, "id">

  export type MissingTextErrorDataOrderByWithAggregationInput = {
    id?: SortOrder
    parentHtml?: SortOrderInput | SortOrder
    _count?: MissingTextErrorDataCountOrderByAggregateInput
    _max?: MissingTextErrorDataMaxOrderByAggregateInput
    _min?: MissingTextErrorDataMinOrderByAggregateInput
  }

  export type MissingTextErrorDataScalarWhereWithAggregatesInput = {
    AND?: MissingTextErrorDataScalarWhereWithAggregatesInput | MissingTextErrorDataScalarWhereWithAggregatesInput[]
    OR?: MissingTextErrorDataScalarWhereWithAggregatesInput[]
    NOT?: MissingTextErrorDataScalarWhereWithAggregatesInput | MissingTextErrorDataScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MissingTextErrorData"> | string
    parentHtml?: StringNullableWithAggregatesFilter<"MissingTextErrorData"> | string | null
  }

  export type NonUniqueTextErrorDataWhereInput = {
    AND?: NonUniqueTextErrorDataWhereInput | NonUniqueTextErrorDataWhereInput[]
    OR?: NonUniqueTextErrorDataWhereInput[]
    NOT?: NonUniqueTextErrorDataWhereInput | NonUniqueTextErrorDataWhereInput[]
    id?: UuidFilter<"NonUniqueTextErrorData"> | string
    parentHtml?: StringNullableFilter<"NonUniqueTextErrorData"> | string | null
  }

  export type NonUniqueTextErrorDataOrderByWithRelationInput = {
    id?: SortOrder
    parentHtml?: SortOrderInput | SortOrder
  }

  export type NonUniqueTextErrorDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NonUniqueTextErrorDataWhereInput | NonUniqueTextErrorDataWhereInput[]
    OR?: NonUniqueTextErrorDataWhereInput[]
    NOT?: NonUniqueTextErrorDataWhereInput | NonUniqueTextErrorDataWhereInput[]
    parentHtml?: StringNullableFilter<"NonUniqueTextErrorData"> | string | null
  }, "id">

  export type NonUniqueTextErrorDataOrderByWithAggregationInput = {
    id?: SortOrder
    parentHtml?: SortOrderInput | SortOrder
    _count?: NonUniqueTextErrorDataCountOrderByAggregateInput
    _max?: NonUniqueTextErrorDataMaxOrderByAggregateInput
    _min?: NonUniqueTextErrorDataMinOrderByAggregateInput
  }

  export type NonUniqueTextErrorDataScalarWhereWithAggregatesInput = {
    AND?: NonUniqueTextErrorDataScalarWhereWithAggregatesInput | NonUniqueTextErrorDataScalarWhereWithAggregatesInput[]
    OR?: NonUniqueTextErrorDataScalarWhereWithAggregatesInput[]
    NOT?: NonUniqueTextErrorDataScalarWhereWithAggregatesInput | NonUniqueTextErrorDataScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"NonUniqueTextErrorData"> | string
    parentHtml?: StringNullableWithAggregatesFilter<"NonUniqueTextErrorData"> | string | null
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

  export type ProductRecordErrorWhereInput = {
    AND?: ProductRecordErrorWhereInput | ProductRecordErrorWhereInput[]
    OR?: ProductRecordErrorWhereInput[]
    NOT?: ProductRecordErrorWhereInput | ProductRecordErrorWhereInput[]
    id?: UuidFilter<"ProductRecordError"> | string
    errorId?: UuidFilter<"ProductRecordError"> | string
    errorCode?: EnumScrapingErrorCodeFilter<"ProductRecordError"> | $Enums.ScrapingErrorCode
    recordId?: UuidFilter<"ProductRecordError"> | string
    field?: EnumProductRecordDataFieldFilter<"ProductRecordError"> | $Enums.ProductRecordDataField
    message?: StringFilter<"ProductRecordError"> | string
    record?: XOR<ProductRecordRelationFilter, ProductRecordWhereInput>
  }

  export type ProductRecordErrorOrderByWithRelationInput = {
    id?: SortOrder
    errorId?: SortOrder
    errorCode?: SortOrder
    recordId?: SortOrder
    field?: SortOrder
    message?: SortOrder
    record?: ProductRecordOrderByWithRelationInput
  }

  export type ProductRecordErrorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    errorId?: string
    recordId?: string
    AND?: ProductRecordErrorWhereInput | ProductRecordErrorWhereInput[]
    OR?: ProductRecordErrorWhereInput[]
    NOT?: ProductRecordErrorWhereInput | ProductRecordErrorWhereInput[]
    errorCode?: EnumScrapingErrorCodeFilter<"ProductRecordError"> | $Enums.ScrapingErrorCode
    field?: EnumProductRecordDataFieldFilter<"ProductRecordError"> | $Enums.ProductRecordDataField
    message?: StringFilter<"ProductRecordError"> | string
    record?: XOR<ProductRecordRelationFilter, ProductRecordWhereInput>
  }, "id" | "errorId" | "recordId">

  export type ProductRecordErrorOrderByWithAggregationInput = {
    id?: SortOrder
    errorId?: SortOrder
    errorCode?: SortOrder
    recordId?: SortOrder
    field?: SortOrder
    message?: SortOrder
    _count?: ProductRecordErrorCountOrderByAggregateInput
    _max?: ProductRecordErrorMaxOrderByAggregateInput
    _min?: ProductRecordErrorMinOrderByAggregateInput
  }

  export type ProductRecordErrorScalarWhereWithAggregatesInput = {
    AND?: ProductRecordErrorScalarWhereWithAggregatesInput | ProductRecordErrorScalarWhereWithAggregatesInput[]
    OR?: ProductRecordErrorScalarWhereWithAggregatesInput[]
    NOT?: ProductRecordErrorScalarWhereWithAggregatesInput | ProductRecordErrorScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProductRecordError"> | string
    errorId?: UuidWithAggregatesFilter<"ProductRecordError"> | string
    errorCode?: EnumScrapingErrorCodeWithAggregatesFilter<"ProductRecordError"> | $Enums.ScrapingErrorCode
    recordId?: UuidWithAggregatesFilter<"ProductRecordError"> | string
    field?: EnumProductRecordDataFieldWithAggregatesFilter<"ProductRecordError"> | $Enums.ProductRecordDataField
    message?: StringWithAggregatesFilter<"ProductRecordError"> | string
  }

  export type ProductRecordWhereInput = {
    AND?: ProductRecordWhereInput | ProductRecordWhereInput[]
    OR?: ProductRecordWhereInput[]
    NOT?: ProductRecordWhereInput | ProductRecordWhereInput[]
    id?: UuidFilter<"ProductRecord"> | string
    createdAt?: DateTimeFilter<"ProductRecord"> | Date | string
    createdById?: UuidFilter<"ProductRecord"> | string
    updatedAt?: DateTimeFilter<"ProductRecord"> | Date | string
    updatedById?: UuidFilter<"ProductRecord"> | string
    timestamp?: DateTimeFilter<"ProductRecord"> | Date | string
    productId?: UuidFilter<"ProductRecord"> | string
    price?: FloatNullableFilter<"ProductRecord"> | number | null
    rawPrice?: StringNullableFilter<"ProductRecord"> | string | null
    status?: EnumProductStatusNullableFilter<"ProductRecord"> | $Enums.ProductStatus | null
    wasManuallyCreated?: BoolFilter<"ProductRecord"> | boolean
    manuallyChangedFields?: EnumProductRecordDataFieldNullableListFilter<"ProductRecord">
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    updatedBy?: XOR<UserRelationFilter, UserWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    errors?: ProductRecordErrorListRelationFilter
  }

  export type ProductRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    updatedAt?: SortOrder
    updatedById?: SortOrder
    timestamp?: SortOrder
    productId?: SortOrder
    price?: SortOrderInput | SortOrder
    rawPrice?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    wasManuallyCreated?: SortOrder
    manuallyChangedFields?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    updatedBy?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    errors?: ProductRecordErrorOrderByRelationAggregateInput
  }

  export type ProductRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductRecordWhereInput | ProductRecordWhereInput[]
    OR?: ProductRecordWhereInput[]
    NOT?: ProductRecordWhereInput | ProductRecordWhereInput[]
    createdAt?: DateTimeFilter<"ProductRecord"> | Date | string
    createdById?: UuidFilter<"ProductRecord"> | string
    updatedAt?: DateTimeFilter<"ProductRecord"> | Date | string
    updatedById?: UuidFilter<"ProductRecord"> | string
    timestamp?: DateTimeFilter<"ProductRecord"> | Date | string
    productId?: UuidFilter<"ProductRecord"> | string
    price?: FloatNullableFilter<"ProductRecord"> | number | null
    rawPrice?: StringNullableFilter<"ProductRecord"> | string | null
    status?: EnumProductStatusNullableFilter<"ProductRecord"> | $Enums.ProductStatus | null
    wasManuallyCreated?: BoolFilter<"ProductRecord"> | boolean
    manuallyChangedFields?: EnumProductRecordDataFieldNullableListFilter<"ProductRecord">
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    updatedBy?: XOR<UserRelationFilter, UserWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    errors?: ProductRecordErrorListRelationFilter
  }, "id">

  export type ProductRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    updatedAt?: SortOrder
    updatedById?: SortOrder
    timestamp?: SortOrder
    productId?: SortOrder
    price?: SortOrderInput | SortOrder
    rawPrice?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    wasManuallyCreated?: SortOrder
    manuallyChangedFields?: SortOrder
    _count?: ProductRecordCountOrderByAggregateInput
    _avg?: ProductRecordAvgOrderByAggregateInput
    _max?: ProductRecordMaxOrderByAggregateInput
    _min?: ProductRecordMinOrderByAggregateInput
    _sum?: ProductRecordSumOrderByAggregateInput
  }

  export type ProductRecordScalarWhereWithAggregatesInput = {
    AND?: ProductRecordScalarWhereWithAggregatesInput | ProductRecordScalarWhereWithAggregatesInput[]
    OR?: ProductRecordScalarWhereWithAggregatesInput[]
    NOT?: ProductRecordScalarWhereWithAggregatesInput | ProductRecordScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProductRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProductRecord"> | Date | string
    createdById?: UuidWithAggregatesFilter<"ProductRecord"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductRecord"> | Date | string
    updatedById?: UuidWithAggregatesFilter<"ProductRecord"> | string
    timestamp?: DateTimeWithAggregatesFilter<"ProductRecord"> | Date | string
    productId?: UuidWithAggregatesFilter<"ProductRecord"> | string
    price?: FloatNullableWithAggregatesFilter<"ProductRecord"> | number | null
    rawPrice?: StringNullableWithAggregatesFilter<"ProductRecord"> | string | null
    status?: EnumProductStatusNullableWithAggregatesFilter<"ProductRecord"> | $Enums.ProductStatus | null
    wasManuallyCreated?: BoolWithAggregatesFilter<"ProductRecord"> | boolean
    manuallyChangedFields?: EnumProductRecordDataFieldNullableListFilter<"ProductRecord">
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
    name?: StringNullableFilter<"Product"> | string | null
    slug?: StringFilter<"Product"> | string
    code?: StringNullableFilter<"Product"> | string | null
    imageSrc?: StringNullableFilter<"Product"> | string | null
    status?: EnumProductStatusNullableFilter<"Product"> | $Enums.ProductStatus | null
    statusRecordedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    price?: FloatNullableFilter<"Product"> | number | null
    priceRecordedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    category?: EnumProductCategoryFilter<"Product"> | $Enums.ProductCategory
    subCategories?: EnumProductSubCategoryNullableListFilter<"Product">
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    updatedBy?: XOR<UserRelationFilter, UserWhereInput>
    records?: ProductRecordListRelationFilter
    notificationEvents?: NotificationEventListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    updatedAt?: SortOrder
    updatedById?: SortOrder
    name?: SortOrderInput | SortOrder
    slug?: SortOrder
    code?: SortOrderInput | SortOrder
    imageSrc?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    statusRecordedAt?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    priceRecordedAt?: SortOrderInput | SortOrder
    category?: SortOrder
    subCategories?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    updatedBy?: UserOrderByWithRelationInput
    records?: ProductRecordOrderByRelationAggregateInput
    notificationEvents?: NotificationEventOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    createdAt?: DateTimeFilter<"Product"> | Date | string
    createdById?: UuidFilter<"Product"> | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    updatedById?: UuidFilter<"Product"> | string
    name?: StringNullableFilter<"Product"> | string | null
    code?: StringNullableFilter<"Product"> | string | null
    imageSrc?: StringNullableFilter<"Product"> | string | null
    status?: EnumProductStatusNullableFilter<"Product"> | $Enums.ProductStatus | null
    statusRecordedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    price?: FloatNullableFilter<"Product"> | number | null
    priceRecordedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    category?: EnumProductCategoryFilter<"Product"> | $Enums.ProductCategory
    subCategories?: EnumProductSubCategoryNullableListFilter<"Product">
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    updatedBy?: XOR<UserRelationFilter, UserWhereInput>
    records?: ProductRecordListRelationFilter
    notificationEvents?: NotificationEventListRelationFilter
  }, "id" | "slug">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    updatedAt?: SortOrder
    updatedById?: SortOrder
    name?: SortOrderInput | SortOrder
    slug?: SortOrder
    code?: SortOrderInput | SortOrder
    imageSrc?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    statusRecordedAt?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    priceRecordedAt?: SortOrderInput | SortOrder
    category?: SortOrder
    subCategories?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
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
    name?: StringNullableWithAggregatesFilter<"Product"> | string | null
    slug?: StringWithAggregatesFilter<"Product"> | string
    code?: StringNullableWithAggregatesFilter<"Product"> | string | null
    imageSrc?: StringNullableWithAggregatesFilter<"Product"> | string | null
    status?: EnumProductStatusNullableWithAggregatesFilter<"Product"> | $Enums.ProductStatus | null
    statusRecordedAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    price?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    priceRecordedAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    category?: EnumProductCategoryWithAggregatesFilter<"Product"> | $Enums.ProductCategory
    subCategories?: EnumProductSubCategoryNullableListFilter<"Product">
  }

  export type NotificationEventWhereInput = {
    AND?: NotificationEventWhereInput | NotificationEventWhereInput[]
    OR?: NotificationEventWhereInput[]
    NOT?: NotificationEventWhereInput | NotificationEventWhereInput[]
    id?: UuidFilter<"NotificationEvent"> | string
    createdAt?: DateTimeFilter<"NotificationEvent"> | Date | string
    createdById?: UuidFilter<"NotificationEvent"> | string
    updatedAt?: DateTimeFilter<"NotificationEvent"> | Date | string
    updatedById?: UuidFilter<"NotificationEvent"> | string
    productId?: UuidFilter<"NotificationEvent"> | string
    userId?: UuidFilter<"NotificationEvent"> | string
    contentType?: EnumNotificationEventContentTypeFilter<"NotificationEvent"> | $Enums.NotificationEventContentType
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    updatedBy?: XOR<UserRelationFilter, UserWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    delegate_aux_priceChangeEventC?: XOR<PriceChangeEventCNullableRelationFilter, PriceChangeEventCWhereInput> | null
    delegate_aux_statusChangeEvent?: XOR<StatusChangeEventNullableRelationFilter, StatusChangeEventWhereInput> | null
  }

  export type NotificationEventOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    updatedAt?: SortOrder
    updatedById?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    contentType?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    updatedBy?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    delegate_aux_priceChangeEventC?: PriceChangeEventCOrderByWithRelationInput
    delegate_aux_statusChangeEvent?: StatusChangeEventOrderByWithRelationInput
  }

  export type NotificationEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationEventWhereInput | NotificationEventWhereInput[]
    OR?: NotificationEventWhereInput[]
    NOT?: NotificationEventWhereInput | NotificationEventWhereInput[]
    createdAt?: DateTimeFilter<"NotificationEvent"> | Date | string
    createdById?: UuidFilter<"NotificationEvent"> | string
    updatedAt?: DateTimeFilter<"NotificationEvent"> | Date | string
    updatedById?: UuidFilter<"NotificationEvent"> | string
    productId?: UuidFilter<"NotificationEvent"> | string
    userId?: UuidFilter<"NotificationEvent"> | string
    contentType?: EnumNotificationEventContentTypeFilter<"NotificationEvent"> | $Enums.NotificationEventContentType
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    updatedBy?: XOR<UserRelationFilter, UserWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    delegate_aux_priceChangeEventC?: XOR<PriceChangeEventCNullableRelationFilter, PriceChangeEventCWhereInput> | null
    delegate_aux_statusChangeEvent?: XOR<StatusChangeEventNullableRelationFilter, StatusChangeEventWhereInput> | null
  }, "id">

  export type NotificationEventOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    updatedAt?: SortOrder
    updatedById?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    contentType?: SortOrder
    _count?: NotificationEventCountOrderByAggregateInput
    _max?: NotificationEventMaxOrderByAggregateInput
    _min?: NotificationEventMinOrderByAggregateInput
  }

  export type NotificationEventScalarWhereWithAggregatesInput = {
    AND?: NotificationEventScalarWhereWithAggregatesInput | NotificationEventScalarWhereWithAggregatesInput[]
    OR?: NotificationEventScalarWhereWithAggregatesInput[]
    NOT?: NotificationEventScalarWhereWithAggregatesInput | NotificationEventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"NotificationEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NotificationEvent"> | Date | string
    createdById?: UuidWithAggregatesFilter<"NotificationEvent"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"NotificationEvent"> | Date | string
    updatedById?: UuidWithAggregatesFilter<"NotificationEvent"> | string
    productId?: UuidWithAggregatesFilter<"NotificationEvent"> | string
    userId?: UuidWithAggregatesFilter<"NotificationEvent"> | string
    contentType?: EnumNotificationEventContentTypeWithAggregatesFilter<"NotificationEvent"> | $Enums.NotificationEventContentType
  }

  export type PriceChangeEventCWhereInput = {
    AND?: PriceChangeEventCWhereInput | PriceChangeEventCWhereInput[]
    OR?: PriceChangeEventCWhereInput[]
    NOT?: PriceChangeEventCWhereInput | PriceChangeEventCWhereInput[]
    id?: UuidFilter<"PriceChangeEventC"> | string
    eventTypes?: EnumPriceChangeEventTypeNullableListFilter<"PriceChangeEventC">
    delegate_aux_notificationEvent?: XOR<NotificationEventRelationFilter, NotificationEventWhereInput>
  }

  export type PriceChangeEventCOrderByWithRelationInput = {
    id?: SortOrder
    eventTypes?: SortOrder
    delegate_aux_notificationEvent?: NotificationEventOrderByWithRelationInput
  }

  export type PriceChangeEventCWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PriceChangeEventCWhereInput | PriceChangeEventCWhereInput[]
    OR?: PriceChangeEventCWhereInput[]
    NOT?: PriceChangeEventCWhereInput | PriceChangeEventCWhereInput[]
    eventTypes?: EnumPriceChangeEventTypeNullableListFilter<"PriceChangeEventC">
    delegate_aux_notificationEvent?: XOR<NotificationEventRelationFilter, NotificationEventWhereInput>
  }, "id">

  export type PriceChangeEventCOrderByWithAggregationInput = {
    id?: SortOrder
    eventTypes?: SortOrder
    _count?: PriceChangeEventCCountOrderByAggregateInput
    _max?: PriceChangeEventCMaxOrderByAggregateInput
    _min?: PriceChangeEventCMinOrderByAggregateInput
  }

  export type PriceChangeEventCScalarWhereWithAggregatesInput = {
    AND?: PriceChangeEventCScalarWhereWithAggregatesInput | PriceChangeEventCScalarWhereWithAggregatesInput[]
    OR?: PriceChangeEventCScalarWhereWithAggregatesInput[]
    NOT?: PriceChangeEventCScalarWhereWithAggregatesInput | PriceChangeEventCScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PriceChangeEventC"> | string
    eventTypes?: EnumPriceChangeEventTypeNullableListFilter<"PriceChangeEventC">
  }

  export type StatusChangeEventWhereInput = {
    AND?: StatusChangeEventWhereInput | StatusChangeEventWhereInput[]
    OR?: StatusChangeEventWhereInput[]
    NOT?: StatusChangeEventWhereInput | StatusChangeEventWhereInput[]
    id?: UuidFilter<"StatusChangeEvent"> | string
    eventTypes?: EnumProductStatusNullableListFilter<"StatusChangeEvent">
    delegate_aux_notificationEvent?: XOR<NotificationEventRelationFilter, NotificationEventWhereInput>
  }

  export type StatusChangeEventOrderByWithRelationInput = {
    id?: SortOrder
    eventTypes?: SortOrder
    delegate_aux_notificationEvent?: NotificationEventOrderByWithRelationInput
  }

  export type StatusChangeEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StatusChangeEventWhereInput | StatusChangeEventWhereInput[]
    OR?: StatusChangeEventWhereInput[]
    NOT?: StatusChangeEventWhereInput | StatusChangeEventWhereInput[]
    eventTypes?: EnumProductStatusNullableListFilter<"StatusChangeEvent">
    delegate_aux_notificationEvent?: XOR<NotificationEventRelationFilter, NotificationEventWhereInput>
  }, "id">

  export type StatusChangeEventOrderByWithAggregationInput = {
    id?: SortOrder
    eventTypes?: SortOrder
    _count?: StatusChangeEventCountOrderByAggregateInput
    _max?: StatusChangeEventMaxOrderByAggregateInput
    _min?: StatusChangeEventMinOrderByAggregateInput
  }

  export type StatusChangeEventScalarWhereWithAggregatesInput = {
    AND?: StatusChangeEventScalarWhereWithAggregatesInput | StatusChangeEventScalarWhereWithAggregatesInput[]
    OR?: StatusChangeEventScalarWhereWithAggregatesInput[]
    NOT?: StatusChangeEventScalarWhereWithAggregatesInput | StatusChangeEventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"StatusChangeEvent"> | string
    eventTypes?: EnumProductStatusNullableListFilter<"StatusChangeEvent">
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
    createdNotificationEvents?: NotificationEventCreateNestedManyWithoutCreatedByInput
    updatedNotificationEvents?: NotificationEventCreateNestedManyWithoutUpdatedByInput
    notificationEvents?: NotificationEventCreateNestedManyWithoutUserInput
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
    createdNotificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutCreatedByInput
    updatedNotificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutUpdatedByInput
    notificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutUserInput
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
    createdNotificationEvents?: NotificationEventUpdateManyWithoutCreatedByNestedInput
    updatedNotificationEvents?: NotificationEventUpdateManyWithoutUpdatedByNestedInput
    notificationEvents?: NotificationEventUpdateManyWithoutUserNestedInput
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
    createdNotificationEvents?: NotificationEventUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedNotificationEvents?: NotificationEventUncheckedUpdateManyWithoutUpdatedByNestedInput
    notificationEvents?: NotificationEventUncheckedUpdateManyWithoutUserNestedInput
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

  export type HttpNetworkErrorDataCreateInput = {
    id?: string
    url: string
  }

  export type HttpNetworkErrorDataUncheckedCreateInput = {
    id?: string
    url: string
  }

  export type HttpNetworkErrorDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type HttpNetworkErrorDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type HttpNetworkErrorDataCreateManyInput = {
    id?: string
    url: string
  }

  export type HttpNetworkErrorDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type HttpNetworkErrorDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type HttpSerializationErrorDataCreateInput = {
    id?: string
    url: string
  }

  export type HttpSerializationErrorDataUncheckedCreateInput = {
    id?: string
    url: string
  }

  export type HttpSerializationErrorDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type HttpSerializationErrorDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type HttpSerializationErrorDataCreateManyInput = {
    id?: string
    url: string
  }

  export type HttpSerializationErrorDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type HttpSerializationErrorDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type HttpClientErrorDataCreateInput = {
    id?: string
    url: string
    status: number
  }

  export type HttpClientErrorDataUncheckedCreateInput = {
    id?: string
    url: string
    status: number
  }

  export type HttpClientErrorDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
  }

  export type HttpClientErrorDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
  }

  export type HttpClientErrorDataCreateManyInput = {
    id?: string
    url: string
    status: number
  }

  export type HttpClientErrorDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
  }

  export type HttpClientErrorDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
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
    parentHtml?: string | null
    value: string
  }

  export type InvalidTextErrorDataUncheckedCreateInput = {
    id?: string
    parentHtml?: string | null
    value: string
  }

  export type InvalidTextErrorDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
    value?: StringFieldUpdateOperationsInput | string
  }

  export type InvalidTextErrorDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
    value?: StringFieldUpdateOperationsInput | string
  }

  export type InvalidTextErrorDataCreateManyInput = {
    id?: string
    parentHtml?: string | null
    value: string
  }

  export type InvalidTextErrorDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
    value?: StringFieldUpdateOperationsInput | string
  }

  export type InvalidTextErrorDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
    value?: StringFieldUpdateOperationsInput | string
  }

  export type MissingTextErrorDataCreateInput = {
    id?: string
    parentHtml?: string | null
  }

  export type MissingTextErrorDataUncheckedCreateInput = {
    id?: string
    parentHtml?: string | null
  }

  export type MissingTextErrorDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MissingTextErrorDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MissingTextErrorDataCreateManyInput = {
    id?: string
    parentHtml?: string | null
  }

  export type MissingTextErrorDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MissingTextErrorDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NonUniqueTextErrorDataCreateInput = {
    id?: string
    parentHtml?: string | null
  }

  export type NonUniqueTextErrorDataUncheckedCreateInput = {
    id?: string
    parentHtml?: string | null
  }

  export type NonUniqueTextErrorDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NonUniqueTextErrorDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NonUniqueTextErrorDataCreateManyInput = {
    id?: string
    parentHtml?: string | null
  }

  export type NonUniqueTextErrorDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NonUniqueTextErrorDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentHtml?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type ProductRecordErrorCreateInput = {
    id?: string
    errorId: string
    errorCode: $Enums.ScrapingErrorCode
    field: $Enums.ProductRecordDataField
    message: string
    record: ProductRecordCreateNestedOneWithoutErrorsInput
  }

  export type ProductRecordErrorUncheckedCreateInput = {
    id?: string
    errorId: string
    errorCode: $Enums.ScrapingErrorCode
    recordId: string
    field: $Enums.ProductRecordDataField
    message: string
  }

  export type ProductRecordErrorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorId?: StringFieldUpdateOperationsInput | string
    errorCode?: EnumScrapingErrorCodeFieldUpdateOperationsInput | $Enums.ScrapingErrorCode
    field?: EnumProductRecordDataFieldFieldUpdateOperationsInput | $Enums.ProductRecordDataField
    message?: StringFieldUpdateOperationsInput | string
    record?: ProductRecordUpdateOneRequiredWithoutErrorsNestedInput
  }

  export type ProductRecordErrorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorId?: StringFieldUpdateOperationsInput | string
    errorCode?: EnumScrapingErrorCodeFieldUpdateOperationsInput | $Enums.ScrapingErrorCode
    recordId?: StringFieldUpdateOperationsInput | string
    field?: EnumProductRecordDataFieldFieldUpdateOperationsInput | $Enums.ProductRecordDataField
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ProductRecordErrorCreateManyInput = {
    id?: string
    errorId: string
    errorCode: $Enums.ScrapingErrorCode
    recordId: string
    field: $Enums.ProductRecordDataField
    message: string
  }

  export type ProductRecordErrorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorId?: StringFieldUpdateOperationsInput | string
    errorCode?: EnumScrapingErrorCodeFieldUpdateOperationsInput | $Enums.ScrapingErrorCode
    field?: EnumProductRecordDataFieldFieldUpdateOperationsInput | $Enums.ProductRecordDataField
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ProductRecordErrorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorId?: StringFieldUpdateOperationsInput | string
    errorCode?: EnumScrapingErrorCodeFieldUpdateOperationsInput | $Enums.ScrapingErrorCode
    recordId?: StringFieldUpdateOperationsInput | string
    field?: EnumProductRecordDataFieldFieldUpdateOperationsInput | $Enums.ProductRecordDataField
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ProductRecordCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timestamp?: Date | string
    price?: number | null
    rawPrice?: string | null
    status?: $Enums.ProductStatus | null
    wasManuallyCreated?: boolean
    manuallyChangedFields?: ProductRecordCreatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
    createdBy: UserCreateNestedOneWithoutCreatedProductRecordsInput
    updatedBy: UserCreateNestedOneWithoutUpdatedProductRecordsInput
    product: ProductCreateNestedOneWithoutRecordsInput
    errors?: ProductRecordErrorCreateNestedManyWithoutRecordInput
  }

  export type ProductRecordUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    updatedById: string
    timestamp?: Date | string
    productId: string
    price?: number | null
    rawPrice?: string | null
    status?: $Enums.ProductStatus | null
    wasManuallyCreated?: boolean
    manuallyChangedFields?: ProductRecordCreatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
    errors?: ProductRecordErrorUncheckedCreateNestedManyWithoutRecordInput
  }

  export type ProductRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    rawPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    wasManuallyCreated?: BoolFieldUpdateOperationsInput | boolean
    manuallyChangedFields?: ProductRecordUpdatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
    createdBy?: UserUpdateOneRequiredWithoutCreatedProductRecordsNestedInput
    updatedBy?: UserUpdateOneRequiredWithoutUpdatedProductRecordsNestedInput
    product?: ProductUpdateOneRequiredWithoutRecordsNestedInput
    errors?: ProductRecordErrorUpdateManyWithoutRecordNestedInput
  }

  export type ProductRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    rawPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    wasManuallyCreated?: BoolFieldUpdateOperationsInput | boolean
    manuallyChangedFields?: ProductRecordUpdatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
    errors?: ProductRecordErrorUncheckedUpdateManyWithoutRecordNestedInput
  }

  export type ProductRecordCreateManyInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    updatedById: string
    timestamp?: Date | string
    productId: string
    price?: number | null
    rawPrice?: string | null
    status?: $Enums.ProductStatus | null
    wasManuallyCreated?: boolean
    manuallyChangedFields?: ProductRecordCreatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
  }

  export type ProductRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    rawPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    wasManuallyCreated?: BoolFieldUpdateOperationsInput | boolean
    manuallyChangedFields?: ProductRecordUpdatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
  }

  export type ProductRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    rawPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    wasManuallyCreated?: BoolFieldUpdateOperationsInput | boolean
    manuallyChangedFields?: ProductRecordUpdatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
  }

  export type ProductCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    slug: string
    code?: string | null
    imageSrc?: string | null
    status?: $Enums.ProductStatus | null
    statusRecordedAt?: Date | string | null
    price?: number | null
    priceRecordedAt?: Date | string | null
    category: $Enums.ProductCategory
    subCategories?: ProductCreatesubCategoriesInput | $Enums.ProductSubCategory[]
    createdBy: UserCreateNestedOneWithoutCreatedProductsInput
    updatedBy: UserCreateNestedOneWithoutUpdatedProductsInput
    records?: ProductRecordCreateNestedManyWithoutProductInput
    notificationEvents?: NotificationEventCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    updatedById: string
    name?: string | null
    slug: string
    code?: string | null
    imageSrc?: string | null
    status?: $Enums.ProductStatus | null
    statusRecordedAt?: Date | string | null
    price?: number | null
    priceRecordedAt?: Date | string | null
    category: $Enums.ProductCategory
    subCategories?: ProductCreatesubCategoriesInput | $Enums.ProductSubCategory[]
    records?: ProductRecordUncheckedCreateNestedManyWithoutProductInput
    notificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    imageSrc?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    statusRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    priceRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    subCategories?: ProductUpdatesubCategoriesInput | $Enums.ProductSubCategory[]
    createdBy?: UserUpdateOneRequiredWithoutCreatedProductsNestedInput
    updatedBy?: UserUpdateOneRequiredWithoutUpdatedProductsNestedInput
    records?: ProductRecordUpdateManyWithoutProductNestedInput
    notificationEvents?: NotificationEventUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    imageSrc?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    statusRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    priceRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    subCategories?: ProductUpdatesubCategoriesInput | $Enums.ProductSubCategory[]
    records?: ProductRecordUncheckedUpdateManyWithoutProductNestedInput
    notificationEvents?: NotificationEventUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    updatedById: string
    name?: string | null
    slug: string
    code?: string | null
    imageSrc?: string | null
    status?: $Enums.ProductStatus | null
    statusRecordedAt?: Date | string | null
    price?: number | null
    priceRecordedAt?: Date | string | null
    category: $Enums.ProductCategory
    subCategories?: ProductCreatesubCategoriesInput | $Enums.ProductSubCategory[]
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    imageSrc?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    statusRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    priceRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    subCategories?: ProductUpdatesubCategoriesInput | $Enums.ProductSubCategory[]
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    imageSrc?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    statusRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    priceRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    subCategories?: ProductUpdatesubCategoriesInput | $Enums.ProductSubCategory[]
  }

  export type NotificationEventCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contentType: $Enums.NotificationEventContentType
    createdBy: UserCreateNestedOneWithoutCreatedNotificationEventsInput
    updatedBy: UserCreateNestedOneWithoutUpdatedNotificationEventsInput
    product: ProductCreateNestedOneWithoutNotificationEventsInput
    user: UserCreateNestedOneWithoutNotificationEventsInput
    delegate_aux_priceChangeEventC?: PriceChangeEventCCreateNestedOneWithoutDelegate_aux_notificationEventInput
    delegate_aux_statusChangeEvent?: StatusChangeEventCreateNestedOneWithoutDelegate_aux_notificationEventInput
  }

  export type NotificationEventUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    updatedById: string
    productId: string
    userId: string
    contentType: $Enums.NotificationEventContentType
    delegate_aux_priceChangeEventC?: PriceChangeEventCUncheckedCreateNestedOneWithoutDelegate_aux_notificationEventInput
    delegate_aux_statusChangeEvent?: StatusChangeEventUncheckedCreateNestedOneWithoutDelegate_aux_notificationEventInput
  }

  export type NotificationEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentType?: EnumNotificationEventContentTypeFieldUpdateOperationsInput | $Enums.NotificationEventContentType
    createdBy?: UserUpdateOneRequiredWithoutCreatedNotificationEventsNestedInput
    updatedBy?: UserUpdateOneRequiredWithoutUpdatedNotificationEventsNestedInput
    product?: ProductUpdateOneRequiredWithoutNotificationEventsNestedInput
    user?: UserUpdateOneRequiredWithoutNotificationEventsNestedInput
    delegate_aux_priceChangeEventC?: PriceChangeEventCUpdateOneWithoutDelegate_aux_notificationEventNestedInput
    delegate_aux_statusChangeEvent?: StatusChangeEventUpdateOneWithoutDelegate_aux_notificationEventNestedInput
  }

  export type NotificationEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentType?: EnumNotificationEventContentTypeFieldUpdateOperationsInput | $Enums.NotificationEventContentType
    delegate_aux_priceChangeEventC?: PriceChangeEventCUncheckedUpdateOneWithoutDelegate_aux_notificationEventNestedInput
    delegate_aux_statusChangeEvent?: StatusChangeEventUncheckedUpdateOneWithoutDelegate_aux_notificationEventNestedInput
  }

  export type NotificationEventCreateManyInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    updatedById: string
    productId: string
    userId: string
    contentType: $Enums.NotificationEventContentType
  }

  export type NotificationEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentType?: EnumNotificationEventContentTypeFieldUpdateOperationsInput | $Enums.NotificationEventContentType
  }

  export type NotificationEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentType?: EnumNotificationEventContentTypeFieldUpdateOperationsInput | $Enums.NotificationEventContentType
  }

  export type PriceChangeEventCCreateInput = {
    eventTypes?: PriceChangeEventCCreateeventTypesInput | $Enums.PriceChangeEventType[]
    delegate_aux_notificationEvent?: NotificationEventCreateNestedOneWithoutDelegate_aux_priceChangeEventCInput
  }

  export type PriceChangeEventCUncheckedCreateInput = {
    id?: string
    eventTypes?: PriceChangeEventCCreateeventTypesInput | $Enums.PriceChangeEventType[]
  }

  export type PriceChangeEventCUpdateInput = {
    eventTypes?: PriceChangeEventCUpdateeventTypesInput | $Enums.PriceChangeEventType[]
    delegate_aux_notificationEvent?: NotificationEventUpdateOneRequiredWithoutDelegate_aux_priceChangeEventCNestedInput
  }

  export type PriceChangeEventCUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventTypes?: PriceChangeEventCUpdateeventTypesInput | $Enums.PriceChangeEventType[]
  }

  export type PriceChangeEventCCreateManyInput = {
    id?: string
    eventTypes?: PriceChangeEventCCreateeventTypesInput | $Enums.PriceChangeEventType[]
  }

  export type PriceChangeEventCUpdateManyMutationInput = {
    eventTypes?: PriceChangeEventCUpdateeventTypesInput | $Enums.PriceChangeEventType[]
  }

  export type PriceChangeEventCUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventTypes?: PriceChangeEventCUpdateeventTypesInput | $Enums.PriceChangeEventType[]
  }

  export type StatusChangeEventCreateInput = {
    eventTypes?: StatusChangeEventCreateeventTypesInput | $Enums.ProductStatus[]
    delegate_aux_notificationEvent?: NotificationEventCreateNestedOneWithoutDelegate_aux_statusChangeEventInput
  }

  export type StatusChangeEventUncheckedCreateInput = {
    id?: string
    eventTypes?: StatusChangeEventCreateeventTypesInput | $Enums.ProductStatus[]
  }

  export type StatusChangeEventUpdateInput = {
    eventTypes?: StatusChangeEventUpdateeventTypesInput | $Enums.ProductStatus[]
    delegate_aux_notificationEvent?: NotificationEventUpdateOneRequiredWithoutDelegate_aux_statusChangeEventNestedInput
  }

  export type StatusChangeEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventTypes?: StatusChangeEventUpdateeventTypesInput | $Enums.ProductStatus[]
  }

  export type StatusChangeEventCreateManyInput = {
    id?: string
    eventTypes?: StatusChangeEventCreateeventTypesInput | $Enums.ProductStatus[]
  }

  export type StatusChangeEventUpdateManyMutationInput = {
    eventTypes?: StatusChangeEventUpdateeventTypesInput | $Enums.ProductStatus[]
  }

  export type StatusChangeEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventTypes?: StatusChangeEventUpdateeventTypesInput | $Enums.ProductStatus[]
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

  export type NotificationEventListRelationFilter = {
    every?: NotificationEventWhereInput
    some?: NotificationEventWhereInput
    none?: NotificationEventWhereInput
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

  export type NotificationEventOrderByRelationAggregateInput = {
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

  export type HttpNetworkErrorDataCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type HttpNetworkErrorDataMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type HttpNetworkErrorDataMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type HttpSerializationErrorDataCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type HttpSerializationErrorDataMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type HttpSerializationErrorDataMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type HttpClientErrorDataCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    status?: SortOrder
  }

  export type HttpClientErrorDataAvgOrderByAggregateInput = {
    status?: SortOrder
  }

  export type HttpClientErrorDataMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    status?: SortOrder
  }

  export type HttpClientErrorDataMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    status?: SortOrder
  }

  export type HttpClientErrorDataSumOrderByAggregateInput = {
    status?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type EnumProductRecordDataFieldFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductRecordDataField | EnumProductRecordDataFieldFieldRefInput<$PrismaModel>
    in?: $Enums.ProductRecordDataField[] | ListEnumProductRecordDataFieldFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductRecordDataField[] | ListEnumProductRecordDataFieldFieldRefInput<$PrismaModel>
    not?: NestedEnumProductRecordDataFieldFilter<$PrismaModel> | $Enums.ProductRecordDataField
  }

  export type ProductRecordRelationFilter = {
    is?: ProductRecordWhereInput
    isNot?: ProductRecordWhereInput
  }

  export type ProductRecordErrorCountOrderByAggregateInput = {
    id?: SortOrder
    errorId?: SortOrder
    errorCode?: SortOrder
    recordId?: SortOrder
    field?: SortOrder
    message?: SortOrder
  }

  export type ProductRecordErrorMaxOrderByAggregateInput = {
    id?: SortOrder
    errorId?: SortOrder
    errorCode?: SortOrder
    recordId?: SortOrder
    field?: SortOrder
    message?: SortOrder
  }

  export type ProductRecordErrorMinOrderByAggregateInput = {
    id?: SortOrder
    errorId?: SortOrder
    errorCode?: SortOrder
    recordId?: SortOrder
    field?: SortOrder
    message?: SortOrder
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

  export type EnumProductRecordDataFieldWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductRecordDataField | EnumProductRecordDataFieldFieldRefInput<$PrismaModel>
    in?: $Enums.ProductRecordDataField[] | ListEnumProductRecordDataFieldFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductRecordDataField[] | ListEnumProductRecordDataFieldFieldRefInput<$PrismaModel>
    not?: NestedEnumProductRecordDataFieldWithAggregatesFilter<$PrismaModel> | $Enums.ProductRecordDataField
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductRecordDataFieldFilter<$PrismaModel>
    _max?: NestedEnumProductRecordDataFieldFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumProductStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProductStatusNullableFilter<$PrismaModel> | $Enums.ProductStatus | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumProductRecordDataFieldNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductRecordDataField[] | ListEnumProductRecordDataFieldFieldRefInput<$PrismaModel> | null
    has?: $Enums.ProductRecordDataField | EnumProductRecordDataFieldFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.ProductRecordDataField[] | ListEnumProductRecordDataFieldFieldRefInput<$PrismaModel>
    hasSome?: $Enums.ProductRecordDataField[] | ListEnumProductRecordDataFieldFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductRecordErrorListRelationFilter = {
    every?: ProductRecordErrorWhereInput
    some?: ProductRecordErrorWhereInput
    none?: ProductRecordErrorWhereInput
  }

  export type ProductRecordErrorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    updatedAt?: SortOrder
    updatedById?: SortOrder
    timestamp?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    rawPrice?: SortOrder
    status?: SortOrder
    wasManuallyCreated?: SortOrder
    manuallyChangedFields?: SortOrder
  }

  export type ProductRecordAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProductRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    updatedAt?: SortOrder
    updatedById?: SortOrder
    timestamp?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    rawPrice?: SortOrder
    status?: SortOrder
    wasManuallyCreated?: SortOrder
  }

  export type ProductRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    updatedAt?: SortOrder
    updatedById?: SortOrder
    timestamp?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    rawPrice?: SortOrder
    status?: SortOrder
    wasManuallyCreated?: SortOrder
  }

  export type ProductRecordSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumProductStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProductStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumProductStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumProductStatusNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumProductCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductCategory | EnumProductCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumProductCategoryFilter<$PrismaModel> | $Enums.ProductCategory
  }

  export type EnumProductSubCategoryNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductSubCategory[] | ListEnumProductSubCategoryFieldRefInput<$PrismaModel> | null
    has?: $Enums.ProductSubCategory | EnumProductSubCategoryFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.ProductSubCategory[] | ListEnumProductSubCategoryFieldRefInput<$PrismaModel>
    hasSome?: $Enums.ProductSubCategory[] | ListEnumProductSubCategoryFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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
    status?: SortOrder
    statusRecordedAt?: SortOrder
    price?: SortOrder
    priceRecordedAt?: SortOrder
    category?: SortOrder
    subCategories?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
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
    status?: SortOrder
    statusRecordedAt?: SortOrder
    price?: SortOrder
    priceRecordedAt?: SortOrder
    category?: SortOrder
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
    status?: SortOrder
    statusRecordedAt?: SortOrder
    price?: SortOrder
    priceRecordedAt?: SortOrder
    category?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumProductCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductCategory | EnumProductCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumProductCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ProductCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductCategoryFilter<$PrismaModel>
    _max?: NestedEnumProductCategoryFilter<$PrismaModel>
  }

  export type EnumNotificationEventContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationEventContentType | EnumNotificationEventContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationEventContentType[] | ListEnumNotificationEventContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationEventContentType[] | ListEnumNotificationEventContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationEventContentTypeFilter<$PrismaModel> | $Enums.NotificationEventContentType
  }

  export type PriceChangeEventCNullableRelationFilter = {
    is?: PriceChangeEventCWhereInput | null
    isNot?: PriceChangeEventCWhereInput | null
  }

  export type StatusChangeEventNullableRelationFilter = {
    is?: StatusChangeEventWhereInput | null
    isNot?: StatusChangeEventWhereInput | null
  }

  export type NotificationEventCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    updatedAt?: SortOrder
    updatedById?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    contentType?: SortOrder
  }

  export type NotificationEventMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    updatedAt?: SortOrder
    updatedById?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    contentType?: SortOrder
  }

  export type NotificationEventMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    updatedAt?: SortOrder
    updatedById?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    contentType?: SortOrder
  }

  export type EnumNotificationEventContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationEventContentType | EnumNotificationEventContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationEventContentType[] | ListEnumNotificationEventContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationEventContentType[] | ListEnumNotificationEventContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationEventContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationEventContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationEventContentTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationEventContentTypeFilter<$PrismaModel>
  }

  export type EnumPriceChangeEventTypeNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceChangeEventType[] | ListEnumPriceChangeEventTypeFieldRefInput<$PrismaModel> | null
    has?: $Enums.PriceChangeEventType | EnumPriceChangeEventTypeFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.PriceChangeEventType[] | ListEnumPriceChangeEventTypeFieldRefInput<$PrismaModel>
    hasSome?: $Enums.PriceChangeEventType[] | ListEnumPriceChangeEventTypeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type NotificationEventRelationFilter = {
    is?: NotificationEventWhereInput
    isNot?: NotificationEventWhereInput
  }

  export type PriceChangeEventCCountOrderByAggregateInput = {
    id?: SortOrder
    eventTypes?: SortOrder
  }

  export type PriceChangeEventCMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PriceChangeEventCMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumProductStatusNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel> | null
    has?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    hasSome?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StatusChangeEventCountOrderByAggregateInput = {
    id?: SortOrder
    eventTypes?: SortOrder
  }

  export type StatusChangeEventMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StatusChangeEventMinOrderByAggregateInput = {
    id?: SortOrder
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

  export type NotificationEventCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<NotificationEventCreateWithoutCreatedByInput, NotificationEventUncheckedCreateWithoutCreatedByInput> | NotificationEventCreateWithoutCreatedByInput[] | NotificationEventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: NotificationEventCreateOrConnectWithoutCreatedByInput | NotificationEventCreateOrConnectWithoutCreatedByInput[]
    createMany?: NotificationEventCreateManyCreatedByInputEnvelope
    connect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
  }

  export type NotificationEventCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<NotificationEventCreateWithoutUpdatedByInput, NotificationEventUncheckedCreateWithoutUpdatedByInput> | NotificationEventCreateWithoutUpdatedByInput[] | NotificationEventUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: NotificationEventCreateOrConnectWithoutUpdatedByInput | NotificationEventCreateOrConnectWithoutUpdatedByInput[]
    createMany?: NotificationEventCreateManyUpdatedByInputEnvelope
    connect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
  }

  export type NotificationEventCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationEventCreateWithoutUserInput, NotificationEventUncheckedCreateWithoutUserInput> | NotificationEventCreateWithoutUserInput[] | NotificationEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationEventCreateOrConnectWithoutUserInput | NotificationEventCreateOrConnectWithoutUserInput[]
    createMany?: NotificationEventCreateManyUserInputEnvelope
    connect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
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

  export type NotificationEventUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<NotificationEventCreateWithoutCreatedByInput, NotificationEventUncheckedCreateWithoutCreatedByInput> | NotificationEventCreateWithoutCreatedByInput[] | NotificationEventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: NotificationEventCreateOrConnectWithoutCreatedByInput | NotificationEventCreateOrConnectWithoutCreatedByInput[]
    createMany?: NotificationEventCreateManyCreatedByInputEnvelope
    connect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
  }

  export type NotificationEventUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<NotificationEventCreateWithoutUpdatedByInput, NotificationEventUncheckedCreateWithoutUpdatedByInput> | NotificationEventCreateWithoutUpdatedByInput[] | NotificationEventUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: NotificationEventCreateOrConnectWithoutUpdatedByInput | NotificationEventCreateOrConnectWithoutUpdatedByInput[]
    createMany?: NotificationEventCreateManyUpdatedByInputEnvelope
    connect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
  }

  export type NotificationEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationEventCreateWithoutUserInput, NotificationEventUncheckedCreateWithoutUserInput> | NotificationEventCreateWithoutUserInput[] | NotificationEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationEventCreateOrConnectWithoutUserInput | NotificationEventCreateOrConnectWithoutUserInput[]
    createMany?: NotificationEventCreateManyUserInputEnvelope
    connect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
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

  export type NotificationEventUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<NotificationEventCreateWithoutCreatedByInput, NotificationEventUncheckedCreateWithoutCreatedByInput> | NotificationEventCreateWithoutCreatedByInput[] | NotificationEventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: NotificationEventCreateOrConnectWithoutCreatedByInput | NotificationEventCreateOrConnectWithoutCreatedByInput[]
    upsert?: NotificationEventUpsertWithWhereUniqueWithoutCreatedByInput | NotificationEventUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: NotificationEventCreateManyCreatedByInputEnvelope
    set?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    disconnect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    delete?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    connect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    update?: NotificationEventUpdateWithWhereUniqueWithoutCreatedByInput | NotificationEventUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: NotificationEventUpdateManyWithWhereWithoutCreatedByInput | NotificationEventUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: NotificationEventScalarWhereInput | NotificationEventScalarWhereInput[]
  }

  export type NotificationEventUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<NotificationEventCreateWithoutUpdatedByInput, NotificationEventUncheckedCreateWithoutUpdatedByInput> | NotificationEventCreateWithoutUpdatedByInput[] | NotificationEventUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: NotificationEventCreateOrConnectWithoutUpdatedByInput | NotificationEventCreateOrConnectWithoutUpdatedByInput[]
    upsert?: NotificationEventUpsertWithWhereUniqueWithoutUpdatedByInput | NotificationEventUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: NotificationEventCreateManyUpdatedByInputEnvelope
    set?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    disconnect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    delete?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    connect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    update?: NotificationEventUpdateWithWhereUniqueWithoutUpdatedByInput | NotificationEventUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: NotificationEventUpdateManyWithWhereWithoutUpdatedByInput | NotificationEventUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: NotificationEventScalarWhereInput | NotificationEventScalarWhereInput[]
  }

  export type NotificationEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationEventCreateWithoutUserInput, NotificationEventUncheckedCreateWithoutUserInput> | NotificationEventCreateWithoutUserInput[] | NotificationEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationEventCreateOrConnectWithoutUserInput | NotificationEventCreateOrConnectWithoutUserInput[]
    upsert?: NotificationEventUpsertWithWhereUniqueWithoutUserInput | NotificationEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationEventCreateManyUserInputEnvelope
    set?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    disconnect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    delete?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    connect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    update?: NotificationEventUpdateWithWhereUniqueWithoutUserInput | NotificationEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationEventUpdateManyWithWhereWithoutUserInput | NotificationEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationEventScalarWhereInput | NotificationEventScalarWhereInput[]
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

  export type NotificationEventUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<NotificationEventCreateWithoutCreatedByInput, NotificationEventUncheckedCreateWithoutCreatedByInput> | NotificationEventCreateWithoutCreatedByInput[] | NotificationEventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: NotificationEventCreateOrConnectWithoutCreatedByInput | NotificationEventCreateOrConnectWithoutCreatedByInput[]
    upsert?: NotificationEventUpsertWithWhereUniqueWithoutCreatedByInput | NotificationEventUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: NotificationEventCreateManyCreatedByInputEnvelope
    set?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    disconnect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    delete?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    connect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    update?: NotificationEventUpdateWithWhereUniqueWithoutCreatedByInput | NotificationEventUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: NotificationEventUpdateManyWithWhereWithoutCreatedByInput | NotificationEventUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: NotificationEventScalarWhereInput | NotificationEventScalarWhereInput[]
  }

  export type NotificationEventUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<NotificationEventCreateWithoutUpdatedByInput, NotificationEventUncheckedCreateWithoutUpdatedByInput> | NotificationEventCreateWithoutUpdatedByInput[] | NotificationEventUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: NotificationEventCreateOrConnectWithoutUpdatedByInput | NotificationEventCreateOrConnectWithoutUpdatedByInput[]
    upsert?: NotificationEventUpsertWithWhereUniqueWithoutUpdatedByInput | NotificationEventUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: NotificationEventCreateManyUpdatedByInputEnvelope
    set?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    disconnect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    delete?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    connect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    update?: NotificationEventUpdateWithWhereUniqueWithoutUpdatedByInput | NotificationEventUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: NotificationEventUpdateManyWithWhereWithoutUpdatedByInput | NotificationEventUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: NotificationEventScalarWhereInput | NotificationEventScalarWhereInput[]
  }

  export type NotificationEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationEventCreateWithoutUserInput, NotificationEventUncheckedCreateWithoutUserInput> | NotificationEventCreateWithoutUserInput[] | NotificationEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationEventCreateOrConnectWithoutUserInput | NotificationEventCreateOrConnectWithoutUserInput[]
    upsert?: NotificationEventUpsertWithWhereUniqueWithoutUserInput | NotificationEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationEventCreateManyUserInputEnvelope
    set?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    disconnect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    delete?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    connect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    update?: NotificationEventUpdateWithWhereUniqueWithoutUserInput | NotificationEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationEventUpdateManyWithWhereWithoutUserInput | NotificationEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationEventScalarWhereInput | NotificationEventScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumElementAttributeFieldUpdateOperationsInput = {
    set?: $Enums.ElementAttribute
  }

  export type ProductRecordCreateNestedOneWithoutErrorsInput = {
    create?: XOR<ProductRecordCreateWithoutErrorsInput, ProductRecordUncheckedCreateWithoutErrorsInput>
    connectOrCreate?: ProductRecordCreateOrConnectWithoutErrorsInput
    connect?: ProductRecordWhereUniqueInput
  }

  export type EnumScrapingErrorCodeFieldUpdateOperationsInput = {
    set?: $Enums.ScrapingErrorCode
  }

  export type EnumProductRecordDataFieldFieldUpdateOperationsInput = {
    set?: $Enums.ProductRecordDataField
  }

  export type ProductRecordUpdateOneRequiredWithoutErrorsNestedInput = {
    create?: XOR<ProductRecordCreateWithoutErrorsInput, ProductRecordUncheckedCreateWithoutErrorsInput>
    connectOrCreate?: ProductRecordCreateOrConnectWithoutErrorsInput
    upsert?: ProductRecordUpsertWithoutErrorsInput
    connect?: ProductRecordWhereUniqueInput
    update?: XOR<XOR<ProductRecordUpdateToOneWithWhereWithoutErrorsInput, ProductRecordUpdateWithoutErrorsInput>, ProductRecordUncheckedUpdateWithoutErrorsInput>
  }

  export type ProductRecordCreatemanuallyChangedFieldsInput = {
    set: $Enums.ProductRecordDataField[]
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

  export type ProductRecordErrorCreateNestedManyWithoutRecordInput = {
    create?: XOR<ProductRecordErrorCreateWithoutRecordInput, ProductRecordErrorUncheckedCreateWithoutRecordInput> | ProductRecordErrorCreateWithoutRecordInput[] | ProductRecordErrorUncheckedCreateWithoutRecordInput[]
    connectOrCreate?: ProductRecordErrorCreateOrConnectWithoutRecordInput | ProductRecordErrorCreateOrConnectWithoutRecordInput[]
    createMany?: ProductRecordErrorCreateManyRecordInputEnvelope
    connect?: ProductRecordErrorWhereUniqueInput | ProductRecordErrorWhereUniqueInput[]
  }

  export type ProductRecordErrorUncheckedCreateNestedManyWithoutRecordInput = {
    create?: XOR<ProductRecordErrorCreateWithoutRecordInput, ProductRecordErrorUncheckedCreateWithoutRecordInput> | ProductRecordErrorCreateWithoutRecordInput[] | ProductRecordErrorUncheckedCreateWithoutRecordInput[]
    connectOrCreate?: ProductRecordErrorCreateOrConnectWithoutRecordInput | ProductRecordErrorCreateOrConnectWithoutRecordInput[]
    createMany?: ProductRecordErrorCreateManyRecordInputEnvelope
    connect?: ProductRecordErrorWhereUniqueInput | ProductRecordErrorWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumProductStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProductStatus | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductRecordUpdatemanuallyChangedFieldsInput = {
    set?: $Enums.ProductRecordDataField[]
    push?: $Enums.ProductRecordDataField | $Enums.ProductRecordDataField[]
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

  export type ProductRecordErrorUpdateManyWithoutRecordNestedInput = {
    create?: XOR<ProductRecordErrorCreateWithoutRecordInput, ProductRecordErrorUncheckedCreateWithoutRecordInput> | ProductRecordErrorCreateWithoutRecordInput[] | ProductRecordErrorUncheckedCreateWithoutRecordInput[]
    connectOrCreate?: ProductRecordErrorCreateOrConnectWithoutRecordInput | ProductRecordErrorCreateOrConnectWithoutRecordInput[]
    upsert?: ProductRecordErrorUpsertWithWhereUniqueWithoutRecordInput | ProductRecordErrorUpsertWithWhereUniqueWithoutRecordInput[]
    createMany?: ProductRecordErrorCreateManyRecordInputEnvelope
    set?: ProductRecordErrorWhereUniqueInput | ProductRecordErrorWhereUniqueInput[]
    disconnect?: ProductRecordErrorWhereUniqueInput | ProductRecordErrorWhereUniqueInput[]
    delete?: ProductRecordErrorWhereUniqueInput | ProductRecordErrorWhereUniqueInput[]
    connect?: ProductRecordErrorWhereUniqueInput | ProductRecordErrorWhereUniqueInput[]
    update?: ProductRecordErrorUpdateWithWhereUniqueWithoutRecordInput | ProductRecordErrorUpdateWithWhereUniqueWithoutRecordInput[]
    updateMany?: ProductRecordErrorUpdateManyWithWhereWithoutRecordInput | ProductRecordErrorUpdateManyWithWhereWithoutRecordInput[]
    deleteMany?: ProductRecordErrorScalarWhereInput | ProductRecordErrorScalarWhereInput[]
  }

  export type ProductRecordErrorUncheckedUpdateManyWithoutRecordNestedInput = {
    create?: XOR<ProductRecordErrorCreateWithoutRecordInput, ProductRecordErrorUncheckedCreateWithoutRecordInput> | ProductRecordErrorCreateWithoutRecordInput[] | ProductRecordErrorUncheckedCreateWithoutRecordInput[]
    connectOrCreate?: ProductRecordErrorCreateOrConnectWithoutRecordInput | ProductRecordErrorCreateOrConnectWithoutRecordInput[]
    upsert?: ProductRecordErrorUpsertWithWhereUniqueWithoutRecordInput | ProductRecordErrorUpsertWithWhereUniqueWithoutRecordInput[]
    createMany?: ProductRecordErrorCreateManyRecordInputEnvelope
    set?: ProductRecordErrorWhereUniqueInput | ProductRecordErrorWhereUniqueInput[]
    disconnect?: ProductRecordErrorWhereUniqueInput | ProductRecordErrorWhereUniqueInput[]
    delete?: ProductRecordErrorWhereUniqueInput | ProductRecordErrorWhereUniqueInput[]
    connect?: ProductRecordErrorWhereUniqueInput | ProductRecordErrorWhereUniqueInput[]
    update?: ProductRecordErrorUpdateWithWhereUniqueWithoutRecordInput | ProductRecordErrorUpdateWithWhereUniqueWithoutRecordInput[]
    updateMany?: ProductRecordErrorUpdateManyWithWhereWithoutRecordInput | ProductRecordErrorUpdateManyWithWhereWithoutRecordInput[]
    deleteMany?: ProductRecordErrorScalarWhereInput | ProductRecordErrorScalarWhereInput[]
  }

  export type ProductCreatesubCategoriesInput = {
    set: $Enums.ProductSubCategory[]
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

  export type NotificationEventCreateNestedManyWithoutProductInput = {
    create?: XOR<NotificationEventCreateWithoutProductInput, NotificationEventUncheckedCreateWithoutProductInput> | NotificationEventCreateWithoutProductInput[] | NotificationEventUncheckedCreateWithoutProductInput[]
    connectOrCreate?: NotificationEventCreateOrConnectWithoutProductInput | NotificationEventCreateOrConnectWithoutProductInput[]
    createMany?: NotificationEventCreateManyProductInputEnvelope
    connect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
  }

  export type ProductRecordUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductRecordCreateWithoutProductInput, ProductRecordUncheckedCreateWithoutProductInput> | ProductRecordCreateWithoutProductInput[] | ProductRecordUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductRecordCreateOrConnectWithoutProductInput | ProductRecordCreateOrConnectWithoutProductInput[]
    createMany?: ProductRecordCreateManyProductInputEnvelope
    connect?: ProductRecordWhereUniqueInput | ProductRecordWhereUniqueInput[]
  }

  export type NotificationEventUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<NotificationEventCreateWithoutProductInput, NotificationEventUncheckedCreateWithoutProductInput> | NotificationEventCreateWithoutProductInput[] | NotificationEventUncheckedCreateWithoutProductInput[]
    connectOrCreate?: NotificationEventCreateOrConnectWithoutProductInput | NotificationEventCreateOrConnectWithoutProductInput[]
    createMany?: NotificationEventCreateManyProductInputEnvelope
    connect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumProductCategoryFieldUpdateOperationsInput = {
    set?: $Enums.ProductCategory
  }

  export type ProductUpdatesubCategoriesInput = {
    set?: $Enums.ProductSubCategory[]
    push?: $Enums.ProductSubCategory | $Enums.ProductSubCategory[]
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

  export type NotificationEventUpdateManyWithoutProductNestedInput = {
    create?: XOR<NotificationEventCreateWithoutProductInput, NotificationEventUncheckedCreateWithoutProductInput> | NotificationEventCreateWithoutProductInput[] | NotificationEventUncheckedCreateWithoutProductInput[]
    connectOrCreate?: NotificationEventCreateOrConnectWithoutProductInput | NotificationEventCreateOrConnectWithoutProductInput[]
    upsert?: NotificationEventUpsertWithWhereUniqueWithoutProductInput | NotificationEventUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: NotificationEventCreateManyProductInputEnvelope
    set?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    disconnect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    delete?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    connect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    update?: NotificationEventUpdateWithWhereUniqueWithoutProductInput | NotificationEventUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: NotificationEventUpdateManyWithWhereWithoutProductInput | NotificationEventUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: NotificationEventScalarWhereInput | NotificationEventScalarWhereInput[]
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

  export type NotificationEventUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<NotificationEventCreateWithoutProductInput, NotificationEventUncheckedCreateWithoutProductInput> | NotificationEventCreateWithoutProductInput[] | NotificationEventUncheckedCreateWithoutProductInput[]
    connectOrCreate?: NotificationEventCreateOrConnectWithoutProductInput | NotificationEventCreateOrConnectWithoutProductInput[]
    upsert?: NotificationEventUpsertWithWhereUniqueWithoutProductInput | NotificationEventUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: NotificationEventCreateManyProductInputEnvelope
    set?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    disconnect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    delete?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    connect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    update?: NotificationEventUpdateWithWhereUniqueWithoutProductInput | NotificationEventUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: NotificationEventUpdateManyWithWhereWithoutProductInput | NotificationEventUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: NotificationEventScalarWhereInput | NotificationEventScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedNotificationEventsInput = {
    create?: XOR<UserCreateWithoutCreatedNotificationEventsInput, UserUncheckedCreateWithoutCreatedNotificationEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedNotificationEventsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedNotificationEventsInput = {
    create?: XOR<UserCreateWithoutUpdatedNotificationEventsInput, UserUncheckedCreateWithoutUpdatedNotificationEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedNotificationEventsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutNotificationEventsInput = {
    create?: XOR<ProductCreateWithoutNotificationEventsInput, ProductUncheckedCreateWithoutNotificationEventsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutNotificationEventsInput
    connect?: ProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNotificationEventsInput = {
    create?: XOR<UserCreateWithoutNotificationEventsInput, UserUncheckedCreateWithoutNotificationEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationEventsInput
    connect?: UserWhereUniqueInput
  }

  export type PriceChangeEventCCreateNestedOneWithoutDelegate_aux_notificationEventInput = {
    create?: XOR<PriceChangeEventCCreateWithoutDelegate_aux_notificationEventInput, PriceChangeEventCUncheckedCreateWithoutDelegate_aux_notificationEventInput>
    connectOrCreate?: PriceChangeEventCCreateOrConnectWithoutDelegate_aux_notificationEventInput
    connect?: PriceChangeEventCWhereUniqueInput
  }

  export type StatusChangeEventCreateNestedOneWithoutDelegate_aux_notificationEventInput = {
    create?: XOR<StatusChangeEventCreateWithoutDelegate_aux_notificationEventInput, StatusChangeEventUncheckedCreateWithoutDelegate_aux_notificationEventInput>
    connectOrCreate?: StatusChangeEventCreateOrConnectWithoutDelegate_aux_notificationEventInput
    connect?: StatusChangeEventWhereUniqueInput
  }

  export type PriceChangeEventCUncheckedCreateNestedOneWithoutDelegate_aux_notificationEventInput = {
    create?: XOR<PriceChangeEventCCreateWithoutDelegate_aux_notificationEventInput, PriceChangeEventCUncheckedCreateWithoutDelegate_aux_notificationEventInput>
    connectOrCreate?: PriceChangeEventCCreateOrConnectWithoutDelegate_aux_notificationEventInput
    connect?: PriceChangeEventCWhereUniqueInput
  }

  export type StatusChangeEventUncheckedCreateNestedOneWithoutDelegate_aux_notificationEventInput = {
    create?: XOR<StatusChangeEventCreateWithoutDelegate_aux_notificationEventInput, StatusChangeEventUncheckedCreateWithoutDelegate_aux_notificationEventInput>
    connectOrCreate?: StatusChangeEventCreateOrConnectWithoutDelegate_aux_notificationEventInput
    connect?: StatusChangeEventWhereUniqueInput
  }

  export type EnumNotificationEventContentTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationEventContentType
  }

  export type UserUpdateOneRequiredWithoutCreatedNotificationEventsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedNotificationEventsInput, UserUncheckedCreateWithoutCreatedNotificationEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedNotificationEventsInput
    upsert?: UserUpsertWithoutCreatedNotificationEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedNotificationEventsInput, UserUpdateWithoutCreatedNotificationEventsInput>, UserUncheckedUpdateWithoutCreatedNotificationEventsInput>
  }

  export type UserUpdateOneRequiredWithoutUpdatedNotificationEventsNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedNotificationEventsInput, UserUncheckedCreateWithoutUpdatedNotificationEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedNotificationEventsInput
    upsert?: UserUpsertWithoutUpdatedNotificationEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatedNotificationEventsInput, UserUpdateWithoutUpdatedNotificationEventsInput>, UserUncheckedUpdateWithoutUpdatedNotificationEventsInput>
  }

  export type ProductUpdateOneRequiredWithoutNotificationEventsNestedInput = {
    create?: XOR<ProductCreateWithoutNotificationEventsInput, ProductUncheckedCreateWithoutNotificationEventsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutNotificationEventsInput
    upsert?: ProductUpsertWithoutNotificationEventsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutNotificationEventsInput, ProductUpdateWithoutNotificationEventsInput>, ProductUncheckedUpdateWithoutNotificationEventsInput>
  }

  export type UserUpdateOneRequiredWithoutNotificationEventsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationEventsInput, UserUncheckedCreateWithoutNotificationEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationEventsInput
    upsert?: UserUpsertWithoutNotificationEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationEventsInput, UserUpdateWithoutNotificationEventsInput>, UserUncheckedUpdateWithoutNotificationEventsInput>
  }

  export type PriceChangeEventCUpdateOneWithoutDelegate_aux_notificationEventNestedInput = {
    create?: XOR<PriceChangeEventCCreateWithoutDelegate_aux_notificationEventInput, PriceChangeEventCUncheckedCreateWithoutDelegate_aux_notificationEventInput>
    connectOrCreate?: PriceChangeEventCCreateOrConnectWithoutDelegate_aux_notificationEventInput
    upsert?: PriceChangeEventCUpsertWithoutDelegate_aux_notificationEventInput
    disconnect?: PriceChangeEventCWhereInput | boolean
    delete?: PriceChangeEventCWhereInput | boolean
    connect?: PriceChangeEventCWhereUniqueInput
    update?: XOR<XOR<PriceChangeEventCUpdateToOneWithWhereWithoutDelegate_aux_notificationEventInput, PriceChangeEventCUpdateWithoutDelegate_aux_notificationEventInput>, PriceChangeEventCUncheckedUpdateWithoutDelegate_aux_notificationEventInput>
  }

  export type StatusChangeEventUpdateOneWithoutDelegate_aux_notificationEventNestedInput = {
    create?: XOR<StatusChangeEventCreateWithoutDelegate_aux_notificationEventInput, StatusChangeEventUncheckedCreateWithoutDelegate_aux_notificationEventInput>
    connectOrCreate?: StatusChangeEventCreateOrConnectWithoutDelegate_aux_notificationEventInput
    upsert?: StatusChangeEventUpsertWithoutDelegate_aux_notificationEventInput
    disconnect?: StatusChangeEventWhereInput | boolean
    delete?: StatusChangeEventWhereInput | boolean
    connect?: StatusChangeEventWhereUniqueInput
    update?: XOR<XOR<StatusChangeEventUpdateToOneWithWhereWithoutDelegate_aux_notificationEventInput, StatusChangeEventUpdateWithoutDelegate_aux_notificationEventInput>, StatusChangeEventUncheckedUpdateWithoutDelegate_aux_notificationEventInput>
  }

  export type PriceChangeEventCUncheckedUpdateOneWithoutDelegate_aux_notificationEventNestedInput = {
    create?: XOR<PriceChangeEventCCreateWithoutDelegate_aux_notificationEventInput, PriceChangeEventCUncheckedCreateWithoutDelegate_aux_notificationEventInput>
    connectOrCreate?: PriceChangeEventCCreateOrConnectWithoutDelegate_aux_notificationEventInput
    upsert?: PriceChangeEventCUpsertWithoutDelegate_aux_notificationEventInput
    disconnect?: PriceChangeEventCWhereInput | boolean
    delete?: PriceChangeEventCWhereInput | boolean
    connect?: PriceChangeEventCWhereUniqueInput
    update?: XOR<XOR<PriceChangeEventCUpdateToOneWithWhereWithoutDelegate_aux_notificationEventInput, PriceChangeEventCUpdateWithoutDelegate_aux_notificationEventInput>, PriceChangeEventCUncheckedUpdateWithoutDelegate_aux_notificationEventInput>
  }

  export type StatusChangeEventUncheckedUpdateOneWithoutDelegate_aux_notificationEventNestedInput = {
    create?: XOR<StatusChangeEventCreateWithoutDelegate_aux_notificationEventInput, StatusChangeEventUncheckedCreateWithoutDelegate_aux_notificationEventInput>
    connectOrCreate?: StatusChangeEventCreateOrConnectWithoutDelegate_aux_notificationEventInput
    upsert?: StatusChangeEventUpsertWithoutDelegate_aux_notificationEventInput
    disconnect?: StatusChangeEventWhereInput | boolean
    delete?: StatusChangeEventWhereInput | boolean
    connect?: StatusChangeEventWhereUniqueInput
    update?: XOR<XOR<StatusChangeEventUpdateToOneWithWhereWithoutDelegate_aux_notificationEventInput, StatusChangeEventUpdateWithoutDelegate_aux_notificationEventInput>, StatusChangeEventUncheckedUpdateWithoutDelegate_aux_notificationEventInput>
  }

  export type PriceChangeEventCCreateeventTypesInput = {
    set: $Enums.PriceChangeEventType[]
  }

  export type NotificationEventCreateNestedOneWithoutDelegate_aux_priceChangeEventCInput = {
    create?: XOR<NotificationEventCreateWithoutDelegate_aux_priceChangeEventCInput, NotificationEventUncheckedCreateWithoutDelegate_aux_priceChangeEventCInput>
    connectOrCreate?: NotificationEventCreateOrConnectWithoutDelegate_aux_priceChangeEventCInput
    connect?: NotificationEventWhereUniqueInput
  }

  export type PriceChangeEventCUpdateeventTypesInput = {
    set?: $Enums.PriceChangeEventType[]
    push?: $Enums.PriceChangeEventType | $Enums.PriceChangeEventType[]
  }

  export type NotificationEventUpdateOneRequiredWithoutDelegate_aux_priceChangeEventCNestedInput = {
    create?: XOR<NotificationEventCreateWithoutDelegate_aux_priceChangeEventCInput, NotificationEventUncheckedCreateWithoutDelegate_aux_priceChangeEventCInput>
    connectOrCreate?: NotificationEventCreateOrConnectWithoutDelegate_aux_priceChangeEventCInput
    upsert?: NotificationEventUpsertWithoutDelegate_aux_priceChangeEventCInput
    connect?: NotificationEventWhereUniqueInput
    update?: XOR<XOR<NotificationEventUpdateToOneWithWhereWithoutDelegate_aux_priceChangeEventCInput, NotificationEventUpdateWithoutDelegate_aux_priceChangeEventCInput>, NotificationEventUncheckedUpdateWithoutDelegate_aux_priceChangeEventCInput>
  }

  export type StatusChangeEventCreateeventTypesInput = {
    set: $Enums.ProductStatus[]
  }

  export type NotificationEventCreateNestedOneWithoutDelegate_aux_statusChangeEventInput = {
    create?: XOR<NotificationEventCreateWithoutDelegate_aux_statusChangeEventInput, NotificationEventUncheckedCreateWithoutDelegate_aux_statusChangeEventInput>
    connectOrCreate?: NotificationEventCreateOrConnectWithoutDelegate_aux_statusChangeEventInput
    connect?: NotificationEventWhereUniqueInput
  }

  export type StatusChangeEventUpdateeventTypesInput = {
    set?: $Enums.ProductStatus[]
    push?: $Enums.ProductStatus | $Enums.ProductStatus[]
  }

  export type NotificationEventUpdateOneRequiredWithoutDelegate_aux_statusChangeEventNestedInput = {
    create?: XOR<NotificationEventCreateWithoutDelegate_aux_statusChangeEventInput, NotificationEventUncheckedCreateWithoutDelegate_aux_statusChangeEventInput>
    connectOrCreate?: NotificationEventCreateOrConnectWithoutDelegate_aux_statusChangeEventInput
    upsert?: NotificationEventUpsertWithoutDelegate_aux_statusChangeEventInput
    connect?: NotificationEventWhereUniqueInput
    update?: XOR<XOR<NotificationEventUpdateToOneWithWhereWithoutDelegate_aux_statusChangeEventInput, NotificationEventUpdateWithoutDelegate_aux_statusChangeEventInput>, NotificationEventUncheckedUpdateWithoutDelegate_aux_statusChangeEventInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type NestedEnumProductRecordDataFieldFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductRecordDataField | EnumProductRecordDataFieldFieldRefInput<$PrismaModel>
    in?: $Enums.ProductRecordDataField[] | ListEnumProductRecordDataFieldFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductRecordDataField[] | ListEnumProductRecordDataFieldFieldRefInput<$PrismaModel>
    not?: NestedEnumProductRecordDataFieldFilter<$PrismaModel> | $Enums.ProductRecordDataField
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

  export type NestedEnumProductRecordDataFieldWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductRecordDataField | EnumProductRecordDataFieldFieldRefInput<$PrismaModel>
    in?: $Enums.ProductRecordDataField[] | ListEnumProductRecordDataFieldFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductRecordDataField[] | ListEnumProductRecordDataFieldFieldRefInput<$PrismaModel>
    not?: NestedEnumProductRecordDataFieldWithAggregatesFilter<$PrismaModel> | $Enums.ProductRecordDataField
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductRecordDataFieldFilter<$PrismaModel>
    _max?: NestedEnumProductRecordDataFieldFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumProductStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProductStatusNullableFilter<$PrismaModel> | $Enums.ProductStatus | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumProductStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProductStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumProductStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumProductStatusNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumProductCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductCategory | EnumProductCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumProductCategoryFilter<$PrismaModel> | $Enums.ProductCategory
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumProductCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductCategory | EnumProductCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumProductCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ProductCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductCategoryFilter<$PrismaModel>
    _max?: NestedEnumProductCategoryFilter<$PrismaModel>
  }

  export type NestedEnumNotificationEventContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationEventContentType | EnumNotificationEventContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationEventContentType[] | ListEnumNotificationEventContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationEventContentType[] | ListEnumNotificationEventContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationEventContentTypeFilter<$PrismaModel> | $Enums.NotificationEventContentType
  }

  export type NestedEnumNotificationEventContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationEventContentType | EnumNotificationEventContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationEventContentType[] | ListEnumNotificationEventContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationEventContentType[] | ListEnumNotificationEventContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationEventContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationEventContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationEventContentTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationEventContentTypeFilter<$PrismaModel>
  }

  export type ProductCreateWithoutCreatedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    slug: string
    code?: string | null
    imageSrc?: string | null
    status?: $Enums.ProductStatus | null
    statusRecordedAt?: Date | string | null
    price?: number | null
    priceRecordedAt?: Date | string | null
    category: $Enums.ProductCategory
    subCategories?: ProductCreatesubCategoriesInput | $Enums.ProductSubCategory[]
    updatedBy: UserCreateNestedOneWithoutUpdatedProductsInput
    records?: ProductRecordCreateNestedManyWithoutProductInput
    notificationEvents?: NotificationEventCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCreatedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedById: string
    name?: string | null
    slug: string
    code?: string | null
    imageSrc?: string | null
    status?: $Enums.ProductStatus | null
    statusRecordedAt?: Date | string | null
    price?: number | null
    priceRecordedAt?: Date | string | null
    category: $Enums.ProductCategory
    subCategories?: ProductCreatesubCategoriesInput | $Enums.ProductSubCategory[]
    records?: ProductRecordUncheckedCreateNestedManyWithoutProductInput
    notificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutProductInput
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
    name?: string | null
    slug: string
    code?: string | null
    imageSrc?: string | null
    status?: $Enums.ProductStatus | null
    statusRecordedAt?: Date | string | null
    price?: number | null
    priceRecordedAt?: Date | string | null
    category: $Enums.ProductCategory
    subCategories?: ProductCreatesubCategoriesInput | $Enums.ProductSubCategory[]
    createdBy: UserCreateNestedOneWithoutCreatedProductsInput
    records?: ProductRecordCreateNestedManyWithoutProductInput
    notificationEvents?: NotificationEventCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUpdatedByInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    name?: string | null
    slug: string
    code?: string | null
    imageSrc?: string | null
    status?: $Enums.ProductStatus | null
    statusRecordedAt?: Date | string | null
    price?: number | null
    priceRecordedAt?: Date | string | null
    category: $Enums.ProductCategory
    subCategories?: ProductCreatesubCategoriesInput | $Enums.ProductSubCategory[]
    records?: ProductRecordUncheckedCreateNestedManyWithoutProductInput
    notificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutProductInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    timestamp?: Date | string
    price?: number | null
    rawPrice?: string | null
    status?: $Enums.ProductStatus | null
    wasManuallyCreated?: boolean
    manuallyChangedFields?: ProductRecordCreatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
    updatedBy: UserCreateNestedOneWithoutUpdatedProductRecordsInput
    product: ProductCreateNestedOneWithoutRecordsInput
    errors?: ProductRecordErrorCreateNestedManyWithoutRecordInput
  }

  export type ProductRecordUncheckedCreateWithoutCreatedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedById: string
    timestamp?: Date | string
    productId: string
    price?: number | null
    rawPrice?: string | null
    status?: $Enums.ProductStatus | null
    wasManuallyCreated?: boolean
    manuallyChangedFields?: ProductRecordCreatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
    errors?: ProductRecordErrorUncheckedCreateNestedManyWithoutRecordInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    timestamp?: Date | string
    price?: number | null
    rawPrice?: string | null
    status?: $Enums.ProductStatus | null
    wasManuallyCreated?: boolean
    manuallyChangedFields?: ProductRecordCreatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
    createdBy: UserCreateNestedOneWithoutCreatedProductRecordsInput
    product: ProductCreateNestedOneWithoutRecordsInput
    errors?: ProductRecordErrorCreateNestedManyWithoutRecordInput
  }

  export type ProductRecordUncheckedCreateWithoutUpdatedByInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    timestamp?: Date | string
    productId: string
    price?: number | null
    rawPrice?: string | null
    status?: $Enums.ProductStatus | null
    wasManuallyCreated?: boolean
    manuallyChangedFields?: ProductRecordCreatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
    errors?: ProductRecordErrorUncheckedCreateNestedManyWithoutRecordInput
  }

  export type ProductRecordCreateOrConnectWithoutUpdatedByInput = {
    where: ProductRecordWhereUniqueInput
    create: XOR<ProductRecordCreateWithoutUpdatedByInput, ProductRecordUncheckedCreateWithoutUpdatedByInput>
  }

  export type ProductRecordCreateManyUpdatedByInputEnvelope = {
    data: ProductRecordCreateManyUpdatedByInput | ProductRecordCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type NotificationEventCreateWithoutCreatedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contentType: $Enums.NotificationEventContentType
    updatedBy: UserCreateNestedOneWithoutUpdatedNotificationEventsInput
    product: ProductCreateNestedOneWithoutNotificationEventsInput
    user: UserCreateNestedOneWithoutNotificationEventsInput
    delegate_aux_priceChangeEventC?: PriceChangeEventCCreateNestedOneWithoutDelegate_aux_notificationEventInput
    delegate_aux_statusChangeEvent?: StatusChangeEventCreateNestedOneWithoutDelegate_aux_notificationEventInput
  }

  export type NotificationEventUncheckedCreateWithoutCreatedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedById: string
    productId: string
    userId: string
    contentType: $Enums.NotificationEventContentType
    delegate_aux_priceChangeEventC?: PriceChangeEventCUncheckedCreateNestedOneWithoutDelegate_aux_notificationEventInput
    delegate_aux_statusChangeEvent?: StatusChangeEventUncheckedCreateNestedOneWithoutDelegate_aux_notificationEventInput
  }

  export type NotificationEventCreateOrConnectWithoutCreatedByInput = {
    where: NotificationEventWhereUniqueInput
    create: XOR<NotificationEventCreateWithoutCreatedByInput, NotificationEventUncheckedCreateWithoutCreatedByInput>
  }

  export type NotificationEventCreateManyCreatedByInputEnvelope = {
    data: NotificationEventCreateManyCreatedByInput | NotificationEventCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type NotificationEventCreateWithoutUpdatedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contentType: $Enums.NotificationEventContentType
    createdBy: UserCreateNestedOneWithoutCreatedNotificationEventsInput
    product: ProductCreateNestedOneWithoutNotificationEventsInput
    user: UserCreateNestedOneWithoutNotificationEventsInput
    delegate_aux_priceChangeEventC?: PriceChangeEventCCreateNestedOneWithoutDelegate_aux_notificationEventInput
    delegate_aux_statusChangeEvent?: StatusChangeEventCreateNestedOneWithoutDelegate_aux_notificationEventInput
  }

  export type NotificationEventUncheckedCreateWithoutUpdatedByInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    productId: string
    userId: string
    contentType: $Enums.NotificationEventContentType
    delegate_aux_priceChangeEventC?: PriceChangeEventCUncheckedCreateNestedOneWithoutDelegate_aux_notificationEventInput
    delegate_aux_statusChangeEvent?: StatusChangeEventUncheckedCreateNestedOneWithoutDelegate_aux_notificationEventInput
  }

  export type NotificationEventCreateOrConnectWithoutUpdatedByInput = {
    where: NotificationEventWhereUniqueInput
    create: XOR<NotificationEventCreateWithoutUpdatedByInput, NotificationEventUncheckedCreateWithoutUpdatedByInput>
  }

  export type NotificationEventCreateManyUpdatedByInputEnvelope = {
    data: NotificationEventCreateManyUpdatedByInput | NotificationEventCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type NotificationEventCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contentType: $Enums.NotificationEventContentType
    createdBy: UserCreateNestedOneWithoutCreatedNotificationEventsInput
    updatedBy: UserCreateNestedOneWithoutUpdatedNotificationEventsInput
    product: ProductCreateNestedOneWithoutNotificationEventsInput
    delegate_aux_priceChangeEventC?: PriceChangeEventCCreateNestedOneWithoutDelegate_aux_notificationEventInput
    delegate_aux_statusChangeEvent?: StatusChangeEventCreateNestedOneWithoutDelegate_aux_notificationEventInput
  }

  export type NotificationEventUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    updatedById: string
    productId: string
    contentType: $Enums.NotificationEventContentType
    delegate_aux_priceChangeEventC?: PriceChangeEventCUncheckedCreateNestedOneWithoutDelegate_aux_notificationEventInput
    delegate_aux_statusChangeEvent?: StatusChangeEventUncheckedCreateNestedOneWithoutDelegate_aux_notificationEventInput
  }

  export type NotificationEventCreateOrConnectWithoutUserInput = {
    where: NotificationEventWhereUniqueInput
    create: XOR<NotificationEventCreateWithoutUserInput, NotificationEventUncheckedCreateWithoutUserInput>
  }

  export type NotificationEventCreateManyUserInputEnvelope = {
    data: NotificationEventCreateManyUserInput | NotificationEventCreateManyUserInput[]
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
    name?: StringNullableFilter<"Product"> | string | null
    slug?: StringFilter<"Product"> | string
    code?: StringNullableFilter<"Product"> | string | null
    imageSrc?: StringNullableFilter<"Product"> | string | null
    status?: EnumProductStatusNullableFilter<"Product"> | $Enums.ProductStatus | null
    statusRecordedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    price?: FloatNullableFilter<"Product"> | number | null
    priceRecordedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    category?: EnumProductCategoryFilter<"Product"> | $Enums.ProductCategory
    subCategories?: EnumProductSubCategoryNullableListFilter<"Product">
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
    createdAt?: DateTimeFilter<"ProductRecord"> | Date | string
    createdById?: UuidFilter<"ProductRecord"> | string
    updatedAt?: DateTimeFilter<"ProductRecord"> | Date | string
    updatedById?: UuidFilter<"ProductRecord"> | string
    timestamp?: DateTimeFilter<"ProductRecord"> | Date | string
    productId?: UuidFilter<"ProductRecord"> | string
    price?: FloatNullableFilter<"ProductRecord"> | number | null
    rawPrice?: StringNullableFilter<"ProductRecord"> | string | null
    status?: EnumProductStatusNullableFilter<"ProductRecord"> | $Enums.ProductStatus | null
    wasManuallyCreated?: BoolFilter<"ProductRecord"> | boolean
    manuallyChangedFields?: EnumProductRecordDataFieldNullableListFilter<"ProductRecord">
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

  export type NotificationEventUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: NotificationEventWhereUniqueInput
    update: XOR<NotificationEventUpdateWithoutCreatedByInput, NotificationEventUncheckedUpdateWithoutCreatedByInput>
    create: XOR<NotificationEventCreateWithoutCreatedByInput, NotificationEventUncheckedCreateWithoutCreatedByInput>
  }

  export type NotificationEventUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: NotificationEventWhereUniqueInput
    data: XOR<NotificationEventUpdateWithoutCreatedByInput, NotificationEventUncheckedUpdateWithoutCreatedByInput>
  }

  export type NotificationEventUpdateManyWithWhereWithoutCreatedByInput = {
    where: NotificationEventScalarWhereInput
    data: XOR<NotificationEventUpdateManyMutationInput, NotificationEventUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type NotificationEventScalarWhereInput = {
    AND?: NotificationEventScalarWhereInput | NotificationEventScalarWhereInput[]
    OR?: NotificationEventScalarWhereInput[]
    NOT?: NotificationEventScalarWhereInput | NotificationEventScalarWhereInput[]
    id?: UuidFilter<"NotificationEvent"> | string
    createdAt?: DateTimeFilter<"NotificationEvent"> | Date | string
    createdById?: UuidFilter<"NotificationEvent"> | string
    updatedAt?: DateTimeFilter<"NotificationEvent"> | Date | string
    updatedById?: UuidFilter<"NotificationEvent"> | string
    productId?: UuidFilter<"NotificationEvent"> | string
    userId?: UuidFilter<"NotificationEvent"> | string
    contentType?: EnumNotificationEventContentTypeFilter<"NotificationEvent"> | $Enums.NotificationEventContentType
  }

  export type NotificationEventUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: NotificationEventWhereUniqueInput
    update: XOR<NotificationEventUpdateWithoutUpdatedByInput, NotificationEventUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<NotificationEventCreateWithoutUpdatedByInput, NotificationEventUncheckedCreateWithoutUpdatedByInput>
  }

  export type NotificationEventUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: NotificationEventWhereUniqueInput
    data: XOR<NotificationEventUpdateWithoutUpdatedByInput, NotificationEventUncheckedUpdateWithoutUpdatedByInput>
  }

  export type NotificationEventUpdateManyWithWhereWithoutUpdatedByInput = {
    where: NotificationEventScalarWhereInput
    data: XOR<NotificationEventUpdateManyMutationInput, NotificationEventUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type NotificationEventUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationEventWhereUniqueInput
    update: XOR<NotificationEventUpdateWithoutUserInput, NotificationEventUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationEventCreateWithoutUserInput, NotificationEventUncheckedCreateWithoutUserInput>
  }

  export type NotificationEventUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationEventWhereUniqueInput
    data: XOR<NotificationEventUpdateWithoutUserInput, NotificationEventUncheckedUpdateWithoutUserInput>
  }

  export type NotificationEventUpdateManyWithWhereWithoutUserInput = {
    where: NotificationEventScalarWhereInput
    data: XOR<NotificationEventUpdateManyMutationInput, NotificationEventUncheckedUpdateManyWithoutUserInput>
  }

  export type ProductRecordCreateWithoutErrorsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timestamp?: Date | string
    price?: number | null
    rawPrice?: string | null
    status?: $Enums.ProductStatus | null
    wasManuallyCreated?: boolean
    manuallyChangedFields?: ProductRecordCreatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
    createdBy: UserCreateNestedOneWithoutCreatedProductRecordsInput
    updatedBy: UserCreateNestedOneWithoutUpdatedProductRecordsInput
    product: ProductCreateNestedOneWithoutRecordsInput
  }

  export type ProductRecordUncheckedCreateWithoutErrorsInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    updatedById: string
    timestamp?: Date | string
    productId: string
    price?: number | null
    rawPrice?: string | null
    status?: $Enums.ProductStatus | null
    wasManuallyCreated?: boolean
    manuallyChangedFields?: ProductRecordCreatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
  }

  export type ProductRecordCreateOrConnectWithoutErrorsInput = {
    where: ProductRecordWhereUniqueInput
    create: XOR<ProductRecordCreateWithoutErrorsInput, ProductRecordUncheckedCreateWithoutErrorsInput>
  }

  export type ProductRecordUpsertWithoutErrorsInput = {
    update: XOR<ProductRecordUpdateWithoutErrorsInput, ProductRecordUncheckedUpdateWithoutErrorsInput>
    create: XOR<ProductRecordCreateWithoutErrorsInput, ProductRecordUncheckedCreateWithoutErrorsInput>
    where?: ProductRecordWhereInput
  }

  export type ProductRecordUpdateToOneWithWhereWithoutErrorsInput = {
    where?: ProductRecordWhereInput
    data: XOR<ProductRecordUpdateWithoutErrorsInput, ProductRecordUncheckedUpdateWithoutErrorsInput>
  }

  export type ProductRecordUpdateWithoutErrorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    rawPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    wasManuallyCreated?: BoolFieldUpdateOperationsInput | boolean
    manuallyChangedFields?: ProductRecordUpdatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
    createdBy?: UserUpdateOneRequiredWithoutCreatedProductRecordsNestedInput
    updatedBy?: UserUpdateOneRequiredWithoutUpdatedProductRecordsNestedInput
    product?: ProductUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type ProductRecordUncheckedUpdateWithoutErrorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    rawPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    wasManuallyCreated?: BoolFieldUpdateOperationsInput | boolean
    manuallyChangedFields?: ProductRecordUpdatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
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
    createdNotificationEvents?: NotificationEventCreateNestedManyWithoutCreatedByInput
    updatedNotificationEvents?: NotificationEventCreateNestedManyWithoutUpdatedByInput
    notificationEvents?: NotificationEventCreateNestedManyWithoutUserInput
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
    createdNotificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutCreatedByInput
    updatedNotificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutUpdatedByInput
    notificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutUserInput
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
    createdNotificationEvents?: NotificationEventCreateNestedManyWithoutCreatedByInput
    updatedNotificationEvents?: NotificationEventCreateNestedManyWithoutUpdatedByInput
    notificationEvents?: NotificationEventCreateNestedManyWithoutUserInput
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
    createdNotificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutCreatedByInput
    updatedNotificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutUpdatedByInput
    notificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUpdatedProductRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedProductRecordsInput, UserUncheckedCreateWithoutUpdatedProductRecordsInput>
  }

  export type ProductCreateWithoutRecordsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    slug: string
    code?: string | null
    imageSrc?: string | null
    status?: $Enums.ProductStatus | null
    statusRecordedAt?: Date | string | null
    price?: number | null
    priceRecordedAt?: Date | string | null
    category: $Enums.ProductCategory
    subCategories?: ProductCreatesubCategoriesInput | $Enums.ProductSubCategory[]
    createdBy: UserCreateNestedOneWithoutCreatedProductsInput
    updatedBy: UserCreateNestedOneWithoutUpdatedProductsInput
    notificationEvents?: NotificationEventCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutRecordsInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    updatedById: string
    name?: string | null
    slug: string
    code?: string | null
    imageSrc?: string | null
    status?: $Enums.ProductStatus | null
    statusRecordedAt?: Date | string | null
    price?: number | null
    priceRecordedAt?: Date | string | null
    category: $Enums.ProductCategory
    subCategories?: ProductCreatesubCategoriesInput | $Enums.ProductSubCategory[]
    notificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutRecordsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutRecordsInput, ProductUncheckedCreateWithoutRecordsInput>
  }

  export type ProductRecordErrorCreateWithoutRecordInput = {
    id?: string
    errorId: string
    errorCode: $Enums.ScrapingErrorCode
    field: $Enums.ProductRecordDataField
    message: string
  }

  export type ProductRecordErrorUncheckedCreateWithoutRecordInput = {
    id?: string
    errorId: string
    errorCode: $Enums.ScrapingErrorCode
    field: $Enums.ProductRecordDataField
    message: string
  }

  export type ProductRecordErrorCreateOrConnectWithoutRecordInput = {
    where: ProductRecordErrorWhereUniqueInput
    create: XOR<ProductRecordErrorCreateWithoutRecordInput, ProductRecordErrorUncheckedCreateWithoutRecordInput>
  }

  export type ProductRecordErrorCreateManyRecordInputEnvelope = {
    data: ProductRecordErrorCreateManyRecordInput | ProductRecordErrorCreateManyRecordInput[]
    skipDuplicates?: boolean
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
    createdNotificationEvents?: NotificationEventUpdateManyWithoutCreatedByNestedInput
    updatedNotificationEvents?: NotificationEventUpdateManyWithoutUpdatedByNestedInput
    notificationEvents?: NotificationEventUpdateManyWithoutUserNestedInput
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
    createdNotificationEvents?: NotificationEventUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedNotificationEvents?: NotificationEventUncheckedUpdateManyWithoutUpdatedByNestedInput
    notificationEvents?: NotificationEventUncheckedUpdateManyWithoutUserNestedInput
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
    createdNotificationEvents?: NotificationEventUpdateManyWithoutCreatedByNestedInput
    updatedNotificationEvents?: NotificationEventUpdateManyWithoutUpdatedByNestedInput
    notificationEvents?: NotificationEventUpdateManyWithoutUserNestedInput
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
    createdNotificationEvents?: NotificationEventUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedNotificationEvents?: NotificationEventUncheckedUpdateManyWithoutUpdatedByNestedInput
    notificationEvents?: NotificationEventUncheckedUpdateManyWithoutUserNestedInput
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
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    imageSrc?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    statusRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    priceRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    subCategories?: ProductUpdatesubCategoriesInput | $Enums.ProductSubCategory[]
    createdBy?: UserUpdateOneRequiredWithoutCreatedProductsNestedInput
    updatedBy?: UserUpdateOneRequiredWithoutUpdatedProductsNestedInput
    notificationEvents?: NotificationEventUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    imageSrc?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    statusRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    priceRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    subCategories?: ProductUpdatesubCategoriesInput | $Enums.ProductSubCategory[]
    notificationEvents?: NotificationEventUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductRecordErrorUpsertWithWhereUniqueWithoutRecordInput = {
    where: ProductRecordErrorWhereUniqueInput
    update: XOR<ProductRecordErrorUpdateWithoutRecordInput, ProductRecordErrorUncheckedUpdateWithoutRecordInput>
    create: XOR<ProductRecordErrorCreateWithoutRecordInput, ProductRecordErrorUncheckedCreateWithoutRecordInput>
  }

  export type ProductRecordErrorUpdateWithWhereUniqueWithoutRecordInput = {
    where: ProductRecordErrorWhereUniqueInput
    data: XOR<ProductRecordErrorUpdateWithoutRecordInput, ProductRecordErrorUncheckedUpdateWithoutRecordInput>
  }

  export type ProductRecordErrorUpdateManyWithWhereWithoutRecordInput = {
    where: ProductRecordErrorScalarWhereInput
    data: XOR<ProductRecordErrorUpdateManyMutationInput, ProductRecordErrorUncheckedUpdateManyWithoutRecordInput>
  }

  export type ProductRecordErrorScalarWhereInput = {
    AND?: ProductRecordErrorScalarWhereInput | ProductRecordErrorScalarWhereInput[]
    OR?: ProductRecordErrorScalarWhereInput[]
    NOT?: ProductRecordErrorScalarWhereInput | ProductRecordErrorScalarWhereInput[]
    id?: UuidFilter<"ProductRecordError"> | string
    errorId?: UuidFilter<"ProductRecordError"> | string
    errorCode?: EnumScrapingErrorCodeFilter<"ProductRecordError"> | $Enums.ScrapingErrorCode
    recordId?: UuidFilter<"ProductRecordError"> | string
    field?: EnumProductRecordDataFieldFilter<"ProductRecordError"> | $Enums.ProductRecordDataField
    message?: StringFilter<"ProductRecordError"> | string
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
    createdNotificationEvents?: NotificationEventCreateNestedManyWithoutCreatedByInput
    updatedNotificationEvents?: NotificationEventCreateNestedManyWithoutUpdatedByInput
    notificationEvents?: NotificationEventCreateNestedManyWithoutUserInput
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
    createdNotificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutCreatedByInput
    updatedNotificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutUpdatedByInput
    notificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutUserInput
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
    createdNotificationEvents?: NotificationEventCreateNestedManyWithoutCreatedByInput
    updatedNotificationEvents?: NotificationEventCreateNestedManyWithoutUpdatedByInput
    notificationEvents?: NotificationEventCreateNestedManyWithoutUserInput
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
    createdNotificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutCreatedByInput
    updatedNotificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutUpdatedByInput
    notificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUpdatedProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedProductsInput, UserUncheckedCreateWithoutUpdatedProductsInput>
  }

  export type ProductRecordCreateWithoutProductInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timestamp?: Date | string
    price?: number | null
    rawPrice?: string | null
    status?: $Enums.ProductStatus | null
    wasManuallyCreated?: boolean
    manuallyChangedFields?: ProductRecordCreatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
    createdBy: UserCreateNestedOneWithoutCreatedProductRecordsInput
    updatedBy: UserCreateNestedOneWithoutUpdatedProductRecordsInput
    errors?: ProductRecordErrorCreateNestedManyWithoutRecordInput
  }

  export type ProductRecordUncheckedCreateWithoutProductInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    updatedById: string
    timestamp?: Date | string
    price?: number | null
    rawPrice?: string | null
    status?: $Enums.ProductStatus | null
    wasManuallyCreated?: boolean
    manuallyChangedFields?: ProductRecordCreatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
    errors?: ProductRecordErrorUncheckedCreateNestedManyWithoutRecordInput
  }

  export type ProductRecordCreateOrConnectWithoutProductInput = {
    where: ProductRecordWhereUniqueInput
    create: XOR<ProductRecordCreateWithoutProductInput, ProductRecordUncheckedCreateWithoutProductInput>
  }

  export type ProductRecordCreateManyProductInputEnvelope = {
    data: ProductRecordCreateManyProductInput | ProductRecordCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type NotificationEventCreateWithoutProductInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contentType: $Enums.NotificationEventContentType
    createdBy: UserCreateNestedOneWithoutCreatedNotificationEventsInput
    updatedBy: UserCreateNestedOneWithoutUpdatedNotificationEventsInput
    user: UserCreateNestedOneWithoutNotificationEventsInput
    delegate_aux_priceChangeEventC?: PriceChangeEventCCreateNestedOneWithoutDelegate_aux_notificationEventInput
    delegate_aux_statusChangeEvent?: StatusChangeEventCreateNestedOneWithoutDelegate_aux_notificationEventInput
  }

  export type NotificationEventUncheckedCreateWithoutProductInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    updatedById: string
    userId: string
    contentType: $Enums.NotificationEventContentType
    delegate_aux_priceChangeEventC?: PriceChangeEventCUncheckedCreateNestedOneWithoutDelegate_aux_notificationEventInput
    delegate_aux_statusChangeEvent?: StatusChangeEventUncheckedCreateNestedOneWithoutDelegate_aux_notificationEventInput
  }

  export type NotificationEventCreateOrConnectWithoutProductInput = {
    where: NotificationEventWhereUniqueInput
    create: XOR<NotificationEventCreateWithoutProductInput, NotificationEventUncheckedCreateWithoutProductInput>
  }

  export type NotificationEventCreateManyProductInputEnvelope = {
    data: NotificationEventCreateManyProductInput | NotificationEventCreateManyProductInput[]
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
    createdNotificationEvents?: NotificationEventUpdateManyWithoutCreatedByNestedInput
    updatedNotificationEvents?: NotificationEventUpdateManyWithoutUpdatedByNestedInput
    notificationEvents?: NotificationEventUpdateManyWithoutUserNestedInput
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
    createdNotificationEvents?: NotificationEventUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedNotificationEvents?: NotificationEventUncheckedUpdateManyWithoutUpdatedByNestedInput
    notificationEvents?: NotificationEventUncheckedUpdateManyWithoutUserNestedInput
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
    createdNotificationEvents?: NotificationEventUpdateManyWithoutCreatedByNestedInput
    updatedNotificationEvents?: NotificationEventUpdateManyWithoutUpdatedByNestedInput
    notificationEvents?: NotificationEventUpdateManyWithoutUserNestedInput
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
    createdNotificationEvents?: NotificationEventUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedNotificationEvents?: NotificationEventUncheckedUpdateManyWithoutUpdatedByNestedInput
    notificationEvents?: NotificationEventUncheckedUpdateManyWithoutUserNestedInput
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

  export type NotificationEventUpsertWithWhereUniqueWithoutProductInput = {
    where: NotificationEventWhereUniqueInput
    update: XOR<NotificationEventUpdateWithoutProductInput, NotificationEventUncheckedUpdateWithoutProductInput>
    create: XOR<NotificationEventCreateWithoutProductInput, NotificationEventUncheckedCreateWithoutProductInput>
  }

  export type NotificationEventUpdateWithWhereUniqueWithoutProductInput = {
    where: NotificationEventWhereUniqueInput
    data: XOR<NotificationEventUpdateWithoutProductInput, NotificationEventUncheckedUpdateWithoutProductInput>
  }

  export type NotificationEventUpdateManyWithWhereWithoutProductInput = {
    where: NotificationEventScalarWhereInput
    data: XOR<NotificationEventUpdateManyMutationInput, NotificationEventUncheckedUpdateManyWithoutProductInput>
  }

  export type UserCreateWithoutCreatedNotificationEventsInput = {
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
    updatedNotificationEvents?: NotificationEventCreateNestedManyWithoutUpdatedByInput
    notificationEvents?: NotificationEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedNotificationEventsInput = {
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
    updatedNotificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutUpdatedByInput
    notificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedNotificationEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedNotificationEventsInput, UserUncheckedCreateWithoutCreatedNotificationEventsInput>
  }

  export type UserCreateWithoutUpdatedNotificationEventsInput = {
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
    createdNotificationEvents?: NotificationEventCreateNestedManyWithoutCreatedByInput
    notificationEvents?: NotificationEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUpdatedNotificationEventsInput = {
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
    createdNotificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutCreatedByInput
    notificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUpdatedNotificationEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedNotificationEventsInput, UserUncheckedCreateWithoutUpdatedNotificationEventsInput>
  }

  export type ProductCreateWithoutNotificationEventsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    slug: string
    code?: string | null
    imageSrc?: string | null
    status?: $Enums.ProductStatus | null
    statusRecordedAt?: Date | string | null
    price?: number | null
    priceRecordedAt?: Date | string | null
    category: $Enums.ProductCategory
    subCategories?: ProductCreatesubCategoriesInput | $Enums.ProductSubCategory[]
    createdBy: UserCreateNestedOneWithoutCreatedProductsInput
    updatedBy: UserCreateNestedOneWithoutUpdatedProductsInput
    records?: ProductRecordCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutNotificationEventsInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    updatedById: string
    name?: string | null
    slug: string
    code?: string | null
    imageSrc?: string | null
    status?: $Enums.ProductStatus | null
    statusRecordedAt?: Date | string | null
    price?: number | null
    priceRecordedAt?: Date | string | null
    category: $Enums.ProductCategory
    subCategories?: ProductCreatesubCategoriesInput | $Enums.ProductSubCategory[]
    records?: ProductRecordUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutNotificationEventsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutNotificationEventsInput, ProductUncheckedCreateWithoutNotificationEventsInput>
  }

  export type UserCreateWithoutNotificationEventsInput = {
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
    createdNotificationEvents?: NotificationEventCreateNestedManyWithoutCreatedByInput
    updatedNotificationEvents?: NotificationEventCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutNotificationEventsInput = {
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
    createdNotificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutCreatedByInput
    updatedNotificationEvents?: NotificationEventUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutNotificationEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationEventsInput, UserUncheckedCreateWithoutNotificationEventsInput>
  }

  export type PriceChangeEventCCreateWithoutDelegate_aux_notificationEventInput = {
    eventTypes?: PriceChangeEventCCreateeventTypesInput | $Enums.PriceChangeEventType[]
  }

  export type PriceChangeEventCUncheckedCreateWithoutDelegate_aux_notificationEventInput = {
    eventTypes?: PriceChangeEventCCreateeventTypesInput | $Enums.PriceChangeEventType[]
  }

  export type PriceChangeEventCCreateOrConnectWithoutDelegate_aux_notificationEventInput = {
    where: PriceChangeEventCWhereUniqueInput
    create: XOR<PriceChangeEventCCreateWithoutDelegate_aux_notificationEventInput, PriceChangeEventCUncheckedCreateWithoutDelegate_aux_notificationEventInput>
  }

  export type StatusChangeEventCreateWithoutDelegate_aux_notificationEventInput = {
    eventTypes?: StatusChangeEventCreateeventTypesInput | $Enums.ProductStatus[]
  }

  export type StatusChangeEventUncheckedCreateWithoutDelegate_aux_notificationEventInput = {
    eventTypes?: StatusChangeEventCreateeventTypesInput | $Enums.ProductStatus[]
  }

  export type StatusChangeEventCreateOrConnectWithoutDelegate_aux_notificationEventInput = {
    where: StatusChangeEventWhereUniqueInput
    create: XOR<StatusChangeEventCreateWithoutDelegate_aux_notificationEventInput, StatusChangeEventUncheckedCreateWithoutDelegate_aux_notificationEventInput>
  }

  export type UserUpsertWithoutCreatedNotificationEventsInput = {
    update: XOR<UserUpdateWithoutCreatedNotificationEventsInput, UserUncheckedUpdateWithoutCreatedNotificationEventsInput>
    create: XOR<UserCreateWithoutCreatedNotificationEventsInput, UserUncheckedCreateWithoutCreatedNotificationEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedNotificationEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedNotificationEventsInput, UserUncheckedUpdateWithoutCreatedNotificationEventsInput>
  }

  export type UserUpdateWithoutCreatedNotificationEventsInput = {
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
    updatedNotificationEvents?: NotificationEventUpdateManyWithoutUpdatedByNestedInput
    notificationEvents?: NotificationEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedNotificationEventsInput = {
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
    updatedNotificationEvents?: NotificationEventUncheckedUpdateManyWithoutUpdatedByNestedInput
    notificationEvents?: NotificationEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutUpdatedNotificationEventsInput = {
    update: XOR<UserUpdateWithoutUpdatedNotificationEventsInput, UserUncheckedUpdateWithoutUpdatedNotificationEventsInput>
    create: XOR<UserCreateWithoutUpdatedNotificationEventsInput, UserUncheckedCreateWithoutUpdatedNotificationEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatedNotificationEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatedNotificationEventsInput, UserUncheckedUpdateWithoutUpdatedNotificationEventsInput>
  }

  export type UserUpdateWithoutUpdatedNotificationEventsInput = {
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
    createdNotificationEvents?: NotificationEventUpdateManyWithoutCreatedByNestedInput
    notificationEvents?: NotificationEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedNotificationEventsInput = {
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
    createdNotificationEvents?: NotificationEventUncheckedUpdateManyWithoutCreatedByNestedInput
    notificationEvents?: NotificationEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithoutNotificationEventsInput = {
    update: XOR<ProductUpdateWithoutNotificationEventsInput, ProductUncheckedUpdateWithoutNotificationEventsInput>
    create: XOR<ProductCreateWithoutNotificationEventsInput, ProductUncheckedCreateWithoutNotificationEventsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutNotificationEventsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutNotificationEventsInput, ProductUncheckedUpdateWithoutNotificationEventsInput>
  }

  export type ProductUpdateWithoutNotificationEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    imageSrc?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    statusRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    priceRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    subCategories?: ProductUpdatesubCategoriesInput | $Enums.ProductSubCategory[]
    createdBy?: UserUpdateOneRequiredWithoutCreatedProductsNestedInput
    updatedBy?: UserUpdateOneRequiredWithoutUpdatedProductsNestedInput
    records?: ProductRecordUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutNotificationEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    imageSrc?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    statusRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    priceRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    subCategories?: ProductUpdatesubCategoriesInput | $Enums.ProductSubCategory[]
    records?: ProductRecordUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserUpsertWithoutNotificationEventsInput = {
    update: XOR<UserUpdateWithoutNotificationEventsInput, UserUncheckedUpdateWithoutNotificationEventsInput>
    create: XOR<UserCreateWithoutNotificationEventsInput, UserUncheckedCreateWithoutNotificationEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationEventsInput, UserUncheckedUpdateWithoutNotificationEventsInput>
  }

  export type UserUpdateWithoutNotificationEventsInput = {
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
    createdNotificationEvents?: NotificationEventUpdateManyWithoutCreatedByNestedInput
    updatedNotificationEvents?: NotificationEventUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationEventsInput = {
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
    createdNotificationEvents?: NotificationEventUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedNotificationEvents?: NotificationEventUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type PriceChangeEventCUpsertWithoutDelegate_aux_notificationEventInput = {
    update: XOR<PriceChangeEventCUpdateWithoutDelegate_aux_notificationEventInput, PriceChangeEventCUncheckedUpdateWithoutDelegate_aux_notificationEventInput>
    create: XOR<PriceChangeEventCCreateWithoutDelegate_aux_notificationEventInput, PriceChangeEventCUncheckedCreateWithoutDelegate_aux_notificationEventInput>
    where?: PriceChangeEventCWhereInput
  }

  export type PriceChangeEventCUpdateToOneWithWhereWithoutDelegate_aux_notificationEventInput = {
    where?: PriceChangeEventCWhereInput
    data: XOR<PriceChangeEventCUpdateWithoutDelegate_aux_notificationEventInput, PriceChangeEventCUncheckedUpdateWithoutDelegate_aux_notificationEventInput>
  }

  export type PriceChangeEventCUpdateWithoutDelegate_aux_notificationEventInput = {
    eventTypes?: PriceChangeEventCUpdateeventTypesInput | $Enums.PriceChangeEventType[]
  }

  export type PriceChangeEventCUncheckedUpdateWithoutDelegate_aux_notificationEventInput = {
    eventTypes?: PriceChangeEventCUpdateeventTypesInput | $Enums.PriceChangeEventType[]
  }

  export type StatusChangeEventUpsertWithoutDelegate_aux_notificationEventInput = {
    update: XOR<StatusChangeEventUpdateWithoutDelegate_aux_notificationEventInput, StatusChangeEventUncheckedUpdateWithoutDelegate_aux_notificationEventInput>
    create: XOR<StatusChangeEventCreateWithoutDelegate_aux_notificationEventInput, StatusChangeEventUncheckedCreateWithoutDelegate_aux_notificationEventInput>
    where?: StatusChangeEventWhereInput
  }

  export type StatusChangeEventUpdateToOneWithWhereWithoutDelegate_aux_notificationEventInput = {
    where?: StatusChangeEventWhereInput
    data: XOR<StatusChangeEventUpdateWithoutDelegate_aux_notificationEventInput, StatusChangeEventUncheckedUpdateWithoutDelegate_aux_notificationEventInput>
  }

  export type StatusChangeEventUpdateWithoutDelegate_aux_notificationEventInput = {
    eventTypes?: StatusChangeEventUpdateeventTypesInput | $Enums.ProductStatus[]
  }

  export type StatusChangeEventUncheckedUpdateWithoutDelegate_aux_notificationEventInput = {
    eventTypes?: StatusChangeEventUpdateeventTypesInput | $Enums.ProductStatus[]
  }

  export type NotificationEventCreateWithoutDelegate_aux_priceChangeEventCInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contentType: $Enums.NotificationEventContentType
    createdBy: UserCreateNestedOneWithoutCreatedNotificationEventsInput
    updatedBy: UserCreateNestedOneWithoutUpdatedNotificationEventsInput
    product: ProductCreateNestedOneWithoutNotificationEventsInput
    user: UserCreateNestedOneWithoutNotificationEventsInput
    delegate_aux_statusChangeEvent?: StatusChangeEventCreateNestedOneWithoutDelegate_aux_notificationEventInput
  }

  export type NotificationEventUncheckedCreateWithoutDelegate_aux_priceChangeEventCInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    updatedById: string
    productId: string
    userId: string
    contentType: $Enums.NotificationEventContentType
    delegate_aux_statusChangeEvent?: StatusChangeEventUncheckedCreateNestedOneWithoutDelegate_aux_notificationEventInput
  }

  export type NotificationEventCreateOrConnectWithoutDelegate_aux_priceChangeEventCInput = {
    where: NotificationEventWhereUniqueInput
    create: XOR<NotificationEventCreateWithoutDelegate_aux_priceChangeEventCInput, NotificationEventUncheckedCreateWithoutDelegate_aux_priceChangeEventCInput>
  }

  export type NotificationEventUpsertWithoutDelegate_aux_priceChangeEventCInput = {
    update: XOR<NotificationEventUpdateWithoutDelegate_aux_priceChangeEventCInput, NotificationEventUncheckedUpdateWithoutDelegate_aux_priceChangeEventCInput>
    create: XOR<NotificationEventCreateWithoutDelegate_aux_priceChangeEventCInput, NotificationEventUncheckedCreateWithoutDelegate_aux_priceChangeEventCInput>
    where?: NotificationEventWhereInput
  }

  export type NotificationEventUpdateToOneWithWhereWithoutDelegate_aux_priceChangeEventCInput = {
    where?: NotificationEventWhereInput
    data: XOR<NotificationEventUpdateWithoutDelegate_aux_priceChangeEventCInput, NotificationEventUncheckedUpdateWithoutDelegate_aux_priceChangeEventCInput>
  }

  export type NotificationEventUpdateWithoutDelegate_aux_priceChangeEventCInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentType?: EnumNotificationEventContentTypeFieldUpdateOperationsInput | $Enums.NotificationEventContentType
    createdBy?: UserUpdateOneRequiredWithoutCreatedNotificationEventsNestedInput
    updatedBy?: UserUpdateOneRequiredWithoutUpdatedNotificationEventsNestedInput
    product?: ProductUpdateOneRequiredWithoutNotificationEventsNestedInput
    user?: UserUpdateOneRequiredWithoutNotificationEventsNestedInput
    delegate_aux_statusChangeEvent?: StatusChangeEventUpdateOneWithoutDelegate_aux_notificationEventNestedInput
  }

  export type NotificationEventUncheckedUpdateWithoutDelegate_aux_priceChangeEventCInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentType?: EnumNotificationEventContentTypeFieldUpdateOperationsInput | $Enums.NotificationEventContentType
    delegate_aux_statusChangeEvent?: StatusChangeEventUncheckedUpdateOneWithoutDelegate_aux_notificationEventNestedInput
  }

  export type NotificationEventCreateWithoutDelegate_aux_statusChangeEventInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contentType: $Enums.NotificationEventContentType
    createdBy: UserCreateNestedOneWithoutCreatedNotificationEventsInput
    updatedBy: UserCreateNestedOneWithoutUpdatedNotificationEventsInput
    product: ProductCreateNestedOneWithoutNotificationEventsInput
    user: UserCreateNestedOneWithoutNotificationEventsInput
    delegate_aux_priceChangeEventC?: PriceChangeEventCCreateNestedOneWithoutDelegate_aux_notificationEventInput
  }

  export type NotificationEventUncheckedCreateWithoutDelegate_aux_statusChangeEventInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    updatedById: string
    productId: string
    userId: string
    contentType: $Enums.NotificationEventContentType
    delegate_aux_priceChangeEventC?: PriceChangeEventCUncheckedCreateNestedOneWithoutDelegate_aux_notificationEventInput
  }

  export type NotificationEventCreateOrConnectWithoutDelegate_aux_statusChangeEventInput = {
    where: NotificationEventWhereUniqueInput
    create: XOR<NotificationEventCreateWithoutDelegate_aux_statusChangeEventInput, NotificationEventUncheckedCreateWithoutDelegate_aux_statusChangeEventInput>
  }

  export type NotificationEventUpsertWithoutDelegate_aux_statusChangeEventInput = {
    update: XOR<NotificationEventUpdateWithoutDelegate_aux_statusChangeEventInput, NotificationEventUncheckedUpdateWithoutDelegate_aux_statusChangeEventInput>
    create: XOR<NotificationEventCreateWithoutDelegate_aux_statusChangeEventInput, NotificationEventUncheckedCreateWithoutDelegate_aux_statusChangeEventInput>
    where?: NotificationEventWhereInput
  }

  export type NotificationEventUpdateToOneWithWhereWithoutDelegate_aux_statusChangeEventInput = {
    where?: NotificationEventWhereInput
    data: XOR<NotificationEventUpdateWithoutDelegate_aux_statusChangeEventInput, NotificationEventUncheckedUpdateWithoutDelegate_aux_statusChangeEventInput>
  }

  export type NotificationEventUpdateWithoutDelegate_aux_statusChangeEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentType?: EnumNotificationEventContentTypeFieldUpdateOperationsInput | $Enums.NotificationEventContentType
    createdBy?: UserUpdateOneRequiredWithoutCreatedNotificationEventsNestedInput
    updatedBy?: UserUpdateOneRequiredWithoutUpdatedNotificationEventsNestedInput
    product?: ProductUpdateOneRequiredWithoutNotificationEventsNestedInput
    user?: UserUpdateOneRequiredWithoutNotificationEventsNestedInput
    delegate_aux_priceChangeEventC?: PriceChangeEventCUpdateOneWithoutDelegate_aux_notificationEventNestedInput
  }

  export type NotificationEventUncheckedUpdateWithoutDelegate_aux_statusChangeEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentType?: EnumNotificationEventContentTypeFieldUpdateOperationsInput | $Enums.NotificationEventContentType
    delegate_aux_priceChangeEventC?: PriceChangeEventCUncheckedUpdateOneWithoutDelegate_aux_notificationEventNestedInput
  }

  export type ProductCreateManyCreatedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedById: string
    name?: string | null
    slug: string
    code?: string | null
    imageSrc?: string | null
    status?: $Enums.ProductStatus | null
    statusRecordedAt?: Date | string | null
    price?: number | null
    priceRecordedAt?: Date | string | null
    category: $Enums.ProductCategory
    subCategories?: ProductCreatesubCategoriesInput | $Enums.ProductSubCategory[]
  }

  export type ProductCreateManyUpdatedByInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    name?: string | null
    slug: string
    code?: string | null
    imageSrc?: string | null
    status?: $Enums.ProductStatus | null
    statusRecordedAt?: Date | string | null
    price?: number | null
    priceRecordedAt?: Date | string | null
    category: $Enums.ProductCategory
    subCategories?: ProductCreatesubCategoriesInput | $Enums.ProductSubCategory[]
  }

  export type ProductRecordCreateManyCreatedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedById: string
    timestamp?: Date | string
    productId: string
    price?: number | null
    rawPrice?: string | null
    status?: $Enums.ProductStatus | null
    wasManuallyCreated?: boolean
    manuallyChangedFields?: ProductRecordCreatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
  }

  export type ProductRecordCreateManyUpdatedByInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    timestamp?: Date | string
    productId: string
    price?: number | null
    rawPrice?: string | null
    status?: $Enums.ProductStatus | null
    wasManuallyCreated?: boolean
    manuallyChangedFields?: ProductRecordCreatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
  }

  export type NotificationEventCreateManyCreatedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedById: string
    productId: string
    userId: string
    contentType: $Enums.NotificationEventContentType
  }

  export type NotificationEventCreateManyUpdatedByInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    productId: string
    userId: string
    contentType: $Enums.NotificationEventContentType
  }

  export type NotificationEventCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    updatedById: string
    productId: string
    contentType: $Enums.NotificationEventContentType
  }

  export type ProductUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    imageSrc?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    statusRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    priceRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    subCategories?: ProductUpdatesubCategoriesInput | $Enums.ProductSubCategory[]
    updatedBy?: UserUpdateOneRequiredWithoutUpdatedProductsNestedInput
    records?: ProductRecordUpdateManyWithoutProductNestedInput
    notificationEvents?: NotificationEventUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    imageSrc?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    statusRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    priceRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    subCategories?: ProductUpdatesubCategoriesInput | $Enums.ProductSubCategory[]
    records?: ProductRecordUncheckedUpdateManyWithoutProductNestedInput
    notificationEvents?: NotificationEventUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    imageSrc?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    statusRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    priceRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    subCategories?: ProductUpdatesubCategoriesInput | $Enums.ProductSubCategory[]
  }

  export type ProductUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    imageSrc?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    statusRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    priceRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    subCategories?: ProductUpdatesubCategoriesInput | $Enums.ProductSubCategory[]
    createdBy?: UserUpdateOneRequiredWithoutCreatedProductsNestedInput
    records?: ProductRecordUpdateManyWithoutProductNestedInput
    notificationEvents?: NotificationEventUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    imageSrc?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    statusRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    priceRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    subCategories?: ProductUpdatesubCategoriesInput | $Enums.ProductSubCategory[]
    records?: ProductRecordUncheckedUpdateManyWithoutProductNestedInput
    notificationEvents?: NotificationEventUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    imageSrc?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    statusRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    priceRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    subCategories?: ProductUpdatesubCategoriesInput | $Enums.ProductSubCategory[]
  }

  export type ProductRecordUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    rawPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    wasManuallyCreated?: BoolFieldUpdateOperationsInput | boolean
    manuallyChangedFields?: ProductRecordUpdatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
    updatedBy?: UserUpdateOneRequiredWithoutUpdatedProductRecordsNestedInput
    product?: ProductUpdateOneRequiredWithoutRecordsNestedInput
    errors?: ProductRecordErrorUpdateManyWithoutRecordNestedInput
  }

  export type ProductRecordUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    rawPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    wasManuallyCreated?: BoolFieldUpdateOperationsInput | boolean
    manuallyChangedFields?: ProductRecordUpdatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
    errors?: ProductRecordErrorUncheckedUpdateManyWithoutRecordNestedInput
  }

  export type ProductRecordUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    rawPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    wasManuallyCreated?: BoolFieldUpdateOperationsInput | boolean
    manuallyChangedFields?: ProductRecordUpdatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
  }

  export type ProductRecordUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    rawPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    wasManuallyCreated?: BoolFieldUpdateOperationsInput | boolean
    manuallyChangedFields?: ProductRecordUpdatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
    createdBy?: UserUpdateOneRequiredWithoutCreatedProductRecordsNestedInput
    product?: ProductUpdateOneRequiredWithoutRecordsNestedInput
    errors?: ProductRecordErrorUpdateManyWithoutRecordNestedInput
  }

  export type ProductRecordUncheckedUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    rawPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    wasManuallyCreated?: BoolFieldUpdateOperationsInput | boolean
    manuallyChangedFields?: ProductRecordUpdatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
    errors?: ProductRecordErrorUncheckedUpdateManyWithoutRecordNestedInput
  }

  export type ProductRecordUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    rawPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    wasManuallyCreated?: BoolFieldUpdateOperationsInput | boolean
    manuallyChangedFields?: ProductRecordUpdatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
  }

  export type NotificationEventUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentType?: EnumNotificationEventContentTypeFieldUpdateOperationsInput | $Enums.NotificationEventContentType
    updatedBy?: UserUpdateOneRequiredWithoutUpdatedNotificationEventsNestedInput
    product?: ProductUpdateOneRequiredWithoutNotificationEventsNestedInput
    user?: UserUpdateOneRequiredWithoutNotificationEventsNestedInput
    delegate_aux_priceChangeEventC?: PriceChangeEventCUpdateOneWithoutDelegate_aux_notificationEventNestedInput
    delegate_aux_statusChangeEvent?: StatusChangeEventUpdateOneWithoutDelegate_aux_notificationEventNestedInput
  }

  export type NotificationEventUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentType?: EnumNotificationEventContentTypeFieldUpdateOperationsInput | $Enums.NotificationEventContentType
    delegate_aux_priceChangeEventC?: PriceChangeEventCUncheckedUpdateOneWithoutDelegate_aux_notificationEventNestedInput
    delegate_aux_statusChangeEvent?: StatusChangeEventUncheckedUpdateOneWithoutDelegate_aux_notificationEventNestedInput
  }

  export type NotificationEventUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentType?: EnumNotificationEventContentTypeFieldUpdateOperationsInput | $Enums.NotificationEventContentType
  }

  export type NotificationEventUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentType?: EnumNotificationEventContentTypeFieldUpdateOperationsInput | $Enums.NotificationEventContentType
    createdBy?: UserUpdateOneRequiredWithoutCreatedNotificationEventsNestedInput
    product?: ProductUpdateOneRequiredWithoutNotificationEventsNestedInput
    user?: UserUpdateOneRequiredWithoutNotificationEventsNestedInput
    delegate_aux_priceChangeEventC?: PriceChangeEventCUpdateOneWithoutDelegate_aux_notificationEventNestedInput
    delegate_aux_statusChangeEvent?: StatusChangeEventUpdateOneWithoutDelegate_aux_notificationEventNestedInput
  }

  export type NotificationEventUncheckedUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentType?: EnumNotificationEventContentTypeFieldUpdateOperationsInput | $Enums.NotificationEventContentType
    delegate_aux_priceChangeEventC?: PriceChangeEventCUncheckedUpdateOneWithoutDelegate_aux_notificationEventNestedInput
    delegate_aux_statusChangeEvent?: StatusChangeEventUncheckedUpdateOneWithoutDelegate_aux_notificationEventNestedInput
  }

  export type NotificationEventUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentType?: EnumNotificationEventContentTypeFieldUpdateOperationsInput | $Enums.NotificationEventContentType
  }

  export type NotificationEventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentType?: EnumNotificationEventContentTypeFieldUpdateOperationsInput | $Enums.NotificationEventContentType
    createdBy?: UserUpdateOneRequiredWithoutCreatedNotificationEventsNestedInput
    updatedBy?: UserUpdateOneRequiredWithoutUpdatedNotificationEventsNestedInput
    product?: ProductUpdateOneRequiredWithoutNotificationEventsNestedInput
    delegate_aux_priceChangeEventC?: PriceChangeEventCUpdateOneWithoutDelegate_aux_notificationEventNestedInput
    delegate_aux_statusChangeEvent?: StatusChangeEventUpdateOneWithoutDelegate_aux_notificationEventNestedInput
  }

  export type NotificationEventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    contentType?: EnumNotificationEventContentTypeFieldUpdateOperationsInput | $Enums.NotificationEventContentType
    delegate_aux_priceChangeEventC?: PriceChangeEventCUncheckedUpdateOneWithoutDelegate_aux_notificationEventNestedInput
    delegate_aux_statusChangeEvent?: StatusChangeEventUncheckedUpdateOneWithoutDelegate_aux_notificationEventNestedInput
  }

  export type NotificationEventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    contentType?: EnumNotificationEventContentTypeFieldUpdateOperationsInput | $Enums.NotificationEventContentType
  }

  export type ProductRecordErrorCreateManyRecordInput = {
    id?: string
    errorId: string
    errorCode: $Enums.ScrapingErrorCode
    field: $Enums.ProductRecordDataField
    message: string
  }

  export type ProductRecordErrorUpdateWithoutRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorId?: StringFieldUpdateOperationsInput | string
    errorCode?: EnumScrapingErrorCodeFieldUpdateOperationsInput | $Enums.ScrapingErrorCode
    field?: EnumProductRecordDataFieldFieldUpdateOperationsInput | $Enums.ProductRecordDataField
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ProductRecordErrorUncheckedUpdateWithoutRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorId?: StringFieldUpdateOperationsInput | string
    errorCode?: EnumScrapingErrorCodeFieldUpdateOperationsInput | $Enums.ScrapingErrorCode
    field?: EnumProductRecordDataFieldFieldUpdateOperationsInput | $Enums.ProductRecordDataField
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ProductRecordErrorUncheckedUpdateManyWithoutRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorId?: StringFieldUpdateOperationsInput | string
    errorCode?: EnumScrapingErrorCodeFieldUpdateOperationsInput | $Enums.ScrapingErrorCode
    field?: EnumProductRecordDataFieldFieldUpdateOperationsInput | $Enums.ProductRecordDataField
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ProductRecordCreateManyProductInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    updatedById: string
    timestamp?: Date | string
    price?: number | null
    rawPrice?: string | null
    status?: $Enums.ProductStatus | null
    wasManuallyCreated?: boolean
    manuallyChangedFields?: ProductRecordCreatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
  }

  export type NotificationEventCreateManyProductInput = {
    id?: string
    createdAt?: Date | string
    createdById: string
    updatedAt?: Date | string
    updatedById: string
    userId: string
    contentType: $Enums.NotificationEventContentType
  }

  export type ProductRecordUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    rawPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    wasManuallyCreated?: BoolFieldUpdateOperationsInput | boolean
    manuallyChangedFields?: ProductRecordUpdatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
    createdBy?: UserUpdateOneRequiredWithoutCreatedProductRecordsNestedInput
    updatedBy?: UserUpdateOneRequiredWithoutUpdatedProductRecordsNestedInput
    errors?: ProductRecordErrorUpdateManyWithoutRecordNestedInput
  }

  export type ProductRecordUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    rawPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    wasManuallyCreated?: BoolFieldUpdateOperationsInput | boolean
    manuallyChangedFields?: ProductRecordUpdatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
    errors?: ProductRecordErrorUncheckedUpdateManyWithoutRecordNestedInput
  }

  export type ProductRecordUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    rawPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus | null
    wasManuallyCreated?: BoolFieldUpdateOperationsInput | boolean
    manuallyChangedFields?: ProductRecordUpdatemanuallyChangedFieldsInput | $Enums.ProductRecordDataField[]
  }

  export type NotificationEventUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentType?: EnumNotificationEventContentTypeFieldUpdateOperationsInput | $Enums.NotificationEventContentType
    createdBy?: UserUpdateOneRequiredWithoutCreatedNotificationEventsNestedInput
    updatedBy?: UserUpdateOneRequiredWithoutUpdatedNotificationEventsNestedInput
    user?: UserUpdateOneRequiredWithoutNotificationEventsNestedInput
    delegate_aux_priceChangeEventC?: PriceChangeEventCUpdateOneWithoutDelegate_aux_notificationEventNestedInput
    delegate_aux_statusChangeEvent?: StatusChangeEventUpdateOneWithoutDelegate_aux_notificationEventNestedInput
  }

  export type NotificationEventUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentType?: EnumNotificationEventContentTypeFieldUpdateOperationsInput | $Enums.NotificationEventContentType
    delegate_aux_priceChangeEventC?: PriceChangeEventCUncheckedUpdateOneWithoutDelegate_aux_notificationEventNestedInput
    delegate_aux_statusChangeEvent?: StatusChangeEventUncheckedUpdateOneWithoutDelegate_aux_notificationEventNestedInput
  }

  export type NotificationEventUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentType?: EnumNotificationEventContentTypeFieldUpdateOperationsInput | $Enums.NotificationEventContentType
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductRecordCountOutputTypeDefaultArgs instead
     */
    export type ProductRecordCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductRecordCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HttpNetworkErrorDataDefaultArgs instead
     */
    export type HttpNetworkErrorDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HttpNetworkErrorDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HttpSerializationErrorDataDefaultArgs instead
     */
    export type HttpSerializationErrorDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HttpSerializationErrorDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HttpClientErrorDataDefaultArgs instead
     */
    export type HttpClientErrorDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HttpClientErrorDataDefaultArgs<ExtArgs>
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
     * @deprecated Use ProductRecordErrorDefaultArgs instead
     */
    export type ProductRecordErrorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductRecordErrorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductRecordDefaultArgs instead
     */
    export type ProductRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationEventDefaultArgs instead
     */
    export type NotificationEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationEventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PriceChangeEventCDefaultArgs instead
     */
    export type PriceChangeEventCArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PriceChangeEventCDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StatusChangeEventDefaultArgs instead
     */
    export type StatusChangeEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StatusChangeEventDefaultArgs<ExtArgs>

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