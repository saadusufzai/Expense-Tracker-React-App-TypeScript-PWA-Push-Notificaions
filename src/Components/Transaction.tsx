import React,{useContext} from 'react'
import { AppContext } from '../context/GlobalContext';

const Transaction = ({transaction}:any) => {
  
  const  {deleteTransaction}  = useContext(AppContext);
   
 const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <div>
       <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
       {transaction.text} <span>{sign}{Math.abs(transaction.amount)}Rs.</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
     </li>
    </div>
  )
}

export default Transaction
