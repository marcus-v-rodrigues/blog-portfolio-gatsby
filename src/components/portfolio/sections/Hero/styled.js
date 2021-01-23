import styled from "styled-components"

export const Text = styled.section`
        position: absolute;
        display: flex;  
        flex-wrap: wrap;
        flex-direction: column;
        top: 50%;
        left: 10%;
        transform: translate(0, -50%);
        height: auto;
        width: auto;

    h1 {
        font-family: "Space Mono", monospace;
        font-weight: 100;
        font-size: 1.7rem;
        color: var(--purple);       
    }
    p {
        font-family: "Montserrat", sans-serif;
        font-weight: 100;
        font-size: 2rem;
        padding-top: 10px;
        color: var(--slate);       
    }

`