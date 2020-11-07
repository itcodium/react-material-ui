
import axios from 'axios';
import { setRecipes } from './Actions'
const URL = 'db.json';

function fetchData(url, callback) {
    axios.get(url)
        .then(callback)
        .catch((err) => console.log(`Error fetching recipes: ${err}`))
}

const apiMiddleware = ({ dispatch }) => next => action => {
    if (action.type === "FETCH_RECIPES") {
        fetchData(URL, ({ data }) => dispatch(setRecipes(data)));
    }

    next(action);
};

export default apiMiddleware;