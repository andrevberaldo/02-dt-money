import { Container } from "./summary.styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong>R$ 1000</strong>
            </div>
            <div>
                <header>
                    <p>Saindas</p>
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