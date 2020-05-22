import styled from "styled-components";

export const PageWrapper = styled.div`
    background-color: white;
    max-width: 80%;
    margin: 2% auto;
    padding: 2%;
    color: rgb(51,51,51);
    border-radius: 5px;
    border: 1px solid lightgray;

@media screen and (max-width: 900px){
    max-width: 90%;
}

@media screen and (max-width: 767px){
    max-width: 95%;
    font-size: 14px;
}

`;


