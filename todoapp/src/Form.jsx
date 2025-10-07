import React from "react";

function Form(props) {
  const inputTextHandler = (e) => {
    console.log(e.target.value); //shfaqq vleren qe shkruan perdoruesi
    props.setInputText(e.target.value); //e dergon teksit qe ka shkr user te App.jsx per ta save ne state
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
       { text: props.inputText, completed: false, id: Math.random() * 1000 },
    ]);

    props.setInputText("");
  };
const statusHandler=(e)=>{
  console.log(e.target.value);
  props.setStatus(e.target.value);
}
  
  return (
    <form>
      <input
       value={props.inputText}

        type="text"
        className="todo-input"
        onChange={inputTextHandler}
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
