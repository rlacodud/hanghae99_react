// 초기 상태값
const initialState = {
    number: 0,
};

// 리듀서
const counter = (state = initialState, action) => {
    switch (action.type) {
        case "PLUS_ONE":
        return {
            number: state.number + 1,
        };

        // action.type이 MINUS_ONE 일 때 새로운 state 반환
        case "MINUS_ONE":
        return {
            number: state.number - 1,
        };
        default:
        return state;
    }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;