import React, { Component } from 'react';
import Store, { createStore } from 'redux';


class ReduxDemo extends Component {
  render() {

    // Step 2 : Reducer : state n action
    const reducer = function(state, action) {
      if (action.type === 'ATTACK') {
        return action.payload
      }
      if (action.type === 'GREEN_ATTACK') {
        return action.payload
      }
      return state;
    }

    // Step 1 : Store: reducer n state
    const store = createStore(reducer, 'peace');

    // Step 3 : Subsribe
    store.subscribe(() => {
      console.log('Store is now ', store.getState());
    })

    // Step 4 : Dispatch action
    store.dispatch({type: 'ATTACK', payload: 'Iron Man'})
    store.dispatch({type: 'GREEN_ATTACK', payload: 'HULK'})


    return (
      <div>
        test
      </div>
    )
  }
}

export default ReduxDemo;