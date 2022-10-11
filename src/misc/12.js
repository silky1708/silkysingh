import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
font-family: "Georgia", sans-serif;
`;

class Page12 extends React.Component{
    render(){
        return (
            <Styles>
                <div className="container-fluid p-2">
                <div className="row no-gutters justify-content-center align-items-center">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h2 className="p-2" style={{color: '#000000'}}>Lessons learnt being an Undergrad</h2>
                            {/* <br/> */}
                            {/* <span style={{color:'blue', fontWeight:'bold'}}></span> */}
                            <br/><br/>
                            <p style={{color: '#000000', fontSize:'1.1em'}}>
                                <ul>
                                   <li>Learn decision making. Don't go to seniors for every little thing.</li>
                                   <li>No need to do what everyone else is doing.</li>
                                   <li>No need to do everything that looks even a little bit attractive. Balance between 
                                       exploring and burning out is a must.
                                   </li>
                                   <li>Focus on academics.</li>
                                   <li>Everyone is as confused as you are.</li>
                                   <li>Focus on self-improvement.</li>
                                   <li>Anything you pick, do it well.</li>
                                   <li>Be responsible for yourself.</li>
                                   
                                </ul>
                            </p>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </Styles>
        )
    }
}
export default Page12;