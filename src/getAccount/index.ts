import { ApolloQueryResult } from "apollo-client";
import { apolloClient } from "./../index";
import { UserQueryResponse } from "./../types/api";
import { GetUserParams } from './../types/interfaces';
import getUserQuery from "./getUserQuery";

const getAccount = async (
    params: GetUserParams
): Promise<ApolloQueryResult<UserQueryResponse>> => {
    return await apolloClient.query<UserQueryResponse>({
        query: getUserQuery,
        variables: {
            id: params.accountId
        }
    });
};

export default getAccount;
