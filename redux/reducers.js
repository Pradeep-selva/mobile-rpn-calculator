const initialState = {
  stack: [],
  inputType: "replace"
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case "PLACEHOLDER":
      return state;
    default:
      return state;
  }
}
