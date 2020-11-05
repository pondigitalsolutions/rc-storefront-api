import placeOrder from './../../../src/placeOrder';
import defaultPlaceOrderQuery from './../../../src/placeOrder/placeOrderQuery';
import { apolloClient } from './../../../src/index';
import { internalShopId } from '../../mocks/mockShop';

describe('[api] placeOrder', () => {
    it('place new order', async () => {
        const givenOrderVariables = {
            input: {
                order: {},
                payments: []
            }
        };

        (apolloClient.mutate as any).mockImplementation(({ variables, mutation }) => {
            expect(variables).toEqual(givenOrderVariables);
            expect(mutation).toEqual(defaultPlaceOrderQuery);

            return { data: 'placed order' };
        });

        const { data } = await placeOrder({ order: {}, payments: [] });
        expect(data).toBe('placed order');
    })
})