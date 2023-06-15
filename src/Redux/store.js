import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer'; // root reducer

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
