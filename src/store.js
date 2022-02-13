import { createStore } from 'redux';
import rootReducer from './rootReducer';

let preloadedState;
const persistedTodosString = localStorage.getItem('todos');

if (persistedTodosString) {
    preloadedState = JSON.parse(persistedTodosString);
}

const store = createStore(rootReducer, preloadedState);

export default store;