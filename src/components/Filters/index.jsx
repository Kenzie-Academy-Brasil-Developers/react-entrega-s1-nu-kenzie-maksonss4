import './style.css'

function Filters ({listTransactions, setFiltro}) {   

    return (
        <div className='divFilters'>
            <h3>Resumo finaceiro</h3>
            <div className='divButtonsFilters'>
                <button onClick={() => setFiltro([])}>Todos</button>
                <button onClick={() => setFiltro(listTransactions.filter(transaction => transaction.type === 'Entrada'))}>Entradas</button>
                <button onClick={() => setFiltro(listTransactions.filter(transaction => transaction.type === 'Saída'))}>Saídas</button>
            </div>
        </div>
    )
}

export default Filters