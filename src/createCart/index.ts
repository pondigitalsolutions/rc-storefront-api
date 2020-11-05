import { apolloClient } from './../index';
import { CartMutationResponse } from './../types/api';
import { CreateCartParams } from './../types/interfaces';
import createCartQuery from './createCartQuery';

const createCart = async (input: CreateCartParams): Promise<CartMutationResponse> => {
    return await apolloClient.mutate({
        mutation: createCartQuery,
        variables: {
            input: {
                shopId: input.shopId,
                items: input.items,
                clientMutationId: input.clientMutationId
            }
        }
    });

}

export default createCart;