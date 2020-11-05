import { apolloClient } from './../index';
import { CartMutationResponse } from './../types/api';
import { UpdateCartItemParams } from './../types/interfaces';
import updateCartQuery from './updateCartItemQuery';

const updateCartItem = async (input: UpdateCartItemParams): Promise<CartMutationResponse> => {
    return await apolloClient.mutate({
        mutation: updateCartQuery,
        variables: {
            input: {
                cartId: input.cartId,
                cartToken: input.cartToken,
                clientMutationId: input.clientMutationId,
                items: input.items
            }
        }
    });

}

export default updateCartItem;