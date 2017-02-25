/**
 * Created by Ibrahim on 25/02/2017.
 */
"use strict";

var React = require('react');

var AuthorForm = React.createClass({
    render: function () {
        return (

            <form action="">
                <label htmlFor="FirstName">First Name</label>
                <input type="text"
                       name="firstName"
                       className="form-control"
                       placeholder="First Name"
                       ref="firstName"
                       onChange={this.props.onChange}
                       value={this.props.author.firstName}/>
                <br/>
                <label htmlFor="LastName">Last Name</label>
                <input type="text"
                       name="LastName"
                       className="form-control"
                       placeholder="Last Name"
                       ref="LastName"
                       onChange={this.props.onChange}
                       value={this.props.author.lastName}/>
                <br/>
                <input type="submit" value="Save" className="btn btn-default"/>

            </form>

        );
    }
});

module.exports = AuthorForm;