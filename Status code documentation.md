# Status Code 
Status code issued by a server in response to a clients's request mde to the server
- 1xx informational response - the request was received, continuing process
- 2xx success - the request was successfully received, understood, and accepted
   1. 200: This code is used for a successful request.
   2. 201: For a successful request and data was created.
   3. 204: For empty response.
- 3xx redirection - further action needs to be taken in order to complete the request
- 4xx client errors - the request contains bad syntax or cannot be fulfilled
   1. 400: This is used for Bad Request. If you enter something wrong or you missed some required parameters, then the request would not be understood by the server, and you will get 400 status code.
   2. 401: This is used for Unauthorized Access. If the request authentication failed or the user does not have permissions for the requested operations, then you will get a 401 status code.
   3. 403: This is for Forbidden or Access Denied.
   4. 404: This will come if the Data Not Found.
   5. 405: This will come if the method not allowed or if the requested method is not supported.
- 5xx server errors - the server failed to fulfil an apparently valid request
   1. 500: This code is used for Internal Server Error.
   2. 503: And this code is used for Service Unavailable.