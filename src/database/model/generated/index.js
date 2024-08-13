
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
} = require('./runtime/library')


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


  const path = require('path')

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
  manuallyChangedFields: 'manuallyChangedFields',
  isProcessed: 'isProcessed'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  createdById: 'createdById',
  updatedById: 'updatedById',
  name: 'name',
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

exports.Prisma.PriceChangeSubscribedEventScalarFieldEnum = {
  id: 'id',
  enabled: 'enabled',
  subscriptionId: 'subscriptionId',
  conditions: 'conditions'
};

exports.Prisma.StatusChangeEventConditionScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  fromStatus: 'fromStatus',
  toStatus: 'toStatus',
  subscribedEventId: 'subscribedEventId'
};

exports.Prisma.StatusChangeSubscribedEventScalarFieldEnum = {
  id: 'id',
  enabled: 'enabled',
  subscriptionId: 'subscriptionId'
};

exports.Prisma.ProductSubscriptionScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  createdById: 'createdById',
  updatedById: 'updatedById',
  productId: 'productId',
  userId: 'userId',
  enabled: 'enabled'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  createdById: 'createdById',
  updatedById: 'updatedById',
  userId: 'userId',
  notificationType: 'notificationType',
  state: 'state'
};

exports.Prisma.PriceChangeNotificationScalarFieldEnum = {
  id: 'id',
  productRecordId: 'productRecordId',
  condition: 'condition'
};

exports.Prisma.StatusChangeNotificationScalarFieldEnum = {
  id: 'id',
  productRecordId: 'productRecordId',
  fromStatus: 'fromStatus',
  toStatus: 'toStatus'
};

exports.Prisma.NewProductNotificationScalarFieldEnum = {
  id: 'id',
  productId: 'productId'
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

exports.PriceChangeEventCondition = exports.$Enums.PriceChangeEventCondition = {
  PriceIncrease: 'PriceIncrease',
  PriceDecrease: 'PriceDecrease'
};

exports.NotificationType = exports.$Enums.NotificationType = {
  NewProductNotification: 'NewProductNotification',
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
  PriceChangeSubscribedEvent: 'PriceChangeSubscribedEvent',
  StatusChangeEventCondition: 'StatusChangeEventCondition',
  StatusChangeSubscribedEvent: 'StatusChangeSubscribedEvent',
  ProductSubscription: 'ProductSubscription',
  Notification: 'Notification',
  PriceChangeNotification: 'PriceChangeNotification',
  StatusChangeNotification: 'StatusChangeNotification',
  NewProductNotification: 'NewProductNotification'
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
  "inlineSchema": "Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLwovLyBETyBOT1QgTU9ESUZZIFRISVMgRklMRSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vCi8vIFRoaXMgZmlsZSBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBaZW5TdGFjayBDTEkgYW5kIHNob3VsZCBub3QgYmUgbWFudWFsbHkgdXBkYXRlZC4gLy8KLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLwoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgID0gZW52KCJQT1NUR1JFU19QUklTTUFfVVJMIikKICBkaXJlY3RVcmwgPSBlbnYoIlBPU1RHUkVTX1VSTF9OT05fUE9PTElORyIpCn0KCmdlbmVyYXRvciBjbGllbnQgewogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgPSAiLi4vbW9kZWwvZ2VuZXJhdGVkIgp9CgplbnVtIEVsZW1lbnRBdHRyaWJ1dGUgewogIEhSRUYKICBTUkMKICBWQUxVRQogIERBVEFfR0FfUFJPRFVDVF9OQU1FCn0KCmVudW0gU2NyYXBpbmdFcnJvckNvZGUgewogIE1JU1NJTkdfQVRUUklCVVRFCiAgSU5WQUxJRF9BVFRSSUJVVEUKICBNSVNTSU5HX1RFWFQKICBJTlZBTElEX1RFWFQKICBOT05VTklRVUVfVEVYVAogIE1JU1NJTkdfRUxFTUVOVAogIE5PTlVOSVFVRV9FTEVNRU5UCiAgSFRUUF9ORVRXT1JLCiAgSFRUUF9DTElFTlQKICBIVFRQX1NFUklBTElaQVRJT04KfQoKZW51bSBQcm9kdWN0UmVjb3JkRGF0YUZpZWxkIHsKICBQUklDRQogIFJBV19QUklDRQogIFNUQVRVUwp9CgplbnVtIFByb2R1Y3RTdGF0dXMgewogIE91dE9mU3RvY2sKICBJblN0b2NrCiAgQXZhaWxhYmxlRm9yQmFja29yZGVyCiAgTm90TGlzdGVkCn0KCmVudW0gUHJvZHVjdENhdGVnb3J5IHsKICBIYW5kVG9vbHMKfQoKZW51bSBQcm9kdWN0U3ViQ2F0ZWdvcnkgewogIEhhbmRQbGFuZXMKICBTYXdzCiAgQ2hpc2VscwogIFNwb2tlc2hhdmVzCiAgR3JlZW5Xb29kd29ya2luZwogIEFjY2Vzc29yeVRvb2xzCn0KCmVudW0gUHJpY2VDaGFuZ2VFdmVudENvbmRpdGlvbiB7CiAgUHJpY2VJbmNyZWFzZQogIFByaWNlRGVjcmVhc2UKfQoKZW51bSBOb3RpZmljYXRpb25UeXBlIHsKICBOZXdQcm9kdWN0Tm90aWZpY2F0aW9uCiAgUHJpY2VDaGFuZ2VOb3RpZmljYXRpb24KICBTdGF0dXNDaGFuZ2VOb3RpZmljYXRpb24KfQoKZW51bSBOb3RpZmljYXRpb25TdGF0ZSB7CiAgUGVuZGluZwogIFNlbnQKICBGYWlsZWQKfQoKbW9kZWwgVXNlciB7CiAgaWQgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAaWQoKSBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkKCkKICBjbGVya0lkICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEB1bmlxdWUoKQogIGZpcnN0TmFtZSAgICAgICAgICAgICBTdHJpbmcKICBsYXN0TmFtZSAgICAgICAgICAgICAgU3RyaW5nCiAgcHJvZmlsZUltYWdlVXJsICAgICAgIFN0cmluZz8KICBlbWFpbEFkZHJlc3MgICAgICAgICAgU3RyaW5nCiAgY3JlYXRlZEF0ICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkQXQgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgIEB1cGRhdGVkQXQoKQogIGNyZWF0ZWRQcm9kdWN0cyAgICAgICBQcm9kdWN0W10gICAgICAgICAgICAgQHJlbGF0aW9uKCJjcmVhdGVkUHJvZHVjdHMiKQogIHVwZGF0ZWRQcm9kdWN0cyAgICAgICBQcm9kdWN0W10gICAgICAgICAgICAgQHJlbGF0aW9uKCJ1cGRhdGVkUHJvZHVjdHMiKQogIGNyZWF0ZWRQcm9kdWN0UmVjb3JkcyBQcm9kdWN0UmVjb3JkW10gICAgICAgQHJlbGF0aW9uKCJjcmVhdGVkUHJvZHVjdFJlY29yZHMiKQogIHVwZGF0ZWRQcm9kdWN0UmVjb3JkcyBQcm9kdWN0UmVjb3JkW10gICAgICAgQHJlbGF0aW9uKCJ1cGRhdGVkUHJvZHVjdFJlY29yZHMiKQogIGNyZWF0ZWRTdWJzY3JpcHRpb25zICBQcm9kdWN0U3Vic2NyaXB0aW9uW10gQHJlbGF0aW9uKCJjcmVhdGVkU3Vic2NyaXB0aW9ucyIpCiAgdXBkYXRlZFN1YnNjcmlwdGlvbnMgIFByb2R1Y3RTdWJzY3JpcHRpb25bXSBAcmVsYXRpb24oInVwZGF0ZWRTdWJzY3JpcHRpb25zIikKICBzdWJzY3JpcHRpb25zICAgICAgICAgUHJvZHVjdFN1YnNjcmlwdGlvbltdIEByZWxhdGlvbigic3Vic2NyaXB0aW9ucyIpCiAgY3JlYXRlZE5vdGlmaWNhdGlvbnMgIE5vdGlmaWNhdGlvbltdICAgICAgICBAcmVsYXRpb24oImNyZWF0ZWROb3RpZmljYXRpb25zIikKICB1cGRhdGVkTm90aWZpY2F0aW9ucyAgTm90aWZpY2F0aW9uW10gICAgICAgIEByZWxhdGlvbigidXBkYXRlZE5vdGlmaWNhdGlvbnMiKQogIG5vdGlmaWNhdGlvbnMgICAgICAgICBOb3RpZmljYXRpb25bXSAgICAgICAgQHJlbGF0aW9uKCJub3RpZmljYXRpb25zIikKfQoKbW9kZWwgSHR0cE5ldHdvcmtFcnJvckRhdGEgewogIGlkICBTdHJpbmcgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgdXJsIFN0cmluZwp9Cgptb2RlbCBIdHRwU2VyaWFsaXphdGlvbkVycm9yRGF0YSB7CiAgaWQgIFN0cmluZyBAaWQoKSBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkKCkKICB1cmwgU3RyaW5nCn0KCm1vZGVsIEh0dHBDbGllbnRFcnJvckRhdGEgewogIGlkICAgICBTdHJpbmcgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgdXJsICAgIFN0cmluZwogIHN0YXR1cyBJbnQKfQoKbW9kZWwgTWlzc2luZ0F0dHJpYnV0ZUVycm9yRGF0YSB7CiAgaWQgICAgICAgICBTdHJpbmcgICAgICAgICAgIEBpZCgpIEBkZWZhdWx0KHV1aWQoKSkgQGRiLlV1aWQoKQogIGF0dHJpYnV0ZSAgRWxlbWVudEF0dHJpYnV0ZQogIHBhcmVudEh0bWwgU3RyaW5nPwp9Cgptb2RlbCBJbnZhbGlkQXR0cmlidXRlRXJyb3JEYXRhIHsKICBpZCAgICAgICAgIFN0cmluZyAgICAgICAgICAgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgYXR0cmlidXRlICBFbGVtZW50QXR0cmlidXRlCiAgcGFyZW50SHRtbCBTdHJpbmc/CiAgdmFsdWUgICAgICBTdHJpbmcKfQoKbW9kZWwgSW52YWxpZFRleHRFcnJvckRhdGEgewogIGlkICAgICAgICAgU3RyaW5nICBAaWQoKSBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkKCkKICBwYXJlbnRIdG1sIFN0cmluZz8KICB2YWx1ZSAgICAgIFN0cmluZwp9Cgptb2RlbCBNaXNzaW5nVGV4dEVycm9yRGF0YSB7CiAgaWQgICAgICAgICBTdHJpbmcgIEBpZCgpIEBkZWZhdWx0KHV1aWQoKSkgQGRiLlV1aWQoKQogIHBhcmVudEh0bWwgU3RyaW5nPwp9Cgptb2RlbCBOb25VbmlxdWVUZXh0RXJyb3JEYXRhIHsKICBpZCAgICAgICAgIFN0cmluZyAgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgcGFyZW50SHRtbCBTdHJpbmc/Cn0KCm1vZGVsIE1pc3NpbmdFbGVtZW50RXJyb3JEYXRhIHsKICBpZCAgICAgICAgIFN0cmluZyAgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgcGFyZW50SHRtbCBTdHJpbmc/CiAgc2VsZWN0b3IgICBTdHJpbmcKfQoKbW9kZWwgTm9uVW5pcXVlRWxlbWVudEVycm9yRGF0YSB7CiAgaWQgICAgICAgICBTdHJpbmcgIEBpZCgpIEBkZWZhdWx0KHV1aWQoKSkgQGRiLlV1aWQoKQogIHBhcmVudEh0bWwgU3RyaW5nPwogIHNlbGVjdG9yICAgU3RyaW5nCn0KCm1vZGVsIFByb2R1Y3RSZWNvcmRFcnJvciB7CiAgaWQgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgZXJyb3JJZCAgIFN0cmluZyAgICAgICAgICAgICAgICAgQHVuaXF1ZSgpIEBkYi5VdWlkKCkKICBlcnJvckNvZGUgU2NyYXBpbmdFcnJvckNvZGUKICByZWNvcmQgICAgUHJvZHVjdFJlY29yZCAgICAgICAgICBAcmVsYXRpb24oImVycm9ycyIsIGZpZWxkczogW3JlY29yZElkXSwgcmVmZXJlbmNlczogW2lkXSkKICByZWNvcmRJZCAgU3RyaW5nICAgICAgICAgICAgICAgICBAdW5pcXVlKCkgQGRiLlV1aWQoKQogIGZpZWxkICAgICBQcm9kdWN0UmVjb3JkRGF0YUZpZWxkCiAgbWVzc2FnZSAgIFN0cmluZwp9Cgptb2RlbCBQcm9kdWN0UmVjb3JkIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgIEBpZCgpIEBkZWZhdWx0KHV1aWQoKSkgQGRiLlV1aWQoKQogIGNyZWF0ZWRBdCAgICAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0ICAgICAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICAgICAgICBAdXBkYXRlZEF0KCkKICBjcmVhdGVkQnlJZCAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgIEBkYi5VdWlkKCkKICB1cGRhdGVkQnlJZCAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgIEBkYi5VdWlkKCkKICB0aW1lc3RhbXAgICAgICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIGNyZWF0ZWRCeSAgICAgICAgICAgICAgICAgVXNlciAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJjcmVhdGVkUHJvZHVjdFJlY29yZHMiLCBmaWVsZHM6IFtjcmVhdGVkQnlJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgdXBkYXRlZEJ5ICAgICAgICAgICAgICAgICBVc2VyICAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oInVwZGF0ZWRQcm9kdWN0UmVjb3JkcyIsIGZpZWxkczogW3VwZGF0ZWRCeUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBwcm9kdWN0ICAgICAgICAgICAgICAgICAgIFByb2R1Y3QgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigicmVjb3JkcyIsIGZpZWxkczogW3Byb2R1Y3RJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgcHJvZHVjdElkICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICBAZGIuVXVpZCgpCiAgcHJpY2UgICAgICAgICAgICAgICAgICAgICBGbG9hdD8KICByYXdQcmljZSAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBzdGF0dXMgICAgICAgICAgICAgICAgICAgIFByb2R1Y3RTdGF0dXM/CiAgd2FzTWFudWFsbHlDcmVhdGVkICAgICAgICBCb29sZWFuICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBtYW51YWxseUNoYW5nZWRGaWVsZHMgICAgIFByb2R1Y3RSZWNvcmREYXRhRmllbGRbXSAgIEBkZWZhdWx0KFtdKQogIGVycm9ycyAgICAgICAgICAgICAgICAgICAgUHJvZHVjdFJlY29yZEVycm9yW10gICAgICAgQHJlbGF0aW9uKCJlcnJvcnMiKQogIGlzUHJvY2Vzc2VkICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgc3RhdHVzQ2hhbmdlTm90aWZpY2F0aW9ucyBTdGF0dXNDaGFuZ2VOb3RpZmljYXRpb25bXSBAcmVsYXRpb24oInN0YXR1c0NoYW5nZU5vdGlmaWNhdGlvbnMiKQogIHByaWNlQ2hhbmdlTm90aWZpY2F0aW9ucyAgUHJpY2VDaGFuZ2VOb3RpZmljYXRpb25bXSAgQHJlbGF0aW9uKCJwcmljZUNoYW5nZU5vdGlmaWNhdGlvbnMiKQp9Cgptb2RlbCBQcm9kdWN0IHsKICBpZCAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgY3JlYXRlZEF0ICAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCAgICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICAgICBAdXBkYXRlZEF0KCkKICBjcmVhdGVkQnlJZCAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgQGRiLlV1aWQoKQogIHVwZGF0ZWRCeUlkICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICBAZGIuVXVpZCgpCiAgY3JlYXRlZEJ5ICAgICAgICAgICAgICAgVXNlciAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiY3JlYXRlZFByb2R1Y3RzIiwgZmllbGRzOiBbY3JlYXRlZEJ5SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHVwZGF0ZWRCeSAgICAgICAgICAgICAgIFVzZXIgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oInVwZGF0ZWRQcm9kdWN0cyIsIGZpZWxkczogW3VwZGF0ZWRCeUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBuYW1lICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgc2x1ZyAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgIEB1bmlxdWUoKQogIGNvZGUgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBpbWFnZVNyYyAgICAgICAgICAgICAgICBTdHJpbmc/CiAgcmVjb3JkcyAgICAgICAgICAgICAgICAgUHJvZHVjdFJlY29yZFtdICAgICAgICAgIEByZWxhdGlvbigicmVjb3JkcyIpCiAgc3RhdHVzICAgICAgICAgICAgICAgICAgUHJvZHVjdFN0YXR1cz8KICBzdGF0dXNMYXN0VXBkYXRlZEF0ICAgICBEYXRlVGltZT8KICBzdGF0dXNBc09mICAgICAgICAgICAgICBEYXRlVGltZT8KICBwcmljZSAgICAgICAgICAgICAgICAgICBGbG9hdD8KICBwcmljZUxhc3RVcGRhdGVkQXQgICAgICBEYXRlVGltZT8KICBwcmljZUFzT2YgICAgICAgICAgICAgICBEYXRlVGltZT8KICBjYXRlZ29yeSAgICAgICAgICAgICAgICBQcm9kdWN0Q2F0ZWdvcnkKICBzdWJDYXRlZ29yaWVzICAgICAgICAgICBQcm9kdWN0U3ViQ2F0ZWdvcnlbXQogIHN1YnNjcmlwdGlvbnMgICAgICAgICAgIFByb2R1Y3RTdWJzY3JpcHRpb25bXSAgICBAcmVsYXRpb24oInN1YnNjcmlwdGlvbnMiKQogIG5ld1Byb2R1Y3ROb3RpZmljYXRpb25zIE5ld1Byb2R1Y3ROb3RpZmljYXRpb25bXSBAcmVsYXRpb24oIm5ld1Byb2R1Y3ROb3RpZmljYXRpb25zIikKfQoKbW9kZWwgUHJpY2VDaGFuZ2VTdWJzY3JpYmVkRXZlbnQgewogIGlkICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICBAaWQoKSBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkKCkKICBlbmFibGVkICAgICAgICBCb29sZWFuICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQodHJ1ZSkKICBzdWJzY3JpcHRpb25JZCBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgQHVuaXF1ZSgpIEBkYi5VdWlkKCkKICBzdWJzY3JpcHRpb24gICBQcm9kdWN0U3Vic2NyaXB0aW9uICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3N1YnNjcmlwdGlvbklkXSwgcmVmZXJlbmNlczogW2lkXSkKICBjb25kaXRpb25zICAgICBQcmljZUNoYW5nZUV2ZW50Q29uZGl0aW9uW10gQGRlZmF1bHQoW1ByaWNlSW5jcmVhc2UsIFByaWNlRGVjcmVhc2VdKQp9Cgptb2RlbCBTdGF0dXNDaGFuZ2VFdmVudENvbmRpdGlvbiB7CiAgaWQgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgIEBpZCgpIEBkZWZhdWx0KHV1aWQoKSkgQGRiLlV1aWQoKQogIGNyZWF0ZWRBdCAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkQXQgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZWRBdCgpCiAgZnJvbVN0YXR1cyAgICAgICAgUHJvZHVjdFN0YXR1c1tdCiAgdG9TdGF0dXMgICAgICAgICAgUHJvZHVjdFN0YXR1c1tdCiAgc3Vic2NyaWJlZEV2ZW50ICAgU3RhdHVzQ2hhbmdlU3Vic2NyaWJlZEV2ZW50IEByZWxhdGlvbigiY29uZGl0aW9ucyIsIGZpZWxkczogW3N1YnNjcmliZWRFdmVudElkXSwgcmVmZXJlbmNlczogW2lkXSkKICBzdWJzY3JpYmVkRXZlbnRJZCBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgQGRiLlV1aWQoKQp9Cgptb2RlbCBTdGF0dXNDaGFuZ2VTdWJzY3JpYmVkRXZlbnQgewogIGlkICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgZW5hYmxlZCAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdCh0cnVlKQogIHN1YnNjcmlwdGlvbklkIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgQHVuaXF1ZSgpIEBkYi5VdWlkKCkKICBzdWJzY3JpcHRpb24gICBQcm9kdWN0U3Vic2NyaXB0aW9uICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtzdWJzY3JpcHRpb25JZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgY29uZGl0aW9ucyAgICAgU3RhdHVzQ2hhbmdlRXZlbnRDb25kaXRpb25bXSBAcmVsYXRpb24oImNvbmRpdGlvbnMiKQp9Cgptb2RlbCBQcm9kdWN0U3Vic2NyaXB0aW9uIHsKICBpZCAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICBAaWQoKSBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkKCkKICBjcmVhdGVkQXQgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkQXQgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgICAgICBAdXBkYXRlZEF0KCkKICBjcmVhdGVkQnlJZCAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICBAZGIuVXVpZCgpCiAgdXBkYXRlZEJ5SWQgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgQGRiLlV1aWQoKQogIGNyZWF0ZWRCeSAgICBVc2VyICAgICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiY3JlYXRlZFN1YnNjcmlwdGlvbnMiLCBmaWVsZHM6IFtjcmVhdGVkQnlJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgdXBkYXRlZEJ5ICAgIFVzZXIgICAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJ1cGRhdGVkU3Vic2NyaXB0aW9ucyIsIGZpZWxkczogW3VwZGF0ZWRCeUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBwcm9kdWN0ICAgICAgUHJvZHVjdCAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oInN1YnNjcmlwdGlvbnMiLCBmaWVsZHM6IFtwcm9kdWN0SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHByb2R1Y3RJZCAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VdWlkKCkKICB1c2VyICAgICAgICAgVXNlciAgICAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oInN1YnNjcmlwdGlvbnMiLCBmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHVzZXJJZCAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VdWlkKCkKICBlbmFibGVkICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdCh0cnVlKQogIHN0YXR1c0NoYW5nZSBTdGF0dXNDaGFuZ2VTdWJzY3JpYmVkRXZlbnQ/CiAgcHJpY2VDaGFuZ2UgIFByaWNlQ2hhbmdlU3Vic2NyaWJlZEV2ZW50PwoKICBAQHVuaXF1ZShbcHJvZHVjdElkLCB1c2VySWRdKQp9CgovLy8gQEBkZWxlZ2F0ZShub3RpZmljYXRpb25UeXBlKQptb2RlbCBOb3RpZmljYXRpb24gewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICBAaWQoKSBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkKCkKICBjcmVhdGVkQXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICAgICAgIEB1cGRhdGVkQXQoKQogIGNyZWF0ZWRCeUlkICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICBAZGIuVXVpZCgpCiAgdXBkYXRlZEJ5SWQgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgIEBkYi5VdWlkKCkKICBjcmVhdGVkQnkgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXIgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJjcmVhdGVkTm90aWZpY2F0aW9ucyIsIGZpZWxkczogW2NyZWF0ZWRCeUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICB1cGRhdGVkQnkgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXIgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJ1cGRhdGVkTm90aWZpY2F0aW9ucyIsIGZpZWxkczogW3VwZGF0ZWRCeUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICB1c2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXIgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJub3RpZmljYXRpb25zIiwgZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICB1c2VySWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgQGRiLlV1aWQoKQogIG5vdGlmaWNhdGlvblR5cGUgICAgICAgICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uVHlwZQogIHN0YXRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uU3RhdGUKICBkZWxlZ2F0ZV9hdXhfcHJpY2VDaGFuZ2VOb3RpZmljYXRpb24gIFByaWNlQ2hhbmdlTm90aWZpY2F0aW9uPwogIGRlbGVnYXRlX2F1eF9zdGF0dXNDaGFuZ2VOb3RpZmljYXRpb24gU3RhdHVzQ2hhbmdlTm90aWZpY2F0aW9uPwogIGRlbGVnYXRlX2F1eF9uZXdQcm9kdWN0Tm90aWZpY2F0aW9uICAgTmV3UHJvZHVjdE5vdGlmaWNhdGlvbj8KfQoKbW9kZWwgUHJpY2VDaGFuZ2VOb3RpZmljYXRpb24gewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICBAaWQoKSBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkKCkKICBwcm9kdWN0UmVjb3JkSWQgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgQGRiLlV1aWQoKQogIHByb2R1Y3RSZWNvcmQgICAgICAgICAgICAgUHJvZHVjdFJlY29yZCAgICAgICAgICAgICBAcmVsYXRpb24oInByaWNlQ2hhbmdlTm90aWZpY2F0aW9ucyIsIGZpZWxkczogW3Byb2R1Y3RSZWNvcmRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgY29uZGl0aW9uICAgICAgICAgICAgICAgICBQcmljZUNoYW5nZUV2ZW50Q29uZGl0aW9uCiAgZGVsZWdhdGVfYXV4X25vdGlmaWNhdGlvbiBOb3RpZmljYXRpb24gICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlLCBvblVwZGF0ZTogQ2FzY2FkZSkKfQoKbW9kZWwgU3RhdHVzQ2hhbmdlTm90aWZpY2F0aW9uIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgcHJvZHVjdFJlY29yZElkICAgICAgICAgICBTdHJpbmcgICAgICAgIEBkYi5VdWlkKCkKICBwcm9kdWN0UmVjb3JkICAgICAgICAgICAgIFByb2R1Y3RSZWNvcmQgQHJlbGF0aW9uKCJzdGF0dXNDaGFuZ2VOb3RpZmljYXRpb25zIiwgZmllbGRzOiBbcHJvZHVjdFJlY29yZElkXSwgcmVmZXJlbmNlczogW2lkXSkKICBmcm9tU3RhdHVzICAgICAgICAgICAgICAgIFByb2R1Y3RTdGF0dXMKICB0b1N0YXR1cyAgICAgICAgICAgICAgICAgIFByb2R1Y3RTdGF0dXMKICBkZWxlZ2F0ZV9hdXhfbm90aWZpY2F0aW9uIE5vdGlmaWNhdGlvbiAgQHJlbGF0aW9uKGZpZWxkczogW2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUsIG9uVXBkYXRlOiBDYXNjYWRlKQp9Cgptb2RlbCBOZXdQcm9kdWN0Tm90aWZpY2F0aW9uIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICBAaWQoKSBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkKCkKICBwcm9kdWN0SWQgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICBAZGIuVXVpZCgpCiAgcHJvZHVjdCAgICAgICAgICAgICAgICAgICBQcm9kdWN0ICAgICAgQHJlbGF0aW9uKCJuZXdQcm9kdWN0Tm90aWZpY2F0aW9ucyIsIGZpZWxkczogW3Byb2R1Y3RJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgZGVsZWdhdGVfYXV4X25vdGlmaWNhdGlvbiBOb3RpZmljYXRpb24gQHJlbGF0aW9uKGZpZWxkczogW2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUsIG9uVXBkYXRlOiBDYXNjYWRlKQp9Cg==",
  "inlineSchemaHash": "cdc98dc290d4b97ce5ebc1f28d44691b4a7fe9c980c548127628680bc6b6a6be"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/database/model/generated",
    "database/model/generated",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clerkId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profileImageUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"createdProducts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"createdProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedProducts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"updatedProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdProductRecords\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecord\",\"relationName\":\"createdProductRecords\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedProductRecords\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecord\",\"relationName\":\"updatedProductRecords\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdSubscriptions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductSubscription\",\"relationName\":\"createdSubscriptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedSubscriptions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductSubscription\",\"relationName\":\"updatedSubscriptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscriptions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductSubscription\",\"relationName\":\"subscriptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdNotifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notification\",\"relationName\":\"createdNotifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedNotifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notification\",\"relationName\":\"updatedNotifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notification\",\"relationName\":\"notifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HttpNetworkErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HttpSerializationErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HttpClientErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MissingAttributeErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attribute\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ElementAttribute\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InvalidAttributeErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attribute\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ElementAttribute\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InvalidTextErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MissingTextErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"NonUniqueTextErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MissingElementErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"selector\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"NonUniqueElementErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"selector\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductRecordError\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"errorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"errorCode\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ScrapingErrorCode\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"record\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecord\",\"relationName\":\"errors\",\"relationFromFields\":[\"recordId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recordId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"field\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecordDataField\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductRecord\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"createdProductRecords\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"updatedProductRecords\",\"relationFromFields\":[\"updatedById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"records\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rawPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wasManuallyCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manuallyChangedFields\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ProductRecordDataField\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"errors\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecordError\",\"relationName\":\"errors\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isProcessed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statusChangeNotifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusChangeNotification\",\"relationName\":\"statusChangeNotifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priceChangeNotifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PriceChangeNotification\",\"relationName\":\"priceChangeNotifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Product\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"createdProducts\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"updatedProducts\",\"relationFromFields\":[\"updatedById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imageSrc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"records\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecord\",\"relationName\":\"records\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statusLastUpdatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statusAsOf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priceLastUpdatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priceAsOf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductCategory\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subCategories\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductSubCategory\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscriptions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductSubscription\",\"relationName\":\"subscriptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newProductNotifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NewProductNotification\",\"relationName\":\"newProductNotifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PriceChangeSubscribedEvent\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscriptionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscription\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductSubscription\",\"relationName\":\"PriceChangeSubscribedEventToProductSubscription\",\"relationFromFields\":[\"subscriptionId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conditions\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PriceChangeEventCondition\",\"default\":[\"PriceIncrease\",\"PriceDecrease\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StatusChangeEventCondition\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"fromStatus\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"toStatus\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscribedEvent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusChangeSubscribedEvent\",\"relationName\":\"conditions\",\"relationFromFields\":[\"subscribedEventId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscribedEventId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StatusChangeSubscribedEvent\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscriptionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscription\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductSubscription\",\"relationName\":\"ProductSubscriptionToStatusChangeSubscribedEvent\",\"relationFromFields\":[\"subscriptionId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conditions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusChangeEventCondition\",\"relationName\":\"conditions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductSubscription\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"createdSubscriptions\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"updatedSubscriptions\",\"relationFromFields\":[\"updatedById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"subscriptions\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"subscriptions\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statusChange\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusChangeSubscribedEvent\",\"relationName\":\"ProductSubscriptionToStatusChangeSubscribedEvent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priceChange\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PriceChangeSubscribedEvent\",\"relationName\":\"PriceChangeSubscribedEventToProductSubscription\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"productId\",\"userId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"productId\",\"userId\"]}],\"isGenerated\":false},\"Notification\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"createdNotifications\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"updatedNotifications\",\"relationFromFields\":[\"updatedById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"notifications\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notificationType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NotificationType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NotificationState\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delegate_aux_priceChangeNotification\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PriceChangeNotification\",\"relationName\":\"NotificationToPriceChangeNotification\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delegate_aux_statusChangeNotification\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusChangeNotification\",\"relationName\":\"NotificationToStatusChangeNotification\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delegate_aux_newProductNotification\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NewProductNotification\",\"relationName\":\"NewProductNotificationToNotification\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"@@delegate(notificationType)\"},\"PriceChangeNotification\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productRecordId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productRecord\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecord\",\"relationName\":\"priceChangeNotifications\",\"relationFromFields\":[\"productRecordId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"condition\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PriceChangeEventCondition\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delegate_aux_notification\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notification\",\"relationName\":\"NotificationToPriceChangeNotification\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StatusChangeNotification\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productRecordId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productRecord\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecord\",\"relationName\":\"statusChangeNotifications\",\"relationFromFields\":[\"productRecordId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fromStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"toStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delegate_aux_notification\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notification\",\"relationName\":\"NotificationToStatusChangeNotification\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"NewProductNotification\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"newProductNotifications\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delegate_aux_notification\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notification\",\"relationName\":\"NewProductNotificationToNotification\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"ElementAttribute\":{\"values\":[{\"name\":\"HREF\",\"dbName\":null},{\"name\":\"SRC\",\"dbName\":null},{\"name\":\"VALUE\",\"dbName\":null},{\"name\":\"DATA_GA_PRODUCT_NAME\",\"dbName\":null}],\"dbName\":null},\"ScrapingErrorCode\":{\"values\":[{\"name\":\"MISSING_ATTRIBUTE\",\"dbName\":null},{\"name\":\"INVALID_ATTRIBUTE\",\"dbName\":null},{\"name\":\"MISSING_TEXT\",\"dbName\":null},{\"name\":\"INVALID_TEXT\",\"dbName\":null},{\"name\":\"NONUNIQUE_TEXT\",\"dbName\":null},{\"name\":\"MISSING_ELEMENT\",\"dbName\":null},{\"name\":\"NONUNIQUE_ELEMENT\",\"dbName\":null},{\"name\":\"HTTP_NETWORK\",\"dbName\":null},{\"name\":\"HTTP_CLIENT\",\"dbName\":null},{\"name\":\"HTTP_SERIALIZATION\",\"dbName\":null}],\"dbName\":null},\"ProductRecordDataField\":{\"values\":[{\"name\":\"PRICE\",\"dbName\":null},{\"name\":\"RAW_PRICE\",\"dbName\":null},{\"name\":\"STATUS\",\"dbName\":null}],\"dbName\":null},\"ProductStatus\":{\"values\":[{\"name\":\"OutOfStock\",\"dbName\":null},{\"name\":\"InStock\",\"dbName\":null},{\"name\":\"AvailableForBackorder\",\"dbName\":null},{\"name\":\"NotListed\",\"dbName\":null}],\"dbName\":null},\"ProductCategory\":{\"values\":[{\"name\":\"HandTools\",\"dbName\":null}],\"dbName\":null},\"ProductSubCategory\":{\"values\":[{\"name\":\"HandPlanes\",\"dbName\":null},{\"name\":\"Saws\",\"dbName\":null},{\"name\":\"Chisels\",\"dbName\":null},{\"name\":\"Spokeshaves\",\"dbName\":null},{\"name\":\"GreenWoodworking\",\"dbName\":null},{\"name\":\"AccessoryTools\",\"dbName\":null}],\"dbName\":null},\"PriceChangeEventCondition\":{\"values\":[{\"name\":\"PriceIncrease\",\"dbName\":null},{\"name\":\"PriceDecrease\",\"dbName\":null}],\"dbName\":null},\"NotificationType\":{\"values\":[{\"name\":\"NewProductNotification\",\"dbName\":null},{\"name\":\"PriceChangeNotification\",\"dbName\":null},{\"name\":\"StatusChangeNotification\",\"dbName\":null}],\"dbName\":null},\"NotificationState\":{\"values\":[{\"name\":\"Pending\",\"dbName\":null},{\"name\":\"Sent\",\"dbName\":null},{\"name\":\"Failed\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "src/database/model/generated/libquery_engine-darwin-arm64.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/database/model/generated/schema.prisma")
