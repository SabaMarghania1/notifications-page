import "./index.css";
import Notifications from "./data.js";
import {useState} from "react";

import Header from "./components/header/Header";
import Messages from "./components/messages/Messages";

function App() {
  const [messages, setMessages] = useState(Notifications);
  const [unread, setUnread] = useState(Notifications.filter(item => item.unread).length);

  const markAsRead = index => {
    const newMessages = [...messages];
    if (newMessages[index].unread) {
      newMessages[index].unread = false;
      setMessages(newMessages);
      setUnread(unread - 1);
    }
  };

  const handleClearUnreads = () => {
    Notifications.map(item => (item.unread = false));
    setUnread(0);
  };

  return (
    <div className="container">
      <Header unread={unread} setUnread={setUnread} clear={handleClearUnreads} />
      <Messages unread={unread} setUnread={setUnread} messages={messages} markAsRead={markAsRead} />
    </div>
  );
}

export default App;
