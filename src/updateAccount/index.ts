import { apolloClient } from "./../index";
import { UserMutationResponse } from "./../types/api";
import { UpdateAccountParams } from './../types/interfaces';
import updateAccountQuery from "./updateAccountQuery";

const updateAccount = async (
    input: UpdateAccountParams
): Promise<UserMutationResponse> => {
    return await apolloClient.mutate({
        mutation: updateAccountQuery,
        variables: {
            input: {
                accountId: input.accountId,
                firstName: input.firstName,
                lastName: input.lastName
            }
        }
    });
};

export default updateAccount;
