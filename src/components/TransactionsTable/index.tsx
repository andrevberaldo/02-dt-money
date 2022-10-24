import { Container } from "./transactionsTable.styles";

function TransactionTable(){
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
                    <tr>
                        <td>Aluguel</td>
                        <td className={'withdraw'}>-R$ 4.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/12/2022</td>
                    </tr>
                    <tr>
                        <td>Construção de site</td>
                        <td className={'income'}>R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/12/2022</td>
                    </tr>
                    <tr>
                        <td>Construção de site</td>
                        <td className={'withdraw'}>-R$ 3.500,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/12/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}

export { TransactionTable }