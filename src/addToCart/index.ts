import { apolloClient } from './../index';
import { CartMutationResponse } from './../types/api';
import { AddToCartParams } from './../types/interfaces';
import addToCartQuery from './addToCartQuery';

const addToCart = async (input: AddToCartParams): Promise<CartMutationResponse> => {
    return await apolloClient.mutate({
        mutation: addToCartQuery,
        variables: {
            input: {
                cartId: input.cartId,
                cartToken: input.cartToken,
                items: input.items,
                clientMutationId: input.clientMutationId
            }
        }
    });
}

export default addToCart;