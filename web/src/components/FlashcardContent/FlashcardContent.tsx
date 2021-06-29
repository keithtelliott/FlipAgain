import { motion } from 'framer-motion'
import { SetStateAction } from 'react'
import { useState } from 'react'
import FlashcardText from '../FlashcardText/FlashcardText'

const MAX_TAP_MOVEMENT_PIXELS = 3

interface Props {
  front: string
  back: string
  isShowingFront: boolean
  setIsShowingFront: React.Dispatch<SetStateAction<boolean>>
  onSwipeToPrev: any
  onSwipeToNext: any
}

const FlashcardContent: React.FunctionComponent<Props> = ({
  front,
  back,
  isShowingFront,
  setIsShowingFront,
  onSwipeToPrev,
  onSwipeToNext,
}) => {
  const [initialDragX, setInitialDragX] = useState<number>()
  const [initialDragY, setInitialDragY] = useState<number>()
  // const [initialTapX, setInitialTapX] = useState()
  let initialTapX: number
  let initialTapY: number

  /**
   *************************************************************************************
   * Note by KTE:  The following comment and swipePower function are from a Framer Motion
   * codesandbox.io example located @ https://codesandbox.io/s/framer-motion-image-gallery-pqvx3?fontsize=14&module=/src/Example.tsx&file=/src/Example.tsx:522-977
   *************************************************************************************
   *
   * Experimenting with distilling swipe offset and velocity into a single variable, so the
   * less distance a user has swiped, the more velocity they need to register as a swipe.
   * Should accomodate longer swipes and short flicks without having binary checks on
   * just distance thresholds and velocity > 0.
   *
   * Source:  Framer motion codesandbox.io example @
   */
  const SWIPE_CONFIDENCE_THRESHOLD = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

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
    console.log('onDragStart, info:  ', info)

    setInitialDragX(info.point.x)
    setInitialDragY(info.point.y)
  }

  // go-do:  pull the next in as you are swiping the existing out like in iphoto
  const onDragEnd = (event, info) => {
    console.log('onDrag.  window object:  ', window)

    console.log('onDragEnd.  Here is info:  ', info)
    console.log('onDragEnd.  Here is event:  ', event)
    console.log(
      'onDragEnd, swipePowerX:  ',
      swipePower(info.offset.x, info.velocity.x)
    )
    console.log(
      'onDragEnd, swipePowerY:  ',
      swipePower(info.offset.y, info.velocity.y)
    )

    if (
      Math.abs(swipePower(info.offset.x, info.velocity.x)) >
      SWIPE_CONFIDENCE_THRESHOLD
    ) {
      console.log('onDragEnd, swiping left or right')

      const swipeLengthPixelsX = info.point.x - initialDragX
      swipeLengthPixelsX < 0 ? onSwipeToNext() : onSwipeToPrev() // Swiping right or left
    } else if (
      swipePower(info.offset.y, info.velocity.y) <
      -1 * SWIPE_CONFIDENCE_THRESHOLD
    ) {
      const swipeLengthPixelsY = info.point.y - initialDragY
      console.log(
        'onDragEnd, else if, swipeLengthPixelsY:  ',
        swipeLengthPixelsY
      )

      if (swipeLengthPixelsY < 0) setIsShowingFront(!isShowingFront) // Swiping up
    }
  }

  // const onTapStart = (event, info) => {
  //   initialTapX = info.point.x
  //   initialTapY = info.point.y
  // }

  // const onTap = (event, info) => {
  //   if (
  //     Math.abs(info.point.x - initialTapX) < MAX_TAP_MOVEMENT_PIXELS &&
  //     Math.abs(info.point.y - initialTapY) < MAX_TAP_MOVEMENT_PIXELS
  //   ) {
  //     setIsShowingFront(!isShowingFront)
  //   }
  // }

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
      dragElastic={0.03}
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
      // onTapStart={onTapStart}
      // onTap={onTap}
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
