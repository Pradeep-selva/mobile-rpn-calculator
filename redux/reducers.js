import {
  PRESS_ENTER,
  PRESS_NUM,
  PRESS_OPERATION,
  PRESS_SWAP,
  PRESS_CLEAR
} from "./types";

const initialState = {
  stack: [],
  inputType: "replace"
};

const performOperation = (x, y, op) => {
  const p = parseFloat(x);
  const q = parseFloat(y);

  if (op === "pow") return q ** p;
  else if (op === "+") return q + p;
  else if (op === "-") return q - p;
  else if (op === "/") return q / p;
  else if (op === "X") return q * p;
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case PRESS_OPERATION:
      return {
        stack: [
          `${performOperation(state.stack[0], state.stack[1], payload)}`,
          ...state.stack.slice(2)
        ],
        inputType: "push"
      };
    case PRESS_NUM:
      let newStack;

      if (state.inputType === "replace")
        newStack = [payload, ...state.stack.slice(1)];
      else if (state.inputType === "append")
        newStack = [state.stack[0] + payload, ...state.stack.slice(1)];
      else if (state.inputType === "push") newStack = [payload, ...state.stack];

      return {
        ...state,
        stack: newStack,
        inputType: "append"
      };
    case PRESS_ENTER:
      return {
        ...state,
        stack: [state.stack[0], ...state.stack],
        inputType: "replace"
      };
    case PRESS_CLEAR:
      return initialState;
    case PRESS_SWAP:
      return {
        ...state,
        stack: [state.stack[1], state.stack[0], ...state.stack.slice(2)]
      };
    default:
      return state;
  }
}
