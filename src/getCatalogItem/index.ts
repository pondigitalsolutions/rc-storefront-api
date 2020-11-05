import { ApolloQueryResult } from 'apollo-client';
import { apolloClient } from './../index';
import { CatalogItemResponse, CatalogItemSearch } from './../types/api';
import searchQuery from './catalogItemQuery';

const getCatalogItem = async (search: CatalogItemSearch): Promise<ApolloQueryResult<CatalogItemResponse>> => {
    return await apolloClient.query<CatalogItemResponse>({
        query: searchQuery,
        variables: {
            shopId: search.shopId,
            slugOrId: search.slugOrId
        }
    });

}

export default getCatalogItem;
