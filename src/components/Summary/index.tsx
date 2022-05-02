import { Container } from "./styles";
import IncomeImg from "../../assets/income.svg"
import OutComeImg from "../../assets/outcome.svg"
import TotalImg from "../../assets/total.svg"
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
    const { transactions } = useTransactions();

    // const totalDeposits = transactions.reduce((acc, transaction) => {
    //     if (transaction.type === 'deposit') {
    //         return acc + transaction.amount;
    //     }
    //     return acc;
    // }, 0);

    const summary = transactions.reduce((acc, transaction) => {
        if ( transaction.type === 'deposit') {
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
    return (
        <Container>
            <div>
                <header>
                    <p>Entries</p>
                    <img src={IncomeImg} alt="" />
                </header>
                <strong>
                {new Intl.NumberFormat('en-us', {
                                    style: 'currency',
                                    currency: 'USD'
                                }).format(summary.deposits)}</strong>
            </div>
            <div>
                <header>
                    <p>Removals</p>
                    <img src={OutComeImg} alt="" />
                </header>
                <strong> - 
                {new Intl.NumberFormat('en-us', {
                                    style: 'currency',
                                    currency: 'USD'
                                }).format(summary.withdraws)}</strong>

            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="" />
                </header>
                <strong>
                {new Intl.NumberFormat('en-us', {
                                    style: 'currency',
                                    currency: 'USD'
                                }).format(summary.total)}</strong>
            </div>
        </Container>
    )
}