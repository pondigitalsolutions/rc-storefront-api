import { ApolloQueryResult } from "apollo-client";
import { apolloClient } from "./../index";
import { TagResponse, TagSearch } from "./../types/api";
import tagQuery from "./getTagsQuery";

const getTags = async (
    search: TagSearch
): Promise<ApolloQueryResult<TagResponse>> => {
    return await apolloClient.query<TagResponse>({
        query: tagQuery,
        variables: {
            shopId: search.shopId,
            isTopLevel: search.isTopLevel,
            filter: search.filter,
            first: search.perPage
        }
    });
};

export default getTags;
