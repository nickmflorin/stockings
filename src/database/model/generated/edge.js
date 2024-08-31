
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.8.0
 * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
 */
Prisma.prismaVersion = {
  client: "5.8.0",
  engine: "4c784e32044a8a016d99474bd02a3b6123742169"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  clerkId: 'clerkId',
  firstName: 'firstName',
  lastName: 'lastName',
  profileImageUrl: 'profileImageUrl',
  emailAddress: 'emailAddress',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.HttpNetworkErrorDataScalarFieldEnum = {
  id: 'id',
  url: 'url'
};

exports.Prisma.HttpSerializationErrorDataScalarFieldEnum = {
  id: 'id',
  url: 'url'
};

exports.Prisma.HttpClientErrorDataScalarFieldEnum = {
  id: 'id',
  url: 'url',
  status: 'status'
};

exports.Prisma.MissingAttributeErrorDataScalarFieldEnum = {
  id: 'id',
  attribute: 'attribute',
  parentHtml: 'parentHtml'
};

exports.Prisma.InvalidAttributeErrorDataScalarFieldEnum = {
  id: 'id',
  attribute: 'attribute',
  parentHtml: 'parentHtml',
  value: 'value'
};

exports.Prisma.InvalidTextErrorDataScalarFieldEnum = {
  id: 'id',
  parentHtml: 'parentHtml',
  value: 'value'
};

exports.Prisma.MissingTextErrorDataScalarFieldEnum = {
  id: 'id',
  parentHtml: 'parentHtml'
};

exports.Prisma.NonUniqueTextErrorDataScalarFieldEnum = {
  id: 'id',
  parentHtml: 'parentHtml'
};

exports.Prisma.MissingElementErrorDataScalarFieldEnum = {
  id: 'id',
  parentHtml: 'parentHtml',
  selector: 'selector'
};

exports.Prisma.NonUniqueElementErrorDataScalarFieldEnum = {
  id: 'id',
  parentHtml: 'parentHtml',
  selector: 'selector'
};

exports.Prisma.ProductRecordErrorScalarFieldEnum = {
  id: 'id',
  errorId: 'errorId',
  errorCode: 'errorCode',
  recordId: 'recordId',
  field: 'field',
  message: 'message'
};

exports.Prisma.ProductRecordScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  createdById: 'createdById',
  updatedById: 'updatedById',
  timestamp: 'timestamp',
  productId: 'productId',
  price: 'price',
  rawPrice: 'rawPrice',
  status: 'status',
  wasManuallyCreated: 'wasManuallyCreated',
  manuallyChangedFields: 'manuallyChangedFields'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  createdById: 'createdById',
  updatedById: 'updatedById',
  name: 'name',
  descriptions: 'descriptions',
  slug: 'slug',
  code: 'code',
  imageSrc: 'imageSrc',
  status: 'status',
  statusLastUpdatedAt: 'statusLastUpdatedAt',
  statusAsOf: 'statusAsOf',
  price: 'price',
  priceLastUpdatedAt: 'priceLastUpdatedAt',
  priceAsOf: 'priceAsOf',
  category: 'category',
  subCategories: 'subCategories'
};

exports.Prisma.ProductSubscriptionScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  createdById: 'createdById',
  updatedById: 'updatedById',
  subscriptionType: 'subscriptionType',
  userId: 'userId',
  productId: 'productId',
  enabled: 'enabled'
};

exports.Prisma.StatusChangeSubscriptionConditionScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  fromStatus: 'fromStatus',
  toStatus: 'toStatus',
  subscriptionId: 'subscriptionId'
};

exports.Prisma.StatusChangeSubscriptionScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.PriceChangeSubscriptionScalarFieldEnum = {
  id: 'id',
  conditions: 'conditions'
};

exports.Prisma.ProductNotificationScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  createdById: 'createdById',
  updatedById: 'updatedById',
  userId: 'userId',
  productRecordId: 'productRecordId',
  productId: 'productId',
  subscriptionId: 'subscriptionId',
  notificationType: 'notificationType',
  state: 'state',
  stateAsOf: 'stateAsOf',
  failedAt: 'failedAt',
  sentAt: 'sentAt'
};

exports.Prisma.PriceChangeNotificationScalarFieldEnum = {
  id: 'id',
  condition: 'condition',
  previousPrice: 'previousPrice',
  newPrice: 'newPrice'
};

exports.Prisma.StatusChangeNotificationScalarFieldEnum = {
  id: 'id',
  previousStatus: 'previousStatus',
  newStatus: 'newStatus'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.ElementAttribute = exports.$Enums.ElementAttribute = {
  HREF: 'HREF',
  SRC: 'SRC',
  VALUE: 'VALUE',
  DATA_GA_PRODUCT_NAME: 'DATA_GA_PRODUCT_NAME'
};

exports.ScrapingErrorCode = exports.$Enums.ScrapingErrorCode = {
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

exports.ProductRecordDataField = exports.$Enums.ProductRecordDataField = {
  PRICE: 'PRICE',
  RAW_PRICE: 'RAW_PRICE',
  STATUS: 'STATUS'
};

exports.ProductStatus = exports.$Enums.ProductStatus = {
  OutOfStock: 'OutOfStock',
  InStock: 'InStock',
  AvailableForBackorder: 'AvailableForBackorder',
  NotListed: 'NotListed'
};

exports.ProductCategory = exports.$Enums.ProductCategory = {
  HandTools: 'HandTools'
};

exports.ProductSubCategory = exports.$Enums.ProductSubCategory = {
  HandPlanes: 'HandPlanes',
  Saws: 'Saws',
  Chisels: 'Chisels',
  Spokeshaves: 'Spokeshaves',
  GreenWoodworking: 'GreenWoodworking',
  AccessoryTools: 'AccessoryTools'
};

exports.ProductSubscriptionType = exports.$Enums.ProductSubscriptionType = {
  PriceChangeSubscription: 'PriceChangeSubscription',
  StatusChangeSubscription: 'StatusChangeSubscription'
};

exports.PriceChangeCondition = exports.$Enums.PriceChangeCondition = {
  PriceIncrease: 'PriceIncrease',
  PriceDecrease: 'PriceDecrease'
};

exports.ProductNotificationType = exports.$Enums.ProductNotificationType = {
  PriceChangeNotification: 'PriceChangeNotification',
  StatusChangeNotification: 'StatusChangeNotification'
};

exports.NotificationState = exports.$Enums.NotificationState = {
  Pending: 'Pending',
  Sent: 'Sent',
  Failed: 'Failed'
};

exports.Prisma.ModelName = {
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
  ProductSubscription: 'ProductSubscription',
  StatusChangeSubscriptionCondition: 'StatusChangeSubscriptionCondition',
  StatusChangeSubscription: 'StatusChangeSubscription',
  PriceChangeSubscription: 'PriceChangeSubscription',
  ProductNotification: 'ProductNotification',
  PriceChangeNotification: 'PriceChangeNotification',
  StatusChangeNotification: 'StatusChangeNotification'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/nickflorin/repos/tooltrack/src/database/model/generated",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/Users/nickflorin/repos/tooltrack/src/database/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../../.env",
    "schemaEnvPath": "../../../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.8.0",
  "engineVersion": "4c784e32044a8a016d99474bd02a3b6123742169",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "POSTGRES_PRISMA_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLwovLyBETyBOT1QgTU9ESUZZIFRISVMgRklMRSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vCi8vIFRoaXMgZmlsZSBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBaZW5TdGFjayBDTEkgYW5kIHNob3VsZCBub3QgYmUgbWFudWFsbHkgdXBkYXRlZC4gLy8KLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLwoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgID0gZW52KCJQT1NUR1JFU19QUklTTUFfVVJMIikKICBkaXJlY3RVcmwgPSBlbnYoIlBPU1RHUkVTX1VSTF9OT05fUE9PTElORyIpCn0KCmdlbmVyYXRvciBjbGllbnQgewogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgPSAiLi4vbW9kZWwvZ2VuZXJhdGVkIgp9CgplbnVtIEVsZW1lbnRBdHRyaWJ1dGUgewogIEhSRUYKICBTUkMKICBWQUxVRQogIERBVEFfR0FfUFJPRFVDVF9OQU1FCn0KCmVudW0gU2NyYXBpbmdFcnJvckNvZGUgewogIE1JU1NJTkdfQVRUUklCVVRFCiAgSU5WQUxJRF9BVFRSSUJVVEUKICBNSVNTSU5HX1RFWFQKICBJTlZBTElEX1RFWFQKICBOT05VTklRVUVfVEVYVAogIE1JU1NJTkdfRUxFTUVOVAogIE5PTlVOSVFVRV9FTEVNRU5UCiAgSFRUUF9ORVRXT1JLCiAgSFRUUF9DTElFTlQKICBIVFRQX1NFUklBTElaQVRJT04KfQoKZW51bSBQcm9kdWN0UmVjb3JkRGF0YUZpZWxkIHsKICBQUklDRQogIFJBV19QUklDRQogIFNUQVRVUwp9CgplbnVtIFByb2R1Y3RTdGF0dXMgewogIE91dE9mU3RvY2sKICBJblN0b2NrCiAgQXZhaWxhYmxlRm9yQmFja29yZGVyCiAgTm90TGlzdGVkCn0KCmVudW0gUHJvZHVjdENhdGVnb3J5IHsKICBIYW5kVG9vbHMKfQoKZW51bSBQcm9kdWN0U3ViQ2F0ZWdvcnkgewogIEhhbmRQbGFuZXMKICBTYXdzCiAgQ2hpc2VscwogIFNwb2tlc2hhdmVzCiAgR3JlZW5Xb29kd29ya2luZwogIEFjY2Vzc29yeVRvb2xzCn0KCmVudW0gUHJpY2VDaGFuZ2VDb25kaXRpb24gewogIFByaWNlSW5jcmVhc2UKICBQcmljZURlY3JlYXNlCn0KCmVudW0gUHJvZHVjdFN1YnNjcmlwdGlvblR5cGUgewogIFByaWNlQ2hhbmdlU3Vic2NyaXB0aW9uCiAgU3RhdHVzQ2hhbmdlU3Vic2NyaXB0aW9uCn0KCmVudW0gUHJvZHVjdE5vdGlmaWNhdGlvblR5cGUgewogIFByaWNlQ2hhbmdlTm90aWZpY2F0aW9uCiAgU3RhdHVzQ2hhbmdlTm90aWZpY2F0aW9uCn0KCmVudW0gTm90aWZpY2F0aW9uU3RhdGUgewogIFBlbmRpbmcKICBTZW50CiAgRmFpbGVkCn0KCm1vZGVsIFVzZXIgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgY2xlcmtJZCAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAdW5pcXVlKCkKICBmaXJzdE5hbWUgICAgICAgICAgICAgICAgICAgU3RyaW5nCiAgbGFzdE5hbWUgICAgICAgICAgICAgICAgICAgIFN0cmluZwogIHByb2ZpbGVJbWFnZVVybCAgICAgICAgICAgICBTdHJpbmc/CiAgZW1haWxBZGRyZXNzICAgICAgICAgICAgICAgIFN0cmluZwogIGNyZWF0ZWRBdCAgICAgICAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0ICAgICAgICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICBAdXBkYXRlZEF0KCkKICBjcmVhdGVkUHJvZHVjdHMgICAgICAgICAgICAgUHJvZHVjdFtdICAgICAgICAgICAgIEByZWxhdGlvbigiY3JlYXRlZFByb2R1Y3RzIikKICB1cGRhdGVkUHJvZHVjdHMgICAgICAgICAgICAgUHJvZHVjdFtdICAgICAgICAgICAgIEByZWxhdGlvbigidXBkYXRlZFByb2R1Y3RzIikKICBjcmVhdGVkUHJvZHVjdFJlY29yZHMgICAgICAgUHJvZHVjdFJlY29yZFtdICAgICAgIEByZWxhdGlvbigiY3JlYXRlZFByb2R1Y3RSZWNvcmRzIikKICB1cGRhdGVkUHJvZHVjdFJlY29yZHMgICAgICAgUHJvZHVjdFJlY29yZFtdICAgICAgIEByZWxhdGlvbigidXBkYXRlZFByb2R1Y3RSZWNvcmRzIikKICBjcmVhdGVkUHJvZHVjdFN1YnNjcmlwdGlvbnMgUHJvZHVjdFN1YnNjcmlwdGlvbltdIEByZWxhdGlvbigiY3JlYXRlZFByb2R1Y3RTdWJzY3JpcHRpb25zIikKICB1cGRhdGVkUHJvZHVjdFN1YnNjcmlwdGlvbnMgUHJvZHVjdFN1YnNjcmlwdGlvbltdIEByZWxhdGlvbigidXBkYXRlZFByb2R1Y3RTdWJzY3JpcHRpb25zIikKICBwcm9kdWN0U3Vic2NyaXB0aW9ucyAgICAgICAgUHJvZHVjdFN1YnNjcmlwdGlvbltdIEByZWxhdGlvbigicHJvZHVjdFN1YnNjcmlwdGlvbnMiKQogIGNyZWF0ZWRQcm9kdWN0Tm90aWZpY2F0aW9ucyBQcm9kdWN0Tm90aWZpY2F0aW9uW10gQHJlbGF0aW9uKCJjcmVhdGVkUHJvZHVjdE5vdGlmaWNhdGlvbnMiKQogIHVwZGF0ZWRQcm9kdWN0Tm90aWZpY2F0aW9ucyBQcm9kdWN0Tm90aWZpY2F0aW9uW10gQHJlbGF0aW9uKCJ1cGRhdGVkUHJvZHVjdE5vdGlmaWNhdGlvbnMiKQogIG5vdGlmaWNhdGlvbnMgICAgICAgICAgICAgICBQcm9kdWN0Tm90aWZpY2F0aW9uW10gQHJlbGF0aW9uKCJub3RpZmljYXRpb25zIikKfQoKbW9kZWwgSHR0cE5ldHdvcmtFcnJvckRhdGEgewogIGlkICBTdHJpbmcgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgdXJsIFN0cmluZwp9Cgptb2RlbCBIdHRwU2VyaWFsaXphdGlvbkVycm9yRGF0YSB7CiAgaWQgIFN0cmluZyBAaWQoKSBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkKCkKICB1cmwgU3RyaW5nCn0KCm1vZGVsIEh0dHBDbGllbnRFcnJvckRhdGEgewogIGlkICAgICBTdHJpbmcgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgdXJsICAgIFN0cmluZwogIHN0YXR1cyBJbnQKfQoKbW9kZWwgTWlzc2luZ0F0dHJpYnV0ZUVycm9yRGF0YSB7CiAgaWQgICAgICAgICBTdHJpbmcgICAgICAgICAgIEBpZCgpIEBkZWZhdWx0KHV1aWQoKSkgQGRiLlV1aWQoKQogIGF0dHJpYnV0ZSAgRWxlbWVudEF0dHJpYnV0ZQogIHBhcmVudEh0bWwgU3RyaW5nPwp9Cgptb2RlbCBJbnZhbGlkQXR0cmlidXRlRXJyb3JEYXRhIHsKICBpZCAgICAgICAgIFN0cmluZyAgICAgICAgICAgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgYXR0cmlidXRlICBFbGVtZW50QXR0cmlidXRlCiAgcGFyZW50SHRtbCBTdHJpbmc/CiAgdmFsdWUgICAgICBTdHJpbmcKfQoKbW9kZWwgSW52YWxpZFRleHRFcnJvckRhdGEgewogIGlkICAgICAgICAgU3RyaW5nICBAaWQoKSBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkKCkKICBwYXJlbnRIdG1sIFN0cmluZz8KICB2YWx1ZSAgICAgIFN0cmluZwp9Cgptb2RlbCBNaXNzaW5nVGV4dEVycm9yRGF0YSB7CiAgaWQgICAgICAgICBTdHJpbmcgIEBpZCgpIEBkZWZhdWx0KHV1aWQoKSkgQGRiLlV1aWQoKQogIHBhcmVudEh0bWwgU3RyaW5nPwp9Cgptb2RlbCBOb25VbmlxdWVUZXh0RXJyb3JEYXRhIHsKICBpZCAgICAgICAgIFN0cmluZyAgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgcGFyZW50SHRtbCBTdHJpbmc/Cn0KCm1vZGVsIE1pc3NpbmdFbGVtZW50RXJyb3JEYXRhIHsKICBpZCAgICAgICAgIFN0cmluZyAgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgcGFyZW50SHRtbCBTdHJpbmc/CiAgc2VsZWN0b3IgICBTdHJpbmcKfQoKbW9kZWwgTm9uVW5pcXVlRWxlbWVudEVycm9yRGF0YSB7CiAgaWQgICAgICAgICBTdHJpbmcgIEBpZCgpIEBkZWZhdWx0KHV1aWQoKSkgQGRiLlV1aWQoKQogIHBhcmVudEh0bWwgU3RyaW5nPwogIHNlbGVjdG9yICAgU3RyaW5nCn0KCm1vZGVsIFByb2R1Y3RSZWNvcmRFcnJvciB7CiAgaWQgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgZXJyb3JJZCAgIFN0cmluZyAgICAgICAgICAgICAgICAgQHVuaXF1ZSgpIEBkYi5VdWlkKCkKICBlcnJvckNvZGUgU2NyYXBpbmdFcnJvckNvZGUKICByZWNvcmQgICAgUHJvZHVjdFJlY29yZCAgICAgICAgICBAcmVsYXRpb24oImVycm9ycyIsIGZpZWxkczogW3JlY29yZElkXSwgcmVmZXJlbmNlczogW2lkXSkKICByZWNvcmRJZCAgU3RyaW5nICAgICAgICAgICAgICAgICBAdW5pcXVlKCkgQGRiLlV1aWQoKQogIGZpZWxkICAgICBQcm9kdWN0UmVjb3JkRGF0YUZpZWxkCiAgbWVzc2FnZSAgIFN0cmluZwp9Cgptb2RlbCBQcm9kdWN0UmVjb3JkIHsKICBpZCAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgIEBpZCgpIEBkZWZhdWx0KHV1aWQoKSkgQGRiLlV1aWQoKQogIGNyZWF0ZWRBdCAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0ICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICAgICBAdXBkYXRlZEF0KCkKICBjcmVhdGVkQnlJZCAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgIEBkYi5VdWlkKCkKICB1cGRhdGVkQnlJZCAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgIEBkYi5VdWlkKCkKICB0aW1lc3RhbXAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIGNyZWF0ZWRCeSAgICAgICAgICAgICBVc2VyICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJjcmVhdGVkUHJvZHVjdFJlY29yZHMiLCBmaWVsZHM6IFtjcmVhdGVkQnlJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgdXBkYXRlZEJ5ICAgICAgICAgICAgIFVzZXIgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oInVwZGF0ZWRQcm9kdWN0UmVjb3JkcyIsIGZpZWxkczogW3VwZGF0ZWRCeUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBwcm9kdWN0ICAgICAgICAgICAgICAgUHJvZHVjdCAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigicmVjb3JkcyIsIGZpZWxkczogW3Byb2R1Y3RJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgcHJvZHVjdElkICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICBAZGIuVXVpZCgpCiAgcHJpY2UgICAgICAgICAgICAgICAgIEZsb2F0PwogIHJhd1ByaWNlICAgICAgICAgICAgICBTdHJpbmc/CiAgc3RhdHVzICAgICAgICAgICAgICAgIFByb2R1Y3RTdGF0dXM/CiAgd2FzTWFudWFsbHlDcmVhdGVkICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBtYW51YWxseUNoYW5nZWRGaWVsZHMgUHJvZHVjdFJlY29yZERhdGFGaWVsZFtdIEBkZWZhdWx0KFtdKQogIGVycm9ycyAgICAgICAgICAgICAgICBQcm9kdWN0UmVjb3JkRXJyb3JbXSAgICAgQHJlbGF0aW9uKCJlcnJvcnMiKQogIG5vdGlmaWNhdGlvbnMgICAgICAgICBQcm9kdWN0Tm90aWZpY2F0aW9uW10gICAgQHJlbGF0aW9uKCJub3RpZmljYXRpb25zIikKfQoKbW9kZWwgUHJvZHVjdCB7CiAgaWQgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgY3JlYXRlZEF0ICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0ICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICAgQHVwZGF0ZWRBdCgpCiAgY3JlYXRlZEJ5SWQgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRiLlV1aWQoKQogIHVwZGF0ZWRCeUlkICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEBkYi5VdWlkKCkKICBjcmVhdGVkQnkgICAgICAgICAgIFVzZXIgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oImNyZWF0ZWRQcm9kdWN0cyIsIGZpZWxkczogW2NyZWF0ZWRCeUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICB1cGRhdGVkQnkgICAgICAgICAgIFVzZXIgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oInVwZGF0ZWRQcm9kdWN0cyIsIGZpZWxkczogW3VwZGF0ZWRCeUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBuYW1lICAgICAgICAgICAgICAgIFN0cmluZz8KICBkZXNjcmlwdGlvbnMgICAgICAgIFN0cmluZ1tdCiAgc2x1ZyAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQHVuaXF1ZSgpCiAgY29kZSAgICAgICAgICAgICAgICBTdHJpbmc/CiAgaW1hZ2VTcmMgICAgICAgICAgICBTdHJpbmc/CiAgcmVjb3JkcyAgICAgICAgICAgICBQcm9kdWN0UmVjb3JkW10gICAgICAgQHJlbGF0aW9uKCJyZWNvcmRzIikKICBzdGF0dXMgICAgICAgICAgICAgIFByb2R1Y3RTdGF0dXM/CiAgc3RhdHVzTGFzdFVwZGF0ZWRBdCBEYXRlVGltZT8KICBzdGF0dXNBc09mICAgICAgICAgIERhdGVUaW1lPwogIHByaWNlICAgICAgICAgICAgICAgRmxvYXQ/CiAgcHJpY2VMYXN0VXBkYXRlZEF0ICBEYXRlVGltZT8KICBwcmljZUFzT2YgICAgICAgICAgIERhdGVUaW1lPwogIGNhdGVnb3J5ICAgICAgICAgICAgUHJvZHVjdENhdGVnb3J5CiAgc3ViQ2F0ZWdvcmllcyAgICAgICBQcm9kdWN0U3ViQ2F0ZWdvcnlbXQogIHN1YnNjcmlwdGlvbnMgICAgICAgUHJvZHVjdFN1YnNjcmlwdGlvbltdIEByZWxhdGlvbigic3Vic2NyaXB0aW9ucyIpCiAgbm90aWZpY2F0aW9ucyAgICAgICBQcm9kdWN0Tm90aWZpY2F0aW9uW10gQHJlbGF0aW9uKCJub3RpZmljYXRpb25zIikKfQoKLy8vIEBAZGVsZWdhdGUoc3Vic2NyaXB0aW9uVHlwZSkKbW9kZWwgUHJvZHVjdFN1YnNjcmlwdGlvbiB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgIEBpZCgpIEBkZWZhdWx0KHV1aWQoKSkgQGRiLlV1aWQoKQogIGNyZWF0ZWRBdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkQXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICAgICAgQHVwZGF0ZWRBdCgpCiAgY3JlYXRlZEJ5SWQgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgIEBkYi5VdWlkKCkKICB1cGRhdGVkQnlJZCAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgQGRiLlV1aWQoKQogIGNyZWF0ZWRCeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlciAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oImNyZWF0ZWRQcm9kdWN0U3Vic2NyaXB0aW9ucyIsIGZpZWxkczogW2NyZWF0ZWRCeUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICB1cGRhdGVkQnkgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXIgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJ1cGRhdGVkUHJvZHVjdFN1YnNjcmlwdGlvbnMiLCBmaWVsZHM6IFt1cGRhdGVkQnlJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgc3Vic2NyaXB0aW9uVHlwZSAgICAgICAgICAgICAgICAgICAgICBQcm9kdWN0U3Vic2NyaXB0aW9uVHlwZQogIHVzZXJJZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICBAZGIuVXVpZCgpCiAgdXNlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigicHJvZHVjdFN1YnNjcmlwdGlvbnMiLCBmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHByb2R1Y3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZHVjdCAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oInN1YnNjcmlwdGlvbnMiLCBmaWVsZHM6IFtwcm9kdWN0SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHByb2R1Y3RJZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICBAZGIuVXVpZCgpCiAgZW5hYmxlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KHRydWUpCiAgbm90aWZpY2F0aW9ucyAgICAgICAgICAgICAgICAgICAgICAgICBQcm9kdWN0Tm90aWZpY2F0aW9uW10gICAgIEByZWxhdGlvbigibm90aWZpY2F0aW9ucyIpCiAgZGVsZWdhdGVfYXV4X3N0YXR1c0NoYW5nZVN1YnNjcmlwdGlvbiBTdGF0dXNDaGFuZ2VTdWJzY3JpcHRpb24/CiAgZGVsZWdhdGVfYXV4X3ByaWNlQ2hhbmdlU3Vic2NyaXB0aW9uICBQcmljZUNoYW5nZVN1YnNjcmlwdGlvbj8KCiAgQEB1bmlxdWUoW3VzZXJJZCwgcHJvZHVjdElkLCBzdWJzY3JpcHRpb25UeXBlXSkKfQoKbW9kZWwgU3RhdHVzQ2hhbmdlU3Vic2NyaXB0aW9uQ29uZGl0aW9uIHsKICBpZCAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgY3JlYXRlZEF0ICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCAgICAgIERhdGVUaW1lICAgICAgICAgICAgICAgICBAdXBkYXRlZEF0KCkKICBmcm9tU3RhdHVzICAgICBQcm9kdWN0U3RhdHVzW10KICB0b1N0YXR1cyAgICAgICBQcm9kdWN0U3RhdHVzW10KICBzdWJzY3JpcHRpb24gICBTdGF0dXNDaGFuZ2VTdWJzY3JpcHRpb24gQHJlbGF0aW9uKCJjb25kaXRpb25zIiwgZmllbGRzOiBbc3Vic2NyaXB0aW9uSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHN1YnNjcmlwdGlvbklkIFN0cmluZyAgICAgICAgICAgICAgICAgICBAZGIuVXVpZCgpCn0KCm1vZGVsIFN0YXR1c0NoYW5nZVN1YnNjcmlwdGlvbiB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgY29uZGl0aW9ucyAgICAgICAgICAgICAgICAgICAgICAgU3RhdHVzQ2hhbmdlU3Vic2NyaXB0aW9uQ29uZGl0aW9uW10gQHJlbGF0aW9uKCJjb25kaXRpb25zIikKICBkZWxlZ2F0ZV9hdXhfcHJvZHVjdFN1YnNjcmlwdGlvbiBQcm9kdWN0U3Vic2NyaXB0aW9uICAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgb25VcGRhdGU6IENhc2NhZGUpCn0KCm1vZGVsIFByaWNlQ2hhbmdlU3Vic2NyaXB0aW9uIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgIEBpZCgpIEBkZWZhdWx0KHV1aWQoKSkgQGRiLlV1aWQoKQogIGNvbmRpdGlvbnMgICAgICAgICAgICAgICAgICAgICAgIFByaWNlQ2hhbmdlQ29uZGl0aW9uW10gQGRlZmF1bHQoW1ByaWNlSW5jcmVhc2UsIFByaWNlRGVjcmVhc2VdKQogIGRlbGVnYXRlX2F1eF9wcm9kdWN0U3Vic2NyaXB0aW9uIFByb2R1Y3RTdWJzY3JpcHRpb24gICAgQHJlbGF0aW9uKGZpZWxkczogW2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUsIG9uVXBkYXRlOiBDYXNjYWRlKQp9CgovLy8gQEBkZWxlZ2F0ZShub3RpZmljYXRpb25UeXBlKQptb2RlbCBQcm9kdWN0Tm90aWZpY2F0aW9uIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgY3JlYXRlZEF0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgICBAdXBkYXRlZEF0KCkKICBjcmVhdGVkQnlJZCAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgQGRiLlV1aWQoKQogIHVwZGF0ZWRCeUlkICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICBAZGIuVXVpZCgpCiAgY3JlYXRlZEJ5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiY3JlYXRlZFByb2R1Y3ROb3RpZmljYXRpb25zIiwgZmllbGRzOiBbY3JlYXRlZEJ5SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHVwZGF0ZWRCeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlciAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oInVwZGF0ZWRQcm9kdWN0Tm90aWZpY2F0aW9ucyIsIGZpZWxkczogW3VwZGF0ZWRCeUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICB1c2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXIgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJub3RpZmljYXRpb25zIiwgZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICB1c2VySWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgQGRiLlV1aWQoKQogIHByb2R1Y3RSZWNvcmRJZCAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICBAZGIuVXVpZCgpCiAgcHJvZHVjdFJlY29yZCAgICAgICAgICAgICAgICAgICAgICAgICBQcm9kdWN0UmVjb3JkICAgICAgICAgICAgIEByZWxhdGlvbigibm90aWZpY2F0aW9ucyIsIGZpZWxkczogW3Byb2R1Y3RSZWNvcmRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgcHJvZHVjdElkICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgIEBkYi5VdWlkKCkKICBwcm9kdWN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3QgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJub3RpZmljYXRpb25zIiwgZmllbGRzOiBbcHJvZHVjdElkXSwgcmVmZXJlbmNlczogW2lkXSkKICBzdWJzY3JpcHRpb25JZCAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgQGRiLlV1aWQoKQogIHN1YnNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZHVjdFN1YnNjcmlwdGlvbj8gICAgICBAcmVsYXRpb24oIm5vdGlmaWNhdGlvbnMiLCBmaWVsZHM6IFtzdWJzY3JpcHRpb25JZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBTZXROdWxsKQogIG5vdGlmaWNhdGlvblR5cGUgICAgICAgICAgICAgICAgICAgICAgUHJvZHVjdE5vdGlmaWNhdGlvblR5cGUKICBzdGF0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvblN0YXRlCiAgc3RhdGVBc09mICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZQogIGZhaWxlZEF0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/CiAgc2VudEF0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8KICBkZWxlZ2F0ZV9hdXhfcHJpY2VDaGFuZ2VOb3RpZmljYXRpb24gIFByaWNlQ2hhbmdlTm90aWZpY2F0aW9uPwogIGRlbGVnYXRlX2F1eF9zdGF0dXNDaGFuZ2VOb3RpZmljYXRpb24gU3RhdHVzQ2hhbmdlTm90aWZpY2F0aW9uPwp9Cgptb2RlbCBQcmljZUNoYW5nZU5vdGlmaWNhdGlvbiB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgY29uZGl0aW9uICAgICAgICAgICAgICAgICAgICAgICAgUHJpY2VDaGFuZ2VDb25kaXRpb24KICBwcmV2aW91c1ByaWNlICAgICAgICAgICAgICAgICAgICBGbG9hdAogIG5ld1ByaWNlICAgICAgICAgICAgICAgICAgICAgICAgIEZsb2F0CiAgZGVsZWdhdGVfYXV4X3Byb2R1Y3ROb3RpZmljYXRpb24gUHJvZHVjdE5vdGlmaWNhdGlvbiAgQHJlbGF0aW9uKGZpZWxkczogW2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUsIG9uVXBkYXRlOiBDYXNjYWRlKQp9Cgptb2RlbCBTdGF0dXNDaGFuZ2VOb3RpZmljYXRpb24gewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgcHJldmlvdXNTdGF0dXMgICAgICAgICAgICAgICAgICAgUHJvZHVjdFN0YXR1cwogIG5ld1N0YXR1cyAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3RTdGF0dXMKICBkZWxlZ2F0ZV9hdXhfcHJvZHVjdE5vdGlmaWNhdGlvbiBQcm9kdWN0Tm90aWZpY2F0aW9uIEByZWxhdGlvbihmaWVsZHM6IFtpZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlLCBvblVwZGF0ZTogQ2FzY2FkZSkKfQo=",
  "inlineSchemaHash": "90854d590afb10ced3d8139d25000c0c5a6cb1270880dcf627e20ccbddb9c873"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clerkId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profileImageUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"createdProducts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"createdProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedProducts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"updatedProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdProductRecords\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecord\",\"relationName\":\"createdProductRecords\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedProductRecords\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecord\",\"relationName\":\"updatedProductRecords\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdProductSubscriptions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductSubscription\",\"relationName\":\"createdProductSubscriptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedProductSubscriptions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductSubscription\",\"relationName\":\"updatedProductSubscriptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productSubscriptions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductSubscription\",\"relationName\":\"productSubscriptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdProductNotifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductNotification\",\"relationName\":\"createdProductNotifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedProductNotifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductNotification\",\"relationName\":\"updatedProductNotifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductNotification\",\"relationName\":\"notifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HttpNetworkErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HttpSerializationErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HttpClientErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MissingAttributeErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attribute\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ElementAttribute\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InvalidAttributeErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attribute\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ElementAttribute\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InvalidTextErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MissingTextErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"NonUniqueTextErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MissingElementErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"selector\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"NonUniqueElementErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"selector\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductRecordError\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"errorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"errorCode\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ScrapingErrorCode\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"record\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecord\",\"relationName\":\"errors\",\"relationFromFields\":[\"recordId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recordId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"field\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecordDataField\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductRecord\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"createdProductRecords\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"updatedProductRecords\",\"relationFromFields\":[\"updatedById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"records\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rawPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wasManuallyCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manuallyChangedFields\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ProductRecordDataField\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"errors\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecordError\",\"relationName\":\"errors\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductNotification\",\"relationName\":\"notifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Product\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"createdProducts\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"updatedProducts\",\"relationFromFields\":[\"updatedById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descriptions\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imageSrc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"records\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecord\",\"relationName\":\"records\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statusLastUpdatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statusAsOf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priceLastUpdatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priceAsOf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductCategory\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subCategories\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductSubCategory\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscriptions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductSubscription\",\"relationName\":\"subscriptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductNotification\",\"relationName\":\"notifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductSubscription\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"createdProductSubscriptions\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"updatedProductSubscriptions\",\"relationFromFields\":[\"updatedById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscriptionType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductSubscriptionType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"productSubscriptions\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"subscriptions\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductNotification\",\"relationName\":\"notifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delegate_aux_statusChangeSubscription\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusChangeSubscription\",\"relationName\":\"ProductSubscriptionToStatusChangeSubscription\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delegate_aux_priceChangeSubscription\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PriceChangeSubscription\",\"relationName\":\"PriceChangeSubscriptionToProductSubscription\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"productId\",\"subscriptionType\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"productId\",\"subscriptionType\"]}],\"isGenerated\":false,\"documentation\":\"@@delegate(subscriptionType)\"},\"StatusChangeSubscriptionCondition\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"fromStatus\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"toStatus\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscription\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusChangeSubscription\",\"relationName\":\"conditions\",\"relationFromFields\":[\"subscriptionId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscriptionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StatusChangeSubscription\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conditions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusChangeSubscriptionCondition\",\"relationName\":\"conditions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delegate_aux_productSubscription\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductSubscription\",\"relationName\":\"ProductSubscriptionToStatusChangeSubscription\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PriceChangeSubscription\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conditions\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PriceChangeCondition\",\"default\":[\"PriceIncrease\",\"PriceDecrease\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delegate_aux_productSubscription\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductSubscription\",\"relationName\":\"PriceChangeSubscriptionToProductSubscription\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductNotification\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"createdProductNotifications\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"updatedProductNotifications\",\"relationFromFields\":[\"updatedById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"notifications\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productRecordId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productRecord\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecord\",\"relationName\":\"notifications\",\"relationFromFields\":[\"productRecordId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"notifications\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscriptionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscription\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductSubscription\",\"relationName\":\"notifications\",\"relationFromFields\":[\"subscriptionId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"SetNull\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notificationType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductNotificationType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NotificationState\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stateAsOf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"failedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delegate_aux_priceChangeNotification\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PriceChangeNotification\",\"relationName\":\"PriceChangeNotificationToProductNotification\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delegate_aux_statusChangeNotification\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusChangeNotification\",\"relationName\":\"ProductNotificationToStatusChangeNotification\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"@@delegate(notificationType)\"},\"PriceChangeNotification\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"condition\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PriceChangeCondition\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"previousPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delegate_aux_productNotification\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductNotification\",\"relationName\":\"PriceChangeNotificationToProductNotification\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StatusChangeNotification\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"previousStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delegate_aux_productNotification\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductNotification\",\"relationName\":\"ProductNotificationToStatusChangeNotification\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"ElementAttribute\":{\"values\":[{\"name\":\"HREF\",\"dbName\":null},{\"name\":\"SRC\",\"dbName\":null},{\"name\":\"VALUE\",\"dbName\":null},{\"name\":\"DATA_GA_PRODUCT_NAME\",\"dbName\":null}],\"dbName\":null},\"ScrapingErrorCode\":{\"values\":[{\"name\":\"MISSING_ATTRIBUTE\",\"dbName\":null},{\"name\":\"INVALID_ATTRIBUTE\",\"dbName\":null},{\"name\":\"MISSING_TEXT\",\"dbName\":null},{\"name\":\"INVALID_TEXT\",\"dbName\":null},{\"name\":\"NONUNIQUE_TEXT\",\"dbName\":null},{\"name\":\"MISSING_ELEMENT\",\"dbName\":null},{\"name\":\"NONUNIQUE_ELEMENT\",\"dbName\":null},{\"name\":\"HTTP_NETWORK\",\"dbName\":null},{\"name\":\"HTTP_CLIENT\",\"dbName\":null},{\"name\":\"HTTP_SERIALIZATION\",\"dbName\":null}],\"dbName\":null},\"ProductRecordDataField\":{\"values\":[{\"name\":\"PRICE\",\"dbName\":null},{\"name\":\"RAW_PRICE\",\"dbName\":null},{\"name\":\"STATUS\",\"dbName\":null}],\"dbName\":null},\"ProductStatus\":{\"values\":[{\"name\":\"OutOfStock\",\"dbName\":null},{\"name\":\"InStock\",\"dbName\":null},{\"name\":\"AvailableForBackorder\",\"dbName\":null},{\"name\":\"NotListed\",\"dbName\":null}],\"dbName\":null},\"ProductCategory\":{\"values\":[{\"name\":\"HandTools\",\"dbName\":null}],\"dbName\":null},\"ProductSubCategory\":{\"values\":[{\"name\":\"HandPlanes\",\"dbName\":null},{\"name\":\"Saws\",\"dbName\":null},{\"name\":\"Chisels\",\"dbName\":null},{\"name\":\"Spokeshaves\",\"dbName\":null},{\"name\":\"GreenWoodworking\",\"dbName\":null},{\"name\":\"AccessoryTools\",\"dbName\":null}],\"dbName\":null},\"PriceChangeCondition\":{\"values\":[{\"name\":\"PriceIncrease\",\"dbName\":null},{\"name\":\"PriceDecrease\",\"dbName\":null}],\"dbName\":null},\"ProductSubscriptionType\":{\"values\":[{\"name\":\"PriceChangeSubscription\",\"dbName\":null},{\"name\":\"StatusChangeSubscription\",\"dbName\":null}],\"dbName\":null},\"ProductNotificationType\":{\"values\":[{\"name\":\"PriceChangeNotification\",\"dbName\":null},{\"name\":\"StatusChangeNotification\",\"dbName\":null}],\"dbName\":null},\"NotificationState\":{\"values\":[{\"name\":\"Pending\",\"dbName\":null},{\"name\":\"Sent\",\"dbName\":null},{\"name\":\"Failed\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    POSTGRES_PRISMA_URL: typeof globalThis !== 'undefined' && globalThis['POSTGRES_PRISMA_URL'] || typeof process !== 'undefined' && process.env && process.env.POSTGRES_PRISMA_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

