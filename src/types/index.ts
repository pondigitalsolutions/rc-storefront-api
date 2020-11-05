import {
    CatalogItemEdge,
    PageInfo,
    Product,
    TagItemEdge,
    Tag,
    Filter,
    FilterItemEdge,
    CartItemConnection,
    CartItem,
    MetafieldFilter,
    PartnerEdge,
    Partner
} from "./graphql";

export type Wishlist = {};
export type Category = any;
export type CategoryFilter = {};
export type Search = {};

export type User = {
    _id: string;
    addressbook: any;
    userId: string;
    username: string;
    firstName: string;
    lastName: string;
    primaryEmailAddress: string;
};

export type UserOrder = {
    _id: string;
    account: User;
    cartId: string;
    createdAt: any;
    email: string;
    displayStatus: string;
    fulfillmentGroups: FulfillmentGroup;
    referenceId: string;
    status: string;
    totalItemQuantity: number;
    updatedAt: any;
};

export type ProductVariant = {
    totalCount: Number;
    edges: [CatalogItemEdge];
    nodes: [Product];
    pageInfo: PageInfo;
};

export type Tags = {
    totalCount: Number;
    edges: [TagItemEdge];
    nodes: [Tag];
    pageInfo: PageInfo;
};

export type Filters = {
    totalCount: Number;
    edges: [FilterItemEdge];
    nodes: [Filter];
    pageInfo: PageInfo;
};

export type MetafieldFilters = {
    filters: [MetafieldFilter];
};

export type PrimaryShopId = {
    primaryShopId: string;
};

export type CreatedCart = {
    token: string;
    cart: Cart;
};

export type Cart = {
    _id: string;
    createdAt: any;
    updatedAt: any;
    expiresAt: any;
    email: string;
    account: any;
    checkout: any;
    shop: any;
    referenceId: string;
    totalItemQuantity: number;
    items: CartItemConnection;
};

export type PersonalDetails = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

export type ShippingDetails = {
    firstName: string;
    lastName: string;
    address1: string;
    streetNumber: string;
    postal: string;
    city: string;
    country: string;
    phone: string;
    company: string;
};

export type PaymentMethods = {
    name: string;
    displayName: string;
    isEnabled: boolean;
    data: any;
    canRefund: boolean;
    pluginName: string;
};

export type FulfillmentMethod = {
    fulfillmentMethod: {
        _id: string;
        name: string;
        displayName: string;
    };
    handlingPrice: {
        amount: number;
        currency: any;
        displayAmount: string;
    };
    price: {
        amount: number;
        currency: any;
        displayAmount: string;
    };
};

export type FulfillmentAddress = {
    firstName: String;
    lastName: String;
    fullName: String;
    isShippingDefault: boolean;
    address1: String;
    address2: String;
    city: String;
    postal: String;
    phone: String;
    region: String;
};

export type FulfillmentData = {
    shippingAddress: FulfillmentAddress;
};

export type FulfillmentGroup = {
    _id: string;
    availableFulfillmentOptions: FulfillmentMethod[];
    selectedFulfillmentOption: FulfillmentMethod;
    data: FulfillmentData;
    items: CartItem[];
    type: string;
};

export type Order = {
    referenceId: string;
};

export type OrderItem = {
    addedAt: any;
    price: number;
    quantity: number;
    productConfiguration: {
        productId: string;
        productVariantId: string;
    };
};

export type Partners = {
    totalCount: Number;
    edges: [PartnerEdge];
    nodes: [Partner];
    pageInfo: PageInfo;
};

export type Country = {
    code: String;
    name: String;
    currency: String;
};
