
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model DepositOrder
 * 
 */
export type DepositOrder = $Result.DefaultSelection<Prisma.$DepositOrderPayload>
/**
 * Model ServiceCode
 * 
 */
export type ServiceCode = $Result.DefaultSelection<Prisma.$ServiceCodePayload>
/**
 * Model Round
 * 
 */
export type Round = $Result.DefaultSelection<Prisma.$RoundPayload>
/**
 * Model RoundEntry
 * 
 */
export type RoundEntry = $Result.DefaultSelection<Prisma.$RoundEntryPayload>
/**
 * Model WithdrawOrder
 * 
 */
export type WithdrawOrder = $Result.DefaultSelection<Prisma.$WithdrawOrderPayload>
/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Chain: {
  BASE: 'BASE'
};

export type Chain = (typeof Chain)[keyof typeof Chain]


export const Stablecoin: {
  USDC: 'USDC',
  USDT: 'USDT'
};

export type Stablecoin = (typeof Stablecoin)[keyof typeof Stablecoin]


export const TxStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  FAILED: 'FAILED'
};

export type TxStatus = (typeof TxStatus)[keyof typeof TxStatus]


export const WithdrawStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  PAID: 'PAID'
};

export type WithdrawStatus = (typeof WithdrawStatus)[keyof typeof WithdrawStatus]


export const RoundStatus: {
  OPEN: 'OPEN',
  SETTLED: 'SETTLED'
};

export type RoundStatus = (typeof RoundStatus)[keyof typeof RoundStatus]


export const Role: {
  ADMIN: 'ADMIN',
  REVIEWER: 'REVIEWER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Chain = $Enums.Chain

export const Chain: typeof $Enums.Chain

export type Stablecoin = $Enums.Stablecoin

export const Stablecoin: typeof $Enums.Stablecoin

export type TxStatus = $Enums.TxStatus

export const TxStatus: typeof $Enums.TxStatus

export type WithdrawStatus = $Enums.WithdrawStatus

export const WithdrawStatus: typeof $Enums.WithdrawStatus

export type RoundStatus = $Enums.RoundStatus

export const RoundStatus: typeof $Enums.RoundStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.depositOrder`: Exposes CRUD operations for the **DepositOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DepositOrders
    * const depositOrders = await prisma.depositOrder.findMany()
    * ```
    */
  get depositOrder(): Prisma.DepositOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceCode`: Exposes CRUD operations for the **ServiceCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceCodes
    * const serviceCodes = await prisma.serviceCode.findMany()
    * ```
    */
  get serviceCode(): Prisma.ServiceCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.round`: Exposes CRUD operations for the **Round** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rounds
    * const rounds = await prisma.round.findMany()
    * ```
    */
  get round(): Prisma.RoundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roundEntry`: Exposes CRUD operations for the **RoundEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoundEntries
    * const roundEntries = await prisma.roundEntry.findMany()
    * ```
    */
  get roundEntry(): Prisma.RoundEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.withdrawOrder`: Exposes CRUD operations for the **WithdrawOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WithdrawOrders
    * const withdrawOrders = await prisma.withdrawOrder.findMany()
    * ```
    */
  get withdrawOrder(): Prisma.WithdrawOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    DepositOrder: 'DepositOrder',
    ServiceCode: 'ServiceCode',
    Round: 'Round',
    RoundEntry: 'RoundEntry',
    WithdrawOrder: 'WithdrawOrder',
    AdminUser: 'AdminUser'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "depositOrder" | "serviceCode" | "round" | "roundEntry" | "withdrawOrder" | "adminUser"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      DepositOrder: {
        payload: Prisma.$DepositOrderPayload<ExtArgs>
        fields: Prisma.DepositOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepositOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepositOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositOrderPayload>
          }
          findFirst: {
            args: Prisma.DepositOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepositOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositOrderPayload>
          }
          findMany: {
            args: Prisma.DepositOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositOrderPayload>[]
          }
          create: {
            args: Prisma.DepositOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositOrderPayload>
          }
          createMany: {
            args: Prisma.DepositOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepositOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositOrderPayload>[]
          }
          delete: {
            args: Prisma.DepositOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositOrderPayload>
          }
          update: {
            args: Prisma.DepositOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositOrderPayload>
          }
          deleteMany: {
            args: Prisma.DepositOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepositOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepositOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositOrderPayload>[]
          }
          upsert: {
            args: Prisma.DepositOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositOrderPayload>
          }
          aggregate: {
            args: Prisma.DepositOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepositOrder>
          }
          groupBy: {
            args: Prisma.DepositOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepositOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepositOrderCountArgs<ExtArgs>
            result: $Utils.Optional<DepositOrderCountAggregateOutputType> | number
          }
        }
      }
      ServiceCode: {
        payload: Prisma.$ServiceCodePayload<ExtArgs>
        fields: Prisma.ServiceCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCodePayload>
          }
          findFirst: {
            args: Prisma.ServiceCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCodePayload>
          }
          findMany: {
            args: Prisma.ServiceCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCodePayload>[]
          }
          create: {
            args: Prisma.ServiceCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCodePayload>
          }
          createMany: {
            args: Prisma.ServiceCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCodePayload>[]
          }
          delete: {
            args: Prisma.ServiceCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCodePayload>
          }
          update: {
            args: Prisma.ServiceCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCodePayload>
          }
          deleteMany: {
            args: Prisma.ServiceCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCodePayload>[]
          }
          upsert: {
            args: Prisma.ServiceCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCodePayload>
          }
          aggregate: {
            args: Prisma.ServiceCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceCode>
          }
          groupBy: {
            args: Prisma.ServiceCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCodeCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCodeCountAggregateOutputType> | number
          }
        }
      }
      Round: {
        payload: Prisma.$RoundPayload<ExtArgs>
        fields: Prisma.RoundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          findFirst: {
            args: Prisma.RoundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          findMany: {
            args: Prisma.RoundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>[]
          }
          create: {
            args: Prisma.RoundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          createMany: {
            args: Prisma.RoundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>[]
          }
          delete: {
            args: Prisma.RoundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          update: {
            args: Prisma.RoundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          deleteMany: {
            args: Prisma.RoundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>[]
          }
          upsert: {
            args: Prisma.RoundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          aggregate: {
            args: Prisma.RoundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRound>
          }
          groupBy: {
            args: Prisma.RoundGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoundGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoundCountArgs<ExtArgs>
            result: $Utils.Optional<RoundCountAggregateOutputType> | number
          }
        }
      }
      RoundEntry: {
        payload: Prisma.$RoundEntryPayload<ExtArgs>
        fields: Prisma.RoundEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoundEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoundEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundEntryPayload>
          }
          findFirst: {
            args: Prisma.RoundEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoundEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundEntryPayload>
          }
          findMany: {
            args: Prisma.RoundEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundEntryPayload>[]
          }
          create: {
            args: Prisma.RoundEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundEntryPayload>
          }
          createMany: {
            args: Prisma.RoundEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoundEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundEntryPayload>[]
          }
          delete: {
            args: Prisma.RoundEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundEntryPayload>
          }
          update: {
            args: Prisma.RoundEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundEntryPayload>
          }
          deleteMany: {
            args: Prisma.RoundEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoundEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoundEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundEntryPayload>[]
          }
          upsert: {
            args: Prisma.RoundEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundEntryPayload>
          }
          aggregate: {
            args: Prisma.RoundEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoundEntry>
          }
          groupBy: {
            args: Prisma.RoundEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoundEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoundEntryCountArgs<ExtArgs>
            result: $Utils.Optional<RoundEntryCountAggregateOutputType> | number
          }
        }
      }
      WithdrawOrder: {
        payload: Prisma.$WithdrawOrderPayload<ExtArgs>
        fields: Prisma.WithdrawOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WithdrawOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WithdrawOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawOrderPayload>
          }
          findFirst: {
            args: Prisma.WithdrawOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WithdrawOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawOrderPayload>
          }
          findMany: {
            args: Prisma.WithdrawOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawOrderPayload>[]
          }
          create: {
            args: Prisma.WithdrawOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawOrderPayload>
          }
          createMany: {
            args: Prisma.WithdrawOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WithdrawOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawOrderPayload>[]
          }
          delete: {
            args: Prisma.WithdrawOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawOrderPayload>
          }
          update: {
            args: Prisma.WithdrawOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawOrderPayload>
          }
          deleteMany: {
            args: Prisma.WithdrawOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WithdrawOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WithdrawOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawOrderPayload>[]
          }
          upsert: {
            args: Prisma.WithdrawOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawOrderPayload>
          }
          aggregate: {
            args: Prisma.WithdrawOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWithdrawOrder>
          }
          groupBy: {
            args: Prisma.WithdrawOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<WithdrawOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.WithdrawOrderCountArgs<ExtArgs>
            result: $Utils.Optional<WithdrawOrderCountAggregateOutputType> | number
          }
        }
      }
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    depositOrder?: DepositOrderOmit
    serviceCode?: ServiceCodeOmit
    round?: RoundOmit
    roundEntry?: RoundEntryOmit
    withdrawOrder?: WithdrawOrderOmit
    adminUser?: AdminUserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
    deposits: number
    serviceCodes: number
    roundEntries: number
    withdrawals: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deposits?: boolean | UserCountOutputTypeCountDepositsArgs
    serviceCodes?: boolean | UserCountOutputTypeCountServiceCodesArgs
    roundEntries?: boolean | UserCountOutputTypeCountRoundEntriesArgs
    withdrawals?: boolean | UserCountOutputTypeCountWithdrawalsArgs
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
  export type UserCountOutputTypeCountDepositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositOrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountServiceCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceCodeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoundEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoundEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWithdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawOrderWhereInput
  }


  /**
   * Count Type RoundCountOutputType
   */

  export type RoundCountOutputType = {
    entries: number
  }

  export type RoundCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | RoundCountOutputTypeCountEntriesArgs
  }

  // Custom InputTypes
  /**
   * RoundCountOutputType without action
   */
  export type RoundCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoundCountOutputType
     */
    select?: RoundCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoundCountOutputType without action
   */
  export type RoundCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoundEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    balanceUsdc: Decimal | null
    balanceUsdt: Decimal | null
    dailyQuotaUsed: number | null
    timesBalance: number | null
  }

  export type UserSumAggregateOutputType = {
    balanceUsdc: Decimal | null
    balanceUsdt: Decimal | null
    dailyQuotaUsed: number | null
    timesBalance: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    walletAddress: string | null
    balanceUsdc: Decimal | null
    balanceUsdt: Decimal | null
    dailyQuotaUsed: number | null
    timesBalance: number | null
    quotaResetAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    walletAddress: string | null
    balanceUsdc: Decimal | null
    balanceUsdt: Decimal | null
    dailyQuotaUsed: number | null
    timesBalance: number | null
    quotaResetAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    walletAddress: number
    balanceUsdc: number
    balanceUsdt: number
    dailyQuotaUsed: number
    timesBalance: number
    quotaResetAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    balanceUsdc?: true
    balanceUsdt?: true
    dailyQuotaUsed?: true
    timesBalance?: true
  }

  export type UserSumAggregateInputType = {
    balanceUsdc?: true
    balanceUsdt?: true
    dailyQuotaUsed?: true
    timesBalance?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    walletAddress?: true
    balanceUsdc?: true
    balanceUsdt?: true
    dailyQuotaUsed?: true
    timesBalance?: true
    quotaResetAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    walletAddress?: true
    balanceUsdc?: true
    balanceUsdt?: true
    dailyQuotaUsed?: true
    timesBalance?: true
    quotaResetAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    walletAddress?: true
    balanceUsdc?: true
    balanceUsdt?: true
    dailyQuotaUsed?: true
    timesBalance?: true
    quotaResetAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    walletAddress: string
    balanceUsdc: Decimal
    balanceUsdt: Decimal
    dailyQuotaUsed: number
    timesBalance: number
    quotaResetAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    createdAt?: boolean
    updatedAt?: boolean
    walletAddress?: boolean
    balanceUsdc?: boolean
    balanceUsdt?: boolean
    dailyQuotaUsed?: boolean
    timesBalance?: boolean
    quotaResetAt?: boolean
    deposits?: boolean | User$depositsArgs<ExtArgs>
    serviceCodes?: boolean | User$serviceCodesArgs<ExtArgs>
    roundEntries?: boolean | User$roundEntriesArgs<ExtArgs>
    withdrawals?: boolean | User$withdrawalsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    walletAddress?: boolean
    balanceUsdc?: boolean
    balanceUsdt?: boolean
    dailyQuotaUsed?: boolean
    timesBalance?: boolean
    quotaResetAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    walletAddress?: boolean
    balanceUsdc?: boolean
    balanceUsdt?: boolean
    dailyQuotaUsed?: boolean
    timesBalance?: boolean
    quotaResetAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    walletAddress?: boolean
    balanceUsdc?: boolean
    balanceUsdt?: boolean
    dailyQuotaUsed?: boolean
    timesBalance?: boolean
    quotaResetAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "walletAddress" | "balanceUsdc" | "balanceUsdt" | "dailyQuotaUsed" | "timesBalance" | "quotaResetAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deposits?: boolean | User$depositsArgs<ExtArgs>
    serviceCodes?: boolean | User$serviceCodesArgs<ExtArgs>
    roundEntries?: boolean | User$roundEntriesArgs<ExtArgs>
    withdrawals?: boolean | User$withdrawalsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      deposits: Prisma.$DepositOrderPayload<ExtArgs>[]
      serviceCodes: Prisma.$ServiceCodePayload<ExtArgs>[]
      roundEntries: Prisma.$RoundEntryPayload<ExtArgs>[]
      withdrawals: Prisma.$WithdrawOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      walletAddress: string
      balanceUsdc: Prisma.Decimal
      balanceUsdt: Prisma.Decimal
      dailyQuotaUsed: number
      timesBalance: number
      quotaResetAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deposits<T extends User$depositsArgs<ExtArgs> = {}>(args?: Subset<T, User$depositsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    serviceCodes<T extends User$serviceCodesArgs<ExtArgs> = {}>(args?: Subset<T, User$serviceCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roundEntries<T extends User$roundEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$roundEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    withdrawals<T extends User$withdrawalsArgs<ExtArgs> = {}>(args?: Subset<T, User$withdrawalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly walletAddress: FieldRef<"User", 'String'>
    readonly balanceUsdc: FieldRef<"User", 'Decimal'>
    readonly balanceUsdt: FieldRef<"User", 'Decimal'>
    readonly dailyQuotaUsed: FieldRef<"User", 'Int'>
    readonly timesBalance: FieldRef<"User", 'Int'>
    readonly quotaResetAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.deposits
   */
  export type User$depositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositOrder
     */
    select?: DepositOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositOrder
     */
    omit?: DepositOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositOrderInclude<ExtArgs> | null
    where?: DepositOrderWhereInput
    orderBy?: DepositOrderOrderByWithRelationInput | DepositOrderOrderByWithRelationInput[]
    cursor?: DepositOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepositOrderScalarFieldEnum | DepositOrderScalarFieldEnum[]
  }

  /**
   * User.serviceCodes
   */
  export type User$serviceCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCode
     */
    select?: ServiceCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCode
     */
    omit?: ServiceCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCodeInclude<ExtArgs> | null
    where?: ServiceCodeWhereInput
    orderBy?: ServiceCodeOrderByWithRelationInput | ServiceCodeOrderByWithRelationInput[]
    cursor?: ServiceCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceCodeScalarFieldEnum | ServiceCodeScalarFieldEnum[]
  }

  /**
   * User.roundEntries
   */
  export type User$roundEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoundEntry
     */
    select?: RoundEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoundEntry
     */
    omit?: RoundEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundEntryInclude<ExtArgs> | null
    where?: RoundEntryWhereInput
    orderBy?: RoundEntryOrderByWithRelationInput | RoundEntryOrderByWithRelationInput[]
    cursor?: RoundEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoundEntryScalarFieldEnum | RoundEntryScalarFieldEnum[]
  }

  /**
   * User.withdrawals
   */
  export type User$withdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawOrder
     */
    select?: WithdrawOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawOrder
     */
    omit?: WithdrawOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawOrderInclude<ExtArgs> | null
    where?: WithdrawOrderWhereInput
    orderBy?: WithdrawOrderOrderByWithRelationInput | WithdrawOrderOrderByWithRelationInput[]
    cursor?: WithdrawOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WithdrawOrderScalarFieldEnum | WithdrawOrderScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model DepositOrder
   */

  export type AggregateDepositOrder = {
    _count: DepositOrderCountAggregateOutputType | null
    _avg: DepositOrderAvgAggregateOutputType | null
    _sum: DepositOrderSumAggregateOutputType | null
    _min: DepositOrderMinAggregateOutputType | null
    _max: DepositOrderMaxAggregateOutputType | null
  }

  export type DepositOrderAvgAggregateOutputType = {
    blockNumber: number | null
    amount: Decimal | null
    confirmations: number | null
    requiredConf: number | null
  }

  export type DepositOrderSumAggregateOutputType = {
    blockNumber: bigint | null
    amount: Decimal | null
    confirmations: number | null
    requiredConf: number | null
  }

  export type DepositOrderMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    orderNo: string | null
    chain: $Enums.Chain | null
    coin: $Enums.Stablecoin | null
    toAddress: string | null
    fromAddress: string | null
    txHash: string | null
    blockNumber: bigint | null
    amount: Decimal | null
    confirmations: number | null
    requiredConf: number | null
    status: $Enums.TxStatus | null
    confirmedAt: Date | null
    userId: string | null
  }

  export type DepositOrderMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    orderNo: string | null
    chain: $Enums.Chain | null
    coin: $Enums.Stablecoin | null
    toAddress: string | null
    fromAddress: string | null
    txHash: string | null
    blockNumber: bigint | null
    amount: Decimal | null
    confirmations: number | null
    requiredConf: number | null
    status: $Enums.TxStatus | null
    confirmedAt: Date | null
    userId: string | null
  }

  export type DepositOrderCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    orderNo: number
    chain: number
    coin: number
    toAddress: number
    fromAddress: number
    txHash: number
    blockNumber: number
    amount: number
    confirmations: number
    requiredConf: number
    status: number
    confirmedAt: number
    userId: number
    _all: number
  }


  export type DepositOrderAvgAggregateInputType = {
    blockNumber?: true
    amount?: true
    confirmations?: true
    requiredConf?: true
  }

  export type DepositOrderSumAggregateInputType = {
    blockNumber?: true
    amount?: true
    confirmations?: true
    requiredConf?: true
  }

  export type DepositOrderMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    orderNo?: true
    chain?: true
    coin?: true
    toAddress?: true
    fromAddress?: true
    txHash?: true
    blockNumber?: true
    amount?: true
    confirmations?: true
    requiredConf?: true
    status?: true
    confirmedAt?: true
    userId?: true
  }

  export type DepositOrderMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    orderNo?: true
    chain?: true
    coin?: true
    toAddress?: true
    fromAddress?: true
    txHash?: true
    blockNumber?: true
    amount?: true
    confirmations?: true
    requiredConf?: true
    status?: true
    confirmedAt?: true
    userId?: true
  }

  export type DepositOrderCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    orderNo?: true
    chain?: true
    coin?: true
    toAddress?: true
    fromAddress?: true
    txHash?: true
    blockNumber?: true
    amount?: true
    confirmations?: true
    requiredConf?: true
    status?: true
    confirmedAt?: true
    userId?: true
    _all?: true
  }

  export type DepositOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DepositOrder to aggregate.
     */
    where?: DepositOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepositOrders to fetch.
     */
    orderBy?: DepositOrderOrderByWithRelationInput | DepositOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepositOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepositOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepositOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DepositOrders
    **/
    _count?: true | DepositOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepositOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepositOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepositOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepositOrderMaxAggregateInputType
  }

  export type GetDepositOrderAggregateType<T extends DepositOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateDepositOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepositOrder[P]>
      : GetScalarType<T[P], AggregateDepositOrder[P]>
  }




  export type DepositOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositOrderWhereInput
    orderBy?: DepositOrderOrderByWithAggregationInput | DepositOrderOrderByWithAggregationInput[]
    by: DepositOrderScalarFieldEnum[] | DepositOrderScalarFieldEnum
    having?: DepositOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepositOrderCountAggregateInputType | true
    _avg?: DepositOrderAvgAggregateInputType
    _sum?: DepositOrderSumAggregateInputType
    _min?: DepositOrderMinAggregateInputType
    _max?: DepositOrderMaxAggregateInputType
  }

  export type DepositOrderGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    orderNo: string
    chain: $Enums.Chain
    coin: $Enums.Stablecoin
    toAddress: string
    fromAddress: string | null
    txHash: string | null
    blockNumber: bigint | null
    amount: Decimal
    confirmations: number
    requiredConf: number
    status: $Enums.TxStatus
    confirmedAt: Date | null
    userId: string | null
    _count: DepositOrderCountAggregateOutputType | null
    _avg: DepositOrderAvgAggregateOutputType | null
    _sum: DepositOrderSumAggregateOutputType | null
    _min: DepositOrderMinAggregateOutputType | null
    _max: DepositOrderMaxAggregateOutputType | null
  }

  type GetDepositOrderGroupByPayload<T extends DepositOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepositOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepositOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepositOrderGroupByOutputType[P]>
            : GetScalarType<T[P], DepositOrderGroupByOutputType[P]>
        }
      >
    >


  export type DepositOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderNo?: boolean
    chain?: boolean
    coin?: boolean
    toAddress?: boolean
    fromAddress?: boolean
    txHash?: boolean
    blockNumber?: boolean
    amount?: boolean
    confirmations?: boolean
    requiredConf?: boolean
    status?: boolean
    confirmedAt?: boolean
    userId?: boolean
    user?: boolean | DepositOrder$userArgs<ExtArgs>
  }, ExtArgs["result"]["depositOrder"]>

  export type DepositOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderNo?: boolean
    chain?: boolean
    coin?: boolean
    toAddress?: boolean
    fromAddress?: boolean
    txHash?: boolean
    blockNumber?: boolean
    amount?: boolean
    confirmations?: boolean
    requiredConf?: boolean
    status?: boolean
    confirmedAt?: boolean
    userId?: boolean
    user?: boolean | DepositOrder$userArgs<ExtArgs>
  }, ExtArgs["result"]["depositOrder"]>

  export type DepositOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderNo?: boolean
    chain?: boolean
    coin?: boolean
    toAddress?: boolean
    fromAddress?: boolean
    txHash?: boolean
    blockNumber?: boolean
    amount?: boolean
    confirmations?: boolean
    requiredConf?: boolean
    status?: boolean
    confirmedAt?: boolean
    userId?: boolean
    user?: boolean | DepositOrder$userArgs<ExtArgs>
  }, ExtArgs["result"]["depositOrder"]>

  export type DepositOrderSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderNo?: boolean
    chain?: boolean
    coin?: boolean
    toAddress?: boolean
    fromAddress?: boolean
    txHash?: boolean
    blockNumber?: boolean
    amount?: boolean
    confirmations?: boolean
    requiredConf?: boolean
    status?: boolean
    confirmedAt?: boolean
    userId?: boolean
  }

  export type DepositOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "orderNo" | "chain" | "coin" | "toAddress" | "fromAddress" | "txHash" | "blockNumber" | "amount" | "confirmations" | "requiredConf" | "status" | "confirmedAt" | "userId", ExtArgs["result"]["depositOrder"]>
  export type DepositOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | DepositOrder$userArgs<ExtArgs>
  }
  export type DepositOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | DepositOrder$userArgs<ExtArgs>
  }
  export type DepositOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | DepositOrder$userArgs<ExtArgs>
  }

  export type $DepositOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DepositOrder"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      orderNo: string
      chain: $Enums.Chain
      coin: $Enums.Stablecoin
      toAddress: string
      fromAddress: string | null
      txHash: string | null
      blockNumber: bigint | null
      amount: Prisma.Decimal
      confirmations: number
      requiredConf: number
      status: $Enums.TxStatus
      confirmedAt: Date | null
      userId: string | null
    }, ExtArgs["result"]["depositOrder"]>
    composites: {}
  }

  type DepositOrderGetPayload<S extends boolean | null | undefined | DepositOrderDefaultArgs> = $Result.GetResult<Prisma.$DepositOrderPayload, S>

  type DepositOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepositOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepositOrderCountAggregateInputType | true
    }

  export interface DepositOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DepositOrder'], meta: { name: 'DepositOrder' } }
    /**
     * Find zero or one DepositOrder that matches the filter.
     * @param {DepositOrderFindUniqueArgs} args - Arguments to find a DepositOrder
     * @example
     * // Get one DepositOrder
     * const depositOrder = await prisma.depositOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepositOrderFindUniqueArgs>(args: SelectSubset<T, DepositOrderFindUniqueArgs<ExtArgs>>): Prisma__DepositOrderClient<$Result.GetResult<Prisma.$DepositOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DepositOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepositOrderFindUniqueOrThrowArgs} args - Arguments to find a DepositOrder
     * @example
     * // Get one DepositOrder
     * const depositOrder = await prisma.depositOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepositOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, DepositOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepositOrderClient<$Result.GetResult<Prisma.$DepositOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DepositOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositOrderFindFirstArgs} args - Arguments to find a DepositOrder
     * @example
     * // Get one DepositOrder
     * const depositOrder = await prisma.depositOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepositOrderFindFirstArgs>(args?: SelectSubset<T, DepositOrderFindFirstArgs<ExtArgs>>): Prisma__DepositOrderClient<$Result.GetResult<Prisma.$DepositOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DepositOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositOrderFindFirstOrThrowArgs} args - Arguments to find a DepositOrder
     * @example
     * // Get one DepositOrder
     * const depositOrder = await prisma.depositOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepositOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, DepositOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepositOrderClient<$Result.GetResult<Prisma.$DepositOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DepositOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DepositOrders
     * const depositOrders = await prisma.depositOrder.findMany()
     * 
     * // Get first 10 DepositOrders
     * const depositOrders = await prisma.depositOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const depositOrderWithIdOnly = await prisma.depositOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepositOrderFindManyArgs>(args?: SelectSubset<T, DepositOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DepositOrder.
     * @param {DepositOrderCreateArgs} args - Arguments to create a DepositOrder.
     * @example
     * // Create one DepositOrder
     * const DepositOrder = await prisma.depositOrder.create({
     *   data: {
     *     // ... data to create a DepositOrder
     *   }
     * })
     * 
     */
    create<T extends DepositOrderCreateArgs>(args: SelectSubset<T, DepositOrderCreateArgs<ExtArgs>>): Prisma__DepositOrderClient<$Result.GetResult<Prisma.$DepositOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DepositOrders.
     * @param {DepositOrderCreateManyArgs} args - Arguments to create many DepositOrders.
     * @example
     * // Create many DepositOrders
     * const depositOrder = await prisma.depositOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepositOrderCreateManyArgs>(args?: SelectSubset<T, DepositOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DepositOrders and returns the data saved in the database.
     * @param {DepositOrderCreateManyAndReturnArgs} args - Arguments to create many DepositOrders.
     * @example
     * // Create many DepositOrders
     * const depositOrder = await prisma.depositOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DepositOrders and only return the `id`
     * const depositOrderWithIdOnly = await prisma.depositOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepositOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, DepositOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DepositOrder.
     * @param {DepositOrderDeleteArgs} args - Arguments to delete one DepositOrder.
     * @example
     * // Delete one DepositOrder
     * const DepositOrder = await prisma.depositOrder.delete({
     *   where: {
     *     // ... filter to delete one DepositOrder
     *   }
     * })
     * 
     */
    delete<T extends DepositOrderDeleteArgs>(args: SelectSubset<T, DepositOrderDeleteArgs<ExtArgs>>): Prisma__DepositOrderClient<$Result.GetResult<Prisma.$DepositOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DepositOrder.
     * @param {DepositOrderUpdateArgs} args - Arguments to update one DepositOrder.
     * @example
     * // Update one DepositOrder
     * const depositOrder = await prisma.depositOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepositOrderUpdateArgs>(args: SelectSubset<T, DepositOrderUpdateArgs<ExtArgs>>): Prisma__DepositOrderClient<$Result.GetResult<Prisma.$DepositOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DepositOrders.
     * @param {DepositOrderDeleteManyArgs} args - Arguments to filter DepositOrders to delete.
     * @example
     * // Delete a few DepositOrders
     * const { count } = await prisma.depositOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepositOrderDeleteManyArgs>(args?: SelectSubset<T, DepositOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DepositOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DepositOrders
     * const depositOrder = await prisma.depositOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepositOrderUpdateManyArgs>(args: SelectSubset<T, DepositOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DepositOrders and returns the data updated in the database.
     * @param {DepositOrderUpdateManyAndReturnArgs} args - Arguments to update many DepositOrders.
     * @example
     * // Update many DepositOrders
     * const depositOrder = await prisma.depositOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DepositOrders and only return the `id`
     * const depositOrderWithIdOnly = await prisma.depositOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepositOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, DepositOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DepositOrder.
     * @param {DepositOrderUpsertArgs} args - Arguments to update or create a DepositOrder.
     * @example
     * // Update or create a DepositOrder
     * const depositOrder = await prisma.depositOrder.upsert({
     *   create: {
     *     // ... data to create a DepositOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DepositOrder we want to update
     *   }
     * })
     */
    upsert<T extends DepositOrderUpsertArgs>(args: SelectSubset<T, DepositOrderUpsertArgs<ExtArgs>>): Prisma__DepositOrderClient<$Result.GetResult<Prisma.$DepositOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DepositOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositOrderCountArgs} args - Arguments to filter DepositOrders to count.
     * @example
     * // Count the number of DepositOrders
     * const count = await prisma.depositOrder.count({
     *   where: {
     *     // ... the filter for the DepositOrders we want to count
     *   }
     * })
    **/
    count<T extends DepositOrderCountArgs>(
      args?: Subset<T, DepositOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepositOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DepositOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepositOrderAggregateArgs>(args: Subset<T, DepositOrderAggregateArgs>): Prisma.PrismaPromise<GetDepositOrderAggregateType<T>>

    /**
     * Group by DepositOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositOrderGroupByArgs} args - Group by arguments.
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
      T extends DepositOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepositOrderGroupByArgs['orderBy'] }
        : { orderBy?: DepositOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepositOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepositOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DepositOrder model
   */
  readonly fields: DepositOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DepositOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepositOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends DepositOrder$userArgs<ExtArgs> = {}>(args?: Subset<T, DepositOrder$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DepositOrder model
   */
  interface DepositOrderFieldRefs {
    readonly id: FieldRef<"DepositOrder", 'String'>
    readonly createdAt: FieldRef<"DepositOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"DepositOrder", 'DateTime'>
    readonly orderNo: FieldRef<"DepositOrder", 'String'>
    readonly chain: FieldRef<"DepositOrder", 'Chain'>
    readonly coin: FieldRef<"DepositOrder", 'Stablecoin'>
    readonly toAddress: FieldRef<"DepositOrder", 'String'>
    readonly fromAddress: FieldRef<"DepositOrder", 'String'>
    readonly txHash: FieldRef<"DepositOrder", 'String'>
    readonly blockNumber: FieldRef<"DepositOrder", 'BigInt'>
    readonly amount: FieldRef<"DepositOrder", 'Decimal'>
    readonly confirmations: FieldRef<"DepositOrder", 'Int'>
    readonly requiredConf: FieldRef<"DepositOrder", 'Int'>
    readonly status: FieldRef<"DepositOrder", 'TxStatus'>
    readonly confirmedAt: FieldRef<"DepositOrder", 'DateTime'>
    readonly userId: FieldRef<"DepositOrder", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DepositOrder findUnique
   */
  export type DepositOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositOrder
     */
    select?: DepositOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositOrder
     */
    omit?: DepositOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositOrderInclude<ExtArgs> | null
    /**
     * Filter, which DepositOrder to fetch.
     */
    where: DepositOrderWhereUniqueInput
  }

  /**
   * DepositOrder findUniqueOrThrow
   */
  export type DepositOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositOrder
     */
    select?: DepositOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositOrder
     */
    omit?: DepositOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositOrderInclude<ExtArgs> | null
    /**
     * Filter, which DepositOrder to fetch.
     */
    where: DepositOrderWhereUniqueInput
  }

  /**
   * DepositOrder findFirst
   */
  export type DepositOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositOrder
     */
    select?: DepositOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositOrder
     */
    omit?: DepositOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositOrderInclude<ExtArgs> | null
    /**
     * Filter, which DepositOrder to fetch.
     */
    where?: DepositOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepositOrders to fetch.
     */
    orderBy?: DepositOrderOrderByWithRelationInput | DepositOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DepositOrders.
     */
    cursor?: DepositOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepositOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepositOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepositOrders.
     */
    distinct?: DepositOrderScalarFieldEnum | DepositOrderScalarFieldEnum[]
  }

  /**
   * DepositOrder findFirstOrThrow
   */
  export type DepositOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositOrder
     */
    select?: DepositOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositOrder
     */
    omit?: DepositOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositOrderInclude<ExtArgs> | null
    /**
     * Filter, which DepositOrder to fetch.
     */
    where?: DepositOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepositOrders to fetch.
     */
    orderBy?: DepositOrderOrderByWithRelationInput | DepositOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DepositOrders.
     */
    cursor?: DepositOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepositOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepositOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepositOrders.
     */
    distinct?: DepositOrderScalarFieldEnum | DepositOrderScalarFieldEnum[]
  }

  /**
   * DepositOrder findMany
   */
  export type DepositOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositOrder
     */
    select?: DepositOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositOrder
     */
    omit?: DepositOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositOrderInclude<ExtArgs> | null
    /**
     * Filter, which DepositOrders to fetch.
     */
    where?: DepositOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepositOrders to fetch.
     */
    orderBy?: DepositOrderOrderByWithRelationInput | DepositOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DepositOrders.
     */
    cursor?: DepositOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepositOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepositOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepositOrders.
     */
    distinct?: DepositOrderScalarFieldEnum | DepositOrderScalarFieldEnum[]
  }

  /**
   * DepositOrder create
   */
  export type DepositOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositOrder
     */
    select?: DepositOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositOrder
     */
    omit?: DepositOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a DepositOrder.
     */
    data: XOR<DepositOrderCreateInput, DepositOrderUncheckedCreateInput>
  }

  /**
   * DepositOrder createMany
   */
  export type DepositOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DepositOrders.
     */
    data: DepositOrderCreateManyInput | DepositOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DepositOrder createManyAndReturn
   */
  export type DepositOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositOrder
     */
    select?: DepositOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DepositOrder
     */
    omit?: DepositOrderOmit<ExtArgs> | null
    /**
     * The data used to create many DepositOrders.
     */
    data: DepositOrderCreateManyInput | DepositOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DepositOrder update
   */
  export type DepositOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositOrder
     */
    select?: DepositOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositOrder
     */
    omit?: DepositOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a DepositOrder.
     */
    data: XOR<DepositOrderUpdateInput, DepositOrderUncheckedUpdateInput>
    /**
     * Choose, which DepositOrder to update.
     */
    where: DepositOrderWhereUniqueInput
  }

  /**
   * DepositOrder updateMany
   */
  export type DepositOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DepositOrders.
     */
    data: XOR<DepositOrderUpdateManyMutationInput, DepositOrderUncheckedUpdateManyInput>
    /**
     * Filter which DepositOrders to update
     */
    where?: DepositOrderWhereInput
    /**
     * Limit how many DepositOrders to update.
     */
    limit?: number
  }

  /**
   * DepositOrder updateManyAndReturn
   */
  export type DepositOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositOrder
     */
    select?: DepositOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DepositOrder
     */
    omit?: DepositOrderOmit<ExtArgs> | null
    /**
     * The data used to update DepositOrders.
     */
    data: XOR<DepositOrderUpdateManyMutationInput, DepositOrderUncheckedUpdateManyInput>
    /**
     * Filter which DepositOrders to update
     */
    where?: DepositOrderWhereInput
    /**
     * Limit how many DepositOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DepositOrder upsert
   */
  export type DepositOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositOrder
     */
    select?: DepositOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositOrder
     */
    omit?: DepositOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the DepositOrder to update in case it exists.
     */
    where: DepositOrderWhereUniqueInput
    /**
     * In case the DepositOrder found by the `where` argument doesn't exist, create a new DepositOrder with this data.
     */
    create: XOR<DepositOrderCreateInput, DepositOrderUncheckedCreateInput>
    /**
     * In case the DepositOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepositOrderUpdateInput, DepositOrderUncheckedUpdateInput>
  }

  /**
   * DepositOrder delete
   */
  export type DepositOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositOrder
     */
    select?: DepositOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositOrder
     */
    omit?: DepositOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositOrderInclude<ExtArgs> | null
    /**
     * Filter which DepositOrder to delete.
     */
    where: DepositOrderWhereUniqueInput
  }

  /**
   * DepositOrder deleteMany
   */
  export type DepositOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DepositOrders to delete
     */
    where?: DepositOrderWhereInput
    /**
     * Limit how many DepositOrders to delete.
     */
    limit?: number
  }

  /**
   * DepositOrder.user
   */
  export type DepositOrder$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * DepositOrder without action
   */
  export type DepositOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositOrder
     */
    select?: DepositOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositOrder
     */
    omit?: DepositOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositOrderInclude<ExtArgs> | null
  }


  /**
   * Model ServiceCode
   */

  export type AggregateServiceCode = {
    _count: ServiceCodeCountAggregateOutputType | null
    _min: ServiceCodeMinAggregateOutputType | null
    _max: ServiceCodeMaxAggregateOutputType | null
  }

  export type ServiceCodeMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    code: string | null
    issuedFor: $Enums.Stablecoin | null
    expiresAt: Date | null
    redeemedAt: Date | null
    userId: string | null
  }

  export type ServiceCodeMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    code: string | null
    issuedFor: $Enums.Stablecoin | null
    expiresAt: Date | null
    redeemedAt: Date | null
    userId: string | null
  }

  export type ServiceCodeCountAggregateOutputType = {
    id: number
    createdAt: number
    code: number
    issuedFor: number
    expiresAt: number
    redeemedAt: number
    userId: number
    _all: number
  }


  export type ServiceCodeMinAggregateInputType = {
    id?: true
    createdAt?: true
    code?: true
    issuedFor?: true
    expiresAt?: true
    redeemedAt?: true
    userId?: true
  }

  export type ServiceCodeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    code?: true
    issuedFor?: true
    expiresAt?: true
    redeemedAt?: true
    userId?: true
  }

  export type ServiceCodeCountAggregateInputType = {
    id?: true
    createdAt?: true
    code?: true
    issuedFor?: true
    expiresAt?: true
    redeemedAt?: true
    userId?: true
    _all?: true
  }

  export type ServiceCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceCode to aggregate.
     */
    where?: ServiceCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCodes to fetch.
     */
    orderBy?: ServiceCodeOrderByWithRelationInput | ServiceCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceCodes
    **/
    _count?: true | ServiceCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceCodeMaxAggregateInputType
  }

  export type GetServiceCodeAggregateType<T extends ServiceCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceCode[P]>
      : GetScalarType<T[P], AggregateServiceCode[P]>
  }




  export type ServiceCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceCodeWhereInput
    orderBy?: ServiceCodeOrderByWithAggregationInput | ServiceCodeOrderByWithAggregationInput[]
    by: ServiceCodeScalarFieldEnum[] | ServiceCodeScalarFieldEnum
    having?: ServiceCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCodeCountAggregateInputType | true
    _min?: ServiceCodeMinAggregateInputType
    _max?: ServiceCodeMaxAggregateInputType
  }

  export type ServiceCodeGroupByOutputType = {
    id: string
    createdAt: Date
    code: string
    issuedFor: $Enums.Stablecoin
    expiresAt: Date
    redeemedAt: Date | null
    userId: string
    _count: ServiceCodeCountAggregateOutputType | null
    _min: ServiceCodeMinAggregateOutputType | null
    _max: ServiceCodeMaxAggregateOutputType | null
  }

  type GetServiceCodeGroupByPayload<T extends ServiceCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceCodeGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceCodeGroupByOutputType[P]>
        }
      >
    >


  export type ServiceCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    code?: boolean
    issuedFor?: boolean
    expiresAt?: boolean
    redeemedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceCode"]>

  export type ServiceCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    code?: boolean
    issuedFor?: boolean
    expiresAt?: boolean
    redeemedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceCode"]>

  export type ServiceCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    code?: boolean
    issuedFor?: boolean
    expiresAt?: boolean
    redeemedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceCode"]>

  export type ServiceCodeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    code?: boolean
    issuedFor?: boolean
    expiresAt?: boolean
    redeemedAt?: boolean
    userId?: boolean
  }

  export type ServiceCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "code" | "issuedFor" | "expiresAt" | "redeemedAt" | "userId", ExtArgs["result"]["serviceCode"]>
  export type ServiceCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ServiceCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ServiceCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ServiceCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceCode"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      code: string
      issuedFor: $Enums.Stablecoin
      expiresAt: Date
      redeemedAt: Date | null
      userId: string
    }, ExtArgs["result"]["serviceCode"]>
    composites: {}
  }

  type ServiceCodeGetPayload<S extends boolean | null | undefined | ServiceCodeDefaultArgs> = $Result.GetResult<Prisma.$ServiceCodePayload, S>

  type ServiceCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCodeCountAggregateInputType | true
    }

  export interface ServiceCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceCode'], meta: { name: 'ServiceCode' } }
    /**
     * Find zero or one ServiceCode that matches the filter.
     * @param {ServiceCodeFindUniqueArgs} args - Arguments to find a ServiceCode
     * @example
     * // Get one ServiceCode
     * const serviceCode = await prisma.serviceCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceCodeFindUniqueArgs>(args: SelectSubset<T, ServiceCodeFindUniqueArgs<ExtArgs>>): Prisma__ServiceCodeClient<$Result.GetResult<Prisma.$ServiceCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceCodeFindUniqueOrThrowArgs} args - Arguments to find a ServiceCode
     * @example
     * // Get one ServiceCode
     * const serviceCode = await prisma.serviceCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceCodeClient<$Result.GetResult<Prisma.$ServiceCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCodeFindFirstArgs} args - Arguments to find a ServiceCode
     * @example
     * // Get one ServiceCode
     * const serviceCode = await prisma.serviceCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceCodeFindFirstArgs>(args?: SelectSubset<T, ServiceCodeFindFirstArgs<ExtArgs>>): Prisma__ServiceCodeClient<$Result.GetResult<Prisma.$ServiceCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCodeFindFirstOrThrowArgs} args - Arguments to find a ServiceCode
     * @example
     * // Get one ServiceCode
     * const serviceCode = await prisma.serviceCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceCodeClient<$Result.GetResult<Prisma.$ServiceCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceCodes
     * const serviceCodes = await prisma.serviceCode.findMany()
     * 
     * // Get first 10 ServiceCodes
     * const serviceCodes = await prisma.serviceCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceCodeWithIdOnly = await prisma.serviceCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceCodeFindManyArgs>(args?: SelectSubset<T, ServiceCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceCode.
     * @param {ServiceCodeCreateArgs} args - Arguments to create a ServiceCode.
     * @example
     * // Create one ServiceCode
     * const ServiceCode = await prisma.serviceCode.create({
     *   data: {
     *     // ... data to create a ServiceCode
     *   }
     * })
     * 
     */
    create<T extends ServiceCodeCreateArgs>(args: SelectSubset<T, ServiceCodeCreateArgs<ExtArgs>>): Prisma__ServiceCodeClient<$Result.GetResult<Prisma.$ServiceCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceCodes.
     * @param {ServiceCodeCreateManyArgs} args - Arguments to create many ServiceCodes.
     * @example
     * // Create many ServiceCodes
     * const serviceCode = await prisma.serviceCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCodeCreateManyArgs>(args?: SelectSubset<T, ServiceCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceCodes and returns the data saved in the database.
     * @param {ServiceCodeCreateManyAndReturnArgs} args - Arguments to create many ServiceCodes.
     * @example
     * // Create many ServiceCodes
     * const serviceCode = await prisma.serviceCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceCodes and only return the `id`
     * const serviceCodeWithIdOnly = await prisma.serviceCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceCode.
     * @param {ServiceCodeDeleteArgs} args - Arguments to delete one ServiceCode.
     * @example
     * // Delete one ServiceCode
     * const ServiceCode = await prisma.serviceCode.delete({
     *   where: {
     *     // ... filter to delete one ServiceCode
     *   }
     * })
     * 
     */
    delete<T extends ServiceCodeDeleteArgs>(args: SelectSubset<T, ServiceCodeDeleteArgs<ExtArgs>>): Prisma__ServiceCodeClient<$Result.GetResult<Prisma.$ServiceCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceCode.
     * @param {ServiceCodeUpdateArgs} args - Arguments to update one ServiceCode.
     * @example
     * // Update one ServiceCode
     * const serviceCode = await prisma.serviceCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceCodeUpdateArgs>(args: SelectSubset<T, ServiceCodeUpdateArgs<ExtArgs>>): Prisma__ServiceCodeClient<$Result.GetResult<Prisma.$ServiceCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceCodes.
     * @param {ServiceCodeDeleteManyArgs} args - Arguments to filter ServiceCodes to delete.
     * @example
     * // Delete a few ServiceCodes
     * const { count } = await prisma.serviceCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceCodeDeleteManyArgs>(args?: SelectSubset<T, ServiceCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceCodes
     * const serviceCode = await prisma.serviceCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceCodeUpdateManyArgs>(args: SelectSubset<T, ServiceCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceCodes and returns the data updated in the database.
     * @param {ServiceCodeUpdateManyAndReturnArgs} args - Arguments to update many ServiceCodes.
     * @example
     * // Update many ServiceCodes
     * const serviceCode = await prisma.serviceCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceCodes and only return the `id`
     * const serviceCodeWithIdOnly = await prisma.serviceCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceCode.
     * @param {ServiceCodeUpsertArgs} args - Arguments to update or create a ServiceCode.
     * @example
     * // Update or create a ServiceCode
     * const serviceCode = await prisma.serviceCode.upsert({
     *   create: {
     *     // ... data to create a ServiceCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceCode we want to update
     *   }
     * })
     */
    upsert<T extends ServiceCodeUpsertArgs>(args: SelectSubset<T, ServiceCodeUpsertArgs<ExtArgs>>): Prisma__ServiceCodeClient<$Result.GetResult<Prisma.$ServiceCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCodeCountArgs} args - Arguments to filter ServiceCodes to count.
     * @example
     * // Count the number of ServiceCodes
     * const count = await prisma.serviceCode.count({
     *   where: {
     *     // ... the filter for the ServiceCodes we want to count
     *   }
     * })
    **/
    count<T extends ServiceCodeCountArgs>(
      args?: Subset<T, ServiceCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceCodeAggregateArgs>(args: Subset<T, ServiceCodeAggregateArgs>): Prisma.PrismaPromise<GetServiceCodeAggregateType<T>>

    /**
     * Group by ServiceCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCodeGroupByArgs} args - Group by arguments.
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
      T extends ServiceCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceCodeGroupByArgs['orderBy'] }
        : { orderBy?: ServiceCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceCode model
   */
  readonly fields: ServiceCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceCode model
   */
  interface ServiceCodeFieldRefs {
    readonly id: FieldRef<"ServiceCode", 'String'>
    readonly createdAt: FieldRef<"ServiceCode", 'DateTime'>
    readonly code: FieldRef<"ServiceCode", 'String'>
    readonly issuedFor: FieldRef<"ServiceCode", 'Stablecoin'>
    readonly expiresAt: FieldRef<"ServiceCode", 'DateTime'>
    readonly redeemedAt: FieldRef<"ServiceCode", 'DateTime'>
    readonly userId: FieldRef<"ServiceCode", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ServiceCode findUnique
   */
  export type ServiceCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCode
     */
    select?: ServiceCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCode
     */
    omit?: ServiceCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCodeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCode to fetch.
     */
    where: ServiceCodeWhereUniqueInput
  }

  /**
   * ServiceCode findUniqueOrThrow
   */
  export type ServiceCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCode
     */
    select?: ServiceCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCode
     */
    omit?: ServiceCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCodeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCode to fetch.
     */
    where: ServiceCodeWhereUniqueInput
  }

  /**
   * ServiceCode findFirst
   */
  export type ServiceCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCode
     */
    select?: ServiceCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCode
     */
    omit?: ServiceCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCodeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCode to fetch.
     */
    where?: ServiceCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCodes to fetch.
     */
    orderBy?: ServiceCodeOrderByWithRelationInput | ServiceCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceCodes.
     */
    cursor?: ServiceCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceCodes.
     */
    distinct?: ServiceCodeScalarFieldEnum | ServiceCodeScalarFieldEnum[]
  }

  /**
   * ServiceCode findFirstOrThrow
   */
  export type ServiceCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCode
     */
    select?: ServiceCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCode
     */
    omit?: ServiceCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCodeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCode to fetch.
     */
    where?: ServiceCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCodes to fetch.
     */
    orderBy?: ServiceCodeOrderByWithRelationInput | ServiceCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceCodes.
     */
    cursor?: ServiceCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceCodes.
     */
    distinct?: ServiceCodeScalarFieldEnum | ServiceCodeScalarFieldEnum[]
  }

  /**
   * ServiceCode findMany
   */
  export type ServiceCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCode
     */
    select?: ServiceCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCode
     */
    omit?: ServiceCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCodeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCodes to fetch.
     */
    where?: ServiceCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCodes to fetch.
     */
    orderBy?: ServiceCodeOrderByWithRelationInput | ServiceCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceCodes.
     */
    cursor?: ServiceCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceCodes.
     */
    distinct?: ServiceCodeScalarFieldEnum | ServiceCodeScalarFieldEnum[]
  }

  /**
   * ServiceCode create
   */
  export type ServiceCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCode
     */
    select?: ServiceCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCode
     */
    omit?: ServiceCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceCode.
     */
    data: XOR<ServiceCodeCreateInput, ServiceCodeUncheckedCreateInput>
  }

  /**
   * ServiceCode createMany
   */
  export type ServiceCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceCodes.
     */
    data: ServiceCodeCreateManyInput | ServiceCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceCode createManyAndReturn
   */
  export type ServiceCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCode
     */
    select?: ServiceCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCode
     */
    omit?: ServiceCodeOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceCodes.
     */
    data: ServiceCodeCreateManyInput | ServiceCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceCode update
   */
  export type ServiceCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCode
     */
    select?: ServiceCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCode
     */
    omit?: ServiceCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceCode.
     */
    data: XOR<ServiceCodeUpdateInput, ServiceCodeUncheckedUpdateInput>
    /**
     * Choose, which ServiceCode to update.
     */
    where: ServiceCodeWhereUniqueInput
  }

  /**
   * ServiceCode updateMany
   */
  export type ServiceCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceCodes.
     */
    data: XOR<ServiceCodeUpdateManyMutationInput, ServiceCodeUncheckedUpdateManyInput>
    /**
     * Filter which ServiceCodes to update
     */
    where?: ServiceCodeWhereInput
    /**
     * Limit how many ServiceCodes to update.
     */
    limit?: number
  }

  /**
   * ServiceCode updateManyAndReturn
   */
  export type ServiceCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCode
     */
    select?: ServiceCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCode
     */
    omit?: ServiceCodeOmit<ExtArgs> | null
    /**
     * The data used to update ServiceCodes.
     */
    data: XOR<ServiceCodeUpdateManyMutationInput, ServiceCodeUncheckedUpdateManyInput>
    /**
     * Filter which ServiceCodes to update
     */
    where?: ServiceCodeWhereInput
    /**
     * Limit how many ServiceCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceCode upsert
   */
  export type ServiceCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCode
     */
    select?: ServiceCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCode
     */
    omit?: ServiceCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceCode to update in case it exists.
     */
    where: ServiceCodeWhereUniqueInput
    /**
     * In case the ServiceCode found by the `where` argument doesn't exist, create a new ServiceCode with this data.
     */
    create: XOR<ServiceCodeCreateInput, ServiceCodeUncheckedCreateInput>
    /**
     * In case the ServiceCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceCodeUpdateInput, ServiceCodeUncheckedUpdateInput>
  }

  /**
   * ServiceCode delete
   */
  export type ServiceCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCode
     */
    select?: ServiceCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCode
     */
    omit?: ServiceCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCodeInclude<ExtArgs> | null
    /**
     * Filter which ServiceCode to delete.
     */
    where: ServiceCodeWhereUniqueInput
  }

  /**
   * ServiceCode deleteMany
   */
  export type ServiceCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceCodes to delete
     */
    where?: ServiceCodeWhereInput
    /**
     * Limit how many ServiceCodes to delete.
     */
    limit?: number
  }

  /**
   * ServiceCode without action
   */
  export type ServiceCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCode
     */
    select?: ServiceCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCode
     */
    omit?: ServiceCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCodeInclude<ExtArgs> | null
  }


  /**
   * Model Round
   */

  export type AggregateRound = {
    _count: RoundCountAggregateOutputType | null
    _avg: RoundAvgAggregateOutputType | null
    _sum: RoundSumAggregateOutputType | null
    _min: RoundMinAggregateOutputType | null
    _max: RoundMaxAggregateOutputType | null
  }

  export type RoundAvgAggregateOutputType = {
    roundNo: number | null
  }

  export type RoundSumAggregateOutputType = {
    roundNo: number | null
  }

  export type RoundMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    roundNo: number | null
    startedAt: Date | null
    endsAt: Date | null
    status: $Enums.RoundStatus | null
  }

  export type RoundMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    roundNo: number | null
    startedAt: Date | null
    endsAt: Date | null
    status: $Enums.RoundStatus | null
  }

  export type RoundCountAggregateOutputType = {
    id: number
    createdAt: number
    roundNo: number
    startedAt: number
    endsAt: number
    status: number
    _all: number
  }


  export type RoundAvgAggregateInputType = {
    roundNo?: true
  }

  export type RoundSumAggregateInputType = {
    roundNo?: true
  }

  export type RoundMinAggregateInputType = {
    id?: true
    createdAt?: true
    roundNo?: true
    startedAt?: true
    endsAt?: true
    status?: true
  }

  export type RoundMaxAggregateInputType = {
    id?: true
    createdAt?: true
    roundNo?: true
    startedAt?: true
    endsAt?: true
    status?: true
  }

  export type RoundCountAggregateInputType = {
    id?: true
    createdAt?: true
    roundNo?: true
    startedAt?: true
    endsAt?: true
    status?: true
    _all?: true
  }

  export type RoundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Round to aggregate.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rounds
    **/
    _count?: true | RoundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoundMaxAggregateInputType
  }

  export type GetRoundAggregateType<T extends RoundAggregateArgs> = {
        [P in keyof T & keyof AggregateRound]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRound[P]>
      : GetScalarType<T[P], AggregateRound[P]>
  }




  export type RoundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoundWhereInput
    orderBy?: RoundOrderByWithAggregationInput | RoundOrderByWithAggregationInput[]
    by: RoundScalarFieldEnum[] | RoundScalarFieldEnum
    having?: RoundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoundCountAggregateInputType | true
    _avg?: RoundAvgAggregateInputType
    _sum?: RoundSumAggregateInputType
    _min?: RoundMinAggregateInputType
    _max?: RoundMaxAggregateInputType
  }

  export type RoundGroupByOutputType = {
    id: string
    createdAt: Date
    roundNo: number
    startedAt: Date
    endsAt: Date
    status: $Enums.RoundStatus
    _count: RoundCountAggregateOutputType | null
    _avg: RoundAvgAggregateOutputType | null
    _sum: RoundSumAggregateOutputType | null
    _min: RoundMinAggregateOutputType | null
    _max: RoundMaxAggregateOutputType | null
  }

  type GetRoundGroupByPayload<T extends RoundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoundGroupByOutputType[P]>
            : GetScalarType<T[P], RoundGroupByOutputType[P]>
        }
      >
    >


  export type RoundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    roundNo?: boolean
    startedAt?: boolean
    endsAt?: boolean
    status?: boolean
    entries?: boolean | Round$entriesArgs<ExtArgs>
    _count?: boolean | RoundCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["round"]>

  export type RoundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    roundNo?: boolean
    startedAt?: boolean
    endsAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["round"]>

  export type RoundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    roundNo?: boolean
    startedAt?: boolean
    endsAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["round"]>

  export type RoundSelectScalar = {
    id?: boolean
    createdAt?: boolean
    roundNo?: boolean
    startedAt?: boolean
    endsAt?: boolean
    status?: boolean
  }

  export type RoundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "roundNo" | "startedAt" | "endsAt" | "status", ExtArgs["result"]["round"]>
  export type RoundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | Round$entriesArgs<ExtArgs>
    _count?: boolean | RoundCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Round"
    objects: {
      entries: Prisma.$RoundEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      roundNo: number
      startedAt: Date
      endsAt: Date
      status: $Enums.RoundStatus
    }, ExtArgs["result"]["round"]>
    composites: {}
  }

  type RoundGetPayload<S extends boolean | null | undefined | RoundDefaultArgs> = $Result.GetResult<Prisma.$RoundPayload, S>

  type RoundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoundCountAggregateInputType | true
    }

  export interface RoundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Round'], meta: { name: 'Round' } }
    /**
     * Find zero or one Round that matches the filter.
     * @param {RoundFindUniqueArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoundFindUniqueArgs>(args: SelectSubset<T, RoundFindUniqueArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Round that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoundFindUniqueOrThrowArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoundFindUniqueOrThrowArgs>(args: SelectSubset<T, RoundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Round that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindFirstArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoundFindFirstArgs>(args?: SelectSubset<T, RoundFindFirstArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Round that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindFirstOrThrowArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoundFindFirstOrThrowArgs>(args?: SelectSubset<T, RoundFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rounds
     * const rounds = await prisma.round.findMany()
     * 
     * // Get first 10 Rounds
     * const rounds = await prisma.round.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roundWithIdOnly = await prisma.round.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoundFindManyArgs>(args?: SelectSubset<T, RoundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Round.
     * @param {RoundCreateArgs} args - Arguments to create a Round.
     * @example
     * // Create one Round
     * const Round = await prisma.round.create({
     *   data: {
     *     // ... data to create a Round
     *   }
     * })
     * 
     */
    create<T extends RoundCreateArgs>(args: SelectSubset<T, RoundCreateArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rounds.
     * @param {RoundCreateManyArgs} args - Arguments to create many Rounds.
     * @example
     * // Create many Rounds
     * const round = await prisma.round.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoundCreateManyArgs>(args?: SelectSubset<T, RoundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rounds and returns the data saved in the database.
     * @param {RoundCreateManyAndReturnArgs} args - Arguments to create many Rounds.
     * @example
     * // Create many Rounds
     * const round = await prisma.round.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rounds and only return the `id`
     * const roundWithIdOnly = await prisma.round.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoundCreateManyAndReturnArgs>(args?: SelectSubset<T, RoundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Round.
     * @param {RoundDeleteArgs} args - Arguments to delete one Round.
     * @example
     * // Delete one Round
     * const Round = await prisma.round.delete({
     *   where: {
     *     // ... filter to delete one Round
     *   }
     * })
     * 
     */
    delete<T extends RoundDeleteArgs>(args: SelectSubset<T, RoundDeleteArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Round.
     * @param {RoundUpdateArgs} args - Arguments to update one Round.
     * @example
     * // Update one Round
     * const round = await prisma.round.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoundUpdateArgs>(args: SelectSubset<T, RoundUpdateArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rounds.
     * @param {RoundDeleteManyArgs} args - Arguments to filter Rounds to delete.
     * @example
     * // Delete a few Rounds
     * const { count } = await prisma.round.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoundDeleteManyArgs>(args?: SelectSubset<T, RoundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rounds
     * const round = await prisma.round.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoundUpdateManyArgs>(args: SelectSubset<T, RoundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rounds and returns the data updated in the database.
     * @param {RoundUpdateManyAndReturnArgs} args - Arguments to update many Rounds.
     * @example
     * // Update many Rounds
     * const round = await prisma.round.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rounds and only return the `id`
     * const roundWithIdOnly = await prisma.round.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoundUpdateManyAndReturnArgs>(args: SelectSubset<T, RoundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Round.
     * @param {RoundUpsertArgs} args - Arguments to update or create a Round.
     * @example
     * // Update or create a Round
     * const round = await prisma.round.upsert({
     *   create: {
     *     // ... data to create a Round
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Round we want to update
     *   }
     * })
     */
    upsert<T extends RoundUpsertArgs>(args: SelectSubset<T, RoundUpsertArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundCountArgs} args - Arguments to filter Rounds to count.
     * @example
     * // Count the number of Rounds
     * const count = await prisma.round.count({
     *   where: {
     *     // ... the filter for the Rounds we want to count
     *   }
     * })
    **/
    count<T extends RoundCountArgs>(
      args?: Subset<T, RoundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Round.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoundAggregateArgs>(args: Subset<T, RoundAggregateArgs>): Prisma.PrismaPromise<GetRoundAggregateType<T>>

    /**
     * Group by Round.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundGroupByArgs} args - Group by arguments.
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
      T extends RoundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoundGroupByArgs['orderBy'] }
        : { orderBy?: RoundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Round model
   */
  readonly fields: RoundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Round.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entries<T extends Round$entriesArgs<ExtArgs> = {}>(args?: Subset<T, Round$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Round model
   */
  interface RoundFieldRefs {
    readonly id: FieldRef<"Round", 'String'>
    readonly createdAt: FieldRef<"Round", 'DateTime'>
    readonly roundNo: FieldRef<"Round", 'Int'>
    readonly startedAt: FieldRef<"Round", 'DateTime'>
    readonly endsAt: FieldRef<"Round", 'DateTime'>
    readonly status: FieldRef<"Round", 'RoundStatus'>
  }
    

  // Custom InputTypes
  /**
   * Round findUnique
   */
  export type RoundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round findUniqueOrThrow
   */
  export type RoundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round findFirst
   */
  export type RoundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rounds.
     */
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Round findFirstOrThrow
   */
  export type RoundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rounds.
     */
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Round findMany
   */
  export type RoundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Rounds to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rounds.
     */
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Round create
   */
  export type RoundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * The data needed to create a Round.
     */
    data: XOR<RoundCreateInput, RoundUncheckedCreateInput>
  }

  /**
   * Round createMany
   */
  export type RoundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rounds.
     */
    data: RoundCreateManyInput | RoundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Round createManyAndReturn
   */
  export type RoundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * The data used to create many Rounds.
     */
    data: RoundCreateManyInput | RoundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Round update
   */
  export type RoundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * The data needed to update a Round.
     */
    data: XOR<RoundUpdateInput, RoundUncheckedUpdateInput>
    /**
     * Choose, which Round to update.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round updateMany
   */
  export type RoundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rounds.
     */
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyInput>
    /**
     * Filter which Rounds to update
     */
    where?: RoundWhereInput
    /**
     * Limit how many Rounds to update.
     */
    limit?: number
  }

  /**
   * Round updateManyAndReturn
   */
  export type RoundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * The data used to update Rounds.
     */
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyInput>
    /**
     * Filter which Rounds to update
     */
    where?: RoundWhereInput
    /**
     * Limit how many Rounds to update.
     */
    limit?: number
  }

  /**
   * Round upsert
   */
  export type RoundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * The filter to search for the Round to update in case it exists.
     */
    where: RoundWhereUniqueInput
    /**
     * In case the Round found by the `where` argument doesn't exist, create a new Round with this data.
     */
    create: XOR<RoundCreateInput, RoundUncheckedCreateInput>
    /**
     * In case the Round was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoundUpdateInput, RoundUncheckedUpdateInput>
  }

  /**
   * Round delete
   */
  export type RoundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter which Round to delete.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round deleteMany
   */
  export type RoundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rounds to delete
     */
    where?: RoundWhereInput
    /**
     * Limit how many Rounds to delete.
     */
    limit?: number
  }

  /**
   * Round.entries
   */
  export type Round$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoundEntry
     */
    select?: RoundEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoundEntry
     */
    omit?: RoundEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundEntryInclude<ExtArgs> | null
    where?: RoundEntryWhereInput
    orderBy?: RoundEntryOrderByWithRelationInput | RoundEntryOrderByWithRelationInput[]
    cursor?: RoundEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoundEntryScalarFieldEnum | RoundEntryScalarFieldEnum[]
  }

  /**
   * Round without action
   */
  export type RoundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
  }


  /**
   * Model RoundEntry
   */

  export type AggregateRoundEntry = {
    _count: RoundEntryCountAggregateOutputType | null
    _avg: RoundEntryAvgAggregateOutputType | null
    _sum: RoundEntrySumAggregateOutputType | null
    _min: RoundEntryMinAggregateOutputType | null
    _max: RoundEntryMaxAggregateOutputType | null
  }

  export type RoundEntryAvgAggregateOutputType = {
    amount: Decimal | null
    profit: Decimal | null
  }

  export type RoundEntrySumAggregateOutputType = {
    amount: Decimal | null
    profit: Decimal | null
  }

  export type RoundEntryMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    roundId: string | null
    userId: string | null
    coin: $Enums.Stablecoin | null
    amount: Decimal | null
    profit: Decimal | null
    settledAt: Date | null
  }

  export type RoundEntryMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    roundId: string | null
    userId: string | null
    coin: $Enums.Stablecoin | null
    amount: Decimal | null
    profit: Decimal | null
    settledAt: Date | null
  }

  export type RoundEntryCountAggregateOutputType = {
    id: number
    createdAt: number
    roundId: number
    userId: number
    coin: number
    amount: number
    profit: number
    settledAt: number
    _all: number
  }


  export type RoundEntryAvgAggregateInputType = {
    amount?: true
    profit?: true
  }

  export type RoundEntrySumAggregateInputType = {
    amount?: true
    profit?: true
  }

  export type RoundEntryMinAggregateInputType = {
    id?: true
    createdAt?: true
    roundId?: true
    userId?: true
    coin?: true
    amount?: true
    profit?: true
    settledAt?: true
  }

  export type RoundEntryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    roundId?: true
    userId?: true
    coin?: true
    amount?: true
    profit?: true
    settledAt?: true
  }

  export type RoundEntryCountAggregateInputType = {
    id?: true
    createdAt?: true
    roundId?: true
    userId?: true
    coin?: true
    amount?: true
    profit?: true
    settledAt?: true
    _all?: true
  }

  export type RoundEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoundEntry to aggregate.
     */
    where?: RoundEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundEntries to fetch.
     */
    orderBy?: RoundEntryOrderByWithRelationInput | RoundEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoundEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoundEntries
    **/
    _count?: true | RoundEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoundEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoundEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoundEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoundEntryMaxAggregateInputType
  }

  export type GetRoundEntryAggregateType<T extends RoundEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateRoundEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoundEntry[P]>
      : GetScalarType<T[P], AggregateRoundEntry[P]>
  }




  export type RoundEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoundEntryWhereInput
    orderBy?: RoundEntryOrderByWithAggregationInput | RoundEntryOrderByWithAggregationInput[]
    by: RoundEntryScalarFieldEnum[] | RoundEntryScalarFieldEnum
    having?: RoundEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoundEntryCountAggregateInputType | true
    _avg?: RoundEntryAvgAggregateInputType
    _sum?: RoundEntrySumAggregateInputType
    _min?: RoundEntryMinAggregateInputType
    _max?: RoundEntryMaxAggregateInputType
  }

  export type RoundEntryGroupByOutputType = {
    id: string
    createdAt: Date
    roundId: string
    userId: string
    coin: $Enums.Stablecoin
    amount: Decimal
    profit: Decimal
    settledAt: Date | null
    _count: RoundEntryCountAggregateOutputType | null
    _avg: RoundEntryAvgAggregateOutputType | null
    _sum: RoundEntrySumAggregateOutputType | null
    _min: RoundEntryMinAggregateOutputType | null
    _max: RoundEntryMaxAggregateOutputType | null
  }

  type GetRoundEntryGroupByPayload<T extends RoundEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoundEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoundEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoundEntryGroupByOutputType[P]>
            : GetScalarType<T[P], RoundEntryGroupByOutputType[P]>
        }
      >
    >


  export type RoundEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    roundId?: boolean
    userId?: boolean
    coin?: boolean
    amount?: boolean
    profit?: boolean
    settledAt?: boolean
    round?: boolean | RoundDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roundEntry"]>

  export type RoundEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    roundId?: boolean
    userId?: boolean
    coin?: boolean
    amount?: boolean
    profit?: boolean
    settledAt?: boolean
    round?: boolean | RoundDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roundEntry"]>

  export type RoundEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    roundId?: boolean
    userId?: boolean
    coin?: boolean
    amount?: boolean
    profit?: boolean
    settledAt?: boolean
    round?: boolean | RoundDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roundEntry"]>

  export type RoundEntrySelectScalar = {
    id?: boolean
    createdAt?: boolean
    roundId?: boolean
    userId?: boolean
    coin?: boolean
    amount?: boolean
    profit?: boolean
    settledAt?: boolean
  }

  export type RoundEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "roundId" | "userId" | "coin" | "amount" | "profit" | "settledAt", ExtArgs["result"]["roundEntry"]>
  export type RoundEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    round?: boolean | RoundDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoundEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    round?: boolean | RoundDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoundEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    round?: boolean | RoundDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoundEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoundEntry"
    objects: {
      round: Prisma.$RoundPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      roundId: string
      userId: string
      coin: $Enums.Stablecoin
      amount: Prisma.Decimal
      profit: Prisma.Decimal
      settledAt: Date | null
    }, ExtArgs["result"]["roundEntry"]>
    composites: {}
  }

  type RoundEntryGetPayload<S extends boolean | null | undefined | RoundEntryDefaultArgs> = $Result.GetResult<Prisma.$RoundEntryPayload, S>

  type RoundEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoundEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoundEntryCountAggregateInputType | true
    }

  export interface RoundEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoundEntry'], meta: { name: 'RoundEntry' } }
    /**
     * Find zero or one RoundEntry that matches the filter.
     * @param {RoundEntryFindUniqueArgs} args - Arguments to find a RoundEntry
     * @example
     * // Get one RoundEntry
     * const roundEntry = await prisma.roundEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoundEntryFindUniqueArgs>(args: SelectSubset<T, RoundEntryFindUniqueArgs<ExtArgs>>): Prisma__RoundEntryClient<$Result.GetResult<Prisma.$RoundEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoundEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoundEntryFindUniqueOrThrowArgs} args - Arguments to find a RoundEntry
     * @example
     * // Get one RoundEntry
     * const roundEntry = await prisma.roundEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoundEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, RoundEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoundEntryClient<$Result.GetResult<Prisma.$RoundEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoundEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundEntryFindFirstArgs} args - Arguments to find a RoundEntry
     * @example
     * // Get one RoundEntry
     * const roundEntry = await prisma.roundEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoundEntryFindFirstArgs>(args?: SelectSubset<T, RoundEntryFindFirstArgs<ExtArgs>>): Prisma__RoundEntryClient<$Result.GetResult<Prisma.$RoundEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoundEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundEntryFindFirstOrThrowArgs} args - Arguments to find a RoundEntry
     * @example
     * // Get one RoundEntry
     * const roundEntry = await prisma.roundEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoundEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, RoundEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoundEntryClient<$Result.GetResult<Prisma.$RoundEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoundEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoundEntries
     * const roundEntries = await prisma.roundEntry.findMany()
     * 
     * // Get first 10 RoundEntries
     * const roundEntries = await prisma.roundEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roundEntryWithIdOnly = await prisma.roundEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoundEntryFindManyArgs>(args?: SelectSubset<T, RoundEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoundEntry.
     * @param {RoundEntryCreateArgs} args - Arguments to create a RoundEntry.
     * @example
     * // Create one RoundEntry
     * const RoundEntry = await prisma.roundEntry.create({
     *   data: {
     *     // ... data to create a RoundEntry
     *   }
     * })
     * 
     */
    create<T extends RoundEntryCreateArgs>(args: SelectSubset<T, RoundEntryCreateArgs<ExtArgs>>): Prisma__RoundEntryClient<$Result.GetResult<Prisma.$RoundEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoundEntries.
     * @param {RoundEntryCreateManyArgs} args - Arguments to create many RoundEntries.
     * @example
     * // Create many RoundEntries
     * const roundEntry = await prisma.roundEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoundEntryCreateManyArgs>(args?: SelectSubset<T, RoundEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoundEntries and returns the data saved in the database.
     * @param {RoundEntryCreateManyAndReturnArgs} args - Arguments to create many RoundEntries.
     * @example
     * // Create many RoundEntries
     * const roundEntry = await prisma.roundEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoundEntries and only return the `id`
     * const roundEntryWithIdOnly = await prisma.roundEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoundEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, RoundEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoundEntry.
     * @param {RoundEntryDeleteArgs} args - Arguments to delete one RoundEntry.
     * @example
     * // Delete one RoundEntry
     * const RoundEntry = await prisma.roundEntry.delete({
     *   where: {
     *     // ... filter to delete one RoundEntry
     *   }
     * })
     * 
     */
    delete<T extends RoundEntryDeleteArgs>(args: SelectSubset<T, RoundEntryDeleteArgs<ExtArgs>>): Prisma__RoundEntryClient<$Result.GetResult<Prisma.$RoundEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoundEntry.
     * @param {RoundEntryUpdateArgs} args - Arguments to update one RoundEntry.
     * @example
     * // Update one RoundEntry
     * const roundEntry = await prisma.roundEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoundEntryUpdateArgs>(args: SelectSubset<T, RoundEntryUpdateArgs<ExtArgs>>): Prisma__RoundEntryClient<$Result.GetResult<Prisma.$RoundEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoundEntries.
     * @param {RoundEntryDeleteManyArgs} args - Arguments to filter RoundEntries to delete.
     * @example
     * // Delete a few RoundEntries
     * const { count } = await prisma.roundEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoundEntryDeleteManyArgs>(args?: SelectSubset<T, RoundEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoundEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoundEntries
     * const roundEntry = await prisma.roundEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoundEntryUpdateManyArgs>(args: SelectSubset<T, RoundEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoundEntries and returns the data updated in the database.
     * @param {RoundEntryUpdateManyAndReturnArgs} args - Arguments to update many RoundEntries.
     * @example
     * // Update many RoundEntries
     * const roundEntry = await prisma.roundEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoundEntries and only return the `id`
     * const roundEntryWithIdOnly = await prisma.roundEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoundEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, RoundEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoundEntry.
     * @param {RoundEntryUpsertArgs} args - Arguments to update or create a RoundEntry.
     * @example
     * // Update or create a RoundEntry
     * const roundEntry = await prisma.roundEntry.upsert({
     *   create: {
     *     // ... data to create a RoundEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoundEntry we want to update
     *   }
     * })
     */
    upsert<T extends RoundEntryUpsertArgs>(args: SelectSubset<T, RoundEntryUpsertArgs<ExtArgs>>): Prisma__RoundEntryClient<$Result.GetResult<Prisma.$RoundEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoundEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundEntryCountArgs} args - Arguments to filter RoundEntries to count.
     * @example
     * // Count the number of RoundEntries
     * const count = await prisma.roundEntry.count({
     *   where: {
     *     // ... the filter for the RoundEntries we want to count
     *   }
     * })
    **/
    count<T extends RoundEntryCountArgs>(
      args?: Subset<T, RoundEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoundEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoundEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoundEntryAggregateArgs>(args: Subset<T, RoundEntryAggregateArgs>): Prisma.PrismaPromise<GetRoundEntryAggregateType<T>>

    /**
     * Group by RoundEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundEntryGroupByArgs} args - Group by arguments.
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
      T extends RoundEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoundEntryGroupByArgs['orderBy'] }
        : { orderBy?: RoundEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoundEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoundEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoundEntry model
   */
  readonly fields: RoundEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoundEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoundEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    round<T extends RoundDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoundDefaultArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoundEntry model
   */
  interface RoundEntryFieldRefs {
    readonly id: FieldRef<"RoundEntry", 'String'>
    readonly createdAt: FieldRef<"RoundEntry", 'DateTime'>
    readonly roundId: FieldRef<"RoundEntry", 'String'>
    readonly userId: FieldRef<"RoundEntry", 'String'>
    readonly coin: FieldRef<"RoundEntry", 'Stablecoin'>
    readonly amount: FieldRef<"RoundEntry", 'Decimal'>
    readonly profit: FieldRef<"RoundEntry", 'Decimal'>
    readonly settledAt: FieldRef<"RoundEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoundEntry findUnique
   */
  export type RoundEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoundEntry
     */
    select?: RoundEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoundEntry
     */
    omit?: RoundEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundEntryInclude<ExtArgs> | null
    /**
     * Filter, which RoundEntry to fetch.
     */
    where: RoundEntryWhereUniqueInput
  }

  /**
   * RoundEntry findUniqueOrThrow
   */
  export type RoundEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoundEntry
     */
    select?: RoundEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoundEntry
     */
    omit?: RoundEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundEntryInclude<ExtArgs> | null
    /**
     * Filter, which RoundEntry to fetch.
     */
    where: RoundEntryWhereUniqueInput
  }

  /**
   * RoundEntry findFirst
   */
  export type RoundEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoundEntry
     */
    select?: RoundEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoundEntry
     */
    omit?: RoundEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundEntryInclude<ExtArgs> | null
    /**
     * Filter, which RoundEntry to fetch.
     */
    where?: RoundEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundEntries to fetch.
     */
    orderBy?: RoundEntryOrderByWithRelationInput | RoundEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoundEntries.
     */
    cursor?: RoundEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoundEntries.
     */
    distinct?: RoundEntryScalarFieldEnum | RoundEntryScalarFieldEnum[]
  }

  /**
   * RoundEntry findFirstOrThrow
   */
  export type RoundEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoundEntry
     */
    select?: RoundEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoundEntry
     */
    omit?: RoundEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundEntryInclude<ExtArgs> | null
    /**
     * Filter, which RoundEntry to fetch.
     */
    where?: RoundEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundEntries to fetch.
     */
    orderBy?: RoundEntryOrderByWithRelationInput | RoundEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoundEntries.
     */
    cursor?: RoundEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoundEntries.
     */
    distinct?: RoundEntryScalarFieldEnum | RoundEntryScalarFieldEnum[]
  }

  /**
   * RoundEntry findMany
   */
  export type RoundEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoundEntry
     */
    select?: RoundEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoundEntry
     */
    omit?: RoundEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundEntryInclude<ExtArgs> | null
    /**
     * Filter, which RoundEntries to fetch.
     */
    where?: RoundEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundEntries to fetch.
     */
    orderBy?: RoundEntryOrderByWithRelationInput | RoundEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoundEntries.
     */
    cursor?: RoundEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoundEntries.
     */
    distinct?: RoundEntryScalarFieldEnum | RoundEntryScalarFieldEnum[]
  }

  /**
   * RoundEntry create
   */
  export type RoundEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoundEntry
     */
    select?: RoundEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoundEntry
     */
    omit?: RoundEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a RoundEntry.
     */
    data: XOR<RoundEntryCreateInput, RoundEntryUncheckedCreateInput>
  }

  /**
   * RoundEntry createMany
   */
  export type RoundEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoundEntries.
     */
    data: RoundEntryCreateManyInput | RoundEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoundEntry createManyAndReturn
   */
  export type RoundEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoundEntry
     */
    select?: RoundEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoundEntry
     */
    omit?: RoundEntryOmit<ExtArgs> | null
    /**
     * The data used to create many RoundEntries.
     */
    data: RoundEntryCreateManyInput | RoundEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoundEntry update
   */
  export type RoundEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoundEntry
     */
    select?: RoundEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoundEntry
     */
    omit?: RoundEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a RoundEntry.
     */
    data: XOR<RoundEntryUpdateInput, RoundEntryUncheckedUpdateInput>
    /**
     * Choose, which RoundEntry to update.
     */
    where: RoundEntryWhereUniqueInput
  }

  /**
   * RoundEntry updateMany
   */
  export type RoundEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoundEntries.
     */
    data: XOR<RoundEntryUpdateManyMutationInput, RoundEntryUncheckedUpdateManyInput>
    /**
     * Filter which RoundEntries to update
     */
    where?: RoundEntryWhereInput
    /**
     * Limit how many RoundEntries to update.
     */
    limit?: number
  }

  /**
   * RoundEntry updateManyAndReturn
   */
  export type RoundEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoundEntry
     */
    select?: RoundEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoundEntry
     */
    omit?: RoundEntryOmit<ExtArgs> | null
    /**
     * The data used to update RoundEntries.
     */
    data: XOR<RoundEntryUpdateManyMutationInput, RoundEntryUncheckedUpdateManyInput>
    /**
     * Filter which RoundEntries to update
     */
    where?: RoundEntryWhereInput
    /**
     * Limit how many RoundEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoundEntry upsert
   */
  export type RoundEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoundEntry
     */
    select?: RoundEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoundEntry
     */
    omit?: RoundEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the RoundEntry to update in case it exists.
     */
    where: RoundEntryWhereUniqueInput
    /**
     * In case the RoundEntry found by the `where` argument doesn't exist, create a new RoundEntry with this data.
     */
    create: XOR<RoundEntryCreateInput, RoundEntryUncheckedCreateInput>
    /**
     * In case the RoundEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoundEntryUpdateInput, RoundEntryUncheckedUpdateInput>
  }

  /**
   * RoundEntry delete
   */
  export type RoundEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoundEntry
     */
    select?: RoundEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoundEntry
     */
    omit?: RoundEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundEntryInclude<ExtArgs> | null
    /**
     * Filter which RoundEntry to delete.
     */
    where: RoundEntryWhereUniqueInput
  }

  /**
   * RoundEntry deleteMany
   */
  export type RoundEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoundEntries to delete
     */
    where?: RoundEntryWhereInput
    /**
     * Limit how many RoundEntries to delete.
     */
    limit?: number
  }

  /**
   * RoundEntry without action
   */
  export type RoundEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoundEntry
     */
    select?: RoundEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoundEntry
     */
    omit?: RoundEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundEntryInclude<ExtArgs> | null
  }


  /**
   * Model WithdrawOrder
   */

  export type AggregateWithdrawOrder = {
    _count: WithdrawOrderCountAggregateOutputType | null
    _avg: WithdrawOrderAvgAggregateOutputType | null
    _sum: WithdrawOrderSumAggregateOutputType | null
    _min: WithdrawOrderMinAggregateOutputType | null
    _max: WithdrawOrderMaxAggregateOutputType | null
  }

  export type WithdrawOrderAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type WithdrawOrderSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type WithdrawOrderMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    orderNo: string | null
    userId: string | null
    chain: $Enums.Chain | null
    coin: $Enums.Stablecoin | null
    amount: Decimal | null
    toAddress: string | null
    kycRef: string | null
    status: $Enums.WithdrawStatus | null
    reviewedBy: string | null
    reviewedAt: Date | null
    reviewNote: string | null
    paidTxHash: string | null
    paidAt: Date | null
  }

  export type WithdrawOrderMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    orderNo: string | null
    userId: string | null
    chain: $Enums.Chain | null
    coin: $Enums.Stablecoin | null
    amount: Decimal | null
    toAddress: string | null
    kycRef: string | null
    status: $Enums.WithdrawStatus | null
    reviewedBy: string | null
    reviewedAt: Date | null
    reviewNote: string | null
    paidTxHash: string | null
    paidAt: Date | null
  }

  export type WithdrawOrderCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    orderNo: number
    userId: number
    chain: number
    coin: number
    amount: number
    toAddress: number
    kycRef: number
    status: number
    reviewedBy: number
    reviewedAt: number
    reviewNote: number
    paidTxHash: number
    paidAt: number
    _all: number
  }


  export type WithdrawOrderAvgAggregateInputType = {
    amount?: true
  }

  export type WithdrawOrderSumAggregateInputType = {
    amount?: true
  }

  export type WithdrawOrderMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    orderNo?: true
    userId?: true
    chain?: true
    coin?: true
    amount?: true
    toAddress?: true
    kycRef?: true
    status?: true
    reviewedBy?: true
    reviewedAt?: true
    reviewNote?: true
    paidTxHash?: true
    paidAt?: true
  }

  export type WithdrawOrderMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    orderNo?: true
    userId?: true
    chain?: true
    coin?: true
    amount?: true
    toAddress?: true
    kycRef?: true
    status?: true
    reviewedBy?: true
    reviewedAt?: true
    reviewNote?: true
    paidTxHash?: true
    paidAt?: true
  }

  export type WithdrawOrderCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    orderNo?: true
    userId?: true
    chain?: true
    coin?: true
    amount?: true
    toAddress?: true
    kycRef?: true
    status?: true
    reviewedBy?: true
    reviewedAt?: true
    reviewNote?: true
    paidTxHash?: true
    paidAt?: true
    _all?: true
  }

  export type WithdrawOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WithdrawOrder to aggregate.
     */
    where?: WithdrawOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawOrders to fetch.
     */
    orderBy?: WithdrawOrderOrderByWithRelationInput | WithdrawOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WithdrawOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WithdrawOrders
    **/
    _count?: true | WithdrawOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WithdrawOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WithdrawOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WithdrawOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WithdrawOrderMaxAggregateInputType
  }

  export type GetWithdrawOrderAggregateType<T extends WithdrawOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateWithdrawOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWithdrawOrder[P]>
      : GetScalarType<T[P], AggregateWithdrawOrder[P]>
  }




  export type WithdrawOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawOrderWhereInput
    orderBy?: WithdrawOrderOrderByWithAggregationInput | WithdrawOrderOrderByWithAggregationInput[]
    by: WithdrawOrderScalarFieldEnum[] | WithdrawOrderScalarFieldEnum
    having?: WithdrawOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WithdrawOrderCountAggregateInputType | true
    _avg?: WithdrawOrderAvgAggregateInputType
    _sum?: WithdrawOrderSumAggregateInputType
    _min?: WithdrawOrderMinAggregateInputType
    _max?: WithdrawOrderMaxAggregateInputType
  }

  export type WithdrawOrderGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    orderNo: string
    userId: string
    chain: $Enums.Chain
    coin: $Enums.Stablecoin
    amount: Decimal
    toAddress: string
    kycRef: string | null
    status: $Enums.WithdrawStatus
    reviewedBy: string | null
    reviewedAt: Date | null
    reviewNote: string | null
    paidTxHash: string | null
    paidAt: Date | null
    _count: WithdrawOrderCountAggregateOutputType | null
    _avg: WithdrawOrderAvgAggregateOutputType | null
    _sum: WithdrawOrderSumAggregateOutputType | null
    _min: WithdrawOrderMinAggregateOutputType | null
    _max: WithdrawOrderMaxAggregateOutputType | null
  }

  type GetWithdrawOrderGroupByPayload<T extends WithdrawOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WithdrawOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WithdrawOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WithdrawOrderGroupByOutputType[P]>
            : GetScalarType<T[P], WithdrawOrderGroupByOutputType[P]>
        }
      >
    >


  export type WithdrawOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderNo?: boolean
    userId?: boolean
    chain?: boolean
    coin?: boolean
    amount?: boolean
    toAddress?: boolean
    kycRef?: boolean
    status?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    reviewNote?: boolean
    paidTxHash?: boolean
    paidAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawOrder"]>

  export type WithdrawOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderNo?: boolean
    userId?: boolean
    chain?: boolean
    coin?: boolean
    amount?: boolean
    toAddress?: boolean
    kycRef?: boolean
    status?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    reviewNote?: boolean
    paidTxHash?: boolean
    paidAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawOrder"]>

  export type WithdrawOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderNo?: boolean
    userId?: boolean
    chain?: boolean
    coin?: boolean
    amount?: boolean
    toAddress?: boolean
    kycRef?: boolean
    status?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    reviewNote?: boolean
    paidTxHash?: boolean
    paidAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawOrder"]>

  export type WithdrawOrderSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderNo?: boolean
    userId?: boolean
    chain?: boolean
    coin?: boolean
    amount?: boolean
    toAddress?: boolean
    kycRef?: boolean
    status?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    reviewNote?: boolean
    paidTxHash?: boolean
    paidAt?: boolean
  }

  export type WithdrawOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "orderNo" | "userId" | "chain" | "coin" | "amount" | "toAddress" | "kycRef" | "status" | "reviewedBy" | "reviewedAt" | "reviewNote" | "paidTxHash" | "paidAt", ExtArgs["result"]["withdrawOrder"]>
  export type WithdrawOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WithdrawOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WithdrawOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WithdrawOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WithdrawOrder"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      orderNo: string
      userId: string
      chain: $Enums.Chain
      coin: $Enums.Stablecoin
      amount: Prisma.Decimal
      toAddress: string
      kycRef: string | null
      status: $Enums.WithdrawStatus
      reviewedBy: string | null
      reviewedAt: Date | null
      reviewNote: string | null
      paidTxHash: string | null
      paidAt: Date | null
    }, ExtArgs["result"]["withdrawOrder"]>
    composites: {}
  }

  type WithdrawOrderGetPayload<S extends boolean | null | undefined | WithdrawOrderDefaultArgs> = $Result.GetResult<Prisma.$WithdrawOrderPayload, S>

  type WithdrawOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WithdrawOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WithdrawOrderCountAggregateInputType | true
    }

  export interface WithdrawOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WithdrawOrder'], meta: { name: 'WithdrawOrder' } }
    /**
     * Find zero or one WithdrawOrder that matches the filter.
     * @param {WithdrawOrderFindUniqueArgs} args - Arguments to find a WithdrawOrder
     * @example
     * // Get one WithdrawOrder
     * const withdrawOrder = await prisma.withdrawOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WithdrawOrderFindUniqueArgs>(args: SelectSubset<T, WithdrawOrderFindUniqueArgs<ExtArgs>>): Prisma__WithdrawOrderClient<$Result.GetResult<Prisma.$WithdrawOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WithdrawOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WithdrawOrderFindUniqueOrThrowArgs} args - Arguments to find a WithdrawOrder
     * @example
     * // Get one WithdrawOrder
     * const withdrawOrder = await prisma.withdrawOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WithdrawOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, WithdrawOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WithdrawOrderClient<$Result.GetResult<Prisma.$WithdrawOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WithdrawOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawOrderFindFirstArgs} args - Arguments to find a WithdrawOrder
     * @example
     * // Get one WithdrawOrder
     * const withdrawOrder = await prisma.withdrawOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WithdrawOrderFindFirstArgs>(args?: SelectSubset<T, WithdrawOrderFindFirstArgs<ExtArgs>>): Prisma__WithdrawOrderClient<$Result.GetResult<Prisma.$WithdrawOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WithdrawOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawOrderFindFirstOrThrowArgs} args - Arguments to find a WithdrawOrder
     * @example
     * // Get one WithdrawOrder
     * const withdrawOrder = await prisma.withdrawOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WithdrawOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, WithdrawOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__WithdrawOrderClient<$Result.GetResult<Prisma.$WithdrawOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WithdrawOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WithdrawOrders
     * const withdrawOrders = await prisma.withdrawOrder.findMany()
     * 
     * // Get first 10 WithdrawOrders
     * const withdrawOrders = await prisma.withdrawOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const withdrawOrderWithIdOnly = await prisma.withdrawOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WithdrawOrderFindManyArgs>(args?: SelectSubset<T, WithdrawOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WithdrawOrder.
     * @param {WithdrawOrderCreateArgs} args - Arguments to create a WithdrawOrder.
     * @example
     * // Create one WithdrawOrder
     * const WithdrawOrder = await prisma.withdrawOrder.create({
     *   data: {
     *     // ... data to create a WithdrawOrder
     *   }
     * })
     * 
     */
    create<T extends WithdrawOrderCreateArgs>(args: SelectSubset<T, WithdrawOrderCreateArgs<ExtArgs>>): Prisma__WithdrawOrderClient<$Result.GetResult<Prisma.$WithdrawOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WithdrawOrders.
     * @param {WithdrawOrderCreateManyArgs} args - Arguments to create many WithdrawOrders.
     * @example
     * // Create many WithdrawOrders
     * const withdrawOrder = await prisma.withdrawOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WithdrawOrderCreateManyArgs>(args?: SelectSubset<T, WithdrawOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WithdrawOrders and returns the data saved in the database.
     * @param {WithdrawOrderCreateManyAndReturnArgs} args - Arguments to create many WithdrawOrders.
     * @example
     * // Create many WithdrawOrders
     * const withdrawOrder = await prisma.withdrawOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WithdrawOrders and only return the `id`
     * const withdrawOrderWithIdOnly = await prisma.withdrawOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WithdrawOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, WithdrawOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WithdrawOrder.
     * @param {WithdrawOrderDeleteArgs} args - Arguments to delete one WithdrawOrder.
     * @example
     * // Delete one WithdrawOrder
     * const WithdrawOrder = await prisma.withdrawOrder.delete({
     *   where: {
     *     // ... filter to delete one WithdrawOrder
     *   }
     * })
     * 
     */
    delete<T extends WithdrawOrderDeleteArgs>(args: SelectSubset<T, WithdrawOrderDeleteArgs<ExtArgs>>): Prisma__WithdrawOrderClient<$Result.GetResult<Prisma.$WithdrawOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WithdrawOrder.
     * @param {WithdrawOrderUpdateArgs} args - Arguments to update one WithdrawOrder.
     * @example
     * // Update one WithdrawOrder
     * const withdrawOrder = await prisma.withdrawOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WithdrawOrderUpdateArgs>(args: SelectSubset<T, WithdrawOrderUpdateArgs<ExtArgs>>): Prisma__WithdrawOrderClient<$Result.GetResult<Prisma.$WithdrawOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WithdrawOrders.
     * @param {WithdrawOrderDeleteManyArgs} args - Arguments to filter WithdrawOrders to delete.
     * @example
     * // Delete a few WithdrawOrders
     * const { count } = await prisma.withdrawOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WithdrawOrderDeleteManyArgs>(args?: SelectSubset<T, WithdrawOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WithdrawOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WithdrawOrders
     * const withdrawOrder = await prisma.withdrawOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WithdrawOrderUpdateManyArgs>(args: SelectSubset<T, WithdrawOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WithdrawOrders and returns the data updated in the database.
     * @param {WithdrawOrderUpdateManyAndReturnArgs} args - Arguments to update many WithdrawOrders.
     * @example
     * // Update many WithdrawOrders
     * const withdrawOrder = await prisma.withdrawOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WithdrawOrders and only return the `id`
     * const withdrawOrderWithIdOnly = await prisma.withdrawOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WithdrawOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, WithdrawOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WithdrawOrder.
     * @param {WithdrawOrderUpsertArgs} args - Arguments to update or create a WithdrawOrder.
     * @example
     * // Update or create a WithdrawOrder
     * const withdrawOrder = await prisma.withdrawOrder.upsert({
     *   create: {
     *     // ... data to create a WithdrawOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WithdrawOrder we want to update
     *   }
     * })
     */
    upsert<T extends WithdrawOrderUpsertArgs>(args: SelectSubset<T, WithdrawOrderUpsertArgs<ExtArgs>>): Prisma__WithdrawOrderClient<$Result.GetResult<Prisma.$WithdrawOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WithdrawOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawOrderCountArgs} args - Arguments to filter WithdrawOrders to count.
     * @example
     * // Count the number of WithdrawOrders
     * const count = await prisma.withdrawOrder.count({
     *   where: {
     *     // ... the filter for the WithdrawOrders we want to count
     *   }
     * })
    **/
    count<T extends WithdrawOrderCountArgs>(
      args?: Subset<T, WithdrawOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WithdrawOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WithdrawOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WithdrawOrderAggregateArgs>(args: Subset<T, WithdrawOrderAggregateArgs>): Prisma.PrismaPromise<GetWithdrawOrderAggregateType<T>>

    /**
     * Group by WithdrawOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawOrderGroupByArgs} args - Group by arguments.
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
      T extends WithdrawOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WithdrawOrderGroupByArgs['orderBy'] }
        : { orderBy?: WithdrawOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WithdrawOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWithdrawOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WithdrawOrder model
   */
  readonly fields: WithdrawOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WithdrawOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WithdrawOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WithdrawOrder model
   */
  interface WithdrawOrderFieldRefs {
    readonly id: FieldRef<"WithdrawOrder", 'String'>
    readonly createdAt: FieldRef<"WithdrawOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"WithdrawOrder", 'DateTime'>
    readonly orderNo: FieldRef<"WithdrawOrder", 'String'>
    readonly userId: FieldRef<"WithdrawOrder", 'String'>
    readonly chain: FieldRef<"WithdrawOrder", 'Chain'>
    readonly coin: FieldRef<"WithdrawOrder", 'Stablecoin'>
    readonly amount: FieldRef<"WithdrawOrder", 'Decimal'>
    readonly toAddress: FieldRef<"WithdrawOrder", 'String'>
    readonly kycRef: FieldRef<"WithdrawOrder", 'String'>
    readonly status: FieldRef<"WithdrawOrder", 'WithdrawStatus'>
    readonly reviewedBy: FieldRef<"WithdrawOrder", 'String'>
    readonly reviewedAt: FieldRef<"WithdrawOrder", 'DateTime'>
    readonly reviewNote: FieldRef<"WithdrawOrder", 'String'>
    readonly paidTxHash: FieldRef<"WithdrawOrder", 'String'>
    readonly paidAt: FieldRef<"WithdrawOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WithdrawOrder findUnique
   */
  export type WithdrawOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawOrder
     */
    select?: WithdrawOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawOrder
     */
    omit?: WithdrawOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawOrderInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawOrder to fetch.
     */
    where: WithdrawOrderWhereUniqueInput
  }

  /**
   * WithdrawOrder findUniqueOrThrow
   */
  export type WithdrawOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawOrder
     */
    select?: WithdrawOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawOrder
     */
    omit?: WithdrawOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawOrderInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawOrder to fetch.
     */
    where: WithdrawOrderWhereUniqueInput
  }

  /**
   * WithdrawOrder findFirst
   */
  export type WithdrawOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawOrder
     */
    select?: WithdrawOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawOrder
     */
    omit?: WithdrawOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawOrderInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawOrder to fetch.
     */
    where?: WithdrawOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawOrders to fetch.
     */
    orderBy?: WithdrawOrderOrderByWithRelationInput | WithdrawOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WithdrawOrders.
     */
    cursor?: WithdrawOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WithdrawOrders.
     */
    distinct?: WithdrawOrderScalarFieldEnum | WithdrawOrderScalarFieldEnum[]
  }

  /**
   * WithdrawOrder findFirstOrThrow
   */
  export type WithdrawOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawOrder
     */
    select?: WithdrawOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawOrder
     */
    omit?: WithdrawOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawOrderInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawOrder to fetch.
     */
    where?: WithdrawOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawOrders to fetch.
     */
    orderBy?: WithdrawOrderOrderByWithRelationInput | WithdrawOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WithdrawOrders.
     */
    cursor?: WithdrawOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WithdrawOrders.
     */
    distinct?: WithdrawOrderScalarFieldEnum | WithdrawOrderScalarFieldEnum[]
  }

  /**
   * WithdrawOrder findMany
   */
  export type WithdrawOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawOrder
     */
    select?: WithdrawOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawOrder
     */
    omit?: WithdrawOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawOrderInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawOrders to fetch.
     */
    where?: WithdrawOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawOrders to fetch.
     */
    orderBy?: WithdrawOrderOrderByWithRelationInput | WithdrawOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WithdrawOrders.
     */
    cursor?: WithdrawOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WithdrawOrders.
     */
    distinct?: WithdrawOrderScalarFieldEnum | WithdrawOrderScalarFieldEnum[]
  }

  /**
   * WithdrawOrder create
   */
  export type WithdrawOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawOrder
     */
    select?: WithdrawOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawOrder
     */
    omit?: WithdrawOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a WithdrawOrder.
     */
    data: XOR<WithdrawOrderCreateInput, WithdrawOrderUncheckedCreateInput>
  }

  /**
   * WithdrawOrder createMany
   */
  export type WithdrawOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WithdrawOrders.
     */
    data: WithdrawOrderCreateManyInput | WithdrawOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WithdrawOrder createManyAndReturn
   */
  export type WithdrawOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawOrder
     */
    select?: WithdrawOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawOrder
     */
    omit?: WithdrawOrderOmit<ExtArgs> | null
    /**
     * The data used to create many WithdrawOrders.
     */
    data: WithdrawOrderCreateManyInput | WithdrawOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WithdrawOrder update
   */
  export type WithdrawOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawOrder
     */
    select?: WithdrawOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawOrder
     */
    omit?: WithdrawOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a WithdrawOrder.
     */
    data: XOR<WithdrawOrderUpdateInput, WithdrawOrderUncheckedUpdateInput>
    /**
     * Choose, which WithdrawOrder to update.
     */
    where: WithdrawOrderWhereUniqueInput
  }

  /**
   * WithdrawOrder updateMany
   */
  export type WithdrawOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WithdrawOrders.
     */
    data: XOR<WithdrawOrderUpdateManyMutationInput, WithdrawOrderUncheckedUpdateManyInput>
    /**
     * Filter which WithdrawOrders to update
     */
    where?: WithdrawOrderWhereInput
    /**
     * Limit how many WithdrawOrders to update.
     */
    limit?: number
  }

  /**
   * WithdrawOrder updateManyAndReturn
   */
  export type WithdrawOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawOrder
     */
    select?: WithdrawOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawOrder
     */
    omit?: WithdrawOrderOmit<ExtArgs> | null
    /**
     * The data used to update WithdrawOrders.
     */
    data: XOR<WithdrawOrderUpdateManyMutationInput, WithdrawOrderUncheckedUpdateManyInput>
    /**
     * Filter which WithdrawOrders to update
     */
    where?: WithdrawOrderWhereInput
    /**
     * Limit how many WithdrawOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WithdrawOrder upsert
   */
  export type WithdrawOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawOrder
     */
    select?: WithdrawOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawOrder
     */
    omit?: WithdrawOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the WithdrawOrder to update in case it exists.
     */
    where: WithdrawOrderWhereUniqueInput
    /**
     * In case the WithdrawOrder found by the `where` argument doesn't exist, create a new WithdrawOrder with this data.
     */
    create: XOR<WithdrawOrderCreateInput, WithdrawOrderUncheckedCreateInput>
    /**
     * In case the WithdrawOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WithdrawOrderUpdateInput, WithdrawOrderUncheckedUpdateInput>
  }

  /**
   * WithdrawOrder delete
   */
  export type WithdrawOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawOrder
     */
    select?: WithdrawOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawOrder
     */
    omit?: WithdrawOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawOrderInclude<ExtArgs> | null
    /**
     * Filter which WithdrawOrder to delete.
     */
    where: WithdrawOrderWhereUniqueInput
  }

  /**
   * WithdrawOrder deleteMany
   */
  export type WithdrawOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WithdrawOrders to delete
     */
    where?: WithdrawOrderWhereInput
    /**
     * Limit how many WithdrawOrders to delete.
     */
    limit?: number
  }

  /**
   * WithdrawOrder without action
   */
  export type WithdrawOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawOrder
     */
    select?: WithdrawOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawOrder
     */
    omit?: WithdrawOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawOrderInclude<ExtArgs> | null
  }


  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    passwordHash: number
    role: number
    _all: number
  }


  export type AdminUserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    passwordHash?: true
    role?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    passwordHash?: true
    role?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    passwordHash?: true
    role?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    passwordHash: string
    role: $Enums.Role
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "email" | "passwordHash" | "role", ExtArgs["result"]["adminUser"]>

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      email: string
      passwordHash: string
      role: $Enums.Role
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers and returns the data updated in the database.
     * @param {AdminUserUpdateManyAndReturnArgs} args - Arguments to update many AdminUsers.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
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
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'String'>
    readonly createdAt: FieldRef<"AdminUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminUser", 'DateTime'>
    readonly email: FieldRef<"AdminUser", 'String'>
    readonly passwordHash: FieldRef<"AdminUser", 'String'>
    readonly role: FieldRef<"AdminUser", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser updateManyAndReturn
   */
  export type AdminUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
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
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    walletAddress: 'walletAddress',
    balanceUsdc: 'balanceUsdc',
    balanceUsdt: 'balanceUsdt',
    dailyQuotaUsed: 'dailyQuotaUsed',
    timesBalance: 'timesBalance',
    quotaResetAt: 'quotaResetAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DepositOrderScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    orderNo: 'orderNo',
    chain: 'chain',
    coin: 'coin',
    toAddress: 'toAddress',
    fromAddress: 'fromAddress',
    txHash: 'txHash',
    blockNumber: 'blockNumber',
    amount: 'amount',
    confirmations: 'confirmations',
    requiredConf: 'requiredConf',
    status: 'status',
    confirmedAt: 'confirmedAt',
    userId: 'userId'
  };

  export type DepositOrderScalarFieldEnum = (typeof DepositOrderScalarFieldEnum)[keyof typeof DepositOrderScalarFieldEnum]


  export const ServiceCodeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    code: 'code',
    issuedFor: 'issuedFor',
    expiresAt: 'expiresAt',
    redeemedAt: 'redeemedAt',
    userId: 'userId'
  };

  export type ServiceCodeScalarFieldEnum = (typeof ServiceCodeScalarFieldEnum)[keyof typeof ServiceCodeScalarFieldEnum]


  export const RoundScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    roundNo: 'roundNo',
    startedAt: 'startedAt',
    endsAt: 'endsAt',
    status: 'status'
  };

  export type RoundScalarFieldEnum = (typeof RoundScalarFieldEnum)[keyof typeof RoundScalarFieldEnum]


  export const RoundEntryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    roundId: 'roundId',
    userId: 'userId',
    coin: 'coin',
    amount: 'amount',
    profit: 'profit',
    settledAt: 'settledAt'
  };

  export type RoundEntryScalarFieldEnum = (typeof RoundEntryScalarFieldEnum)[keyof typeof RoundEntryScalarFieldEnum]


  export const WithdrawOrderScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    orderNo: 'orderNo',
    userId: 'userId',
    chain: 'chain',
    coin: 'coin',
    amount: 'amount',
    toAddress: 'toAddress',
    kycRef: 'kycRef',
    status: 'status',
    reviewedBy: 'reviewedBy',
    reviewedAt: 'reviewedAt',
    reviewNote: 'reviewNote',
    paidTxHash: 'paidTxHash',
    paidAt: 'paidAt'
  };

  export type WithdrawOrderScalarFieldEnum = (typeof WithdrawOrderScalarFieldEnum)[keyof typeof WithdrawOrderScalarFieldEnum]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Chain'
   */
  export type EnumChainFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Chain'>
    


  /**
   * Reference to a field of type 'Chain[]'
   */
  export type ListEnumChainFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Chain[]'>
    


  /**
   * Reference to a field of type 'Stablecoin'
   */
  export type EnumStablecoinFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Stablecoin'>
    


  /**
   * Reference to a field of type 'Stablecoin[]'
   */
  export type ListEnumStablecoinFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Stablecoin[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'TxStatus'
   */
  export type EnumTxStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TxStatus'>
    


  /**
   * Reference to a field of type 'TxStatus[]'
   */
  export type ListEnumTxStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TxStatus[]'>
    


  /**
   * Reference to a field of type 'RoundStatus'
   */
  export type EnumRoundStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoundStatus'>
    


  /**
   * Reference to a field of type 'RoundStatus[]'
   */
  export type ListEnumRoundStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoundStatus[]'>
    


  /**
   * Reference to a field of type 'WithdrawStatus'
   */
  export type EnumWithdrawStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WithdrawStatus'>
    


  /**
   * Reference to a field of type 'WithdrawStatus[]'
   */
  export type ListEnumWithdrawStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WithdrawStatus[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    walletAddress?: StringFilter<"User"> | string
    balanceUsdc?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    balanceUsdt?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: IntFilter<"User"> | number
    timesBalance?: IntFilter<"User"> | number
    quotaResetAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deposits?: DepositOrderListRelationFilter
    serviceCodes?: ServiceCodeListRelationFilter
    roundEntries?: RoundEntryListRelationFilter
    withdrawals?: WithdrawOrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    walletAddress?: SortOrder
    balanceUsdc?: SortOrder
    balanceUsdt?: SortOrder
    dailyQuotaUsed?: SortOrder
    timesBalance?: SortOrder
    quotaResetAt?: SortOrderInput | SortOrder
    deposits?: DepositOrderOrderByRelationAggregateInput
    serviceCodes?: ServiceCodeOrderByRelationAggregateInput
    roundEntries?: RoundEntryOrderByRelationAggregateInput
    withdrawals?: WithdrawOrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    walletAddress?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    balanceUsdc?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    balanceUsdt?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: IntFilter<"User"> | number
    timesBalance?: IntFilter<"User"> | number
    quotaResetAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deposits?: DepositOrderListRelationFilter
    serviceCodes?: ServiceCodeListRelationFilter
    roundEntries?: RoundEntryListRelationFilter
    withdrawals?: WithdrawOrderListRelationFilter
  }, "id" | "walletAddress">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    walletAddress?: SortOrder
    balanceUsdc?: SortOrder
    balanceUsdt?: SortOrder
    dailyQuotaUsed?: SortOrder
    timesBalance?: SortOrder
    quotaResetAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    walletAddress?: StringWithAggregatesFilter<"User"> | string
    balanceUsdc?: DecimalWithAggregatesFilter<"User"> | Decimal | DecimalJsLike | number | string
    balanceUsdt?: DecimalWithAggregatesFilter<"User"> | Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: IntWithAggregatesFilter<"User"> | number
    timesBalance?: IntWithAggregatesFilter<"User"> | number
    quotaResetAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type DepositOrderWhereInput = {
    AND?: DepositOrderWhereInput | DepositOrderWhereInput[]
    OR?: DepositOrderWhereInput[]
    NOT?: DepositOrderWhereInput | DepositOrderWhereInput[]
    id?: StringFilter<"DepositOrder"> | string
    createdAt?: DateTimeFilter<"DepositOrder"> | Date | string
    updatedAt?: DateTimeFilter<"DepositOrder"> | Date | string
    orderNo?: StringFilter<"DepositOrder"> | string
    chain?: EnumChainFilter<"DepositOrder"> | $Enums.Chain
    coin?: EnumStablecoinFilter<"DepositOrder"> | $Enums.Stablecoin
    toAddress?: StringFilter<"DepositOrder"> | string
    fromAddress?: StringNullableFilter<"DepositOrder"> | string | null
    txHash?: StringNullableFilter<"DepositOrder"> | string | null
    blockNumber?: BigIntNullableFilter<"DepositOrder"> | bigint | number | null
    amount?: DecimalFilter<"DepositOrder"> | Decimal | DecimalJsLike | number | string
    confirmations?: IntFilter<"DepositOrder"> | number
    requiredConf?: IntFilter<"DepositOrder"> | number
    status?: EnumTxStatusFilter<"DepositOrder"> | $Enums.TxStatus
    confirmedAt?: DateTimeNullableFilter<"DepositOrder"> | Date | string | null
    userId?: StringNullableFilter<"DepositOrder"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type DepositOrderOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderNo?: SortOrder
    chain?: SortOrder
    coin?: SortOrder
    toAddress?: SortOrder
    fromAddress?: SortOrderInput | SortOrder
    txHash?: SortOrderInput | SortOrder
    blockNumber?: SortOrderInput | SortOrder
    amount?: SortOrder
    confirmations?: SortOrder
    requiredConf?: SortOrder
    status?: SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DepositOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderNo?: string
    txHash?: string
    AND?: DepositOrderWhereInput | DepositOrderWhereInput[]
    OR?: DepositOrderWhereInput[]
    NOT?: DepositOrderWhereInput | DepositOrderWhereInput[]
    createdAt?: DateTimeFilter<"DepositOrder"> | Date | string
    updatedAt?: DateTimeFilter<"DepositOrder"> | Date | string
    chain?: EnumChainFilter<"DepositOrder"> | $Enums.Chain
    coin?: EnumStablecoinFilter<"DepositOrder"> | $Enums.Stablecoin
    toAddress?: StringFilter<"DepositOrder"> | string
    fromAddress?: StringNullableFilter<"DepositOrder"> | string | null
    blockNumber?: BigIntNullableFilter<"DepositOrder"> | bigint | number | null
    amount?: DecimalFilter<"DepositOrder"> | Decimal | DecimalJsLike | number | string
    confirmations?: IntFilter<"DepositOrder"> | number
    requiredConf?: IntFilter<"DepositOrder"> | number
    status?: EnumTxStatusFilter<"DepositOrder"> | $Enums.TxStatus
    confirmedAt?: DateTimeNullableFilter<"DepositOrder"> | Date | string | null
    userId?: StringNullableFilter<"DepositOrder"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "orderNo" | "txHash">

  export type DepositOrderOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderNo?: SortOrder
    chain?: SortOrder
    coin?: SortOrder
    toAddress?: SortOrder
    fromAddress?: SortOrderInput | SortOrder
    txHash?: SortOrderInput | SortOrder
    blockNumber?: SortOrderInput | SortOrder
    amount?: SortOrder
    confirmations?: SortOrder
    requiredConf?: SortOrder
    status?: SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: DepositOrderCountOrderByAggregateInput
    _avg?: DepositOrderAvgOrderByAggregateInput
    _max?: DepositOrderMaxOrderByAggregateInput
    _min?: DepositOrderMinOrderByAggregateInput
    _sum?: DepositOrderSumOrderByAggregateInput
  }

  export type DepositOrderScalarWhereWithAggregatesInput = {
    AND?: DepositOrderScalarWhereWithAggregatesInput | DepositOrderScalarWhereWithAggregatesInput[]
    OR?: DepositOrderScalarWhereWithAggregatesInput[]
    NOT?: DepositOrderScalarWhereWithAggregatesInput | DepositOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DepositOrder"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DepositOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DepositOrder"> | Date | string
    orderNo?: StringWithAggregatesFilter<"DepositOrder"> | string
    chain?: EnumChainWithAggregatesFilter<"DepositOrder"> | $Enums.Chain
    coin?: EnumStablecoinWithAggregatesFilter<"DepositOrder"> | $Enums.Stablecoin
    toAddress?: StringWithAggregatesFilter<"DepositOrder"> | string
    fromAddress?: StringNullableWithAggregatesFilter<"DepositOrder"> | string | null
    txHash?: StringNullableWithAggregatesFilter<"DepositOrder"> | string | null
    blockNumber?: BigIntNullableWithAggregatesFilter<"DepositOrder"> | bigint | number | null
    amount?: DecimalWithAggregatesFilter<"DepositOrder"> | Decimal | DecimalJsLike | number | string
    confirmations?: IntWithAggregatesFilter<"DepositOrder"> | number
    requiredConf?: IntWithAggregatesFilter<"DepositOrder"> | number
    status?: EnumTxStatusWithAggregatesFilter<"DepositOrder"> | $Enums.TxStatus
    confirmedAt?: DateTimeNullableWithAggregatesFilter<"DepositOrder"> | Date | string | null
    userId?: StringNullableWithAggregatesFilter<"DepositOrder"> | string | null
  }

  export type ServiceCodeWhereInput = {
    AND?: ServiceCodeWhereInput | ServiceCodeWhereInput[]
    OR?: ServiceCodeWhereInput[]
    NOT?: ServiceCodeWhereInput | ServiceCodeWhereInput[]
    id?: StringFilter<"ServiceCode"> | string
    createdAt?: DateTimeFilter<"ServiceCode"> | Date | string
    code?: StringFilter<"ServiceCode"> | string
    issuedFor?: EnumStablecoinFilter<"ServiceCode"> | $Enums.Stablecoin
    expiresAt?: DateTimeFilter<"ServiceCode"> | Date | string
    redeemedAt?: DateTimeNullableFilter<"ServiceCode"> | Date | string | null
    userId?: StringFilter<"ServiceCode"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ServiceCodeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    code?: SortOrder
    issuedFor?: SortOrder
    expiresAt?: SortOrder
    redeemedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ServiceCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ServiceCodeWhereInput | ServiceCodeWhereInput[]
    OR?: ServiceCodeWhereInput[]
    NOT?: ServiceCodeWhereInput | ServiceCodeWhereInput[]
    createdAt?: DateTimeFilter<"ServiceCode"> | Date | string
    issuedFor?: EnumStablecoinFilter<"ServiceCode"> | $Enums.Stablecoin
    expiresAt?: DateTimeFilter<"ServiceCode"> | Date | string
    redeemedAt?: DateTimeNullableFilter<"ServiceCode"> | Date | string | null
    userId?: StringFilter<"ServiceCode"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "code">

  export type ServiceCodeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    code?: SortOrder
    issuedFor?: SortOrder
    expiresAt?: SortOrder
    redeemedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: ServiceCodeCountOrderByAggregateInput
    _max?: ServiceCodeMaxOrderByAggregateInput
    _min?: ServiceCodeMinOrderByAggregateInput
  }

  export type ServiceCodeScalarWhereWithAggregatesInput = {
    AND?: ServiceCodeScalarWhereWithAggregatesInput | ServiceCodeScalarWhereWithAggregatesInput[]
    OR?: ServiceCodeScalarWhereWithAggregatesInput[]
    NOT?: ServiceCodeScalarWhereWithAggregatesInput | ServiceCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceCode"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ServiceCode"> | Date | string
    code?: StringWithAggregatesFilter<"ServiceCode"> | string
    issuedFor?: EnumStablecoinWithAggregatesFilter<"ServiceCode"> | $Enums.Stablecoin
    expiresAt?: DateTimeWithAggregatesFilter<"ServiceCode"> | Date | string
    redeemedAt?: DateTimeNullableWithAggregatesFilter<"ServiceCode"> | Date | string | null
    userId?: StringWithAggregatesFilter<"ServiceCode"> | string
  }

  export type RoundWhereInput = {
    AND?: RoundWhereInput | RoundWhereInput[]
    OR?: RoundWhereInput[]
    NOT?: RoundWhereInput | RoundWhereInput[]
    id?: StringFilter<"Round"> | string
    createdAt?: DateTimeFilter<"Round"> | Date | string
    roundNo?: IntFilter<"Round"> | number
    startedAt?: DateTimeFilter<"Round"> | Date | string
    endsAt?: DateTimeFilter<"Round"> | Date | string
    status?: EnumRoundStatusFilter<"Round"> | $Enums.RoundStatus
    entries?: RoundEntryListRelationFilter
  }

  export type RoundOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    roundNo?: SortOrder
    startedAt?: SortOrder
    endsAt?: SortOrder
    status?: SortOrder
    entries?: RoundEntryOrderByRelationAggregateInput
  }

  export type RoundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roundNo?: number
    AND?: RoundWhereInput | RoundWhereInput[]
    OR?: RoundWhereInput[]
    NOT?: RoundWhereInput | RoundWhereInput[]
    createdAt?: DateTimeFilter<"Round"> | Date | string
    startedAt?: DateTimeFilter<"Round"> | Date | string
    endsAt?: DateTimeFilter<"Round"> | Date | string
    status?: EnumRoundStatusFilter<"Round"> | $Enums.RoundStatus
    entries?: RoundEntryListRelationFilter
  }, "id" | "roundNo">

  export type RoundOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    roundNo?: SortOrder
    startedAt?: SortOrder
    endsAt?: SortOrder
    status?: SortOrder
    _count?: RoundCountOrderByAggregateInput
    _avg?: RoundAvgOrderByAggregateInput
    _max?: RoundMaxOrderByAggregateInput
    _min?: RoundMinOrderByAggregateInput
    _sum?: RoundSumOrderByAggregateInput
  }

  export type RoundScalarWhereWithAggregatesInput = {
    AND?: RoundScalarWhereWithAggregatesInput | RoundScalarWhereWithAggregatesInput[]
    OR?: RoundScalarWhereWithAggregatesInput[]
    NOT?: RoundScalarWhereWithAggregatesInput | RoundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Round"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Round"> | Date | string
    roundNo?: IntWithAggregatesFilter<"Round"> | number
    startedAt?: DateTimeWithAggregatesFilter<"Round"> | Date | string
    endsAt?: DateTimeWithAggregatesFilter<"Round"> | Date | string
    status?: EnumRoundStatusWithAggregatesFilter<"Round"> | $Enums.RoundStatus
  }

  export type RoundEntryWhereInput = {
    AND?: RoundEntryWhereInput | RoundEntryWhereInput[]
    OR?: RoundEntryWhereInput[]
    NOT?: RoundEntryWhereInput | RoundEntryWhereInput[]
    id?: StringFilter<"RoundEntry"> | string
    createdAt?: DateTimeFilter<"RoundEntry"> | Date | string
    roundId?: StringFilter<"RoundEntry"> | string
    userId?: StringFilter<"RoundEntry"> | string
    coin?: EnumStablecoinFilter<"RoundEntry"> | $Enums.Stablecoin
    amount?: DecimalFilter<"RoundEntry"> | Decimal | DecimalJsLike | number | string
    profit?: DecimalFilter<"RoundEntry"> | Decimal | DecimalJsLike | number | string
    settledAt?: DateTimeNullableFilter<"RoundEntry"> | Date | string | null
    round?: XOR<RoundScalarRelationFilter, RoundWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RoundEntryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    roundId?: SortOrder
    userId?: SortOrder
    coin?: SortOrder
    amount?: SortOrder
    profit?: SortOrder
    settledAt?: SortOrderInput | SortOrder
    round?: RoundOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RoundEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoundEntryWhereInput | RoundEntryWhereInput[]
    OR?: RoundEntryWhereInput[]
    NOT?: RoundEntryWhereInput | RoundEntryWhereInput[]
    createdAt?: DateTimeFilter<"RoundEntry"> | Date | string
    roundId?: StringFilter<"RoundEntry"> | string
    userId?: StringFilter<"RoundEntry"> | string
    coin?: EnumStablecoinFilter<"RoundEntry"> | $Enums.Stablecoin
    amount?: DecimalFilter<"RoundEntry"> | Decimal | DecimalJsLike | number | string
    profit?: DecimalFilter<"RoundEntry"> | Decimal | DecimalJsLike | number | string
    settledAt?: DateTimeNullableFilter<"RoundEntry"> | Date | string | null
    round?: XOR<RoundScalarRelationFilter, RoundWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RoundEntryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    roundId?: SortOrder
    userId?: SortOrder
    coin?: SortOrder
    amount?: SortOrder
    profit?: SortOrder
    settledAt?: SortOrderInput | SortOrder
    _count?: RoundEntryCountOrderByAggregateInput
    _avg?: RoundEntryAvgOrderByAggregateInput
    _max?: RoundEntryMaxOrderByAggregateInput
    _min?: RoundEntryMinOrderByAggregateInput
    _sum?: RoundEntrySumOrderByAggregateInput
  }

  export type RoundEntryScalarWhereWithAggregatesInput = {
    AND?: RoundEntryScalarWhereWithAggregatesInput | RoundEntryScalarWhereWithAggregatesInput[]
    OR?: RoundEntryScalarWhereWithAggregatesInput[]
    NOT?: RoundEntryScalarWhereWithAggregatesInput | RoundEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoundEntry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RoundEntry"> | Date | string
    roundId?: StringWithAggregatesFilter<"RoundEntry"> | string
    userId?: StringWithAggregatesFilter<"RoundEntry"> | string
    coin?: EnumStablecoinWithAggregatesFilter<"RoundEntry"> | $Enums.Stablecoin
    amount?: DecimalWithAggregatesFilter<"RoundEntry"> | Decimal | DecimalJsLike | number | string
    profit?: DecimalWithAggregatesFilter<"RoundEntry"> | Decimal | DecimalJsLike | number | string
    settledAt?: DateTimeNullableWithAggregatesFilter<"RoundEntry"> | Date | string | null
  }

  export type WithdrawOrderWhereInput = {
    AND?: WithdrawOrderWhereInput | WithdrawOrderWhereInput[]
    OR?: WithdrawOrderWhereInput[]
    NOT?: WithdrawOrderWhereInput | WithdrawOrderWhereInput[]
    id?: StringFilter<"WithdrawOrder"> | string
    createdAt?: DateTimeFilter<"WithdrawOrder"> | Date | string
    updatedAt?: DateTimeFilter<"WithdrawOrder"> | Date | string
    orderNo?: StringFilter<"WithdrawOrder"> | string
    userId?: StringFilter<"WithdrawOrder"> | string
    chain?: EnumChainFilter<"WithdrawOrder"> | $Enums.Chain
    coin?: EnumStablecoinFilter<"WithdrawOrder"> | $Enums.Stablecoin
    amount?: DecimalFilter<"WithdrawOrder"> | Decimal | DecimalJsLike | number | string
    toAddress?: StringFilter<"WithdrawOrder"> | string
    kycRef?: StringNullableFilter<"WithdrawOrder"> | string | null
    status?: EnumWithdrawStatusFilter<"WithdrawOrder"> | $Enums.WithdrawStatus
    reviewedBy?: StringNullableFilter<"WithdrawOrder"> | string | null
    reviewedAt?: DateTimeNullableFilter<"WithdrawOrder"> | Date | string | null
    reviewNote?: StringNullableFilter<"WithdrawOrder"> | string | null
    paidTxHash?: StringNullableFilter<"WithdrawOrder"> | string | null
    paidAt?: DateTimeNullableFilter<"WithdrawOrder"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WithdrawOrderOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderNo?: SortOrder
    userId?: SortOrder
    chain?: SortOrder
    coin?: SortOrder
    amount?: SortOrder
    toAddress?: SortOrder
    kycRef?: SortOrderInput | SortOrder
    status?: SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    reviewNote?: SortOrderInput | SortOrder
    paidTxHash?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WithdrawOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderNo?: string
    AND?: WithdrawOrderWhereInput | WithdrawOrderWhereInput[]
    OR?: WithdrawOrderWhereInput[]
    NOT?: WithdrawOrderWhereInput | WithdrawOrderWhereInput[]
    createdAt?: DateTimeFilter<"WithdrawOrder"> | Date | string
    updatedAt?: DateTimeFilter<"WithdrawOrder"> | Date | string
    userId?: StringFilter<"WithdrawOrder"> | string
    chain?: EnumChainFilter<"WithdrawOrder"> | $Enums.Chain
    coin?: EnumStablecoinFilter<"WithdrawOrder"> | $Enums.Stablecoin
    amount?: DecimalFilter<"WithdrawOrder"> | Decimal | DecimalJsLike | number | string
    toAddress?: StringFilter<"WithdrawOrder"> | string
    kycRef?: StringNullableFilter<"WithdrawOrder"> | string | null
    status?: EnumWithdrawStatusFilter<"WithdrawOrder"> | $Enums.WithdrawStatus
    reviewedBy?: StringNullableFilter<"WithdrawOrder"> | string | null
    reviewedAt?: DateTimeNullableFilter<"WithdrawOrder"> | Date | string | null
    reviewNote?: StringNullableFilter<"WithdrawOrder"> | string | null
    paidTxHash?: StringNullableFilter<"WithdrawOrder"> | string | null
    paidAt?: DateTimeNullableFilter<"WithdrawOrder"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "orderNo">

  export type WithdrawOrderOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderNo?: SortOrder
    userId?: SortOrder
    chain?: SortOrder
    coin?: SortOrder
    amount?: SortOrder
    toAddress?: SortOrder
    kycRef?: SortOrderInput | SortOrder
    status?: SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    reviewNote?: SortOrderInput | SortOrder
    paidTxHash?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    _count?: WithdrawOrderCountOrderByAggregateInput
    _avg?: WithdrawOrderAvgOrderByAggregateInput
    _max?: WithdrawOrderMaxOrderByAggregateInput
    _min?: WithdrawOrderMinOrderByAggregateInput
    _sum?: WithdrawOrderSumOrderByAggregateInput
  }

  export type WithdrawOrderScalarWhereWithAggregatesInput = {
    AND?: WithdrawOrderScalarWhereWithAggregatesInput | WithdrawOrderScalarWhereWithAggregatesInput[]
    OR?: WithdrawOrderScalarWhereWithAggregatesInput[]
    NOT?: WithdrawOrderScalarWhereWithAggregatesInput | WithdrawOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WithdrawOrder"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WithdrawOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WithdrawOrder"> | Date | string
    orderNo?: StringWithAggregatesFilter<"WithdrawOrder"> | string
    userId?: StringWithAggregatesFilter<"WithdrawOrder"> | string
    chain?: EnumChainWithAggregatesFilter<"WithdrawOrder"> | $Enums.Chain
    coin?: EnumStablecoinWithAggregatesFilter<"WithdrawOrder"> | $Enums.Stablecoin
    amount?: DecimalWithAggregatesFilter<"WithdrawOrder"> | Decimal | DecimalJsLike | number | string
    toAddress?: StringWithAggregatesFilter<"WithdrawOrder"> | string
    kycRef?: StringNullableWithAggregatesFilter<"WithdrawOrder"> | string | null
    status?: EnumWithdrawStatusWithAggregatesFilter<"WithdrawOrder"> | $Enums.WithdrawStatus
    reviewedBy?: StringNullableWithAggregatesFilter<"WithdrawOrder"> | string | null
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"WithdrawOrder"> | Date | string | null
    reviewNote?: StringNullableWithAggregatesFilter<"WithdrawOrder"> | string | null
    paidTxHash?: StringNullableWithAggregatesFilter<"WithdrawOrder"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"WithdrawOrder"> | Date | string | null
  }

  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
    email?: StringFilter<"AdminUser"> | string
    passwordHash?: StringFilter<"AdminUser"> | string
    role?: EnumRoleFilter<"AdminUser"> | $Enums.Role
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
    passwordHash?: StringFilter<"AdminUser"> | string
    role?: EnumRoleFilter<"AdminUser"> | $Enums.Role
  }, "id" | "email">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
    email?: StringWithAggregatesFilter<"AdminUser"> | string
    passwordHash?: StringWithAggregatesFilter<"AdminUser"> | string
    role?: EnumRoleWithAggregatesFilter<"AdminUser"> | $Enums.Role
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    walletAddress: string
    balanceUsdc?: Decimal | DecimalJsLike | number | string
    balanceUsdt?: Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: number
    timesBalance?: number
    quotaResetAt?: Date | string | null
    deposits?: DepositOrderCreateNestedManyWithoutUserInput
    serviceCodes?: ServiceCodeCreateNestedManyWithoutUserInput
    roundEntries?: RoundEntryCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawOrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    walletAddress: string
    balanceUsdc?: Decimal | DecimalJsLike | number | string
    balanceUsdt?: Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: number
    timesBalance?: number
    quotaResetAt?: Date | string | null
    deposits?: DepositOrderUncheckedCreateNestedManyWithoutUserInput
    serviceCodes?: ServiceCodeUncheckedCreateNestedManyWithoutUserInput
    roundEntries?: RoundEntryUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawOrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    balanceUsdc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceUsdt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: IntFieldUpdateOperationsInput | number
    timesBalance?: IntFieldUpdateOperationsInput | number
    quotaResetAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deposits?: DepositOrderUpdateManyWithoutUserNestedInput
    serviceCodes?: ServiceCodeUpdateManyWithoutUserNestedInput
    roundEntries?: RoundEntryUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawOrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    balanceUsdc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceUsdt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: IntFieldUpdateOperationsInput | number
    timesBalance?: IntFieldUpdateOperationsInput | number
    quotaResetAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deposits?: DepositOrderUncheckedUpdateManyWithoutUserNestedInput
    serviceCodes?: ServiceCodeUncheckedUpdateManyWithoutUserNestedInput
    roundEntries?: RoundEntryUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawOrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    walletAddress: string
    balanceUsdc?: Decimal | DecimalJsLike | number | string
    balanceUsdt?: Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: number
    timesBalance?: number
    quotaResetAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    balanceUsdc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceUsdt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: IntFieldUpdateOperationsInput | number
    timesBalance?: IntFieldUpdateOperationsInput | number
    quotaResetAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    balanceUsdc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceUsdt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: IntFieldUpdateOperationsInput | number
    timesBalance?: IntFieldUpdateOperationsInput | number
    quotaResetAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DepositOrderCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderNo: string
    chain: $Enums.Chain
    coin: $Enums.Stablecoin
    toAddress: string
    fromAddress?: string | null
    txHash?: string | null
    blockNumber?: bigint | number | null
    amount: Decimal | DecimalJsLike | number | string
    confirmations?: number
    requiredConf?: number
    status?: $Enums.TxStatus
    confirmedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutDepositsInput
  }

  export type DepositOrderUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderNo: string
    chain: $Enums.Chain
    coin: $Enums.Stablecoin
    toAddress: string
    fromAddress?: string | null
    txHash?: string | null
    blockNumber?: bigint | number | null
    amount: Decimal | DecimalJsLike | number | string
    confirmations?: number
    requiredConf?: number
    status?: $Enums.TxStatus
    confirmedAt?: Date | string | null
    userId?: string | null
  }

  export type DepositOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderNo?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    coin?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    toAddress?: StringFieldUpdateOperationsInput | string
    fromAddress?: NullableStringFieldUpdateOperationsInput | string | null
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    blockNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confirmations?: IntFieldUpdateOperationsInput | number
    requiredConf?: IntFieldUpdateOperationsInput | number
    status?: EnumTxStatusFieldUpdateOperationsInput | $Enums.TxStatus
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutDepositsNestedInput
  }

  export type DepositOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderNo?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    coin?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    toAddress?: StringFieldUpdateOperationsInput | string
    fromAddress?: NullableStringFieldUpdateOperationsInput | string | null
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    blockNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confirmations?: IntFieldUpdateOperationsInput | number
    requiredConf?: IntFieldUpdateOperationsInput | number
    status?: EnumTxStatusFieldUpdateOperationsInput | $Enums.TxStatus
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DepositOrderCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderNo: string
    chain: $Enums.Chain
    coin: $Enums.Stablecoin
    toAddress: string
    fromAddress?: string | null
    txHash?: string | null
    blockNumber?: bigint | number | null
    amount: Decimal | DecimalJsLike | number | string
    confirmations?: number
    requiredConf?: number
    status?: $Enums.TxStatus
    confirmedAt?: Date | string | null
    userId?: string | null
  }

  export type DepositOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderNo?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    coin?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    toAddress?: StringFieldUpdateOperationsInput | string
    fromAddress?: NullableStringFieldUpdateOperationsInput | string | null
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    blockNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confirmations?: IntFieldUpdateOperationsInput | number
    requiredConf?: IntFieldUpdateOperationsInput | number
    status?: EnumTxStatusFieldUpdateOperationsInput | $Enums.TxStatus
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DepositOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderNo?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    coin?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    toAddress?: StringFieldUpdateOperationsInput | string
    fromAddress?: NullableStringFieldUpdateOperationsInput | string | null
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    blockNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confirmations?: IntFieldUpdateOperationsInput | number
    requiredConf?: IntFieldUpdateOperationsInput | number
    status?: EnumTxStatusFieldUpdateOperationsInput | $Enums.TxStatus
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceCodeCreateInput = {
    id?: string
    createdAt?: Date | string
    code: string
    issuedFor: $Enums.Stablecoin
    expiresAt: Date | string
    redeemedAt?: Date | string | null
    user: UserCreateNestedOneWithoutServiceCodesInput
  }

  export type ServiceCodeUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    code: string
    issuedFor: $Enums.Stablecoin
    expiresAt: Date | string
    redeemedAt?: Date | string | null
    userId: string
  }

  export type ServiceCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    issuedFor?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutServiceCodesNestedInput
  }

  export type ServiceCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    issuedFor?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceCodeCreateManyInput = {
    id?: string
    createdAt?: Date | string
    code: string
    issuedFor: $Enums.Stablecoin
    expiresAt: Date | string
    redeemedAt?: Date | string | null
    userId: string
  }

  export type ServiceCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    issuedFor?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    issuedFor?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RoundCreateInput = {
    id?: string
    createdAt?: Date | string
    roundNo: number
    startedAt: Date | string
    endsAt: Date | string
    status?: $Enums.RoundStatus
    entries?: RoundEntryCreateNestedManyWithoutRoundInput
  }

  export type RoundUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    roundNo: number
    startedAt: Date | string
    endsAt: Date | string
    status?: $Enums.RoundStatus
    entries?: RoundEntryUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundNo?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRoundStatusFieldUpdateOperationsInput | $Enums.RoundStatus
    entries?: RoundEntryUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundNo?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRoundStatusFieldUpdateOperationsInput | $Enums.RoundStatus
    entries?: RoundEntryUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type RoundCreateManyInput = {
    id?: string
    createdAt?: Date | string
    roundNo: number
    startedAt: Date | string
    endsAt: Date | string
    status?: $Enums.RoundStatus
  }

  export type RoundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundNo?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRoundStatusFieldUpdateOperationsInput | $Enums.RoundStatus
  }

  export type RoundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundNo?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRoundStatusFieldUpdateOperationsInput | $Enums.RoundStatus
  }

  export type RoundEntryCreateInput = {
    id?: string
    createdAt?: Date | string
    coin: $Enums.Stablecoin
    amount: Decimal | DecimalJsLike | number | string
    profit: Decimal | DecimalJsLike | number | string
    settledAt?: Date | string | null
    round: RoundCreateNestedOneWithoutEntriesInput
    user: UserCreateNestedOneWithoutRoundEntriesInput
  }

  export type RoundEntryUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    roundId: string
    userId: string
    coin: $Enums.Stablecoin
    amount: Decimal | DecimalJsLike | number | string
    profit: Decimal | DecimalJsLike | number | string
    settledAt?: Date | string | null
  }

  export type RoundEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coin?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    round?: RoundUpdateOneRequiredWithoutEntriesNestedInput
    user?: UserUpdateOneRequiredWithoutRoundEntriesNestedInput
  }

  export type RoundEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    coin?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoundEntryCreateManyInput = {
    id?: string
    createdAt?: Date | string
    roundId: string
    userId: string
    coin: $Enums.Stablecoin
    amount: Decimal | DecimalJsLike | number | string
    profit: Decimal | DecimalJsLike | number | string
    settledAt?: Date | string | null
  }

  export type RoundEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coin?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoundEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    coin?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WithdrawOrderCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderNo: string
    chain: $Enums.Chain
    coin: $Enums.Stablecoin
    amount: Decimal | DecimalJsLike | number | string
    toAddress: string
    kycRef?: string | null
    status?: $Enums.WithdrawStatus
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    reviewNote?: string | null
    paidTxHash?: string | null
    paidAt?: Date | string | null
    user: UserCreateNestedOneWithoutWithdrawalsInput
  }

  export type WithdrawOrderUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderNo: string
    userId: string
    chain: $Enums.Chain
    coin: $Enums.Stablecoin
    amount: Decimal | DecimalJsLike | number | string
    toAddress: string
    kycRef?: string | null
    status?: $Enums.WithdrawStatus
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    reviewNote?: string | null
    paidTxHash?: string | null
    paidAt?: Date | string | null
  }

  export type WithdrawOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderNo?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    coin?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    toAddress?: StringFieldUpdateOperationsInput | string
    kycRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWithdrawStatusFieldUpdateOperationsInput | $Enums.WithdrawStatus
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    paidTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutWithdrawalsNestedInput
  }

  export type WithdrawOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderNo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    coin?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    toAddress?: StringFieldUpdateOperationsInput | string
    kycRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWithdrawStatusFieldUpdateOperationsInput | $Enums.WithdrawStatus
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    paidTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WithdrawOrderCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderNo: string
    userId: string
    chain: $Enums.Chain
    coin: $Enums.Stablecoin
    amount: Decimal | DecimalJsLike | number | string
    toAddress: string
    kycRef?: string | null
    status?: $Enums.WithdrawStatus
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    reviewNote?: string | null
    paidTxHash?: string | null
    paidAt?: Date | string | null
  }

  export type WithdrawOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderNo?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    coin?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    toAddress?: StringFieldUpdateOperationsInput | string
    kycRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWithdrawStatusFieldUpdateOperationsInput | $Enums.WithdrawStatus
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    paidTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WithdrawOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderNo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    coin?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    toAddress?: StringFieldUpdateOperationsInput | string
    kycRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWithdrawStatusFieldUpdateOperationsInput | $Enums.WithdrawStatus
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    paidTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminUserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    passwordHash: string
    role: $Enums.Role
  }

  export type AdminUserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    passwordHash: string
    role: $Enums.Role
  }

  export type AdminUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type AdminUserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    passwordHash: string
    role: $Enums.Role
  }

  export type AdminUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type DepositOrderListRelationFilter = {
    every?: DepositOrderWhereInput
    some?: DepositOrderWhereInput
    none?: DepositOrderWhereInput
  }

  export type ServiceCodeListRelationFilter = {
    every?: ServiceCodeWhereInput
    some?: ServiceCodeWhereInput
    none?: ServiceCodeWhereInput
  }

  export type RoundEntryListRelationFilter = {
    every?: RoundEntryWhereInput
    some?: RoundEntryWhereInput
    none?: RoundEntryWhereInput
  }

  export type WithdrawOrderListRelationFilter = {
    every?: WithdrawOrderWhereInput
    some?: WithdrawOrderWhereInput
    none?: WithdrawOrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DepositOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoundEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WithdrawOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    walletAddress?: SortOrder
    balanceUsdc?: SortOrder
    balanceUsdt?: SortOrder
    dailyQuotaUsed?: SortOrder
    timesBalance?: SortOrder
    quotaResetAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    balanceUsdc?: SortOrder
    balanceUsdt?: SortOrder
    dailyQuotaUsed?: SortOrder
    timesBalance?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    walletAddress?: SortOrder
    balanceUsdc?: SortOrder
    balanceUsdt?: SortOrder
    dailyQuotaUsed?: SortOrder
    timesBalance?: SortOrder
    quotaResetAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    walletAddress?: SortOrder
    balanceUsdc?: SortOrder
    balanceUsdt?: SortOrder
    dailyQuotaUsed?: SortOrder
    timesBalance?: SortOrder
    quotaResetAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    balanceUsdc?: SortOrder
    balanceUsdt?: SortOrder
    dailyQuotaUsed?: SortOrder
    timesBalance?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type EnumChainFilter<$PrismaModel = never> = {
    equals?: $Enums.Chain | EnumChainFieldRefInput<$PrismaModel>
    in?: $Enums.Chain[] | ListEnumChainFieldRefInput<$PrismaModel>
    notIn?: $Enums.Chain[] | ListEnumChainFieldRefInput<$PrismaModel>
    not?: NestedEnumChainFilter<$PrismaModel> | $Enums.Chain
  }

  export type EnumStablecoinFilter<$PrismaModel = never> = {
    equals?: $Enums.Stablecoin | EnumStablecoinFieldRefInput<$PrismaModel>
    in?: $Enums.Stablecoin[] | ListEnumStablecoinFieldRefInput<$PrismaModel>
    notIn?: $Enums.Stablecoin[] | ListEnumStablecoinFieldRefInput<$PrismaModel>
    not?: NestedEnumStablecoinFilter<$PrismaModel> | $Enums.Stablecoin
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type EnumTxStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TxStatus | EnumTxStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TxStatus[] | ListEnumTxStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TxStatus[] | ListEnumTxStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTxStatusFilter<$PrismaModel> | $Enums.TxStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type DepositOrderCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderNo?: SortOrder
    chain?: SortOrder
    coin?: SortOrder
    toAddress?: SortOrder
    fromAddress?: SortOrder
    txHash?: SortOrder
    blockNumber?: SortOrder
    amount?: SortOrder
    confirmations?: SortOrder
    requiredConf?: SortOrder
    status?: SortOrder
    confirmedAt?: SortOrder
    userId?: SortOrder
  }

  export type DepositOrderAvgOrderByAggregateInput = {
    blockNumber?: SortOrder
    amount?: SortOrder
    confirmations?: SortOrder
    requiredConf?: SortOrder
  }

  export type DepositOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderNo?: SortOrder
    chain?: SortOrder
    coin?: SortOrder
    toAddress?: SortOrder
    fromAddress?: SortOrder
    txHash?: SortOrder
    blockNumber?: SortOrder
    amount?: SortOrder
    confirmations?: SortOrder
    requiredConf?: SortOrder
    status?: SortOrder
    confirmedAt?: SortOrder
    userId?: SortOrder
  }

  export type DepositOrderMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderNo?: SortOrder
    chain?: SortOrder
    coin?: SortOrder
    toAddress?: SortOrder
    fromAddress?: SortOrder
    txHash?: SortOrder
    blockNumber?: SortOrder
    amount?: SortOrder
    confirmations?: SortOrder
    requiredConf?: SortOrder
    status?: SortOrder
    confirmedAt?: SortOrder
    userId?: SortOrder
  }

  export type DepositOrderSumOrderByAggregateInput = {
    blockNumber?: SortOrder
    amount?: SortOrder
    confirmations?: SortOrder
    requiredConf?: SortOrder
  }

  export type EnumChainWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Chain | EnumChainFieldRefInput<$PrismaModel>
    in?: $Enums.Chain[] | ListEnumChainFieldRefInput<$PrismaModel>
    notIn?: $Enums.Chain[] | ListEnumChainFieldRefInput<$PrismaModel>
    not?: NestedEnumChainWithAggregatesFilter<$PrismaModel> | $Enums.Chain
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChainFilter<$PrismaModel>
    _max?: NestedEnumChainFilter<$PrismaModel>
  }

  export type EnumStablecoinWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Stablecoin | EnumStablecoinFieldRefInput<$PrismaModel>
    in?: $Enums.Stablecoin[] | ListEnumStablecoinFieldRefInput<$PrismaModel>
    notIn?: $Enums.Stablecoin[] | ListEnumStablecoinFieldRefInput<$PrismaModel>
    not?: NestedEnumStablecoinWithAggregatesFilter<$PrismaModel> | $Enums.Stablecoin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStablecoinFilter<$PrismaModel>
    _max?: NestedEnumStablecoinFilter<$PrismaModel>
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

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type EnumTxStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TxStatus | EnumTxStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TxStatus[] | ListEnumTxStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TxStatus[] | ListEnumTxStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTxStatusWithAggregatesFilter<$PrismaModel> | $Enums.TxStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTxStatusFilter<$PrismaModel>
    _max?: NestedEnumTxStatusFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ServiceCodeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    code?: SortOrder
    issuedFor?: SortOrder
    expiresAt?: SortOrder
    redeemedAt?: SortOrder
    userId?: SortOrder
  }

  export type ServiceCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    code?: SortOrder
    issuedFor?: SortOrder
    expiresAt?: SortOrder
    redeemedAt?: SortOrder
    userId?: SortOrder
  }

  export type ServiceCodeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    code?: SortOrder
    issuedFor?: SortOrder
    expiresAt?: SortOrder
    redeemedAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumRoundStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoundStatus | EnumRoundStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoundStatus[] | ListEnumRoundStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoundStatus[] | ListEnumRoundStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoundStatusFilter<$PrismaModel> | $Enums.RoundStatus
  }

  export type RoundCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    roundNo?: SortOrder
    startedAt?: SortOrder
    endsAt?: SortOrder
    status?: SortOrder
  }

  export type RoundAvgOrderByAggregateInput = {
    roundNo?: SortOrder
  }

  export type RoundMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    roundNo?: SortOrder
    startedAt?: SortOrder
    endsAt?: SortOrder
    status?: SortOrder
  }

  export type RoundMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    roundNo?: SortOrder
    startedAt?: SortOrder
    endsAt?: SortOrder
    status?: SortOrder
  }

  export type RoundSumOrderByAggregateInput = {
    roundNo?: SortOrder
  }

  export type EnumRoundStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoundStatus | EnumRoundStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoundStatus[] | ListEnumRoundStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoundStatus[] | ListEnumRoundStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoundStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoundStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoundStatusFilter<$PrismaModel>
    _max?: NestedEnumRoundStatusFilter<$PrismaModel>
  }

  export type RoundScalarRelationFilter = {
    is?: RoundWhereInput
    isNot?: RoundWhereInput
  }

  export type RoundEntryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    roundId?: SortOrder
    userId?: SortOrder
    coin?: SortOrder
    amount?: SortOrder
    profit?: SortOrder
    settledAt?: SortOrder
  }

  export type RoundEntryAvgOrderByAggregateInput = {
    amount?: SortOrder
    profit?: SortOrder
  }

  export type RoundEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    roundId?: SortOrder
    userId?: SortOrder
    coin?: SortOrder
    amount?: SortOrder
    profit?: SortOrder
    settledAt?: SortOrder
  }

  export type RoundEntryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    roundId?: SortOrder
    userId?: SortOrder
    coin?: SortOrder
    amount?: SortOrder
    profit?: SortOrder
    settledAt?: SortOrder
  }

  export type RoundEntrySumOrderByAggregateInput = {
    amount?: SortOrder
    profit?: SortOrder
  }

  export type EnumWithdrawStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WithdrawStatus | EnumWithdrawStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WithdrawStatus[] | ListEnumWithdrawStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WithdrawStatus[] | ListEnumWithdrawStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWithdrawStatusFilter<$PrismaModel> | $Enums.WithdrawStatus
  }

  export type WithdrawOrderCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderNo?: SortOrder
    userId?: SortOrder
    chain?: SortOrder
    coin?: SortOrder
    amount?: SortOrder
    toAddress?: SortOrder
    kycRef?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    reviewNote?: SortOrder
    paidTxHash?: SortOrder
    paidAt?: SortOrder
  }

  export type WithdrawOrderAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type WithdrawOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderNo?: SortOrder
    userId?: SortOrder
    chain?: SortOrder
    coin?: SortOrder
    amount?: SortOrder
    toAddress?: SortOrder
    kycRef?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    reviewNote?: SortOrder
    paidTxHash?: SortOrder
    paidAt?: SortOrder
  }

  export type WithdrawOrderMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderNo?: SortOrder
    userId?: SortOrder
    chain?: SortOrder
    coin?: SortOrder
    amount?: SortOrder
    toAddress?: SortOrder
    kycRef?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    reviewNote?: SortOrder
    paidTxHash?: SortOrder
    paidAt?: SortOrder
  }

  export type WithdrawOrderSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumWithdrawStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WithdrawStatus | EnumWithdrawStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WithdrawStatus[] | ListEnumWithdrawStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WithdrawStatus[] | ListEnumWithdrawStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWithdrawStatusWithAggregatesFilter<$PrismaModel> | $Enums.WithdrawStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWithdrawStatusFilter<$PrismaModel>
    _max?: NestedEnumWithdrawStatusFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DepositOrderCreateNestedManyWithoutUserInput = {
    create?: XOR<DepositOrderCreateWithoutUserInput, DepositOrderUncheckedCreateWithoutUserInput> | DepositOrderCreateWithoutUserInput[] | DepositOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepositOrderCreateOrConnectWithoutUserInput | DepositOrderCreateOrConnectWithoutUserInput[]
    createMany?: DepositOrderCreateManyUserInputEnvelope
    connect?: DepositOrderWhereUniqueInput | DepositOrderWhereUniqueInput[]
  }

  export type ServiceCodeCreateNestedManyWithoutUserInput = {
    create?: XOR<ServiceCodeCreateWithoutUserInput, ServiceCodeUncheckedCreateWithoutUserInput> | ServiceCodeCreateWithoutUserInput[] | ServiceCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServiceCodeCreateOrConnectWithoutUserInput | ServiceCodeCreateOrConnectWithoutUserInput[]
    createMany?: ServiceCodeCreateManyUserInputEnvelope
    connect?: ServiceCodeWhereUniqueInput | ServiceCodeWhereUniqueInput[]
  }

  export type RoundEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<RoundEntryCreateWithoutUserInput, RoundEntryUncheckedCreateWithoutUserInput> | RoundEntryCreateWithoutUserInput[] | RoundEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoundEntryCreateOrConnectWithoutUserInput | RoundEntryCreateOrConnectWithoutUserInput[]
    createMany?: RoundEntryCreateManyUserInputEnvelope
    connect?: RoundEntryWhereUniqueInput | RoundEntryWhereUniqueInput[]
  }

  export type WithdrawOrderCreateNestedManyWithoutUserInput = {
    create?: XOR<WithdrawOrderCreateWithoutUserInput, WithdrawOrderUncheckedCreateWithoutUserInput> | WithdrawOrderCreateWithoutUserInput[] | WithdrawOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawOrderCreateOrConnectWithoutUserInput | WithdrawOrderCreateOrConnectWithoutUserInput[]
    createMany?: WithdrawOrderCreateManyUserInputEnvelope
    connect?: WithdrawOrderWhereUniqueInput | WithdrawOrderWhereUniqueInput[]
  }

  export type DepositOrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DepositOrderCreateWithoutUserInput, DepositOrderUncheckedCreateWithoutUserInput> | DepositOrderCreateWithoutUserInput[] | DepositOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepositOrderCreateOrConnectWithoutUserInput | DepositOrderCreateOrConnectWithoutUserInput[]
    createMany?: DepositOrderCreateManyUserInputEnvelope
    connect?: DepositOrderWhereUniqueInput | DepositOrderWhereUniqueInput[]
  }

  export type ServiceCodeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ServiceCodeCreateWithoutUserInput, ServiceCodeUncheckedCreateWithoutUserInput> | ServiceCodeCreateWithoutUserInput[] | ServiceCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServiceCodeCreateOrConnectWithoutUserInput | ServiceCodeCreateOrConnectWithoutUserInput[]
    createMany?: ServiceCodeCreateManyUserInputEnvelope
    connect?: ServiceCodeWhereUniqueInput | ServiceCodeWhereUniqueInput[]
  }

  export type RoundEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoundEntryCreateWithoutUserInput, RoundEntryUncheckedCreateWithoutUserInput> | RoundEntryCreateWithoutUserInput[] | RoundEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoundEntryCreateOrConnectWithoutUserInput | RoundEntryCreateOrConnectWithoutUserInput[]
    createMany?: RoundEntryCreateManyUserInputEnvelope
    connect?: RoundEntryWhereUniqueInput | RoundEntryWhereUniqueInput[]
  }

  export type WithdrawOrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WithdrawOrderCreateWithoutUserInput, WithdrawOrderUncheckedCreateWithoutUserInput> | WithdrawOrderCreateWithoutUserInput[] | WithdrawOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawOrderCreateOrConnectWithoutUserInput | WithdrawOrderCreateOrConnectWithoutUserInput[]
    createMany?: WithdrawOrderCreateManyUserInputEnvelope
    connect?: WithdrawOrderWhereUniqueInput | WithdrawOrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DepositOrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<DepositOrderCreateWithoutUserInput, DepositOrderUncheckedCreateWithoutUserInput> | DepositOrderCreateWithoutUserInput[] | DepositOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepositOrderCreateOrConnectWithoutUserInput | DepositOrderCreateOrConnectWithoutUserInput[]
    upsert?: DepositOrderUpsertWithWhereUniqueWithoutUserInput | DepositOrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DepositOrderCreateManyUserInputEnvelope
    set?: DepositOrderWhereUniqueInput | DepositOrderWhereUniqueInput[]
    disconnect?: DepositOrderWhereUniqueInput | DepositOrderWhereUniqueInput[]
    delete?: DepositOrderWhereUniqueInput | DepositOrderWhereUniqueInput[]
    connect?: DepositOrderWhereUniqueInput | DepositOrderWhereUniqueInput[]
    update?: DepositOrderUpdateWithWhereUniqueWithoutUserInput | DepositOrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DepositOrderUpdateManyWithWhereWithoutUserInput | DepositOrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DepositOrderScalarWhereInput | DepositOrderScalarWhereInput[]
  }

  export type ServiceCodeUpdateManyWithoutUserNestedInput = {
    create?: XOR<ServiceCodeCreateWithoutUserInput, ServiceCodeUncheckedCreateWithoutUserInput> | ServiceCodeCreateWithoutUserInput[] | ServiceCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServiceCodeCreateOrConnectWithoutUserInput | ServiceCodeCreateOrConnectWithoutUserInput[]
    upsert?: ServiceCodeUpsertWithWhereUniqueWithoutUserInput | ServiceCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ServiceCodeCreateManyUserInputEnvelope
    set?: ServiceCodeWhereUniqueInput | ServiceCodeWhereUniqueInput[]
    disconnect?: ServiceCodeWhereUniqueInput | ServiceCodeWhereUniqueInput[]
    delete?: ServiceCodeWhereUniqueInput | ServiceCodeWhereUniqueInput[]
    connect?: ServiceCodeWhereUniqueInput | ServiceCodeWhereUniqueInput[]
    update?: ServiceCodeUpdateWithWhereUniqueWithoutUserInput | ServiceCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ServiceCodeUpdateManyWithWhereWithoutUserInput | ServiceCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ServiceCodeScalarWhereInput | ServiceCodeScalarWhereInput[]
  }

  export type RoundEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoundEntryCreateWithoutUserInput, RoundEntryUncheckedCreateWithoutUserInput> | RoundEntryCreateWithoutUserInput[] | RoundEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoundEntryCreateOrConnectWithoutUserInput | RoundEntryCreateOrConnectWithoutUserInput[]
    upsert?: RoundEntryUpsertWithWhereUniqueWithoutUserInput | RoundEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoundEntryCreateManyUserInputEnvelope
    set?: RoundEntryWhereUniqueInput | RoundEntryWhereUniqueInput[]
    disconnect?: RoundEntryWhereUniqueInput | RoundEntryWhereUniqueInput[]
    delete?: RoundEntryWhereUniqueInput | RoundEntryWhereUniqueInput[]
    connect?: RoundEntryWhereUniqueInput | RoundEntryWhereUniqueInput[]
    update?: RoundEntryUpdateWithWhereUniqueWithoutUserInput | RoundEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoundEntryUpdateManyWithWhereWithoutUserInput | RoundEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoundEntryScalarWhereInput | RoundEntryScalarWhereInput[]
  }

  export type WithdrawOrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<WithdrawOrderCreateWithoutUserInput, WithdrawOrderUncheckedCreateWithoutUserInput> | WithdrawOrderCreateWithoutUserInput[] | WithdrawOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawOrderCreateOrConnectWithoutUserInput | WithdrawOrderCreateOrConnectWithoutUserInput[]
    upsert?: WithdrawOrderUpsertWithWhereUniqueWithoutUserInput | WithdrawOrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WithdrawOrderCreateManyUserInputEnvelope
    set?: WithdrawOrderWhereUniqueInput | WithdrawOrderWhereUniqueInput[]
    disconnect?: WithdrawOrderWhereUniqueInput | WithdrawOrderWhereUniqueInput[]
    delete?: WithdrawOrderWhereUniqueInput | WithdrawOrderWhereUniqueInput[]
    connect?: WithdrawOrderWhereUniqueInput | WithdrawOrderWhereUniqueInput[]
    update?: WithdrawOrderUpdateWithWhereUniqueWithoutUserInput | WithdrawOrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WithdrawOrderUpdateManyWithWhereWithoutUserInput | WithdrawOrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WithdrawOrderScalarWhereInput | WithdrawOrderScalarWhereInput[]
  }

  export type DepositOrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DepositOrderCreateWithoutUserInput, DepositOrderUncheckedCreateWithoutUserInput> | DepositOrderCreateWithoutUserInput[] | DepositOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepositOrderCreateOrConnectWithoutUserInput | DepositOrderCreateOrConnectWithoutUserInput[]
    upsert?: DepositOrderUpsertWithWhereUniqueWithoutUserInput | DepositOrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DepositOrderCreateManyUserInputEnvelope
    set?: DepositOrderWhereUniqueInput | DepositOrderWhereUniqueInput[]
    disconnect?: DepositOrderWhereUniqueInput | DepositOrderWhereUniqueInput[]
    delete?: DepositOrderWhereUniqueInput | DepositOrderWhereUniqueInput[]
    connect?: DepositOrderWhereUniqueInput | DepositOrderWhereUniqueInput[]
    update?: DepositOrderUpdateWithWhereUniqueWithoutUserInput | DepositOrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DepositOrderUpdateManyWithWhereWithoutUserInput | DepositOrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DepositOrderScalarWhereInput | DepositOrderScalarWhereInput[]
  }

  export type ServiceCodeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ServiceCodeCreateWithoutUserInput, ServiceCodeUncheckedCreateWithoutUserInput> | ServiceCodeCreateWithoutUserInput[] | ServiceCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServiceCodeCreateOrConnectWithoutUserInput | ServiceCodeCreateOrConnectWithoutUserInput[]
    upsert?: ServiceCodeUpsertWithWhereUniqueWithoutUserInput | ServiceCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ServiceCodeCreateManyUserInputEnvelope
    set?: ServiceCodeWhereUniqueInput | ServiceCodeWhereUniqueInput[]
    disconnect?: ServiceCodeWhereUniqueInput | ServiceCodeWhereUniqueInput[]
    delete?: ServiceCodeWhereUniqueInput | ServiceCodeWhereUniqueInput[]
    connect?: ServiceCodeWhereUniqueInput | ServiceCodeWhereUniqueInput[]
    update?: ServiceCodeUpdateWithWhereUniqueWithoutUserInput | ServiceCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ServiceCodeUpdateManyWithWhereWithoutUserInput | ServiceCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ServiceCodeScalarWhereInput | ServiceCodeScalarWhereInput[]
  }

  export type RoundEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoundEntryCreateWithoutUserInput, RoundEntryUncheckedCreateWithoutUserInput> | RoundEntryCreateWithoutUserInput[] | RoundEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoundEntryCreateOrConnectWithoutUserInput | RoundEntryCreateOrConnectWithoutUserInput[]
    upsert?: RoundEntryUpsertWithWhereUniqueWithoutUserInput | RoundEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoundEntryCreateManyUserInputEnvelope
    set?: RoundEntryWhereUniqueInput | RoundEntryWhereUniqueInput[]
    disconnect?: RoundEntryWhereUniqueInput | RoundEntryWhereUniqueInput[]
    delete?: RoundEntryWhereUniqueInput | RoundEntryWhereUniqueInput[]
    connect?: RoundEntryWhereUniqueInput | RoundEntryWhereUniqueInput[]
    update?: RoundEntryUpdateWithWhereUniqueWithoutUserInput | RoundEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoundEntryUpdateManyWithWhereWithoutUserInput | RoundEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoundEntryScalarWhereInput | RoundEntryScalarWhereInput[]
  }

  export type WithdrawOrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WithdrawOrderCreateWithoutUserInput, WithdrawOrderUncheckedCreateWithoutUserInput> | WithdrawOrderCreateWithoutUserInput[] | WithdrawOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawOrderCreateOrConnectWithoutUserInput | WithdrawOrderCreateOrConnectWithoutUserInput[]
    upsert?: WithdrawOrderUpsertWithWhereUniqueWithoutUserInput | WithdrawOrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WithdrawOrderCreateManyUserInputEnvelope
    set?: WithdrawOrderWhereUniqueInput | WithdrawOrderWhereUniqueInput[]
    disconnect?: WithdrawOrderWhereUniqueInput | WithdrawOrderWhereUniqueInput[]
    delete?: WithdrawOrderWhereUniqueInput | WithdrawOrderWhereUniqueInput[]
    connect?: WithdrawOrderWhereUniqueInput | WithdrawOrderWhereUniqueInput[]
    update?: WithdrawOrderUpdateWithWhereUniqueWithoutUserInput | WithdrawOrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WithdrawOrderUpdateManyWithWhereWithoutUserInput | WithdrawOrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WithdrawOrderScalarWhereInput | WithdrawOrderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDepositsInput = {
    create?: XOR<UserCreateWithoutDepositsInput, UserUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDepositsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumChainFieldUpdateOperationsInput = {
    set?: $Enums.Chain
  }

  export type EnumStablecoinFieldUpdateOperationsInput = {
    set?: $Enums.Stablecoin
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumTxStatusFieldUpdateOperationsInput = {
    set?: $Enums.TxStatus
  }

  export type UserUpdateOneWithoutDepositsNestedInput = {
    create?: XOR<UserCreateWithoutDepositsInput, UserUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDepositsInput
    upsert?: UserUpsertWithoutDepositsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDepositsInput, UserUpdateWithoutDepositsInput>, UserUncheckedUpdateWithoutDepositsInput>
  }

  export type UserCreateNestedOneWithoutServiceCodesInput = {
    create?: XOR<UserCreateWithoutServiceCodesInput, UserUncheckedCreateWithoutServiceCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutServiceCodesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutServiceCodesNestedInput = {
    create?: XOR<UserCreateWithoutServiceCodesInput, UserUncheckedCreateWithoutServiceCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutServiceCodesInput
    upsert?: UserUpsertWithoutServiceCodesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutServiceCodesInput, UserUpdateWithoutServiceCodesInput>, UserUncheckedUpdateWithoutServiceCodesInput>
  }

  export type RoundEntryCreateNestedManyWithoutRoundInput = {
    create?: XOR<RoundEntryCreateWithoutRoundInput, RoundEntryUncheckedCreateWithoutRoundInput> | RoundEntryCreateWithoutRoundInput[] | RoundEntryUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: RoundEntryCreateOrConnectWithoutRoundInput | RoundEntryCreateOrConnectWithoutRoundInput[]
    createMany?: RoundEntryCreateManyRoundInputEnvelope
    connect?: RoundEntryWhereUniqueInput | RoundEntryWhereUniqueInput[]
  }

  export type RoundEntryUncheckedCreateNestedManyWithoutRoundInput = {
    create?: XOR<RoundEntryCreateWithoutRoundInput, RoundEntryUncheckedCreateWithoutRoundInput> | RoundEntryCreateWithoutRoundInput[] | RoundEntryUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: RoundEntryCreateOrConnectWithoutRoundInput | RoundEntryCreateOrConnectWithoutRoundInput[]
    createMany?: RoundEntryCreateManyRoundInputEnvelope
    connect?: RoundEntryWhereUniqueInput | RoundEntryWhereUniqueInput[]
  }

  export type EnumRoundStatusFieldUpdateOperationsInput = {
    set?: $Enums.RoundStatus
  }

  export type RoundEntryUpdateManyWithoutRoundNestedInput = {
    create?: XOR<RoundEntryCreateWithoutRoundInput, RoundEntryUncheckedCreateWithoutRoundInput> | RoundEntryCreateWithoutRoundInput[] | RoundEntryUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: RoundEntryCreateOrConnectWithoutRoundInput | RoundEntryCreateOrConnectWithoutRoundInput[]
    upsert?: RoundEntryUpsertWithWhereUniqueWithoutRoundInput | RoundEntryUpsertWithWhereUniqueWithoutRoundInput[]
    createMany?: RoundEntryCreateManyRoundInputEnvelope
    set?: RoundEntryWhereUniqueInput | RoundEntryWhereUniqueInput[]
    disconnect?: RoundEntryWhereUniqueInput | RoundEntryWhereUniqueInput[]
    delete?: RoundEntryWhereUniqueInput | RoundEntryWhereUniqueInput[]
    connect?: RoundEntryWhereUniqueInput | RoundEntryWhereUniqueInput[]
    update?: RoundEntryUpdateWithWhereUniqueWithoutRoundInput | RoundEntryUpdateWithWhereUniqueWithoutRoundInput[]
    updateMany?: RoundEntryUpdateManyWithWhereWithoutRoundInput | RoundEntryUpdateManyWithWhereWithoutRoundInput[]
    deleteMany?: RoundEntryScalarWhereInput | RoundEntryScalarWhereInput[]
  }

  export type RoundEntryUncheckedUpdateManyWithoutRoundNestedInput = {
    create?: XOR<RoundEntryCreateWithoutRoundInput, RoundEntryUncheckedCreateWithoutRoundInput> | RoundEntryCreateWithoutRoundInput[] | RoundEntryUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: RoundEntryCreateOrConnectWithoutRoundInput | RoundEntryCreateOrConnectWithoutRoundInput[]
    upsert?: RoundEntryUpsertWithWhereUniqueWithoutRoundInput | RoundEntryUpsertWithWhereUniqueWithoutRoundInput[]
    createMany?: RoundEntryCreateManyRoundInputEnvelope
    set?: RoundEntryWhereUniqueInput | RoundEntryWhereUniqueInput[]
    disconnect?: RoundEntryWhereUniqueInput | RoundEntryWhereUniqueInput[]
    delete?: RoundEntryWhereUniqueInput | RoundEntryWhereUniqueInput[]
    connect?: RoundEntryWhereUniqueInput | RoundEntryWhereUniqueInput[]
    update?: RoundEntryUpdateWithWhereUniqueWithoutRoundInput | RoundEntryUpdateWithWhereUniqueWithoutRoundInput[]
    updateMany?: RoundEntryUpdateManyWithWhereWithoutRoundInput | RoundEntryUpdateManyWithWhereWithoutRoundInput[]
    deleteMany?: RoundEntryScalarWhereInput | RoundEntryScalarWhereInput[]
  }

  export type RoundCreateNestedOneWithoutEntriesInput = {
    create?: XOR<RoundCreateWithoutEntriesInput, RoundUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: RoundCreateOrConnectWithoutEntriesInput
    connect?: RoundWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRoundEntriesInput = {
    create?: XOR<UserCreateWithoutRoundEntriesInput, UserUncheckedCreateWithoutRoundEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoundEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type RoundUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<RoundCreateWithoutEntriesInput, RoundUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: RoundCreateOrConnectWithoutEntriesInput
    upsert?: RoundUpsertWithoutEntriesInput
    connect?: RoundWhereUniqueInput
    update?: XOR<XOR<RoundUpdateToOneWithWhereWithoutEntriesInput, RoundUpdateWithoutEntriesInput>, RoundUncheckedUpdateWithoutEntriesInput>
  }

  export type UserUpdateOneRequiredWithoutRoundEntriesNestedInput = {
    create?: XOR<UserCreateWithoutRoundEntriesInput, UserUncheckedCreateWithoutRoundEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoundEntriesInput
    upsert?: UserUpsertWithoutRoundEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoundEntriesInput, UserUpdateWithoutRoundEntriesInput>, UserUncheckedUpdateWithoutRoundEntriesInput>
  }

  export type UserCreateNestedOneWithoutWithdrawalsInput = {
    create?: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWithdrawalsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumWithdrawStatusFieldUpdateOperationsInput = {
    set?: $Enums.WithdrawStatus
  }

  export type UserUpdateOneRequiredWithoutWithdrawalsNestedInput = {
    create?: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWithdrawalsInput
    upsert?: UserUpsertWithoutWithdrawalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWithdrawalsInput, UserUpdateWithoutWithdrawalsInput>, UserUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedEnumChainFilter<$PrismaModel = never> = {
    equals?: $Enums.Chain | EnumChainFieldRefInput<$PrismaModel>
    in?: $Enums.Chain[] | ListEnumChainFieldRefInput<$PrismaModel>
    notIn?: $Enums.Chain[] | ListEnumChainFieldRefInput<$PrismaModel>
    not?: NestedEnumChainFilter<$PrismaModel> | $Enums.Chain
  }

  export type NestedEnumStablecoinFilter<$PrismaModel = never> = {
    equals?: $Enums.Stablecoin | EnumStablecoinFieldRefInput<$PrismaModel>
    in?: $Enums.Stablecoin[] | ListEnumStablecoinFieldRefInput<$PrismaModel>
    notIn?: $Enums.Stablecoin[] | ListEnumStablecoinFieldRefInput<$PrismaModel>
    not?: NestedEnumStablecoinFilter<$PrismaModel> | $Enums.Stablecoin
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedEnumTxStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TxStatus | EnumTxStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TxStatus[] | ListEnumTxStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TxStatus[] | ListEnumTxStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTxStatusFilter<$PrismaModel> | $Enums.TxStatus
  }

  export type NestedEnumChainWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Chain | EnumChainFieldRefInput<$PrismaModel>
    in?: $Enums.Chain[] | ListEnumChainFieldRefInput<$PrismaModel>
    notIn?: $Enums.Chain[] | ListEnumChainFieldRefInput<$PrismaModel>
    not?: NestedEnumChainWithAggregatesFilter<$PrismaModel> | $Enums.Chain
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChainFilter<$PrismaModel>
    _max?: NestedEnumChainFilter<$PrismaModel>
  }

  export type NestedEnumStablecoinWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Stablecoin | EnumStablecoinFieldRefInput<$PrismaModel>
    in?: $Enums.Stablecoin[] | ListEnumStablecoinFieldRefInput<$PrismaModel>
    notIn?: $Enums.Stablecoin[] | ListEnumStablecoinFieldRefInput<$PrismaModel>
    not?: NestedEnumStablecoinWithAggregatesFilter<$PrismaModel> | $Enums.Stablecoin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStablecoinFilter<$PrismaModel>
    _max?: NestedEnumStablecoinFilter<$PrismaModel>
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

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type NestedEnumTxStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TxStatus | EnumTxStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TxStatus[] | ListEnumTxStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TxStatus[] | ListEnumTxStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTxStatusWithAggregatesFilter<$PrismaModel> | $Enums.TxStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTxStatusFilter<$PrismaModel>
    _max?: NestedEnumTxStatusFilter<$PrismaModel>
  }

  export type NestedEnumRoundStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoundStatus | EnumRoundStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoundStatus[] | ListEnumRoundStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoundStatus[] | ListEnumRoundStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoundStatusFilter<$PrismaModel> | $Enums.RoundStatus
  }

  export type NestedEnumRoundStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoundStatus | EnumRoundStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoundStatus[] | ListEnumRoundStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoundStatus[] | ListEnumRoundStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoundStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoundStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoundStatusFilter<$PrismaModel>
    _max?: NestedEnumRoundStatusFilter<$PrismaModel>
  }

  export type NestedEnumWithdrawStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WithdrawStatus | EnumWithdrawStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WithdrawStatus[] | ListEnumWithdrawStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WithdrawStatus[] | ListEnumWithdrawStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWithdrawStatusFilter<$PrismaModel> | $Enums.WithdrawStatus
  }

  export type NestedEnumWithdrawStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WithdrawStatus | EnumWithdrawStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WithdrawStatus[] | ListEnumWithdrawStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WithdrawStatus[] | ListEnumWithdrawStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWithdrawStatusWithAggregatesFilter<$PrismaModel> | $Enums.WithdrawStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWithdrawStatusFilter<$PrismaModel>
    _max?: NestedEnumWithdrawStatusFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DepositOrderCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderNo: string
    chain: $Enums.Chain
    coin: $Enums.Stablecoin
    toAddress: string
    fromAddress?: string | null
    txHash?: string | null
    blockNumber?: bigint | number | null
    amount: Decimal | DecimalJsLike | number | string
    confirmations?: number
    requiredConf?: number
    status?: $Enums.TxStatus
    confirmedAt?: Date | string | null
  }

  export type DepositOrderUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderNo: string
    chain: $Enums.Chain
    coin: $Enums.Stablecoin
    toAddress: string
    fromAddress?: string | null
    txHash?: string | null
    blockNumber?: bigint | number | null
    amount: Decimal | DecimalJsLike | number | string
    confirmations?: number
    requiredConf?: number
    status?: $Enums.TxStatus
    confirmedAt?: Date | string | null
  }

  export type DepositOrderCreateOrConnectWithoutUserInput = {
    where: DepositOrderWhereUniqueInput
    create: XOR<DepositOrderCreateWithoutUserInput, DepositOrderUncheckedCreateWithoutUserInput>
  }

  export type DepositOrderCreateManyUserInputEnvelope = {
    data: DepositOrderCreateManyUserInput | DepositOrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ServiceCodeCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    code: string
    issuedFor: $Enums.Stablecoin
    expiresAt: Date | string
    redeemedAt?: Date | string | null
  }

  export type ServiceCodeUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    code: string
    issuedFor: $Enums.Stablecoin
    expiresAt: Date | string
    redeemedAt?: Date | string | null
  }

  export type ServiceCodeCreateOrConnectWithoutUserInput = {
    where: ServiceCodeWhereUniqueInput
    create: XOR<ServiceCodeCreateWithoutUserInput, ServiceCodeUncheckedCreateWithoutUserInput>
  }

  export type ServiceCodeCreateManyUserInputEnvelope = {
    data: ServiceCodeCreateManyUserInput | ServiceCodeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoundEntryCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    coin: $Enums.Stablecoin
    amount: Decimal | DecimalJsLike | number | string
    profit: Decimal | DecimalJsLike | number | string
    settledAt?: Date | string | null
    round: RoundCreateNestedOneWithoutEntriesInput
  }

  export type RoundEntryUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    roundId: string
    coin: $Enums.Stablecoin
    amount: Decimal | DecimalJsLike | number | string
    profit: Decimal | DecimalJsLike | number | string
    settledAt?: Date | string | null
  }

  export type RoundEntryCreateOrConnectWithoutUserInput = {
    where: RoundEntryWhereUniqueInput
    create: XOR<RoundEntryCreateWithoutUserInput, RoundEntryUncheckedCreateWithoutUserInput>
  }

  export type RoundEntryCreateManyUserInputEnvelope = {
    data: RoundEntryCreateManyUserInput | RoundEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WithdrawOrderCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderNo: string
    chain: $Enums.Chain
    coin: $Enums.Stablecoin
    amount: Decimal | DecimalJsLike | number | string
    toAddress: string
    kycRef?: string | null
    status?: $Enums.WithdrawStatus
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    reviewNote?: string | null
    paidTxHash?: string | null
    paidAt?: Date | string | null
  }

  export type WithdrawOrderUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderNo: string
    chain: $Enums.Chain
    coin: $Enums.Stablecoin
    amount: Decimal | DecimalJsLike | number | string
    toAddress: string
    kycRef?: string | null
    status?: $Enums.WithdrawStatus
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    reviewNote?: string | null
    paidTxHash?: string | null
    paidAt?: Date | string | null
  }

  export type WithdrawOrderCreateOrConnectWithoutUserInput = {
    where: WithdrawOrderWhereUniqueInput
    create: XOR<WithdrawOrderCreateWithoutUserInput, WithdrawOrderUncheckedCreateWithoutUserInput>
  }

  export type WithdrawOrderCreateManyUserInputEnvelope = {
    data: WithdrawOrderCreateManyUserInput | WithdrawOrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DepositOrderUpsertWithWhereUniqueWithoutUserInput = {
    where: DepositOrderWhereUniqueInput
    update: XOR<DepositOrderUpdateWithoutUserInput, DepositOrderUncheckedUpdateWithoutUserInput>
    create: XOR<DepositOrderCreateWithoutUserInput, DepositOrderUncheckedCreateWithoutUserInput>
  }

  export type DepositOrderUpdateWithWhereUniqueWithoutUserInput = {
    where: DepositOrderWhereUniqueInput
    data: XOR<DepositOrderUpdateWithoutUserInput, DepositOrderUncheckedUpdateWithoutUserInput>
  }

  export type DepositOrderUpdateManyWithWhereWithoutUserInput = {
    where: DepositOrderScalarWhereInput
    data: XOR<DepositOrderUpdateManyMutationInput, DepositOrderUncheckedUpdateManyWithoutUserInput>
  }

  export type DepositOrderScalarWhereInput = {
    AND?: DepositOrderScalarWhereInput | DepositOrderScalarWhereInput[]
    OR?: DepositOrderScalarWhereInput[]
    NOT?: DepositOrderScalarWhereInput | DepositOrderScalarWhereInput[]
    id?: StringFilter<"DepositOrder"> | string
    createdAt?: DateTimeFilter<"DepositOrder"> | Date | string
    updatedAt?: DateTimeFilter<"DepositOrder"> | Date | string
    orderNo?: StringFilter<"DepositOrder"> | string
    chain?: EnumChainFilter<"DepositOrder"> | $Enums.Chain
    coin?: EnumStablecoinFilter<"DepositOrder"> | $Enums.Stablecoin
    toAddress?: StringFilter<"DepositOrder"> | string
    fromAddress?: StringNullableFilter<"DepositOrder"> | string | null
    txHash?: StringNullableFilter<"DepositOrder"> | string | null
    blockNumber?: BigIntNullableFilter<"DepositOrder"> | bigint | number | null
    amount?: DecimalFilter<"DepositOrder"> | Decimal | DecimalJsLike | number | string
    confirmations?: IntFilter<"DepositOrder"> | number
    requiredConf?: IntFilter<"DepositOrder"> | number
    status?: EnumTxStatusFilter<"DepositOrder"> | $Enums.TxStatus
    confirmedAt?: DateTimeNullableFilter<"DepositOrder"> | Date | string | null
    userId?: StringNullableFilter<"DepositOrder"> | string | null
  }

  export type ServiceCodeUpsertWithWhereUniqueWithoutUserInput = {
    where: ServiceCodeWhereUniqueInput
    update: XOR<ServiceCodeUpdateWithoutUserInput, ServiceCodeUncheckedUpdateWithoutUserInput>
    create: XOR<ServiceCodeCreateWithoutUserInput, ServiceCodeUncheckedCreateWithoutUserInput>
  }

  export type ServiceCodeUpdateWithWhereUniqueWithoutUserInput = {
    where: ServiceCodeWhereUniqueInput
    data: XOR<ServiceCodeUpdateWithoutUserInput, ServiceCodeUncheckedUpdateWithoutUserInput>
  }

  export type ServiceCodeUpdateManyWithWhereWithoutUserInput = {
    where: ServiceCodeScalarWhereInput
    data: XOR<ServiceCodeUpdateManyMutationInput, ServiceCodeUncheckedUpdateManyWithoutUserInput>
  }

  export type ServiceCodeScalarWhereInput = {
    AND?: ServiceCodeScalarWhereInput | ServiceCodeScalarWhereInput[]
    OR?: ServiceCodeScalarWhereInput[]
    NOT?: ServiceCodeScalarWhereInput | ServiceCodeScalarWhereInput[]
    id?: StringFilter<"ServiceCode"> | string
    createdAt?: DateTimeFilter<"ServiceCode"> | Date | string
    code?: StringFilter<"ServiceCode"> | string
    issuedFor?: EnumStablecoinFilter<"ServiceCode"> | $Enums.Stablecoin
    expiresAt?: DateTimeFilter<"ServiceCode"> | Date | string
    redeemedAt?: DateTimeNullableFilter<"ServiceCode"> | Date | string | null
    userId?: StringFilter<"ServiceCode"> | string
  }

  export type RoundEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: RoundEntryWhereUniqueInput
    update: XOR<RoundEntryUpdateWithoutUserInput, RoundEntryUncheckedUpdateWithoutUserInput>
    create: XOR<RoundEntryCreateWithoutUserInput, RoundEntryUncheckedCreateWithoutUserInput>
  }

  export type RoundEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: RoundEntryWhereUniqueInput
    data: XOR<RoundEntryUpdateWithoutUserInput, RoundEntryUncheckedUpdateWithoutUserInput>
  }

  export type RoundEntryUpdateManyWithWhereWithoutUserInput = {
    where: RoundEntryScalarWhereInput
    data: XOR<RoundEntryUpdateManyMutationInput, RoundEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type RoundEntryScalarWhereInput = {
    AND?: RoundEntryScalarWhereInput | RoundEntryScalarWhereInput[]
    OR?: RoundEntryScalarWhereInput[]
    NOT?: RoundEntryScalarWhereInput | RoundEntryScalarWhereInput[]
    id?: StringFilter<"RoundEntry"> | string
    createdAt?: DateTimeFilter<"RoundEntry"> | Date | string
    roundId?: StringFilter<"RoundEntry"> | string
    userId?: StringFilter<"RoundEntry"> | string
    coin?: EnumStablecoinFilter<"RoundEntry"> | $Enums.Stablecoin
    amount?: DecimalFilter<"RoundEntry"> | Decimal | DecimalJsLike | number | string
    profit?: DecimalFilter<"RoundEntry"> | Decimal | DecimalJsLike | number | string
    settledAt?: DateTimeNullableFilter<"RoundEntry"> | Date | string | null
  }

  export type WithdrawOrderUpsertWithWhereUniqueWithoutUserInput = {
    where: WithdrawOrderWhereUniqueInput
    update: XOR<WithdrawOrderUpdateWithoutUserInput, WithdrawOrderUncheckedUpdateWithoutUserInput>
    create: XOR<WithdrawOrderCreateWithoutUserInput, WithdrawOrderUncheckedCreateWithoutUserInput>
  }

  export type WithdrawOrderUpdateWithWhereUniqueWithoutUserInput = {
    where: WithdrawOrderWhereUniqueInput
    data: XOR<WithdrawOrderUpdateWithoutUserInput, WithdrawOrderUncheckedUpdateWithoutUserInput>
  }

  export type WithdrawOrderUpdateManyWithWhereWithoutUserInput = {
    where: WithdrawOrderScalarWhereInput
    data: XOR<WithdrawOrderUpdateManyMutationInput, WithdrawOrderUncheckedUpdateManyWithoutUserInput>
  }

  export type WithdrawOrderScalarWhereInput = {
    AND?: WithdrawOrderScalarWhereInput | WithdrawOrderScalarWhereInput[]
    OR?: WithdrawOrderScalarWhereInput[]
    NOT?: WithdrawOrderScalarWhereInput | WithdrawOrderScalarWhereInput[]
    id?: StringFilter<"WithdrawOrder"> | string
    createdAt?: DateTimeFilter<"WithdrawOrder"> | Date | string
    updatedAt?: DateTimeFilter<"WithdrawOrder"> | Date | string
    orderNo?: StringFilter<"WithdrawOrder"> | string
    userId?: StringFilter<"WithdrawOrder"> | string
    chain?: EnumChainFilter<"WithdrawOrder"> | $Enums.Chain
    coin?: EnumStablecoinFilter<"WithdrawOrder"> | $Enums.Stablecoin
    amount?: DecimalFilter<"WithdrawOrder"> | Decimal | DecimalJsLike | number | string
    toAddress?: StringFilter<"WithdrawOrder"> | string
    kycRef?: StringNullableFilter<"WithdrawOrder"> | string | null
    status?: EnumWithdrawStatusFilter<"WithdrawOrder"> | $Enums.WithdrawStatus
    reviewedBy?: StringNullableFilter<"WithdrawOrder"> | string | null
    reviewedAt?: DateTimeNullableFilter<"WithdrawOrder"> | Date | string | null
    reviewNote?: StringNullableFilter<"WithdrawOrder"> | string | null
    paidTxHash?: StringNullableFilter<"WithdrawOrder"> | string | null
    paidAt?: DateTimeNullableFilter<"WithdrawOrder"> | Date | string | null
  }

  export type UserCreateWithoutDepositsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    walletAddress: string
    balanceUsdc?: Decimal | DecimalJsLike | number | string
    balanceUsdt?: Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: number
    timesBalance?: number
    quotaResetAt?: Date | string | null
    serviceCodes?: ServiceCodeCreateNestedManyWithoutUserInput
    roundEntries?: RoundEntryCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawOrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDepositsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    walletAddress: string
    balanceUsdc?: Decimal | DecimalJsLike | number | string
    balanceUsdt?: Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: number
    timesBalance?: number
    quotaResetAt?: Date | string | null
    serviceCodes?: ServiceCodeUncheckedCreateNestedManyWithoutUserInput
    roundEntries?: RoundEntryUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawOrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDepositsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepositsInput, UserUncheckedCreateWithoutDepositsInput>
  }

  export type UserUpsertWithoutDepositsInput = {
    update: XOR<UserUpdateWithoutDepositsInput, UserUncheckedUpdateWithoutDepositsInput>
    create: XOR<UserCreateWithoutDepositsInput, UserUncheckedCreateWithoutDepositsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDepositsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDepositsInput, UserUncheckedUpdateWithoutDepositsInput>
  }

  export type UserUpdateWithoutDepositsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    balanceUsdc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceUsdt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: IntFieldUpdateOperationsInput | number
    timesBalance?: IntFieldUpdateOperationsInput | number
    quotaResetAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    serviceCodes?: ServiceCodeUpdateManyWithoutUserNestedInput
    roundEntries?: RoundEntryUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawOrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDepositsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    balanceUsdc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceUsdt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: IntFieldUpdateOperationsInput | number
    timesBalance?: IntFieldUpdateOperationsInput | number
    quotaResetAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    serviceCodes?: ServiceCodeUncheckedUpdateManyWithoutUserNestedInput
    roundEntries?: RoundEntryUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawOrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutServiceCodesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    walletAddress: string
    balanceUsdc?: Decimal | DecimalJsLike | number | string
    balanceUsdt?: Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: number
    timesBalance?: number
    quotaResetAt?: Date | string | null
    deposits?: DepositOrderCreateNestedManyWithoutUserInput
    roundEntries?: RoundEntryCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawOrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutServiceCodesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    walletAddress: string
    balanceUsdc?: Decimal | DecimalJsLike | number | string
    balanceUsdt?: Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: number
    timesBalance?: number
    quotaResetAt?: Date | string | null
    deposits?: DepositOrderUncheckedCreateNestedManyWithoutUserInput
    roundEntries?: RoundEntryUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawOrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutServiceCodesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutServiceCodesInput, UserUncheckedCreateWithoutServiceCodesInput>
  }

  export type UserUpsertWithoutServiceCodesInput = {
    update: XOR<UserUpdateWithoutServiceCodesInput, UserUncheckedUpdateWithoutServiceCodesInput>
    create: XOR<UserCreateWithoutServiceCodesInput, UserUncheckedCreateWithoutServiceCodesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutServiceCodesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutServiceCodesInput, UserUncheckedUpdateWithoutServiceCodesInput>
  }

  export type UserUpdateWithoutServiceCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    balanceUsdc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceUsdt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: IntFieldUpdateOperationsInput | number
    timesBalance?: IntFieldUpdateOperationsInput | number
    quotaResetAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deposits?: DepositOrderUpdateManyWithoutUserNestedInput
    roundEntries?: RoundEntryUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawOrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutServiceCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    balanceUsdc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceUsdt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: IntFieldUpdateOperationsInput | number
    timesBalance?: IntFieldUpdateOperationsInput | number
    quotaResetAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deposits?: DepositOrderUncheckedUpdateManyWithoutUserNestedInput
    roundEntries?: RoundEntryUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawOrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoundEntryCreateWithoutRoundInput = {
    id?: string
    createdAt?: Date | string
    coin: $Enums.Stablecoin
    amount: Decimal | DecimalJsLike | number | string
    profit: Decimal | DecimalJsLike | number | string
    settledAt?: Date | string | null
    user: UserCreateNestedOneWithoutRoundEntriesInput
  }

  export type RoundEntryUncheckedCreateWithoutRoundInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    coin: $Enums.Stablecoin
    amount: Decimal | DecimalJsLike | number | string
    profit: Decimal | DecimalJsLike | number | string
    settledAt?: Date | string | null
  }

  export type RoundEntryCreateOrConnectWithoutRoundInput = {
    where: RoundEntryWhereUniqueInput
    create: XOR<RoundEntryCreateWithoutRoundInput, RoundEntryUncheckedCreateWithoutRoundInput>
  }

  export type RoundEntryCreateManyRoundInputEnvelope = {
    data: RoundEntryCreateManyRoundInput | RoundEntryCreateManyRoundInput[]
    skipDuplicates?: boolean
  }

  export type RoundEntryUpsertWithWhereUniqueWithoutRoundInput = {
    where: RoundEntryWhereUniqueInput
    update: XOR<RoundEntryUpdateWithoutRoundInput, RoundEntryUncheckedUpdateWithoutRoundInput>
    create: XOR<RoundEntryCreateWithoutRoundInput, RoundEntryUncheckedCreateWithoutRoundInput>
  }

  export type RoundEntryUpdateWithWhereUniqueWithoutRoundInput = {
    where: RoundEntryWhereUniqueInput
    data: XOR<RoundEntryUpdateWithoutRoundInput, RoundEntryUncheckedUpdateWithoutRoundInput>
  }

  export type RoundEntryUpdateManyWithWhereWithoutRoundInput = {
    where: RoundEntryScalarWhereInput
    data: XOR<RoundEntryUpdateManyMutationInput, RoundEntryUncheckedUpdateManyWithoutRoundInput>
  }

  export type RoundCreateWithoutEntriesInput = {
    id?: string
    createdAt?: Date | string
    roundNo: number
    startedAt: Date | string
    endsAt: Date | string
    status?: $Enums.RoundStatus
  }

  export type RoundUncheckedCreateWithoutEntriesInput = {
    id?: string
    createdAt?: Date | string
    roundNo: number
    startedAt: Date | string
    endsAt: Date | string
    status?: $Enums.RoundStatus
  }

  export type RoundCreateOrConnectWithoutEntriesInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutEntriesInput, RoundUncheckedCreateWithoutEntriesInput>
  }

  export type UserCreateWithoutRoundEntriesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    walletAddress: string
    balanceUsdc?: Decimal | DecimalJsLike | number | string
    balanceUsdt?: Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: number
    timesBalance?: number
    quotaResetAt?: Date | string | null
    deposits?: DepositOrderCreateNestedManyWithoutUserInput
    serviceCodes?: ServiceCodeCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawOrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoundEntriesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    walletAddress: string
    balanceUsdc?: Decimal | DecimalJsLike | number | string
    balanceUsdt?: Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: number
    timesBalance?: number
    quotaResetAt?: Date | string | null
    deposits?: DepositOrderUncheckedCreateNestedManyWithoutUserInput
    serviceCodes?: ServiceCodeUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawOrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoundEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoundEntriesInput, UserUncheckedCreateWithoutRoundEntriesInput>
  }

  export type RoundUpsertWithoutEntriesInput = {
    update: XOR<RoundUpdateWithoutEntriesInput, RoundUncheckedUpdateWithoutEntriesInput>
    create: XOR<RoundCreateWithoutEntriesInput, RoundUncheckedCreateWithoutEntriesInput>
    where?: RoundWhereInput
  }

  export type RoundUpdateToOneWithWhereWithoutEntriesInput = {
    where?: RoundWhereInput
    data: XOR<RoundUpdateWithoutEntriesInput, RoundUncheckedUpdateWithoutEntriesInput>
  }

  export type RoundUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundNo?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRoundStatusFieldUpdateOperationsInput | $Enums.RoundStatus
  }

  export type RoundUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundNo?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRoundStatusFieldUpdateOperationsInput | $Enums.RoundStatus
  }

  export type UserUpsertWithoutRoundEntriesInput = {
    update: XOR<UserUpdateWithoutRoundEntriesInput, UserUncheckedUpdateWithoutRoundEntriesInput>
    create: XOR<UserCreateWithoutRoundEntriesInput, UserUncheckedCreateWithoutRoundEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoundEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoundEntriesInput, UserUncheckedUpdateWithoutRoundEntriesInput>
  }

  export type UserUpdateWithoutRoundEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    balanceUsdc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceUsdt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: IntFieldUpdateOperationsInput | number
    timesBalance?: IntFieldUpdateOperationsInput | number
    quotaResetAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deposits?: DepositOrderUpdateManyWithoutUserNestedInput
    serviceCodes?: ServiceCodeUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawOrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoundEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    balanceUsdc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceUsdt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: IntFieldUpdateOperationsInput | number
    timesBalance?: IntFieldUpdateOperationsInput | number
    quotaResetAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deposits?: DepositOrderUncheckedUpdateManyWithoutUserNestedInput
    serviceCodes?: ServiceCodeUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawOrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWithdrawalsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    walletAddress: string
    balanceUsdc?: Decimal | DecimalJsLike | number | string
    balanceUsdt?: Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: number
    timesBalance?: number
    quotaResetAt?: Date | string | null
    deposits?: DepositOrderCreateNestedManyWithoutUserInput
    serviceCodes?: ServiceCodeCreateNestedManyWithoutUserInput
    roundEntries?: RoundEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWithdrawalsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    walletAddress: string
    balanceUsdc?: Decimal | DecimalJsLike | number | string
    balanceUsdt?: Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: number
    timesBalance?: number
    quotaResetAt?: Date | string | null
    deposits?: DepositOrderUncheckedCreateNestedManyWithoutUserInput
    serviceCodes?: ServiceCodeUncheckedCreateNestedManyWithoutUserInput
    roundEntries?: RoundEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWithdrawalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
  }

  export type UserUpsertWithoutWithdrawalsInput = {
    update: XOR<UserUpdateWithoutWithdrawalsInput, UserUncheckedUpdateWithoutWithdrawalsInput>
    create: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWithdrawalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWithdrawalsInput, UserUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type UserUpdateWithoutWithdrawalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    balanceUsdc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceUsdt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: IntFieldUpdateOperationsInput | number
    timesBalance?: IntFieldUpdateOperationsInput | number
    quotaResetAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deposits?: DepositOrderUpdateManyWithoutUserNestedInput
    serviceCodes?: ServiceCodeUpdateManyWithoutUserNestedInput
    roundEntries?: RoundEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWithdrawalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    balanceUsdc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceUsdt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dailyQuotaUsed?: IntFieldUpdateOperationsInput | number
    timesBalance?: IntFieldUpdateOperationsInput | number
    quotaResetAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deposits?: DepositOrderUncheckedUpdateManyWithoutUserNestedInput
    serviceCodes?: ServiceCodeUncheckedUpdateManyWithoutUserNestedInput
    roundEntries?: RoundEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DepositOrderCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderNo: string
    chain: $Enums.Chain
    coin: $Enums.Stablecoin
    toAddress: string
    fromAddress?: string | null
    txHash?: string | null
    blockNumber?: bigint | number | null
    amount: Decimal | DecimalJsLike | number | string
    confirmations?: number
    requiredConf?: number
    status?: $Enums.TxStatus
    confirmedAt?: Date | string | null
  }

  export type ServiceCodeCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    code: string
    issuedFor: $Enums.Stablecoin
    expiresAt: Date | string
    redeemedAt?: Date | string | null
  }

  export type RoundEntryCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    roundId: string
    coin: $Enums.Stablecoin
    amount: Decimal | DecimalJsLike | number | string
    profit: Decimal | DecimalJsLike | number | string
    settledAt?: Date | string | null
  }

  export type WithdrawOrderCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderNo: string
    chain: $Enums.Chain
    coin: $Enums.Stablecoin
    amount: Decimal | DecimalJsLike | number | string
    toAddress: string
    kycRef?: string | null
    status?: $Enums.WithdrawStatus
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    reviewNote?: string | null
    paidTxHash?: string | null
    paidAt?: Date | string | null
  }

  export type DepositOrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderNo?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    coin?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    toAddress?: StringFieldUpdateOperationsInput | string
    fromAddress?: NullableStringFieldUpdateOperationsInput | string | null
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    blockNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confirmations?: IntFieldUpdateOperationsInput | number
    requiredConf?: IntFieldUpdateOperationsInput | number
    status?: EnumTxStatusFieldUpdateOperationsInput | $Enums.TxStatus
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DepositOrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderNo?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    coin?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    toAddress?: StringFieldUpdateOperationsInput | string
    fromAddress?: NullableStringFieldUpdateOperationsInput | string | null
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    blockNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confirmations?: IntFieldUpdateOperationsInput | number
    requiredConf?: IntFieldUpdateOperationsInput | number
    status?: EnumTxStatusFieldUpdateOperationsInput | $Enums.TxStatus
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DepositOrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderNo?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    coin?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    toAddress?: StringFieldUpdateOperationsInput | string
    fromAddress?: NullableStringFieldUpdateOperationsInput | string | null
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    blockNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confirmations?: IntFieldUpdateOperationsInput | number
    requiredConf?: IntFieldUpdateOperationsInput | number
    status?: EnumTxStatusFieldUpdateOperationsInput | $Enums.TxStatus
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceCodeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    issuedFor?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceCodeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    issuedFor?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceCodeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    issuedFor?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoundEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coin?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    round?: RoundUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type RoundEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundId?: StringFieldUpdateOperationsInput | string
    coin?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoundEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundId?: StringFieldUpdateOperationsInput | string
    coin?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WithdrawOrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderNo?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    coin?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    toAddress?: StringFieldUpdateOperationsInput | string
    kycRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWithdrawStatusFieldUpdateOperationsInput | $Enums.WithdrawStatus
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    paidTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WithdrawOrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderNo?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    coin?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    toAddress?: StringFieldUpdateOperationsInput | string
    kycRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWithdrawStatusFieldUpdateOperationsInput | $Enums.WithdrawStatus
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    paidTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WithdrawOrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderNo?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    coin?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    toAddress?: StringFieldUpdateOperationsInput | string
    kycRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWithdrawStatusFieldUpdateOperationsInput | $Enums.WithdrawStatus
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    paidTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoundEntryCreateManyRoundInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    coin: $Enums.Stablecoin
    amount: Decimal | DecimalJsLike | number | string
    profit: Decimal | DecimalJsLike | number | string
    settledAt?: Date | string | null
  }

  export type RoundEntryUpdateWithoutRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coin?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutRoundEntriesNestedInput
  }

  export type RoundEntryUncheckedUpdateWithoutRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    coin?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoundEntryUncheckedUpdateManyWithoutRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    coin?: EnumStablecoinFieldUpdateOperationsInput | $Enums.Stablecoin
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



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