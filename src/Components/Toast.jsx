import { useContext } from "react";
import { NotificationContext } from '../context/Notification';
import s from '../style/Toast.module.scss';

export const Toast = () => {
  const { notification } = useContext(NotificationContext);

  return (
    notification && (
      <div className={s.toast}>
        Sign up was successfully!
      </div>
    )
  );
};
