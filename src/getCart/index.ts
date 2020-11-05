import { ApolloQueryResult } from 'apollo-client';
import { apolloClient } from './../index';
import { CartQueryResponse } from './../types/api';
import { GetCartParams } from './../types/interfaces';
import getCartQuery from './getCartQuery';

const getCart = async (params: GetCartParams): Promise<ApolloQueryResult<CartQueryResponse>> => {
    return await apolloClient.query<CartQueryResponse>({
        query: getCartQuery,
        variables: {
            cartId: params.cartId,
            cartToken: params.token
        }
    });

}

export default getCart;
