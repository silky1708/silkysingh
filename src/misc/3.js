import React from 'react';
import styled from 'styled-components';
// import Codeblock from '../components/Codeblock.js';

const Styles = styled.div`
font-family: "Georgia", sans-serif;
`;

class Page3 extends React.Component{
    render(){
        return (
            <Styles>
                <div className="container-fluid p-2">
                    <div className="text-center font-weight-bold text-center my-2">
                        <h3 style={{color: '#000000'}}>Understanding Flask-based server</h3>
                    </div>
                </div>
            </Styles>
        )
    }
}
export default Page3;