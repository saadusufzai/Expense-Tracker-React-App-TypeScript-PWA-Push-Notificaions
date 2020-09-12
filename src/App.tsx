import React from 'react';
import  Header  from './Components/Header';
import {AppContext} from './context/GlobalContext'




import './App.css';
import Balance from './Components/Balance';
import IncomeExpenses from './Components/IncomeExpenses';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';

function App() {
  
  return (
   <>
   <AppContext  >
      <Header />
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
      </AppContext>
   </>
  );
}

export default App;