import React, {useState, useContext} from 'react'
import { AppContext } from '../context/GlobalContext';

const AddTransaction = () => {
  const [text, setText]  = useState<string>();
  const [amount, setAmount] = useState<any>(0);
  const {addTransaction} = useContext(AppContext)

  const onSubmit = (e:any) => {
    e.preventDefault();
    
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <div>
       <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input type="text" value={text} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative = expense, positive = income)</label
          >
          <input type="number" value={amount} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button type='submit' className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
