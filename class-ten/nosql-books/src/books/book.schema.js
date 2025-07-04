import { createBook, deleteBook, getAllBooks, getBookById, updateBook } from "../common/db.common.js";
import { generateUniqueId } from "../common/utils.common.js";

export class Book
{
    constructor(
        title,
        description,
        author,
        price,
        publicationDate,
        genre,
        publisher,
        inStock,
        copiesAvailable,
    )
    {
        this.title = title;
        this.description = description;
        this.author = author;
        this.price = price;
        this.publicationDate = publicationDate;
        this.genre = genre;
        this.publisher = publisher;
        this.inStock = inStock;
        this.copiesAvailable = copiesAvailable;

        this.createdAt = new Date().toISOString();
        this.updatedAt = new Date().toISOString();
        this.id = generateUniqueId();
    }



    static async find ()
    {
        return await getAllBooks();
    }

    static async findById ( id )
    {
        return await getBookById( id );
    }

    static async create ( book )
    {
        return this.save( {
            ...book,
            id: generateUniqueId(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        } );
    }

    static async save ( book )
    {
        const newBook = await createBook( book );

        return newBook;
    }

    static async update ( id, book )
    {
        const updatedBook = await updateBook( id, book );

        return updatedBook;
    }

    static async delete ( id )
    {
        await deleteBook( id );
    }
}