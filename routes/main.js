const { default: axios } = require('axios');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const utils = require('../utils')
const data = require('../data');
const bookData = data.books;
const genreData = data.genres;
const reviewData = data.reviews;
const userData = data.users;

router.get('/', async(req, res) => {
    try{
        const trendingBooks = await bookData.getTrendingBooks();
        const allGenres = await genreData.getAllGenres();

        res.render('site/home', {
            books: trendingBooks,
            genres: allGenres
        });
    } catch(e){
        res.status(500).json({error: e});
    }
});

router.get('/genre/:genre', async (req, res) => {
    try{
        let genre = req.params.genre;
        const getGenre = await genreData.getGenreByName(genre);
        const genreId = getGenre["guid"].toString();
        const bookList = await bookData.getBooksByGenreId(genreId);
        res.render('site/genre', {
            genre: genre,
            books: bookList
        })
    }
    catch(e){
        res.status(500).json({error: e});
    }
});

router.post('/search', async (req, res) => {
    try{
        let searchText = req.body.searchTerm;
        const bookList = await bookData.getAllBooks();
        const searchResult = utils.stringSearch(bookList, searchText);
        res.render('site/search', {
            searchTerm: searchText,
            books: searchResult
        });
    }
    catch(e){
        res.status(500).json({error: e});
    }
});

router.get('/user', async (req, res) => {
    try{

        // once we have cookies and authentication established
        // will use this instead but for now, just routing to
        // login page

		// TODO: This is NOT secure!!! Cookies can be edited locally and thus allowing users to see / edit other users' information!!!
		// For now, a hard static guid is used to test user profile page functionality!
			var testGUID = "3295f71e-cf67-4a7a-7d6d-a7a0eb8d4734";
			var hUser;
			var hPurchasedBooks;
			var hFavorites
			var hReviews;

			try
			{
				hUser 			= await userData.getUserByGUID(testGUID);
				hPurchasedBooks = await userData.getPurchasedBooksByUserGUID(testGUID);
				hFavorites 		= await userData.getFavoritesByUserGUID(testGUID);
				hReviews 		= await userData.getReviewsByUserGUID(testGUID);
				//console.dir(hReviews[2].review);
		        // if(req.session.user){
		            res.status(200).render('site/user', 
					{
						Profile:
						{
							user: hUser,
							purchases: hPurchasedBooks,
							favorites: hFavorites,
							reviews: hReviews
						}
					});
		        // } else {
		        //     res.render('site/login')
		        // }
			} catch (e)
			{
				//res.render('site/login');
				//throw e;
				console.log ("Exception caught in main.js! The following is the exception message:");
				console.log(e);
				res.status(500).json({error: e});
			};
        //res.render('site/login');
    } catch(e){
        res.status(500).json({error: e});
    }
});

router.get('/cart', async (req, res) => {
    try{
        res.render('site/cart');
    }
    catch(e){
        res.status(500).json({error: e});
    }
});

router.get('/logout', async (req, res) => {
    try{
        res.render('site/logout');
    }
    catch(e) {
        res.status(500).json({error: e});
    }
});

router.get('/signup', async (req, res) => {
    try{
        res.render('site/signup');
    }
    catch(e){
        res.status(500).json({error: e});
    }
});

router.get('/book/:book', async (req, res) => {
    try{
        let book = req.params.book;
        const bookDetails = await bookData.getBookByName(book);
        const bookGenres = bookDetails["genres"];
        const bookReviews = bookDetails["reviews"];
        let genreDetails = [];
        let reviewDetails = [];
        for(let i = 0; i < bookGenres.length; i++){
            let tempGuid = bookGenres[i]["genre_guid"];
            const tempGenre = await genreData.getGenreByGuid(tempGuid);
            genreDetails.push(tempGenre["genre"]);
        };
        for(let i = 0; i < bookReviews.length; i++){
            let tempGuid = bookReviews[i]["review_guid"];
            const tempReview = await reviewData.getReviewByGuid(tempGuid);
            reviewDetails.push(tempReview["review"]);
        };
        res.render('site/book', {
            book: bookDetails,
            genres: genreDetails,
            reviews: reviewDetails
        });
    }
    catch(e){
        res.status(500).json({error: e});
    }
});

router.post('/login', async(req, res) => {
    try{
        const username = req.body.username;
        const password = req.body.password;
        let authenticatedUsername = false;

        try{
            await userData.getUserByUsername(username);
            authenticatedUsername = true;
        }
        catch(e){
            authenticatedUsername = false;
        }

        if(!authenticatedUsername){
            // 401 --> unauthorized response (client request lacks valid authentication credentials)
            res.status(401).render('site/login', {message: "That username does not exist!"});
            return;
        }

        let user = await userData.getUserByUsername(username);
        let hashPassword = user.password;

        let authenticatedPassword = await bcrypt.compare(password, hashPassword);

        if(authenticatedPassword){
            // once we have cookies and authentication established
            // can uncomment this to store user data in the session

            // req.session.user = {
            //     username: user.username,
            //     purchases: user.purchases,
            //     favorites: user.favorites,
            //     type: user.type
            // }
            res.redirect('/cart');
        } else{
            // 401 --> unauthorized response (client request lacks valid authentication credentials)
            res.status(401).render('site/login', {message: "Incorrect password, please try again."});
        }

    }
    catch(e){
        res.status(500).json({error: e});
    }
});

module.exports = router;