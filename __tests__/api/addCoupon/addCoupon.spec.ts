import addCoupon from './../../../src/addCoupon';
import defaultAddCouponQuery from './../../../src/addCoupon/addCouponQuery';
import { apolloClient } from './../../../src/index';
import { mockCartId, mockCartToken, mockDiscountCode } from '../../mocks/mockCart';
import { internalShopId } from '../../mocks/mockShop';
import { internalShopIdConstant, cartTokenConstant, cartIdConstant, discountCodeConstant, couponAddedConstant } from '../../constants';

describe('[api] addAddressBookEntry', () => {
    it('add address to addressbook', async () => {
        const givenAddressVariables = {
            input: {
                cartId: mockCartId,
                shopId: internalShopId,
                token: mockCartToken,
                discountCode: mockDiscountCode
            }
        };

        (apolloClient.mutate as any).mockImplementation(({ variables, mutation }) => {
            expect(variables).toEqual(givenAddressVariables);
            expect(mutation).toEqual(defaultAddCouponQuery);

            return { data: couponAddedConstant };
        });

        const { data } = await addCoupon({
            cartId: cartIdConstant,
            shopId: internalShopIdConstant,
            token: cartTokenConstant,
            discountCode: discountCodeConstant
        });
        expect(data).toBe('added coupon');
    })
})