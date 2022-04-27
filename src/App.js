import { useEffect, useState } from "react";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";

const App = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async () => {
    const response = await fetch(
      "https://firstfirebase-dab9a-default-rtdb.firebaseio.com/Todo-App/Todos.json"
    );
    const responseData = await response.json();

    const loadedTodo = [];

    for (const key in responseData) {
      loadedTodo.push({
        key: key,
        title: responseData[key].title,
      });
    }

    setTodo(loadedTodo);
  };
  const addTodoHandler = (data) => {
    setTodo((prevtodo) => [data, ...prevtodo]);
  };
  const removeTodoHandler = (todoId) => {
    setTodo((prevtodo) => {
      return prevtodo.filter((todo) => todo.key !== todoId);
    });
  };
  return (
    <div>
      <h1>TODO</h1>
      <AddTodo onAddTodo={addTodoHandler} />
      <Todos onRemoveTodo={removeTodoHandler} todo={todo} />
    </div>
  );
};
export default App;
