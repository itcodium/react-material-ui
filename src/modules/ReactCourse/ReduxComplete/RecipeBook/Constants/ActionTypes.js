const asyncActionType = (type) => ({
    PENDING: `${type}_PENDING`,
    SUCCESS: `${type}_SUCCESS`,
    ERROR: `${type}_ERROR`,
});
export const LOGIN = asyncActionType('LOGIN');
export const RECIPES = asyncActionType('RECIPES');
