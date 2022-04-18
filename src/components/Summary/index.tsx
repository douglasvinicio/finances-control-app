import { Container } from "./styles";
import IncomeImg from "../../assets/income.svg"
import OutComeImg from "../../assets/outcome.svg"
import TotalImg from "../../assets/total.svg"

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entries</p>
                    <img src={IncomeImg} alt="" />
                </header>
                <strong>R$1000</strong>
            </div>
            <div>
                <header>
                    <p>Removals</p>
                    <img src={OutComeImg} alt="" />
                </header>
                <strong>- R$500</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="" />
                </header>
                <strong>R$500</strong>
            </div>
        </Container>
    )
}