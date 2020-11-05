import { setup } from '../src/index';

jest.mock('apollo-client');

setup({
    api: {} as any,
    locale: 'en',
    currency: 'EUR',
    country: 'NLD',
    cookies: {
        currencyCookieName: 'test-vsf-currency',
        countryCookieName: 'test-vsf-country',
        languageCookieName: 'test-vsf-language'
    }
});
