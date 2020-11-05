import createCart from './../../../src/createCart';
import defaultCreateCartQuery from './../../../src/createCart/createCartQuery';
import { apolloClient } from './../../../src/index';
import { internalShopId } from '../../mocks/mockShop';
import { mockAddedCartItems } from '../../mocks/mockCart';
import { internalShopIdConstant, addedCartItemConstant, createCartConstant } from '../../constants';

describe('[api] createCart', () => {
    it('create new cart', async () => {
        const givenCartVariables = {
            input: {
                shopId: internalShopId,
                items: mockAddedCartItems,
                clientMutationId: undefined
            }
        };

        (apolloClient.mutate as any).mockImplementation(({ variables, mutation }) => {
            expect(variables).toEqual(givenCartVariables);
            expect(mutation).toEqual(defaultCreateCartQuery);

            return { data: createCartConstant };
        });

        const { data } = await createCart({ items: [addedCartItemConstant], shopId: internalShopIdConstant });
        expect(data).toBe('created cart');
    })
})