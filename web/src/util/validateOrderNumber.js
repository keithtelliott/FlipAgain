import isOrderNumberValid from './isOrderNumberValid'

export const DEFAULT_ORDER_NUMBER = 1

const validateOrderNumber = (
  orderNumber,
  singleTopicflashcardListLength,
  defaultOrderNumber
) =>
  isOrderNumberValid(orderNumber, singleTopicflashcardListLength)
    ? orderNumber
    : defaultOrderNumber

export default validateOrderNumber
