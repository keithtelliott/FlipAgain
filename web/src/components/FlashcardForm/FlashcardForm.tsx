// Go-Do, KTE, 5/28/2021:  If I save a flashcard from the back, but the front
// violates the max-length validation rule, I need the error message to appear.
// At the moment, however, the error only appears if the front of the card is shown.
//
// Go-Do, KTE, 5/28/2021:  Increase the max number of characters.  Twitter uses a
// 280 char max.  I could use that...
//
// Go-Do, KTE, 5/28/2021:  Increase the number characters in the topic.  Truncate the
// topic name on the flashcard as needed.
//
// Go-Do, KTE, 5/28/2021:  Show the number of characters in use.
//
// Go-Do, KTE, 5/28/2021:  Try overflowY="auto", instead of "scroll".  Auto should
// add the scroll automagically if needed.
//
// Go-Do, KTE, 6/2/2021:  Show the number of characters in use on form input
// Go-Do, KTE, 6/2/2021:  Provide ability to order flashcards - as I would when creating
// a talk or writing a paper
//
import { Button, ButtonGroup } from '@chakra-ui/button'
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control'
import { Center, Input, Select, Stack, Textarea } from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import FlashcardBox from '../FlashcardBox/FlashcardBox'
import LocalPersistenceWarning from '../LocalPersistenceWarning/LocalPersistenceWarning'

const MAX_TOPIC_CHARACTER_LENGTH = 30
const MAX_FLASHCARD_CHARACTER_LENGTH = 280
const ERROR_MESSAGE =
  'Max character length exceeded.  Please limit to ' +
  MAX_FLASHCARD_CHARACTER_LENGTH +
  ' characters.'
const CREATE_NEW_TOPIC = 'Create New Topic'

interface Props {
  isRequestingNewTopic?: boolean
  topic: string
  topics: string[]
  front?: string
  back?: string
  onSave: (topic: string, front: string, back: string) => void
  isPersistent?: boolean
}

const FlashcardForm: React.FunctionComponent<Props> = ({
  isRequestingNewTopic,
  topic,
  topics,
  front,
  back,
  onSave,
  isPersistent = true,
}) => {
  const { handleSubmit, errors, register, formState } = useForm()
  const [isShowingFront, setIsShowingFront] = useState<boolean>(true)
  const [selectedTopic, setSelectedTopic] = useState<string>(
    isRequestingNewTopic ? CREATE_NEW_TOPIC : topic
  )

  const onSubmit = (data) => {
    console.log('fcf, data:  ', data)

    onSave(data?.newTopic || data.topic, data.front, data.back)
  }

  // Q: How do I vertical align (center) in a text box?

  return (
    <FlashcardBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="row">
          <FormControl
            isInvalid={errors.topic}
            width={{ base: '50%', lg: '20%' }}
          >
            <FormLabel
              color="blue.600"
              opacity={selectedTopic === CREATE_NEW_TOPIC ? '.4' : '1'}
            >
              Topic
            </FormLabel>
            <Select
              defaultValue={selectedTopic}
              name="topic"
              color="blue.600"
              ref={register({ maxLength: MAX_TOPIC_CHARACTER_LENGTH })}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
                setSelectedTopic(event.target.value)
              }
              size="sm"
            >
              <option>{CREATE_NEW_TOPIC}</option>
              {topics?.map((topicInMap, index) => (
                <option key={topicInMap + index} value={topicInMap}>
                  {topicInMap}
                </option>
              ))}
            </Select>
          </FormControl>

          {selectedTopic === CREATE_NEW_TOPIC && (
            <FormControl
              isInvalid={errors.topic}
              width={{ base: '50%', lg: '20%' }}
            >
              <FormLabel color="blue.600">Enter New Topic</FormLabel>
              <Input
                // defaultValue={topic === CREATE_NEW_TOPIC ? '' : topic}
                name="newTopic"
                color="blue.600"
                maxLength={MAX_TOPIC_CHARACTER_LENGTH}
                ref={register({
                  maxLength: MAX_TOPIC_CHARACTER_LENGTH,
                  // required,
                })} // GoDo:  Prevent empty string
                size="sm"
              />
            </FormControl>
          )}
        </Stack>

        <FormControl
          display={isShowingFront ? 'inherit' : 'none'}
          isInvalid={errors.front}
        >
          <FormLabel color="blue.600" paddingTop={2}>
            Edit Front of Flashcard
          </FormLabel>
          <Textarea
            defaultValue={front}
            name="front"
            textAlign="center"
            ref={register({ maxLength: MAX_FLASHCARD_CHARACTER_LENGTH })}
            fontSize={{ base: '5xl', lg: '6xl' }}
            height={{ base: '52vh', sm: '32vh', lg: '57vh' }}
            width={{ base: '85vw', sm: '90vw', lg: '95vw' }}
            color="blue.600"
            maxLength={MAX_FLASHCARD_CHARACTER_LENGTH}
          />
          <FormHelperText fontSize="sm" padding={1}>
            {MAX_FLASHCARD_CHARACTER_LENGTH + ' characters max'}
          </FormHelperText>
          <FormErrorMessage>{errors.front && ERROR_MESSAGE}</FormErrorMessage>
        </FormControl>

        <FormControl
          display={isShowingFront ? 'none' : 'inherit'}
          isInvalid={errors.back}
        >
          <FormLabel color="blue.600" paddingTop={2}>
            Edit Back of Flashcard
          </FormLabel>
          <Textarea
            defaultValue={back}
            name="back"
            textAlign="center"
            ref={register({ maxLength: MAX_FLASHCARD_CHARACTER_LENGTH })}
            fontSize={{ base: '5xl', lg: '6xl' }}
            height={{ base: '52vh', sm: '32vh', lg: '57vh' }}
            width={{ base: '85vw', sm: '90vw', lg: '95vw' }}
            color="blue.600"
            maxLength={MAX_FLASHCARD_CHARACTER_LENGTH}
          />
          <FormHelperText fontSize="sm" padding={1}>
            {MAX_FLASHCARD_CHARACTER_LENGTH + ' characters max'}
          </FormHelperText>
          <FormErrorMessage>{errors.back && ERROR_MESSAGE}</FormErrorMessage>
        </FormControl>
        <Center>
          <ButtonGroup variant="outline" colorScheme="blue" size="sm">
            <Button onClick={() => setIsShowingFront(!isShowingFront)}>
              Flip to Edit {isShowingFront ? 'Back' : 'Front'}
            </Button>
            <Button type="submit">Save</Button>
            <LocalPersistenceWarning isPersistent={isPersistent} />
          </ButtonGroup>
        </Center>
      </form>
    </FlashcardBox>
  )
}

export default FlashcardForm
