## Users API

My second time developing an API was an incredible experience. With this project, I was able to learn a lot, not only about API development but also about best practices and some concepts of SOLID, Dependency Injection, and Repository Pattern, which were excellent in making the learning process more smooth.

## Technologies used

- Node.js
- TypeScript
- Express
- MongoDB

## Used Concepts

- SOLID
- Dependency Injection
- Repository Pattern

## Entities

<pre>
User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}</pre>

## Routes

- GET /users - returns the users saved in the database
- POST /users - creates a user
- PATCH /users/:id - updates a user
- DELETE /users/:id - deletes a user

## Architecture

![Arquitetura](https://imgur.com/k5mXFoZ.png)
