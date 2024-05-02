import React, {useEffect, useState, useMemo} from "react";
import Transaction from "./Transaction";




function TransactionsList({searchValue}) {
  const [transactions, setTransactions] = useState([]) 
 

 console.log(searchValue)

  useEffect(()=>{
    fetch("https://phase-2-code-challenge-bank-of-flatiron-2.onrender.com/transactions")
      .then(res => res.json())
      .then((data) => {
        setTransactions(data)
      })
  }, [])

  const filteredTransactions = useMemo(() => {
    if (!searchValue) {
      return transactions;
    }
    return transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchValue.toLowerCase())
    );
 }, [transactions, searchValue]);
   
 
    

  return (
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
          <th>
            <h3 className="ui center aligned header">Actions</h3>
          </th>
          
        </tr>
        {/* render a list of <Transaction> components here */}
        {filteredTransactions.map((transaction) => {
          return <Transaction key={transaction.id} transaction={transaction} />
          
        })}
        
      </tbody>
    </table>
  );
}

export default TransactionsList;