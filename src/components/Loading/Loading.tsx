import { Spinner } from '../';
import {
    Component,
    Content,
    Wrapper
} from './Loading.styles';


function Loading(): JSX.Element {
    return (
        <Component data-testid="loading-screen">
            <Wrapper>
                <Content>
                    <Spinner />
                </Content>
            </Wrapper>
        </Component>
    );
}


export default Loading;