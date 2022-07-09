import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function TransactionsTable(){

    const { transactions } = useContext(TransactionsContext);
    
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td className="deposit">R$ 4.000</td>
                        <td>Prestação de Serviço</td>
                        <td>01/01/2022</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td className="deposit">R$ 4.000</td>
                        <td>Prestação de Serviço</td>
                        <td>01/01/2022</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td className="withdraw">- R$ 4.000</td>
                        <td>Prestação de Serviço</td>
                        <td>01/01/2022</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td className="withdraw">- R$ 4.000</td>
                        <td>Prestação de Serviço</td>
                        <td>01/01/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}