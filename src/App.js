import "./index.css";

import Header from "./components/Header";
import Notifications from "./data.js";
import {useState} from "react";
import notifications from "./data.js";

function App() {
  const [unread, setUnread] = useState(Notifications.filter(item => item.unread).length);
  console.log(Notifications);
  console.log(unread);

  return (
    <div className="container">
      <Header unread={unread} />
    </div>
  );
}

export default App;
