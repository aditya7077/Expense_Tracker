import { useState } from "react";


function AddTransaction({sendTransaction}) {

  
  const initialState = {name:'',amount:0}

  const [addedTransaction,setAddedTransaction] = useState(initialState);

  function handleChange(e){
    setAddedTransaction({...addedTransaction,
      [e.target.name]: e.target.value
  })
  }
  function handleClick(e){
    e.preventDefault();
    sendTransaction(addedTransaction)
    setAddedTransaction(initialState)


    
  }



  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" value={addedTransaction.name} name="name" onChange={handleChange} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" id="amount" value={addedTransaction.amount} name="amount" onChange={handleChange} placeholder="Enter amount..." />
        </div>
        <button className="btn" onClick={handleClick}>Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;