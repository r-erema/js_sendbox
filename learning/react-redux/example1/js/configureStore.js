import { loadState, saveState} from "./utils/loadState";
import { createStore } from "redux";
import throttle from "lodash/throttle";
import todoApp from './reducers';

const configureStore = () => {
    const persistState = loadState();
    const store = createStore(todoApp, persistState);

    store.subscribe(throttle(() => {
        saveState({
            todos: store.getState().todos
        })
    }, 1000));

    return store;
};

export default configureStore;