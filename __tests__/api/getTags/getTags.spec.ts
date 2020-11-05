import getTags from './../../../src/getTags';
import defaultGetTagsQuery from './../../../src/getTags/getTagsQuery';
import { apolloClient } from './../../../src/index';
import { internalShopId } from '../../mocks/mockShop';
import { internalShopIdConstant } from '../../constants';

describe('[api] getTags', () => {
    it('fetch all tags from shop', async () => {
        const givenTagVariables = {
            shopId: internalShopId
        };

        (apolloClient.query as any).mockImplementation(({ variables, query }) => {
            expect(variables).toEqual(givenTagVariables);
            expect(query).toEqual(defaultGetTagsQuery);

            return { data: 'tags' };
        });

        const { data } = await getTags({ shopId: internalShopIdConstant });
        expect(data).toBe('tags');
    })
})