import validateOrderNumber from './validateOrderNumber'

const ORDER_NUMBER_LEGIT = 1
const ORDER_NUMBER_INVALID = 11
const SINGLE_TOPIC_FLASHCARD_LIST_LENGTH = 10
const DEFAULT_ORDER_NUMBER = 1

describe('validateOrderNumber', () => {
  it('handles the happy path - it returns the sameIndexPlus if it is less than the flashcard list length', () => {
    const validatedOrderNumber = validateOrderNumber(
      ORDER_NUMBER_LEGIT,
      SINGLE_TOPIC_FLASHCARD_LIST_LENGTH,
      DEFAULT_ORDER_NUMBER
    )
    expect(validatedOrderNumber).toBe(ORDER_NUMBER_LEGIT)
  })

  it('handles invalid orderNumber values, returning the default instead', () => {
    const validatedOrderNumber = validateOrderNumber(
      ORDER_NUMBER_INVALID,
      SINGLE_TOPIC_FLASHCARD_LIST_LENGTH,
      DEFAULT_ORDER_NUMBER
    )
    expect(validatedOrderNumber).toBe(DEFAULT_ORDER_NUMBER)
  })
})
