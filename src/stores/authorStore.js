/**
 * Created by Ibrahim on 05/03/2017.
 */
"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionsTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = "change";

var _ = require('lodash');
var _author = [];

var AuthorStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    getAllAuthors: function () {
        return _author;
    },
    getAuthorById: function (id) {
        return _.find(_author, {id: id});
    }
});

Dispatcher.register(function (action) {
    switch (action.actionType) {
        case
        ActionsTypes.CREATE_AUTHOR:
            _author.push(action.author);
            AuthorStore.emitChange();
    }
});

module.exports = AuthorStore;