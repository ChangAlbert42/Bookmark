const dbConnection = require("../../config/mongoConnection");
const data = require("../../data");
const utils = require("../../utils");
const rawData = require("../rawData");
const userData = data.users;
const bookData = data.books;
const genresData = data.genres;
const reviewsData = data.reviews;

const userArray = rawData.users;
const bookArray = rawData.books;
const reviewsArray = rawData.reviews;
const genresArray = rawData.genres;


async function main(){

    console.log("==================================================================================================");
    console.log("======================================Testing Genres Functions====================================");
    console.log("==================================================================================================");
    console.log("");
    try{
        console.log("TEST: getAllGenres() - Input: none - should return all genres");
        console.log("");
        const genres = await genresData.getAllGenres();
        console.log(genres);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreById() - Input: ObjectId - should throw 'Genre Id must be a string'");
        console.log("");
        const genres = await genresData.getAllGenres(22);
        const genreId = genres[0]["_id"]
        const genre = await genresData.getGenreById(genreId);
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreById() - Input: missing - should throw 'You must provide a Genre Id'");
        console.log("");
        const genre = await genresData.getGenreById();
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreById() - Input: null - should throw 'You must provide a Genre Id'");
        console.log("");
        const genre = await genresData.getGenreById(null);
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreById() - Input: NaN - should throw 'You must provide a Genre Id'");
        console.log("");
        const genre = await genresData.getGenreById(NaN);
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreById() - Input: undefined - should throw 'You must provide a Genre Id'");
        console.log("");
        const genre = await genresData.getGenreById(undefined);
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreById() - Input: boolean - should throw 'Genre Id must be a string'");
        console.log("");
        const genre = await genresData.getGenreById(true);
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreById() - Input: number - should throw 'Genre Id must be a string'");
        console.log("");
        const genre = await genresData.getGenreById(29);
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreById() - Input: Object - should throw 'Genre Id must be a string'");
        console.log("");
        const genre = await genresData.getGenreById({});
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreById() - Input: string - should return a genre");
        console.log("");
        const genres = await genresData.getAllGenres(22);
        const genreId = genres[0]["_id"]
        const genreIdString = genreId.toString();
        const genre = await genresData.getGenreById(genreIdString);
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreByGuid() - Input: guid - should return a genre");
        console.log("");
        const genres = await genresData.getAllGenres(22);
        const genreGuid = genres[0]["guid"]
        const genre = await genresData.getGenreByGuid(genreGuid);
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreByGuid() - Input: null - should throw 'You must provide a Genre Guid'");
        console.log("");
        const genre = await genresData.getGenreByGuid(null);
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreByGuid() - Input: missing - should throw 'You must provide a Genre Guid'");
        console.log("");
        const genre = await genresData.getGenreByGuid();
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreByGuid() - Input: NaN- should throw 'You must provide a Genre Guid'");
        console.log("");
        const genre = await genresData.getGenreByGuid(NaN);
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreByGuid() - Input: undefined- should throw 'You must provide a Genre Guid'");
        console.log("");
        const genre = await genresData.getGenreByGuid(undefined);
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreByGuid() - Input: boolean - should throw 'You must provide a Genre Guid'");
        console.log("");
        const genre = await genresData.getGenreByGuid(false);
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreByGuid() - Input: array - should throw 'Genre Guid must be a string'");
        console.log("");
        const genre = await genresData.getGenreByGuid([]);
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreByGuid() - Input: array - should throw 'Not a valid Genre Guid'");
        console.log("");
        const genre = await genresData.getGenreByGuid("1-1-1-1-1");
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreByGuid() - Input: array - should throw 'Not a valid Genre Guid'");
        console.log("");
        const genre = await genresData.getGenreByGuid("111111111111111111111111111111111111");
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreByGuid() - Input: array - should throw 'Not a valid Genre Guid'");
        console.log("");
        const genre = await genresData.getGenreByGuid("111-1111111111-11-11111111111111111111");
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreByGuid() - Input: guid - should throw 'Genre not found'");
        console.log("");
        const genre = await genresData.getGenreByGuid("11111111-1111-1111-1111-111111111111");
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreByGuid() - Input: empty string - should throw 'You must provide a Genre Guid'");
        console.log("");
        const genre = await genresData.getGenreByGuid("");
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreByGuid() - Input: string of spaces - should throw 'Genre Guid cannot be an empty string or just spaces'");
        console.log("");
        const genre = await genresData.getGenreByGuid("                       ");
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreByName() - Input: string - should return Mystery genre");
        console.log("");
        const genre = await genresData.getGenreByName("Mystery");
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreByName() - Input: string - should throw 'Genre not found'");
        console.log("");
        const genre = await genresData.getGenreByName("sdfkjsdg");
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreByName() - Input: empty string - should throw 'You must provide a Genre Name'");
        console.log("");
        const genre = await genresData.getGenreByName("");
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreByName() - Input: string of spaces - should throw 'Genre Name cannot be an empty string or just spaces'");
        console.log("");
        const genre = await genresData.getGenreByName("      ");
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreByName() - Input: boolean - should throw 'Genre Name must be a string'");
        console.log("");
        const genre = await genresData.getGenreByName(true);
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreByName() - Input: missing - should throw 'You must provide a Genre Name'");
        console.log("");
        const genre = await genresData.getGenreByName();
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreByName() - Input: NaN - should throw 'You must provide a Genre Name'");
        console.log("");
        const genre = await genresData.getGenreByName(NaN);
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreByName() - Input: undefined - should throw 'You must provide a Genre Name'");
        console.log("");
        const genre = await genresData.getGenreByName(undefined);
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getGenreByName() - Input: Object - should throw 'Genre Name must be a string'");
        console.log("");
        const genre = await genresData.getGenreByName({});
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createGenre() - Input: Object - should create new genre");
        console.log("");
        // FYI: running this consecutively without recreating collections via npm run
        // seed will lead to throwing 'Cannot add genre, it already exists!'
        const genre = await genresData.createGenre({"guid": utils.createGuid(), "genre": "Young Adult"});
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createGenre() - Input: Object - should create new genre");
        console.log("");
        // FYI: running this consecutively without recreating collections via npm run
        // seed will lead to throwing 'Cannot add genre, it already exists!'
        const genre = await genresData.createGenre({"guid": utils.createGuid(), "genre": "Horror"});
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createGenre() - Input: Object - should throw 'Cannot add genre, it already exists!'");
        console.log("");
        const genre = await genresData.createGenre({"guid": utils.createGuid(), "genre": "Young Adult"});
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createGenre() - Input: Object - should throw 'Genre Name cannot be empty or just spaces'");
        console.log("");
        const genre = await genresData.createGenre({"guid": utils.createGuid(), "genre": "   "});
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createGenre() - Input: Object - should throw 'Not a valid Genre Guid'");
        console.log("");
        const genre = await genresData.createGenre({"guid": "11-11-11-11-11-11-11", "genre": "Young Adult"});
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createGenre() - Input: Object - should throw 'You must include Genre Guid'");
        console.log("");
        const genre = await genresData.createGenre({});
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createGenre() - Input: Object - should throw 'You must include Genre Name'");
        console.log("");
        const genre = await genresData.createGenre({"guid": utils.createGuid()});
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createGenre() - Input: Object - should throw 'Only need Genre Guid and Genre Name'");
        console.log("");
        const genre = await genresData.createGenre({"guid": utils.createGuid(), "genre": "Young Adult", "extra": "extra"});
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createGenre() - Input: array - should throw 'You must provide an object'");
        console.log("");
        const genre = await genresData.createGenre([]);
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createGenre() - Input: undefined - should throw 'You must provide an object'");
        console.log("");
        const genre = await genresData.createGenre(undefined);
        console.log(genre);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: deleteGenreById() - Input: string - should remove Horror from list of genres");
        console.log("");
        const genres = await genresData.getAllGenres();
        console.log(genres);
        const deleteId = genres[6]["_id"].toString();     // Horror
        await genresData.deleteGenreById(deleteId);
        const newGenres = await genresData.getAllGenres();
        console.log(newGenres);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: deleteGenreById() - Input: string - should remove Young Adult from list of genres");
        console.log("");
        const genres = await genresData.getAllGenres();
        console.log(genres);
        const deleteId = genres[5]["_id"].toString().padEnd(30, "     ");       // Young Adult
        await genresData.deleteGenreById(deleteId);
        const newGenres = await genresData.getAllGenres();
        console.log(newGenres);
    } catch(e){
        console.log(e);
    }

    console.log("==================================================================================================");
    console.log("====================================Testing Reviews Functions=====================================");
    console.log("==================================================================================================");
    console.log("");

    try{
        console.log("TEST: getAllReviews() - Input: none - should return all reviews");
        console.log("");
        const reviews = await reviewsData.getAllReviews();
        console.log(reviews);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getReviewById() - Input: none - should throw 'You must provide a Review Id'");
        console.log("");
        const reviews = await reviewsData.getReviewById();
        console.log(reviews);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getReviewById() - Input: NaN - should throw 'You must provide a Review Id'");
        console.log("");
        const reviews = await reviewsData.getReviewById(NaN);
        console.log(reviews);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getReviewById() - Input: undefined - should throw 'You must provide a Review Id'");
        console.log("");
        const reviews = await reviewsData.getReviewById(undefined);
        console.log(reviews);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getReviewById() - Input: boolean - should throw 'Review Id must be a string'");
        console.log("");
        const reviews = await reviewsData.getReviewById(true);
        console.log(reviews);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getReviewById() - Input: Object - should throw 'You must provide a Review Id'");
        console.log("");
        const reviews = await reviewsData.getReviewById({});
        console.log(reviews);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getReviewById() - Input: id - should return a review");
        console.log("");
        const reviews = await reviewsData.getAllReviews();
        const reviewId = reviews[0]["_id"].toString();
        const review = await reviewsData.getReviewById(reviewId);
        console.log(review);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getReviewById() - Input: id with whitestring - should return a review");
        console.log("");
        const reviews = await reviewsData.getAllReviews();
        const reviewId = reviews[1]["_id"].toString().padEnd(30, "      ");
        const review = await reviewsData.getReviewById(reviewId);
        console.log(review);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getReviewByGuid() - Input: none - should throw 'You must provide a Review Guid'");
        console.log("");
        const reviews = await reviewsData.getReviewByGuid();
        console.log(reviews);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getReviewByGuid() - Input: Object - should throw 'Review Guid must be a string'");
        console.log("");
        const reviews = await reviewsData.getReviewByGuid({});
        console.log(reviews);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getReviewByGuid() - Input: boolean - should throw 'Review Guid must be a string'");
        console.log("");
        const reviews = await reviewsData.getReviewByGuid(true);
        console.log(reviews);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getReviewByGuid() - Input: number - should throw 'Review Guid must be a string'");
        console.log("");
        const reviews = await reviewsData.getReviewByGuid(29);
        console.log(reviews);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getReviewByGuid() - Input: string - should throw 'Not a valid Review Guid'");
        console.log("");
        const reviews = await reviewsData.getReviewByGuid("hello");
        console.log(reviews);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getReviewByGuid() - Input: string - should throw 'Not a valid Review Guid'");
        console.log("");
        const reviews = await reviewsData.getReviewByGuid("1-1-1-1-1-1-1-1");
        console.log(reviews);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getReviewByGuid() - Input: guid - should throw 'Review not found'");
        console.log("");
        const reviews = await reviewsData.getReviewByGuid("11111111-1111-1111-1111-111111111111");
        console.log(reviews);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getReviewByGuid() - Input: guid - should return a review");
        console.log("");
        const reviews = await reviewsData.getAllReviews();
        const reviewGuid = reviews[0]["guid"];
        const review = await reviewsData.getReviewByGuid(reviewGuid);
        console.log(review);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createReview() - Input: none - should throw 'You must provide a review object'");
        console.log("");
        const review = await reviewsData.createReview();
        console.log(review);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createReview() - Input: Object - should throw 'You must include Review Guid'");
        console.log("");
        const review = await reviewsData.createReview({});
        console.log(review);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createReview() - Input: Object - should throw 'You must include the Review'");
        console.log("");
        const review = await reviewsData.createReview(
            {"guid": utils.createGuid()}
        );
        console.log(review);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createReview() - Input: Object - should throw 'You must include Review Sentiment'");
        console.log("");
        const review = await reviewsData.createReview(
            {"guid": utils.createGuid(), "review": "test review"}
        );
        console.log(review);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createReview() - Input: Object - should create a review");
        console.log("");
        const review = await reviewsData.createReview(
            {"guid": utils.createGuid(), "review": "test review", "sentiment": 1}
        );
        console.log(review);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createReview() - Input: array - should throw 'You must provide an object'");
        console.log("");
        const review = await reviewsData.createReview([]);
        console.log(review);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createReview() - Input: Object - should throw 'Review Sentiment must be between -1 and 1'");
        console.log("");
        const review = await reviewsData.createReview(
            {"guid": utils.createGuid(), "review": "test review", "sentiment": 2}
        );
        console.log(review);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createReview() - Input: Object - should throw 'Review Sentiment must be between -1 and 1'");
        console.log("");
        const review = await reviewsData.createReview(
            {"guid": utils.createGuid(), "review": "test review", "sentiment": -2}
        );
        console.log(review);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createReview() - Input: Object - should throw 'Review cannot be an empty string or just spaces'");
        console.log("");
        const review = await reviewsData.createReview(
            {"guid": utils.createGuid(), "review": "     ", "sentiment": -2}
        );
        console.log(review);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createReview() - Input: Object - should throw 'Review Guid must be a string'");
        console.log("");
        const review = await reviewsData.createReview(
            {"guid": {}, "review": "     ", "sentiment": -2}
        );
        console.log(review);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: updateReview() - Input: none - should throw 'You must provide a Review Id'");
        console.log("");
        const review = await reviewsData.updateReview();
        console.log(review);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: updateReview() - Input: none - should throw 'You must provide a review object'");
        console.log("");
        const reviews = await reviewsData.getAllReviews();
        const reviewId = reviews[2]["_id"].toString();
        const review = await reviewsData.updateReview(reviewId);
        console.log(review);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: updateReview() - Input: Object - should update the review");
        console.log("");
        // FYI: running this consecutively without recreating collections via npm run
        // seed will lead to throwing 'No changes to original review detected.
        // Could not update review successfully'
        const reviews = await reviewsData.getAllReviews();
        const reviewId = reviews[2]["_id"].toString();
        const reviewGuid = reviews[2]["guid"];
        const review = await reviewsData.updateReview(reviewId,
            {"guid": reviewGuid, "review": "updated review", "sentiment": -1}
        );
        console.log(review);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: updateReview() - Input: Object - should throw 'No changes to original review detected.  Could not update review successfully'");
        console.log("");
        const reviews = await reviewsData.getAllReviews();
        const reviewId = reviews[2]["_id"].toString();
        const reviewGuid = reviews[2]["guid"];
        const review = await reviewsData.updateReview(reviewId,
            {"guid": reviewGuid, "review": "updated review", "sentiment": -1}
        );
        console.log(review);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: updateReview() - Input: Object - should throw 'Guid does not match original review'");
        console.log("");
        const reviews = await reviewsData.getAllReviews();
        const reviewId = reviews[2]["_id"].toString();
        const reviewGuid = reviews[2]["guid"];
        const review = await reviewsData.updateReview(reviewId,
            {"guid": utils.createGuid(), "review": "updated review", "sentiment": -1}
        );
        console.log(review);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: deleteReviewById() - Input: none - should throw 'You must provide a Review Id'");
        console.log("");
        await reviewsData.deleteReviewById();
        console.log(review);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: deleteReviewById() - Input: boolean - should throw 'Review Id must be a string'");
        console.log("");
        await reviewsData.deleteReviewById(true);
        console.log(review);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: deleteReviewById() - Input: ObjectId - should throw 'Review Id must be a string'");
        console.log("");
        const reviews = await reviewsData.getAllReviews();
        const reviewId = reviews[0]["_id"];
        await reviewsData.deleteReviewById(reviewId);
        console.log(review);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: deleteReviewById() - Input: string - should throw 'Review Id must be a string'");
        console.log("");
        const reviews = await reviewsData.getAllReviews();
        console.log(reviews);
        const reviewId = reviews[2]["_id"].toString();
        await reviewsData.deleteReviewById(reviewId);
        const newReviews = await reviewsData.getAllReviews();
        console.log(newReviews);
    } catch(e){
        console.log(e);
    }

    console.log("==================================================================================================");
    console.log("=====================================Testing User Functions=======================================");
    console.log("==================================================================================================");
    console.log("");
    
    try{
        console.log("TEST: getAllUsers() - Input: string - should return all users");
        console.log("");
        const users = await userData.getAllUsers();
        console.log(users);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getAllUsers() - Input: number - should return all users");
        console.log("");
        const users = await userData.getAllUsers(99999);
        console.log(users);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getUserById() - Input: none - should throw 'You must provide a User Id'");
        console.log("");
        const users = await userData.getUserById();
        console.log(users);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getUserById() - Input: undefined - should throw 'You must provide a User Id'");
        console.log("");
        const users = await userData.getUserById(undefined);
        console.log(users);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getUserById() - Input: array - should throw 'User Id must be a string'");
        console.log("");
        const users = await userData.getUserById([]);
        console.log(users);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getUserById() - Input: string - should return a user");
        console.log("");
        const users = await userData.getAllUsers();
        const userId = users[0]["_id"].toString();
        const user = await userData.getUserById(userId);
        console.log(users);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getUserByUsername() - Input: none - should throw 'You must provide a Username'");
        console.log("");
        const users = await userData.getUserByUsername();
        console.log(users);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getUserByUsername() - Input: string - should return a user");
        console.log("");
        const user = await userData.getUserByUsername("lemon");
        console.log(user);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getUserByUsername() - Input: string of spaces - should throw 'Username cannot be an empty string or just spaces'");
        console.log("");
        const user = await userData.getUserByUsername("      ");
        console.log(user);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getUserByUsername() - Input: empty string - should throw 'You must provide a Username'");
        console.log("");
        const user = await userData.getUserByUsername("");
        console.log(user);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getUserByUsername() - Input: string - should throw 'User not found'");
        console.log("");
        const user = await userData.getUserByUsername("test");
        console.log(user);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getUserByUsername() - Input: string - should return a user");
        console.log("");
        const user = await userData.getUserByUsername("LEMON");
        console.log(user);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getUserByUsername() - Input: string - should return a user");
        console.log("");
        const user = await userData.getUserByUsername("leMon");
        console.log(user);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createUser() - Input: Object - should create a user");
        console.log("");
        const user = await userData.createUser({
            guid: utils.createGuid(),
            username: "test",
            password: "test",
            type: 0,
            purchases: [{"isbn": "0385504209", "review_id": ""}],
            favorites: []
        });
        console.log(user);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createUser() - Input: Object - should throw 'Cannot add user, username already in use'");
        console.log("");
        const user = await userData.createUser({
            guid: utils.createGuid(),
            username: "test",
            password: "test",
            type: 0,
            purchases: [{"isbn": "0385504209", "review_id": ""}],
            favorites: []
        });
        console.log(user);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createUser() - Input: Object - should throw 'Favorites list must be composed of strings'");
        console.log("");
        const user = await userData.createUser({
            guid: utils.createGuid(),
            username: "test2",
            password: "test",
            type: 0,
            purchases: [{"isbn": "0385504209", "review_id": ""}],
            favorites: [{}]
        });
        console.log(user);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createUser() - Input: Object - should throw 'You must include Book Review'");
        console.log("");
        const user = await userData.createUser({
            guid: utils.createGuid(),
            username: "test2",
            password: "test",
            type: 0,
            purchases: [{"isbn": "0385504209"}],
            favorites: []
        });
        console.log(user);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createUser() - Input: Object - should throw 'You must include Book Isbn'");
        console.log("");
        const user = await userData.createUser({
            guid: utils.createGuid(),
            username: "test2",
            password: "test",
            type: 0,
            purchases: [{}],
            favorites: []
        });
        console.log(user);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createUser() - Input: Object - should create new user");
        console.log("");
        const user = await userData.createUser({
            guid: utils.createGuid(),
            username: "test3",
            password: "test",
            type: 0,
            purchases: [],
            favorites: []
        });
        console.log(user);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createUser() - Input: Object - should throw 'User Type must be either 0 or 1'");
        console.log("");
        const user = await userData.createUser({
            guid: utils.createGuid(),
            username: "test4",
            password: "test",
            type: -1,
            purchases: [],
            favorites: []
        });
        console.log(user);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: createUser() - Input: Object - should throw 'User Type must be either 0 or 1'");
        console.log("");
        const user = await userData.createUser({
            guid: utils.createGuid(),
            username: "test4",
            password: "test",
            type: 2,
            purchases: [],
            favorites: []
        });
        console.log(user);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: deleteUser() - Input: Object - should delete user");
        console.log("");
        const users = await userData.getAllUsers();
        console.log(users);
        const userId = users[1]["_id"].toString();
        await userData.deleteUser(userId);
        const newUsers = await userData.getAllUsers();
        console.log(newUsers);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: deleteUser() - Input: Object - should delete user");
        console.log("");
        const users = await userData.getAllUsers();
        console.log(users);
        const userId = users[1]["_id"].toString();
        await userData.deleteUser(userId);
        const newUsers = await userData.getAllUsers();
        console.log(newUsers);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: deleteUser() - Input: none - should throw 'You must provide a User Id'");
        console.log("");
        await userData.deleteUser();
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: deleteUser() - Input: Object - should throw 'User Id must be a string'");
        console.log("");
        await userData.deleteUser({});
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: updateUser() - Input: Object - should throw 'Guid does not match original guid'");
        console.log("");
        const users = await userData.getAllUsers();
        const userId = users[0]["_id"].toString();
        const updatedUser = await userData.updateUser(userId, {
            guid: utils.createGuid(),
            username: "lemon",
            password: "test",
            type: 0,
            purchases: [],
            favorites: []
        });
        console.log(updatedUser);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: updateUser() - Input: Object - should throw 'You must provider a Username'");
        console.log("");
        const users = await userData.getAllUsers();
        const userId = users[0]["_id"].toString();
        const userGuid = users[0]["guid"];
        const updatedUser = await userData.updateUser(userId, {
            guid: userGuid,
            username: "",
            password: "test",
            type: 0,
            purchases: [],
            favorites: []
        });
        console.log(updatedUser);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: updateUser() - Input: Object - should update user");
        console.log("");
        const users = await userData.getAllUsers();
        const userId = users[0]["_id"].toString();
        const userGuid = users[0]["guid"];
        const updatedUser = await userData.updateUser(userId, {
            guid: userGuid,
            username: "lemon2",
            password: "test",
            type: 0,
            purchases: [],
            favorites: []
        });
        console.log(updatedUser);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: updateUser() - Input: Object - should update user");
        console.log("");
        const users = await userData.getAllUsers();
        const userId = users[0]["_id"].toString();
        const userGuid = users[0]["guid"];
        const updatedUser = await userData.updateUser(userId, {
            guid: userGuid,
            username: "lemon",
            password: "test",
            type: 0,
            purchases: [],
            favorites: []
        });
        console.log(updatedUser);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: updateUser() - Input: boolean - should throw 'You must provide an object'");
        console.log("");
        const users = await userData.getAllUsers();
        const userId = users[0]["_id"].toString();
        const updatedUser = await userData.updateUser(userId, true);
        console.log(updatedUser);
    } catch(e){
        console.log(e);
    }

    console.log("==================================================================================================");
    console.log("======================================Testing Book Functions======================================");
    console.log("==================================================================================================");
    console.log("");

    try{
        console.log("TEST: getAllBooks() - Input: none - should return all books");
        console.log("");
        const books = await bookData.getAllBooks();
        console.log(books);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getBookById() - Input: none - should throw 'You must provide a Book Id'");
        console.log("");
        const books = await bookData.getBookById();
        console.log(books);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getBookById() - Input: NaN - should throw 'You must provide a Book Id'");
        console.log("");
        const books = await bookData.getBookById(NaN);
        console.log(books);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getBookById() - Input: id - should return a book");
        console.log("");
        const books = await bookData.getAllBooks();
        const bookId = books[0]["_id"].toString();
        const book = await bookData.getBookById(bookId);
        console.log(book);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getBookByName() - Input: none - should throw 'You must provide a Book Name'");
        console.log("");
        const books = await bookData.getBookByName();
        console.log(books);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getBookByName() - Input: string of spaces - should throw 'Book Name cannot be an empty string or just spaces'");
        console.log("");
        const books = await bookData.getBookByName("    ");
        console.log(books);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getBookByName() - Input: string - should return a book");
        console.log("");
        const books = await bookData.getBookByName("The Lord of the Rings");
        console.log(books);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getBookByName() - Input: string - should return a book");
        console.log("");
        const books = await bookData.getBookByName("The Lord of the RINGS");
        console.log(books);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getBookByName() - Input: string - should throw 'Book not found'");
        console.log("");
        const books = await bookData.getBookByName("Harry Potter");
        console.log(books);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getBooksByGenreId() - Input: string - should return books");
        console.log("");
        const genres = await genresData.getAllGenres();
        const genreGuid = genres[0]["guid"];
        const book = await bookData.getBooksByGenreId(genreGuid);
        console.log(book);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getBooksByGenreId() - Input: string - should return empty list");
        console.log("");
        const book = await bookData.getBooksByGenreId(utils.createGuid());
        console.log(book);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: getBooksByGenreId() - Input: Object - should throw 'Genre Guid must be a string'");
        console.log("");
        const book = await bookData.getBooksByGenreId({});
        console.log(book);
    } catch(e){
        console.log(e);
    }

    try{
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("TEST: updateBooks() - Input: Object - should update book");
        console.log("");
        const books = await bookData.getAllBooks();
        const bookId = books[0]["_id"].toString();  // The Da Vinci Code
        const book = await bookData.getBookById(bookId);
        book["summary"] = "Test";
        console.log(book);
        const updatedBook = await bookData.updateBook(bookId, book)
        console.log(updatedBook);
    } catch(e){
        console.log(e);
    }


    await dbConnection.closeConnection();

};

main().catch(console.log);