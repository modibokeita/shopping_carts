import styled from "styled-components";

export const HeaderStyled =  styled.header`

    margin: 0px;
    padding: 5px;
    background-color:#45a56f;



`

export const NavStyled = styled.nav`

    ul, li a{
        display: flex;
        align-items: center;
        text-align: center;
        color: white;
        font-size:20px;
        margin-left: 20px;
        list-style:none;
        text-decoration:none;
        padding: 5px;

    }
   a:hover{
        background:#66f884;

    }

    @media(max-width:900px) {
        width: 100%;

    }
`

