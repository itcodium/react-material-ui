
import { call, put, takeEvery } from 'redux-saga/effects'
import INGREDIENTS from '../Types/Ingredients';

const apiUrl = `./static/data/ingredients.json`;
function getApi() {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        }
    }).then(response => response.json())
        .catch((error) => { throw error })
}

function* fetchRecipes() {
    try {
        const data = yield call(getApi);
        yield put({ type: INGREDIENTS.SUCCESS, payload: data });
    } catch (e) {
        yield put({ type: INGREDIENTS.ERROR, message: e.message });
    }
}

function* saga() {
    yield takeEvery(INGREDIENTS.FETCH, fetchRecipes);
}

export default saga;