import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './newTransactionModal.styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react';

interface newTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: newTransactionModalProps) {
    function handleOnSubmit(props: FormEvent) {
        props.preventDefault();
    }
    
    const [type, setType] = useState('deposit')
    
    
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName={"react-modal-overlay"}
            className={"react-modal-content"}
        >
            <Container
                onSubmit={handleOnSubmit}
            >
                <button
                    className="react-modal-close" 
                    type="button"
                    onClick={onRequestClose}
                    >                 
                        <img src={closeImg} alt="closeButton" />
                </button>
                
                <h2>Nova Transição</h2>
                
                <input type="text" placeholder="Titulo" />
                
                <input type="number" placeholder="Valor" />

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
                
                <input type="text" placeholder="Categoria" />
                
                <button type="submit">Cadastrar</button>                
            </Container>
        </Modal>
    )
}