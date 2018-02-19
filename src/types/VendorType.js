// @flow
import { Record } from "immutable";
import type { RecordFactory, RecordOf } from "immutable";

type Vendor = { name: string };
const VendorType: RecordFactory<Vendor> = Record({ name: "" });
export default VendorType;
