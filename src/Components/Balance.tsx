import React, {useContext} from 'react'
import { AppContext } from '../context/GlobalContext'

const Balance:React.FC = () => {

  const {transactions} = useContext(AppContext)
  const amounts = transactions.map(e=>e.amount)
  
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
       <h1>Rs.{total}</h1>
    </div>
  )
}

export default Balance
