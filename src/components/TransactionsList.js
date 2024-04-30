import React, { useState, useEffect } from "react";
import Transaction from "./Transaction";

function TransactionsList() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  
    useEffect(() => {
      fetch('http://localhost:8001/transactions')
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error fetching transactions:', error));
    }, []);
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <div className="ui input">
        <input
          type="text"
          placeholder="Search transactions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">Date</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Description</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Category</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Amount</h3>
            </th>
          </tr>
          {filteredTransactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsList;
