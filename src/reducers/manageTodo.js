export default function manageTodo(state = {todos: [],}, action) {
  console.log("reducer received this action:", action);
  console.log("state is currently: ", state.todos)
  switch (action.type) {
    case 'ADD_TODO':
      return {...state, todos: [...state.todos, action.payload]}
    default:
      return state
  }
}
