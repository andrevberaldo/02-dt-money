import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';


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

export const TransactionsContext = createContext<createContextProps>({} as createContextProps);

export function TransactionsProvider({children}: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionDTOInput){
        await api.post('/transactions', {
            ...transactionInput, 
            createdAt: new Date()
        });
    } 

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            { children }
        </TransactionsContext.Provider>
    )
}


