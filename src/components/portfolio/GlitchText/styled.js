import styled from "styled-components"

export const Wrapper = styled.div` 
    position: relative;
    display: flex;
    height:auto;
    width:auto;

`

export const Effect = styled.div`
    animation: jerkwhole 2.5s infinite;
    position: relative;
    height:auto;
    width:600px;
    padding: 0;
    margin: 0;

    @keyframes jerkwhole {
        40% {
            opacity: 1;
            top: 0;
            left: 0px;
            transform: scale(1, 1);
            transform: skew(0, 0);
        }
        41% {
            opacity: 0.2;
            top: 0px;
            left: -100px;
            transform: scale(1, 1.2);
            transform: skew(20deg, 0);
        }
        42% {
            opacity: 0.8;
            top: 0px;
            left: 50px;
            transform: scale(1, 1.2);
            transform: skew(-40deg, 0);
        }
        43% {
            opacity: 1;
            top: 0;
            left: 0;
            transform: scale(1, 1);
            transform: skew(0, 0);
        }
    }

`

export const Glitch = styled.div`
    position: relative;
    height: auto;
    font-family: "Space Mono", monospace;
    font-size: 5rem;
    width: max-content;
    filter: blur(1px);
    animation: blur 30ms infinite, jerk 50ms infinite;

    div:nth-child(1) {
        position: relative;
        color: red;
        margin-left: 10px;
        margin-top: -4px;
        filter: blur(2px);
    }
    
    div:nth-child(2) {
        color: green;
        margin-left: 7px;
        filter: blur(2px);
    }
    
    div:nth-child(3) {
        color: blue;
        margin-left: -7px;
        margin-top: 4px;
        filter: blur(2px);
        animation: jerkblue .7s infinite;
    }
    
    div:nth-child(4) {
        color: white;
        filter: blur(1px);
        text-shadow: 0 0 50px rgba(255, 255, 255, 0.4);
    }
    
    div:nth-child(5) {
        color: rgba(255, 255, 255, 0.4);
        filter: blur(15px);
    }
    
    @keyframes blur {
        0% {
            filter: blur(1px);
            opacity: 0.8;
        }
        50% {
            filter: blur(1px);
            opacity: 1;
        }
        100% {
            filter: blur(1px);
            opacity: 0.6;
        }
    }
    @keyframes jerk {
        50% {
            left: 2px;
        }
        51% {
            left: 0;
        }
    }
    @keyframes jerkup {
        50% {
            top: 2px;
        }
        51% {
            top: 0;
        }
    }
    @keyframes jerkblue {
        0% {
            left: 0;
        }
        30% {
            left: 0;
        }
        31% {
            left: -10px;
        }
        32% {
            left: 0;
        }
        98% {
            left: 0;
        }
        100% {
            left: 10px;
        }
    }
    @keyframes jerkgreen {
        0% {
            left: 0;
        }
        30% {
            left: 0;
        }
        31% {
            left: -20px;
        }
        32% {
            left: 0;
        }
        98% {
            left: 0;
        }
        100% {
            left: 15px;
        }
    }
    
`

export const Text = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`