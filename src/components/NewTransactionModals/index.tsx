import Modal from 'react-modal';
import { FormEvent, useState, useContext } from 'react';
import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, RadioBox, TransactionTypeContainer } from './newTransactionModal.styles';
interface newTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: newTransactionModalProps) {
    const transactions = useContext(TransactionsContext);

    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');
    
    function handleCreateNewTransaction(props: FormEvent) {
        props.preventDefault();        
    }
    
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName={"react-modal-overlay"}
            className={"react-modal-content"}
        >
            <Container
                onSubmit={handleCreateNewTransaction}
            >
                <button
                    className="react-modal-close" 
                    type="button"
                    onClick={onRequestClose}
                    >                 
                        <img src={closeImg} alt="closeButton" />
                </button>
                
                <h2>New Transaction</h2>
                
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}    
                />
                
                <input 
                    type="number" 
                    placeholder="Value"
                    value={value}
                    onChange={e => setValue(Number(e.target.value))}    
                />

                <TransactionTypeContainer>
                    <RadioBox
                        onClick={() => {setType('deposit')}}
                        isActive={type === 'deposit'}
                        activeColor={'green'}
                    >
                        <img src={incomeImg} alt="Income" />
                        <span>Income</span>
                    </RadioBox>
                    <RadioBox
                        onClick={() => {setType('withdraw')}}
                        isActive={type === 'withdraw'}
                        activeColor={'red'}
                    >
                        <img src={outcomeImg} alt="outcome" />
                        <span>Outcome</span>
                    </RadioBox>
                </TransactionTypeContainer>
                
                <input 
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={e => setCategory(e.target.value)}    
                />
                
                <button type="submit">Cadastrar</button>                
            </Container>
        </Modal>
    )
}