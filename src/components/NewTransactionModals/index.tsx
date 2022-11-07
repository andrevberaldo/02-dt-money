import Modal from 'react-modal';
import { FormEvent, useState, useContext } from 'react';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, RadioBox, TransactionTypeContainer } from './newTransactionModal.styles';
import { useTransactions } from '../../hooks/useTransactions';
interface newTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: newTransactionModalProps) {
    const {createTransaction} = useTransactions();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('income');
    
    async function handleCreateNewTransaction(event: FormEvent) {        
        event.preventDefault();
        
        await createTransaction({
            title,
            amount,
            category,
            type
        });
        
        resetToInitialValues();
        onRequestClose();
    }

    function resetToInitialValues() {
        setTitle('');
        setAmount(0);
        setCategory('');
        setType('');
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
                    value={amount}
                    onChange={e => setAmount(Number(e.target.value))}    
                />

                <TransactionTypeContainer>
                    <RadioBox
                        onClick={() => setType('income')}
                        isActive={type === 'income'}
                        activeColor={'green'}
                    >
                        <img src={incomeImg} alt="Income" />
                        <span>Income</span>
                    </RadioBox>
                    <RadioBox
                        onClick={() => setType('withdraw')}
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