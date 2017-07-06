# Example NodeJS APIs Using Loopback Framework

To run the project clone this repository 

### Install the dependencies 
``` 
$npm install 
``` 

### run the application
``` 
$node . 
```

### APIs base URL
[http://localhost:3000/api/](http://localhost:3000/api/)

### APIs documentation URL
[http://localhost:3000/explorer/](http://localhost:3000/explorer/)

## Example APIs

### Sign up
```
POST http://localhost:3000/api/persons/

REQUEST
{
	"name":"Full Name",
	"email":"test@email.com",
	"password":"123456"
}
```

### Login
```
POST http://localhost:3000/api/persons/login/

REQUEST
{
	"email":"test@email.com",
	"password":"123456"
}
```