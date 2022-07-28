import { Container } from "./style"

function Card ({description, type, value}) {    
        return(
            <Container type={type}>
                <div>
                    <h3>{description}</h3>
                    <span>{type}</span>
                </div>
                <p>{parseInt(value).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                <figure>
                    <img src="" alt="" />
                </figure>
            </Container>
        )
}

export default Card 