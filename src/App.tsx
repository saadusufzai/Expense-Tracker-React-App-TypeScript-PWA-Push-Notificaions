import React from 'react';
import  Header  from './Components/Header';





import './App.css';
import Balance from './Components/Balance';
import IncomeExpenses from './Components/IncomeExpenses';
import TransactionList from './Components/TransactionList';

function App() {
  return (
   <div>
      <Header />
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
   </div>
  );
}

export default App;