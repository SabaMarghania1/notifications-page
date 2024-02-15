import styles from "./Messages.module.css";

function Messages(props) {
  return (
    <ul className={styles.list}>
      <li className={`${styles.listItem} ${props.messages[2].unread ? styles.unread : ""}`}>
        <img src={props.messages[2].img} alt="person" className={styles.personImg} />
        <div className={styles.textContainer}>
          <strong className={styles.name}>{props.messages[2].name}</strong>
          <span className={styles.text}>{props.messages[2].text}</span>
          {props.messages[2]?.link ? (
            <a href="https://www.chessclub.com/" target="_blank" className={styles.link}>
              {props.messages[2].link}
            </a>
          ) : null}
          {props.messages[2]?.action ? (
            <span className={styles.action}>{props.messages[2].action}</span>
          ) : null}
          {props.messages[2]?.unread ? <span className={styles.circle}></span> : null}
          <p className={styles.date}>{props.messages[2].date}</p>
          {props.messages[2]?.feedback ? (
            <div className={styles.feedback}>{props.messages[2].feedback}</div>
          ) : null}
        </div>
      </li>
    </ul>
  );
}

export default Messages;
