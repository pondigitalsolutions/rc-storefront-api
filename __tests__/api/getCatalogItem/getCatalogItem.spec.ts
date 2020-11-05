import getCatalogItem from './../../../src/getCatalogItem';
import defaultGetCatalogItemQuery from './../../../src/getCatalogItem/catalogItemQuery';
import { mockCatalogItems } from './../../mocks/mockCatalogItems';
import { opaqueShopId } from './../../mocks/mockShop';
import { apolloClient } from './../../../src/index';
import { opaqueShopIdConstant } from '../../constants';

describe('[api] getCatalogItem', () => {
    it('fetch product by slugOrId', async () => {
        const givenCatalogVariables = {
            shopId: opaqueShopId,
            slugOrId: mockCatalogItems[0].product.slug
        };

        (apolloClient.query as any).mockImplementation(({ variables, query }) => {
            expect(variables).toEqual(givenCatalogVariables);
            expect(query).toEqual(defaultGetCatalogItemQuery);

            return { data: mockCatalogItems[0] };
        });

        const { data } = await getCatalogItem({ shopId: opaqueShopIdConstant, slugOrId: 'fake-product' });
        expect(data).toBe(mockCatalogItems[0]);
    })
})