import { createStore } from "redux";
import { rootReducer } from "../reducer/rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const countStore = createStore(rootReducer, composeWithDevTools());

export default countStore;