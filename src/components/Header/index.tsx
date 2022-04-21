import { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header(){

    const [isNewTransactionsModalOpena] = useState();

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt Money" />
                <button type="button">
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}