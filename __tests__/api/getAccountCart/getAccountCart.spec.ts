import getAccountCart from './../../../src/getAccountCart';
import defaultGetAccountCartQuery from './../../../src/getAccountCart/getAccountCartQuery';
import { internalShopId } from './../../mocks/mockShop';
import { mockAccountId } from './../../mocks/mockAccount';
import { mockAccountCart } from './../../mocks/mockCart';
import { apolloClient } from './../../../src/index';
import { accountIdConstant, internalShopIdConstant } from '../../constants';

describe('[api] getAccountCart', () => {
    it('fetch current cart for account', async () => {
        const givenAccountVariables = {
            accountId: mockAccountId,
            shopId: internalShopId
        };

        (apolloClient.query as any).mockImplementation(({ variables, query }) => {
            expect(variables).toEqual(givenAccountVariables);
            expect(query).toEqual(defaultGetAccountCartQuery);

            return { data: mockAccountCart };
        });

        const { data } = await getAccountCart({ accountId: accountIdConstant, shopId: internalShopIdConstant });
        expect(data).toBe(mockAccountCart);
    })
})