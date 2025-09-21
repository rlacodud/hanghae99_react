import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodo } from "./redux/modules/todos";

const App = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const todos = useSelector((state) => state.todos.todo);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    const type = event.target.dataset.type;
    switch(type) {
      case 'title':
        setTitle(value);
      break;
      case 'desc':
        setDesc(value);
      break;
    }
  };

  const onClickTodoHandler = () => {
    if(title.trim() === "") {
      alert('할 일을 입력해주세요!');
      return;
    }
    dispatch(addTodo({
      id: todos.length > 0 ? todos.length : 0,
      title,
      desc
    }));
    setTitle('');
    setDesc('');
  };

  return (
    <div>
      <input value={title} type="text" data-type="title" placeholder="할 일의 제목을 입력해주세요" onChange={onChangeHandler} />
      <input value={desc} type="text" data-type="desc" placeholder="할 일의 설명을 입력해주세요" onChange={onChangeHandler} />
      <button onClick={onClickTodoHandler}>추가</button>

      {
        todos.length > 0 
        ?
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <h2>{todo.title}</h2>
              {todo.desc && <p>{todo.desc}</p>}
            </li>
          ))}
        </ul>
        : <p>할 일을 등록해주세요.</p>
      }
    </div>
  );
};

export default App;