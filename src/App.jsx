import "./styles/main.scss";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="wrapper">
      <div className="text-container">
        <h1>Todo app</h1>
      </div>
      <div className="center">
        <Input />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
