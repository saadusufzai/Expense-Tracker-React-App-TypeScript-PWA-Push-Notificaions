import React, { createContext,useReducer } from 'react'
import Reducer from './Reducer'
import {Context, Props} from '../types/types'


const initialState:Context = {
    transactions:[],
    addTransaction: (): void => {
        throw new Error('addTransaction function must be added');
      },
      deleteTransaction: (): void => {
        throw new Error('deleteTransaction function must be added');
      },
  }
  

export const AppContext = createContext(initialState)

export const GlobalProvider = ({ children  }:Props): JSX.Element   => {
    const [state, dispatch] = useReducer( Reducer, initialState)

    function deleteTransaction(id:number):void {
        dispatch({
          type: 'DELETE_TRANSACTION',
          payload: id
        });
      }
    
      function addTransaction(transaction:any[]):void{
        dispatch({
          type: 'ADD_TRANSACTION',
          payload: transaction
        });
      }
    
      return (<AppContext.Provider value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction
      }}>
        {children}
      </AppContext.Provider>);
}

