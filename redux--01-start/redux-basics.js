const redux = require('redux'); //this is node.js syntax to import somtething
const createStore = redux.createStore;


const initialState = {
    counter: 0,
}

// REDUCER
const rootReducer = (state = initialState, action) => {
    // takes in state, returns updated state
    if (action.type  === 'INC_COUNTER') {  
        return {
            // do it this way instead of just this.state.counter++
            // to avoid mutating the original data
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type  === 'ADD_COUNTER') {
        return {
            // do it this way instead of just this.state.counter++
            // to avoid mutating the original data
            ...state,
            counter: state.counter + action.value
        }
    }


    return state;
}

// STORE
const store = createStore(rootReducer);
console.log(store.getState());

// SUBSCRIPTION

store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});


// DISPATCHING ACTION
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10}); // could pass an object, like 'payload: {}'
console.log(store.getState());



