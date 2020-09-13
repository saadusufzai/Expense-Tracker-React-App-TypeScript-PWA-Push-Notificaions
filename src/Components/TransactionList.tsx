import React,{useContext} from 'react'
import Transaction from './Transaction'
import { AppContext } from '../context/GlobalContext';
const TransactionList = () => {
  const { transactions } = useContext(AppContext);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
       </ul>
    </div>
  )
}

export default TransactionList
