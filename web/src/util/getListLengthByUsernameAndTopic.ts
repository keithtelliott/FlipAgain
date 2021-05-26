import filterFlashcardsByUsernameAndTopic from './filterFlashcardsByUsernameAndTopic'
import FlashcardInterface from './FlashcardInterface'

const getListLengthByUsernameAndTopic = (
  username: string,
  topic: string,
  flashcards: FlashcardInterface[]
) => filterFlashcardsByUsernameAndTopic(username, topic, flashcards).length

export default getListLengthByUsernameAndTopic
