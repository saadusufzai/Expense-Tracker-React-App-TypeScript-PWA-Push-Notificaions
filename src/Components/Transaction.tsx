import React from 'react'

const Transaction = () => {
  
 const transaction = {
  amount:2,
  text:'heloo World'
 }

 const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <div>
       <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
       {transaction.text} <span>{sign}{Math.abs(transaction.amount)}Rs.</span><button onClick={() =>()=>console.log('delete trans')} className="delete-btn">x</button>
   
     </li>
    </div>
  )
}

export default Transaction
