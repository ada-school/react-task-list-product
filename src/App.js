import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <section>
      <TaskForm />
      <TaskList />
    </section>
  );
}

export default App;
