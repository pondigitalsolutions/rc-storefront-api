/* eslint-disable camelcase */
import { ApolloClientOptions } from 'apollo-client';

export interface ApiConfig {
    uri: string;
    authHost: string;
    projectKey: string;
    clientId: string;
    clientSecret: string;
    scopes: string[];
}

export interface Token {
    accessToken: string;
    expiresAt: number;
    expiresIn: number;
    scope: string;
    tokenType: string;
}

export interface CookiesConfig {
    currencyCookieName: string;
    countryCookieName: string;
    languageCookieName: string;
}

export interface ConfigItem {
    name: string;
    label: string;
}

export interface SetupConfig<TCacheShape> {
    api?: ApiConfig;
    customOptions?: ApolloClientOptions<TCacheShape>;
    currency?: string;
    locale?: string;
    country?: string;
    countries?: ConfigItem[];
    currencies?: ConfigItem[];
    locales?: ConfigItem[];
    cookies?: CookiesConfig;
}

export interface CustomerCredentials {
    username: string;
    password: string;
}
