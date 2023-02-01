import { all, put, takeEvery, call } from "redux-saga/effects";
import { getDataById } from "../../services/other";
import actions from "./actions";

export function* GET_DATA({ id }) {
  yield put({
    type: "other/SET_STATE",
    payload: {
      loading: true,
    },
  });

  //fetch data here
  const response = yield call(getDataById, id);

  if (response) {
    console.log(response);

    yield put({
      type: "other/SET_STATE",
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
