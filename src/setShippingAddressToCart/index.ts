import { apolloClient } from "./../index";
import { CartMutationResponse } from "./../types/api";
import { SetAddressParams } from './../types/interfaces';
import setShippingAddressQuery from "./setShippingAddressToCartQuery";

const setShippingAddressToCart = async (
    params: SetAddressParams
): Promise<CartMutationResponse> => {
    return await apolloClient.mutate({
        mutation: setShippingAddressQuery,
        variables: {
            input: params
        }
    });
};

export default setShippingAddressToCart;
