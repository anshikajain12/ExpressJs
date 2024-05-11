
**Four Request**

# Get:
- to get the request using query : http://localhost:3000/?n=10&m=20
- to get the request : http://localhost:3000/

# POST
- to post the request : http://localhost:3000/ and add the json data in the Postman body which  you want to post it
- example: http://localhost:3000/ 
- {
    "isHealthy":true
  }

# PUT
- to put the request : http://localhost:3000/ and add the json data in the Postman body which  you want to undate it
- example: http://localhost:3000/ 
- {
    "isHealthy":true
  }

# DELETE
- to delete the request : http://localhost:3000/
- example: http://localhost:3000/


**Staus Code:**

# 200: Everything went file
**Content:**
```json
{
    "message": "User deleted successfully"
}

# 404: User not found
**Content:**
```json
{
    "message": "User not found"
}

# 401: Unauthorized
**Content:**
```json
{
    "message": "Unauthorized"
}

# 400: Bad request
**Content:**    
```json
{
    "message": "Bad request"
}

# 500: Internal server error
**Content:**
```json 
{
    "message": "Internal server error"
}

# 403: Forbidden
**Content:**
```json
{   
    "message": "Forbidden"
}

# 411: Input were incorrect
**Content:**
```json
{
    "message": "Input were incorrect"
}
