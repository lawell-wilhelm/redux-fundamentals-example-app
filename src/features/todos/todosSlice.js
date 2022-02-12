const initialState =  [
        {id: 0, text: 'Learn React', completed: true},
        {id: 0, text: 'Learn Redux', completed: false, color: 'purple'},
        {id: 0, text: 'Build something fun!', completed: false, color: 'blue'},
]

function nextTodoId(todos) {
    const maxId = todos.reduce(
        // the initial maxId is -1 because an id startwith 0
        (maxId, todo) => Math.max(todo.id, maxId), -1
    )
    return maxId + 1;
}

export default function todosReducer(state = initialState, action) {
    switch(action.type) {
        case 'todo/todoAdded':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: nextTodoId(state.todos),
                        text: action.payload,
                        completed: false
                    }
                ]
            }
        case 'todo/todoToggled':
            return [
                ...state,
                state.map(todo => {
                    if (todo.id !== action.payload) { return todo }
                    return {...todo, completed: !todo.completed}
                })
            ]
        default:
            return state
    }
}