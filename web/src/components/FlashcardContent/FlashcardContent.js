import { Center, Text } from '@chakra-ui/layout'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const MIN_SWIPE_TO_PROCEED_PIXELS = 30
// const SWIPE_NO = 'SWIPE_NO'
// const SWIPE_TO_NEXT = 'SWIPE_TO_NEXT'
// const SWIPE_TO_PREV = 'SWIPE_TO_PREV'

const flipVariant = {
  hidden: { y: 200 },
  visible: { y: 0 },
}

const FlashcardText = ({ text, isAnimatedFlip }) => (
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
    {isAnimatedFlip ? (
      <motion.div variants={flipVariant} initial="hidden" animate="visible">
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

  const variants = {
    visible: { x: 0, opacity: 1, scale: 5 },
    exitSwipeToNext: {
      x: -2000,
      opacity: 0,
    },
    exitSwipeToPrev: {
      x: +2000,
      opacity: 0,
    },
    hiddenSwipeToNext: {
      x: +2000,
      opacity: 0,
    },
    hiddenSwipeToPrev: {
      x: -2000,
      opacity: 0,
    },
  }
  const onDragStart = (event, info) => {
    console.log('onDragStart:  x and y:  ', info.point.x, info.point.y)
    setInitialDragX(info.point.x)
  }

  // go-do:  pull the next in as you are swiping the existing out like in iphoto
  const onDragEnd = (event, info) => {
    const swipeLenghtPixels = info.point.x - initialDragX
    // event.preventDefault()
    // event.stopImmediatePropagation()
    // event.stopPropagation()
    if (swipeLenghtPixels < 0) {
      onSwipeToNext()
    } else {
      onSwipeToPrev()
    }
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
      // transition={{ when: 'beforeChildren' }}
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
        console.log('running onTap.  Here is the event and info...')
        console.log(event)
        console.log(info)
        setIsShowingFront(!isShowingFront)
      }}
    >
      {isShowingFront ? (
        <FlashcardText text={front} isAnimatedFlip={!isShowingFront} />
      ) : (
        <FlashcardText text={back} isAnimatedFlip={!isShowingFront} />
      )}
    </motion.div>
    // </Center>
  )
}

export default FlashcardContent
