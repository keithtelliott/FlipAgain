import { WarningIcon } from '@chakra-ui/icons'
import { Tooltip } from '@chakra-ui/tooltip'

interface Props {
  isPersistent: boolean
}

const LocalPersistenceWarning: React.FunctionComponent<Props> = ({
  isPersistent,
}) =>
  !isPersistent && (
    <Tooltip
      background="blue.600"
      label="Note! Your browser storage is not enabled. FlipAgain still works
        for this session. But, your updates will not be saved for future
        sessions on this device. You can enable browser storage to store
        FlipAgain notes on your device for future use."
    >
      <WarningIcon color="red" />
    </Tooltip>
  )

export default LocalPersistenceWarning
