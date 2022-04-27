import { useRef } from "react";

const AddTodo = (props) => {
  const SendData = (data) => {
    fetch(
      "https://firstfirebase-dab9a-default-rtdb.firebaseio.com/Todo-App/Todos.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }
    );
  };
  const titleref = useRef();

  const onSubmithandler = (event) => {
    event.preventDefault();
    const todoData = {
      title: titleref.current.value,
      key: Math.random().toString(),
    };
    props.onAddTodo(todoData);
    SendData(todoData);
  };
  return (
    <form onSubmit={onSubmithandler}>
      <input ref={titleref}></input>
      <button>Add</button>
    </form>
  );
};
export default AddTodo;
