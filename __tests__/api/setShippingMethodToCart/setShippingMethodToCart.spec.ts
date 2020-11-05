import setShippingMethodToCart from './../../../src/setShippingMethodToCart';
import defaultSetShippingMethodToCartQuery from './../../../src/setShippingMethodToCart/setShippingMethodToCartQuery';
import { apolloClient } from './../../../src/index';
import { mockCartToken, mockCartId, mockFulfillmentGroupId, mockFulfillmentMethodId } from '../../mocks/mockCart';
import { cartIdConstant, cartTokenConstant, fulfillmentGroupIdConstant, fulfillmentMethodIdConstant, addShippingMethodConstant } from '../../constants';

describe('[api] setShippingMethodToCart', () => {
    it('add shippingmethod to existing cart', async () => {
        const givenShippingVariables = {
            input: {
                cartId: mockCartId,
                cartToken: mockCartToken,
                fulfillmentGroupId: mockFulfillmentGroupId,
                fulfillmentMethodId: mockFulfillmentMethodId
            }
        };

        (apolloClient.mutate as any).mockImplementation(({ variables, mutation }) => {
            expect(variables).toEqual(givenShippingVariables);
            expect(mutation).toEqual(defaultSetShippingMethodToCartQuery);

            return { data: addShippingMethodConstant };
        });

        const { data } = await setShippingMethodToCart({
            cartId: cartIdConstant,
            cartToken: cartTokenConstant,
            fulfillmentGroupId: fulfillmentGroupIdConstant,
            fulfillmentMethodId: fulfillmentMethodIdConstant
        });
        expect(data).toBe('method selected');
    })
})