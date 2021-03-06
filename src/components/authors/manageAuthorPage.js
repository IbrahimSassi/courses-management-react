/**
 * Created by Ibrahim on 25/02/2017.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var toastr = require('toastr');


var ManageAuthorPage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function (transition, component) {
            console.log(transition);
            if (component.state.dirty && !confirm('Leave without saving ?')) {
                transition.abort();
            }
        }
    }
    ,
    getInitialState: function () {
        return {
            author: {id: '', firstName: '', lastName: ''},
            errors: {},
            dirty: false
        };
    },

    componentWillMount: function () {
        var authorId = this.props.params.id; //from path /author:id

        if (authorId) {
            this.setState({author: AuthorStore.getAuthorById(authorId)});
        }
    }
    ,

    authorFormIsValid: function () {
        var formIsValid = true;
        this.state.errors = {}; //clear any previous err

        if (this.state.author.firstName.length < 3) {
            this.state.errors.firstName = "First Name must be at least 3 characters";
            formIsValid = false;
        }
        if (this.state.author.lastName.length < 3) {
            this.state.errors.lastName = "Last Name must be at least 3 characters";
            formIsValid = false;

        }

        this.setState({errors: this.state.errors});

        return formIsValid;

    }
    ,
    setAuthorState: function (event) {
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    },
    saveAuthor: function (event) {
        event.preventDefault();
        if (!this.authorFormIsValid()) {
            return;
        }

        if (this.state.author.id) {
            AuthorActions.updateAuthor(this.state.author);
        }

        else {

            // AuthorApi.saveAuthor(this.state.author);
            AuthorActions.createAuthor(this.state.author);
            this.setState({dirty: false});
        }
        toastr.success('Author saved. ');
        this.transitionTo('authors');


    },

    render: function () {
        return (
            <AuthorForm
                author={this.state.author}
                onChange={this.setAuthorState}
                onSave={this.saveAuthor}
                errors={this.state.errors}
            />
        );
    }
});

module.exports = ManageAuthorPage;