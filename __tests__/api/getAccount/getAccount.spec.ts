import getAccount from './../../../src/getAccount';
import defaultGetAccountQuery from './../../../src/getAccount/getUserQuery';
import { mockAccount, mockAccountId } from './../../mocks/mockAccount';
import { apolloClient } from './../../../src/index';
import { accountIdConstant } from '../../constants';

describe('[api] getAccount', () => {
    it('fetch account by id', async () => {
        const givenAccountVariables = {
            id: mockAccountId
        };

        (apolloClient.query as any).mockImplementation(({ variables, query }) => {
            expect(variables).toEqual(givenAccountVariables);
            expect(query).toEqual(defaultGetAccountQuery);

            return { data: mockAccount };
        });

        const { data } = await getAccount({ accountId: accountIdConstant });
        expect(data).toBe(mockAccount);
    })
})