export default `
  type User {
    id: Int!
    username: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    allUsers: [User!]!
    getUser(id: Int!): User!
  }

  type Mutation {
    createUser(username: String!): User
    updateUser(id: Int!, username: String!): [Int!]!
    deleteUser(id: Int!): Int!
  }
`;
