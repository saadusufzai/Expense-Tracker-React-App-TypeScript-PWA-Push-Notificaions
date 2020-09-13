import React, {useState, useContext} from 'react'
import { AppContext } from '../context/GlobalContext';
import { Transactions} from '../types/types'

const AddTransaction = () => {
  const [text, setText]  = useState<string>('');
  const [amount, setAmount] = useState<any>('');
  const {addTransaction} = useContext(AppContext)

  const onSubmit = (e:any) => {
    e.preventDefault();
    
    const newTransaction:Transactions = {
      id: Math.floor(Math.random() * 100000000),
      text:text,
      amount: +amount
    }

    addTransaction(newTransaction);
    setText('')
    setAmount('')
  }

  return (
    <div>
       <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input required type="text" value={text} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative = expense, positive = income)
            </label>
          <input required type="number" value={amount} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button type='submit' className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
