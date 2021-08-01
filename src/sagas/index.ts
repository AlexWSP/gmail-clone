import { all, call, CallEffect, put, PutEffect, takeEvery } from 'redux-saga/effects';

// interface Email {
//   starred: boolean;
//   from: String;
//   subject: String;
//   message: String;
//   received: String;
//   read: boolean;
// }


export function* fetchEmailList(): Generator<CallEffect | PutEffect, void, any> {
  const endpoint = 'https://gist.githubusercontent.com/AlexWSP/cbf2e5b6b4ec721d6d005cd750c5a5c9/raw/8c51296cbfe4cac9d1c452af44cca2c762096aef/email-list.json';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({ type: 'RENDER_EMAIL_LIST', emailList: data });
  //console.log(data);
}

export function* loadEmailList() {
  yield takeEvery('LOAD_EMAIL_LIST', fetchEmailList);
}

export default function* rootSaga() {
  yield all([loadEmailList()]);
}