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
import { resetWarningCache } from 'prop-types'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import FlashcardBox from 'src/components/Flashcard/FlashcardBox'
import { UpdateFlashcardInput } from 'types/graphql'

const MAX_TOPIC_CHARACTER_LENGTH = 30
const MIN_TOPIC_CHARACTER_LENGTH = 1
const MAX_FLASHCARD_CHARACTER_LENGTH = 280
const ERROR_MESSAGE =
  'Max character length exceeded.  Please limit to ' +
  MAX_FLASHCARD_CHARACTER_LENGTH +
  ' characters.'
const CREATE_NEW_TOPIC = 'Create New Topic'
const ERROR_MESSAGE_NEW_TOPIC =
  'Topic name is required and must be less than ' +
  MAX_TOPIC_CHARACTER_LENGTH +
  ' characters in length.'

interface Props {
  // isEditingTopic?: boolean
  isRequestingNewTopic?: boolean
  topic: string
  topics: string[]
  front?: string
  back?: string
  // onSave: (topic: string, front: string, back: string) => void
  onSave: (input: UpdateFlashcardInput) => void
}

const FlashcardForm: React.FunctionComponent<Props> = ({
  // isEditingTopic,
  isRequestingNewTopic,
  topic,
  topics,
  front,
  back,
  onSave,
}) => {
  console.log('just entered FlashcardForm.  Topic:  ', topic)
  console.log('just entered FlashcardForm.  Topics:  ', topics)
  console.log(
    'just entered FlashcardForm.  isRequestingNewTopic:  ',
    isRequestingNewTopic
  )

  const [isShowingFront, setIsShowingFront] = useState(true)
  const [selectedTopic, setSelectedTopic] = useState(
    isRequestingNewTopic ? CREATE_NEW_TOPIC : topic
  )
  console.log(
    'flashcardForm.  Just called useState(topic).  HEre is selectedTopic: ',
    selectedTopic
  )

  const {
    handleSubmit,
    register,
    // formState,
    formState: { errors },
    // reset,
  } = useForm({ defaultValues: { topic: selectedTopic } })

  // React.useEffect(() => {
  //   if (formState.isSubmitSuccessful) {
  //     reset()
  //     console.log('reset the form')
  //   }
  // }, [formState, reset])

  console.log('fcf, here is selectedTopic:  ', selectedTopic)

  const onSubmit = (data) => {
    console.log('fcf, data:  ', data)
    console.log('fcf, about to run onSave')

    onSave({
      topic: data.topic === CREATE_NEW_TOPIC ? data.newTopic : data.topic,
      // GoDo:  Fix bug:  If you create a new topic, then select a new one from the drop-down, the new one will appear even though you want an existing one...
      // GoDo:  fix bug:  when creating a new topic, if you create a new flashcard right away the topic is not preserved
      front: data.front,
      back: data.back,
    })
  }

  // Q: How do I vertical align (center) in a text box?

  return (
    <FlashcardBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* {isEditingTopic && ( */}
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
              {...register('topic', {
                maxLength: MAX_TOPIC_CHARACTER_LENGTH,
              })}
              // defaultValue={selectedTopic}
              // value={selectedTopic}
              color="blue.600"
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
              isInvalid={errors.newTopic}
              width={{ base: '50%', lg: '20%' }}
            >
              <FormLabel color="blue.600">Enter New Topic</FormLabel>
              <Input
                // defaultValue={topic === CREATE_NEW_TOPIC ? '' : topic}
                {...register('newTopic', {
                  required: true,
                  maxLength: MAX_TOPIC_CHARACTER_LENGTH,
                  minLength: MIN_TOPIC_CHARACTER_LENGTH,
                })}
                name="newTopic"
                color="blue.600"
                maxLength={MAX_TOPIC_CHARACTER_LENGTH}
                // GoDo:  Prevent empty string
                size="sm"
              />
              <FormErrorMessage>
                {errors.newTopic && ERROR_MESSAGE_NEW_TOPIC}
              </FormErrorMessage>
            </FormControl>
          )}
        </Stack>
        {/* )} */}

        <FormControl
          display={isShowingFront ? 'inherit' : 'none'}
          isInvalid={errors.front}
        >
          <FormLabel color="blue.600" paddingTop={2}>
            Edit Front of Flashcard
          </FormLabel>
          <Textarea
            {...register('front', {
              maxLength: MAX_FLASHCARD_CHARACTER_LENGTH,
            })}
            defaultValue={front}
            name="front"
            textAlign="center"
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
            {...register('back', { maxLength: MAX_FLASHCARD_CHARACTER_LENGTH })}
            defaultValue={back}
            name="back"
            textAlign="center"
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
          </ButtonGroup>
        </Center>
      </form>
    </FlashcardBox>
  )
}

export default FlashcardForm
