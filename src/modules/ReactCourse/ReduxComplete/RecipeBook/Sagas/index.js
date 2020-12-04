import { all } from 'redux-saga/effects'
import Recipes from './Recipes'
import Ingredients from './Ingredients'

export default function* rootSaga() {
    yield all([
        Recipes(),
        Ingredients()
    ])
}