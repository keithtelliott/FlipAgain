import FlashcardInterface from './FlashcardInterface'

const defaultFlashcards: FlashcardInterface[] = [
  {
    id: 1,
    front: 'Welcome to FlipAgain!  Click Flip to Back',
    back: 'Flipped!  Click Next and Previous to move',
    topic: 'Welcome',
    username: 'FlipAgain',
  },
  {
    id: 2,
    front: 'Click Edit / Add / Remove to create your own!',
    back: "It's a tool to help you learn new things, or to help you communicate",
    topic: 'Welcome',
    username: 'FlipAgain',
  },
  {
    id: 3,
    front: 'You assign your flashcards a topic...',
    back: '...to categorize your stacks of things-to-learn',
    topic: 'Welcome',
    username: 'FlipAgain',
  },
  {
    id: 4,
    front: 'I am glad you are here! And...',
    back: '... I hope you find this simple app to be a valuable learning tool',
    topic: 'Welcome',
    username: 'FlipAgain',
  },
  {
    id: 5,
    front: 'My name is Keith.  You can follow me on Twitter via @KeithTElliott',
    back: 'Please send me suggestions and feature requests',
    topic: 'Welcome',
    username: 'FlipAgain',
  },
  // {
  //   id: 6,
  //   front:
  //     "You can follow the app development via my YouTube <a href='https://youtu.be/Q4BnWK05H5w'>videos</a>.",
  //   back: '... No seat belt needed, because it is Slow Coding with Keith :)',
  //   topic: 'Welcome',
  //   username: 'FlipAgain',
  // },
  // {
  //   id: 7,
  //   front: 'You can follow follow me on Twitter at @KeithTElliott',
  //   back: 'Please send me suggestions and requests.',
  //   topic: 'Welcome',
  //   username: 'FlipAgain',
  // },
  // {
  //   id: 8,
  //   front: 'I hope you join me in my journey to create a useful learning tool!',
  //   back: 'What fun!',
  //   topic: 'Welcome',
  //   username: 'FlipAgain',
  // },
  {
    id: 9,
    front:
      "Technical note:  Your flashcards are stored in your browser's local storage.  Future versions of the app...",
    back: '...will provide more robust cloud-based storage options, to facilitate sharing your flashcards with others, and across different devices.  ',
    topic: 'Welcome',
    username: 'FlipAgain',
  },
  {
    id: 10,
    front:
      'Another technical note:  I am developing this app with encouragement from my friends in the RedwoodJS community.  You can checkout the code...',
    back: '...at github.com/keithtelliott/FlipAgain',
    topic: 'Welcome',
    username: 'FlipAgain',
  },
  {
    id: 11,
    front: 'What fun!',
    back: 'I hope your learning is satisfying',
    topic: 'Welcome',
    username: 'FlipAgain',
  },

  {
    id: 12,
    front: '37 + 43',
    back: '80',
    topic: 'Addition Practice',
    username: 'FlipAgain',
  },
  {
    id: 13,
    front: '45 + 93',
    back: '138',
    topic: 'Addition Practice',
    username: 'FlipAgain',
  },
  // {
  //   id: 14,
  //   front:
  //     '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 ',
  //   back: 'Flipped!  Click Next and Previous to move',
  //   topic: 'Welcome',
  //   username: 'FlipAgain',
  // },
]

export default defaultFlashcards
