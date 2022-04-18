import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {    
    useEffect(() =>{
        api.get('transactions')        
        .then(response => console.log(response.data))
    },[]);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titles</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Deposit</td>
                        <td className="deposit">R$10.000</td>
                        <td>Investment</td>
                        <td>20/02/2022</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>Ferias na Tailandia</td>
                        <td className="withdraw">-R$10.000</td>
                        <td>Lazer</td>
                        <td>20/02/2022</td>
                    </tr>
                </tbody>
                
            </table>
        </Container>
    )
}