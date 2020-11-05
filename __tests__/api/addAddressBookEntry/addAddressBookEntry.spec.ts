import addAddressBookEntry from './../../../src/addAddressBookEntry';
import defaultAddAddressQuery from './../../../src/addAddressBookEntry/addressBookQuery';
import { apolloClient } from './../../../src/index';
import { mockAccountId, mockAddressBookEntry } from '../../mocks/mockAccount';
import { accountIdConstant, addAddressConstant } from '../../constants';

describe('[api] addAddressBookEntry', () => {
    it('add address to addressbook', async () => {
        const givenAddressVariables = {
            input: {
                accountId: mockAccountId,
                address: mockAddressBookEntry
            }
        };

        (apolloClient.mutate as any).mockImplementation(({ variables, mutation }) => {
            expect(variables).toEqual(givenAddressVariables);
            expect(mutation).toEqual(defaultAddAddressQuery);

            return { data: addAddressConstant };
        });

        const { data } = await addAddressBookEntry({
            accountId: accountIdConstant,
            address: {
                address1: 'Test',
                city: 'Amsterdam',
                country: 'NLD',
                fullName: 'Test Account',
                isCommercial: false,
                phone: '0201234567',
                postal: '1234AB',
                region: 'NH'
            }
        });

        expect(data).toBe('added address');
    })
})