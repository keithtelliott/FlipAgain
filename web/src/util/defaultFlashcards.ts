import FlashcardInterface from './FlashcardInterface'

const defaultFlashcards: FlashcardInterface[] = [
  {
    id: '1',
    front: 'Welcome to FlipAgain!  Click Flip to flip',
    back: 'Flipped!  Click Next and Previous to move',
    topic: 'Intro',
    username: 'local',
  },
  {
    id: '2',
    front: 'Click Add / Edit / Remove to create your own!',
    back:
      "It's a tool to help you learn new things, or to help you communicate",
    topic: 'Intro',
    username: 'local',
  },
  {
    id: '3',
    front: 'You assign your flashcards a topic...',
    back: '...to categorize your stacks of things-to-learn',
    topic: 'Intro',
    username: 'local',
  },
  {
    id: '4',
    front: 'I am glad you are here! And...',
    back: '... I hope you find this simple app to be a valuable learning tool',
    topic: 'Intro',
    username: 'local',
  },
  {
    id: '5',
    front: 'My name is Keith...',
    back: '... and I am developing this app in public.',
    topic: 'Intro',
    username: 'local',
  },
  {
    id: '6',
    front:
      "You can follow the app development via my YouTube <a href='https://youtu.be/Q4BnWK05H5w'>videos</a>.",
    back: '... No seat belt needed, because it is Slow Coding with Keith :)',
    topic: 'Intro',
    username: 'local',
  },
  {
    id: '7',
    front: 'You can follow follow me on Twitter at @KeithTElliott',
    back: 'Please send me suggestions and requests.',
    topic: 'Intro',
    username: 'local',
  },
  {
    id: '8',
    front: 'I hope you join me in my journey to create a useful learning tool!',
    back: 'What fun!',
    topic: 'Intro',
    username: 'local',
  },
  {
    id: '9',
    front:
      'A technical note:  In this initial version of the app, your flashcards are stored...',
    back:
      "...in your web browser, in what is called 'local storage'.  Future version will provide more robust cloud-based storage options, to facilitate sharing your flashcards with others, and across different devices.  ",
    topic: 'Intro',
    username: 'local',
  },
  {
    id: '10',
    front: '37 + 43',
    back: '80',
    topic: 'Addition Practice',
    username: 'local',
  },
  {
    id: '11',
    front: '45 + 93',
    back: '138',
    topic: 'Addition Practice',
    username: 'local',
  },
  {
    id: '1a',
    front:
      '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 ',
    back: 'Flipped!  Click Next and Previous to move',
    topic: 'Intro',
    username: 'local',
  },
]

export default defaultFlashcards
