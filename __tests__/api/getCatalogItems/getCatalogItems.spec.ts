import getCatalogItems from './../../../src/getCatalogItems';
import defaultGetCatalogItemsQuery from './../../../src/getCatalogItems/getCatalogItemsQuery';
import { mockCatalogItems } from './../../mocks/mockCatalogItems';
import { opaqueShopId } from './../../mocks/mockShop';
import { apolloClient } from './../../../src/index';
import { opaqueShopIdConstant } from '../../constants';

describe('[api] getCatalogItems', () => {
    it('fetch products with default query', async () => {
        const givenCatalogVariables = {
            shopId: opaqueShopId
        };

        (apolloClient.query as any).mockImplementation(({ variables, query }) => {
            expect(variables).toEqual(givenCatalogVariables);
            expect(query).toEqual(defaultGetCatalogItemsQuery);

            return { data: mockCatalogItems };
        });

        const { data } = await getCatalogItems({ shopId: opaqueShopIdConstant });
        expect(data).toBe(mockCatalogItems);
    })
})