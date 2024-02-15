import styles from "./Messages.module.css";

function Messages(props) {
  console.log(props.messages[0]);

  return <ul className={styles.list}></ul>;
}

export default Messages;
