import { internalShopId } from './mockShop';

const createdAt = new Date("2018-04-16T15:34:28.043Z");
const updatedAt = new Date("2018-04-17T15:34:28.043Z");

export const mockAccountId = '38zdpjxzcNX5owy8n';
export const mockAddressId = '2cScofHywKdi5Z286';

export const mockAccount = {
    _id: mockAccountId,
    acceptsMarketing: false,
    createdAt: createdAt,
    emails: [
        {
            address: 'test@jest.com',
            verified: false,
            provides: 'default'
        }
    ],
    groups: [],
    name: null,
    profile: {},
    shopId: null,
    state: 'new',
    updatedAt: updatedAt,
    userId: mockAccountId
}

export const mockGroups = [
    {
        _id: '',
        name: 'owner',
        slug: 'owner',
        createdAt: createdAt,
        createdBy: null,
        shopId: internalShopId,
        permissions: []
    }
];

export const mockAddressBookEntry = {
    address1: 'Test',
    city: 'Amsterdam',
    country: 'NLD',
    fullName: 'Test Account',
    isCommercial: false,
    phone: '0201234567',
    postal: '1234AB',
    region: 'NH'
};

export const mockShippingAddress = {
    address1: 'Test',
    city: 'Amsterdam',
    country: 'NLD',
    fullName: 'Test Account',
    phone: '0201234567',
    postal: '1234AB',
    region: 'NH',
    firstName: 'Test',
    lastName: 'Account',
    isBillingDefault: false,
    isShippingDefault: false,
    address2: '',
    company: ''
}