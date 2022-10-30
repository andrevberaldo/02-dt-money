import Modal from 'react-modal';
import { Container } from './newTransactionModal.styles';
import closeImg from '../../assets/close.svg';

interface newTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: newTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName={"react-modal-overlay"}
            className={"react-modal-content"}
        >
            <Container>
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
                
                <input type="text" placeholder="Categoria" />
                
                <button type="submit">Cadastrar</button>                
            </Container>
        </Modal>
    )
}