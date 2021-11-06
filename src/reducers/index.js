import {combineReducers} from 'redux';

import posts from './posts';
import currentVolcano from './currentVolcano';
import searchBoolean from './searchBoolean';

export default combineReducers({
    posts,
    currentVolcano,
    searchBoolean,
});