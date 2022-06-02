import axios from 'axios'
import { useEffect, useState } from 'react'

import type { Notification } from './NotificationIcon'
import { NotificationIcon } from "./NotificationIcon"

export const NotificationComponent = () => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const clearNotifications = (notifications: Notification[]) => {
    const viewedNotifications = notifications.map((n) => ({
      ...n,
      isViewed: true
    }))
    localStorage.setItem("noticiations", JSON.stringify(viewedNotifications))
    setNotifications(viewedNotifications)
  }

  useEffect(() => {
    const storedNotifications: Notification[] = JSON.parse(localStorage.getItem("noticiations") ?? "[]")
    if (storedNotifications.length) {
      setNotifications(storedNotifications)
    }
  
    axios.get<Notification[]>("http://localhost:3000/notifications").then(({ data }) => {
      const newNotifications = data.filter(
        (notification) => !storedNotifications.find((storedNotification) => storedNotification.id === notification.id)
      ).concat(storedNotifications)
      localStorage.setItem("noticiations", JSON.stringify(newNotifications))
      setNotifications(newNotifications)
    })

  }, [])

  return <NotificationIcon notifications={notifications} onClick={clearNotifications} />
}