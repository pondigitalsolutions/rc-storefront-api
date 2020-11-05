import { ApolloQueryResult } from "apollo-client";
import { apolloClient } from "./../index";
import { ProductResponse, ProductSearch } from "./../types/api";
import searchQuery from "./getCatalogItemsQuery";

const getCatalogItems = async (
    search: ProductSearch
): Promise<ApolloQueryResult<ProductResponse>> => {
    return await apolloClient.query<ProductResponse>({
        query: searchQuery,
        variables: {
            shopId: search.shopId,
            tagIds: search.tagIds,
            filter: search.filter,
            offset: search.offset,
            first: search.first,
            last: search.last,
            before: search.before,
            after: search.after,
            sortOrder: search.sort,
            sortBy: search.sortByField,
            sortByPriceCurrencyCode: search.currencyCode
        }
    });
};

export default getCatalogItems;
