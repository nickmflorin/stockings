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
                productNotificationConfigs: {
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
                createdProductNotificationConfigs: {
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
                updatedProductNotificationConfigs: {
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
                createdNotificationEventConfigs: {
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
                updatedNotificationEventConfigs: {
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
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
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
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
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
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
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
                statusRecordedAt: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                price: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                priceRecordedAt: {
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
                notificationConfigs: {
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
        notificationEventConfig: {
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
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
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
                productNotificationConfig: {
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
                productNotificationConfigId: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                };
                contentType: {
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
            attributes: {
                name: string;
                args: never[];
            }[];
            discriminator: string;
        };
        priceChangeEventConfig: {
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
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
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
                productNotificationConfig: {
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
                productNotificationConfigId: {
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
                contentType: {
                    name: string;
                    type: string;
                    inheritedFrom: string;
                };
                eventTypes: {
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
        statusChangeEventConfig: {
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
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
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
                productNotificationConfig: {
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
                productNotificationConfigId: {
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
                contentType: {
                    name: string;
                    type: string;
                    inheritedFrom: string;
                };
                eventTypes: {
                    name: string;
                    type: string;
                    isArray: boolean;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
        };
        productNotificationConfig: {
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
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
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
                eventConfigs: {
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
    };
    deleteCascade: {};
    authModel: string;
};
export default metadata;
