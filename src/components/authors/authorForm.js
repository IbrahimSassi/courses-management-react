/**
 * Created by Ibrahim on 25/02/2017.
 */
"use strict";

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
    render: function () {
        return (

            <form action="">
                <Input
                    label="First Name"
                    name="firstName"
                    onChange={this.props.onChange}
                    value={this.props.author.firstName}/>
                <br/>
                <Input
                    label="Last Name"
                    name="LastName"
                    onChange={this.props.onChange}
                    value={this.props.author.lastName}/>
                <br/>
                <input type="submit" value="Save" className="btn btn-default"/>

            </form>

        );
    }
});

module.exports = AuthorForm;