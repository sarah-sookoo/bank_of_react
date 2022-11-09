// /*==================================================
// src/components/Debits.js

// The Debits component contains information for Debits page view.
// Note: You need to work on this file for the Assignment.
// ==================================================*/

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AccountBalance from './AccountBalance';
import List from './List';

class Debit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      debits: [],
      accountBalance: this.props.accountBalance,
    };

    this.newDebit = this.newDebit.bind(this);
  }

  newDebit(event) {
    let name = document.getElementById("description").value;
    let amount = document.getElementById("amount").value;
    let date = new Date().toLocaleDateString()
    let newDebit = {
      amount: amount,
      description: name,
      date: date,
    }
    let newDebits = this.state.debits;
    newDebits.unshift(newDebit);
    this.setState({
      debits: newDebits,
      accountBalance: parseFloat(this.state.accountBalance) - parseFloat(amount),
    })
  }

  render() {
    return (
      <div>
        <h1> Debits </h1>
        <h3><AccountBalance accountBalance={this.state.accountBalance} /></h3>

        <label htmlFor="description">Enter Debit: </label>
        <input type="text" id="description" name="description"></input><br />
        <label htmlFor="amount">Amount: </label>
        <input type="text" id="amount" name="amount"></input><br />
        <button onClick={this.newDebit}>Submit</button>
        <br></br>

        {this.state.debits.map((list) => (
                    <List 
                        amount={list.amount}
                        description={list.description}
                        date={list.date}
                    />
                ))}

        <Link to="/">Home Page</Link> <br />
        <Link to="/userProfile">Use Profile</Link>
      </div>
    )
  }
}

export default Debit;
