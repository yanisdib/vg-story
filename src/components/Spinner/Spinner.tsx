import styled, { keyframes } from 'styled-components';


const spin = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;


export default styled.div`
    width: 2.28571429rem;
    height: 2.28571429rem;
    border: 0.2em solid #D1D1D1;
    border-top: 0.2em solid #FF8BB7;
    border-radius: 50%;
    animation: ${spin} 0.6s linear infinite;
`;