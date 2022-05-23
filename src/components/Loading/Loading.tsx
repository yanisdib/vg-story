import styled from 'styled-components';

import { Spinner } from '../';


const Component = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    background-color: #ececec;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;


function Loading(): JSX.Element {
    return (
        <Component data-testid="loading-screen">
            <Wrapper>
                <Content>
                    <Spinner />
                </Content>
            </Wrapper>
        </Component>
    )
}


export default Loading;