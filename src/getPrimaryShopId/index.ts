import { ApolloQueryResult } from 'apollo-client';
import { apolloClient } from './../index';
import query from './getPrimaryShopIdQuery';

const getPrimaryShopId = async () => {
    return await apolloClient.query<any>({
        query: query
    });
}

export default getPrimaryShopId;