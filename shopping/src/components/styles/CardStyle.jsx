import styled from "styled-components";

export const CardStyled = styled.div`

    display:grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 20px;
    padding-bottom:30px;

    li{
        padding:20px;

        border: 1px solid #333;
        list-style: none;

    }
    img{
        width:100px;
        height:100px;
    }
    @media(max-width:900px) {
        display:flex;
        flex-direction: column;
        width: 100%;


    }

`

