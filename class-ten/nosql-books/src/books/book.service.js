import { Book } from "./book.schema.js";

export const getAllBooks = async () => {
  const books = await Book.find();

  return books;
};

export const getBookById = async (id) => {
  const book = await Book.findById(id);

  return book;
};

export const createBook = async ( book ) =>
{
    const newBook = await Book.create( book );

    return newBook;
}

export const updateBook = async ( id, book ) =>
{
    const updatedBook = await Book.update( id, book );

    return updatedBook;
}

export const deleteBook = async ( id ) =>
{
    await Book.delete( id );
}