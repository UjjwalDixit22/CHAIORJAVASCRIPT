// The fetch() method of the Window interface starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

// The promise resolves to the Response object representing the response to your request.

// A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.


// ++++++___________FETCH_____++++++

// fetch creates special queue i.e. microtask queue and it is like more priority than the normal task queue

// response = fetch('something.')
// in two parts one is browser api / node and second is Data(onfulfilled[], onrejected[]) the data is private field
// in browser/node data will go to network req and if it will go ahed regardless of res it will go to onfulfilled[] and if it will fail it will go to onrejected[] so it will passs the fn in the data and it will pass to our global memory to response variable.