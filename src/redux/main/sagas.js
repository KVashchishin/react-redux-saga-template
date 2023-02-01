import { all, put, takeEvery, call } from "redux-saga/effects";
import { getData } from "../../services/main";
import actions from "./actions";

export function* GET_DATA() {
  yield put({
    type: "main/SET_STATE",
    payload: {
      loading: true,
    },
  });

  //fetch data here
  const response = yield call(getData);

  if (response) {
    console.log(response);

    yield put({
      type: "main/SET_STATE",
      payload: {
        data: response,
        loading: false,
      },
    });
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.GET_DATA, GET_DATA)]);
}
