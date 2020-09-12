import React from 'react';
import  Header  from './Components/Header';





import './App.css';
import Balance from './Components/Balance';
import IncomeExpenses from './Components/IncomeExpenses';

function App() {
  return (
   <div>
      <Header />
      <Balance/>
      <IncomeExpenses/>
   </div>
  );
}

export default App;