import { VendorType } from "../types";
const init = new VendorType();

export default function vendor(state = init, action): VendorType {
  switch (action.type) {
    case "SOMETHING":
      return state + 1;
    case "SOMETHING_2":
      return state - 1;
    default:
      return state;
  }
}
