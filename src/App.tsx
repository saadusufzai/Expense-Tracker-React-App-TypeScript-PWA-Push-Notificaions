import React from "react";
import Header from "./Components/Header";
import { GlobalProvider } from "./context/GlobalContext";

import "./App.css";
import Balance from "./Components/Balance";
import IncomeExpenses from "./Components/IncomeExpenses";
import TransactionList from "./Components/TransactionList";
import AddTransaction from "./Components/AddTransaction";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <div className="left"> 
          <AddTransaction />
        </div>
        <hr/>
        <div className="left">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
        </div>
      </div>
      
    </GlobalProvider>
  );
}

export default App;
