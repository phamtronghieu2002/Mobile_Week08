import { createStore } from 'redux'

export function addTodo(text) {
  return {
    type: 'ADD',
    payload:text
  }
}
export function updateTodo(newJob,id) {
  return {
    type: 'UPDATE',
    payload:{id,newJob}
  }
}

const initialState=[{
id:1,
todo:"quet nha"
},{
id:2,
todo:"lau nha"
}]

const reducer= (state=initialState,action)=>{
      const type=action.type;
      if(type=="ADD")
      {
          return [...state,action.payload]
      }else if(type=="UPDATE")
    {
      const {id,newJob}=type.payload;
      state.forEach(todo=>{
      if(todo.id==id)
      {
      todo.todo=newJob;
      }
      })
     return [...state]
    }    
}
const store = createStore(reducer)
console.log(store.getState())
export default store;
