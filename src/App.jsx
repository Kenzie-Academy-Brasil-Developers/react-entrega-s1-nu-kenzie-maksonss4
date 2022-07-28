import { useState } from 'react';
import './App.css';
import Filters from './components/Filters';
import Form from './components/Form';
import List from './components/List';
import TotalMoney from './components/TotalMoney';
import Global from './styles/global';
import React from "react";
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [listTransactions, setListTransactions] = useState([])
  const [filtro, setFiltro] = useState([])
  const [inicio, setInicio] = useState(true)
  
  return (

      <div className='App'>
        {
          inicio 
          ? 
          <>
            <Main setInicio={setInicio}>
              <div>

              </div>
              <div>

              </div>
            </Main>
          </> 
          :
          <>          
            <Global />
            <Header setInicio={setInicio}></Header>
            <main className='mainHome'>
              <div className='divForm'>
                <Form listTransactions={listTransactions} setListTransactions={setListTransactions}></Form>
                <TotalMoney listTransactions={listTransactions}></TotalMoney>
              </div>

              <div className='divTransacoes'>
                <Filters listTransactions={listTransactions} setListTransactions={setListTransactions} setFiltro={setFiltro}></Filters>
                <List listTransactions={listTransactions} filtro={filtro}></List>
              </div>
            </main>        
          </>
        }
      </div>
      
    
  );
}

export default App;
