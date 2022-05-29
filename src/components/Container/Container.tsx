import styled from 'styled-components';


export default styled.div`
    --container-max-width-xs: 100vw;
    --container-max-width-sm: 100vw;
    --container-max-width-md: 960px;
    --container-max-width-lg: 1360px;
    --container-max-width-xl: 1300px;

    --container-padding-x: 80px !important;


    @media (min-width: 375px) {
        display: flex;
        justify-content: center;
        width: 95vw;
        max-width: var(--container-max-width-xs);
        margin: 0 auto;
        padding-left: 0;
        padding-right: 0;
    }

    @media (min-width: 744px) {
        display: flex;
        width: 95vw;
        max-width: var(--container-max-width-sm);
        padding-left: 0;
        padding-right: 0;
    }

    @media (min-width: 950px) {
        display: flex;
        width: 84vw;
        max-width: var(--container-max-width-md);
    }

    @media (min-width: 1128px) {
        display: flex;
        width: 84vw;
        max-width: var(--container-max-width-lg);
    }

    @media (min-width: 1440px) {
        display: flex;
        width: 84vw;
        max-width: var(--container-max-width-xl);
        padding-left: var(--container-padding-x);
        padding-right: var(--container-padding-x);
    }
`;