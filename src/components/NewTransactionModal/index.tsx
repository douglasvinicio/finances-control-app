import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { useState } from 'react';



interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const [type, setType] = useState('deposit');

    return (

        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-model-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Close Modal" />
            </button>

            <Container>
                <h2>New Transaction</h2>

                <input
                    placeholder="Title"
                />

                <input
                    type="number"
                    placeholder="Amount"
                />

                <TransactionTypeContainer>
                    <RadioBox
                    type="button" 
                    //className={type === 'deposit' ? 'active' : ''}
                    onClick={() => { setType('deposit')}}
                    isActive={type === 'deposit'}
                    >

                        <img src={incomeImg} alt="In" />
                        <span>In</span>

                    </RadioBox>

                    <RadioBox
                    type="button" 
                    onClick={() => { setType('withdraw')}}                    
                    isActive={type === 'withdraw'}
                    >

                        <img src={outcomeImg} alt="Out" />
                        <span>Out</span>

                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Category"
                />

                <button type="submit">
                    Save
                </button>
            </Container>
        </Modal>
    );
}