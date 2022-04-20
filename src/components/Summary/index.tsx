import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

import { Container } from "../Summary/styles";
import { TransactionsTable } from "../TransactionsTable";


export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Logo Income" />
                </header>
                <strong>R$1000</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Logo Outcome" />
                </header>
                <strong>- R$1000</strong>
            </div>

            <div className="background-light">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Logo Total" />
                </header>
                <strong>R$1000</strong>
            </div>
        </Container>
    );
}