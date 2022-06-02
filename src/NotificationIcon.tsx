import NotificationsIcon from '@mui/icons-material/Notifications'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'

type Props = {
  notifications?: Notification[]
  onClick: (notifications: Notification[]) => void
}

export const NotificationIcon = ({ notifications = [], onClick }: Props) => {
  const availableNotifications = notifications.filter((n) => !n.isViewed)

  const viewNotifications = () => {
    let alertText = ""
    availableNotifications.forEach((n) => {
      alertText = alertText + "\n" + n.text
    })
    alert(alertText)
    onClick(notifications)
  }

  if (availableNotifications.length) {
    return (
      <div onClick={viewNotifications} style={{ cursor: "pointer" }}>
        <NotificationsActiveIcon />
      </div>
    )
  }

  return <NotificationsIcon />
}

export type Notification = {
  id: number
  text: string
  isViewed?: boolean
}
