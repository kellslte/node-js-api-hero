import { generateUniqueId } from "../common/utils.common.js";

const todos = [
    {
        id: generateUniqueId(),
        title: 'Buy groceries',
        description: 'Buy groceries from the store',
        completed: false
    },
    {
        id: generateUniqueId(),
        title: 'Get ready for the interview',
        description: 'Prepare for the interview',
        completed: false
    },
    
];

export const getTodos = () =>
{
    return todos;
}

export const getTodoById = ( id ) =>
{
    return todos.find( todo => todo.id === id );
}

export const createTodo = ( todo ) =>
{
    const newTodo = {
        id: generateUniqueId(),
        ...todo,
       completed: false
    }
    todos.push( newTodo );
    return newTodo;
}

export const updateTodo = ( id, todo ) =>
{
    const index = todos.findIndex( todo => todo.id === id );

    if ( index === -1 )
    {
        throw new Error( 'Todo not found' );
    }

    return todos[ index ] = {
        ...todos[ index ],
        ...todo
    }
}

export const deleteTodo = ( id ) =>
{
    const index = todos.findIndex( todo => todo.id === id );

    if ( index === -1 )
    {
        throw new Error( 'Todo not found' );
    }

    todos.splice( index, 1 );
    return true;
}