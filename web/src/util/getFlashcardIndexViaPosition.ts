import getFlashcardViaPosition from './getFlashcardViaPosition'
import FlashcardInterface from './FlashcardInterface'
import * as Ramda from 'ramda'

const NOT_FOUND_FLAG = -1

const getFlashcardIndexViaPosition = (
  username: string,
  topic: string,
  orderNumber: number,
  flashcards: FlashcardInterface[]
): number => {
  let flashcard
  try {
    flashcard = getFlashcardViaPosition(
      username,
      topic,
      orderNumber,
      flashcards
    )
  } catch (error) {
    return NOT_FOUND_FLAG
  }

  return Ramda.findIndex(Ramda.propEq('id', flashcard.id), flashcards)
}

export default getFlashcardIndexViaPosition
