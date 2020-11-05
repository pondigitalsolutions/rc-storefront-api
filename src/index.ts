import {
    ApolloClient,
    ApolloLink,
    InMemoryCache,
    HttpLink
} from "apollo-boost";
import { SetupConfig, ApiConfig } from "./types/setup";
import fetch from "isomorphic-fetch";
import getCatalogItems from "./getCatalogItems";
import getCatalogItem from "./getCatalogItem";
import getPrimaryShopId from "./getPrimaryShopId";
import getTags from "./getTags";
import getCart from "./getCart";
import getAccountCart from "./getAccountCart";
import createCart from "./createCart";
import addToCart from "./addToCart";
import updateCartItem from "./updateCartItem";
import removeCartItems from "./removeCartItems";
import placeOrder from "./placeOrder";
import getAccount from "./getAccount";
import addCoupon from "./addCoupon";
import setShippingAddressToCart from "./setShippingAddressToCart";
import setShippingMethodToCart from "./setShippingMethodToCart";
import updateShippingMethodsForCart from "./updateShippingMethodsForCart";
import updateAccount from "./updateAccount";
import getOrdersByAccountId from "./getOrdersByAccountId";
import addAddressBookEntry from "./addAddressBookEntry";
import updateAddressBookEntry from "./updateAddressBookEntry";
import Cookie from "js-cookie";

// Constants as fallback values
const currencyFallbackCookie = "vsf-currency";
const countryFallbackCookie = "vsf-country";
const languageFallbackCookie = "vsf-locale";


let apolloClient: ApolloClient<any> = null;
let locale = "en";
let currency = "";
let country = "";
let countries = [];
let currencies = [];
let locales = [];
let api: ApiConfig = null;
let cookies = {
    currencyCookieName: currencyFallbackCookie,
    countryCookieName: countryFallbackCookie,
    languageCookieName: languageFallbackCookie
};
const fetchCachePolicy = "no-cache";

const authLink = new ApolloLink((operation, forward) => {
    // Retrieve the authorization token from local storage.
    let token = Cookie.get("auth._token.hydra");

    if (token) {
        token = token.replace("Bearer ", "");

        // Use the setContext method to set the HTTP headers.
        operation.setContext({
            headers: {
                Authorization: token ? `${token}` : ""
            }
        });
    }

    // Call the next link in the middleware chain.
    return forward(operation);
});

// Returns an ApolloClient to work with
const setup = <TCacheShape>(
    setupConfig: SetupConfig<TCacheShape>
): ApolloClient<TCacheShape> => {
    api = setupConfig.api || api;
    locale = setupConfig.locale || locale;
    currency = setupConfig.currency || currency;
    country = setupConfig.country || country;
    countries = setupConfig.countries || countries;
    currencies = setupConfig.currencies || currencies;
    locales = setupConfig.locales || locales;
    cookies = setupConfig.cookies || cookies;

    const httpLink = new HttpLink({ uri: api.uri, fetch });

    apolloClient = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
        defaultOptions: {
            query: {
                fetchPolicy: fetchCachePolicy
            },
            mutate: {
                fetchPolicy: fetchCachePolicy
            }
        },
        ...setupConfig.customOptions
    });

    return apolloClient;
};

export {
    apolloClient,
    fetchCachePolicy,
    api,
    setup,
    locale,
    locales,
    country,
    currency,
    countries,
    currencies,
    cookies,
    addAddressBookEntry,
    addCoupon,
    addToCart,
    createCart,
    getAccount,
    getAccountCart,
    getCart,
    getCatalogItem,
    getCatalogItems,
    getOrdersByAccountId,
    getPrimaryShopId,
    getTags,
    placeOrder,
    removeCartItems,
    setShippingAddressToCart,
    setShippingMethodToCart,
    updateAccount,
    updateAddressBookEntry,
    updateCartItem,
    updateShippingMethodsForCart

};
