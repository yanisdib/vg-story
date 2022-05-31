import { Outlet } from 'react-router-dom';

import {
    Content,
    View,
    Wrapper
} from './Dashboard.styles';


function Dashboard(): JSX.Element {
    
    return (
        <View>
            <Wrapper>
                <Content>
                    Dashboard
                    <Outlet />
                </Content>
            </Wrapper>
        </View>
    );
}


export default Dashboard;