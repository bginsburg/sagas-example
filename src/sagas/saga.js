import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {getDataFailed, getDataSuccess, getData} from '../actions/dataActions';
import Api from '../services/dataService'


export function* fetchData({payload}) {
   try {
      console.log ('hi im saga');
      const data = yield call(Api.fetchData, payload.dataId);
      if (data) {
         yield put(getDataSuccess(data));
      } else {
         yield put(getDataFailed);
      }

   } catch (e) {
      yield put(getDataFailed);
   }
}

/*export function* mySaga() {
  yield takeEvery(getData, fetchData);
}*/

export function* mySaga() {
  yield takeLatest(getData, fetchData);
}
