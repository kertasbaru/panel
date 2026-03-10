import { useState, useEffect } from 'react';
import { getNotifications } from '../api/notificationApi';

const useNotification = () => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  const fetchNotifications = async () => {
    try {
      const { data } = await getNotifications();
      const items = data.data || [];
      setNotifications(items);
      setUnreadCount(items.filter((n) => !n.is_read).length);
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return { notifications, unreadCount, refetch: fetchNotifications };
};

export default useNotification;
