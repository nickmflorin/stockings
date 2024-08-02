
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
  timestamp: 'timestamp',
  createdById: 'createdById',
  updatedById: 'updatedById',
  updatedAt: 'updatedAt',
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
  imageSrc: 'imageSrc'
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

exports.ProductRecordStatus = exports.$Enums.ProductRecordStatus = {
  OUT_OF_STOCK: 'OUT_OF_STOCK',
  IN_STOCK: 'IN_STOCK',
  AVAILABLE_FOR_BACKORDER: 'AVAILABLE_FOR_BACKORDER',
  NOT_LISTED: 'NOT_LISTED'
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
  Product: 'Product'
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
      "value": "/Users/nickflorin/repos/stockings/src/prisma/model/generated",
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
    "sourceFilePath": "/Users/nickflorin/repos/stockings/src/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../../.env",
    "schemaEnvPath": "../../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.8.0",
  "engineVersion": "393aa359c9ad4a4bb28630fb5613f9c281cde053",
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
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgcHJldmlld0ZlYXR1cmVzID0gW10KICBvdXRwdXQgICAgICAgICAgPSAiLi9tb2RlbC9nZW5lcmF0ZWQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyICA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgICA9IGVudigiUE9TVEdSRVNfUFJJU01BX1VSTCIpIC8vIFVzZXMgQ29ubmVjdGlvbiBQb29saW5nCiAgZGlyZWN0VXJsID0gZW52KCJQT1NUR1JFU19VUkxfTk9OX1BPT0xJTkciKSAvLyBVc2VzIGEgRGlyZWN0IENvbm5lY3Rpb24KfQoKbW9kZWwgVXNlciB7CiAgaWQgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZAogIGNsZXJrSWQgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgQHVuaXF1ZQogIGZpcnN0TmFtZSAgICAgICAgICAgICBTdHJpbmcKICBsYXN0TmFtZSAgICAgICAgICAgICAgU3RyaW5nCiAgcHJvZmlsZUltYWdlVXJsICAgICAgIFN0cmluZz8KICBlbWFpbEFkZHJlc3MgICAgICAgICAgU3RyaW5nCiAgY3JlYXRlZEF0ICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkQXQgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgIEB1cGRhdGVkQXQKICBjcmVhdGVkUHJvZHVjdHMgICAgICAgUHJvZHVjdFtdICAgICAgIEByZWxhdGlvbigiY3JlYXRlZFByb2R1Y3RzIikKICB1cGRhdGVkUHJvZHVjdHMgICAgICAgUHJvZHVjdFtdICAgICAgIEByZWxhdGlvbigidXBkYXRlZFByb2R1Y3RzIikKICBjcmVhdGVkUHJvZHVjdFJlY29yZHMgUHJvZHVjdFJlY29yZFtdIEByZWxhdGlvbigiY3JlYXRlZFByb2R1Y3RSZWNvcmRzIikKICB1cGRhdGVkUHJvZHVjdFJlY29yZHMgUHJvZHVjdFJlY29yZFtdIEByZWxhdGlvbigidXBkYXRlZFByb2R1Y3RSZWNvcmRzIikKfQoKZW51bSBFbGVtZW50QXR0cmlidXRlIHsKICBIUkVGCiAgU1JDCiAgVkFMVUUKICBEQVRBX0dBX1BST0RVQ1RfTkFNRQp9CgplbnVtIFNjcmFwaW5nRXJyb3JDb2RlIHsKICBNSVNTSU5HX0FUVFJJQlVURQogIElOVkFMSURfQVRUUklCVVRFCiAgTUlTU0lOR19URVhUCiAgSU5WQUxJRF9URVhUCiAgTk9OVU5JUVVFX1RFWFQKICBNSVNTSU5HX0VMRU1FTlQKICBOT05VTklRVUVfRUxFTUVOVAogIEhUVFBfTkVUV09SSwogIEhUVFBfQ0xJRU5UCiAgSFRUUF9TRVJJQUxJWkFUSU9OCn0KCmVudW0gUHJvZHVjdFJlY29yZERhdGFGaWVsZCB7CiAgUFJJQ0UKICBSQVdfUFJJQ0UKICBTVEFUVVMKfQoKbW9kZWwgSHR0cE5ldHdvcmtFcnJvckRhdGEgewogIGlkICBTdHJpbmcgQGlkIEBkZWZhdWx0KHV1aWQoKSkgQGRiLlV1aWQKICB1cmwgU3RyaW5nCn0KCm1vZGVsIEh0dHBTZXJpYWxpemF0aW9uRXJyb3JEYXRhIHsKICBpZCAgU3RyaW5nIEBpZCBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkCiAgdXJsIFN0cmluZwp9Cgptb2RlbCBIdHRwQ2xpZW50RXJyb3JEYXRhIHsKICBpZCAgICAgU3RyaW5nIEBpZCBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkCiAgdXJsICAgIFN0cmluZwogIHN0YXR1cyBJbnQKfQoKbW9kZWwgTWlzc2luZ0F0dHJpYnV0ZUVycm9yRGF0YSB7CiAgaWQgICAgICAgICBTdHJpbmcgICAgICAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkCiAgYXR0cmlidXRlICBFbGVtZW50QXR0cmlidXRlCiAgcGFyZW50SHRtbCBTdHJpbmc/Cn0KCm1vZGVsIEludmFsaWRBdHRyaWJ1dGVFcnJvckRhdGEgewogIGlkICAgICAgICAgU3RyaW5nICAgICAgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZAogIGF0dHJpYnV0ZSAgRWxlbWVudEF0dHJpYnV0ZQogIHBhcmVudEh0bWwgU3RyaW5nPwogIHZhbHVlICAgICAgU3RyaW5nCn0KCm1vZGVsIEludmFsaWRUZXh0RXJyb3JEYXRhIHsKICBpZCAgICAgICAgIFN0cmluZyAgQGlkIEBkZWZhdWx0KHV1aWQoKSkgQGRiLlV1aWQKICBwYXJlbnRIdG1sIFN0cmluZz8KICB2YWx1ZSAgICAgIFN0cmluZwp9Cgptb2RlbCBNaXNzaW5nVGV4dEVycm9yRGF0YSB7CiAgaWQgICAgICAgICBTdHJpbmcgIEBpZCBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkCiAgcGFyZW50SHRtbCBTdHJpbmc/Cn0KCm1vZGVsIE5vblVuaXF1ZVRleHRFcnJvckRhdGEgewogIGlkICAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZAogIHBhcmVudEh0bWwgU3RyaW5nPwp9Cgptb2RlbCBNaXNzaW5nRWxlbWVudEVycm9yRGF0YSB7CiAgaWQgICAgICAgICBTdHJpbmcgIEBpZCBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkCiAgcGFyZW50SHRtbCBTdHJpbmc/CiAgc2VsZWN0b3IgICBTdHJpbmcKfQoKbW9kZWwgTm9uVW5pcXVlRWxlbWVudEVycm9yRGF0YSB7CiAgaWQgICAgICAgICBTdHJpbmcgIEBpZCBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkCiAgcGFyZW50SHRtbCBTdHJpbmc/CiAgc2VsZWN0b3IgICBTdHJpbmcKfQoKbW9kZWwgUHJvZHVjdFJlY29yZEVycm9yIHsKICBpZCAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZAogIGVycm9ySWQgICBTdHJpbmcgICAgICAgICAgICAgICAgIEB1bmlxdWUgQGRiLlV1aWQKICBlcnJvckNvZGUgU2NyYXBpbmdFcnJvckNvZGUKICByZWNvcmQgICAgUHJvZHVjdFJlY29yZCAgICAgICAgICBAcmVsYXRpb24oImVycm9ycyIsIGZpZWxkczogW3JlY29yZElkXSwgcmVmZXJlbmNlczogW2lkXSkKICByZWNvcmRJZCAgU3RyaW5nICAgICAgICAgICAgICAgICBAdW5pcXVlIEBkYi5VdWlkCiAgZmllbGQgICAgIFByb2R1Y3RSZWNvcmREYXRhRmllbGQKICBtZXNzYWdlICAgU3RyaW5nCn0KCmVudW0gUHJvZHVjdFJlY29yZFN0YXR1cyB7CiAgT1VUX09GX1NUT0NLCiAgSU5fU1RPQ0sKICBBVkFJTEFCTEVfRk9SX0JBQ0tPUkRFUgogIE5PVF9MSVNURUQKfQoKbW9kZWwgUHJvZHVjdFJlY29yZCB7CiAgaWQgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZAogIHRpbWVzdGFtcCAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgY3JlYXRlZEJ5ICAgICAgICAgICAgIFVzZXIgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oImNyZWF0ZWRQcm9kdWN0UmVjb3JkcyIsIGZpZWxkczogW2NyZWF0ZWRCeUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBjcmVhdGVkQnlJZCAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgIEBkYi5VdWlkCiAgdXBkYXRlZEJ5ICAgICAgICAgICAgIFVzZXIgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oInVwZGF0ZWRQcm9kdWN0UmVjb3JkcyIsIGZpZWxkczogW3VwZGF0ZWRCeUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICB1cGRhdGVkQnlJZCAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgIEBkYi5VdWlkCiAgdXBkYXRlZEF0ICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICAgICBAdXBkYXRlZEF0CiAgcHJvZHVjdCAgICAgICAgICAgICAgIFByb2R1Y3QgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oInJlY29yZHMiLCBmaWVsZHM6IFtwcm9kdWN0SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHByb2R1Y3RJZCAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgQGRiLlV1aWQKICBwcmljZSAgICAgICAgICAgICAgICAgRmxvYXQ/CiAgcmF3UHJpY2UgICAgICAgICAgICAgIFN0cmluZz8KICBzdGF0dXMgICAgICAgICAgICAgICAgUHJvZHVjdFJlY29yZFN0YXR1cz8KICB3YXNNYW51YWxseUNyZWF0ZWQgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIG1hbnVhbGx5Q2hhbmdlZEZpZWxkcyBQcm9kdWN0UmVjb3JkRGF0YUZpZWxkW10gQGRlZmF1bHQoW10pCiAgZXJyb3JzICAgICAgICAgICAgICAgIFByb2R1Y3RSZWNvcmRFcnJvcltdICAgICBAcmVsYXRpb24oImVycm9ycyIpCn0KCm1vZGVsIFByb2R1Y3QgewogIGlkICAgICAgICAgIFN0cmluZyAgICAgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZAogIGNyZWF0ZWRBdCAgIERhdGVUaW1lICAgICAgICBAZGVmYXVsdChub3coKSkKICBjcmVhdGVkQnkgICBVc2VyICAgICAgICAgICAgQHJlbGF0aW9uKCJjcmVhdGVkUHJvZHVjdHMiLCBmaWVsZHM6IFtjcmVhdGVkQnlJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgY3JlYXRlZEJ5SWQgU3RyaW5nICAgICAgICAgIEBkYi5VdWlkCiAgdXBkYXRlZEF0ICAgRGF0ZVRpbWUgICAgICAgIEB1cGRhdGVkQXQKICB1cGRhdGVkQnkgICBVc2VyICAgICAgICAgICAgQHJlbGF0aW9uKCJ1cGRhdGVkUHJvZHVjdHMiLCBmaWVsZHM6IFt1cGRhdGVkQnlJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgdXBkYXRlZEJ5SWQgU3RyaW5nICAgICAgICAgIEBkYi5VdWlkCiAgbmFtZSAgICAgICAgU3RyaW5nPwogIHNsdWcgICAgICAgIFN0cmluZyAgICAgICAgICBAdW5pcXVlCiAgY29kZSAgICAgICAgU3RyaW5nPwogIGltYWdlU3JjICAgIFN0cmluZz8KICByZWNvcmRzICAgICBQcm9kdWN0UmVjb3JkW10gQHJlbGF0aW9uKCJyZWNvcmRzIikKfQo=",
  "inlineSchemaHash": "aa8de6ef5e739cbb15875e874300acf6e8a7b8c44b9b72915a12dffdafc4f7a0"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clerkId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profileImageUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"createdProducts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"createdProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedProducts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"updatedProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdProductRecords\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecord\",\"relationName\":\"createdProductRecords\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedProductRecords\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecord\",\"relationName\":\"updatedProductRecords\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HttpNetworkErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HttpSerializationErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HttpClientErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MissingAttributeErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attribute\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ElementAttribute\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InvalidAttributeErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attribute\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ElementAttribute\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InvalidTextErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MissingTextErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"NonUniqueTextErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MissingElementErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"selector\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"NonUniqueElementErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"selector\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductRecordError\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"errorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"errorCode\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ScrapingErrorCode\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"record\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecord\",\"relationName\":\"errors\",\"relationFromFields\":[\"recordId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recordId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"field\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecordDataField\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductRecord\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"createdProductRecords\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"updatedProductRecords\",\"relationFromFields\":[\"updatedById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"records\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rawPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecordStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wasManuallyCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manuallyChangedFields\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ProductRecordDataField\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"errors\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecordError\",\"relationName\":\"errors\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Product\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"createdProducts\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"updatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"updatedProducts\",\"relationFromFields\":[\"updatedById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imageSrc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"records\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecord\",\"relationName\":\"records\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"ElementAttribute\":{\"values\":[{\"name\":\"HREF\",\"dbName\":null},{\"name\":\"SRC\",\"dbName\":null},{\"name\":\"VALUE\",\"dbName\":null},{\"name\":\"DATA_GA_PRODUCT_NAME\",\"dbName\":null}],\"dbName\":null},\"ScrapingErrorCode\":{\"values\":[{\"name\":\"MISSING_ATTRIBUTE\",\"dbName\":null},{\"name\":\"INVALID_ATTRIBUTE\",\"dbName\":null},{\"name\":\"MISSING_TEXT\",\"dbName\":null},{\"name\":\"INVALID_TEXT\",\"dbName\":null},{\"name\":\"NONUNIQUE_TEXT\",\"dbName\":null},{\"name\":\"MISSING_ELEMENT\",\"dbName\":null},{\"name\":\"NONUNIQUE_ELEMENT\",\"dbName\":null},{\"name\":\"HTTP_NETWORK\",\"dbName\":null},{\"name\":\"HTTP_CLIENT\",\"dbName\":null},{\"name\":\"HTTP_SERIALIZATION\",\"dbName\":null}],\"dbName\":null},\"ProductRecordDataField\":{\"values\":[{\"name\":\"PRICE\",\"dbName\":null},{\"name\":\"RAW_PRICE\",\"dbName\":null},{\"name\":\"STATUS\",\"dbName\":null}],\"dbName\":null},\"ProductRecordStatus\":{\"values\":[{\"name\":\"OUT_OF_STOCK\",\"dbName\":null},{\"name\":\"IN_STOCK\",\"dbName\":null},{\"name\":\"AVAILABLE_FOR_BACKORDER\",\"dbName\":null},{\"name\":\"NOT_LISTED\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
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

