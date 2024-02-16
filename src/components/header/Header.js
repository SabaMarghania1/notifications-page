import styles from "./Header.module.css";

function Header(props) {
  console.log(props);
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>
        Notifications {props?.unread ? <span className={styles.qty}>{props.unread}</span> : null}
      </h3>
      <p onClick={props.clear} className={styles.clear}>
        Mark all as read
      </p>
    </header>
  );
}

export default Header;
