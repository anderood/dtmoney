import { FormEvent, useState, useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';
import Modal from 'react-modal';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

import imgClose from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: ()=>void;
}

export function NewTransactionModal({ isOpen,  onRequestClose }: NewTransactionModalProps) {

    const { createTransaction } = useContext(TransactionsContext);

    const [ title, setTitle ] = useState('');
    const [ amount, setAmount ] = useState(0);
    const [ category, SetCategory ] = useState('');

    const [ type, setType ] = useState('deposit');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount, 
            category, 
            type
        });

        setTitle('');
        setAmount(0);
        SetCategory('');
        onRequestClose();
    }

    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="submit" onClick={onRequestClose} className="react-modal-close">
                <img src={imgClose} alt="Botão para Fechar" />
            </button>
            <Container onSubmit={handleCreateNewTransaction} >
                <h2>Cadastrar Transação</h2>
                <input 
                    placeholder='Titulo' 
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input 
                    type="number" 
                    placeholder='Valor' 
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox 
                        type='button'
                        className=''
                        onClick={()=> { setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                        >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type='button'
                        onClick={()=> { setType('withdraw') }}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                        >
                        <img src={outcomeImg} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input 
                    placeholder='Categoria' 
                    value={category}
                    onChange={event => SetCategory(event.target.value)}
                    />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}