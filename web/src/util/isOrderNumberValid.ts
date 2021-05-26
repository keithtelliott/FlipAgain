const isOrderNumberValid = (
  orderNumber: number,
  singleTopicflashcardListLength: number
): boolean => orderNumber >= 1 && orderNumber <= singleTopicflashcardListLength

export default isOrderNumberValid
