import './style.css'
import logo from '../../assets/logo-nukenzie.svg'

function Header ({setInicio}) {

    return (
        <header>
            <figure>
            <img src={logo} alt='Logo' />
            </figure>
            <button onClick={()=>setInicio(true)} className='buttonInicio'>Início</button>
        </header>
    )
}

export default Header