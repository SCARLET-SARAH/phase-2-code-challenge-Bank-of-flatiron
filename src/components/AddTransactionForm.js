import React,{ useState } from "react";

function AddTransactionForm() {
  const [formData, setFormData] = useState({
    date: "",
    name : "",
    category: "",
    amount: "",
  })

  function handleTransactionChange(e){
    const newData = {...formData}
    newData[e.target.name] = e.target.value
    setFormData(newData)
    console.log(newData)
  }
   function handleTransactionSubmit(e){
    
    e.preventDefault();    
      fetch("http://localhost:8001/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
       .then((res) => res.json())
       .then((data) => {
          alert('data added succesfully');
        });

    }
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
