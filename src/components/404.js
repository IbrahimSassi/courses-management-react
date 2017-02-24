/**
 * Created by Ibrahim on 25/02/2017.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFoundPage = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Page Not Found</h1>
                <p>Whooops !! Sorry there is nothing to see here</p>
                <p><Link to="app">Back To Home</Link></p>
            </div>
        );
    }
});

module.exports = NotFoundPage;