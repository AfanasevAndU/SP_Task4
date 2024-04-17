import "./App.css";
import { CountdownTimer } from "./countdownTimer";
import { UserList } from "./userList";
import { WindowSize } from "./windowSize";

function App() {
  return (
    <>
      <div>
        <h1>Таймер:</h1>
        <CountdownTimer countTimer={20} />
        <UserList url="https://jsonplaceholder.typicode.com/users" />
      </div>
      <div>
        <WindowSize />
      </div>
    </>
  );
}

export default App;
