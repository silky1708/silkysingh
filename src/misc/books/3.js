import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image'
import bookCover from '../../images/origin.jpg';

const Styles = styled.div`
font-family: "Georgia", sans-serif;
// background-color: #ffdeb2;

.blank-column {
    background-color: #8c7d8b;
}

`;

class Book3 extends React.Component{
    render(){
        return (
            <Styles>
                <div className="container-fluid p-2">
                <div className="row no-gutters justify-content-center align-items-center">
                        <div className="col-md-3" style={{}}></div>
                        <div className="col-md-6">
                            <h2 className="py-2" style={{}}>Origin</h2>
                            <br/>
                            <span style={{color:'blue', fontWeight:'bold'}}><em>2020</em></span>
                            <br/><br/>

                            <div className="text-center justify-content-center d-flex">
                            <Image src={bookCover} className="shadow" style={{transform: 'rotate(270deg)', height:'200px', width:'260px'}}/>
                            </div>
                            <br/><br/><br/>
                            
                            <p style={{color: '#000000', fontSize:'1.1em'}}>
                              A revolutionary scientist, Edmund Kirsch, is about to announce to the world a
                              great discovery- the origin of the world. There is a great hype around the event he is hosting for the same.
                              The conspiracy theories are circulating all around. 
                            </p>

                            <p style={{color: '#000000', fontSize:'1.1em'}}>
                                At the main event, Kirsch is shot dead. And the same people go after Robert Langdon,
                                his friend. With the help of Kirsch's AI, Langdon determines to share Kirsch's invention with
                                the world.
                            </p>
                        </div>
                        <div className="col-md-3" style={{backgroundColor:'#8C7D8B'}}></div>
                    </div>
                </div>
            </Styles>
        )
    }
}
export default Book3;