import React from 'react';
import styled from 'styled-components';
// import Codeblock from '../components/Codeblock.js';

const Styles = styled.div`
font-family: "Georgia", sans-serif;
`;

class Page15 extends React.Component{
    render(){
        return (
            <Styles>
                <div className="container-fluid p-2">
                <div className="row no-gutters justify-content-center align-items-center">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 p-2">
                            <h2 className="" style={{color: '#000000'}}>Summer Internships</h2>
                            <br/>
                            I did 3 internships during my undergrad:
                            <br/>
                            <ul>
                                <li>
                                    Research internship at Adobe Research, Bengaluru
                                </li>
                                <li>
                                    Research internship at the Max Planck Institute for Software Systems
                                </li>
                                <li>
                                    Front-end development at MateRate Education Pvt. Ltd. (IITD startup)
                                </li>
                            </ul>
                            
                        </div>
                        <div className="col-md-3"></div>
                </div>
                </div>
            </Styles>
        )
    }
}
export default Page15;