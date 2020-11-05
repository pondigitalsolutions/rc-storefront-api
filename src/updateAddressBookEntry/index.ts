import { apolloClient } from "./../index";
import { UserMutationResponse } from "./../types/api";
import { UpdateAddressParams } from './../types/interfaces';
import updateAddressMutation from "./updateAddressBookEntryQuery";

const updateAddressBookEntry = async (
    input: UpdateAddressParams
): Promise<UserMutationResponse> => {
    return await apolloClient.mutate({
        mutation: updateAddressMutation,
        variables: {
            input: {
                accountId: input.accountId,
                addressId: input.addressId,
                updates: input.address
            }
        }
    });
};

export default updateAddressBookEntry;
