import { Container } from "./summary.styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
    const data = useContext(TransactionsContext);

    return (
        <Container>
            <div>
                <header>
                    <p>Incomes</p>
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong>R$ 1000</strong>
            </div>
            <div>
                <header>
                    <p>Outcomes</p>
                    <img src={outcomeImg} alt="saidas" />
                </header>
                <strong>-R$ 500</strong>
            </div>
            <div className="heighlight-text">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>R$ 5000</strong>
            </div>
        </Container>
    )
}