export interface addAddressBookAccountEntryParams {
    accountId: string;
    address: any;
}
export interface AddCouponParams {
    cartId: string;
    token: string;
    shopId: string;
    discountCode: string;
}

export interface AddToCartParams {
    cartId: string;
    cartToken: string;
    clientMutationId?: string;
    items: [CartItem];
}

export interface AvailablePaymentMethodsParams {
    shopId: string;
}

export interface CreateCartParams {
    shopId: string;
    clientMutationId?: string;
    items: [CartItem];
}

export interface GetUserParams {
    accountId: string;
}

export interface GetAccountCartParams {
    accountId: string;
    shopId: string;
}

export interface GetCartParams {
    cartId: string;
    token: string;
}

export interface GetOrdersByAccountIdParams {
    accountId: string;
    language: string;
    shopIds: [string];
}

export interface PlaceOrderParams {
    order: any;
    payments: any;
}

export interface RemoveCartItemParams {
    cartId: string;
    cartToken: string;
    clientMutationId?: string;
    cartItemIds: string[];
}

export interface SetAddressParams {
    cartId: string;
    cartToken: string;
    address: {
        address1: string;
        address2: string;
        city: string;
        company: string;
        country: string;
        firstName: string;
        lastName: string;
        postal: string;
        phone: string;
        isShippingDefault: boolean;
        isBillingDefault: boolean;
        region: string;
        fullName: string;
    };
}

export interface SelectFulfillmentParams {
    cartId: string;
    cartToken: string;
    fulfillmentGroupId: string;
    fulfillmentMethodId: string;
}

export interface UpdateAccountParams {
    accountId: string;
    firstName: string;
    lastName: string;
}

export interface UpdateAddressParams {
    accountId: string;
    addressId: string;
    address: {
        address1: string;
        address2: string;
        city: string;
        company: string;
        country: string;
        firstName: string;
        lastName: string;
        postal: string;
        phone: string;
        isShippingDefault: boolean;
        isBillingDefault: boolean;
        region: string;
        fullName: string;
    };
}

export interface UpdateCartItemParams {
    cartId: string;
    cartToken: string;
    clientMutationId?: string;
    items: [CartItem];
}

export interface CartItem {
    quantity: number;
    cartItemId: string;
}

export interface UpdateFulfillmentParams {
    cartId: string;
    cartToken: string;
    fulfillmentGroupId: string;
}
