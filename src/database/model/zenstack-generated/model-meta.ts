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
                }, createdSubscriptions: {
                    name: "createdSubscriptions",
                    type: "ProductSubscription",
                    isDataModel: true,
                    isArray: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "createdSubscriptions" }] }],
                    backLink: 'createdBy',
                }, updatedSubscriptions: {
                    name: "updatedSubscriptions",
                    type: "ProductSubscription",
                    isDataModel: true,
                    isArray: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "updatedSubscriptions" }] }],
                    backLink: 'updatedBy',
                }, subscriptions: {
                    name: "subscriptions",
                    type: "ProductSubscription",
                    isDataModel: true,
                    isArray: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "subscriptions" }] }],
                    backLink: 'user',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, clerkId: {
                    name: "clerkId",
                    fields: ["clerkId"]
                },
            }
            ,
        }
        ,
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
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
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
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
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
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
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
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
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
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
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
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
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
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
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
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
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
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
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
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
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
            }
            , uniqueConstraints: {
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
            }
            ,
        }
        ,
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
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, createdById: {
                    name: "createdById",
                    type: "String",
                    attributes: [{ "name": "@db.Uuid", "args": [] }],
                    isForeignKey: true,
                    relationField: 'createdBy',
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
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
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
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, createdById: {
                    name: "createdById",
                    type: "String",
                    attributes: [{ "name": "@db.Uuid", "args": [] }],
                    isForeignKey: true,
                    relationField: 'createdBy',
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
                }, subscriptions: {
                    name: "subscriptions",
                    type: "ProductSubscription",
                    isDataModel: true,
                    isArray: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "subscriptions" }] }],
                    backLink: 'product',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, slug: {
                    name: "slug",
                    fields: ["slug"]
                },
            }
            ,
        }
        ,
        priceChangeSubscribedEvent: {
            name: 'PriceChangeSubscribedEvent', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }, { "name": "@db.Uuid", "args": [] }],
                }, enabled: {
                    name: "enabled",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": true }] }],
                }, subscriptionId: {
                    name: "subscriptionId",
                    type: "String",
                    attributes: [{ "name": "@db.Uuid", "args": [] }, { "name": "@unique", "args": [] }],
                    isForeignKey: true,
                    relationField: 'subscription',
                }, subscription: {
                    name: "subscription",
                    type: "ProductSubscription",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [] }],
                    backLink: 'priceChange',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "subscriptionId" },
                }, conditions: {
                    name: "conditions",
                    type: "PriceChangeEventCondition",
                    isArray: true,
                    attributes: [{ "name": "@default", "args": [] }],
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, subscriptionId: {
                    name: "subscriptionId",
                    fields: ["subscriptionId"]
                },
            }
            ,
        }
        ,
        statusChangeEventCondition: {
            name: 'StatusChangeEventCondition', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }, { "name": "@db.Uuid", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, fromStatus: {
                    name: "fromStatus",
                    type: "ProductStatus",
                    isArray: true,
                }, toStatus: {
                    name: "toStatus",
                    type: "ProductStatus",
                    isArray: true,
                }, subscribedEvent: {
                    name: "subscribedEvent",
                    type: "StatusChangeSubscribedEvent",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "conditions" }] }],
                    backLink: 'conditions',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "subscribedEventId" },
                }, subscribedEventId: {
                    name: "subscribedEventId",
                    type: "String",
                    attributes: [{ "name": "@db.Uuid", "args": [] }],
                    isForeignKey: true,
                    relationField: 'subscribedEvent',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        statusChangeSubscribedEvent: {
            name: 'StatusChangeSubscribedEvent', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }, { "name": "@db.Uuid", "args": [] }],
                }, enabled: {
                    name: "enabled",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": true }] }],
                }, subscriptionId: {
                    name: "subscriptionId",
                    type: "String",
                    attributes: [{ "name": "@db.Uuid", "args": [] }, { "name": "@unique", "args": [] }],
                    isForeignKey: true,
                    relationField: 'subscription',
                }, subscription: {
                    name: "subscription",
                    type: "ProductSubscription",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [] }],
                    backLink: 'statusChange',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "subscriptionId" },
                }, conditions: {
                    name: "conditions",
                    type: "StatusChangeEventCondition",
                    isDataModel: true,
                    isArray: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "conditions" }] }],
                    backLink: 'subscribedEvent',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, subscriptionId: {
                    name: "subscriptionId",
                    fields: ["subscriptionId"]
                },
            }
            ,
        }
        ,
        productSubscription: {
            name: 'ProductSubscription', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }, { "name": "@db.Uuid", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, createdById: {
                    name: "createdById",
                    type: "String",
                    attributes: [{ "name": "@db.Uuid", "args": [] }],
                    isForeignKey: true,
                    relationField: 'createdBy',
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
                    attributes: [{ "name": "@relation", "args": [{ "value": "createdSubscriptions" }] }],
                    backLink: 'createdSubscriptions',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "createdById" },
                }, updatedBy: {
                    name: "updatedBy",
                    type: "User",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "updatedSubscriptions" }] }],
                    backLink: 'updatedSubscriptions',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "updatedById" },
                }, product: {
                    name: "product",
                    type: "Product",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "subscriptions" }] }],
                    backLink: 'subscriptions',
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
                    attributes: [{ "name": "@relation", "args": [{ "value": "subscriptions" }] }],
                    backLink: 'subscriptions',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
                }, userId: {
                    name: "userId",
                    type: "String",
                    attributes: [{ "name": "@db.Uuid", "args": [] }],
                    isForeignKey: true,
                    relationField: 'user',
                }, enabled: {
                    name: "enabled",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": true }] }],
                }, statusChange: {
                    name: "statusChange",
                    type: "StatusChangeSubscribedEvent",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'subscription',
                }, priceChange: {
                    name: "priceChange",
                    type: "PriceChangeSubscribedEvent",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'subscription',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, productId_userId: {
                    name: "productId_userId",
                    fields: ["productId", "userId"]
                },
            }
            ,
            attributes: [{ "name": "@@unique", "args": [] }],
        }
        ,
    }
    ,
    deleteCascade: {
    }
    ,
    authModel: 'User'
};
export default metadata;
