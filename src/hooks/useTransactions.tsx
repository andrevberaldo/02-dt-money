import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface createContextProps {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionDTOInput) => Promise<void>;
}

type TransactionDTOInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
    children: ReactNode;
}

const TransactionsContext = createContext<createContextProps>({} as createContextProps);

export function TransactionsProvider({children}: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionDTOInput){
        const response = await api.post('/transactions', {
            ...transactionInput, 
            createdAt: new Date()
        });

        const { transaction } = response.data; 

        setTransactions([
            ...transactions,
            transaction
        ])
    } 

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            { children }
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}
