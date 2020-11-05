import setShippingAddressToCart from './../../../src/setShippingAddressToCart';
import defaultSetShippingAddressToCartQuery from './../../../src/setShippingAddressToCart/setShippingAddressToCartQuery';
import { apolloClient } from './../../../src/index';
import { mockShippingAddress } from '../../mocks/mockAccount';
import { mockCartToken, mockCartId } from '../../mocks/mockCart';
import { cartIdConstant, cartTokenConstant, addShippingConstant } from '../../constants';

describe('[api] setShippingAddressToCart', () => {
    it('add shippingaddress to existing cart', async () => {
        const givenShippingVariables = {
            input: {
                cartId: mockCartId,
                cartToken: mockCartToken,
                address: mockShippingAddress
            }
        };

        (apolloClient.mutate as any).mockImplementation(({ variables, mutation }) => {
            expect(variables).toEqual(givenShippingVariables);
            expect(mutation).toEqual(defaultSetShippingAddressToCartQuery);

            return { data: addShippingConstant };
        });

        const { data } = await setShippingAddressToCart({
            cartId: cartIdConstant, cartToken: cartTokenConstant, address: {
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
        });
        expect(data).toBe('added address');
    })
})