import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";
import { Container } from "./dashboard.styles";

export function Dashboard(){
    return (
        <Container>
            <Summary />
            <TransactionTable />   
        </Container>             
    )
}