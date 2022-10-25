import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { createServer } from 'miragejs';

import { GlobalStyle } from "./styles/global"
import { useState } from "react";
import Modal from 'react-modal';

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
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
      >
        <div>TESTE CONTEUDO</div>
      </Modal>   
      
      <Header handleOnClick={handleOnClick}/>
      
      <Dashboard />
      
      <GlobalStyle />
    </>    
  );
}
