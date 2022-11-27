import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';

const Styles = styled.div`
font-family: "Georgia", sans-serif;
// background-color: #ffdeb2;
`;

class Book11 extends React.Component{
    render(){
        return (
            <Styles>
                <div className="container-fluid p-2">
                <div className="row no-gutters justify-content-center align-items-center">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <br/>
                            <h2 className="py-2" style={{fontWeight:'bold'}}>Hullabaloo in the Guava Orchard</h2>
                            <br/>

                            <span style={{color:'blue', fontWeight:'bold'}}><em>2022</em></span>
                            <br/><br/>
                            <p style={{color: '#000000', fontSize:'1.1em'}}>
                                A man leaves his home to live in the guava tree in the forest. 
                                People keep trying to convince him to come back in different ways.
                                Hilarious!
                            </p>

                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </Styles>
        )
    }
}
export default Book11;