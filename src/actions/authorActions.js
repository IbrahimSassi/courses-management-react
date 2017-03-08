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
        Dispatcher.dispatch({
            actionType: ActionsTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },
    updateAuthor: function (author) {

        var updatedAuthor = AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: ActionsTypes.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    },
    deleteAuthor: function (id) {
        debugger;
        AuthorApi.deleteAuthor(id);

        Dispatcher.dispatch({
            actionType: ActionsTypes.DELETE_AUTHOR,
            id: id
        })
    }

};

module.exports = authorActions;