import {createStore} from "redux";
import {homeReducer} from "./introduction/home.reducer";

const store = createStore(homeReducer);
export default store;