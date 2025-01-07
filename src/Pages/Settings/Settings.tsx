import React, { useReducer } from 'react';

// Define the type for the state
type StateType = {
  count: number;
};

// Define the type for actions
type ActionType =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' };

// Reducer function with type annotations
function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unsupported action type');
  }
}

const initialState: StateType = { count: 0 };

const Settings: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default Settings;
