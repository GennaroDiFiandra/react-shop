import styles from "./Notification.module.scss";

interface NotificationProps {
  type: "info" | "success" | "failure";
  message: string;
}

export function Notification(props:NotificationProps) {
  const { type, message } = props;

  return (
    <>
      <p className={`${styles["notification"]} ${styles[type]}`}>{message}</p>
    </>
  )
}