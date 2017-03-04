/**
 * Created by Ibrahim on 25/02/2017.
 */
"use strict";

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
    render: function () {
        return (

            <form >
                <Input
                    label="First Name"
                    name="firstName"
                    onChange={this.props.onChange}
                    value={this.props.author.firstName}
                    error = {this.props.errors.firstName}
                />
                <br/>
                <Input
                    label="Last Name"
                    name="lastName"
                    onChange={this.props.onChange}
                    value={this.props.author.lastName}
                    error={this.props.errors.lastName}

                />
                <br/>
                <input type="submit" value="Save"
                       className="btn btn-default"
                        onClick={this.props.onSave}
                />

            </form>

        );
    }
});

module.exports = AuthorForm;