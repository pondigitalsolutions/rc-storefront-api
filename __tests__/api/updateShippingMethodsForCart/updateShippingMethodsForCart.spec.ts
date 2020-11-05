import updateShippingMethodsForCart from './../../../src/updateShippingMethodsForCart';
import defaultUpdateShippingMethodsForCartQuery from './../../../src/updateShippingMethodsForCart/updateShippingMethodsForCartQuery';
import { apolloClient } from './../../../src/index';
import { mockCartId, mockCartToken, mockFulfillmentGroupId } from '../../mocks/mockCart';
import { cartIdConstant, cartTokenConstant, fulfillmentGroupIdConstant } from '../../constants';

describe('[api] updateShippingMethodsForCart', () => {
    it('update shippingmethods for existing cart', async () => {
        const givenShippingVariables = {
            input: {
                cartId: mockCartId,
                cartToken: mockCartToken,
                fulfillmentGroupId: mockFulfillmentGroupId
            }
        };

        (apolloClient.mutate as any).mockImplementation(({ variables, mutation }) => {
            expect(variables).toEqual(givenShippingVariables);
            expect(mutation).toEqual(defaultUpdateShippingMethodsForCartQuery);

            return { data: 'cart updated' };
        });

        const { data } = await updateShippingMethodsForCart({ cartId: cartIdConstant, cartToken: cartTokenConstant, fulfillmentGroupId: fulfillmentGroupIdConstant });
        expect(data).toBe('cart updated');
    })
})