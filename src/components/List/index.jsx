import Card from '../Card'
import semTransacoes from '../../assets/semTransacoes.png'
import './style.css'

function List ({listTransactions, filtro}) {    
        
        return listTransactions.length > 0 ? (
            <ul>
                {
                    filtro.length > 0 ? (
                        filtro.map((transaction, index) => {
                            return <Card key={index} description={transaction.description} value={transaction.value} type={transaction.type}></Card>
                        })
                    )
                    : (
                        listTransactions.map((transaction, index) => {
                            return <Card key={index} description={transaction.description} value={transaction.value} type={transaction.type}></Card>
                        })
                    )
                }
            </ul>
        )
        : (
            <div className='divSemLancamentos'>
                <h3>Você não possui nenhum lançamento</h3>
                <figure>
                    <img src={semTransacoes} alt='Sem lançamentos' />
                </figure>
                <figure>
                    <img src={semTransacoes} alt='Sem lançamentos' />
                </figure>
                <figure>
                    <img src={semTransacoes} alt='Sem lançamentos' />
                </figure>
            </div>
        )
}

export default List 