# GraphQL basic server

## Installation

`git clone ...`

`npm install`

`npm start`

## Test

`http://localhost:3005/graphiql`

```
{
  allUsers {
    id,
    username
  }
}
```

```
mutation {
  createUser(username:"Jean") {
    id
  }
}
```
