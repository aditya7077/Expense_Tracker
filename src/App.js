
import { useState } from 'react';
import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/balance';
import Header from './components/header';
import IncomeExpenses from './components/incomeExpense';
import TransactionList from './components/transactionList';



function App() {

  const [listData,setListData] =  useState([])
  


  function sendTransaction(transaction){
    setListData([...listData,{...transaction,id:listData.length+1}]);
    
    

  }
  function deleteItem(id){
   
   setListData(listData.filter((auto)=>auto.id!==id));
  }
  



  return (
    <div>
      <Header/>
      <div className='container'>
        <Balance listData={listData}/>
        <IncomeExpenses listData={listData}/>
        <TransactionList deleteItem={deleteItem} listData={listData}/>
        <AddTransaction sendTransaction={sendTransaction}/>

      </div>
    </div>
  );
}

export default App;
