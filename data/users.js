const { ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');
const saltRounds = 16;
const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.users;
const books = require('../data/books');
const reviews = require('../data/reviews');
const utils = require('../utils');


const exportedMethods = {
    async getAllUsers(){
        const userCollection = await users();
        userList = await userCollection.find({}).toArray();
        if(!userList) throw `Could not get all users`;
        return userList;
    },

    async getUserById(id){
        id = utils.checkId(id, "User Id");

        const userCollection = await users();
        const user = await userCollection.findOne({_id: ObjectId(id)});

        if(!user) throw 'User not found';
        return user;
    },

	async getUserByGUID(guid)
	{
        id = utils.checkGuid(guid, "guid");

        const userCollection = await users();
        const user = await userCollection.findOne({guid: guid});

        if(!user) throw 'User not found';
        return user;
    },

    async getUserByUsername(username){
        username = utils.checkString(username, "Username");

        const userCollection = await users();
        const user = await userCollection.findOne({username: username.toLowerCase()});

        if(!user) throw 'User not found';
        return user;
    },

	async getPurchasedBooksByUserGUID(guid)
	{
		var hUser;
		var hPurchasedBooks = [];

		try
		{
			hUser = await this.getUserByGUID(guid);
			var hPurchases = [] = hUser['purchases'];

			//try
			//{
				var hBookInfo = [];

				for (var i = 0; i < hPurchases.length; i++)
				{
					//console.log ("users.js getPurchasedBooksByUserGUID - Getting book by ISBN: " + (hPurchases[i])['isbn']);
					var BookInfo;
					try
					{
						BookInfo = await books.getBookByIsbn( (hPurchases[i])['isbn'] );

						//console.log ("Book isbn: " + (hPurchases[i])['isbn'] + " title: " + (hPurchases[i])['title']);
						hBookInfo.push(
						{
							isbn: BookInfo['isbn'],
							title: BookInfo['title']
						});
					} catch (e)
					{
						console.log ("Attempted book retrieval of ISBN: " + (hPurchases[i])['isbn'] + " resulted in book not found! Skipping book!");
					};
				};

				return hBookInfo;
			//} catch (e)
			//{
			//	console.log ("Exception caught in users.js getPurchasedBooksByUserGUID! The following is the exception message:");
			//	console.log(e);
			//	throw e;
			//};

			return guid;
		} catch (e)
		{
			throw e;
		};

		return guid;
	},

	async getPurchasesArrayByUserGUID(guid)
	{
		var hUser;
		var hPurchases = [];

		try
		{
			hUser = await this.getUserByGUID(guid);
			hPurchases = hUser['purchases'];

			return hPurchases;
		} catch (e)
		{
			console.log ("Exception caught in users.js getPurchasesArrayByUserGUID! The following is the exception message:");
			console.log(e);
			throw e;
		};

		return guid;
	},

	async getFavoritesByUserGUID(guid)
	{
		var FavoritesIDs = [];
		var Favorites = [];
		try
		{
			var hUser = await this.getUserByGUID(guid);
			FavoritesIDs = hUser.favorites;

			for (var i = 0; i < FavoritesIDs.length; i++)
			{
				var Book;
				try
				{
					BookInfo = await books.getBookByIsbn(FavoritesIDs[i]);
					//console.dir(BookInfo);
					Favorites.push(
					{
						isbn: BookInfo['isbn'],
						title: BookInfo['title']
					});
				} catch (e)
				{
					console.log ("Attempted book retrieval of isbn: " + FavoritesIDs[i] + ", for construction of favorites array, resulted in book not found! Skipping favorite entry!");
				};
			};

			//console.dir(Favorites);
			return Favorites;
		} catch (e)
		{
			console.log ("Exception caught in users.js getFavoritesByUserGUID! The following is the exception message:");
			console.log(e);
			throw e;
		};

		return guid;
	},

	async getReviewIDsByUserGUID(guid)
	{
		var ReviewIDs = [];

		try
		{
			var hPurchases = [] = await this.getPurchasesArrayByUserGUID(guid);
			for (var i = 0; i < hPurchases.length; i++)
			{
				//console.log ("Review id: " + (hPurchases[i])['review_id']);
				ReviewIDs.push((hPurchases[i])['review_id']);
			};

			//console.log ("users.js getReviewIDsByUserGUID is returning.");
			return ReviewIDs;
		} catch (e)
		{
			console.log ("Exception caught in users.js getReviewIDsByUserGUID! The following is the exception message:");
			console.log(e);
			throw e;
		};

		return guid;
	},

	async getReviewsByUserGUID(guid)
	{
		var ReviewIDs = [];
		var Reviews = [];
		try
		{
			//console.log ("users.js getReviewsByUserGUID - Getting review by GUID: " + guid);
			ReviewIDs = await this.getReviewIDsByUserGUID(guid);
			//console.log ("getReviewIDsByUserGUID returned.");

			for (var i = 0; i < ReviewIDs.length; i++)
			{
				var Review;
				var Book;
				try
				{
					Review = await reviews.getReviewByGuid(ReviewIDs[i]);
					Book = await books.getBookByReviewGUID(ReviewIDs[i]);
					//console.log ("bookdata entry: " + Book);
					//console.dir(Review);
					Reviews.push(
					{
						review: 
						{
							reviewdata:
							{
								guid: Review['guid'],
								review: Review['review'],
								sentiment: Review['sentiment']
							},
							bookdata: 
							{
								isbn: Book['isbn'],
								title: Book['title']
							}
						}
					});
				} catch (e)
				{
					console.log ("Attempted review retrieval of GUID: " + ReviewIDs[i] + " resulted in review not found! Skipping review!");
				};
			};

			//console.dir(Reviews);
			return Reviews;
		} catch (e)
		{
			console.log ("Exception caught in users.js getReviewsByUserGUID! The following is the exception message:");
			console.log(e);
			throw e;
		};

		return guid;
	},

	async getCartByUserGUID(guid)
	{
		var CartItemIDs = [];
		var CartItems = []
		try
		{
			var hUser = await this.getUserByGUID(guid);
			CartItemIDs = hUser.shoppingcart;
			if(CartItemIDs)
			{
				for (var i = 0; i < CartItemIDs.length; i++)
				{
					try
					{
						BookInfo = await books.getBookByIsbn(CartItemIDs[i]);
						CartItems.push(
						{
							isbn: BookInfo['isbn'],
							title: BookInfo['title']
						});
					} catch (e)
					{
						console.log ("Attempted book retrieval of isbn: " + CartItemIDs[i] + ", for construction of favorites array, resulted in book not found! Skipping favorite entry!");
					};
				};
			}
			return CartItems;
		} catch (e)
		{
			console.log ("Exception caught in users.js getCartByUserGUID! The following is the exception message:");
			console.log(e);
			throw e;
		};

		return guid;
	},

	async getSummaryByUserGUID(guid)
	{
		var hUser;
		var hSummary = '';

		try
		{
			hUser = await this.getUserByGUID(guid);
			hSummary = hUser['profile_summary'];
			console.log("entered here");
			console.log(hSummary);

			return hSummary;
		} catch (e)
		{
			console.log ("Exception caught in users.js getSummaryByUserGUID! The following is the exception message:");
			console.log(e);
			throw e;
		};

		return guid;
	},

    async createUser(userObject){
        userObject = utils.checkUserObject(userObject);

        const userCollection = await users();
        const userList = await this.getAllUsers();

        for(let i = 0; i < userList.length; i++){
            if(userList[i]['username'].toLowerCase() == userObject['username'].toLowerCase()) throw `Cannot add user, username already in use!`;
        };

        const hash = await bcrypt.hash(userObject.password, saltRounds);

        const newUser = {
            guid: userObject.guid,
            username: userObject.username,
            password: hash,
			profile_summary: userObject.profile_summary,
            type: userObject.type,
            purchases: userObject.purchases,
            favorites: userObject.favorites,
			shoppingcart: userObject.shoppingcart
        }
        const createInfo = await userCollection.insertOne(newUser);
        if (!createInfo.acknowledged || !createInfo.insertedId) throw 'Could not add user';
        const newId = createInfo.insertedId.toString();
        const newEntry = await this.getUserById(newId);
        return newEntry;
    },

    async deleteUser(id){
        id = utils.checkId(id, "User Id");

        const userCollection = await users();
        const deletionInfo = await userCollection.deleteOne({_id: ObjectId(id)});
        if(deletionInfo.deletedCount === 0) throw `Could not delete user with id of ${id}`;
    },

    async updateUser(id, updatedUserData){
        id = utils.checkId(id, "User Id");
        updatedUserData = utils.checkUserObject(updatedUserData);

        const userCollection = await users();
        const allUsers = await this.getAllUsers();

        const originalUser = await this.getUserById(id);
        if(originalUser["guid"] != updatedUserData["guid"]) throw 'Guid does not match original guid.';
        if(originalUser["guid"] != updatedUserData["guid"]){
            for(let i = 0; i < allUsers.length; i++){
                if(allUsers[i]['username'].toLowerCase() == updatedUserData['username'].toLowerCase()) throw `Cannot update username, username already in use!`;
            };
        }

        const updateData = updatedUserData;
        const updatedInfo = await userCollection.updateOne(
            {_id: ObjectId(id)},
            {$set: updateData}
        );
        if(updatedInfo.modifiedCount === 0) throw 'No changes to original user detected.  Could not update user successfully';
        
        return await this.getUserById(id);
    },

	async removeCartItemByISBN(guid, isbn)
	{
		try
		{
			var hUser = await this.getUserByGUID(guid);
			var cartItemID = hUser.shoppingcart;
			let updatedUser;
			const userCollection = await users();
			if(cartItemID)
			{
				try
				{
					const index = cartItemID.indexOf(isbn);
					if (index > -1)
					{
						cartItemID.splice(index, 1);
					}

					updatedUser = await userCollection.updateOne({ guid: guid },{ $set: { shoppingcart : cartItemID } });
				} catch (e)
				{
					console.log(e);
					// console.log ("Attempted book retrieval of isbn: " + isbn + ", for construction of favorites array, resulted in book not found! Skipping favorite entry!");
				};

				if (updatedUser && updatedUser.matchedCount && !updatedUser.modifiedCount)
				{
					throw "Update remove item failed";
				}
				return true;
			}
		} catch (e)
		{
			console.log ("Exception caught in users.js getCartByUserGUID! The following is the exception message:");
			console.log(e);
			throw e;
		};

		return guid;
	}
};

module.exports = exportedMethods;