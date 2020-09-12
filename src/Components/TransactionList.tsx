import React from 'react'
import Transaction from './Transaction'

const TransactionList = () => {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        <Transaction/>
       </ul>
    </div>
  )
}

export default TransactionList
