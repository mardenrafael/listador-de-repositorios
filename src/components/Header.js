import styled from 'styled-components';
import { Component } from 'react';


const Div = styled.div`
    width: 100%;
    height: 150px;

    background-color: #026919;

    display: flex;

    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    color: #f7f2fF;

    margin: 0;

    font-weight: 700;
    font-size: 64px;
    
`;

class Header extends Component {

    render() {
        return(
            <Div>
                <Title>
                    Listador de repositorios
                </Title>
            </Div>
        );
    }
}

export default Header;
