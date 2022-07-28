import ButtonInicio from "../ButtonInicio";
import { Container } from "./style";
import logo from "../../assets/logo-nukenzie.svg"
import z1 from "../../assets/z1.png"
import z2 from "../../assets/z2.png"
import z3 from "../../assets/z3.png"

function Main ({setInicio}) {

    return(
        <Container>
            <div className="divLeft">
                <figure>
                    <img src={logo} alt="" />
                </figure>
                <h2>Centralize o controle das suas finanças</h2>
                <p>de forma rápida e segura</p>
                <ButtonInicio setInicio={setInicio}></ButtonInicio>
            </div>
            <div className="divRight">
                <figure id="z1">
                    <img src={z1} alt="" />
                </figure>
                <figure id="z2">
                    <img src={z2} alt="" />
                </figure>
                <figure id="z3">
                    <img src={z3} alt="" />
                </figure>
            </div>
        </Container>
    )
}

export default Main