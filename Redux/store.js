import { createStore } from "redux";
import { combineReducers } from 'redux';

import authreducer from "./AuthRedux/authreducer"
import bookreducer from "./BookRedux/bookreducer"
import orderReducer from "./OrderRedux/orderReducer"

const rootReducer=combineReducers({
    auth:authreducer,
    book:bookreducer,
    order:orderReducer,
})
const store =createStore(rootReducer);
export default store;