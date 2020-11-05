import updateAccount from './../../../src/updateAccount';
import defaultUpdateAccountQuery from './../../../src/updateAccount/updateAccountQuery';
import { apolloClient } from './../../../src/index';
import { mockAccountId } from '../../mocks/mockAccount';
import { accountIdConstant, updateAccountConstant } from '../../constants';

describe('[api] updateAccount', () => {
    it('update account details', async () => {
        const givenAccountVariables = {
            input: {
                accountId: mockAccountId,
                firstName: 'Test',
                lastName: 'Account'
            }
        };

        (apolloClient.mutate as any).mockImplementation(({ variables, mutation }) => {
            expect(variables).toEqual(givenAccountVariables);
            expect(mutation).toEqual(defaultUpdateAccountQuery);

            return { data: updateAccountConstant };
        });

        const { data } = await updateAccount({ accountId: accountIdConstant, firstName: 'Test', lastName: 'Account' });
        expect(data).toBe('account updated');
    })
})