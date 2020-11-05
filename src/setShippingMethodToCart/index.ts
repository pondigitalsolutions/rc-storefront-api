import { apolloClient } from "./../index";
import { CartMutationResponse } from "./../types/api";
import { SelectFulfillmentParams } from './../types/interfaces';
import setShippingMethodToCartQuery from "./setShippingMethodToCartQuery";

const setShippingAddressToCart = async (
    params: SelectFulfillmentParams
): Promise<CartMutationResponse> => {
    return await apolloClient.mutate({
        mutation: setShippingMethodToCartQuery,
        variables: {
            input: params
        }
    });
};

export default setShippingAddressToCart;
