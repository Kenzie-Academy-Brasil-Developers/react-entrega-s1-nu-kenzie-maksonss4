import styled from "styled-components";

export const Container = styled.main`
    background-color: #343A40;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    p, h2{
        color: #FFFFFF;
        margin: 0;
        text-align: center;
    }

    .divLeft{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        padding: 20px;
    }

    .divRight{
        position: relative;
        top: 0;
        left: 0;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        top: 120px;
    }

    #z1 img{
        width: 200px;
    }

    #z2 img{
        width: 175px;
    }

    #z3 img{
        width: 150px;
    }
    
    .divRight figure{
        position: absolute;        
    }

    @media (min-width: 870px){
        &{
            flex-direction: row;
        }

        .divLeft{
            gap: 20px;
        }

        .divRight{
            top: 0;
        }

        #z1 img{
        width: 240px;
        }

        #z2 img{
            width: 210px;
        }

        #z3 img{
            width: 180px;
        }
    }
`