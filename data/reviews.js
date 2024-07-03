const { ObjectId } = require('mongodb');
const mongoCollections = require('../config/mongoCollections');
const reviews = mongoCollections.reviews;
const utils = require('../utils');

const exportedMethods = {
    async getAllReviews(){
        const reviewsCollection = await reviews();
        reviewsList = await reviewsCollection.find({}).toArray();
        if(!reviewsList) throw `Could not get all reviews`;
        return reviewsList;
    },

    async getReviewById(id){
        id = utils.checkId(id, "Review Id");

        const reviewsCollection = await reviews();
        const review = await reviewsCollection.findOne({_id: ObjectId(id)});

        if(!review) throw 'Review not found';
        return review;
    },

    async getReviewByGuid(guid){
        guid = utils.checkGuid(guid, "Review Guid");

        const reviewsCollection = await reviews();
        const review = await reviewsCollection.findOne({guid: guid});

        if(!review) throw 'Review not found';
        return review;
    },

    async createReview(reviewsObject){
        reviewsObject = utils.checkReviewsObject(reviewsObject);

        const reviewsCollection = await reviews();

        const newReview = {
            guid: reviewsObject.guid,
            review: reviewsObject.review,
            sentiment: reviewsObject.sentiment
        }
        const createInfo = await reviewsCollection.insertOne(newReview);
        if (!createInfo.acknowledged || !createInfo.insertedId) throw 'Could not add review';
        const newId = createInfo.insertedId.toString();
        const newEntry = await this.getReviewById(newId);
        return newEntry;
    },

    async updateReview(id, updatedReviewData){
        id = utils.checkId(id, "Review Id");
        updatedReviewData = utils.checkReviewsObject(updatedReviewData);

        const originalReview = await this.getReviewById(id);
        if(originalReview["guid"] != updatedReviewData["guid"]) throw 'Guid does not match original guid.';

        const updateData = updatedReviewData;
        const reviewsCollection = await reviews();
        const updatedInfo = await reviewsCollection.updateOne(
            {_id: ObjectId(id)},
            {$set: updateData}
        );
        if(updatedInfo.modifiedCount === 0) throw 'No changes to original review detected.  Could not update review successfully';
        
        return await this.getReviewById(id);
    },

    async deleteReviewById(id){
        id = utils.checkId(id, "Review Id");

        const reviewsCollection = await reviews();
        const deletionInfo = await reviewsCollection.deleteOne({_id: ObjectId(id)});
        if(deletionInfo.deletedCount === 0) throw `Could not delete review with id of ${id}`;
    }
};

module.exports = exportedMethods;