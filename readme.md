# Login - Java spring boot + react + localisation

Coding challenge - making a login application.

Trying out Java spring boot + MongoDB + React for the login application.

<!-- Visit the app here: https://login-mern-jwt.herokuapp.com/ -->

```
Accounts for user to test:

Account 1 (User)
username: normalusername
password: normalusername

Account 2 (Manager)
username: specialusername
password: specialusername
```
### Technology Used

Technologies used to build this project.

```
- Java
- Spring boot + maven
- MongoDB
- ReactJS

```

### User Stories

```
To use the app, user should:

- Create an account (default role is user)
- Log in
- See a welcome screen (name,username,role)
- If user's role is manager, they can see another webpage in welcome screen
- Logout button to link back to login screen
- Localisation included - supports multiple languages

```

---

## Planning and Development Process

Models:

-Users: name (string), username (string), password (string), role (string)

RESTful APIs
- Post (create user)
- Post (login)
- Get (logout)

Pages needed:
- Main login
- Create account
- Welcome page

3 buttons / selections for creating account, logging out and selecting language

```
Timeline

- 14 Dec: Dabbled a little with Java backend + spring boot.
Decided to try out a login application with MERN first before moving on to Java.

- 16 Dec: Work on Java backend.
Quick course on getting up to speed with Java - reading up, watching videos, etc.

- 17 Dec: Figuring out how springboot works.
Decided to add comments to improve understanding.

- 18 Dec: Added comments to code.
JWT adds a lot more complexity to Springboot code.
Decided to try another way, use Java springboot backend with mongoDB + CRUD.
Then I utilise reactJS frontend for hashing PW + JWT. Quite confident I can do it.

```
---

## References

Had to do some research to better understand the topic and here are some websites I visited:

Spring boot + mongo + jwt https://www.bezkoder.com/spring-boot-jwt-auth-mongodb/#Spring_Boot_JWT_Authentication_with_MongoDB_example  
Above website's github https://github.com/bezkoder/spring-boot-security-jwt-auth-mongodb  
Spring boot + mongodb crud https://www.javaguides.net/2019/12/spring-boot-mongodb-crud-example-tutorial.html  
MongoDB + springboot https://www.mongodb.com/compatibility/spring-boot  
Running springboot in Eclipse https://medium.com/eat-sleep-code-repeat/running-your-first-spring-boot-project-in-eclipse-ide-4fbc699d44dd  
Springboot + Mongo + CRUD https://www.bezkoder.com/react-spring-boot-mongodb/#Spring_Boot_React_MongoDB_example_Overview  