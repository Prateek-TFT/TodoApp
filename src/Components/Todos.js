import { useEffect } from "react";
import Classes from "./Todo.module.css";
const Todos = (props) => {
  const clickhandler = (todoId) => {
    props.onRemoveTodo(todoId);
  };

  return (
    <ul>
      {props.todo.map((data) => (
        <div key={data.key} onClick={() => clickhandler(data.key)}>
          <div className={Classes.headingBox} />
          <div className={Classes.box}>{data.title}</div>
        </div>
      ))}
    </ul>
  );
};
export default Todos;
