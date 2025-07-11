import * as bookService from "./book.service.js";
import { catchAsync, sendResponse } from "../common/utils.common.js";

export const getAllBooks = catchAsync( async ( req, res ) =>
{
    const books = await bookService.getAllBooks();

    sendResponse( res, 200, true, 'Books fetched successfully', books );
} );

export const getBookById = catchAsync( async ( req, res ) =>
{
    const { id } = req.params;

    const book = await bookService.getBookById( id );

    sendResponse( res, 200, true, 'Book fetched successfully', book );
} );

export const createBook = catchAsync( async ( req, res ) =>
{
    const book = await bookService.createBook( req.body );

    sendResponse( res, 201, true, 'Book created successfully', book );
} );

export const updateBook = catchAsync( async ( req, res ) =>
{
    const { id } = req.params;

    const book = await bookService.updateBook( id, req.body );

    sendResponse( res, 200, true, 'Book updated successfully', book );
} );

export const deleteBook = catchAsync( async ( req, res ) =>
{
    const { id } = req.params;

    await bookService.deleteBook( id );

    sendResponse( res, 200, true, 'Book deleted successfully', null );
} );