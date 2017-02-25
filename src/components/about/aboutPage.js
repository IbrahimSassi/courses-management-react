"use strict";
var React = require('react');

var About = React.createClass({
    statics: {
        willTransitionTo: function (transition, params, query, callback) {
            if (!confirm('Are you sure you want to read a page thats this boring ')) {
                transition.abort();
            }
            else {
                callback();
            }
        },
        willTransitionFrom: function (transition, component) {
            if (!confirm('Are you sure to leave a page thats this exiting ')) {
                transition.abort();
            }
        }
    },

    render: function () {
        return (
            <div>
                <h1>About</h1>
                <p>This Application uses the following technologies</p>
                <ul>
                    <li>React</li>
                    <li>React Routers</li>
                    <li>FLUX</li>
                    <li>Node</li>
                    <li>Gulp</li>
                    <li>Browserify</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
        );
    }
});

module.exports = About;