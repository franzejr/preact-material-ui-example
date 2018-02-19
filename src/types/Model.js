// @flow

import { Record } from "immutable";
import VendorType from "./VendorType";
import CounterType from "./CounterType";
import type { RecordFactory, RecordOf } from "immutable";

type ModelType = { vendor: VendorType, counter: CounterType };
const makeModel: RecordFactory<ModelType> = Record({
  vendor: new VendorType(),
  counter: new CounterType()
});

export default makeModel;
