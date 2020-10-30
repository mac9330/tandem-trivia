
// import merge from 'lodash.merge'


const QuestionsReducer = (state = {}, action) => {
    Object.freeze(state);
    // const newState = merge({}, state); 
    
    switch(action.type) {
        default: 
            return state;
    }
}

export default QuestionsReducer;


// const entitiesReducer = combineReducers({users, spots, reviews, reservations });