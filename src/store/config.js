import { createStore, combineReducers } from 'redux';
import PlaceReducers from './reducers/places';

const rootReducer = combineReducers({
    places: PlaceReducers
});

const configStore = () => {
    return createStore(rootReducer);
};

export default configStore;