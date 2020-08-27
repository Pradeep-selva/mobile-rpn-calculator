import { PRESS_ENTER, PRESS_NUM } from "./types";

const initialState = {
  stack: [],
  inputType: "replace"
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case PRESS_NUM:
      return {
        ...state,
        stack:
          state.inputType === "replace"
            ? [payload, ...state.stack.slice(1)]
            : [state.stack[0] + payload, ...state.stack.slice(1)],
        inputType: state.inputType === "replace" && "append"
      };
    case PRESS_ENTER:
      return {
        ...state,
        stack: [0, ...state.stack],
        inputType: "replace"
      };
    default:
      return state;
  }
}
