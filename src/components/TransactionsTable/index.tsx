import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

// Context => Compartilhamento de estado entre varios componentes da aplicacao idependente de onde esses elementos estao.
// Consigo acessar qualquer componente idependete do nivel hierarquico do elemento.

export function TransactionsTable() {
    const {transactions} = useContext(TransactionsContext)

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
                    {transactions.map(transaction => (

                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('en-us', {
                                    style: 'currency',
                                    currency: 'USD'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('en-us').format(
                                    new Date(transaction.createdAt)
                                )}
                            </td>
                        </tr>

                    ))}
                </tbody>

            </table>
        </Container>
    )
}