import { createLocalStorageStateHook } from 'use-local-storage-state'
import defaultFlashcards from 'src/util/defaultFlashcards'

const useLocalFlashcards = createLocalStorageStateHook(
  'flashcards',
  defaultFlashcards
)

export default useLocalFlashcards
