
import { call, put, takeEvery } from 'redux-saga/effects'
import Types from '../Types';


const apiUrl = `./static/data/recipes.json`;
function getApi() {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        }
    }).then(response => response.json())
        .catch((error) => { throw error })
}

function* fetchRecipes(action) {
    try {
        const recipes = yield call(getApi);
        yield put({ type: Types.SUCCESS, payload: recipes });
    } catch (e) {
        yield put({ type: Types.ERROR, message: e.message });
    }
}

function* recipeSaga() {
    yield takeEvery(Types.RECIPES_FETCH, fetchRecipes);
}

export default recipeSaga;