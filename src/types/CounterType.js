// @flow
import { Record } from "immutable";
import type { RecordFactory, RecordOf } from "immutable";

type CounterType = { value: number };
const makeCounterType: RecordFactory<CounterType> = Record({ value: 0 });
export default makeCounterType;
