declare const metadata: {
    models: {
        user: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                clerkId: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                firstName: {
                    name: string;
                    type: string;
                };
                lastName: {
                    name: string;
                    type: string;
                };
                profileImageUrl: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                emailAddress: {
                    name: string;
                    type: string;
                };
                createdAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                createdProducts: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
                updatedProducts: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
                createdProductRecords: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
                updatedProductRecords: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
                createdProductSubscriptions: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
                updatedProductSubscriptions: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
                productSubscriptions: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
                createdProductNotifications: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
                updatedProductNotifications: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
                notifications: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
                createdProcessedProductRecords: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
                updatedProcessedProductRecords: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
                processedProductRecords: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
                clerkId: {
                    name: string;
                    fields: string[];
                };
            };
        };
        httpNetworkErrorData: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                url: {
                    name: string;
                    type: string;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
        };
        httpSerializationErrorData: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                url: {
                    name: string;
                    type: string;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
        };
        httpClientErrorData: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                url: {
                    name: string;
                    type: string;
                };
                status: {
                    name: string;
                    type: string;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
        };
        missingAttributeErrorData: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                attribute: {
                    name: string;
                    type: string;
                };
                parentHtml: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
        };
        invalidAttributeErrorData: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                attribute: {
                    name: string;
                    type: string;
                };
                parentHtml: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                value: {
                    name: string;
                    type: string;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
        };
        invalidTextErrorData: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                parentHtml: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                value: {
                    name: string;
                    type: string;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
        };
        missingTextErrorData: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                parentHtml: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
        };
        nonUniqueTextErrorData: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                parentHtml: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
        };
        missingElementErrorData: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                parentHtml: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                selector: {
                    name: string;
                    type: string;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
        };
        nonUniqueElementErrorData: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                parentHtml: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                selector: {
                    name: string;
                    type: string;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
        };
        productRecordError: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                errorId: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                errorCode: {
                    name: string;
                    type: string;
                };
                record: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                recordId: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                };
                field: {
                    name: string;
                    type: string;
                };
                message: {
                    name: string;
                    type: string;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
                errorId: {
                    name: string;
                    fields: string[];
                };
                recordId: {
                    name: string;
                    fields: string[];
                };
            };
        };
        productRecord: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                createdAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                createdById: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                };
                updatedById: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                };
                timestamp: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                createdBy: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                updatedBy: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                product: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                productId: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                };
                price: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                rawPrice: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                status: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                wasManuallyCreated: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: boolean;
                        }[];
                    }[];
                };
                manuallyChangedFields: {
                    name: string;
                    type: string;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                errors: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
                notifications: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
                processedRecords: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
        };
        processedProductRecord: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                createdAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                createdById: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                };
                updatedById: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                };
                createdBy: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                updatedBy: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                recordId: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                };
                record: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                user: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                userId: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
                userId_recordId: {
                    name: string;
                    fields: string[];
                };
            };
            attributes: {
                name: string;
                args: never[];
            }[];
        };
        product: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                createdAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                createdById: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                };
                updatedById: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                };
                createdBy: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                updatedBy: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                name: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                descriptions: {
                    name: string;
                    type: string;
                    isArray: boolean;
                };
                slug: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                code: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                imageSrc: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                records: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
                status: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                statusLastUpdatedAt: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                statusAsOf: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                price: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                priceLastUpdatedAt: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                priceAsOf: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                category: {
                    name: string;
                    type: string;
                };
                subCategories: {
                    name: string;
                    type: string;
                    isArray: boolean;
                };
                subscriptions: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
                notifications: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
                slug: {
                    name: string;
                    fields: string[];
                };
            };
        };
        productSubscription: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                createdAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                createdById: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                };
                updatedById: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                };
                createdBy: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                updatedBy: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                subscriptionType: {
                    name: string;
                    type: string;
                };
                userId: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                };
                user: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                product: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                productId: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                };
                enabled: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: boolean;
                        }[];
                    }[];
                };
                notifications: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
                userId_productId_subscriptionType: {
                    name: string;
                    fields: string[];
                };
            };
            attributes: {
                name: string;
                args: never[];
            }[];
            discriminator: string;
        };
        statusChangeSubscriptionCondition: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                createdAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                fromStatus: {
                    name: string;
                    type: string;
                    isArray: boolean;
                };
                toStatus: {
                    name: string;
                    type: string;
                    isArray: boolean;
                };
                subscription: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                subscriptionId: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
        };
        statusChangeSubscription: {
            name: string;
            baseTypes: string[];
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                createdAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    inheritedFrom: string;
                };
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    inheritedFrom: string;
                };
                createdById: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                    inheritedFrom: string;
                };
                updatedById: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                    inheritedFrom: string;
                };
                createdBy: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                    inheritedFrom: string;
                };
                updatedBy: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                    inheritedFrom: string;
                };
                subscriptionType: {
                    name: string;
                    type: string;
                    inheritedFrom: string;
                };
                userId: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                    inheritedFrom: string;
                };
                user: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                    inheritedFrom: string;
                };
                product: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                    inheritedFrom: string;
                };
                productId: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                    inheritedFrom: string;
                };
                enabled: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: boolean;
                        }[];
                    }[];
                    inheritedFrom: string;
                };
                notifications: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    isRelationOwner: boolean;
                    inheritedFrom: string;
                };
                conditions: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
        };
        priceChangeSubscription: {
            name: string;
            baseTypes: string[];
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                createdAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    inheritedFrom: string;
                };
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    inheritedFrom: string;
                };
                createdById: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                    inheritedFrom: string;
                };
                updatedById: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                    inheritedFrom: string;
                };
                createdBy: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                    inheritedFrom: string;
                };
                updatedBy: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                    inheritedFrom: string;
                };
                subscriptionType: {
                    name: string;
                    type: string;
                    inheritedFrom: string;
                };
                userId: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                    inheritedFrom: string;
                };
                user: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                    inheritedFrom: string;
                };
                product: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                    inheritedFrom: string;
                };
                productId: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                    inheritedFrom: string;
                };
                enabled: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: boolean;
                        }[];
                    }[];
                    inheritedFrom: string;
                };
                notifications: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    isRelationOwner: boolean;
                    inheritedFrom: string;
                };
                conditions: {
                    name: string;
                    type: string;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
        };
        productNotification: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                createdAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                createdById: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                };
                updatedById: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                };
                createdBy: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                updatedBy: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                user: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                userId: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                };
                productRecordId: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                };
                productRecord: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                productId: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                };
                product: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                subscriptionId: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                };
                subscription: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isOptional: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                notificationType: {
                    name: string;
                    type: string;
                };
                state: {
                    name: string;
                    type: string;
                };
                stateAsOf: {
                    name: string;
                    type: string;
                };
                failedAt: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                sentAt: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
            attributes: {
                name: string;
                args: never[];
            }[];
            discriminator: string;
        };
        priceChangeNotification: {
            name: string;
            baseTypes: string[];
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                createdAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    inheritedFrom: string;
                };
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    inheritedFrom: string;
                };
                createdById: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                    inheritedFrom: string;
                };
                updatedById: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                    inheritedFrom: string;
                };
                createdBy: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                    inheritedFrom: string;
                };
                updatedBy: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                    inheritedFrom: string;
                };
                user: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                    inheritedFrom: string;
                };
                userId: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                    inheritedFrom: string;
                };
                productRecordId: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                    inheritedFrom: string;
                };
                productRecord: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                    inheritedFrom: string;
                };
                productId: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                    inheritedFrom: string;
                };
                product: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                    inheritedFrom: string;
                };
                subscriptionId: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                    inheritedFrom: string;
                };
                subscription: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isOptional: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                    inheritedFrom: string;
                };
                notificationType: {
                    name: string;
                    type: string;
                    inheritedFrom: string;
                };
                state: {
                    name: string;
                    type: string;
                    inheritedFrom: string;
                };
                stateAsOf: {
                    name: string;
                    type: string;
                    inheritedFrom: string;
                };
                failedAt: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                    inheritedFrom: string;
                };
                sentAt: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                    inheritedFrom: string;
                };
                condition: {
                    name: string;
                    type: string;
                };
                previousPrice: {
                    name: string;
                    type: string;
                };
                newPrice: {
                    name: string;
                    type: string;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
        };
        statusChangeNotification: {
            name: string;
            baseTypes: string[];
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                createdAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    inheritedFrom: string;
                };
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    inheritedFrom: string;
                };
                createdById: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                    inheritedFrom: string;
                };
                updatedById: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                    inheritedFrom: string;
                };
                createdBy: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                    inheritedFrom: string;
                };
                updatedBy: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                    inheritedFrom: string;
                };
                user: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                    inheritedFrom: string;
                };
                userId: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                    inheritedFrom: string;
                };
                productRecordId: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                    inheritedFrom: string;
                };
                productRecord: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                    inheritedFrom: string;
                };
                productId: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                    inheritedFrom: string;
                };
                product: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                    inheritedFrom: string;
                };
                subscriptionId: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                    inheritedFrom: string;
                };
                subscription: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isOptional: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                    inheritedFrom: string;
                };
                notificationType: {
                    name: string;
                    type: string;
                    inheritedFrom: string;
                };
                state: {
                    name: string;
                    type: string;
                    inheritedFrom: string;
                };
                stateAsOf: {
                    name: string;
                    type: string;
                    inheritedFrom: string;
                };
                failedAt: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                    inheritedFrom: string;
                };
                sentAt: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                    inheritedFrom: string;
                };
                previousStatus: {
                    name: string;
                    type: string;
                };
                newStatus: {
                    name: string;
                    type: string;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
        };
    };
    deleteCascade: {};
    authModel: string;
};
export default metadata;
