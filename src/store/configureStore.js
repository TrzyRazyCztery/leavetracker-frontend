import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';


function configureStore(initialState){
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}

export default configureStore;