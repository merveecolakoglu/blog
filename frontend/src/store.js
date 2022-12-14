import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"

import {
    postListReducer,
    postDetailsReducer,
    postTopNewReducer,
    postFashionReducer,
    postBeautyReducer,
    postLifeStyleReducer,
    postPeopleReducer,

    postCreateReducer,
    postUpdateReducer,
    postDeleteReducer,
} from "./reducers/postReducers";

import {
    userLoginReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,

    postList: postListReducer,
    postDetails: postDetailsReducer,
    postTop: postTopNewReducer,
    postFashion: postFashionReducer,
    postBeauty: postBeautyReducer,
    postlifeStyle: postLifeStyleReducer,
    postPeople: postPeopleReducer,

    postCreate:postCreateReducer,
    postUpdate:postUpdateReducer,
    postDelete:postDeleteReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin:{userInfo:userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store