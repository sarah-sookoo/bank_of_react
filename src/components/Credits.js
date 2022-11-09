/*==================================================
src/components/Credits.js
The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AccountBalance from './AccountBalance';
import List from './List';

class Credits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credits: [],
      accountBalance: this.props.accountBalance,
    };

    this.addCredit = this.addCredit.bind(this);
  }

  addCredit(event) {
    let name = document.getElementById("description").value;
    let amount = document.getElementById("amount").value;
    let date = new Date().toLocaleDateString()
    let newCredit = {
      amount: amount,
      description: name,
      date: date,
    }
    let newCredits = this.state.credits;
    newCredits.unshift(newCredit);
    this.setState({
      credits: newCredits,
      accountBalance: parseFloat(this.props.accountBalance) + parseFloat(amount),
    })
  }

  render() {
    return (
      <div>
        <h1> Credits </h1>
        <AccountBalance accountBalance={this.props.accountBalance} />
        {/* <AccountBalance accountBalance={this.state.accountBalance}/> */}
        <br></br>

        {/* <form onSubmit={this.addCredit}> */}
        {/* <form onSubmit="return false"> */}
        <label htmlFor="description">Credit Description: </label>
        <input type="text" id="description" name="description" /> <br></br>
        <label htmlFor="amount">Amount: </label>
        <input type="number" id="amount" name="amount" /> <br></br>
        <button onClick={this.addCredit} type="submit">Add Credit</button>
        <hr></hr>
        {/* </form> */}

        {this.state.credits.map((list) => (
          <List
            description={list.description}
            amount={list.amount}
            date={list.date}

          />
        ))}
        <br></br>

        <Link to="/">Home Page</Link> <br />
        <Link to="/userProfile">User Profile</Link>
      </div>
    )
  }
}

export default Credits;