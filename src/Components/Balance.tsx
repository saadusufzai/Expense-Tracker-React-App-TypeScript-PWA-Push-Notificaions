import React, {useContext} from 'react'
import { AppContext } from '../context/GlobalContext'

const Balance:React.FC = () => {

  const {transactions} = useContext(AppContext)
  console.log(transactions)

  return (
    <div>
      <h4>Your Balance</h4>
       <h1>Rs 2000</h1>
    </div>
  )
}

export default Balance
