import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// 4. Action Creator를 import 합니다.
import { addNumber, minusNumber } from "./redux/modules/counter";

const App = () => {
	// 1. dispatch를 사용하기 위해 선언해줍니다.
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const globalNumber = useSelector((state) => state.counter.number);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setNumber(+value);
  };

	// 2. 더하기 버튼을 눌렀을 때 실행할 이벤트핸들러를 만들어줍니다.
  const onClickNumberHandler = (type) => {
		// 5. Action creator를 dispatch 해주고, 그때 Action creator의 인자에 number를 넣어줍니다.
    switch(type) {
      case 'plus':
        dispatch(addNumber(number));
      break;
      case 'minus':
        dispatch(minusNumber(number));
      break;
      default:
    }
  };

  return (
    <div>
      <div>{globalNumber}</div>
      <input type="number" onChange={onChangeHandler} />
			{/* 3. 더하기 버튼 이벤트핸들러를 연결해줍니다. */}
      <button onClick={() => onClickNumberHandler('plus')}>더하기</button>
      <button onClick={() => onClickNumberHandler('minus')}>빼기</button>
    </div>
  );
};

export default App;