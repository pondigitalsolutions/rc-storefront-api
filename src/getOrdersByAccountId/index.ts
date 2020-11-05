import { ApolloQueryResult } from "apollo-client";
import { apolloClient } from "./../index";
import { UserOrderQueryResponse } from "./../types/api";
import { GetOrdersByAccountIdParams } from './../types/interfaces';
import UserOrdersQuery from "./getOrdersByAccountIdQuery";

const getOrdersByAccountId = async (
    params: GetOrdersByAccountIdParams
): Promise<ApolloQueryResult<UserOrderQueryResponse>> => {
    return await apolloClient.query<UserOrderQueryResponse>({
        query: UserOrdersQuery,
        variables: {
            ...params
        }
    });
};

export default getOrdersByAccountId;
