/* eslint-disable */
import { type QueryContext, type CrudContract, allFieldsEqual, type PolicyDef, type PermissionCheckerContext, type PermissionCheckerConstraint } from "@zenstackhq/runtime";
import { ElementAttribute } from "../generated";
import { ScrapingErrorCode } from "../generated";
import { ProductRecordDataField } from "../generated";
import { ProductStatus } from "../generated";
import { ProductCategory } from "../generated";
import { ProductSubCategory } from "../generated";
import { PriceChangeCondition } from "../generated";
import { ProductSubscriptionType } from "../generated";
import { ProductNotificationType } from "../generated";
import { NotificationState } from "../generated";

const policy: PolicyDef = {
        policy:{
            user: {
                modelLevel:{
                    read:{
                        guard: User_read,
                    }
                    ,
                    create:{
                        guard: User_create,inputChecker: User_create_input,
                    }
                    ,
                    update:{
                        guard: User_update,
                    }
                    ,
                    postUpdate:{
                        guard: User_postUpdate,
                    }
                    ,
                    delete:{
                        guard: User_delete,
                    }
                }
                ,
                fieldLevel:{
                    read:
                    {
                    }
                    ,
                    update:
                    {
                    }
                    ,
                }
                ,
            }
            ,
            httpNetworkErrorData: {
                modelLevel:{
                    read:{
                        guard: HttpNetworkErrorData_read,
                    }
                    ,
                    create:{
                        guard: HttpNetworkErrorData_create,inputChecker: HttpNetworkErrorData_create_input,
                    }
                    ,
                    update:{
                        guard: HttpNetworkErrorData_update,
                    }
                    ,
                    postUpdate:{
                        guard: HttpNetworkErrorData_postUpdate,
                    }
                    ,
                    delete:{
                        guard: HttpNetworkErrorData_delete,
                    }
                }
                ,
                fieldLevel:{
                    read:
                    {
                    }
                    ,
                    update:
                    {
                    }
                    ,
                }
                ,
            }
            ,
            httpSerializationErrorData: {
                modelLevel:{
                    read:{
                        guard: HttpSerializationErrorData_read,
                    }
                    ,
                    create:{
                        guard: HttpSerializationErrorData_create,inputChecker: HttpSerializationErrorData_create_input,
                    }
                    ,
                    update:{
                        guard: HttpSerializationErrorData_update,
                    }
                    ,
                    postUpdate:{
                        guard: HttpSerializationErrorData_postUpdate,
                    }
                    ,
                    delete:{
                        guard: HttpSerializationErrorData_delete,
                    }
                }
                ,
                fieldLevel:{
                    read:
                    {
                    }
                    ,
                    update:
                    {
                    }
                    ,
                }
                ,
            }
            ,
            httpClientErrorData: {
                modelLevel:{
                    read:{
                        guard: HttpClientErrorData_read,
                    }
                    ,
                    create:{
                        guard: HttpClientErrorData_create,inputChecker: HttpClientErrorData_create_input,
                    }
                    ,
                    update:{
                        guard: HttpClientErrorData_update,
                    }
                    ,
                    postUpdate:{
                        guard: HttpClientErrorData_postUpdate,
                    }
                    ,
                    delete:{
                        guard: HttpClientErrorData_delete,
                    }
                }
                ,
                fieldLevel:{
                    read:
                    {
                    }
                    ,
                    update:
                    {
                    }
                    ,
                }
                ,
            }
            ,
            missingAttributeErrorData: {
                modelLevel:{
                    read:{
                        guard: MissingAttributeErrorData_read,
                    }
                    ,
                    create:{
                        guard: MissingAttributeErrorData_create,inputChecker: MissingAttributeErrorData_create_input,
                    }
                    ,
                    update:{
                        guard: MissingAttributeErrorData_update,
                    }
                    ,
                    postUpdate:{
                        guard: MissingAttributeErrorData_postUpdate,
                    }
                    ,
                    delete:{
                        guard: MissingAttributeErrorData_delete,
                    }
                }
                ,
                fieldLevel:{
                    read:
                    {
                    }
                    ,
                    update:
                    {
                    }
                    ,
                }
                ,
            }
            ,
            invalidAttributeErrorData: {
                modelLevel:{
                    read:{
                        guard: InvalidAttributeErrorData_read,
                    }
                    ,
                    create:{
                        guard: InvalidAttributeErrorData_create,inputChecker: InvalidAttributeErrorData_create_input,
                    }
                    ,
                    update:{
                        guard: InvalidAttributeErrorData_update,
                    }
                    ,
                    postUpdate:{
                        guard: InvalidAttributeErrorData_postUpdate,
                    }
                    ,
                    delete:{
                        guard: InvalidAttributeErrorData_delete,
                    }
                }
                ,
                fieldLevel:{
                    read:
                    {
                    }
                    ,
                    update:
                    {
                    }
                    ,
                }
                ,
            }
            ,
            invalidTextErrorData: {
                modelLevel:{
                    read:{
                        guard: InvalidTextErrorData_read,
                    }
                    ,
                    create:{
                        guard: InvalidTextErrorData_create,inputChecker: InvalidTextErrorData_create_input,
                    }
                    ,
                    update:{
                        guard: InvalidTextErrorData_update,
                    }
                    ,
                    postUpdate:{
                        guard: InvalidTextErrorData_postUpdate,
                    }
                    ,
                    delete:{
                        guard: InvalidTextErrorData_delete,
                    }
                }
                ,
                fieldLevel:{
                    read:
                    {
                    }
                    ,
                    update:
                    {
                    }
                    ,
                }
                ,
            }
            ,
            missingTextErrorData: {
                modelLevel:{
                    read:{
                        guard: MissingTextErrorData_read,
                    }
                    ,
                    create:{
                        guard: MissingTextErrorData_create,inputChecker: MissingTextErrorData_create_input,
                    }
                    ,
                    update:{
                        guard: MissingTextErrorData_update,
                    }
                    ,
                    postUpdate:{
                        guard: MissingTextErrorData_postUpdate,
                    }
                    ,
                    delete:{
                        guard: MissingTextErrorData_delete,
                    }
                }
                ,
                fieldLevel:{
                    read:
                    {
                    }
                    ,
                    update:
                    {
                    }
                    ,
                }
                ,
            }
            ,
            nonUniqueTextErrorData: {
                modelLevel:{
                    read:{
                        guard: NonUniqueTextErrorData_read,
                    }
                    ,
                    create:{
                        guard: NonUniqueTextErrorData_create,inputChecker: NonUniqueTextErrorData_create_input,
                    }
                    ,
                    update:{
                        guard: NonUniqueTextErrorData_update,
                    }
                    ,
                    postUpdate:{
                        guard: NonUniqueTextErrorData_postUpdate,
                    }
                    ,
                    delete:{
                        guard: NonUniqueTextErrorData_delete,
                    }
                }
                ,
                fieldLevel:{
                    read:
                    {
                    }
                    ,
                    update:
                    {
                    }
                    ,
                }
                ,
            }
            ,
            missingElementErrorData: {
                modelLevel:{
                    read:{
                        guard: MissingElementErrorData_read,
                    }
                    ,
                    create:{
                        guard: MissingElementErrorData_create,inputChecker: MissingElementErrorData_create_input,
                    }
                    ,
                    update:{
                        guard: MissingElementErrorData_update,
                    }
                    ,
                    postUpdate:{
                        guard: MissingElementErrorData_postUpdate,
                    }
                    ,
                    delete:{
                        guard: MissingElementErrorData_delete,
                    }
                }
                ,
                fieldLevel:{
                    read:
                    {
                    }
                    ,
                    update:
                    {
                    }
                    ,
                }
                ,
            }
            ,
            nonUniqueElementErrorData: {
                modelLevel:{
                    read:{
                        guard: NonUniqueElementErrorData_read,
                    }
                    ,
                    create:{
                        guard: NonUniqueElementErrorData_create,inputChecker: NonUniqueElementErrorData_create_input,
                    }
                    ,
                    update:{
                        guard: NonUniqueElementErrorData_update,
                    }
                    ,
                    postUpdate:{
                        guard: NonUniqueElementErrorData_postUpdate,
                    }
                    ,
                    delete:{
                        guard: NonUniqueElementErrorData_delete,
                    }
                }
                ,
                fieldLevel:{
                    read:
                    {
                    }
                    ,
                    update:
                    {
                    }
                    ,
                }
                ,
            }
            ,
            productRecordError: {
                modelLevel:{
                    read:{
                        guard: ProductRecordError_read,
                    }
                    ,
                    create:{
                        guard: ProductRecordError_create,inputChecker: ProductRecordError_create_input,
                    }
                    ,
                    update:{
                        guard: ProductRecordError_update,
                    }
                    ,
                    postUpdate:{
                        guard: ProductRecordError_postUpdate,
                    }
                    ,
                    delete:{
                        guard: ProductRecordError_delete,
                    }
                }
                ,
                fieldLevel:{
                    read:
                    {
                    }
                    ,
                    update:
                    {
                    }
                    ,
                }
                ,
            }
            ,
            productRecord: {
                modelLevel:{
                    read:{
                        guard: ProductRecord_read,
                    }
                    ,
                    create:{
                        guard: ProductRecord_create,inputChecker: ProductRecord_create_input,
                    }
                    ,
                    update:{
                        guard: ProductRecord_update,
                    }
                    ,
                    postUpdate:{
                        guard: ProductRecord_postUpdate,
                    }
                    ,
                    delete:{
                        guard: ProductRecord_delete,
                    }
                }
                ,
                fieldLevel:{
                    read:
                    {
                    }
                    ,
                    update:
                    {
                    }
                    ,
                }
                ,
            }
            ,
            product: {
                modelLevel:{
                    read:{
                        guard: Product_read,
                    }
                    ,
                    create:{
                        guard: Product_create,inputChecker: Product_create_input,
                    }
                    ,
                    update:{
                        guard: Product_update,
                    }
                    ,
                    postUpdate:{
                        guard: Product_postUpdate,
                    }
                    ,
                    delete:{
                        guard: Product_delete,
                    }
                }
                ,
                fieldLevel:{
                    read:
                    {
                    }
                    ,
                    update:
                    {
                    }
                    ,
                }
                ,
            }
            ,
            productSubscription: {
                modelLevel:{
                    read:{
                        guard: ProductSubscription_read,
                    }
                    ,
                    create:{
                        guard: ProductSubscription_create,inputChecker: ProductSubscription_create_input,
                    }
                    ,
                    update:{
                        guard: ProductSubscription_update,
                    }
                    ,
                    postUpdate:{
                        guard: ProductSubscription_postUpdate,
                    }
                    ,
                    delete:{
                        guard: ProductSubscription_delete,
                    }
                }
                ,
                fieldLevel:{
                    read:
                    {
                    }
                    ,
                    update:
                    {
                    }
                    ,
                }
                ,
            }
            ,
            statusChangeSubscriptionCondition: {
                modelLevel:{
                    read:{
                        guard: StatusChangeSubscriptionCondition_read,
                    }
                    ,
                    create:{
                        guard: StatusChangeSubscriptionCondition_create,inputChecker: StatusChangeSubscriptionCondition_create_input,
                    }
                    ,
                    update:{
                        guard: StatusChangeSubscriptionCondition_update,
                    }
                    ,
                    postUpdate:{
                        guard: StatusChangeSubscriptionCondition_postUpdate,
                    }
                    ,
                    delete:{
                        guard: StatusChangeSubscriptionCondition_delete,
                    }
                }
                ,
                fieldLevel:{
                    read:
                    {
                    }
                    ,
                    update:
                    {
                    }
                    ,
                }
                ,
            }
            ,
            statusChangeSubscription: {
                modelLevel:{
                    read:{
                        guard: StatusChangeSubscription_read,
                    }
                    ,
                    create:{
                        guard: StatusChangeSubscription_create,inputChecker: StatusChangeSubscription_create_input,
                    }
                    ,
                    update:{
                        guard: StatusChangeSubscription_update,
                    }
                    ,
                    postUpdate:{
                        guard: StatusChangeSubscription_postUpdate,
                    }
                    ,
                    delete:{
                        guard: StatusChangeSubscription_delete,
                    }
                }
                ,
                fieldLevel:{
                    read:
                    {
                    }
                    ,
                    update:
                    {
                    }
                    ,
                }
                ,
            }
            ,
            priceChangeSubscription: {
                modelLevel:{
                    read:{
                        guard: PriceChangeSubscription_read,
                    }
                    ,
                    create:{
                        guard: PriceChangeSubscription_create,inputChecker: PriceChangeSubscription_create_input,
                    }
                    ,
                    update:{
                        guard: PriceChangeSubscription_update,
                    }
                    ,
                    postUpdate:{
                        guard: PriceChangeSubscription_postUpdate,
                    }
                    ,
                    delete:{
                        guard: PriceChangeSubscription_delete,
                    }
                }
                ,
                fieldLevel:{
                    read:
                    {
                    }
                    ,
                    update:
                    {
                    }
                    ,
                }
                ,
            }
            ,
            productNotification: {
                modelLevel:{
                    read:{
                        guard: ProductNotification_read,
                    }
                    ,
                    create:{
                        guard: ProductNotification_create,inputChecker: ProductNotification_create_input,
                    }
                    ,
                    update:{
                        guard: ProductNotification_update,
                    }
                    ,
                    postUpdate:{
                        guard: ProductNotification_postUpdate,
                    }
                    ,
                    delete:{
                        guard: ProductNotification_delete,
                    }
                }
                ,
                fieldLevel:{
                    read:
                    {
                    }
                    ,
                    update:
                    {
                    }
                    ,
                }
                ,
            }
            ,
            priceChangeNotification: {
                modelLevel:{
                    read:{
                        guard: PriceChangeNotification_read,
                    }
                    ,
                    create:{
                        guard: PriceChangeNotification_create,inputChecker: PriceChangeNotification_create_input,
                    }
                    ,
                    update:{
                        guard: PriceChangeNotification_update,
                    }
                    ,
                    postUpdate:{
                        guard: PriceChangeNotification_postUpdate,
                    }
                    ,
                    delete:{
                        guard: PriceChangeNotification_delete,
                    }
                }
                ,
                fieldLevel:{
                    read:
                    {
                    }
                    ,
                    update:
                    {
                    }
                    ,
                }
                ,
            }
            ,
            statusChangeNotification: {
                modelLevel:{
                    read:{
                        guard: StatusChangeNotification_read,
                    }
                    ,
                    create:{
                        guard: StatusChangeNotification_create,inputChecker: StatusChangeNotification_create_input,
                    }
                    ,
                    update:{
                        guard: StatusChangeNotification_update,
                    }
                    ,
                    postUpdate:{
                        guard: StatusChangeNotification_postUpdate,
                    }
                    ,
                    delete:{
                        guard: StatusChangeNotification_delete,
                    }
                }
                ,
                fieldLevel:{
                    read:
                    {
                    }
                    ,
                    update:
                    {
                    }
                    ,
                }
                ,
            }
            ,
        }
        ,
        validation:{
            user:{
                hasValidation: false
            }
            ,
            httpNetworkErrorData:{
                hasValidation: false
            }
            ,
            httpSerializationErrorData:{
                hasValidation: false
            }
            ,
            httpClientErrorData:{
                hasValidation: false
            }
            ,
            missingAttributeErrorData:{
                hasValidation: false
            }
            ,
            invalidAttributeErrorData:{
                hasValidation: false
            }
            ,
            invalidTextErrorData:{
                hasValidation: false
            }
            ,
            missingTextErrorData:{
                hasValidation: false
            }
            ,
            nonUniqueTextErrorData:{
                hasValidation: false
            }
            ,
            missingElementErrorData:{
                hasValidation: false
            }
            ,
            nonUniqueElementErrorData:{
                hasValidation: false
            }
            ,
            productRecordError:{
                hasValidation: false
            }
            ,
            productRecord:{
                hasValidation: false
            }
            ,
            product:{
                hasValidation: false
            }
            ,
            productSubscription:{
                hasValidation: false
            }
            ,
            statusChangeSubscriptionCondition:{
                hasValidation: false
            }
            ,
            statusChangeSubscription:{
                hasValidation: false
            }
            ,
            priceChangeSubscription:{
                hasValidation: false
            }
            ,
            productNotification:{
                hasValidation: false
            }
            ,
            priceChangeNotification:{
                hasValidation: false
            }
            ,
            statusChangeNotification:{
                hasValidation: false
            }
            ,
        }
        ,
    };

function User_read(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_User_read(input: any, context: QueryContext): any {
    return false;
}

function User_create(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_User_create(input: any, context: QueryContext): any {
    return false;
}

function User_create_input(input: any, context: QueryContext): boolean {
    return false;
}

function User_update(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_User_update(input: any, context: QueryContext): any {
    return false;
}

function User_postUpdate(context: QueryContext, db: CrudContract): any {
    return { AND: [] };
}

function $check_User_postUpdate(input: any, context: QueryContext): any {
    return true;
}

function User_delete(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_User_delete(input: any, context: QueryContext): any {
    return false;
}

function HttpNetworkErrorData_read(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_HttpNetworkErrorData_read(input: any, context: QueryContext): any {
    return false;
}

function HttpNetworkErrorData_create(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_HttpNetworkErrorData_create(input: any, context: QueryContext): any {
    return false;
}

function HttpNetworkErrorData_create_input(input: any, context: QueryContext): boolean {
    return false;
}

function HttpNetworkErrorData_update(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_HttpNetworkErrorData_update(input: any, context: QueryContext): any {
    return false;
}

function HttpNetworkErrorData_postUpdate(context: QueryContext, db: CrudContract): any {
    return { AND: [] };
}

function $check_HttpNetworkErrorData_postUpdate(input: any, context: QueryContext): any {
    return true;
}

function HttpNetworkErrorData_delete(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_HttpNetworkErrorData_delete(input: any, context: QueryContext): any {
    return false;
}

function HttpSerializationErrorData_read(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_HttpSerializationErrorData_read(input: any, context: QueryContext): any {
    return false;
}

function HttpSerializationErrorData_create(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_HttpSerializationErrorData_create(input: any, context: QueryContext): any {
    return false;
}

function HttpSerializationErrorData_create_input(input: any, context: QueryContext): boolean {
    return false;
}

function HttpSerializationErrorData_update(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_HttpSerializationErrorData_update(input: any, context: QueryContext): any {
    return false;
}

function HttpSerializationErrorData_postUpdate(context: QueryContext, db: CrudContract): any {
    return { AND: [] };
}

function $check_HttpSerializationErrorData_postUpdate(input: any, context: QueryContext): any {
    return true;
}

function HttpSerializationErrorData_delete(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_HttpSerializationErrorData_delete(input: any, context: QueryContext): any {
    return false;
}

function HttpClientErrorData_read(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_HttpClientErrorData_read(input: any, context: QueryContext): any {
    return false;
}

function HttpClientErrorData_create(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_HttpClientErrorData_create(input: any, context: QueryContext): any {
    return false;
}

function HttpClientErrorData_create_input(input: any, context: QueryContext): boolean {
    return false;
}

function HttpClientErrorData_update(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_HttpClientErrorData_update(input: any, context: QueryContext): any {
    return false;
}

function HttpClientErrorData_postUpdate(context: QueryContext, db: CrudContract): any {
    return { AND: [] };
}

function $check_HttpClientErrorData_postUpdate(input: any, context: QueryContext): any {
    return true;
}

function HttpClientErrorData_delete(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_HttpClientErrorData_delete(input: any, context: QueryContext): any {
    return false;
}

function MissingAttributeErrorData_read(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_MissingAttributeErrorData_read(input: any, context: QueryContext): any {
    return false;
}

function MissingAttributeErrorData_create(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_MissingAttributeErrorData_create(input: any, context: QueryContext): any {
    return false;
}

function MissingAttributeErrorData_create_input(input: any, context: QueryContext): boolean {
    return false;
}

function MissingAttributeErrorData_update(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_MissingAttributeErrorData_update(input: any, context: QueryContext): any {
    return false;
}

function MissingAttributeErrorData_postUpdate(context: QueryContext, db: CrudContract): any {
    return { AND: [] };
}

function $check_MissingAttributeErrorData_postUpdate(input: any, context: QueryContext): any {
    return true;
}

function MissingAttributeErrorData_delete(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_MissingAttributeErrorData_delete(input: any, context: QueryContext): any {
    return false;
}

function InvalidAttributeErrorData_read(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_InvalidAttributeErrorData_read(input: any, context: QueryContext): any {
    return false;
}

function InvalidAttributeErrorData_create(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_InvalidAttributeErrorData_create(input: any, context: QueryContext): any {
    return false;
}

function InvalidAttributeErrorData_create_input(input: any, context: QueryContext): boolean {
    return false;
}

function InvalidAttributeErrorData_update(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_InvalidAttributeErrorData_update(input: any, context: QueryContext): any {
    return false;
}

function InvalidAttributeErrorData_postUpdate(context: QueryContext, db: CrudContract): any {
    return { AND: [] };
}

function $check_InvalidAttributeErrorData_postUpdate(input: any, context: QueryContext): any {
    return true;
}

function InvalidAttributeErrorData_delete(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_InvalidAttributeErrorData_delete(input: any, context: QueryContext): any {
    return false;
}

function InvalidTextErrorData_read(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_InvalidTextErrorData_read(input: any, context: QueryContext): any {
    return false;
}

function InvalidTextErrorData_create(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_InvalidTextErrorData_create(input: any, context: QueryContext): any {
    return false;
}

function InvalidTextErrorData_create_input(input: any, context: QueryContext): boolean {
    return false;
}

function InvalidTextErrorData_update(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_InvalidTextErrorData_update(input: any, context: QueryContext): any {
    return false;
}

function InvalidTextErrorData_postUpdate(context: QueryContext, db: CrudContract): any {
    return { AND: [] };
}

function $check_InvalidTextErrorData_postUpdate(input: any, context: QueryContext): any {
    return true;
}

function InvalidTextErrorData_delete(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_InvalidTextErrorData_delete(input: any, context: QueryContext): any {
    return false;
}

function MissingTextErrorData_read(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_MissingTextErrorData_read(input: any, context: QueryContext): any {
    return false;
}

function MissingTextErrorData_create(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_MissingTextErrorData_create(input: any, context: QueryContext): any {
    return false;
}

function MissingTextErrorData_create_input(input: any, context: QueryContext): boolean {
    return false;
}

function MissingTextErrorData_update(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_MissingTextErrorData_update(input: any, context: QueryContext): any {
    return false;
}

function MissingTextErrorData_postUpdate(context: QueryContext, db: CrudContract): any {
    return { AND: [] };
}

function $check_MissingTextErrorData_postUpdate(input: any, context: QueryContext): any {
    return true;
}

function MissingTextErrorData_delete(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_MissingTextErrorData_delete(input: any, context: QueryContext): any {
    return false;
}

function NonUniqueTextErrorData_read(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_NonUniqueTextErrorData_read(input: any, context: QueryContext): any {
    return false;
}

function NonUniqueTextErrorData_create(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_NonUniqueTextErrorData_create(input: any, context: QueryContext): any {
    return false;
}

function NonUniqueTextErrorData_create_input(input: any, context: QueryContext): boolean {
    return false;
}

function NonUniqueTextErrorData_update(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_NonUniqueTextErrorData_update(input: any, context: QueryContext): any {
    return false;
}

function NonUniqueTextErrorData_postUpdate(context: QueryContext, db: CrudContract): any {
    return { AND: [] };
}

function $check_NonUniqueTextErrorData_postUpdate(input: any, context: QueryContext): any {
    return true;
}

function NonUniqueTextErrorData_delete(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_NonUniqueTextErrorData_delete(input: any, context: QueryContext): any {
    return false;
}

function MissingElementErrorData_read(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_MissingElementErrorData_read(input: any, context: QueryContext): any {
    return false;
}

function MissingElementErrorData_create(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_MissingElementErrorData_create(input: any, context: QueryContext): any {
    return false;
}

function MissingElementErrorData_create_input(input: any, context: QueryContext): boolean {
    return false;
}

function MissingElementErrorData_update(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_MissingElementErrorData_update(input: any, context: QueryContext): any {
    return false;
}

function MissingElementErrorData_postUpdate(context: QueryContext, db: CrudContract): any {
    return { AND: [] };
}

function $check_MissingElementErrorData_postUpdate(input: any, context: QueryContext): any {
    return true;
}

function MissingElementErrorData_delete(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_MissingElementErrorData_delete(input: any, context: QueryContext): any {
    return false;
}

function NonUniqueElementErrorData_read(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_NonUniqueElementErrorData_read(input: any, context: QueryContext): any {
    return false;
}

function NonUniqueElementErrorData_create(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_NonUniqueElementErrorData_create(input: any, context: QueryContext): any {
    return false;
}

function NonUniqueElementErrorData_create_input(input: any, context: QueryContext): boolean {
    return false;
}

function NonUniqueElementErrorData_update(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_NonUniqueElementErrorData_update(input: any, context: QueryContext): any {
    return false;
}

function NonUniqueElementErrorData_postUpdate(context: QueryContext, db: CrudContract): any {
    return { AND: [] };
}

function $check_NonUniqueElementErrorData_postUpdate(input: any, context: QueryContext): any {
    return true;
}

function NonUniqueElementErrorData_delete(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_NonUniqueElementErrorData_delete(input: any, context: QueryContext): any {
    return false;
}

function ProductRecordError_read(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_ProductRecordError_read(input: any, context: QueryContext): any {
    return false;
}

function ProductRecordError_create(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_ProductRecordError_create(input: any, context: QueryContext): any {
    return false;
}

function ProductRecordError_create_input(input: any, context: QueryContext): boolean {
    return false;
}

function ProductRecordError_update(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_ProductRecordError_update(input: any, context: QueryContext): any {
    return false;
}

function ProductRecordError_postUpdate(context: QueryContext, db: CrudContract): any {
    return { AND: [] };
}

function $check_ProductRecordError_postUpdate(input: any, context: QueryContext): any {
    return true;
}

function ProductRecordError_delete(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_ProductRecordError_delete(input: any, context: QueryContext): any {
    return false;
}

function ProductRecord_read(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_ProductRecord_read(input: any, context: QueryContext): any {
    return false;
}

function ProductRecord_create(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_ProductRecord_create(input: any, context: QueryContext): any {
    return false;
}

function ProductRecord_create_input(input: any, context: QueryContext): boolean {
    return false;
}

function ProductRecord_update(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_ProductRecord_update(input: any, context: QueryContext): any {
    return false;
}

function ProductRecord_postUpdate(context: QueryContext, db: CrudContract): any {
    return { AND: [] };
}

function $check_ProductRecord_postUpdate(input: any, context: QueryContext): any {
    return true;
}

function ProductRecord_delete(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_ProductRecord_delete(input: any, context: QueryContext): any {
    return false;
}

function Product_read(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_Product_read(input: any, context: QueryContext): any {
    return false;
}

function Product_create(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_Product_create(input: any, context: QueryContext): any {
    return false;
}

function Product_create_input(input: any, context: QueryContext): boolean {
    return false;
}

function Product_update(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_Product_update(input: any, context: QueryContext): any {
    return false;
}

function Product_postUpdate(context: QueryContext, db: CrudContract): any {
    return { AND: [] };
}

function $check_Product_postUpdate(input: any, context: QueryContext): any {
    return true;
}

function Product_delete(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_Product_delete(input: any, context: QueryContext): any {
    return false;
}

function ProductSubscription_read(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_ProductSubscription_read(input: any, context: QueryContext): any {
    return false;
}

function ProductSubscription_create(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_ProductSubscription_create(input: any, context: QueryContext): any {
    return false;
}

function ProductSubscription_create_input(input: any, context: QueryContext): boolean {
    return false;
}

function ProductSubscription_update(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_ProductSubscription_update(input: any, context: QueryContext): any {
    return false;
}

function ProductSubscription_postUpdate(context: QueryContext, db: CrudContract): any {
    return { AND: [] };
}

function $check_ProductSubscription_postUpdate(input: any, context: QueryContext): any {
    return true;
}

function ProductSubscription_delete(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_ProductSubscription_delete(input: any, context: QueryContext): any {
    return false;
}

function StatusChangeSubscriptionCondition_read(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_StatusChangeSubscriptionCondition_read(input: any, context: QueryContext): any {
    return false;
}

function StatusChangeSubscriptionCondition_create(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_StatusChangeSubscriptionCondition_create(input: any, context: QueryContext): any {
    return false;
}

function StatusChangeSubscriptionCondition_create_input(input: any, context: QueryContext): boolean {
    return false;
}

function StatusChangeSubscriptionCondition_update(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_StatusChangeSubscriptionCondition_update(input: any, context: QueryContext): any {
    return false;
}

function StatusChangeSubscriptionCondition_postUpdate(context: QueryContext, db: CrudContract): any {
    return { AND: [] };
}

function $check_StatusChangeSubscriptionCondition_postUpdate(input: any, context: QueryContext): any {
    return true;
}

function StatusChangeSubscriptionCondition_delete(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_StatusChangeSubscriptionCondition_delete(input: any, context: QueryContext): any {
    return false;
}

function StatusChangeSubscription_read(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_StatusChangeSubscription_read(input: any, context: QueryContext): any {
    return false;
}

function StatusChangeSubscription_create(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_StatusChangeSubscription_create(input: any, context: QueryContext): any {
    return false;
}

function StatusChangeSubscription_create_input(input: any, context: QueryContext): boolean {
    return false;
}

function StatusChangeSubscription_update(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_StatusChangeSubscription_update(input: any, context: QueryContext): any {
    return false;
}

function StatusChangeSubscription_postUpdate(context: QueryContext, db: CrudContract): any {
    return { AND: [] };
}

function $check_StatusChangeSubscription_postUpdate(input: any, context: QueryContext): any {
    return true;
}

function StatusChangeSubscription_delete(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_StatusChangeSubscription_delete(input: any, context: QueryContext): any {
    return false;
}

function PriceChangeSubscription_read(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_PriceChangeSubscription_read(input: any, context: QueryContext): any {
    return false;
}

function PriceChangeSubscription_create(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_PriceChangeSubscription_create(input: any, context: QueryContext): any {
    return false;
}

function PriceChangeSubscription_create_input(input: any, context: QueryContext): boolean {
    return false;
}

function PriceChangeSubscription_update(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_PriceChangeSubscription_update(input: any, context: QueryContext): any {
    return false;
}

function PriceChangeSubscription_postUpdate(context: QueryContext, db: CrudContract): any {
    return { AND: [] };
}

function $check_PriceChangeSubscription_postUpdate(input: any, context: QueryContext): any {
    return true;
}

function PriceChangeSubscription_delete(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_PriceChangeSubscription_delete(input: any, context: QueryContext): any {
    return false;
}

function ProductNotification_read(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_ProductNotification_read(input: any, context: QueryContext): any {
    return false;
}

function ProductNotification_create(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_ProductNotification_create(input: any, context: QueryContext): any {
    return false;
}

function ProductNotification_create_input(input: any, context: QueryContext): boolean {
    return false;
}

function ProductNotification_update(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_ProductNotification_update(input: any, context: QueryContext): any {
    return false;
}

function ProductNotification_postUpdate(context: QueryContext, db: CrudContract): any {
    return { AND: [] };
}

function $check_ProductNotification_postUpdate(input: any, context: QueryContext): any {
    return true;
}

function ProductNotification_delete(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_ProductNotification_delete(input: any, context: QueryContext): any {
    return false;
}

function PriceChangeNotification_read(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_PriceChangeNotification_read(input: any, context: QueryContext): any {
    return false;
}

function PriceChangeNotification_create(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_PriceChangeNotification_create(input: any, context: QueryContext): any {
    return false;
}

function PriceChangeNotification_create_input(input: any, context: QueryContext): boolean {
    return false;
}

function PriceChangeNotification_update(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_PriceChangeNotification_update(input: any, context: QueryContext): any {
    return false;
}

function PriceChangeNotification_postUpdate(context: QueryContext, db: CrudContract): any {
    return { AND: [] };
}

function $check_PriceChangeNotification_postUpdate(input: any, context: QueryContext): any {
    return true;
}

function PriceChangeNotification_delete(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_PriceChangeNotification_delete(input: any, context: QueryContext): any {
    return false;
}

function StatusChangeNotification_read(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_StatusChangeNotification_read(input: any, context: QueryContext): any {
    return false;
}

function StatusChangeNotification_create(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_StatusChangeNotification_create(input: any, context: QueryContext): any {
    return false;
}

function StatusChangeNotification_create_input(input: any, context: QueryContext): boolean {
    return false;
}

function StatusChangeNotification_update(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_StatusChangeNotification_update(input: any, context: QueryContext): any {
    return false;
}

function StatusChangeNotification_postUpdate(context: QueryContext, db: CrudContract): any {
    return { AND: [] };
}

function $check_StatusChangeNotification_postUpdate(input: any, context: QueryContext): any {
    return true;
}

function StatusChangeNotification_delete(context: QueryContext, db: CrudContract): any {
    return { OR: [] };
}

function $check_StatusChangeNotification_delete(input: any, context: QueryContext): any {
    return false;
}
export default policy
