
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
 * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
 */
Prisma.prismaVersion = {
  client: "5.8.0",
  engine: "393aa359c9ad4a4bb28630fb5613f9c281cde053"
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

exports.Prisma.ProductScalarFieldEnum = {
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

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  createdById: 'createdById',
  updatedAt: 'updatedAt',
  updatedById: 'updatedById',
  productId: 'productId',
  userId: 'userId',
  contentType: 'contentType',
  enabled: 'enabled'
};

exports.Prisma.PriceChangeNotificationScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  createdById: 'createdById',
  updatedAt: 'updatedAt',
  updatedById: 'updatedById',
  productId: 'productId',
  userId: 'userId',
  contentType: 'contentType',
  enabled: 'enabled',
  events: 'events'
};

exports.Prisma.StatusChangeNotificationEventScalarFieldEnum = {
  id: 'id',
  fromStatus: 'fromStatus',
  toStatus: 'toStatus',
  notificationId: 'notificationId'
};

exports.Prisma.StatusChangeNotificationScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  createdById: 'createdById',
  updatedAt: 'updatedAt',
  updatedById: 'updatedById',
  productId: 'productId',
  userId: 'userId',
  contentType: 'contentType',
  enabled: 'enabled'
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

exports.NotificationContentType = exports.$Enums.NotificationContentType = {
  PriceChangeNotification: 'PriceChangeNotification',
  StatusChangeNotification: 'StatusChangeNotification'
};

exports.PriceChangeEventType = exports.$Enums.PriceChangeEventType = {
  PriceIncrease: 'PriceIncrease',
  PriceDecrease: 'PriceDecrease'
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
  Notification: 'Notification',
  PriceChangeNotification: 'PriceChangeNotification',
  StatusChangeNotificationEvent: 'StatusChangeNotificationEvent',
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
      "value": "/Users/nickflorin/repos/tooltrack/src/database/model/zenstack-generated/.logical-prisma-client",
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
    "sourceFilePath": "/Users/nickflorin/repos/tooltrack/src/database/zenstack/logical-1723141416549.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../../../.env",
    "schemaEnvPath": "../../../../../.env"
  },
  "relativePath": "../../../zenstack",
  "clientVersion": "5.8.0",
  "engineVersion": "393aa359c9ad4a4bb28630fb5613f9c281cde053",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "POSTGRES_PRISMA_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLwovLyBETyBOT1QgTU9ESUZZIFRISVMgRklMRSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vCi8vIFRoaXMgZmlsZSBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBaZW5TdGFjayBDTEkgYW5kIHNob3VsZCBub3QgYmUgbWFudWFsbHkgdXBkYXRlZC4gLy8KLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLwoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgID0gZW52KCJQT1NUR1JFU19QUklTTUFfVVJMIikKICBkaXJlY3RVcmwgPSBlbnYoIlBPU1RHUkVTX1VSTF9OT05fUE9PTElORyIpCn0KCmdlbmVyYXRvciBjbGllbnQgewogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgPSAiLi4vbW9kZWwvemVuc3RhY2stZ2VuZXJhdGVkLy5sb2dpY2FsLXByaXNtYS1jbGllbnQiCn0KCmVudW0gRWxlbWVudEF0dHJpYnV0ZSB7CiAgSFJFRgogIFNSQwogIFZBTFVFCiAgREFUQV9HQV9QUk9EVUNUX05BTUUKfQoKZW51bSBTY3JhcGluZ0Vycm9yQ29kZSB7CiAgTUlTU0lOR19BVFRSSUJVVEUKICBJTlZBTElEX0FUVFJJQlVURQogIE1JU1NJTkdfVEVYVAogIElOVkFMSURfVEVYVAogIE5PTlVOSVFVRV9URVhUCiAgTUlTU0lOR19FTEVNRU5UCiAgTk9OVU5JUVVFX0VMRU1FTlQKICBIVFRQX05FVFdPUksKICBIVFRQX0NMSUVOVAogIEhUVFBfU0VSSUFMSVpBVElPTgp9CgplbnVtIFByb2R1Y3RSZWNvcmREYXRhRmllbGQgewogIFBSSUNFCiAgUkFXX1BSSUNFCiAgU1RBVFVTCn0KCmVudW0gUHJvZHVjdFN0YXR1cyB7CiAgT3V0T2ZTdG9jawogIEluU3RvY2sKICBBdmFpbGFibGVGb3JCYWNrb3JkZXIKICBOb3RMaXN0ZWQKfQoKZW51bSBQcm9kdWN0Q2F0ZWdvcnkgewogIEhhbmRUb29scwp9CgplbnVtIFByb2R1Y3RTdWJDYXRlZ29yeSB7CiAgSGFuZFBsYW5lcwogIFNhd3MKICBDaGlzZWxzCiAgU3Bva2VzaGF2ZXMKICBHcmVlbldvb2R3b3JraW5nCiAgQWNjZXNzb3J5VG9vbHMKfQoKZW51bSBQcmljZUNoYW5nZUV2ZW50VHlwZSB7CiAgUHJpY2VJbmNyZWFzZQogIFByaWNlRGVjcmVhc2UKfQoKZW51bSBOb3RpZmljYXRpb25Db250ZW50VHlwZSB7CiAgUHJpY2VDaGFuZ2VOb3RpZmljYXRpb24KICBTdGF0dXNDaGFuZ2VOb3RpZmljYXRpb24KfQoKbW9kZWwgVXNlciB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgY2xlcmtJZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgQHVuaXF1ZSgpCiAgZmlyc3ROYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nCiAgbGFzdE5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nCiAgcHJvZmlsZUltYWdlVXJsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGVtYWlsQWRkcmVzcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZwogIGNyZWF0ZWRBdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICAgICAgIEB1cGRhdGVkQXQoKQogIGNyZWF0ZWRQcm9kdWN0cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3RbXSAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiY3JlYXRlZFByb2R1Y3RzIikKICB1cGRhdGVkUHJvZHVjdHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9kdWN0W10gICAgICAgICAgICAgICAgICBAcmVsYXRpb24oInVwZGF0ZWRQcm9kdWN0cyIpCiAgY3JlYXRlZFByb2R1Y3RSZWNvcmRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZHVjdFJlY29yZFtdICAgICAgICAgICAgQHJlbGF0aW9uKCJjcmVhdGVkUHJvZHVjdFJlY29yZHMiKQogIHVwZGF0ZWRQcm9kdWN0UmVjb3JkcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3RSZWNvcmRbXSAgICAgICAgICAgIEByZWxhdGlvbigidXBkYXRlZFByb2R1Y3RSZWNvcmRzIikKICBjcmVhdGVkTm90aWZpY2F0aW9ucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RpZmljYXRpb25bXSAgICAgICAgICAgICBAcmVsYXRpb24oImNyZWF0ZWROb3RpZmljYXRpb25zIikKICB1cGRhdGVkTm90aWZpY2F0aW9ucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RpZmljYXRpb25bXSAgICAgICAgICAgICBAcmVsYXRpb24oInVwZGF0ZWROb3RpZmljYXRpb25zIikKICBub3RpZmljYXRpb25zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RpZmljYXRpb25bXSAgICAgICAgICAgICBAcmVsYXRpb24oIm5vdGlmaWNhdGlvbnMiKQogIGRlbGVnYXRlX2F1eF9Vc2VyX2NyZWF0ZWROb3RpZmljYXRpb25zX1ByaWNlQ2hhbmdlTl8wIFByaWNlQ2hhbmdlTm90aWZpY2F0aW9uW10gIEByZWxhdGlvbigiY3JlYXRlZE5vdGlmaWNhdGlvbnMiKQogIGRlbGVnYXRlX2F1eF9Vc2VyX2NyZWF0ZWROb3RpZmljYXRpb25zX1N0YXR1c0NoYW5nZV8wIFN0YXR1c0NoYW5nZU5vdGlmaWNhdGlvbltdIEByZWxhdGlvbigiY3JlYXRlZE5vdGlmaWNhdGlvbnMiKQogIGRlbGVnYXRlX2F1eF9Vc2VyX3VwZGF0ZWROb3RpZmljYXRpb25zX1ByaWNlQ2hhbmdlTl8wIFByaWNlQ2hhbmdlTm90aWZpY2F0aW9uW10gIEByZWxhdGlvbigidXBkYXRlZE5vdGlmaWNhdGlvbnMiKQogIGRlbGVnYXRlX2F1eF9Vc2VyX3VwZGF0ZWROb3RpZmljYXRpb25zX1N0YXR1c0NoYW5nZV8wIFN0YXR1c0NoYW5nZU5vdGlmaWNhdGlvbltdIEByZWxhdGlvbigidXBkYXRlZE5vdGlmaWNhdGlvbnMiKQogIGRlbGVnYXRlX2F1eF9Vc2VyX25vdGlmaWNhdGlvbnNfUHJpY2VDaGFuZ2VOb3RpZmljYV8wIFByaWNlQ2hhbmdlTm90aWZpY2F0aW9uW10gIEByZWxhdGlvbigibm90aWZpY2F0aW9ucyIpCiAgZGVsZWdhdGVfYXV4X1VzZXJfbm90aWZpY2F0aW9uc19TdGF0dXNDaGFuZ2VOb3RpZmljXzAgU3RhdHVzQ2hhbmdlTm90aWZpY2F0aW9uW10gQHJlbGF0aW9uKCJub3RpZmljYXRpb25zIikKfQoKbW9kZWwgSHR0cE5ldHdvcmtFcnJvckRhdGEgewogIGlkICBTdHJpbmcgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgdXJsIFN0cmluZwp9Cgptb2RlbCBIdHRwU2VyaWFsaXphdGlvbkVycm9yRGF0YSB7CiAgaWQgIFN0cmluZyBAaWQoKSBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkKCkKICB1cmwgU3RyaW5nCn0KCm1vZGVsIEh0dHBDbGllbnRFcnJvckRhdGEgewogIGlkICAgICBTdHJpbmcgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgdXJsICAgIFN0cmluZwogIHN0YXR1cyBJbnQKfQoKbW9kZWwgTWlzc2luZ0F0dHJpYnV0ZUVycm9yRGF0YSB7CiAgaWQgICAgICAgICBTdHJpbmcgICAgICAgICAgIEBpZCgpIEBkZWZhdWx0KHV1aWQoKSkgQGRiLlV1aWQoKQogIGF0dHJpYnV0ZSAgRWxlbWVudEF0dHJpYnV0ZQogIHBhcmVudEh0bWwgU3RyaW5nPwp9Cgptb2RlbCBJbnZhbGlkQXR0cmlidXRlRXJyb3JEYXRhIHsKICBpZCAgICAgICAgIFN0cmluZyAgICAgICAgICAgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgYXR0cmlidXRlICBFbGVtZW50QXR0cmlidXRlCiAgcGFyZW50SHRtbCBTdHJpbmc/CiAgdmFsdWUgICAgICBTdHJpbmcKfQoKbW9kZWwgSW52YWxpZFRleHRFcnJvckRhdGEgewogIGlkICAgICAgICAgU3RyaW5nICBAaWQoKSBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkKCkKICBwYXJlbnRIdG1sIFN0cmluZz8KICB2YWx1ZSAgICAgIFN0cmluZwp9Cgptb2RlbCBNaXNzaW5nVGV4dEVycm9yRGF0YSB7CiAgaWQgICAgICAgICBTdHJpbmcgIEBpZCgpIEBkZWZhdWx0KHV1aWQoKSkgQGRiLlV1aWQoKQogIHBhcmVudEh0bWwgU3RyaW5nPwp9Cgptb2RlbCBOb25VbmlxdWVUZXh0RXJyb3JEYXRhIHsKICBpZCAgICAgICAgIFN0cmluZyAgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgcGFyZW50SHRtbCBTdHJpbmc/Cn0KCm1vZGVsIE1pc3NpbmdFbGVtZW50RXJyb3JEYXRhIHsKICBpZCAgICAgICAgIFN0cmluZyAgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgcGFyZW50SHRtbCBTdHJpbmc/CiAgc2VsZWN0b3IgICBTdHJpbmcKfQoKbW9kZWwgTm9uVW5pcXVlRWxlbWVudEVycm9yRGF0YSB7CiAgaWQgICAgICAgICBTdHJpbmcgIEBpZCgpIEBkZWZhdWx0KHV1aWQoKSkgQGRiLlV1aWQoKQogIHBhcmVudEh0bWwgU3RyaW5nPwogIHNlbGVjdG9yICAgU3RyaW5nCn0KCm1vZGVsIFByb2R1Y3RSZWNvcmRFcnJvciB7CiAgaWQgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgZXJyb3JJZCAgIFN0cmluZyAgICAgICAgICAgICAgICAgQHVuaXF1ZSgpIEBkYi5VdWlkKCkKICBlcnJvckNvZGUgU2NyYXBpbmdFcnJvckNvZGUKICByZWNvcmQgICAgUHJvZHVjdFJlY29yZCAgICAgICAgICBAcmVsYXRpb24oImVycm9ycyIsIGZpZWxkczogW3JlY29yZElkXSwgcmVmZXJlbmNlczogW2lkXSkKICByZWNvcmRJZCAgU3RyaW5nICAgICAgICAgICAgICAgICBAdW5pcXVlKCkgQGRiLlV1aWQoKQogIGZpZWxkICAgICBQcm9kdWN0UmVjb3JkRGF0YUZpZWxkCiAgbWVzc2FnZSAgIFN0cmluZwp9Cgptb2RlbCBQcm9kdWN0UmVjb3JkIHsKICBpZCAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgIEBpZCgpIEBkZWZhdWx0KHV1aWQoKSkgQGRiLlV1aWQoKQogIGNyZWF0ZWRBdCAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgY3JlYXRlZEJ5SWQgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICBAZGIuVXVpZCgpCiAgdXBkYXRlZEF0ICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICAgICBAdXBkYXRlZEF0KCkKICB1cGRhdGVkQnlJZCAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgIEBkYi5VdWlkKCkKICB0aW1lc3RhbXAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIGNyZWF0ZWRCeSAgICAgICAgICAgICBVc2VyICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJjcmVhdGVkUHJvZHVjdFJlY29yZHMiLCBmaWVsZHM6IFtjcmVhdGVkQnlJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgdXBkYXRlZEJ5ICAgICAgICAgICAgIFVzZXIgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oInVwZGF0ZWRQcm9kdWN0UmVjb3JkcyIsIGZpZWxkczogW3VwZGF0ZWRCeUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBwcm9kdWN0ICAgICAgICAgICAgICAgUHJvZHVjdCAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigicmVjb3JkcyIsIGZpZWxkczogW3Byb2R1Y3RJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgcHJvZHVjdElkICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICBAZGIuVXVpZCgpCiAgcHJpY2UgICAgICAgICAgICAgICAgIEZsb2F0PwogIHJhd1ByaWNlICAgICAgICAgICAgICBTdHJpbmc/CiAgc3RhdHVzICAgICAgICAgICAgICAgIFByb2R1Y3RTdGF0dXM/CiAgd2FzTWFudWFsbHlDcmVhdGVkICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBtYW51YWxseUNoYW5nZWRGaWVsZHMgUHJvZHVjdFJlY29yZERhdGFGaWVsZFtdIEBkZWZhdWx0KFtdKQogIGVycm9ycyAgICAgICAgICAgICAgICBQcm9kdWN0UmVjb3JkRXJyb3JbXSAgICAgQHJlbGF0aW9uKCJlcnJvcnMiKQp9Cgptb2RlbCBQcm9kdWN0IHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICBAaWQoKSBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkKCkKICBjcmVhdGVkQXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICBjcmVhdGVkQnlJZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICBAZGIuVXVpZCgpCiAgdXBkYXRlZEF0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgICAgQHVwZGF0ZWRBdCgpCiAgdXBkYXRlZEJ5SWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgQGRiLlV1aWQoKQogIGNyZWF0ZWRCeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXIgICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiY3JlYXRlZFByb2R1Y3RzIiwgZmllbGRzOiBbY3JlYXRlZEJ5SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHVwZGF0ZWRCeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXIgICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigidXBkYXRlZFByb2R1Y3RzIiwgZmllbGRzOiBbdXBkYXRlZEJ5SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIG5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBzbHVnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICBAdW5pcXVlKCkKICBjb2RlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgaW1hZ2VTcmMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIHJlY29yZHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3RSZWNvcmRbXSAgICAgICAgICAgIEByZWxhdGlvbigicmVjb3JkcyIpCiAgc3RhdHVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZHVjdFN0YXR1cz8KICBzdGF0dXNSZWNvcmRlZEF0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8KICBwcmljZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGbG9hdD8KICBwcmljZVJlY29yZGVkQXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8KICBjYXRlZ29yeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9kdWN0Q2F0ZWdvcnkKICBzdWJDYXRlZ29yaWVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9kdWN0U3ViQ2F0ZWdvcnlbXQogIG5vdGlmaWNhdGlvbnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvbltdICAgICAgICAgICAgIEByZWxhdGlvbigibm90aWZpY2F0aW9ucyIpCiAgZGVsZWdhdGVfYXV4X1Byb2R1Y3Rfbm90aWZpY2F0aW9uc19QcmljZUNoYW5nZU5vdGlmXzAgUHJpY2VDaGFuZ2VOb3RpZmljYXRpb25bXSAgQHJlbGF0aW9uKCJub3RpZmljYXRpb25zIikKICBkZWxlZ2F0ZV9hdXhfUHJvZHVjdF9ub3RpZmljYXRpb25zX1N0YXR1c0NoYW5nZU5vdGlfMCBTdGF0dXNDaGFuZ2VOb3RpZmljYXRpb25bXSBAcmVsYXRpb24oIm5vdGlmaWNhdGlvbnMiKQp9CgovLy8gQEBkZWxlZ2F0ZShjb250ZW50VHlwZSkKbW9kZWwgTm90aWZpY2F0aW9uIHsKICBpZCAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICBAaWQoKSBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkKCkKICBjcmVhdGVkQXQgICBEYXRlVGltZSAgICAgICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICBjcmVhdGVkQnlJZCBTdHJpbmcgICAgICAgICAgICAgICAgICBAZGIuVXVpZCgpCiAgdXBkYXRlZEF0ICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgQHVwZGF0ZWRBdCgpCiAgdXBkYXRlZEJ5SWQgU3RyaW5nICAgICAgICAgICAgICAgICAgQGRiLlV1aWQoKQogIGNyZWF0ZWRCeSAgIFVzZXIgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiY3JlYXRlZE5vdGlmaWNhdGlvbnMiLCBmaWVsZHM6IFtjcmVhdGVkQnlJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgdXBkYXRlZEJ5ICAgVXNlciAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJ1cGRhdGVkTm90aWZpY2F0aW9ucyIsIGZpZWxkczogW3VwZGF0ZWRCeUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBwcm9kdWN0ICAgICBQcm9kdWN0ICAgICAgICAgICAgICAgICBAcmVsYXRpb24oIm5vdGlmaWNhdGlvbnMiLCBmaWVsZHM6IFtwcm9kdWN0SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHByb2R1Y3RJZCAgIFN0cmluZyAgICAgICAgICAgICAgICAgIEBkYi5VdWlkKCkKICB1c2VyICAgICAgICBVc2VyICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oIm5vdGlmaWNhdGlvbnMiLCBmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHVzZXJJZCAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgIEBkYi5VdWlkKCkKICBjb250ZW50VHlwZSBOb3RpZmljYXRpb25Db250ZW50VHlwZQogIGVuYWJsZWQgICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgIEBkZWZhdWx0KHRydWUpCgogIEBAdW5pcXVlKFtwcm9kdWN0SWQsIHVzZXJJZCwgY29udGVudFR5cGVdKQp9Cgptb2RlbCBQcmljZUNoYW5nZU5vdGlmaWNhdGlvbiB7CiAgaWQgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgQGlkKCkgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCgpCiAgY3JlYXRlZEF0ICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgY3JlYXRlZEJ5SWQgU3RyaW5nICAgICAgICAgICAgICAgICAgQGRiLlV1aWQoKQogIHVwZGF0ZWRBdCAgIERhdGVUaW1lICAgICAgICAgICAgICAgIEB1cGRhdGVkQXQoKQogIHVwZGF0ZWRCeUlkIFN0cmluZyAgICAgICAgICAgICAgICAgIEBkYi5VdWlkKCkKICBjcmVhdGVkQnkgICBVc2VyICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oImNyZWF0ZWROb3RpZmljYXRpb25zIiwgZmllbGRzOiBbY3JlYXRlZEJ5SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHVwZGF0ZWRCeSAgIFVzZXIgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigidXBkYXRlZE5vdGlmaWNhdGlvbnMiLCBmaWVsZHM6IFt1cGRhdGVkQnlJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgcHJvZHVjdCAgICAgUHJvZHVjdCAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJub3RpZmljYXRpb25zIiwgZmllbGRzOiBbcHJvZHVjdElkXSwgcmVmZXJlbmNlczogW2lkXSkKICBwcm9kdWN0SWQgICBTdHJpbmcgICAgICAgICAgICAgICAgICBAZGIuVXVpZCgpCiAgdXNlciAgICAgICAgVXNlciAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJub3RpZmljYXRpb25zIiwgZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICB1c2VySWQgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICBAZGIuVXVpZCgpCiAgY29udGVudFR5cGUgTm90aWZpY2F0aW9uQ29udGVudFR5cGUKICBlbmFibGVkICAgICBCb29sZWFuICAgICAgICAgICAgICAgICBAZGVmYXVsdCh0cnVlKQogIGV2ZW50cyAgICAgIFByaWNlQ2hhbmdlRXZlbnRUeXBlW10gIEBkZWZhdWx0KFtQcmljZUluY3JlYXNlLCBQcmljZURlY3JlYXNlXSkKfQoKbW9kZWwgU3RhdHVzQ2hhbmdlTm90aWZpY2F0aW9uRXZlbnQgewogIGlkICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICBAaWQoKSBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkKCkKICBmcm9tU3RhdHVzICAgICBQcm9kdWN0U3RhdHVzW10KICB0b1N0YXR1cyAgICAgICBQcm9kdWN0U3RhdHVzW10KICBub3RpZmljYXRpb24gICBTdGF0dXNDaGFuZ2VOb3RpZmljYXRpb24gQHJlbGF0aW9uKCJldmVudHMiLCBmaWVsZHM6IFtub3RpZmljYXRpb25JZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgbm90aWZpY2F0aW9uSWQgU3RyaW5nICAgICAgICAgICAgICAgICAgIEBkYi5VdWlkKCkKfQoKbW9kZWwgU3RhdHVzQ2hhbmdlTm90aWZpY2F0aW9uIHsKICBpZCAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgIEBpZCgpIEBkZWZhdWx0KHV1aWQoKSkgQGRiLlV1aWQoKQogIGNyZWF0ZWRBdCAgIERhdGVUaW1lICAgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgY3JlYXRlZEJ5SWQgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVXVpZCgpCiAgdXBkYXRlZEF0ICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgICAgICAgICBAdXBkYXRlZEF0KCkKICB1cGRhdGVkQnlJZCBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VdWlkKCkKICBjcmVhdGVkQnkgICBVc2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiY3JlYXRlZE5vdGlmaWNhdGlvbnMiLCBmaWVsZHM6IFtjcmVhdGVkQnlJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgdXBkYXRlZEJ5ICAgVXNlciAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oInVwZGF0ZWROb3RpZmljYXRpb25zIiwgZmllbGRzOiBbdXBkYXRlZEJ5SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHByb2R1Y3QgICAgIFByb2R1Y3QgICAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJub3RpZmljYXRpb25zIiwgZmllbGRzOiBbcHJvZHVjdElkXSwgcmVmZXJlbmNlczogW2lkXSkKICBwcm9kdWN0SWQgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5VdWlkKCkKICB1c2VyICAgICAgICBVc2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigibm90aWZpY2F0aW9ucyIsIGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgdXNlcklkICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVXVpZCgpCiAgY29udGVudFR5cGUgTm90aWZpY2F0aW9uQ29udGVudFR5cGUKICBlbmFibGVkICAgICBCb29sZWFuICAgICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KHRydWUpCiAgZXZlbnRzICAgICAgU3RhdHVzQ2hhbmdlTm90aWZpY2F0aW9uRXZlbnRbXSBAcmVsYXRpb24oImV2ZW50cyIpCn0K",
  "inlineSchemaHash": "c666e1513531d8fbf62bec01698371c54e823a5d1efac8286311ed7746c7da5f",
  "noEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/database/model/zenstack-generated/.logical-prisma-client",
    "database/model/zenstack-generated/.logical-prisma-client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clerkId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profileImageUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"createdProducts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"createdProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedProducts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"updatedProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdProductRecords\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecord\",\"relationName\":\"createdProductRecords\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedProductRecords\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecord\",\"relationName\":\"updatedProductRecords\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdNotifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notification\",\"relationName\":\"createdNotifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedNotifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notification\",\"relationName\":\"updatedNotifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notification\",\"relationName\":\"notifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delegate_aux_User_createdNotifications_PriceChangeN_0\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PriceChangeNotification\",\"relationName\":\"createdNotifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delegate_aux_User_createdNotifications_StatusChange_0\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusChangeNotification\",\"relationName\":\"createdNotifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delegate_aux_User_updatedNotifications_PriceChangeN_0\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PriceChangeNotification\",\"relationName\":\"updatedNotifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delegate_aux_User_updatedNotifications_StatusChange_0\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusChangeNotification\",\"relationName\":\"updatedNotifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delegate_aux_User_notifications_PriceChangeNotifica_0\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PriceChangeNotification\",\"relationName\":\"notifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delegate_aux_User_notifications_StatusChangeNotific_0\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusChangeNotification\",\"relationName\":\"notifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HttpNetworkErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HttpSerializationErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HttpClientErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MissingAttributeErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attribute\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ElementAttribute\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InvalidAttributeErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attribute\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ElementAttribute\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InvalidTextErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MissingTextErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"NonUniqueTextErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MissingElementErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"selector\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"NonUniqueElementErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"selector\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductRecordError\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"errorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"errorCode\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ScrapingErrorCode\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"record\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecord\",\"relationName\":\"errors\",\"relationFromFields\":[\"recordId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recordId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"field\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecordDataField\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductRecord\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"updatedById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"createdProductRecords\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"updatedProductRecords\",\"relationFromFields\":[\"updatedById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"records\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rawPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wasManuallyCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manuallyChangedFields\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ProductRecordDataField\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"errors\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecordError\",\"relationName\":\"errors\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Product\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"updatedById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"createdProducts\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"updatedProducts\",\"relationFromFields\":[\"updatedById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imageSrc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"records\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecord\",\"relationName\":\"records\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statusRecordedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priceRecordedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductCategory\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subCategories\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductSubCategory\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notification\",\"relationName\":\"notifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delegate_aux_Product_notifications_PriceChangeNotif_0\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PriceChangeNotification\",\"relationName\":\"notifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delegate_aux_Product_notifications_StatusChangeNoti_0\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusChangeNotification\",\"relationName\":\"notifications\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Notification\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"updatedById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"createdNotifications\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"updatedNotifications\",\"relationFromFields\":[\"updatedById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"notifications\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"notifications\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contentType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NotificationContentType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"productId\",\"userId\",\"contentType\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"productId\",\"userId\",\"contentType\"]}],\"isGenerated\":false,\"documentation\":\"@@delegate(contentType)\"},\"PriceChangeNotification\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"updatedById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"createdNotifications\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"updatedNotifications\",\"relationFromFields\":[\"updatedById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"notifications\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"notifications\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contentType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NotificationContentType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"events\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PriceChangeEventType\",\"default\":[\"PriceIncrease\",\"PriceDecrease\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StatusChangeNotificationEvent\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fromStatus\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"toStatus\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notification\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusChangeNotification\",\"relationName\":\"events\",\"relationFromFields\":[\"notificationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notificationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StatusChangeNotification\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"updatedById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"createdNotifications\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"updatedNotifications\",\"relationFromFields\":[\"updatedById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"notifications\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"notifications\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contentType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NotificationContentType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"events\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusChangeNotificationEvent\",\"relationName\":\"events\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"ElementAttribute\":{\"values\":[{\"name\":\"HREF\",\"dbName\":null},{\"name\":\"SRC\",\"dbName\":null},{\"name\":\"VALUE\",\"dbName\":null},{\"name\":\"DATA_GA_PRODUCT_NAME\",\"dbName\":null}],\"dbName\":null},\"ScrapingErrorCode\":{\"values\":[{\"name\":\"MISSING_ATTRIBUTE\",\"dbName\":null},{\"name\":\"INVALID_ATTRIBUTE\",\"dbName\":null},{\"name\":\"MISSING_TEXT\",\"dbName\":null},{\"name\":\"INVALID_TEXT\",\"dbName\":null},{\"name\":\"NONUNIQUE_TEXT\",\"dbName\":null},{\"name\":\"MISSING_ELEMENT\",\"dbName\":null},{\"name\":\"NONUNIQUE_ELEMENT\",\"dbName\":null},{\"name\":\"HTTP_NETWORK\",\"dbName\":null},{\"name\":\"HTTP_CLIENT\",\"dbName\":null},{\"name\":\"HTTP_SERIALIZATION\",\"dbName\":null}],\"dbName\":null},\"ProductRecordDataField\":{\"values\":[{\"name\":\"PRICE\",\"dbName\":null},{\"name\":\"RAW_PRICE\",\"dbName\":null},{\"name\":\"STATUS\",\"dbName\":null}],\"dbName\":null},\"ProductStatus\":{\"values\":[{\"name\":\"OutOfStock\",\"dbName\":null},{\"name\":\"InStock\",\"dbName\":null},{\"name\":\"AvailableForBackorder\",\"dbName\":null},{\"name\":\"NotListed\",\"dbName\":null}],\"dbName\":null},\"ProductCategory\":{\"values\":[{\"name\":\"HandTools\",\"dbName\":null}],\"dbName\":null},\"ProductSubCategory\":{\"values\":[{\"name\":\"HandPlanes\",\"dbName\":null},{\"name\":\"Saws\",\"dbName\":null},{\"name\":\"Chisels\",\"dbName\":null},{\"name\":\"Spokeshaves\",\"dbName\":null},{\"name\":\"GreenWoodworking\",\"dbName\":null},{\"name\":\"AccessoryTools\",\"dbName\":null}],\"dbName\":null},\"PriceChangeEventType\":{\"values\":[{\"name\":\"PriceIncrease\",\"dbName\":null},{\"name\":\"PriceDecrease\",\"dbName\":null}],\"dbName\":null},\"NotificationContentType\":{\"values\":[{\"name\":\"PriceChangeNotification\",\"dbName\":null},{\"name\":\"StatusChangeNotification\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
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

