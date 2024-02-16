import styles from "./Messages.module.css";

function Messages({messages, markAsRead}) {
  return (
    <ul className={styles.list}>
      {messages.map((message, index) => (
        <li
          onClick={() => markAsRead(index)}
          key={index}
          className={`${styles.listItem} ${message.unread ? styles.unread : ""}`}
        >
          <img src={message.img} alt="person" className={styles.personImg} />
          <div className={styles.textContainer}>
            <strong className={styles.name}>{message.name}</strong>
            <span className={styles.text}>{message.text}</span>
            {message.link && (
              <a href={message.link} target="_blank" className={styles.link}>
                {message.link}
              </a>
            )}
            {message.action && <span className={styles.action}>{message.action}</span>}
            {message.unread && <span className={styles.circle}></span>}
            <p className={styles.date}>{message.time}</p>
            {message.feedback && <div className={styles.feedback}>{message.feedback}</div>}
          </div>
          {message.secondImg && (
            <div className={styles.imgBox}>
              <img src={message.secondImg} alt="chess" />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Messages;
