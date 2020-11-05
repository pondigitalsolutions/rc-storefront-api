import removeCartItems from './../../../src/removeCartItems';
import defaultRemoveCartItemsQuery from './../../../src/removeCartItems/removeCartItemsQuery';
import { apolloClient } from './../../../src/index';
import { mockCartId, mockCartToken, mockRemovedCartItemIds } from '../../mocks/mockCart';
import { cartIdConstant, cartTokenConstant, removedCartItemIdConstant } from '../../constants';

describe('[api] removeCartItems', () => {
    it('remove items from existing cart', async () => {
        const givenCartVariables = {
            input: {
                cartId: mockCartId,
                cartToken: mockCartToken,
                cartItemIds: mockRemovedCartItemIds
            }
        };

        (apolloClient.mutate as any).mockImplementation(({ variables, mutation }) => {
            expect(variables).toEqual(givenCartVariables);
            expect(mutation).toEqual(defaultRemoveCartItemsQuery);

            return { data: 'removed items' };
        });

        const { data } = await removeCartItems({ cartId: cartIdConstant, cartToken: cartTokenConstant, cartItemIds: [removedCartItemIdConstant] });
        expect(data).toBe('removed items');
    })
})