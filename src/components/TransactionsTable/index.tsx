import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./transactionsTable.styles";

interface ITransaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}


function TransactionTable() {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);
    const data = useContext(TransactionsContext);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, [])


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
                    {transactions.map((transaction: ITransaction) => {
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