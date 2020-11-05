import updateCartItem from './../../../src/updateCartItem';
import defaultUpdateCartItemQuery from './../../../src/updateCartItem/updateCartItemQuery';
import { apolloClient } from './../../../src/index';
import { mockCartId, mockCartToken, mockAddedCartItems } from '../../mocks/mockCart';

describe('[api] updateCartItem', () => {
    it('update item in existing cart', async () => {
        const givenCartVariables = {
            input: {
                cartId: mockCartId,
                cartToken: mockCartToken,
                items: mockAddedCartItems
            }
        };

        (apolloClient.mutate as any).mockImplementation(({ variables, mutation }) => {
            expect(variables).toEqual(givenCartVariables);
            expect(mutation).toEqual(defaultUpdateCartItemQuery);

            return { data: 'cart updated' };
        });

        const { data } = await updateCartItem({ cartId: '48B33byaN52dCbSxx', cartToken: 'E9jhbAE9ZKIowo7pKJQPm7hlloHspU2ETR5jX2k5seE=', items: [{ quantity: 1, cartItemId: "d8X4wBvmH4EwnntPR" }] });
        expect(data).toBe('cart updated');
    })
})