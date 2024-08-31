/* eslint-disable */
const metadata = {
        models: {
            user: {
                name: 'User',fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]},{"name":"@db.Uuid","args":[]}],
                        },clerkId: {
                            name: "clerkId",
                            type: "String",
                            attributes: [{"name":"@unique","args":[]}],
                        },firstName: {
                            name: "firstName",
                            type: "String",
                        },lastName: {
                            name: "lastName",
                            type: "String",
                        },profileImageUrl: {
                            name: "profileImageUrl",
                            type: "String",
                            isOptional: true,
                        },emailAddress: {
                            name: "emailAddress",
                            type: "String",
                        },createdAt: {
                            name: "createdAt",
                            type: "DateTime",
                            attributes: [{"name":"@default","args":[]}],
                        },updatedAt: {
                            name: "updatedAt",
                            type: "DateTime",
                            attributes: [{"name":"@updatedAt","args":[]}],
                        },createdProducts: {
                            name: "createdProducts",
                            type: "Product",
                            isDataModel: true,
                            isArray: true,
                            attributes: [{"name":"@relation","args":[{"value":"createdProducts"}]}],
                            backLink: 'createdBy',
                        },updatedProducts: {
                            name: "updatedProducts",
                            type: "Product",
                            isDataModel: true,
                            isArray: true,
                            attributes: [{"name":"@relation","args":[{"value":"updatedProducts"}]}],
                            backLink: 'updatedBy',
                        },createdProductRecords: {
                            name: "createdProductRecords",
                            type: "ProductRecord",
                            isDataModel: true,
                            isArray: true,
                            attributes: [{"name":"@relation","args":[{"value":"createdProductRecords"}]}],
                            backLink: 'createdBy',
                        },updatedProductRecords: {
                            name: "updatedProductRecords",
                            type: "ProductRecord",
                            isDataModel: true,
                            isArray: true,
                            attributes: [{"name":"@relation","args":[{"value":"updatedProductRecords"}]}],
                            backLink: 'updatedBy',
                        },createdProductSubscriptions: {
                            name: "createdProductSubscriptions",
                            type: "ProductSubscription",
                            isDataModel: true,
                            isArray: true,
                            attributes: [{"name":"@relation","args":[{"value":"createdProductSubscriptions"}]}],
                            backLink: 'createdBy',
                        },updatedProductSubscriptions: {
                            name: "updatedProductSubscriptions",
                            type: "ProductSubscription",
                            isDataModel: true,
                            isArray: true,
                            attributes: [{"name":"@relation","args":[{"value":"updatedProductSubscriptions"}]}],
                            backLink: 'updatedBy',
                        },productSubscriptions: {
                            name: "productSubscriptions",
                            type: "ProductSubscription",
                            isDataModel: true,
                            isArray: true,
                            attributes: [{"name":"@relation","args":[{"value":"productSubscriptions"}]}],
                            backLink: 'user',
                        },createdProductNotifications: {
                            name: "createdProductNotifications",
                            type: "ProductNotification",
                            isDataModel: true,
                            isArray: true,
                            attributes: [{"name":"@relation","args":[{"value":"createdProductNotifications"}]}],
                            backLink: 'createdBy',
                        },updatedProductNotifications: {
                            name: "updatedProductNotifications",
                            type: "ProductNotification",
                            isDataModel: true,
                            isArray: true,
                            attributes: [{"name":"@relation","args":[{"value":"updatedProductNotifications"}]}],
                            backLink: 'updatedBy',
                        },notifications: {
                            name: "notifications",
                            type: "ProductNotification",
                            isDataModel: true,
                            isArray: true,
                            attributes: [{"name":"@relation","args":[{"value":"notifications"}]}],
                            backLink: 'user',
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },clerkId: {
                                                    name: "clerkId",
                                                    fields: ["clerkId"]
                                                },
                }
                ,
            }
            ,
            httpNetworkErrorData: {
                name: 'HttpNetworkErrorData',fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]},{"name":"@db.Uuid","args":[]}],
                        },url: {
                            name: "url",
                            type: "String",
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },
                }
                ,
            }
            ,
            httpSerializationErrorData: {
                name: 'HttpSerializationErrorData',fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]},{"name":"@db.Uuid","args":[]}],
                        },url: {
                            name: "url",
                            type: "String",
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },
                }
                ,
            }
            ,
            httpClientErrorData: {
                name: 'HttpClientErrorData',fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]},{"name":"@db.Uuid","args":[]}],
                        },url: {
                            name: "url",
                            type: "String",
                        },status: {
                            name: "status",
                            type: "Int",
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },
                }
                ,
            }
            ,
            missingAttributeErrorData: {
                name: 'MissingAttributeErrorData',fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]},{"name":"@db.Uuid","args":[]}],
                        },attribute: {
                            name: "attribute",
                            type: "ElementAttribute",
                        },parentHtml: {
                            name: "parentHtml",
                            type: "String",
                            isOptional: true,
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },
                }
                ,
            }
            ,
            invalidAttributeErrorData: {
                name: 'InvalidAttributeErrorData',fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]},{"name":"@db.Uuid","args":[]}],
                        },attribute: {
                            name: "attribute",
                            type: "ElementAttribute",
                        },parentHtml: {
                            name: "parentHtml",
                            type: "String",
                            isOptional: true,
                        },value: {
                            name: "value",
                            type: "String",
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },
                }
                ,
            }
            ,
            invalidTextErrorData: {
                name: 'InvalidTextErrorData',fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]},{"name":"@db.Uuid","args":[]}],
                        },parentHtml: {
                            name: "parentHtml",
                            type: "String",
                            isOptional: true,
                        },value: {
                            name: "value",
                            type: "String",
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },
                }
                ,
            }
            ,
            missingTextErrorData: {
                name: 'MissingTextErrorData',fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]},{"name":"@db.Uuid","args":[]}],
                        },parentHtml: {
                            name: "parentHtml",
                            type: "String",
                            isOptional: true,
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },
                }
                ,
            }
            ,
            nonUniqueTextErrorData: {
                name: 'NonUniqueTextErrorData',fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]},{"name":"@db.Uuid","args":[]}],
                        },parentHtml: {
                            name: "parentHtml",
                            type: "String",
                            isOptional: true,
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },
                }
                ,
            }
            ,
            missingElementErrorData: {
                name: 'MissingElementErrorData',fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]},{"name":"@db.Uuid","args":[]}],
                        },parentHtml: {
                            name: "parentHtml",
                            type: "String",
                            isOptional: true,
                        },selector: {
                            name: "selector",
                            type: "String",
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },
                }
                ,
            }
            ,
            nonUniqueElementErrorData: {
                name: 'NonUniqueElementErrorData',fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]},{"name":"@db.Uuid","args":[]}],
                        },parentHtml: {
                            name: "parentHtml",
                            type: "String",
                            isOptional: true,
                        },selector: {
                            name: "selector",
                            type: "String",
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },
                }
                ,
            }
            ,
            productRecordError: {
                name: 'ProductRecordError',fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]},{"name":"@db.Uuid","args":[]}],
                        },errorId: {
                            name: "errorId",
                            type: "String",
                            attributes: [{"name":"@unique","args":[]},{"name":"@db.Uuid","args":[]}],
                        },errorCode: {
                            name: "errorCode",
                            type: "ScrapingErrorCode",
                        },record: {
                            name: "record",
                            type: "ProductRecord",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"errors"}]}],
                            backLink: 'errors',
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"recordId"},
                        },recordId: {
                            name: "recordId",
                            type: "String",
                            attributes: [{"name":"@unique","args":[]},{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'record',
                        },field: {
                            name: "field",
                            type: "ProductRecordDataField",
                        },message: {
                            name: "message",
                            type: "String",
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },errorId: {
                                                    name: "errorId",
                                                    fields: ["errorId"]
                                                },recordId: {
                                                    name: "recordId",
                                                    fields: ["recordId"]
                                                },
                }
                ,
            }
            ,
            productRecord: {
                name: 'ProductRecord',fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]},{"name":"@db.Uuid","args":[]}],
                        },createdAt: {
                            name: "createdAt",
                            type: "DateTime",
                            attributes: [{"name":"@default","args":[]}],
                        },updatedAt: {
                            name: "updatedAt",
                            type: "DateTime",
                            attributes: [{"name":"@updatedAt","args":[]}],
                        },createdById: {
                            name: "createdById",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'createdBy',
                        },updatedById: {
                            name: "updatedById",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'updatedBy',
                        },timestamp: {
                            name: "timestamp",
                            type: "DateTime",
                            attributes: [{"name":"@default","args":[]}],
                        },createdBy: {
                            name: "createdBy",
                            type: "User",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"createdProductRecords"}]}],
                            backLink: 'createdProductRecords',
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"createdById"},
                        },updatedBy: {
                            name: "updatedBy",
                            type: "User",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"updatedProductRecords"}]}],
                            backLink: 'updatedProductRecords',
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"updatedById"},
                        },product: {
                            name: "product",
                            type: "Product",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"records"}]}],
                            backLink: 'records',
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"productId"},
                        },productId: {
                            name: "productId",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'product',
                        },price: {
                            name: "price",
                            type: "Float",
                            isOptional: true,
                        },rawPrice: {
                            name: "rawPrice",
                            type: "String",
                            isOptional: true,
                        },status: {
                            name: "status",
                            type: "ProductStatus",
                            isOptional: true,
                        },wasManuallyCreated: {
                            name: "wasManuallyCreated",
                            type: "Boolean",
                            attributes: [{"name":"@default","args":[{"value":false}]}],
                        },manuallyChangedFields: {
                            name: "manuallyChangedFields",
                            type: "ProductRecordDataField",
                            isArray: true,
                            attributes: [{"name":"@default","args":[]}],
                        },errors: {
                            name: "errors",
                            type: "ProductRecordError",
                            isDataModel: true,
                            isArray: true,
                            attributes: [{"name":"@relation","args":[{"value":"errors"}]}],
                            backLink: 'record',
                        },notifications: {
                            name: "notifications",
                            type: "ProductNotification",
                            isDataModel: true,
                            isArray: true,
                            attributes: [{"name":"@relation","args":[{"value":"notifications"}]}],
                            backLink: 'productRecord',
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },
                }
                ,
            }
            ,
            product: {
                name: 'Product',fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]},{"name":"@db.Uuid","args":[]}],
                        },createdAt: {
                            name: "createdAt",
                            type: "DateTime",
                            attributes: [{"name":"@default","args":[]}],
                        },updatedAt: {
                            name: "updatedAt",
                            type: "DateTime",
                            attributes: [{"name":"@updatedAt","args":[]}],
                        },createdById: {
                            name: "createdById",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'createdBy',
                        },updatedById: {
                            name: "updatedById",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'updatedBy',
                        },createdBy: {
                            name: "createdBy",
                            type: "User",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"createdProducts"}]}],
                            backLink: 'createdProducts',
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"createdById"},
                        },updatedBy: {
                            name: "updatedBy",
                            type: "User",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"updatedProducts"}]}],
                            backLink: 'updatedProducts',
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"updatedById"},
                        },name: {
                            name: "name",
                            type: "String",
                            isOptional: true,
                        },descriptions: {
                            name: "descriptions",
                            type: "String",
                            isArray: true,
                        },slug: {
                            name: "slug",
                            type: "String",
                            attributes: [{"name":"@unique","args":[]}],
                        },code: {
                            name: "code",
                            type: "String",
                            isOptional: true,
                        },imageSrc: {
                            name: "imageSrc",
                            type: "String",
                            isOptional: true,
                        },records: {
                            name: "records",
                            type: "ProductRecord",
                            isDataModel: true,
                            isArray: true,
                            attributes: [{"name":"@relation","args":[{"value":"records"}]}],
                            backLink: 'product',
                        },status: {
                            name: "status",
                            type: "ProductStatus",
                            isOptional: true,
                        },statusLastUpdatedAt: {
                            name: "statusLastUpdatedAt",
                            type: "DateTime",
                            isOptional: true,
                        },statusAsOf: {
                            name: "statusAsOf",
                            type: "DateTime",
                            isOptional: true,
                        },price: {
                            name: "price",
                            type: "Float",
                            isOptional: true,
                        },priceLastUpdatedAt: {
                            name: "priceLastUpdatedAt",
                            type: "DateTime",
                            isOptional: true,
                        },priceAsOf: {
                            name: "priceAsOf",
                            type: "DateTime",
                            isOptional: true,
                        },category: {
                            name: "category",
                            type: "ProductCategory",
                        },subCategories: {
                            name: "subCategories",
                            type: "ProductSubCategory",
                            isArray: true,
                        },subscriptions: {
                            name: "subscriptions",
                            type: "ProductSubscription",
                            isDataModel: true,
                            isArray: true,
                            attributes: [{"name":"@relation","args":[{"value":"subscriptions"}]}],
                            backLink: 'product',
                        },notifications: {
                            name: "notifications",
                            type: "ProductNotification",
                            isDataModel: true,
                            isArray: true,
                            attributes: [{"name":"@relation","args":[{"value":"notifications"}]}],
                            backLink: 'product',
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },slug: {
                                                    name: "slug",
                                                    fields: ["slug"]
                                                },
                }
                ,
            }
            ,
            productSubscription: {
                name: 'ProductSubscription',fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]},{"name":"@db.Uuid","args":[]}],
                        },createdAt: {
                            name: "createdAt",
                            type: "DateTime",
                            attributes: [{"name":"@default","args":[]}],
                        },updatedAt: {
                            name: "updatedAt",
                            type: "DateTime",
                            attributes: [{"name":"@updatedAt","args":[]}],
                        },createdById: {
                            name: "createdById",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'createdBy',
                        },updatedById: {
                            name: "updatedById",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'updatedBy',
                        },createdBy: {
                            name: "createdBy",
                            type: "User",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"createdProductSubscriptions"}]}],
                            backLink: 'createdProductSubscriptions',
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"createdById"},
                        },updatedBy: {
                            name: "updatedBy",
                            type: "User",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"updatedProductSubscriptions"}]}],
                            backLink: 'updatedProductSubscriptions',
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"updatedById"},
                        },subscriptionType: {
                            name: "subscriptionType",
                            type: "ProductSubscriptionType",
                        },userId: {
                            name: "userId",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'user',
                        },user: {
                            name: "user",
                            type: "User",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"productSubscriptions"}]}],
                            backLink: 'productSubscriptions',
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"userId"},
                        },product: {
                            name: "product",
                            type: "Product",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"subscriptions"}]}],
                            backLink: 'subscriptions',
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"productId"},
                        },productId: {
                            name: "productId",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'product',
                        },enabled: {
                            name: "enabled",
                            type: "Boolean",
                            attributes: [{"name":"@default","args":[{"value":true}]}],
                        },notifications: {
                            name: "notifications",
                            type: "ProductNotification",
                            isDataModel: true,
                            isArray: true,
                            attributes: [{"name":"@relation","args":[{"value":"notifications"}]}],
                            backLink: 'subscription',
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },userId_productId_subscriptionType: {
                                                    name: "userId_productId_subscriptionType",
                                                    fields: ["userId","productId","subscriptionType"]
                                                },
                }
                ,
                attributes: [{"name":"@@delegate","args":[]},{"name":"@@unique","args":[]}],discriminator: "subscriptionType",
            }
            ,
            statusChangeSubscriptionCondition: {
                name: 'StatusChangeSubscriptionCondition',fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]},{"name":"@db.Uuid","args":[]}],
                        },createdAt: {
                            name: "createdAt",
                            type: "DateTime",
                            attributes: [{"name":"@default","args":[]}],
                        },updatedAt: {
                            name: "updatedAt",
                            type: "DateTime",
                            attributes: [{"name":"@updatedAt","args":[]}],
                        },fromStatus: {
                            name: "fromStatus",
                            type: "ProductStatus",
                            isArray: true,
                        },toStatus: {
                            name: "toStatus",
                            type: "ProductStatus",
                            isArray: true,
                        },subscription: {
                            name: "subscription",
                            type: "StatusChangeSubscription",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"conditions"}]}],
                            backLink: 'conditions',
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"subscriptionId"},
                        },subscriptionId: {
                            name: "subscriptionId",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'subscription',
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },
                }
                ,
            }
            ,
            statusChangeSubscription: {
                name: 'StatusChangeSubscription',baseTypes: ['ProductSubscription'],fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]},{"name":"@db.Uuid","args":[]}],
                        },createdAt: {
                            name: "createdAt",
                            type: "DateTime",
                            attributes: [{"name":"@default","args":[]}],
                            inheritedFrom: "ProductSubscription",
                        },updatedAt: {
                            name: "updatedAt",
                            type: "DateTime",
                            attributes: [{"name":"@updatedAt","args":[]}],
                            inheritedFrom: "ProductSubscription",
                        },createdById: {
                            name: "createdById",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'createdBy',
                            inheritedFrom: "ProductSubscription",
                        },updatedById: {
                            name: "updatedById",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'updatedBy',
                            inheritedFrom: "ProductSubscription",
                        },createdBy: {
                            name: "createdBy",
                            type: "User",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"createdProductSubscriptions"}]}],
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"createdById"},
                            inheritedFrom: "ProductSubscription",
                        },updatedBy: {
                            name: "updatedBy",
                            type: "User",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"updatedProductSubscriptions"}]}],
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"updatedById"},
                            inheritedFrom: "ProductSubscription",
                        },subscriptionType: {
                            name: "subscriptionType",
                            type: "ProductSubscriptionType",
                            inheritedFrom: "ProductSubscription",
                        },userId: {
                            name: "userId",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'user',
                            inheritedFrom: "ProductSubscription",
                        },user: {
                            name: "user",
                            type: "User",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"productSubscriptions"}]}],
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"userId"},
                            inheritedFrom: "ProductSubscription",
                        },product: {
                            name: "product",
                            type: "Product",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"subscriptions"}]}],
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"productId"},
                            inheritedFrom: "ProductSubscription",
                        },productId: {
                            name: "productId",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'product',
                            inheritedFrom: "ProductSubscription",
                        },enabled: {
                            name: "enabled",
                            type: "Boolean",
                            attributes: [{"name":"@default","args":[{"value":true}]}],
                            inheritedFrom: "ProductSubscription",
                        },notifications: {
                            name: "notifications",
                            type: "ProductNotification",
                            isDataModel: true,
                            isArray: true,
                            attributes: [{"name":"@relation","args":[{"value":"notifications"}]}],
                            isRelationOwner: true,
                            inheritedFrom: "ProductSubscription",
                        },conditions: {
                            name: "conditions",
                            type: "StatusChangeSubscriptionCondition",
                            isDataModel: true,
                            isArray: true,
                            attributes: [{"name":"@relation","args":[{"value":"conditions"}]}],
                            backLink: 'subscription',
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },
                }
                ,
            }
            ,
            priceChangeSubscription: {
                name: 'PriceChangeSubscription',baseTypes: ['ProductSubscription'],fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]},{"name":"@db.Uuid","args":[]}],
                        },createdAt: {
                            name: "createdAt",
                            type: "DateTime",
                            attributes: [{"name":"@default","args":[]}],
                            inheritedFrom: "ProductSubscription",
                        },updatedAt: {
                            name: "updatedAt",
                            type: "DateTime",
                            attributes: [{"name":"@updatedAt","args":[]}],
                            inheritedFrom: "ProductSubscription",
                        },createdById: {
                            name: "createdById",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'createdBy',
                            inheritedFrom: "ProductSubscription",
                        },updatedById: {
                            name: "updatedById",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'updatedBy',
                            inheritedFrom: "ProductSubscription",
                        },createdBy: {
                            name: "createdBy",
                            type: "User",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"createdProductSubscriptions"}]}],
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"createdById"},
                            inheritedFrom: "ProductSubscription",
                        },updatedBy: {
                            name: "updatedBy",
                            type: "User",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"updatedProductSubscriptions"}]}],
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"updatedById"},
                            inheritedFrom: "ProductSubscription",
                        },subscriptionType: {
                            name: "subscriptionType",
                            type: "ProductSubscriptionType",
                            inheritedFrom: "ProductSubscription",
                        },userId: {
                            name: "userId",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'user',
                            inheritedFrom: "ProductSubscription",
                        },user: {
                            name: "user",
                            type: "User",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"productSubscriptions"}]}],
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"userId"},
                            inheritedFrom: "ProductSubscription",
                        },product: {
                            name: "product",
                            type: "Product",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"subscriptions"}]}],
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"productId"},
                            inheritedFrom: "ProductSubscription",
                        },productId: {
                            name: "productId",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'product',
                            inheritedFrom: "ProductSubscription",
                        },enabled: {
                            name: "enabled",
                            type: "Boolean",
                            attributes: [{"name":"@default","args":[{"value":true}]}],
                            inheritedFrom: "ProductSubscription",
                        },notifications: {
                            name: "notifications",
                            type: "ProductNotification",
                            isDataModel: true,
                            isArray: true,
                            attributes: [{"name":"@relation","args":[{"value":"notifications"}]}],
                            isRelationOwner: true,
                            inheritedFrom: "ProductSubscription",
                        },conditions: {
                            name: "conditions",
                            type: "PriceChangeCondition",
                            isArray: true,
                            attributes: [{"name":"@default","args":[]}],
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },
                }
                ,
            }
            ,
            productNotification: {
                name: 'ProductNotification',fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]},{"name":"@db.Uuid","args":[]}],
                        },createdAt: {
                            name: "createdAt",
                            type: "DateTime",
                            attributes: [{"name":"@default","args":[]}],
                        },updatedAt: {
                            name: "updatedAt",
                            type: "DateTime",
                            attributes: [{"name":"@updatedAt","args":[]}],
                        },createdById: {
                            name: "createdById",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'createdBy',
                        },updatedById: {
                            name: "updatedById",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'updatedBy',
                        },createdBy: {
                            name: "createdBy",
                            type: "User",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"createdProductNotifications"}]}],
                            backLink: 'createdProductNotifications',
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"createdById"},
                        },updatedBy: {
                            name: "updatedBy",
                            type: "User",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"updatedProductNotifications"}]}],
                            backLink: 'updatedProductNotifications',
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"updatedById"},
                        },user: {
                            name: "user",
                            type: "User",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"notifications"}]}],
                            backLink: 'notifications',
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"userId"},
                        },userId: {
                            name: "userId",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'user',
                        },productRecordId: {
                            name: "productRecordId",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'productRecord',
                        },productRecord: {
                            name: "productRecord",
                            type: "ProductRecord",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"notifications"}]}],
                            backLink: 'notifications',
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"productRecordId"},
                        },productId: {
                            name: "productId",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'product',
                        },product: {
                            name: "product",
                            type: "Product",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"notifications"}]}],
                            backLink: 'notifications',
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"productId"},
                        },subscriptionId: {
                            name: "subscriptionId",
                            type: "String",
                            isOptional: true,
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'subscription',
                        },subscription: {
                            name: "subscription",
                            type: "ProductSubscription",
                            isDataModel: true,
                            isOptional: true,
                            attributes: [{"name":"@relation","args":[{"value":"notifications"}]}],
                            backLink: 'notifications',
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"subscriptionId"},
                        },notificationType: {
                            name: "notificationType",
                            type: "ProductNotificationType",
                        },state: {
                            name: "state",
                            type: "NotificationState",
                        },stateAsOf: {
                            name: "stateAsOf",
                            type: "DateTime",
                        },failedAt: {
                            name: "failedAt",
                            type: "DateTime",
                            isOptional: true,
                        },sentAt: {
                            name: "sentAt",
                            type: "DateTime",
                            isOptional: true,
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },
                }
                ,
                attributes: [{"name":"@@delegate","args":[]}],discriminator: "notificationType",
            }
            ,
            priceChangeNotification: {
                name: 'PriceChangeNotification',baseTypes: ['ProductNotification'],fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]},{"name":"@db.Uuid","args":[]}],
                        },createdAt: {
                            name: "createdAt",
                            type: "DateTime",
                            attributes: [{"name":"@default","args":[]}],
                            inheritedFrom: "ProductNotification",
                        },updatedAt: {
                            name: "updatedAt",
                            type: "DateTime",
                            attributes: [{"name":"@updatedAt","args":[]}],
                            inheritedFrom: "ProductNotification",
                        },createdById: {
                            name: "createdById",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'createdBy',
                            inheritedFrom: "ProductNotification",
                        },updatedById: {
                            name: "updatedById",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'updatedBy',
                            inheritedFrom: "ProductNotification",
                        },createdBy: {
                            name: "createdBy",
                            type: "User",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"createdProductNotifications"}]}],
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"createdById"},
                            inheritedFrom: "ProductNotification",
                        },updatedBy: {
                            name: "updatedBy",
                            type: "User",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"updatedProductNotifications"}]}],
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"updatedById"},
                            inheritedFrom: "ProductNotification",
                        },user: {
                            name: "user",
                            type: "User",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"notifications"}]}],
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"userId"},
                            inheritedFrom: "ProductNotification",
                        },userId: {
                            name: "userId",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'user',
                            inheritedFrom: "ProductNotification",
                        },productRecordId: {
                            name: "productRecordId",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'productRecord',
                            inheritedFrom: "ProductNotification",
                        },productRecord: {
                            name: "productRecord",
                            type: "ProductRecord",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"notifications"}]}],
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"productRecordId"},
                            inheritedFrom: "ProductNotification",
                        },productId: {
                            name: "productId",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'product',
                            inheritedFrom: "ProductNotification",
                        },product: {
                            name: "product",
                            type: "Product",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"notifications"}]}],
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"productId"},
                            inheritedFrom: "ProductNotification",
                        },subscriptionId: {
                            name: "subscriptionId",
                            type: "String",
                            isOptional: true,
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'subscription',
                            inheritedFrom: "ProductNotification",
                        },subscription: {
                            name: "subscription",
                            type: "ProductSubscription",
                            isDataModel: true,
                            isOptional: true,
                            attributes: [{"name":"@relation","args":[{"value":"notifications"}]}],
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"subscriptionId"},
                            inheritedFrom: "ProductNotification",
                        },notificationType: {
                            name: "notificationType",
                            type: "ProductNotificationType",
                            inheritedFrom: "ProductNotification",
                        },state: {
                            name: "state",
                            type: "NotificationState",
                            inheritedFrom: "ProductNotification",
                        },stateAsOf: {
                            name: "stateAsOf",
                            type: "DateTime",
                            inheritedFrom: "ProductNotification",
                        },failedAt: {
                            name: "failedAt",
                            type: "DateTime",
                            isOptional: true,
                            inheritedFrom: "ProductNotification",
                        },sentAt: {
                            name: "sentAt",
                            type: "DateTime",
                            isOptional: true,
                            inheritedFrom: "ProductNotification",
                        },condition: {
                            name: "condition",
                            type: "PriceChangeCondition",
                        },previousPrice: {
                            name: "previousPrice",
                            type: "Float",
                        },newPrice: {
                            name: "newPrice",
                            type: "Float",
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },
                }
                ,
            }
            ,
            statusChangeNotification: {
                name: 'StatusChangeNotification',baseTypes: ['ProductNotification'],fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]},{"name":"@db.Uuid","args":[]}],
                        },createdAt: {
                            name: "createdAt",
                            type: "DateTime",
                            attributes: [{"name":"@default","args":[]}],
                            inheritedFrom: "ProductNotification",
                        },updatedAt: {
                            name: "updatedAt",
                            type: "DateTime",
                            attributes: [{"name":"@updatedAt","args":[]}],
                            inheritedFrom: "ProductNotification",
                        },createdById: {
                            name: "createdById",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'createdBy',
                            inheritedFrom: "ProductNotification",
                        },updatedById: {
                            name: "updatedById",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'updatedBy',
                            inheritedFrom: "ProductNotification",
                        },createdBy: {
                            name: "createdBy",
                            type: "User",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"createdProductNotifications"}]}],
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"createdById"},
                            inheritedFrom: "ProductNotification",
                        },updatedBy: {
                            name: "updatedBy",
                            type: "User",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"updatedProductNotifications"}]}],
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"updatedById"},
                            inheritedFrom: "ProductNotification",
                        },user: {
                            name: "user",
                            type: "User",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"notifications"}]}],
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"userId"},
                            inheritedFrom: "ProductNotification",
                        },userId: {
                            name: "userId",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'user',
                            inheritedFrom: "ProductNotification",
                        },productRecordId: {
                            name: "productRecordId",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'productRecord',
                            inheritedFrom: "ProductNotification",
                        },productRecord: {
                            name: "productRecord",
                            type: "ProductRecord",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"notifications"}]}],
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"productRecordId"},
                            inheritedFrom: "ProductNotification",
                        },productId: {
                            name: "productId",
                            type: "String",
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'product',
                            inheritedFrom: "ProductNotification",
                        },product: {
                            name: "product",
                            type: "Product",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[{"value":"notifications"}]}],
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"productId"},
                            inheritedFrom: "ProductNotification",
                        },subscriptionId: {
                            name: "subscriptionId",
                            type: "String",
                            isOptional: true,
                            attributes: [{"name":"@db.Uuid","args":[]}],
                            isForeignKey: true,
                            relationField: 'subscription',
                            inheritedFrom: "ProductNotification",
                        },subscription: {
                            name: "subscription",
                            type: "ProductSubscription",
                            isDataModel: true,
                            isOptional: true,
                            attributes: [{"name":"@relation","args":[{"value":"notifications"}]}],
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"subscriptionId"},
                            inheritedFrom: "ProductNotification",
                        },notificationType: {
                            name: "notificationType",
                            type: "ProductNotificationType",
                            inheritedFrom: "ProductNotification",
                        },state: {
                            name: "state",
                            type: "NotificationState",
                            inheritedFrom: "ProductNotification",
                        },stateAsOf: {
                            name: "stateAsOf",
                            type: "DateTime",
                            inheritedFrom: "ProductNotification",
                        },failedAt: {
                            name: "failedAt",
                            type: "DateTime",
                            isOptional: true,
                            inheritedFrom: "ProductNotification",
                        },sentAt: {
                            name: "sentAt",
                            type: "DateTime",
                            isOptional: true,
                            inheritedFrom: "ProductNotification",
                        },previousStatus: {
                            name: "previousStatus",
                            type: "ProductStatus",
                        },newStatus: {
                            name: "newStatus",
                            type: "ProductStatus",
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },
                }
                ,
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
