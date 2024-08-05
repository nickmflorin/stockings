"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const policy = {
    policy: {
        user: {
            modelLevel: {
                read: {
                    guard: User_read,
                },
                create: {
                    guard: User_create, inputChecker: User_create_input,
                },
                update: {
                    guard: User_update,
                },
                postUpdate: {
                    guard: User_postUpdate,
                },
                delete: {
                    guard: User_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        httpNetworkErrorData: {
            modelLevel: {
                read: {
                    guard: HttpNetworkErrorData_read,
                },
                create: {
                    guard: HttpNetworkErrorData_create, inputChecker: HttpNetworkErrorData_create_input,
                },
                update: {
                    guard: HttpNetworkErrorData_update,
                },
                postUpdate: {
                    guard: HttpNetworkErrorData_postUpdate,
                },
                delete: {
                    guard: HttpNetworkErrorData_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        httpSerializationErrorData: {
            modelLevel: {
                read: {
                    guard: HttpSerializationErrorData_read,
                },
                create: {
                    guard: HttpSerializationErrorData_create, inputChecker: HttpSerializationErrorData_create_input,
                },
                update: {
                    guard: HttpSerializationErrorData_update,
                },
                postUpdate: {
                    guard: HttpSerializationErrorData_postUpdate,
                },
                delete: {
                    guard: HttpSerializationErrorData_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        httpClientErrorData: {
            modelLevel: {
                read: {
                    guard: HttpClientErrorData_read,
                },
                create: {
                    guard: HttpClientErrorData_create, inputChecker: HttpClientErrorData_create_input,
                },
                update: {
                    guard: HttpClientErrorData_update,
                },
                postUpdate: {
                    guard: HttpClientErrorData_postUpdate,
                },
                delete: {
                    guard: HttpClientErrorData_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        missingAttributeErrorData: {
            modelLevel: {
                read: {
                    guard: MissingAttributeErrorData_read,
                },
                create: {
                    guard: MissingAttributeErrorData_create, inputChecker: MissingAttributeErrorData_create_input,
                },
                update: {
                    guard: MissingAttributeErrorData_update,
                },
                postUpdate: {
                    guard: MissingAttributeErrorData_postUpdate,
                },
                delete: {
                    guard: MissingAttributeErrorData_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        invalidAttributeErrorData: {
            modelLevel: {
                read: {
                    guard: InvalidAttributeErrorData_read,
                },
                create: {
                    guard: InvalidAttributeErrorData_create, inputChecker: InvalidAttributeErrorData_create_input,
                },
                update: {
                    guard: InvalidAttributeErrorData_update,
                },
                postUpdate: {
                    guard: InvalidAttributeErrorData_postUpdate,
                },
                delete: {
                    guard: InvalidAttributeErrorData_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        invalidTextErrorData: {
            modelLevel: {
                read: {
                    guard: InvalidTextErrorData_read,
                },
                create: {
                    guard: InvalidTextErrorData_create, inputChecker: InvalidTextErrorData_create_input,
                },
                update: {
                    guard: InvalidTextErrorData_update,
                },
                postUpdate: {
                    guard: InvalidTextErrorData_postUpdate,
                },
                delete: {
                    guard: InvalidTextErrorData_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        missingTextErrorData: {
            modelLevel: {
                read: {
                    guard: MissingTextErrorData_read,
                },
                create: {
                    guard: MissingTextErrorData_create, inputChecker: MissingTextErrorData_create_input,
                },
                update: {
                    guard: MissingTextErrorData_update,
                },
                postUpdate: {
                    guard: MissingTextErrorData_postUpdate,
                },
                delete: {
                    guard: MissingTextErrorData_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        nonUniqueTextErrorData: {
            modelLevel: {
                read: {
                    guard: NonUniqueTextErrorData_read,
                },
                create: {
                    guard: NonUniqueTextErrorData_create, inputChecker: NonUniqueTextErrorData_create_input,
                },
                update: {
                    guard: NonUniqueTextErrorData_update,
                },
                postUpdate: {
                    guard: NonUniqueTextErrorData_postUpdate,
                },
                delete: {
                    guard: NonUniqueTextErrorData_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        missingElementErrorData: {
            modelLevel: {
                read: {
                    guard: MissingElementErrorData_read,
                },
                create: {
                    guard: MissingElementErrorData_create, inputChecker: MissingElementErrorData_create_input,
                },
                update: {
                    guard: MissingElementErrorData_update,
                },
                postUpdate: {
                    guard: MissingElementErrorData_postUpdate,
                },
                delete: {
                    guard: MissingElementErrorData_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        nonUniqueElementErrorData: {
            modelLevel: {
                read: {
                    guard: NonUniqueElementErrorData_read,
                },
                create: {
                    guard: NonUniqueElementErrorData_create, inputChecker: NonUniqueElementErrorData_create_input,
                },
                update: {
                    guard: NonUniqueElementErrorData_update,
                },
                postUpdate: {
                    guard: NonUniqueElementErrorData_postUpdate,
                },
                delete: {
                    guard: NonUniqueElementErrorData_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        productRecordError: {
            modelLevel: {
                read: {
                    guard: ProductRecordError_read,
                },
                create: {
                    guard: ProductRecordError_create, inputChecker: ProductRecordError_create_input,
                },
                update: {
                    guard: ProductRecordError_update,
                },
                postUpdate: {
                    guard: ProductRecordError_postUpdate,
                },
                delete: {
                    guard: ProductRecordError_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        productRecord: {
            modelLevel: {
                read: {
                    guard: ProductRecord_read,
                },
                create: {
                    guard: ProductRecord_create, inputChecker: ProductRecord_create_input,
                },
                update: {
                    guard: ProductRecord_update,
                },
                postUpdate: {
                    guard: ProductRecord_postUpdate,
                },
                delete: {
                    guard: ProductRecord_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        product: {
            modelLevel: {
                read: {
                    guard: Product_read,
                },
                create: {
                    guard: Product_create, inputChecker: Product_create_input,
                },
                update: {
                    guard: Product_update,
                },
                postUpdate: {
                    guard: Product_postUpdate,
                },
                delete: {
                    guard: Product_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        notificationEventConfig: {
            modelLevel: {
                read: {
                    guard: NotificationEventConfig_read,
                },
                create: {
                    guard: NotificationEventConfig_create, inputChecker: NotificationEventConfig_create_input,
                },
                update: {
                    guard: NotificationEventConfig_update,
                },
                postUpdate: {
                    guard: NotificationEventConfig_postUpdate,
                },
                delete: {
                    guard: NotificationEventConfig_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        priceChangeEventConfig: {
            modelLevel: {
                read: {
                    guard: PriceChangeEventConfig_read,
                },
                create: {
                    guard: PriceChangeEventConfig_create, inputChecker: PriceChangeEventConfig_create_input,
                },
                update: {
                    guard: PriceChangeEventConfig_update,
                },
                postUpdate: {
                    guard: PriceChangeEventConfig_postUpdate,
                },
                delete: {
                    guard: PriceChangeEventConfig_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        statusChangeEventConfig: {
            modelLevel: {
                read: {
                    guard: StatusChangeEventConfig_read,
                },
                create: {
                    guard: StatusChangeEventConfig_create, inputChecker: StatusChangeEventConfig_create_input,
                },
                update: {
                    guard: StatusChangeEventConfig_update,
                },
                postUpdate: {
                    guard: StatusChangeEventConfig_postUpdate,
                },
                delete: {
                    guard: StatusChangeEventConfig_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        productNotificationConfig: {
            modelLevel: {
                read: {
                    guard: ProductNotificationConfig_read,
                },
                create: {
                    guard: ProductNotificationConfig_create, inputChecker: ProductNotificationConfig_create_input,
                },
                update: {
                    guard: ProductNotificationConfig_update,
                },
                postUpdate: {
                    guard: ProductNotificationConfig_postUpdate,
                },
                delete: {
                    guard: ProductNotificationConfig_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
    },
    validation: {
        user: {
            hasValidation: false
        },
        httpNetworkErrorData: {
            hasValidation: false
        },
        httpSerializationErrorData: {
            hasValidation: false
        },
        httpClientErrorData: {
            hasValidation: false
        },
        missingAttributeErrorData: {
            hasValidation: false
        },
        invalidAttributeErrorData: {
            hasValidation: false
        },
        invalidTextErrorData: {
            hasValidation: false
        },
        missingTextErrorData: {
            hasValidation: false
        },
        nonUniqueTextErrorData: {
            hasValidation: false
        },
        missingElementErrorData: {
            hasValidation: false
        },
        nonUniqueElementErrorData: {
            hasValidation: false
        },
        productRecordError: {
            hasValidation: false
        },
        productRecord: {
            hasValidation: false
        },
        product: {
            hasValidation: false
        },
        notificationEventConfig: {
            hasValidation: false
        },
        priceChangeEventConfig: {
            hasValidation: false
        },
        statusChangeEventConfig: {
            hasValidation: false
        },
        productNotificationConfig: {
            hasValidation: false
        },
    },
};
function User_read(context, db) {
    return { OR: [] };
}
function $check_User_read(input, context) {
    return false;
}
function User_create(context, db) {
    return { OR: [] };
}
function $check_User_create(input, context) {
    return false;
}
function User_create_input(input, context) {
    return false;
}
function User_update(context, db) {
    return { OR: [] };
}
function $check_User_update(input, context) {
    return false;
}
function User_postUpdate(context, db) {
    return { AND: [] };
}
function $check_User_postUpdate(input, context) {
    return true;
}
function User_delete(context, db) {
    return { OR: [] };
}
function $check_User_delete(input, context) {
    return false;
}
function HttpNetworkErrorData_read(context, db) {
    return { OR: [] };
}
function $check_HttpNetworkErrorData_read(input, context) {
    return false;
}
function HttpNetworkErrorData_create(context, db) {
    return { OR: [] };
}
function $check_HttpNetworkErrorData_create(input, context) {
    return false;
}
function HttpNetworkErrorData_create_input(input, context) {
    return false;
}
function HttpNetworkErrorData_update(context, db) {
    return { OR: [] };
}
function $check_HttpNetworkErrorData_update(input, context) {
    return false;
}
function HttpNetworkErrorData_postUpdate(context, db) {
    return { AND: [] };
}
function $check_HttpNetworkErrorData_postUpdate(input, context) {
    return true;
}
function HttpNetworkErrorData_delete(context, db) {
    return { OR: [] };
}
function $check_HttpNetworkErrorData_delete(input, context) {
    return false;
}
function HttpSerializationErrorData_read(context, db) {
    return { OR: [] };
}
function $check_HttpSerializationErrorData_read(input, context) {
    return false;
}
function HttpSerializationErrorData_create(context, db) {
    return { OR: [] };
}
function $check_HttpSerializationErrorData_create(input, context) {
    return false;
}
function HttpSerializationErrorData_create_input(input, context) {
    return false;
}
function HttpSerializationErrorData_update(context, db) {
    return { OR: [] };
}
function $check_HttpSerializationErrorData_update(input, context) {
    return false;
}
function HttpSerializationErrorData_postUpdate(context, db) {
    return { AND: [] };
}
function $check_HttpSerializationErrorData_postUpdate(input, context) {
    return true;
}
function HttpSerializationErrorData_delete(context, db) {
    return { OR: [] };
}
function $check_HttpSerializationErrorData_delete(input, context) {
    return false;
}
function HttpClientErrorData_read(context, db) {
    return { OR: [] };
}
function $check_HttpClientErrorData_read(input, context) {
    return false;
}
function HttpClientErrorData_create(context, db) {
    return { OR: [] };
}
function $check_HttpClientErrorData_create(input, context) {
    return false;
}
function HttpClientErrorData_create_input(input, context) {
    return false;
}
function HttpClientErrorData_update(context, db) {
    return { OR: [] };
}
function $check_HttpClientErrorData_update(input, context) {
    return false;
}
function HttpClientErrorData_postUpdate(context, db) {
    return { AND: [] };
}
function $check_HttpClientErrorData_postUpdate(input, context) {
    return true;
}
function HttpClientErrorData_delete(context, db) {
    return { OR: [] };
}
function $check_HttpClientErrorData_delete(input, context) {
    return false;
}
function MissingAttributeErrorData_read(context, db) {
    return { OR: [] };
}
function $check_MissingAttributeErrorData_read(input, context) {
    return false;
}
function MissingAttributeErrorData_create(context, db) {
    return { OR: [] };
}
function $check_MissingAttributeErrorData_create(input, context) {
    return false;
}
function MissingAttributeErrorData_create_input(input, context) {
    return false;
}
function MissingAttributeErrorData_update(context, db) {
    return { OR: [] };
}
function $check_MissingAttributeErrorData_update(input, context) {
    return false;
}
function MissingAttributeErrorData_postUpdate(context, db) {
    return { AND: [] };
}
function $check_MissingAttributeErrorData_postUpdate(input, context) {
    return true;
}
function MissingAttributeErrorData_delete(context, db) {
    return { OR: [] };
}
function $check_MissingAttributeErrorData_delete(input, context) {
    return false;
}
function InvalidAttributeErrorData_read(context, db) {
    return { OR: [] };
}
function $check_InvalidAttributeErrorData_read(input, context) {
    return false;
}
function InvalidAttributeErrorData_create(context, db) {
    return { OR: [] };
}
function $check_InvalidAttributeErrorData_create(input, context) {
    return false;
}
function InvalidAttributeErrorData_create_input(input, context) {
    return false;
}
function InvalidAttributeErrorData_update(context, db) {
    return { OR: [] };
}
function $check_InvalidAttributeErrorData_update(input, context) {
    return false;
}
function InvalidAttributeErrorData_postUpdate(context, db) {
    return { AND: [] };
}
function $check_InvalidAttributeErrorData_postUpdate(input, context) {
    return true;
}
function InvalidAttributeErrorData_delete(context, db) {
    return { OR: [] };
}
function $check_InvalidAttributeErrorData_delete(input, context) {
    return false;
}
function InvalidTextErrorData_read(context, db) {
    return { OR: [] };
}
function $check_InvalidTextErrorData_read(input, context) {
    return false;
}
function InvalidTextErrorData_create(context, db) {
    return { OR: [] };
}
function $check_InvalidTextErrorData_create(input, context) {
    return false;
}
function InvalidTextErrorData_create_input(input, context) {
    return false;
}
function InvalidTextErrorData_update(context, db) {
    return { OR: [] };
}
function $check_InvalidTextErrorData_update(input, context) {
    return false;
}
function InvalidTextErrorData_postUpdate(context, db) {
    return { AND: [] };
}
function $check_InvalidTextErrorData_postUpdate(input, context) {
    return true;
}
function InvalidTextErrorData_delete(context, db) {
    return { OR: [] };
}
function $check_InvalidTextErrorData_delete(input, context) {
    return false;
}
function MissingTextErrorData_read(context, db) {
    return { OR: [] };
}
function $check_MissingTextErrorData_read(input, context) {
    return false;
}
function MissingTextErrorData_create(context, db) {
    return { OR: [] };
}
function $check_MissingTextErrorData_create(input, context) {
    return false;
}
function MissingTextErrorData_create_input(input, context) {
    return false;
}
function MissingTextErrorData_update(context, db) {
    return { OR: [] };
}
function $check_MissingTextErrorData_update(input, context) {
    return false;
}
function MissingTextErrorData_postUpdate(context, db) {
    return { AND: [] };
}
function $check_MissingTextErrorData_postUpdate(input, context) {
    return true;
}
function MissingTextErrorData_delete(context, db) {
    return { OR: [] };
}
function $check_MissingTextErrorData_delete(input, context) {
    return false;
}
function NonUniqueTextErrorData_read(context, db) {
    return { OR: [] };
}
function $check_NonUniqueTextErrorData_read(input, context) {
    return false;
}
function NonUniqueTextErrorData_create(context, db) {
    return { OR: [] };
}
function $check_NonUniqueTextErrorData_create(input, context) {
    return false;
}
function NonUniqueTextErrorData_create_input(input, context) {
    return false;
}
function NonUniqueTextErrorData_update(context, db) {
    return { OR: [] };
}
function $check_NonUniqueTextErrorData_update(input, context) {
    return false;
}
function NonUniqueTextErrorData_postUpdate(context, db) {
    return { AND: [] };
}
function $check_NonUniqueTextErrorData_postUpdate(input, context) {
    return true;
}
function NonUniqueTextErrorData_delete(context, db) {
    return { OR: [] };
}
function $check_NonUniqueTextErrorData_delete(input, context) {
    return false;
}
function MissingElementErrorData_read(context, db) {
    return { OR: [] };
}
function $check_MissingElementErrorData_read(input, context) {
    return false;
}
function MissingElementErrorData_create(context, db) {
    return { OR: [] };
}
function $check_MissingElementErrorData_create(input, context) {
    return false;
}
function MissingElementErrorData_create_input(input, context) {
    return false;
}
function MissingElementErrorData_update(context, db) {
    return { OR: [] };
}
function $check_MissingElementErrorData_update(input, context) {
    return false;
}
function MissingElementErrorData_postUpdate(context, db) {
    return { AND: [] };
}
function $check_MissingElementErrorData_postUpdate(input, context) {
    return true;
}
function MissingElementErrorData_delete(context, db) {
    return { OR: [] };
}
function $check_MissingElementErrorData_delete(input, context) {
    return false;
}
function NonUniqueElementErrorData_read(context, db) {
    return { OR: [] };
}
function $check_NonUniqueElementErrorData_read(input, context) {
    return false;
}
function NonUniqueElementErrorData_create(context, db) {
    return { OR: [] };
}
function $check_NonUniqueElementErrorData_create(input, context) {
    return false;
}
function NonUniqueElementErrorData_create_input(input, context) {
    return false;
}
function NonUniqueElementErrorData_update(context, db) {
    return { OR: [] };
}
function $check_NonUniqueElementErrorData_update(input, context) {
    return false;
}
function NonUniqueElementErrorData_postUpdate(context, db) {
    return { AND: [] };
}
function $check_NonUniqueElementErrorData_postUpdate(input, context) {
    return true;
}
function NonUniqueElementErrorData_delete(context, db) {
    return { OR: [] };
}
function $check_NonUniqueElementErrorData_delete(input, context) {
    return false;
}
function ProductRecordError_read(context, db) {
    return { OR: [] };
}
function $check_ProductRecordError_read(input, context) {
    return false;
}
function ProductRecordError_create(context, db) {
    return { OR: [] };
}
function $check_ProductRecordError_create(input, context) {
    return false;
}
function ProductRecordError_create_input(input, context) {
    return false;
}
function ProductRecordError_update(context, db) {
    return { OR: [] };
}
function $check_ProductRecordError_update(input, context) {
    return false;
}
function ProductRecordError_postUpdate(context, db) {
    return { AND: [] };
}
function $check_ProductRecordError_postUpdate(input, context) {
    return true;
}
function ProductRecordError_delete(context, db) {
    return { OR: [] };
}
function $check_ProductRecordError_delete(input, context) {
    return false;
}
function ProductRecord_read(context, db) {
    return { OR: [] };
}
function $check_ProductRecord_read(input, context) {
    return false;
}
function ProductRecord_create(context, db) {
    return { OR: [] };
}
function $check_ProductRecord_create(input, context) {
    return false;
}
function ProductRecord_create_input(input, context) {
    return false;
}
function ProductRecord_update(context, db) {
    return { OR: [] };
}
function $check_ProductRecord_update(input, context) {
    return false;
}
function ProductRecord_postUpdate(context, db) {
    return { AND: [] };
}
function $check_ProductRecord_postUpdate(input, context) {
    return true;
}
function ProductRecord_delete(context, db) {
    return { OR: [] };
}
function $check_ProductRecord_delete(input, context) {
    return false;
}
function Product_read(context, db) {
    return { OR: [] };
}
function $check_Product_read(input, context) {
    return false;
}
function Product_create(context, db) {
    return { OR: [] };
}
function $check_Product_create(input, context) {
    return false;
}
function Product_create_input(input, context) {
    return false;
}
function Product_update(context, db) {
    return { OR: [] };
}
function $check_Product_update(input, context) {
    return false;
}
function Product_postUpdate(context, db) {
    return { AND: [] };
}
function $check_Product_postUpdate(input, context) {
    return true;
}
function Product_delete(context, db) {
    return { OR: [] };
}
function $check_Product_delete(input, context) {
    return false;
}
function NotificationEventConfig_read(context, db) {
    return { OR: [] };
}
function $check_NotificationEventConfig_read(input, context) {
    return false;
}
function NotificationEventConfig_create(context, db) {
    return { OR: [] };
}
function $check_NotificationEventConfig_create(input, context) {
    return false;
}
function NotificationEventConfig_create_input(input, context) {
    return false;
}
function NotificationEventConfig_update(context, db) {
    return { OR: [] };
}
function $check_NotificationEventConfig_update(input, context) {
    return false;
}
function NotificationEventConfig_postUpdate(context, db) {
    return { AND: [] };
}
function $check_NotificationEventConfig_postUpdate(input, context) {
    return true;
}
function NotificationEventConfig_delete(context, db) {
    return { OR: [] };
}
function $check_NotificationEventConfig_delete(input, context) {
    return false;
}
function PriceChangeEventConfig_read(context, db) {
    return { OR: [] };
}
function $check_PriceChangeEventConfig_read(input, context) {
    return false;
}
function PriceChangeEventConfig_create(context, db) {
    return { OR: [] };
}
function $check_PriceChangeEventConfig_create(input, context) {
    return false;
}
function PriceChangeEventConfig_create_input(input, context) {
    return false;
}
function PriceChangeEventConfig_update(context, db) {
    return { OR: [] };
}
function $check_PriceChangeEventConfig_update(input, context) {
    return false;
}
function PriceChangeEventConfig_postUpdate(context, db) {
    return { AND: [] };
}
function $check_PriceChangeEventConfig_postUpdate(input, context) {
    return true;
}
function PriceChangeEventConfig_delete(context, db) {
    return { OR: [] };
}
function $check_PriceChangeEventConfig_delete(input, context) {
    return false;
}
function StatusChangeEventConfig_read(context, db) {
    return { OR: [] };
}
function $check_StatusChangeEventConfig_read(input, context) {
    return false;
}
function StatusChangeEventConfig_create(context, db) {
    return { OR: [] };
}
function $check_StatusChangeEventConfig_create(input, context) {
    return false;
}
function StatusChangeEventConfig_create_input(input, context) {
    return false;
}
function StatusChangeEventConfig_update(context, db) {
    return { OR: [] };
}
function $check_StatusChangeEventConfig_update(input, context) {
    return false;
}
function StatusChangeEventConfig_postUpdate(context, db) {
    return { AND: [] };
}
function $check_StatusChangeEventConfig_postUpdate(input, context) {
    return true;
}
function StatusChangeEventConfig_delete(context, db) {
    return { OR: [] };
}
function $check_StatusChangeEventConfig_delete(input, context) {
    return false;
}
function ProductNotificationConfig_read(context, db) {
    return { OR: [] };
}
function $check_ProductNotificationConfig_read(input, context) {
    return false;
}
function ProductNotificationConfig_create(context, db) {
    return { OR: [] };
}
function $check_ProductNotificationConfig_create(input, context) {
    return false;
}
function ProductNotificationConfig_create_input(input, context) {
    return false;
}
function ProductNotificationConfig_update(context, db) {
    return { OR: [] };
}
function $check_ProductNotificationConfig_update(input, context) {
    return false;
}
function ProductNotificationConfig_postUpdate(context, db) {
    return { AND: [] };
}
function $check_ProductNotificationConfig_postUpdate(input, context) {
    return true;
}
function ProductNotificationConfig_delete(context, db) {
    return { OR: [] };
}
function $check_ProductNotificationConfig_delete(input, context) {
    return false;
}
exports.default = policy;
