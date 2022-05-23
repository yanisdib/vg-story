import styled from 'styled-components';


const Component = styled.footer`
    display: flex;
    flex-direction: row;
    height: 50vh;
    background-color: #000;
    color: #FFF;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: inherit;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    height: inherit;
`;


function Footer(): JSX.Element {
    return (
        <Component>
            <Wrapper>
                <Content>

                </Content>
            </Wrapper>
        </Component>
    );
}


export default Footer;