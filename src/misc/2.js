import React from 'react';
import styled from 'styled-components';
// import Codeblock from '../components/Codeblock.js';

const Styles = styled.div`
font-family: "Georgia", sans-serif;
`;

class Page2 extends React.Component{
    render(){
        return (
            <Styles>
                <div className="container-fluid p-2">
                    <div className="text-center font-weight-bold text-center my-2">
                        <h3 style={{color: '#000000'}}>Linear Algebra basics</h3>
                    </div>
                    <br/>
                    <div className="container-fluid">
                        Linear Algebra is the branch of mathematics dealing with linear equations and their solutions.
                    </div>
                </div>
            </Styles>
        )
    }
}
export default Page2;