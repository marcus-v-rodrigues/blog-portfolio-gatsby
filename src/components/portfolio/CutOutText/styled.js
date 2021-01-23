import styled from "styled-components"

export const CutOutWrapper = styled.span`
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    font-size: 7.5rem;

    span span{
        color: var(--green);
        position: relative;
        text-align: center;
        text-shadow: -1px 0 0 rgba(0,0,0,0.2);

        &:before, &:after{
            content: attr(data-title);
            position: absolute;
            left: 0;
            transform-origin: left;
            transition: 0.5s cubic-bezier(0, 1.88, 0.83, 0.67);
        }

        &:before{
            color: var(--purple);
            transform: rotateY(25deg);
            z-index: 2;
        }
      
        &:after{
            color: rgba(0,0,0,0.1);          
            transform: rotateY(5deg) scale(1.07 , 1) skewY(3deg);
            z-index: 1;
            opacity: 0.5;
        }
      
        &:hover::before{
            transform: perspective(1000px) rotateY(-45deg);
        }
      
        &:hover::after{
            transform: rotateY(0deg) scale(1.11 , 1) skewY(6deg);
        }
    }
`