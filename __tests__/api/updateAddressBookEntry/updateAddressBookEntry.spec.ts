import updateAddressBookEntry from './../../../src/updateAddressBookEntry';
import defaultUpdateAddressBookEntryQuery from './../../../src/updateAddressBookEntry/updateAddressBookEntryQuery';
import { apolloClient } from './../../../src/index';
import { mockAccountId, mockShippingAddress, mockAddressId } from '../../mocks/mockAccount';
import { accountIdConstant } from '../../constants';

describe('[api] updateAddressBookEntry', () => {
    it('update existing address in addressbook', async () => {
        const givenAccountVariables = {
            input: {
                accountId: mockAccountId,
                addressId: mockAddressId,
                updates: mockShippingAddress
            }
        };

        (apolloClient.mutate as any).mockImplementation(({ variables, mutation }) => {
            expect(variables).toEqual(givenAccountVariables);
            expect(mutation).toEqual(defaultUpdateAddressBookEntryQuery);

            return { data: 'address updated' };
        });

        const { data } = await updateAddressBookEntry({
            accountId: accountIdConstant, addressId: '2cScofHywKdi5Z286', address: {
                address1: 'Test',
                city: 'Amsterdam',
                country: 'NLD',
                fullName: 'Test Account',
                phone: '0201234567',
                postal: '1234AB',
                region: 'NH',
                firstName: 'Test',
                lastName: 'Account',
                isBillingDefault: false,
                isShippingDefault: false,
                address2: '',
                company: ''
            }
        });
        expect(data).toBe('address updated');
    })
})