import { Link, routes } from '@redwoodjs/router'
import NewFlashcard from 'src/components/NewFlashcard/NewFlashcard'

interface Props {
  username: string
}

const NewTopicPage: React.FunctionComponent<Props> = ({ username }) => (
  <NewFlashcard username={username} isRequestingNewTopic={true} />
)

export default NewTopicPage
