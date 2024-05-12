**normal flow**
- client send the get request to the server and a function(app.get()) is called and this will return a response.

**Middleware**
- client send the get request to the server through middlware and a function(app.get()) is called and this will return a response.

* EXaple: client sends a request to middleware and this will check the valid credentials/etc. If it is safe then middleware forward the request to function and function will return the respose to the client.

* EXaple: client sends a request to middleware and this will check the valid credentials/etc. If it is not safe then middleware will not forward the request to function. This will directly send the respose to the client.

* We can have multiple middleware in a function

**Global Catches(Error-handling Middleware)**
- We can have a global catch for all the errors.
- We can have multiple routes in a single file.

**Zod**


**Authentication**
- anyone send the request to your backend they can just go to postman and send a request

* dumb way: ask the user to send user and pass in a reqest as headers.

* slightly better way: 
- give the user back a token to signup/signin
- ask the user to send back the token in all future requests.
- when the userlogsout, ask the user to forget the token(or revoke it from the backend)
