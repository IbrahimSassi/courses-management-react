/**
 * Created by Ibrahim on 24/02/2017.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./authorList');

var AuthorPage = React.createClass({
    getInitialState: function () {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },

    ComponentWillMount: function () {
        AuthorStore.addChangeListener(this._onChange());

    },
    ComponentWillUnmount: function () {
        AuthorStore.removeChangeListener(this._onChange());

    },

    _onChange: function () {
        this.setState({authors: AuthorStore.getAllAuthors()})
    },

    // componentDidMount: function () {
    //     if (this.isMounted()) {
    //         this.setState({authors: });
    //     }
    // },

    render: function () {


        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors}/>


            </div>
        );
    }
});

module.exports = AuthorPage;