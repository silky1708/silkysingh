import React from 'react';
import styled from 'styled-components';
// import Codeblock from '../components/Codeblock.js';

const Styles = styled.div`
font-family: "Georgia", sans-serif;
`;


class Page7 extends React.Component{
    render(){
        return (
            <Styles>
                <div className="container-fluid p-2">
                <div className="row no-gutters justify-content-center align-items-center">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 my-2">
                            <h2 className="p-1" style={{color: '#000000', backgroundColor:'yellow'}}>Bystander Apathy</h2>
                            <br/>
                            <span style={{color:'blue', fontWeight:'bold'}}>Psych./</span>
                            <br/><br/>
                            <p style={{color: '#000000', fontSize:'1.1em'}}>Bystander apathy refers to a situation in which people are
                            less likely to help out others when there are a lot of potential helpers around.
                            Consider a situation: you are travelling on a bus and it is about to move on to the
                            next station, meanwhile a passenger is left behind. You saw him crying out loud and 
                            running after the bus, but you also know that passengers next to you are able to
                            help(by asking the driver to stop the bus). What do you do?
                            <br/><br/>
                            This is a well-researched social situation in psychology; people won't generally reach out
                            to help the passenger in need, when there are a lot of other helpers around! 
                            </p>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </Styles>
        )
    }
}
export default Page7;