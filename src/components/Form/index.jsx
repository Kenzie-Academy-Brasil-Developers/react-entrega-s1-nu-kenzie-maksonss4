import { useState } from 'react'
import './style.css'

function Form ({setListTransactions}) {
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [type, setType] = useState("Entrada")

    function handleSubmit (event) {
        event.preventDefault()

        setListTransactions(
            (oldSetListTransictions) => [...oldSetListTransictions, {description, value, type}]               
        )
    }

    return(
        <form onSubmit={(event) => handleSubmit(event)}>
        
            <label htmlFor="description">Descrição</label>
            <input name='description' required placeholder='Descrição' type='text' onChange={event => setDescription(event.target.value)}/>
            
            <div className='divValueType'>
                <div className='divLabel'>
                    <label htmlFor='value'>Valor</label>
                    <input name='value' required placeholder='Valor' type='number' onChange={event => setValue(event.target.value)}/>
                </div>

                <div className='divLabel'>
                    <label htmlFor="type">Tipo</label>
                    <select name='type' onChange={event => setType(event.target.value)}>
                        <option value='Entrada'>Entrada</option>
                        <option value='Saída'>Saída</option>
                    </select>
                </div>
            </div>

            <div className='centralizarBotao'>
                <button type='submit' className='buttonAddTransacao' >Inserir valor</button>
            </div>
        </form>
    )
}

export default Form 