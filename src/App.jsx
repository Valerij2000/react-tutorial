import "./styles/main.scss";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Student from "./components/Student";

function App() {
  return (
    <div className="wrapper">
      <div className="text-container">
        <h1>Todo app</h1>
      </div>
      <div className="card-section">
        <Student
          image="./ava1.avif"
          name="Valerij"
          login="valery2000"
          age={24}
          isStudent={true}
        />
        <Student
          image="./ava2.avif"
          name="Alex"
          login="alex2000"
          age={22}
          isStudent={false}
        />
        <Student
          image="./ava3.avif"
          name="Robby"
          login="robb2000"
          age={44}
          isStudent={true}
        />
        <Student />
      </div>
    </div>
  );
}

export default App;
