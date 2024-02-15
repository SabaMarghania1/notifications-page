import styles from "./Header.module.css";

function Header(props) {
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>
        Notifications {props?.unread ? <span className={styles.qty}>{props.unread}</span> : null}
      </h3>
      <p className={styles.clear}>Mark all as read</p>
    </header>
  );
}

export default Header;
