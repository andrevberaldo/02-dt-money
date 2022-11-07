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

function TransactionTable() {
    const { transactions } = useTransactions();

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
                                        new Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(transaction.amount)
                                    }
                                </td>
                                <td>{transaction.type}</td>
                                <td>
                                {
                                        new Intl.DateTimeFormat('pt-BR').format(
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