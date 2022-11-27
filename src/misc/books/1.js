import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image'
import cover from '../../images/murderontheorientexpress.jpg';

const Styles = styled.div`
font-family: "Georgia", sans-serif;
background-color: #ffdeb2;
`;

class Book1 extends React.Component{
    render(){
        return (
            <Styles>
                <div className="container-fluid p-2">
                <div className="row no-gutters justify-content-center align-items-center">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h2 className="p-2" style={{color: '#ffffff', backgroundColor:'#000000'}}>Murder on the Orient Express</h2>
                            <br/>
                            <span style={{color:'blue', fontWeight:'bold'}}><em>Aug 2021</em></span>
                            <br/><br/>
                            <div className="text-center justify-content-center d-flex">
                            <Image src={cover} style={{height:'130px', width:'130px'}} className="shadow" style={{transform: 'rotate(270deg)', height:'200px', width:'250px'}}/>
                            </div>
                            <br/><br/>
                            <p style={{color: '#000000', fontSize:'1.1em'}}>
                                Finished reading yet another Agatha Christie's classics: 'Murder on the Orient Express'.
                                Gripping as any other H. Poirot's mysteries, this book delves into a strange murder on
                                the Orient Express in the middle of nowhere. Curiously enough, the <em>Calais-Stamboul</em>(
                                Yes, it is now Istanbul) coach is full of
                                people despite the harsh weather, a rare phenomenon. While the train is halted midway due to a snowdrift in the middle of the night, the morning brings
                                the mystery of a dead man, with no one except Poirot having some experience in the matter. 

                                <br/>
                                <br/>
                                One thing is clear, no one liked the dead man, not even his secretary. When Poirot was
                                approached by the dead man the previous day with regards to his safety, he refused on the grounds that
                                he didn't like his face. 
                                
                                As Poirot finds out later,
                                everyone on the train(leaving out Poirot & certain other obvious group of people!) had a connection with the man- 
                                <em>Ratchett</em>(Who is he?). An unexpected past unfolds as I read past the pages of this book. But, who could
                                kill?- among a bunch of women and men and why?
                                <br/>
                                <br/>
                                <em><bold>SPOILERS!!!</bold></em>
                                <br/>
                                <br/>
                                Coming to symbolism in Christie's novels, a jury consists of 12 people to decide the
                                fate of a convicted person by the rule of the law. There were 12 people on
                                 the train too... 
                                
                                <br/>
                                <br/>
                                Takeaways: People usually accept their lies when confronted with the truth(try this!)
                            </p>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </Styles>
        )
    }
}
export default Book1;

