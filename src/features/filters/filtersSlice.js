const initialState = {
    status: 'All',
    colors: []
}

function nextTodoId(todos) {
    const maxId = todos.reduce(
        // the initial maxId is -1 because an id startwith 0
        (maxId, todo) => Math.max(todo.id, maxId), -1
    )
    return maxId + 1;
}

export default function filtersReducer(state = initialState, action) {
    switch(action.type) {
        case 'filters/statusFilterChanged':
            return {
                ...state,
                status: action.payload
            }
        default:
            return state
    }
}