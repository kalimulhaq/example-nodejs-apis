# Example NodeJS APIs Using Loopback Framework

To run the project clone this repository 

### Install the dependencies 
``` $npm install ``` 

### run the application
``` Run the application ```

### APIs base url will be
[http://localhost:3000/api/](http://localhost:3000/api/)

### APIs document url will be
[http://localhost:3000/api/](http://localhost:3000/api/)

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

### Sign up

```
POST http://localhost:3000/api/persons/login/

REQUEST
{
	"email":"test@email.com",
	"password":"123456"
}
```