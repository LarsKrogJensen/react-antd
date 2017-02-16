// @flow
export const SEARCH_INIT = 'SEARCH_INIT';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILED = 'SEARCH_FAILED';

export type SearchSuccessAction =
{
    type: string;
    searchResult: Array<SearchItem>;
}

