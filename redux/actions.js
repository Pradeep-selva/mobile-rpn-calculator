import {
  PRESS_ENTER,
  PRESS_NUM,
  PRESS_OPERATION,
  PRESS_SWAP,
  PRESS_CLEAR
} from "./types";

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

export const pressClear = () => ({
  type: PRESS_CLEAR
});

export const pressSwap = () => ({
  type: PRESS_SWAP
});
