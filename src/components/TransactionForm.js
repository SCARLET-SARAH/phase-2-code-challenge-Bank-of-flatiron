import React, { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = { date, description, category, amount };
    fetch('https://phase-2-code-challenge-bank-of-flatiron-2.onrender.com/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    })
      .then(response => response.json())
      .then(data => {
        onAddTransaction(data);
        setDate('');
        setDescription('');
        setCategory('');
        setAmount('');
      })
      .catch(error => console.error('Error adding transaction:', error));
  };

  return (
    <form className="ui segment form" onSubmit={handleSubmit}>
      <div className="two fields">
        <div className="field">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className="two fields">
        <div className="field">
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>
      <button className="ui button" type="submit">
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;