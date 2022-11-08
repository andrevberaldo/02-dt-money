import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./transactionsTable.styles";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}
interface IO {
    [key: string]: string;
}

function TransactionTable() {
    const { transactions } = useTransactions();

    const currencies: IO = {
        'en-US': 'USD',
        'pt-BR': 'BRL',
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
            <table>
                <thead>
                    <tr>
                        <th>Tite</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>                    
                </thead>

                <tbody>
                    {transactions.map((transaction: Transaction) => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.category}</td>
                                <td className={transaction.type}>
                                    {
                                        new Intl.NumberFormat(getCurrency().locale, {
                                            style: 'currency',
                                            currency: getCurrency().currency
                                        }).format(transaction.amount)
                                    }
                                </td>
                                <td>{transaction.type}</td>
                                <td>
                                {
                                        new Intl.DateTimeFormat(getCurrency().locale).format(
                                            new Date(transaction.createdAt))
                                    }
                                </td>
                            </tr>
                        ) 
                    })}
                </tbody>
            </table>
        </Container>
    )
}

export { TransactionTable }