const dbConnection = require("../config/mongoConnection");
const data = require("../data");
const rawUserData = require("./data/users");
const rawBookData = require("./data/books");
const rawGenresData = require("./data/genres");
const rawReviewsData = require("./data/reviews");
const userData = data.users;
const bookData = data.books;
const genresData = data.genres;
const reviewsData = data.reviews;

async function main(){
    const db = await dbConnection.dbConnection();
    await db.dropDatabase();

    const userArray = rawUserData.users;
    const bookArray = rawBookData.books;
    const reviewsArray = rawReviewsData.reviews;
    const genresArray = rawGenresData.genres;

    console.log('Starting to seed database');

    // adding user data
    for(let i = 0; i < userArray.length; i++){
        await userData.createUser(userArray[i]);
    };

    // adding book data
    for(let i = 0; i < bookArray.length; i++){
        await bookData.createBook(bookArray[i]);
    };

    // adding review data
    for(let i = 0; i < reviewsArray.length; i++){
        await reviewsData.createReview(reviewsArray[i]);
    };

    // adding genre data
    for(let i = 0; i < genresArray.length; i++){
        await genresData.createGenre(genresArray[i]);
    };

    console.log('Done seeding database');
    
    await dbConnection.closeConnection();

};

main().catch((error) => {
    console.error(error);
    return dbConnection().then((db) => {
      return db.serverConfig.close();
    });
});