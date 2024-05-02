import React from "react";

function Transaction({ transaction }) {
  function handleDelete(id)

    {
      fetch(`https://phase-2-code-challenge-bank-of-flatiron-2.onrender.com/transactions${id}`, {
        method: "DELETE"
      })
      .then((data)=> data.json())
      .then((res)=>{   
        
        alert("Transaction deleted successfully")

      })
    }

  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td> <button  onClick = {()=> handleDelete(transaction.id)}>delete </button></td>      
    </tr>
  );
}

export default Transaction;
