
const BookModel = require('../models/BookModel');









const addBook = async (request, response, next) => {
    try {
        const { bookName, authorName, publishedYear, bookPrice } = request.body

        if (!bookName || !authorName || !publishedYear || !bookPrice) {
            return response.status(404).json({ message: `All Fields are mandatory` })
        }

        const newBook = {
            bookName, authorName, publishedYear, bookPrice
        }
        const book = await BookModel.create(newBook)
        return response.status(200).json({ message: "Book Added Successfully", data: book })


    } catch (error) {
        next(error)
    }
}

const getAllBooks = async (request, response, next) => {
    try {

        const books = await BookModel.find({})
        return response.status(200).json({
            message: `OK`, data: books
        })

    } catch (error) {
        next(error)
    }
}
const getBookById = async (request, response, next) => {
    try {

        const { id } = request.params;
        const book = await BookModel.findById(id);

        return response.status(200).json({ message: `OK`, data: book })

    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

const deleteBookById = async (request, response, next) => {
    try {
        const { id } = request.params;

        const result = await BookModel.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: 'Book Not Found' })
        }
        return response.status(200).json({ message: 'Book Deleted Successfully' })

    } catch (error) {

    }
}

const updateBookById = async (request, response, next) => {
    try {
        const { bookName, authorName, publishedYear, bookPrice } = request.body
        if (!bookName || !authorName || !publishedYear || !bookPrice) {
            return response.status(404).json({ message: `Update the Required Fields` })
        }
        const { id } = request.params;
        const result = await BookModel.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({ message: 'Book Not Found' })
        }
        return response.status(200).json({ message: "Book Updated Successfully" })

    } catch (error) {

    }
}



module.exports = {
    addBook,
    getAllBooks,
    getBookById,
    deleteBookById,
    updateBookById

}