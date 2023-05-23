import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchUsersSaga(action) {
  const users = yield call(api.fetchUsers);

  yield put(actions.getUsers.getUsersSuccess(users.data));
}

//generater function
function* mySaga() {
  yield takeLatest(actions.getUsers.getUsersRequest, fetchUsersSaga);
}

export default mySaga;
