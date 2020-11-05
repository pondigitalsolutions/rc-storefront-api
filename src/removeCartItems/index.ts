import { apolloClient } from './../index';
import { CartMutationResponse } from './../types/api';
import { RemoveCartItemParams } from './../types/interfaces';
import removeFromCartQuery from './removeCartItemsQuery';

const removeCartItems = async (input: RemoveCartItemParams): Promise<CartMutationResponse> => {
    return await apolloClient.mutate({
        mutation: removeFromCartQuery,
        variables: {
            input: {
                cartId: input.cartId,
                cartToken: input.cartToken,
                clientMutationId: input.clientMutationId,
                cartItemIds: input.cartItemIds
            }
        }
    });

}

export default removeCartItems;
