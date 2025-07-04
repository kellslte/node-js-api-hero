import { existsSync } from "fs";
import { readFile, writeFile } from "fs/promises";
import path from "path";


const writeToFileDb = async ( data ) =>
{
    const filePath = path.join( process.cwd(), 'src', 'common', 'books.json' );

    await checkDbExists( filePath );

    // write the data to the file
    await writeFile( filePath, JSON.stringify( data, null, 2 ) );

}

const  checkDbExists = async (filepath) => {
  // check for the existence of the file and create it if it doesn't exist
  if (!existsSync(filepath)) {
    await writeFile(filepath, JSON.stringify([], null, 2));
  }
}

const readFromFileDb = async (  ) =>
{
    const filepath = path.join( process.cwd(), "src", "common", "books.json" );
    
    await checkDbExists( filepath );

    const data = await readFile( filepath, 'utf-8' );

    return JSON.parse( data );
}

export const getAllBooks = async () => await readFromFileDb();

export const getBookById = async ( id ) =>
{
    const books = await readFromFileDb();

    const book = books.find( ( book ) => book.id === id );

    return book;
}

export const createBook = async ( book ) => {
    const books = await readFromFileDb();

    books.push( book );

    await writeToFileDb( books );

    return book;
}

export const updateBook = async ( id, book ) =>
{
    const books = await readFromFileDb();

    const index = books.findIndex( ( book ) => book.id === id );

    if(index === -1) {
        throw new Error( 'Book not found' );
    }

    books[ index ] = {
        ...books[index],
        ...book,
        updatedAt: new Date().toISOString()
    }

    await writeToFileDb( books );

    return books[index];
}

export const deleteBook = async ( id ) =>
{
    const books = await readFromFileDb();
    
    const index = books.findIndex( ( book ) => book.id === id );

    if ( index === -1 )
    {
        throw new Error( '"Book not found' );
    }

    books.splice( index, 1 );

    await writeToFileDb( books );
}