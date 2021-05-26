import FlashcardInterface from 'src/util/FlashcardInterface'
import * as R from 'ramda'

/**
 * Returns a list of the topics observed in the provided flashcards.
 *
 * @param username The flashcard array will be filtered to the provided username
 * @param flashcards The flashcards to inspect
 * @returns An array containing the names of the topics observed in the flashcards
 * @author Keith Elliott; May 5, 2021
 */
const getTopicsByUsername = (
  username: string,
  flashcards: FlashcardInterface[]
): string[] =>
  R.compose<FlashcardInterface[], FlashcardInterface[], string[], string[]>(
    R.uniq,
    R.pluck('topic'),
    R.filter<FlashcardInterface>(R.propEq('username', username))
  )(flashcards)

export default getTopicsByUsername
