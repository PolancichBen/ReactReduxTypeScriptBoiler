export const parseQueryString = (queryString: string) => {
  var query: Record<string, string> = {};
  var pairs = (
    queryString[0] === '?' ? queryString.substring(1) : queryString
  ).split('&');
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
};
