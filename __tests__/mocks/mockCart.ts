import { internalShopId } from './mockShop';
import { mockAccountId } from './mockAccount';

const createdAt = new Date("2018-04-16T15:34:28.043Z");
const addedAt = new Date("2018-04-16T15:38:28.043Z");
const updatedAt = new Date("2018-04-17T15:34:28.043Z");

export const mockCartItemId = 'RYnq8K2TGen2RtFre';
export const mockCartId = '48B33byaN52dCbSxx';
export const mockCartToken = 'E9jhbAE9ZKIowo7pKJQPm7hlloHspU2ETR5jX2k5seE=';
export const mockFulfillmentGroupId = 'yvTFh9uxusCLcNE3o';
export const mockFulfillmentMethodId = 'bm7BxCHMji234aWT7';
export const mockDiscountCode = 'WELCOME';

export const mockAddedCartItems = [
    { quantity: 1, cartItemId: "d8X4wBvmH4EwnntPR" }
];
export const mockRemovedCartItemIds = [
    "d8X4wBvmH4EwnntPR"
];

export const mockCartItems = [
    {
        _id: mockCartItemId,
        attributes: [],
        compareAtPrice: {},
        isTaxable: true,
        metafields: null,
        optionTitle: 'Optiontitle',
        parcel: null,
        price: {
            amount: 5.44,
            currencyCode: 'EUR'
        },
        priceWhenAdded: {
            amount: 5.44,
            currencyCode: 'EUR'
        },
        productId: 'd8X4wBvmH4EwnntPR',
        productSlug: 'test1234test',
        productVendor: 'Reaction Commerce',
        productType: 'product-simple',
        productTagIds: [],
        quantity: 100,
        shopId: internalShopId,
        subtotal: {
            amount: 544,
            currencyCode: 'EUR'
        },
        taxCode: 'RC_TAX',
        title: 'Test product',
        updatedAt: updatedAt,
        variantId: '4pdiBuZupgPxS4rvv',
        variantTitle: 'Test variant',
        addedAt: addedAt,
        createdAt: createdAt
    }
];

export const mockCartShipping = [
    {
        _id: 'ZEMhqpNk8whFDkPnt',
        itemIds: [mockCartItemId],
        shopId: internalShopId,
        type: 'shipping'
    }
];

export const mockAccountCart = {
    _id: mockCartId,
    accountId: mockAccountId,
    anonymousAccessToken: null,
    currencyCode: 'EUR',
    createdAt: createdAt,
    items: mockCartItems,
    shopId: internalShopId,
    updatedAt: updatedAt,
    workflow: {
        status: 'new'
    },
    referenceId: 'oEaobJypytCQBXYEt',
    shipping: mockCartShipping,
    discount: 0,
    surcharges: [],
    taxSummary: null
}

export const mockCart = {
    _id: mockCartId,
    accountId: null,
    anonymousAccessToken: mockCartToken,
    currencyCode: 'EUR',
    createdAt: createdAt,
    items: mockCartItems,
    shopId: internalShopId,
    updatedAt: updatedAt,
    workflow: {
        status: 'new'
    },
    referenceId: 'oEaobJypytCQBXYEt',
    shipping: mockCartShipping,
    discount: 0,
    surcharges: [],
    taxSummary: null
}