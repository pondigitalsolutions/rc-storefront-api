import getOrdersByAccountId from './../../../src/getOrdersByAccountId';
import defaultGetOrdersByAccountIdQuery from './../../../src/getOrdersByAccountId/getOrdersByAccountIdQuery';
import { apolloClient } from './../../../src/index';
import { internalShopId } from '../../mocks/mockShop';
import { mockAccountId } from '../../mocks/mockAccount';
import { accountIdConstant, internalShopIdConstant } from '../../constants';

describe('[api] getOrdersByAccountId', () => {
    it('fetch orders from account', async () => {
        const givenOrderVariables = {
            accountId: mockAccountId,
            shopIds: [internalShopId],
            language: 'en'
        };

        (apolloClient.query as any).mockImplementation(({ variables, query }) => {
            expect(variables).toEqual(givenOrderVariables);
            expect(query).toEqual(defaultGetOrdersByAccountIdQuery);

            return { data: 'orders' };
        });

        const { data } = await getOrdersByAccountId({ accountId: accountIdConstant, shopIds: [internalShopIdConstant], language: 'en' });
        expect(data).toBe('orders');
    })
})