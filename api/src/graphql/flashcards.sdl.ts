export const schema = gql`
  type Flashcard {
    id: Int!
    topic: String!
    front: String
    back: String
    orderNum: Float!
    User: User!
    userId: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    flashcards: [Flashcard!]! @skipAuth
    flashcard(id: Int!): Flashcard @skipAuth
  }

  input CreateFlashcardInput {
    topic: String!
    front: String
    back: String
    orderNum: Float
    userId: String!
  }

  input UpdateFlashcardInput {
    topic: String
    front: String
    back: String
    orderNum: Float
    userId: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  type Mutation {
    createFlashcard(input: CreateFlashcardInput!): Flashcard! @requireAuth
    updateFlashcard(id: Int!, input: UpdateFlashcardInput!): Flashcard!
      @requireAuth
    deleteFlashcard(id: Int!): Flashcard! @requireAuth
  }
`
