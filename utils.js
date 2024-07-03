const { ObjectId } = require('mongodb');

module.exports = {
    guid4(){
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    },

    createGuid(){  
        return (this.guid4() + this.guid4() + "-" + this.guid4() + "-4" + this.guid4().substr(0,3) + "-" + this.guid4() + "-" + this.guid4() + this.guid4() + this.guid4()).toLowerCase();  
     },

     getTopLikedBooks(bookLikst){
        bookLikst.sort((b, a) => (a.likes > b.likes) ? 1 : -1);
        if(bookList.length >= 15){
            maxAmount = 15
        } else {
            maxAmount = bookList.length;
        }
        outputList = [];
        for(let i = 0; i < maxAmount; i++){
            outputList.push(bookList[i]);
        }

        return outputList;
     },

     stringSearch(bookList, searchText){
        const textFormatted = searchText.toLowerCase();
        const returnList = [];
        for(let i = 0; i < bookList.length; i++){
            let book = bookList[i];
            let author = book["author"].toLowerCase();
            let title = book["title"].toLowerCase();
            if(author.includes(textFormatted)){
                returnList.push(book);
                continue;
            };
            if(title.includes(textFormatted)){
                returnList.push(book);
                continue;
            };
        };
        return returnList;
     },

     checkId(id, varName){
        if (!id) throw `Error: You must provide a ${varName}`;
        if (typeof id != 'string') throw `Error: ${varName} must be a string`;
        id = id.trim();
        if (id.length == 0) throw `Error: ${varName} cannot be an empty string or just spaces`;
        if (!ObjectId.isValid(id)) throw `Error: ${varName} invalid object Id`;
        return id;
    },

    checkGuid(guid, varName){
        if (!guid) throw `Error: You must provide a ${varName}`;
        if (typeof guid != 'string') throw `Error: ${varName} must be a string`;
        guid = guid.trim();
        if (guid.length == 0) throw `Error: ${varName} cannot be an empty string or just spaces`;
        guidArray = guid.split("-");
        if (guidArray.length != 5) throw `Error: Not a valid ${varName}`;
        if (guidArray[0].length != 8) throw `Error: Not a valid ${varName}`;
        if (guidArray[1].length != 4) throw `Error: Not a valid ${varName}`;
        if (guidArray[2].length != 4) throw `Error: Not a valid ${varName}`;
        if (guidArray[3].length != 4) throw `Error: Not a valid ${varName}`;
        if (guidArray[4].length != 12) throw `Error: Not a valid ${varName}`;
        return guid;
    },

    checkString(val, varName){
        if(!val) throw `Error: You must provide a ${varName}`;
        if (typeof val != 'string') throw `Error: ${varName} must be a string`;
        val = val.trim();
        if(val.length == 0) throw `Error: ${varName} cannot be an empty string or just spaces`;
        if (!isNaN(val)) throw `Error: ${val} is not a valid value for ${varName} as it only contains digits`;
        return val; 
    },

    checkBookTitle(val, varName){
        if(!val) throw `Error: You must provide a ${varName}`;
        if (typeof val != 'string') throw `Error: ${varName} must be a string`;
        val = val.trim();
        if(val.length == 0) throw `Error: ${varName} cannot be an empty string or just spaces`;
        return val; 
    },

    checkIsbn(val, varName){
        if(!val) throw `Error: You must provide a ${varName}`;
        if (typeof val != 'string') throw `Error: ${varName} must be a string`;
        val = val.trim();
        if(val.length == 0) throw `Error: ${varName} cannot be an empty string or just spaces`;
        if (isNaN(val)) throw `Error: ${val} is not a valid value for ${varName}`;
        return val; 
    },

    checkBookReview(val, varName){
        if (typeof val != 'string') throw `Error: ${varName} must be a string`;
        return val;
    },

    checkSentiment(val, varName){
        if(typeof val != 'number') throw `Error: ${varName} must be a number`;
        if(isNaN(val)) throw `Error: ${varName} must be a number`;
        if((val < -1) || (val > 1)) throw `Error: ${varName} must be between -1 and 1`;
        return val;
    },

    checkUserPurchases(val, varName){
        if(typeof val != 'object') throw `Error: You must provide an object`;
        if(!Array.isArray(val)) throw `Error: You must provide an array`;
        // it's okay if array is empty but if it has data we need to check the objects within
        if(val.length > 0){
            for(let i = 0; i < val.length; i++){
                let tempObj = val[i];
                if(!('isbn' in tempObj)) throw `Error: You must include Book Isbn`;
                if(!('review_id' in tempObj)) throw `Error: You must include Book Review`;  // book review can be empty but still needs to be part of the object
                if(Object.keys(tempObj).length > 2) throw `Error: Only need Book Isbn and Book Review`;
                tempObj['isbn'] = this.checkIsbn(tempObj['isbn'], "Book Isbn");
                tempObj['review_id'] = this.checkBookReview(tempObj['review_id'], "Book Review Id");
            }
        };
        return val;
    },

    checkUserFavorites(val, varName){
        if(typeof val != 'object') throw `Error: You must provide an object`;
        if(!Array.isArray(val)) throw `Error: You must provide an array`;
        // it's okay if array is empty but if it has data we need to check the objects within
        if(val.length > 0){
            for(let i = 0; i < val.length; i++){
                if(typeof val[i] != 'string') throw `Error: Favorites list must be composed of strings`;
                this.checkIsbn(val[i]);
            }
        };
        return val;
    },

    checkUserType(val, varName){
        if(typeof val != 'number') throw `Error: ${varName} must be a number`;
        if(isNaN(val)) throw `Error: ${varName} must be a number`;
        if((val < 0) || (val > 1)) throw `Error: ${varName} must be either 0 or 1`;
        return val;
    },

    checkNumber(val, varName){
        if(!val) throw `Error: You must provide a ${varName}`;
        if(typeof val != 'number') throw `Error: ${varName} must be a string`;
        if(val < 0) throw `Error: ${varName} must be greater than 0`;
        if(val > 999999) throw `Error: ${varName} must be less than 999999`;
        return val; 
    },

    checkNumberZeroAllowed(val, varName){
        //if(!val) throw `Error: You must provide a ${varName}`;
        if(typeof val != 'number') throw `Error: ${varName} must be a string`;
        if(val < 0) throw `Error: ${varName} must be greater than 1`;
        if(val > 999999) throw `Error: ${varName} must be less than 999999`;
        return val; 
    },

    checkImageLink(val, varName){
        if(!val) throw `Error: You must provide a ${varName}`;
        if (typeof val != 'string') throw `Error: ${varName} must be a string`;
        val = val.trim();
        if(val.length == 0) throw `Error: ${varName} cannot be an empty string or just spaces`;
        if (!isNaN(val)) throw `Error: ${val} is not a valid value for ${varName}`;
        if(!val.includes('http')) throw `Error: invalid image link`;
        return val;
    },

    checkGenresArray(val, varName){
        if(!val) throw `Error: You must provide a genre array`;
        if(typeof val != 'object') throw `Error: You must provide a genre array`;
        if(!Array.isArray(val)) throw `Error: You must provide a genre array`;
        if(val.length == 0) throw `Error: Book must have at least 1 genre`;
        for(let i = 0; i < val.length; i++){
            let tempGenre = val[i];
            if(!('genre_guid' in tempGenre)) throw `Error: You must include Genre Guid`;
            if(Object.keys(tempGenre).length > 1) throw `Error: Too much information provided in genre array`;
            tempGenre['genre_guid'] = this.checkGuid(tempGenre['genre_guid']);
        }
        return val;
    },

    checkReviewsArray(val){
        if(!val) throw `Error: You must provide a reviews array`;
        if(typeof val != 'object') throw `Error: You must provide a reviews array`;
        if(!Array.isArray(val)) throw `Error: You must provide a genre array`;
        // reviews array can be empty but if there is data need to validate the contents
        if(val.length > 1){
            for(let i = 0; i < val.length; i++){
                let tempReview = val[i];
                if(!('review_guid' in tempReview)) throw `Error: You must include Review Guid`;
                if(Object.keys(tempReview).length > 1) throw `Error: Too much information provided in genre array`;
                tempReview['review_guid'] = this.checkGuid(tempReview['review_guid']);
            }
        };
        return val;
    },

    checkGenresObject(genreObj){
        if(!genreObj) throw `Error: You must provide a genre object`;
        if(typeof genreObj != 'object') throw `Error: You must provide an object`;
        if(Array.isArray(genreObj)) throw `Error: You must provide an object`;
        if(!('guid' in genreObj)) throw `Error: You must include Genre Guid`;
        if(!('genre' in genreObj)) throw `Error: You must include Genre Name`;
        if(Object.keys(genreObj).length > 2) throw `Error: Only need Genre Guid and Genre Name`;
        genreObj['guid'] = this.checkGuid(genreObj['guid'], "Genre Guid");
        genreObj['genre'] = this.checkString(genreObj['genre'], "Genre Name");
        return genreObj;
    },

    checkReviewsObject(reviewObj){
        if(!reviewObj) throw `Error: You must provide a review object`;
        if(typeof reviewObj != 'object') throw `Error: You must provide an object`;
        if(Array.isArray(reviewObj)) throw `Error: You must provide an object`;
        if(!('guid' in reviewObj)) throw `Error: You must include Review Guid`;
        if(!('review' in reviewObj)) throw `Error: You must include the Review`;
        if(!('sentiment' in reviewObj)) throw `Error: You must include Review Sentiment`;
        if(Object.keys(reviewObj).length > 3) throw `Error: Only need Review Guid, Review, and Review Sentiment`;
        reviewObj['guid'] = this.checkGuid(reviewObj['guid'], "Review Guid");
        reviewObj['review'] = this.checkString(reviewObj['review'], "Review");
        reviewObj['sentiment'] = this.checkSentiment(reviewObj['sentiment'], "Review Sentiment");
        return reviewObj;
    },

    checkUserObject(userObj){
        if(!userObj) throw `Error: You must provide a review object`;
        if(typeof userObj != 'object') throw `Error: You must provide an object`;
        if(Array.isArray(userObj)) throw `Error: You must provide an object`;
        if(!('guid' in userObj)) throw `Error: You must include User Guid`;
        if(!('username' in userObj)) throw `Error: You must include Username`;
        if(!('password' in userObj)) throw `Error: You must include User Password`;
        if(!('type' in userObj)) throw `Error: You must include User Type`;
        if(!('purchases' in userObj)) throw `Error: You must include User Purchases`;
        if(!('favorites' in userObj)) throw `Error: You must include User Favorites`;
        if(Object.keys(userObj).userObj > 6) throw `Error: Only need User Guid, Username, User Password, User Type, User Purchases and User Favorites`;
        userObj['guid'] = this.checkGuid(userObj['guid'], "User Guid");
        userObj['username'] = this.checkString(userObj['username'], "Username");
        userObj['password'] = this.checkString(userObj['password'], "User Password");
        userObj['type'] = this.checkUserType(userObj['type'], "User Type");
        userObj['purchases'] = this.checkUserPurchases(userObj['purchases'], "User Purchases");
        userObj['favorites'] = this.checkUserFavorites(userObj['favorites'], "User Favorites");
        return userObj;
    },

    checkBookObject(bookObj, expectedNumFields){
        if(!bookObj) throw `Error: You must provide a book object`;
        if(typeof bookObj != 'object') throw `Error: You must provide an object`;
        if(Array.isArray(bookObj)) throw `Error: You must provide an object`;
        if(!('title' in bookObj)) throw `Error: You must include Book Title`;
        if(!('isbn' in bookObj)) throw `Error: You must include Book Isbn`;
        if(!('guid' in bookObj)) throw `Error: You must include Book Guid`;
        if(!('price' in bookObj)) throw `Error: You must include Book Price`;
        if(!('image' in bookObj)) throw `Error: You must include Book Image`;
        if(!('summary' in bookObj)) throw `Error: You must include Book Summary`;
        if(!('author' in bookObj)) throw `Error: You must include Book Author`;
        if(!('pageCount' in bookObj)) throw `Error: You must include Book Page Count`;
        if(!('genres' in bookObj)) throw `Error: You must include Book Genres`;
        if(!('likes' in bookObj)) throw `Error: You must include Number of Likes`;
        if(!('dislikes' in bookObj)) throw `Error: You must include Number of Dislikes`;
        if(!('inventory' in bookObj)) throw `Error: You must include Book Inventory`;
        if(!('numberSold' in bookObj)) throw `Error: You must include Number Sold`;
        if(!('reviews' in bookObj)) throw `Error: You must include Book Reviews`;
        if(Object.keys(bookObj).length > expectedNumFields) throw `Error: Too many fields provided in book object`;
        bookObj['title'] = this.checkBookTitle(bookObj['title'], "Book Title");
        bookObj['isbn'] = this.checkIsbn(bookObj['isbn'], "Book Isbn");
        bookObj['guid'] = this.checkGuid(bookObj['guid'], "Book Guid");
        bookObj['price'] = this.checkNumber(bookObj['price'], "Book Price");
        bookObj['image'] = this.checkImageLink(bookObj['image'], "Book Image");
        bookObj['summary'] = this.checkString(bookObj['summary'], "Book Summary");
        bookObj['author'] = this.checkString(bookObj['author'], "Book Author");
        bookObj['pageCount'] = this.checkNumber(bookObj['pageCount'], "Book Page Count");
        bookObj['genres'] = this.checkGenresArray(bookObj['genres'], "Book Genres");
        bookObj['likes'] = this.checkNumberZeroAllowed(bookObj['likes'], "Number of Likes");
        bookObj['dislikes'] = this.checkNumberZeroAllowed(bookObj['dislikes'], "Number of Dislikes");
        bookObj['inventory'] = this.checkNumberZeroAllowed(bookObj['inventory'], "Book Inventory");
        bookObj['numberSold'] = this.checkNumberZeroAllowed(bookObj['numberSold'], "Number Sold");
        bookObj['reviews'] = this.checkReviewsArray(bookObj['reviews']);
        return bookObj;
    }
};