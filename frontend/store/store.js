import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';


const preloadedState = {
  notes: [],
  tracks: {},
  isRecording:false,
  isPlaying:false
};

const addLoggingToDispatch = store => next => action => {
  console.log(`This is the old state: ${store.getState()}`);
  console.log(`This is the action: ${action}`);
  let result = next(action);
  console.log(`This is the new state: ${store.getState()}`);
  return result;
};

const configureStore = (state = preloadedState) => (
  createStore(
    rootReducer,
    state,
    applyMiddleware(addLoggingToDispatch)
  )
);

export default configureStore;
