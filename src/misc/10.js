import React from 'react';
import styled from 'styled-components';
// import Codeblock from '../components/Codeblock.js';

const Styles = styled.div`
font-family: "Georgia", sans-serif;
`;

class Page10 extends React.Component{
    render(){
        return (
            <Styles>
                <div className="container-fluid p-2">
                <div className="row no-gutters justify-content-center align-items-center">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 my-2">
                            <h2 className="p-1" style={{color: '#000000', backgroundColor:'yellow'}}>Why do we want to be perfect?</h2>
                            <br/>
                            <span style={{color:'blue', fontWeight:'bold'}}>Psych./</span>
                            <br/><br/>
                            <p style={{color: '#000000', fontSize:'1.1em'}}>
                                It'll be relatable for those who have tendency to make things perfect. Thinking
                                about it: Nature itself is imperfect. Then why should we be perfect?
                            </p>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </Styles>
        )
    }
}
export default Page10;