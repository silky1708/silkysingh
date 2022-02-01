import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image'
import bookCover from '../../images/girlonthetrain.jpg';

const Styles = styled.div`
font-family: "Georgia", sans-serif;
`;

class Book4 extends React.Component{
    render(){
        return (
            <Styles>
                <div className="container-fluid p-2">
                <div className="row no-gutters justify-content-center align-items-center">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h2 className="py-2" style={{}}>The Girl on the Train</h2>
                            <br/>
                            <span style={{color:'blue', fontWeight:'bold'}}><em>2020</em></span>
                            <br/><br/>

                            <div className="text-center justify-content-center d-flex">
                            <Image src={bookCover} style={{height:'130px', width:'130px'}} className="shadow" style={{transform: 'rotate(270deg)', height:'200px', width:'260px'}}/>
                            </div>

                            <br/><br/>
                            <p>
                                A gripping psychological thriller and No. 1 bestseller.
                            </p>

                            <p>
                                The story revolves around a girl whose daily routine involves commuting on a 
                                train. She observes a couple, whose house is on her way. One day, she senses something 
                                different in their behavior. What will she do? 

                
                            </p>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </Styles>
        )
    }
}
export default Book4;