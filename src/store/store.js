import { createStore, combineReducers } from "redux";
import reducer from './reducer';


const reducers = combineReducers({
  app: reducer
})

const store = createStore(
   reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


export default store;