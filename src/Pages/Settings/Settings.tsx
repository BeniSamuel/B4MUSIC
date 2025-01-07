import React,{useReducer} from 'react'

function reducer(state,action){
    switch(action.type){
      case 'increment':
         return { count:  state.count + 1};
      case 'decrement':
         return { count:  state.count -1};
      case 'reset':
          return {count: 0};
      default:
        throw new Error();
    }
}

const initialState= {count:0}
const Settings:React.FC = () => {

  const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <div>
      <p> count : {state.count}</p>
      <button onClick={()=> dispatch({type:"increment"})}>+</button>
    </div>
  )
}

export default Settings