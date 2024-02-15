import "./index.css";
import Notifications from "./data.js";
import {useState} from "react";

import Header from "./components/header/Header";
import Messages from "./components/messages/Messages";

function App() {
  const [unread, setUnread] = useState(Notifications.filter(item => item.unread).length);
  console.log(Notifications);
  console.log(unread);

  return (
    <div className="container">
      <Header unread={unread} />
      <Messages messages={Notifications} />
    </div>
  );
}

export default App;
