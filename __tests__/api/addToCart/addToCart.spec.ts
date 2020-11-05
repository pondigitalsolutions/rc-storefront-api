import addToCart from './../../../src/addToCart';
import defaultAddToCartQuery from './../../../src/addToCart/addToCartQuery';
import { apolloClient } from './../../../src/index';
import { mockCartId, mockCartToken, mockAddedCartItems } from '../../mocks/mockCart';
import { cartIdConstant, cartTokenConstant, addedCartItemConstant, addToCartConstant } from '../../constants';

describe('[api] addToCart', () => {
    it('add items to cart', async () => {
        const givenCartVariables = {
            input: {
                cartId: mockCartId,
                cartToken: mockCartToken,
                items: mockAddedCartItems
            }
        };

        (apolloClient.mutate as any).mockImplementation(({ variables, mutation }) => {
            expect(variables).toEqual(givenCartVariables);
            expect(mutation).toEqual(defaultAddToCartQuery);

            return { data: addToCartConstant };
        });

        const { data } = await addToCart({ cartId: cartIdConstant, cartToken: cartTokenConstant, items: [addedCartItemConstant] });
        expect(data).toBe('added items to cart');
    })
})