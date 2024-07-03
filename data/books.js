const { ObjectId } = require('mongodb');
const mongoCollections = require('../config/mongoCollections');
const books = mongoCollections.books;
const genresData = require('./genres');
const utils = require('../utils');


const exportedMethods = {
    async getAllBooks(){
        const bookCollection = await books();
        bookList = await bookCollection.find({}).toArray();
        if(!bookList) throw `Could not get all books`;
        return bookList;
    },

    async getBookById(id){
        id = utils.checkId(id, "Book Id");

        const bookCollection = await books();
        const book = await bookCollection.findOne({_id: ObjectId(id)});

        if(!book) throw 'Book not found';
        return book;
    },

	async getBookByReviewGUID(guid)
	{
		guid = utils.checkGuid(guid, "Genre Guid");

		const bookCollection = await books();
		//const book = await bookCollection.findOne({reviews.review_guid: guid});
		const book = await bookCollection.findOne( { "reviews": { "review_guid": guid } } );

		//console.log(book);

		if (!book) throw 'Book not found containing review GUID';
		return book;
	},

    async getBookByName(bookName){
        bookName = utils.checkBookTitle(bookName, "Book Name");

        const bookCollection = await books();
        const book = await bookCollection.findOne({title: bookName});

        if(!book) throw 'Book not found';
        return book;
    },

    async getBooksByGenreId(guid){
        guid = utils.checkGuid(guid, "Genre Guid");

        const bookList = await this.getAllBooks();
        let filteredBookList = []
        for(x in bookList){
            genreList = bookList[x]["genres"];
            for(y in genreList){
                if(genreList[y]["genre_guid"] == guid){
                    filteredBookList.push(bookList[x]);
                    break;
                }
            }
        }
        return filteredBookList;
    },

    async getBookByIsbn(isbn){
        isbn = utils.checkIsbn(isbn);

        const bookCollection = await books();
        const book = await bookCollection.findOne({isbn: isbn});

        if(!book) throw 'Book not found';
        return book;
    },

    async getTrendingBooks(){
        const bookList = await this.getAllBooks();
        return utils.getTopLikedBooks(bookList);
    },

    async surpriseMe(){
        const bookList = await this.getAllBooks();
        const randomIndex = Math.floor(Math.random() * bookList.length);
        return bookList[randomIndex];
    },

    async createBook(bookObject){
        bookObject = utils.checkBookObject(bookObject, 14);

        const bookCollection = await books();
        const bookList = await this.getAllBooks();
        for(let i = 0; i < bookList.length; i++){
            if(bookObject["title"].toLowerCase() == bookList[i]["title"].toLowerCase()) throw `Book title already exists, cannot add book`;
            if(bookObject["isbn"] == bookList[i]["isbn"]) throw `Book isbn already exists, cannot add book`;
        };

        const newBook = {
            title: bookObject.title,
            isbn: bookObject.isbn,
            guid: bookObject.guid,
            price: bookObject.price,
            image: bookObject.image,
            summary: bookObject.summary,
            author: bookObject.author,
            pageCount: bookObject.pageCount,
            genres: bookObject.genres,
            likes: bookObject.likes,
            dislikes: bookObject.dislikes,
            inventory: bookObject.inventory,
            numberSold: bookObject.numberSold,
            reviews: bookObject.reviews
        }
        const createInfo = await bookCollection.insertOne(newBook);
        if (!createInfo.acknowledged || !createInfo.insertedId) throw 'Could not add book';
        const newId = createInfo.insertedId.toString();
        const newEntry = await this.getBookById(newId);
        return newEntry;
    },

    async deleteBookById(id){
        id = utils.checkId(id, "Book Id");

        const bookCollection = await books();
        const deletionInfo = await bookCollection.deleteOne({_id: ObjectId(id)});
        if(deletionInfo.deletedCount === 0) throw `Could not delete book with id of ${id}`;
    },

    async updateBook(id, updatedBookData){
        id = utils.checkId(id, "Book Id");
        updatedBookData = utils.checkBookObject(updatedBookData, 15);

        const updateData = updatedBookData;
        const bookCollection = await books();
        const bookList = await this.getAllBooks();

        const updatedInfo = await bookCollection.updateOne(
            {_id: ObjectId(id)},
            {$set: updateData}
        );
        if(updatedInfo.modifiedCount === 0) throw 'No changes to original book detected.  Could not update book successfully';
        
        return await this.getBookById(id);
    }

};

module.exports = exportedMethods;