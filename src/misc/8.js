import React from 'react';
import styled from 'styled-components';
// import Codeblock from '../components/Codeblock.js';

const Styles = styled.div`
font-family: "Georgia", sans-serif;
`;

class Page8 extends React.Component{
    render(){
        return (
            <Styles>
                <div className="container-fluid p-2">
                    <div className="col-md-1"></div>
                    <div className="text-center font-weight-bold text-center my-2">
                        <h3 style={{color: '#000000'}}>Why do we want to be perfect?</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the
                             industry's standard dummy text ever since the 1500s, when an unknown printer
                              took a galley of type and scrambled it to make a type specimen book.
                               It has survived not only five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                 with the release of Letraset sheets containing Lorem Ipsum passages, and
                                  more recently with desktop publishing software like Aldus PageMaker 
                                  including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </Styles>
        )
    }
}
export default Page8;