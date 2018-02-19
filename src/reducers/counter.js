import { CounterType } from "../types";
const init = new CounterType();

export const Types = {
  INCREMENT: "counter/INCREMENT",
  DECREMENT: "counter/DECREMENT"
};

export const Actions = {
  increment: () => {
    return { type: Types.INCREMENT };
  }
};

export default function counter(
  state: CounterType = init,
  action
): CounterType {
  switch (action.type) {
    case Types.INCREMENT:
      return state.update("value", v => v + 1);
    case Types.DECREMENT:
      return state.update("value", v => v - 1);
    default:
      return state;
  }
}
