import { PRESS_ENTER, PRESS_NUM } from "./types";

export const pressNum = (number) => ({
  type: PRESS_NUM,
  payload: number
});

export const pressEnter = () => ({
  type: PRESS_ENTER
});
