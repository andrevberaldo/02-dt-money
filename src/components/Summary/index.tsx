import { Container } from "./summary.styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from "../../hooks/useTransactions";


interface IO {
    [key: string]: string;
}


export function Summary() {
    const { transactions } = useTransactions();

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

    const currencies: IO = {
        'en-US': 'USD',
        'pr-BR': 'BRL',
        'de-DE': 'EUR'
    }

    function getCurrency() {
        const locale = navigator.languages[0];
        const currency = currencies[locale];
    
        if(currency) return {
            locale,
            currency
        }

        return {
            locale: 'en-US',
            currency: 'USD'
        }
    }

    return (
        <Container>
            <div>
                <header>
                    <p>Incomes</p>
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat(getCurrency().locale, {
                        style: 'currency',
                        currency: getCurrency().currency
                    }).format(totalIncome)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Expenses</p>
                    <img src={outcomeImg} alt="saidas" />
                </header>
                <strong>
                    {new Intl.NumberFormat(getCurrency().locale, {
                        style: 'currency',
                        currency: getCurrency().currency
                    }).format(totalWithdraw)}
                </strong>
            </div>
            <div className={total < 0 ? "heighlight-text negative" : "heighlight-text positive"}>
                <header>
                    <p>Balance</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>
                    {new Intl.NumberFormat(getCurrency().locale, {
                        style: 'currency',
                        currency: getCurrency().currency
                    }).format(total)}
                </strong>
            </div>
        </Container>
    )
}