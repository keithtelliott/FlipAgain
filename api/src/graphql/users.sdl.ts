export const schema = gql`
  type User {
    id: String!
    username: String!
    email: String!
    name: String
    flashcards: [Flashcard]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type FlashcardPage {
    flashcard: Flashcard
    count: Int!
    # nextOrderNum: Float!
  }

  type Query {
    users: [User!]! @skipAuth #@requireAuth
    # findOrCreateUser(input: CreateUserInput!): User! @skipAuth
    userByUsername(username: String!): User @skipAuth #@requireAuth
    flashcardPageByUsernameAndTopicAndOrder(
      username: String!
      topic: String!
      order: Int!
    ): FlashcardPage @skipAuth #@requireAuth
    findOrCreateUser(username: String!, email: String!, name: String): User!
      @skipAuth
    flashcardByUsernameAndTopicAndOrder(
      username: String!
      topic: String!
      order: Int!
    ): Flashcard! @skipAuth #@requireAuth
    topicsByUsername(username: String!): [String!]! @skipAuth #@requireAuth
    flashcardPageByUsernameAndTopicAndLast(
      username: String!
      topic: String!
    ): FlashcardPage @skipAuth #@requireAuth
  }

  input CreateUserInput {
    username: String!
    email: String
    name: String
  }

  input UpdateUserInput {
    username: String
    email: String
    name: String
  }
`
