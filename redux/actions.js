import { PRESS_ENTER, PRESS_NUM, PRESS_OPERATION } from "./types";

export const pressNum = (number) => ({
  type: PRESS_NUM,
  payload: number
});

export const pressEnter = () => ({
  type: PRESS_ENTER
});

export const pressOperator = (operator) => ({
  type: PRESS_OPERATION,
  payload: operator
});
