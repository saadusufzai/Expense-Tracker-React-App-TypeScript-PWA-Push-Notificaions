export type Props = {
    children: React.ReactNode;
  };
  export type Transactions = {
    amount:number;
    id:number;
    text:string
  }
  
  export type Context = {
      transactions:Transactions[];
      addTransaction:React.Dispatch<React.SetStateAction<any>>;
      deleteTransaction:React.Dispatch<React.SetStateAction<any>>;
  }
  
  