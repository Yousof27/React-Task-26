import { DECREMENT, INCREMENT, RESET } from "../type/types";

const initialCountValue = { count: 0 };

const countReducer = (state = initialCountValue, action) => {
    switch (action.type) {
        case INCREMENT: return { count: state.count + action.payload };

        case DECREMENT: return { count: state.count - action.payload };

        case RESET: return initialCountValue;

        default: return state;
    }
}

export default countReducer;