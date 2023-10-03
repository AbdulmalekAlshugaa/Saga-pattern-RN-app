import { all } from "redux-saga/effects";
import { productMainRuntime } from "../../product/src/productSaga";

export default function* rootSaga() {
  yield all([productMainRuntime()]);
}
