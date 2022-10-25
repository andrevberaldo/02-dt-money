import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./transactionsTable.styles";

interface ITransaction {
    id: number;
    title: string;
    amout: number;
    type: string;
    category: string;
    creatAt: string;
}


function TransactionTable() {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, [])


    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>                    
                </thead>

                <tbody>
                    {transactions.map((transaction: ITransaction) => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.category}</td>
                                <td className={transaction.amout < 0 ? 'withdraw' : 'income'}>{`R$ ${transaction.amout}`}</td>
                                <td>{transaction.type}</td>
                                <td>{transaction.creatAt}</td>
                            </tr>
                        ) 
                    })}
                </tbody>
            </table>
        </Container>
    )
}

export { TransactionTable }