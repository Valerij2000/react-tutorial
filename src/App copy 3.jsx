import "./styles/main.scss";
import List from "./components/List";
import { fruits } from "./db/fruits";

function App() {
  return (
    <div className="wrapper">
      <List fruits={fruits}></List>
    </div>
  );
}

export default App;
