"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
const metadata = {
    models: {
        user: {
            name: 'User', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }, { "name": "@db.Uuid", "args": [] }],
                }, clerkId: {
                    name: "clerkId",
                    type: "String",
                    attributes: [{ "name": "@unique", "args": [] }],
                }, firstName: {
                    name: "firstName",
                    type: "String",
                }, lastName: {
                    name: "lastName",
                    type: "String",
                }, profileImageUrl: {
                    name: "profileImageUrl",
                    type: "String",
                    isOptional: true,
                }, emailAddress: {
                    name: "emailAddress",
                    type: "String",
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, createdProducts: {
                    name: "createdProducts",
                    type: "Product",
                    isDataModel: true,
                    isArray: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "createdProducts" }] }],
                    backLink: 'createdBy',
                }, updatedProducts: {
                    name: "updatedProducts",
                    type: "Product",
                    isDataModel: true,
                    isArray: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "updatedProducts" }] }],
                    backLink: 'updatedBy',
                }, createdProductRecords: {
                    name: "createdProductRecords",
                    type: "ProductRecord",
                    isDataModel: true,
                    isArray: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "createdProductRecords" }] }],
                    backLink: 'createdBy',
                }, updatedProductRecords: {
                    name: "updatedProductRecords",
                    type: "ProductRecord",
                    isDataModel: true,
                    isArray: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "updatedProductRecords" }] }],
                    backLink: 'updatedBy',
                }, createdNotificationEvents: {
                    name: "createdNotificationEvents",
                    type: "NotificationEvent",
                    isDataModel: true,
                    isArray: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "createdNotificationEvents" }] }],
                    backLink: 'createdBy',
                }, updatedNotificationEvents: {
                    name: "updatedNotificationEvents",
                    type: "NotificationEvent",
                    isDataModel: true,
                    isArray: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "updatedNotificationEvents" }] }],
                    backLink: 'updatedBy',
                }, notificationEvents: {
                    name: "notificationEvents",
                    type: "NotificationEvent",
                    isDataModel: true,
                    isArray: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "notificationEvents" }] }],
                    backLink: 'user',
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, clerkId: {
                    name: "clerkId",
                    fields: ["clerkId"]
                },
            },
        },
        httpNetworkErrorData: {
            name: 'HttpNetworkErrorData', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }, { "name": "@db.Uuid", "args": [] }],
                }, url: {
                    name: "url",
                    type: "String",
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
        },
        httpSerializationErrorData: {
            name: 'HttpSerializationErrorData', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }, { "name": "@db.Uuid", "args": [] }],
                }, url: {
                    name: "url",
                    type: "String",
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
        },
        httpClientErrorData: {
            name: 'HttpClientErrorData', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }, { "name": "@db.Uuid", "args": [] }],
                }, url: {
                    name: "url",
                    type: "String",
                }, status: {
                    name: "status",
                    type: "Int",
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
        },
        missingAttributeErrorData: {
            name: 'MissingAttributeErrorData', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }, { "name": "@db.Uuid", "args": [] }],
                }, attribute: {
                    name: "attribute",
                    type: "ElementAttribute",
                }, parentHtml: {
                    name: "parentHtml",
                    type: "String",
                    isOptional: true,
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
        },
        invalidAttributeErrorData: {
            name: 'InvalidAttributeErrorData', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }, { "name": "@db.Uuid", "args": [] }],
                }, attribute: {
                    name: "attribute",
                    type: "ElementAttribute",
                }, parentHtml: {
                    name: "parentHtml",
                    type: "String",
                    isOptional: true,
                }, value: {
                    name: "value",
                    type: "String",
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
        },
        invalidTextErrorData: {
            name: 'InvalidTextErrorData', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }, { "name": "@db.Uuid", "args": [] }],
                }, parentHtml: {
                    name: "parentHtml",
                    type: "String",
                    isOptional: true,
                }, value: {
                    name: "value",
                    type: "String",
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
        },
        missingTextErrorData: {
            name: 'MissingTextErrorData', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }, { "name": "@db.Uuid", "args": [] }],
                }, parentHtml: {
                    name: "parentHtml",
                    type: "String",
                    isOptional: true,
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
        },
        nonUniqueTextErrorData: {
            name: 'NonUniqueTextErrorData', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }, { "name": "@db.Uuid", "args": [] }],
                }, parentHtml: {
                    name: "parentHtml",
                    type: "String",
                    isOptional: true,
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
        },
        missingElementErrorData: {
            name: 'MissingElementErrorData', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }, { "name": "@db.Uuid", "args": [] }],
                }, parentHtml: {
                    name: "parentHtml",
                    type: "String",
                    isOptional: true,
                }, selector: {
                    name: "selector",
                    type: "String",
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
        },
        nonUniqueElementErrorData: {
            name: 'NonUniqueElementErrorData', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }, { "name": "@db.Uuid", "args": [] }],
                }, parentHtml: {
                    name: "parentHtml",
                    type: "String",
                    isOptional: true,
                }, selector: {
                    name: "selector",
                    type: "String",
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
        },
        productRecordError: {
            name: 'ProductRecordError', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }, { "name": "@db.Uuid", "args": [] }],
                }, errorId: {
                    name: "errorId",
                    type: "String",
                    attributes: [{ "name": "@unique", "args": [] }, { "name": "@db.Uuid", "args": [] }],
                }, errorCode: {
                    name: "errorCode",
                    type: "ScrapingErrorCode",
                }, record: {
                    name: "record",
                    type: "ProductRecord",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "errors" }] }],
                    backLink: 'errors',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "recordId" },
                }, recordId: {
                    name: "recordId",
                    type: "String",
                    attributes: [{ "name": "@unique", "args": [] }, { "name": "@db.Uuid", "args": [] }],
                    isForeignKey: true,
                    relationField: 'record',
                }, field: {
                    name: "field",
                    type: "ProductRecordDataField",
                }, message: {
                    name: "message",
                    type: "String",
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, errorId: {
                    name: "errorId",
                    fields: ["errorId"]
                }, recordId: {
                    name: "recordId",
                    fields: ["recordId"]
                },
            },
        },
        productRecord: {
            name: 'ProductRecord', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }, { "name": "@db.Uuid", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdById: {
                    name: "createdById",
                    type: "String",
                    attributes: [{ "name": "@db.Uuid", "args": [] }],
                    isForeignKey: true,
                    relationField: 'createdBy',
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, updatedById: {
                    name: "updatedById",
                    type: "String",
                    attributes: [{ "name": "@db.Uuid", "args": [] }],
                    isForeignKey: true,
                    relationField: 'updatedBy',
                }, timestamp: {
                    name: "timestamp",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdBy: {
                    name: "createdBy",
                    type: "User",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "createdProductRecords" }] }],
                    backLink: 'createdProductRecords',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "createdById" },
                }, updatedBy: {
                    name: "updatedBy",
                    type: "User",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "updatedProductRecords" }] }],
                    backLink: 'updatedProductRecords',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "updatedById" },
                }, product: {
                    name: "product",
                    type: "Product",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "records" }] }],
                    backLink: 'records',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "productId" },
                }, productId: {
                    name: "productId",
                    type: "String",
                    attributes: [{ "name": "@db.Uuid", "args": [] }],
                    isForeignKey: true,
                    relationField: 'product',
                }, price: {
                    name: "price",
                    type: "Float",
                    isOptional: true,
                }, rawPrice: {
                    name: "rawPrice",
                    type: "String",
                    isOptional: true,
                }, status: {
                    name: "status",
                    type: "ProductStatus",
                    isOptional: true,
                }, wasManuallyCreated: {
                    name: "wasManuallyCreated",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, manuallyChangedFields: {
                    name: "manuallyChangedFields",
                    type: "ProductRecordDataField",
                    isArray: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, errors: {
                    name: "errors",
                    type: "ProductRecordError",
                    isDataModel: true,
                    isArray: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "errors" }] }],
                    backLink: 'record',
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
        },
        product: {
            name: 'Product', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }, { "name": "@db.Uuid", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdById: {
                    name: "createdById",
                    type: "String",
                    attributes: [{ "name": "@db.Uuid", "args": [] }],
                    isForeignKey: true,
                    relationField: 'createdBy',
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, updatedById: {
                    name: "updatedById",
                    type: "String",
                    attributes: [{ "name": "@db.Uuid", "args": [] }],
                    isForeignKey: true,
                    relationField: 'updatedBy',
                }, createdBy: {
                    name: "createdBy",
                    type: "User",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "createdProducts" }] }],
                    backLink: 'createdProducts',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "createdById" },
                }, updatedBy: {
                    name: "updatedBy",
                    type: "User",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "updatedProducts" }] }],
                    backLink: 'updatedProducts',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "updatedById" },
                }, name: {
                    name: "name",
                    type: "String",
                    isOptional: true,
                }, slug: {
                    name: "slug",
                    type: "String",
                    attributes: [{ "name": "@unique", "args": [] }],
                }, code: {
                    name: "code",
                    type: "String",
                    isOptional: true,
                }, imageSrc: {
                    name: "imageSrc",
                    type: "String",
                    isOptional: true,
                }, records: {
                    name: "records",
                    type: "ProductRecord",
                    isDataModel: true,
                    isArray: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "records" }] }],
                    backLink: 'product',
                }, status: {
                    name: "status",
                    type: "ProductStatus",
                    isOptional: true,
                }, statusRecordedAt: {
                    name: "statusRecordedAt",
                    type: "DateTime",
                    isOptional: true,
                }, price: {
                    name: "price",
                    type: "Float",
                    isOptional: true,
                }, priceRecordedAt: {
                    name: "priceRecordedAt",
                    type: "DateTime",
                    isOptional: true,
                }, category: {
                    name: "category",
                    type: "ProductCategory",
                }, subCategories: {
                    name: "subCategories",
                    type: "ProductSubCategory",
                    isArray: true,
                }, notificationEvents: {
                    name: "notificationEvents",
                    type: "NotificationEvent",
                    isDataModel: true,
                    isArray: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "notificationEvents" }] }],
                    backLink: 'product',
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, slug: {
                    name: "slug",
                    fields: ["slug"]
                },
            },
        },
        notificationEvent: {
            name: 'NotificationEvent', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }, { "name": "@db.Uuid", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdById: {
                    name: "createdById",
                    type: "String",
                    attributes: [{ "name": "@db.Uuid", "args": [] }],
                    isForeignKey: true,
                    relationField: 'createdBy',
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, updatedById: {
                    name: "updatedById",
                    type: "String",
                    attributes: [{ "name": "@db.Uuid", "args": [] }],
                    isForeignKey: true,
                    relationField: 'updatedBy',
                }, createdBy: {
                    name: "createdBy",
                    type: "User",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "createdNotificationEvents" }] }],
                    backLink: 'createdNotificationEvents',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "createdById" },
                }, updatedBy: {
                    name: "updatedBy",
                    type: "User",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "updatedNotificationEvents" }] }],
                    backLink: 'updatedNotificationEvents',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "updatedById" },
                }, product: {
                    name: "product",
                    type: "Product",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "notificationEvents" }] }],
                    backLink: 'notificationEvents',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "productId" },
                }, productId: {
                    name: "productId",
                    type: "String",
                    attributes: [{ "name": "@db.Uuid", "args": [] }],
                    isForeignKey: true,
                    relationField: 'product',
                }, user: {
                    name: "user",
                    type: "User",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "notificationEvents" }] }],
                    backLink: 'notificationEvents',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
                }, userId: {
                    name: "userId",
                    type: "String",
                    attributes: [{ "name": "@db.Uuid", "args": [] }],
                    isForeignKey: true,
                    relationField: 'user',
                }, contentType: {
                    name: "contentType",
                    type: "NotificationEventContentType",
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
            attributes: [{ "name": "@@delegate", "args": [] }], discriminator: "contentType",
        },
        priceChangeEventC: {
            name: 'PriceChangeEventC', baseTypes: ['NotificationEvent'], fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }, { "name": "@db.Uuid", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                    inheritedFrom: "NotificationEvent",
                }, createdById: {
                    name: "createdById",
                    type: "String",
                    attributes: [{ "name": "@db.Uuid", "args": [] }],
                    isForeignKey: true,
                    relationField: 'createdBy',
                    inheritedFrom: "NotificationEvent",
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                    inheritedFrom: "NotificationEvent",
                }, updatedById: {
                    name: "updatedById",
                    type: "String",
                    attributes: [{ "name": "@db.Uuid", "args": [] }],
                    isForeignKey: true,
                    relationField: 'updatedBy',
                    inheritedFrom: "NotificationEvent",
                }, createdBy: {
                    name: "createdBy",
                    type: "User",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "createdNotificationEvents" }] }],
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "createdById" },
                    inheritedFrom: "NotificationEvent",
                }, updatedBy: {
                    name: "updatedBy",
                    type: "User",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "updatedNotificationEvents" }] }],
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "updatedById" },
                    inheritedFrom: "NotificationEvent",
                }, product: {
                    name: "product",
                    type: "Product",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "notificationEvents" }] }],
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "productId" },
                    inheritedFrom: "NotificationEvent",
                }, productId: {
                    name: "productId",
                    type: "String",
                    attributes: [{ "name": "@db.Uuid", "args": [] }],
                    isForeignKey: true,
                    relationField: 'product',
                    inheritedFrom: "NotificationEvent",
                }, user: {
                    name: "user",
                    type: "User",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "notificationEvents" }] }],
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
                    inheritedFrom: "NotificationEvent",
                }, userId: {
                    name: "userId",
                    type: "String",
                    attributes: [{ "name": "@db.Uuid", "args": [] }],
                    isForeignKey: true,
                    relationField: 'user',
                    inheritedFrom: "NotificationEvent",
                }, contentType: {
                    name: "contentType",
                    type: "NotificationEventContentType",
                    inheritedFrom: "NotificationEvent",
                }, eventTypes: {
                    name: "eventTypes",
                    type: "PriceChangeEventType",
                    isArray: true,
                    attributes: [{ "name": "@default", "args": [] }],
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
        },
        statusChangeEvent: {
            name: 'StatusChangeEvent', baseTypes: ['NotificationEvent'], fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }, { "name": "@db.Uuid", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                    inheritedFrom: "NotificationEvent",
                }, createdById: {
                    name: "createdById",
                    type: "String",
                    attributes: [{ "name": "@db.Uuid", "args": [] }],
                    isForeignKey: true,
                    relationField: 'createdBy',
                    inheritedFrom: "NotificationEvent",
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                    inheritedFrom: "NotificationEvent",
                }, updatedById: {
                    name: "updatedById",
                    type: "String",
                    attributes: [{ "name": "@db.Uuid", "args": [] }],
                    isForeignKey: true,
                    relationField: 'updatedBy',
                    inheritedFrom: "NotificationEvent",
                }, createdBy: {
                    name: "createdBy",
                    type: "User",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "createdNotificationEvents" }] }],
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "createdById" },
                    inheritedFrom: "NotificationEvent",
                }, updatedBy: {
                    name: "updatedBy",
                    type: "User",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "updatedNotificationEvents" }] }],
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "updatedById" },
                    inheritedFrom: "NotificationEvent",
                }, product: {
                    name: "product",
                    type: "Product",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "notificationEvents" }] }],
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "productId" },
                    inheritedFrom: "NotificationEvent",
                }, productId: {
                    name: "productId",
                    type: "String",
                    attributes: [{ "name": "@db.Uuid", "args": [] }],
                    isForeignKey: true,
                    relationField: 'product',
                    inheritedFrom: "NotificationEvent",
                }, user: {
                    name: "user",
                    type: "User",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "notificationEvents" }] }],
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
                    inheritedFrom: "NotificationEvent",
                }, userId: {
                    name: "userId",
                    type: "String",
                    attributes: [{ "name": "@db.Uuid", "args": [] }],
                    isForeignKey: true,
                    relationField: 'user',
                    inheritedFrom: "NotificationEvent",
                }, contentType: {
                    name: "contentType",
                    type: "NotificationEventContentType",
                    inheritedFrom: "NotificationEvent",
                }, eventTypes: {
                    name: "eventTypes",
                    type: "ProductStatus",
                    isArray: true,
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
        },
    },
    deleteCascade: {},
    authModel: 'User'
};
exports.default = metadata;
