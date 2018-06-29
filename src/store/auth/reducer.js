/***
 @Author :Abdelhamid.BELGACEM
 @ 27 Juin 2018
 @ 18:21:34
 @LANSROD GROUP
 @ Mathurins 75008
 ***/


import Immutable from 'seamless-immutable';

const initialState = Immutable({});

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return state.merge({
                redirectTo: '/',
                token: action.data.token,
                currentUser: action.data.user
            });
            break;
        case 'LOGOUT':
            return state.merge({
                redirectTo: '/',
                token: null,
                currentUser: undefined
            });
            break;
    }

    return state;
};
