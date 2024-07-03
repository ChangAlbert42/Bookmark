const { ObjectId } = require('mongodb');
const mongoCollections = require('../config/mongoCollections');
const genres = mongoCollections.genres;
const utils = require('../utils');

const exportedMethods = {
    async getAllGenres(){
        const genresCollection = await genres();
        genresList = await genresCollection.find({}).toArray();
        if(!genresList) throw `Could not get all genres`;
        return genresList;
    },

    async getGenreById(id){
        id = utils.checkId(id, 'Genre Id');

        const genresCollection = await genres();
        const genre = await genresCollection.findOne({_id: ObjectId(id)});

        if(!genre) throw 'Genre not found';
        return genre;
    },

    async getGenreByGuid(guid){
        guid = utils.checkGuid(guid, "Genre Guid");
        
        const genresCollection = await genres();
        const genre = await genresCollection.findOne({guid: guid});

        if(!genre) throw 'Genre not found';
        return genre;
    },

    async getGenreByName(name){
        name = utils.checkString(name, "Genre Name");

        const genresCollection = await genres();
        const genre = await genresCollection.findOne({genre: name});

        if(!genre) throw 'Genre not found';
        return genre;
    },

    async createGenre(genresObject){
        genresObject = utils.checkGenresObject(genresObject);

        const genresCollection = await genres();
        const genresList = await this.getAllGenres();

        for(let i = 0; i < genresList.length; i++){
            if(genresList[i]['genre'] == genresObject['genre']) throw `Cannot add genre, it already exists!`;
        };

        const newGenre = {
            guid: genresObject.guid,
            genre: genresObject.genre
        }
        const createInfo = await genresCollection.insertOne(newGenre);
        if (!createInfo.acknowledged || !createInfo.insertedId) throw 'Could not add genre';
        const newId = createInfo.insertedId.toString();
        const newEntry = await this.getGenreById(newId);
        return newEntry;
    },

    async deleteGenreById(id){
        id = utils.checkId(id);
        
        const genresCollection = await genres();
        const deletionInfo = await genresCollection.deleteOne({_id: ObjectId(id)});
        if(deletionInfo.deletedCount === 0) throw `Could not delete genre with id of ${id}`;
    }
};

module.exports = exportedMethods;