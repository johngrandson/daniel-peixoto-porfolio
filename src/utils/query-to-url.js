import queryString from 'query-string';

const queryToUrl = (search) => `?${queryString.stringify(search, { encode: false })}`;

const queryToObject = (url) => queryString.parse(url);

export { queryToUrl, queryToObject };
