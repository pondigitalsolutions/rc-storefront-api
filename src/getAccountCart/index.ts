import { ApolloQueryResult } from "apollo-client";
import { apolloClient } from "./../index";
import { CartQueryResponse } from "./../types/api";
import { GetAccountCartParams } from './../types/interfaces';
import getAccountCartQuery from "./getAccountCartQuery";

const getAccountCart = async (
    params: GetAccountCartParams
): Promise<ApolloQueryResult<CartQueryResponse>> => {
    return await apolloClient.query<CartQueryResponse>({
        query: getAccountCartQuery,
        variables: {
            accountId: params.accountId,
            shopId: params.shopId
        }
    });
};

export default getAccountCart;
