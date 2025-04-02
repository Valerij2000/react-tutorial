import "./styles/main.scss";
import UserGreeting from "./components/UserGreeting";

function App() {
  return (
    <div className="wrapper">
      <div className="text-container">
        <h1>Todo app</h1>
      </div>
      <div className="card-section">
        <UserGreeting isLoggedIn={true} username="valery2000" />
      </div>
    </div>
  );
}

export default App;
