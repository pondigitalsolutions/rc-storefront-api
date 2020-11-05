import { apolloClient } from "./../index";
import { CartMutationResponse } from "./../types/api";
import { UpdateFulfillmentParams } from './../types/interfaces';
import updateShippingMethodsForCartQuery from "./updateShippingMethodsForCartQuery";

const setShippingAddressToCart = async (
    params: UpdateFulfillmentParams
): Promise<CartMutationResponse> => {
    return await apolloClient.mutate({
        mutation: updateShippingMethodsForCartQuery,
        variables: {
            input: params
        }
    });
};

export default setShippingAddressToCart;
