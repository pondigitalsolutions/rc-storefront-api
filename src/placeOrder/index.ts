import { apolloClient } from "./../index";
import { CartMutationResponse } from "./../types/api";
import { PlaceOrderParams } from './../types/interfaces';
import placeOrderQuery from "./placeOrderQuery";

const placeOrder = async (input: PlaceOrderParams): Promise<CartMutationResponse> => {
    return await apolloClient.mutate({
        mutation: placeOrderQuery,
        variables: {
            input: {
                order: input.order,
                payments: input.payments
            }
        }
    });
};

export default placeOrder;
