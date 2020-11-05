import { apolloClient } from "./../index";
import { CartMutationResponse } from "./../types/api";
import { addAddressBookAccountEntryParams } from './../types/interfaces';
import addressBookQuery from "./addressBookQuery";

const addAddressBookEntry = async (
    input: addAddressBookAccountEntryParams
): Promise<CartMutationResponse> => {
    return await apolloClient.mutate({
        mutation: addressBookQuery,
        variables: {
            input: input
        }
    });
};

export default addAddressBookEntry;
