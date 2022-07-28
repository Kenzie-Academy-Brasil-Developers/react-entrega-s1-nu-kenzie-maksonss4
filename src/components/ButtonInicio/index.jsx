import { Container } from "./style";

export default function ButtonInicio ({setInicio}) {

    return(
        <Container onClick={()=>setInicio(false)}>iniciar</Container>
    )
}