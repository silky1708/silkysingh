import React from 'react';
import styled from 'styled-components';
// import Codeblock from '../components/Codeblock.js';

const Styles = styled.div`
font-family: "Georgia", sans-serif;
`;

class Page14 extends React.Component{
    render(){
        return (
            <Styles>
                <div className="container-fluid p-2">
                <div className="row no-gutters justify-content-center align-items-center">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 p-2">
                            <h2 className="" style={{color: '#000000'}}>What will happen when Earth dies?</h2>
                            <br/><br/>
                            <span style={{color:'blue', fontWeight:'bold'}}>Thoughts/</span> 

                            <br/><br/>
                            <p style={{color: '#000000', fontSize:'1.1em'}}>
                                What would the universe look like if there was no earth? An unsettling question about the
                                existence of humans.. I don't have the answer to it. 

                                
                            </p>
                            
                        </div>
                        <div className="col-md-3"></div>
                </div>
                </div>
            </Styles>
        )
    }
}
export default Page14;