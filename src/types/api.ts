import { ApolloQueryResult } from "apollo-client";
import { FetchResult } from "apollo-link";
import {
    ProductVariant,
    Tags,
    Cart,
    User,
    UserOrder,
    PrimaryShopId,
    PaymentMethods,
    Filters,
    MetafieldFilters,
    Partners,
    Country
} from ".";
import { CatalogProduct, Partner } from "./graphql";

export interface CustomQuery {
    query: string;
    variables: any;
}

export interface BaseSearch {
    customQuery?: CustomQuery;
    limit?: number;
    offset?: number;
    sort?: string[];
    sortByField?: string;
}

export interface ProductFilter {
    fieldname: string;
    value?: string;
    list?: string[];
}

export interface ProductSearch extends BaseSearch {
    shopId: string;
    searchstring?: string;
    filter?: ProductFilter[];
    tagIds?: string[];
    offset?: number;
    first?: number;
    last?: number;
    before?: string;
    after?: string;
    currencyCode?: string;
}

export interface TagSearch extends BaseSearch {
    shopId: string;
    isTopLevel?: boolean;
    filter?: string;
    perPage?: number;
    page?: number;
    sort?: any;
    term?: any;
    filters?: any;
}

export interface CatalogItemSearch {
    shopId: string;
    slugOrId: string;
}

export interface BaseQueryParam {
    shopId: string;
}

export type QueryResponse<K extends string, V> = ApolloQueryResult<
    Record<K, V>
>;
export type MutationResponse<K extends string, V> = FetchResult<Record<K, V>>;
export type ProductResponse = QueryResponse<"catalogItems", ProductVariant>;
export type CatalogItemResponse = QueryResponse<
    "catalogItemProduct",
    CatalogProduct
>;
export type TagResponse = QueryResponse<"tags", Tags>;
export type CartMutationResponse = MutationResponse<"cart", Cart>;
export type CartQueryResponse = QueryResponse<"cart", Cart>;
export type PrimaryShopIdQueryResponse = QueryResponse<
    "primaryShopId",
    PrimaryShopId
>;
export type PaymentMethodsResponse = QueryResponse<
    "availablePaymentMethods",
    PaymentMethods
>;
export type FiltersQueryResponse = QueryResponse<"getFilters", Filters>;
export type MetafieldFiltersQueryResponse = QueryResponse<
    "metafieldFilters",
    MetafieldFilters
>;
export type PartnersQueryResponse = QueryResponse<"getPartners", Partners>;
export type PartnerResponse = QueryResponse<"findPartner", Partner>;
export type UserQueryResponse = QueryResponse<"account", User>;
export type UserMutationResponse = MutationResponse<"account", User>;
export type UserOrderQueryResponse = QueryResponse<
    "ordersByAccountId",
    UserOrder
>;
export type CountriesResponse = MutationResponse<"getCountries", Country>;