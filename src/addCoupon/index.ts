import { apolloClient } from "./../index";
import { CartMutationResponse } from "./../types/api";
import { AddCouponParams } from './../types/interfaces';
import addCouponQuery from "./addCouponQuery";

const addToCart = async (input: AddCouponParams): Promise<CartMutationResponse> => {
    return await apolloClient.mutate({
        mutation: addCouponQuery,
        variables: {
            input: {
                cartId: input.cartId,
                token: input.token,
                shopId: input.shopId,
                discountCode: input.discountCode
            }
        }
    });
};

export default addToCart;
