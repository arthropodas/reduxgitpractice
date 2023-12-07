
// import redux from redux
const redux = require('redux');
const createStore = require('redux').createStore;

const BUY_CAKE = 'BUY_CAKE';

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'first redux action',
    };
}

const initialState = {
    numOfCakes: 10
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            };
        default:
            return state;
    }
};

const store = createStore();
console.log("Initial state", store.getState());

const unSubscribe = store.subscribe(() => console.log('Updated state', store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());

unSubscribe();
