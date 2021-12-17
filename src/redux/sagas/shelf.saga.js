import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchShelf(action) {
  try {
    const response = yield axios({
      method: 'GET',
      url: '/api/shelf'
    })
    console.log(response.data)
    yield put({
      type: 'SET_SHELF',
      payload: response.data
    })
  } catch(err) {
    console.error('fetchShelf error', err)
  }
}

function* addItem(action) {
  console.log('addItem action:', action);
  const response = yield axios({
    method: 'POST',
    url: '/api/shelf',
    data: action.payload
  })
  yield put({ type: 'FETCH_SHELF' })
}

function* shelfSaga() {
  yield takeEvery('FETCH_SHELF', fetchShelf);
  yield takeEvery('ADD_ITEM', addItem);
}

export default shelfSaga;
