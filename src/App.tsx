import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global"
import { useState } from "react";
import Modal from 'react-modal';
import { NewTransactionModal } from "./components/NewTransactionModals";
import { TransactionsProvider } from "./TransactionsContext";

Modal.setAppElement('#root');

export function App() {
  
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOnClick(){
      setIsOpen(!isOpen);
  }

  function handleClose() {
      setIsOpen(false)
  }

  return (
    <TransactionsProvider>
      <NewTransactionModal 
        isOpen={isOpen}
        onRequestClose={handleClose}
      />
      
      <Header handleOnClick={handleOnClick}/>
      
      <Dashboard />
      
      <GlobalStyle />
    </TransactionsProvider>    
  );
}