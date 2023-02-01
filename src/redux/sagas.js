import { all } from "redux-saga/effects";
import main from "./main/sagas";
import other from "./other/sagas";

export default function* rootSaga() {
  yield all([main(), other()]);
}
