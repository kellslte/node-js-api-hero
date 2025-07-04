import { catchAsync, sendResponse } from "../common/utils.common.js";
import *  as todoService from "./todo.service.js";

export const getTodos = catchAsync( async ( req, res ) =>
{
    const todos = todoService.getTodos();

    sendResponse( res, 200, true, "Fetched all todos", todos );
})

export const getTodoById = catchAsync( async ( req, res ) =>
{
    const { id } = req.params;
    const todo = todoService.getTodoById( id );
    sendResponse( res, 200,  true, "Fetched todo", todo );
})

export const createTodo = catchAsync( async ( req, res ) =>
{
    const { title, description } = req.body;
    const todo = todoService.createTodo( { title, description } );
    sendResponse( res, 201, true, "Todo created", todo );
})

export const updateTodo = catchAsync( async ( req, res ) =>
{
    const { id } = req.params;
    const { title, description, completed } = req.body;

    todoService.updateTodo(id, { title, description, completed });
    sendResponse( res, 200, true, "Todo updated", todoService.getTodoById( id ) );
} );

export const deleteTodo = catchAsync( async ( req, res ) =>
{
    const { id } = req.params;
    todoService.deleteTodo( id );
    sendResponse( res, 200, true, "Todo deleted", null );
} );