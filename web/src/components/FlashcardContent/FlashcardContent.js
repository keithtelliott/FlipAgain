import { Center, Text } from '@chakra-ui/layout'
import { motion } from 'framer-motion'
import { useState } from 'react'

const MIN_SWIPE_TO_PROCEED_PIXELS = 30

const FlashcardText = ({ text, isAnimated }) => (
  <Text
    margin="auto"
    as="h3"
    padding={2}
    fontSize={{ base: '5xl', lg: '6xl' }}
    color="blue.600"
    textAlign="center"
    overflowWrap="anywhere"
    wordBreak="break-word"
    whiteSpace="break-spaces"
  >
    {isAnimated ? (
      <motion.div initial={{ y: 200 }} animate={{ y: 0 }}>
        {text}
      </motion.div>
    ) : (
      text
    )}
  </Text>
)

const FlashcardContent = ({
  front,
  back,
  isShowingFront,
  setIsShowingFront,
  onSwipeToPrev,
  onSwipeToNext,
}) => {
  const [initialDragX, setInitialDragX] = useState()

  const onDragStart = (event, info) => {
    console.log('onDragStart:  x and y:  ', info.point.x, info.point.y)
    setInitialDragX(info.point.x)
  }

  // go-do:  pull the next in as you are swiping the existing out like in iphoto
  const onDragEnd = (event, info) => {
    console.log('running onDragEnd...')
    const swipeLenghtPixels = info.point.x - initialDragX

    // if (Math.abs(swipeLenghtPixels) < MIN_SWIPE_TO_PROCEED_PIXELS) return
    // else
    if (swipeLenghtPixels < 0) onSwipeToNext()
    else onSwipeToPrev()

    // ? // info.point.x < initialDragX
    //   // console.log(
    //   //     'Swipe left!  onDragEnd:  x and y:  ',
    //   //     info.point.x,
    //   //     info.point.y
    //   //   )
    //   onSwipeToNext()
    // : // console.log(
    //   //     'Swipe right!  onDragEnd:  x and y:  ',
    //   //     info.point.x,
    //   //     info.point.y
    //   //   )
    //   onSwipeToPrev()
  }

  return (
    // <Center
    //   overflowY="auto"
    //   height="100%"
    //   width="100%"
    //   onClick={() => setIsShowingFront(!isShowingFront)}
    // >
    <motion.div
      drag="x"
      dragMomentum={false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.5}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      style={{
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        margin: 'auto',
        display: 'flex',
        alignContent: 'space-around',
      }}
      onTap={(event, info) => {
        console.log('running onTap.  here is event:  ')
        console.log(event)
        console.log('here is info:  ')
        console.log(info)
        setIsShowingFront(!isShowingFront)
      }}
    >
      {isShowingFront ? (
        <FlashcardText text={front} isAnimated={!isShowingFront} />
      ) : (
        <FlashcardText text={back} isAnimated={!isShowingFront} />
      )}
    </motion.div>
    // </Center>
  )
}

export default FlashcardContent
