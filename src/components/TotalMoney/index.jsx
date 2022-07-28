import './style.css'

function TotalMoney ({listTransactions}) {
    const total = listTransactions.reduce((acc, next) => {
        return (next.type === "Saída") ? acc + parseInt(next.value) * -1 : acc + parseInt(next.value)        
    }, 0)

    return (
        <div className='divTotalMoney'>
            <div className='divSaldo'>
                <h3>Valor total:</h3>
                <span>{total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
            </div>
            <span>O valor se refere ao saldo</span>
        </div>
    )
}

export default TotalMoney 