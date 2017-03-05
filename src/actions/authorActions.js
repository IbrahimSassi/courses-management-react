/**
 * Created by Ibrahim on 05/03/2017.
 */
"use strict";
var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionsTypes = require('../constants/actionTypes');
var authorActions = {

    createAuthor: function (author) {

        var newAuthor = AuthorApi.saveAuthor(author);


        //Hey Dispatcher , go tell all the stores that an author has just created
        Dispatcher.dispach({
            actionType: ActionsTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    }

};

module.exports = authorActions;