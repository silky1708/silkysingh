import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image'
import bookCover from '../../images/origin.jpg';

const Styles = styled.div`
font-family: "Georgia", sans-serif;
// background-color: #ffdeb2;
`;

class Book3 extends React.Component{
    render(){
        return (
            <Styles>
                <div className="container-fluid p-2">
                <div className="row no-gutters justify-content-center align-items-center">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h2 className="p-2" style={{color: '#ffffff', backgroundColor:'#000000'}}>Origin</h2>
                            <br/>
                            <span style={{color:'blue', fontWeight:'bold'}}><em>2020</em></span>
                            <br/><br/>

                            <div className="text-center justify-content-center d-flex">
                            <Image src={bookCover} style={{height:'130px', width:'130px'}} className="shadow" style={{transform: 'rotate(270deg)', height:'200px', width:'260px'}}/>
                            </div>
                            <br/><br/>
                            
                            <p style={{color: '#000000', fontSize:'1.1em'}}>
                              
                            </p>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </Styles>
        )
    }
}
export default Book3;