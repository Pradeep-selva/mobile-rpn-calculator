import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux";
import { Main } from "./components";

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
