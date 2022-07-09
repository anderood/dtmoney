import { useContext } from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";

import { Container } from "../Summary/styles";
import { TransactionsTable } from "../TransactionsTable";


export function Summary(){

    const { transactions } = useContext(TransactionsContext);

    const sumary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0, 
        total: 0
    })

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Logo Income" />
                </header>
                <strong>{sumary.deposits}</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Logo Outcome" />
                </header>
                <strong>- {sumary.withdraws}</strong>
            </div>

            <div className="background-light">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Logo Total" />
                </header>
                <strong>{sumary.total}</strong>
            </div>
        </Container>
    );
}