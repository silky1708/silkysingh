import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';

const Styles = styled.div`
font-family: "Georgia", sans-serif;
// background-color: #ffdeb2;
`;

class Book9 extends React.Component{
    render(){
        return (
            <Styles>
                <div className="container-fluid p-2">
                <div className="row no-gutters justify-content-center align-items-center">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <br/>
                            <h2 className="py-2" style={{fontWeight:'bold'}}>The Silent Patient</h2>
                            <br/>

                            <span style={{color:'blue', fontWeight:'bold'}}><em>2022</em></span>
                            <br/><br/>
                            <p style={{color: '#000000', fontSize:'1.1em'}}>
                                A quick-paced thriller!
                                A man is killed by his wife, and the wife is 
                            </p>

                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </Styles>
        )
    }
}
export default Book9;