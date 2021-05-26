import EditFlashcardLocalStorageCell from 'src/components/EditFlashcardLocalStorageCell/EditFlashcardLocalStorageCell'

const EditFlashcardPage = ({ username, topic, orderNumber }) => {
  return (
    <EditFlashcardLocalStorageCell
      username={username}
      topic={topic}
      orderNumber={orderNumber}
    />
  )
}

export default EditFlashcardPage
