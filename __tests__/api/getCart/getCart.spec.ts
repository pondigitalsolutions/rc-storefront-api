import getCart from './../../../src/getCart';
import defaultGetCartQuery from './../../../src/getCart/getCartQuery';
import { mockCart, mockCartId, mockCartToken } from './../../mocks/mockCart';
import { apolloClient } from './../../../src/index';
import { cartIdConstant, cartTokenConstant } from '../../constants';

describe('[api] getCart', () => {
    it('fetch current cart by id and token', async () => {
        const givenCartVariables = {
            cartId: mockCartId,
            cartToken: mockCartToken
        };

        (apolloClient.query as any).mockImplementation(({ variables, query }) => {
            expect(variables).toEqual(givenCartVariables);
            expect(query).toEqual(defaultGetCartQuery);

            return { data: mockCart };
        });

        const { data } = await getCart({ cartId: cartIdConstant, token: cartTokenConstant });
        expect(data).toBe(mockCart);
    })
})