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

// function* createSnack(action) {
//   console.log('createSnacks action:', action);
//   // POST the new snack
//   const response = yield axios({
//     method: 'POST',
//     url: '/api/snacks',
//     data: {
//       name: action.payload
//     }
//   })
//   // Re-ren the fetchPets function
//   yield put({ type: 'FETCH_SNACKS' })

// }


function* shelfSaga() {
  yield takeEvery('FETCH_SHELF', fetchShelf);
//   yield takeEvery('CREATE_SNACK', createSnack);
}

export default shelfSaga;
