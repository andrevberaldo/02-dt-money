import { Container } from "./summary.styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
    const { transactions } = useContext(TransactionsContext);

    const totalIncome = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'income') {
            return acc + transaction.amount;
        }

        return acc;
    }, 0);

    const totalWithdraw = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'withdraw'){
            return acc - transaction.amount;
        }
        return acc;
    }, 0);

    const total = totalIncome + totalWithdraw;

    return (
        <Container>
            <div>
                <header>
                    <p>Incomes</p>
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(totalIncome)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Outcomes</p>
                    <img src={outcomeImg} alt="saidas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(totalWithdraw)}
                </strong>
            </div>
            <div className={total < 0 ? "heighlight-text negative" : "heighlight-text positive"}>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(total)}
                </strong>
            </div>
        </Container>
    )
}