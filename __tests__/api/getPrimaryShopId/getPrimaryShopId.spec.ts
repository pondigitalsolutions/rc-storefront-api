import getPrimaryShopId from './../../../src/getPrimaryShopId';
import defaultGetPrimaryShopIdQuery from './../../../src/getPrimaryShopId/getPrimaryShopIdQuery';
import { primaryShopId } from './../../mocks/mockShop';
import { apolloClient } from './../../../src/index';

describe('[api] getPrimaryShopId', () => {
    it('fetch primaryshopid', async () => {
        (apolloClient.query as any).mockImplementation(({ variables, query }) => {
            expect(variables).toEqual(undefined);
            expect(query).toEqual(defaultGetPrimaryShopIdQuery);

            return { data: primaryShopId };
        });

        const { data } = await getPrimaryShopId();
        expect(data).toBe(primaryShopId);
    })
})