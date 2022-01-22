import React from 'react';
import styled from 'styled-components';
// import Codeblock from '../components/Codeblock.js';

const Styles = styled.div`
font-family: "Georgia", sans-serif; !important
`;

class Page16 extends React.Component{
    render(){
        return (
            <Styles>
                <div className="container-fluid p-2">
                <div className="row no-gutters justify-content-center align-items-center">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 p-2">
                            <h2 className="text-center" style={{color: '#000000'}}>Computer Networks</h2>
                            <br/>
                            ** <em>This page contains my notes on Computer Networking, based on the Coursera course offered by Google: The Bits and Bytes of Computer Networking.</em>

                            The 5 layer model of Computer Networks consists of the following layers:
                            <br/><br/>

                            {/* table for 5-layer model details*/}
                            <table>
                            <tr>
                                <td>Layer name</td>
                                <td>Protocol used</td>
                                <td>Protocol Data Unit</td>
                            </tr>

                            <tr>
                                <td>Application</td>
                                <td>HTTP, SMTP</td>
                                <td>Messages</td>
                            </tr>

                            <tr>
                                <td>Transport</td>
                                <td>TCP/UDP</td>
                                <td>Segment</td>
                            </tr>

                            <tr>
                                <td>Network</td>
                                <td>IP</td>
                                <td>Datagram</td>
                            </tr>

                            <tr>
                                <td>Data Link</td>
                                <td>Ethernet, WiFi</td>
                                <td>Frame</td>
                            </tr>

                            <tr>
                                <td>Physical</td>
                                <td>10-Base-T, 802.11</td>
                                <td>Bits</td>
                            </tr>
                            </table>

                            <br/><br/>
                            Some acronyms and what they stand for:
                            <br/><br/>
                            <ul>
                                <li>HTTP- Hyper Text Transfer Protocol</li>
                                <li>SMTP- Simple Mail Transfer Protocol</li>
                                <li>TCP- Transmission Control Protocol</li>
                                <li>UDP- User Datagram Protocol</li>
                                <li>IP- Internet Protocol</li>
                                <li>CSMA/CD- Carrier Sense Multiple Access with Collision Detection</li>

                            </ul>
                            <br/><br/>
                            
                            Some terms:
                            <ul>
                            <li>Router is a device that knows how to forward traffic across independent networks. It works at Layer 3(Network Layer).</li>
                            <li>Switch is a network device that examines incoming data and determines its location, and sends it to the exact location. It operates at Layer 2(Data Link Layer).</li>
                            <li>Hub is another device that provides for communication among the devices interconnected through it. It operates at Layer 1(Physical Layer).</li>
                            </ul>


                            <h3>Ethernet</h3>
                            
                             
                            
                        </div>
                        <div className="col-md-3"></div>
                </div>
                </div>
            </Styles>
        )
    }
}
export default Page16;