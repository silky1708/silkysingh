import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';

const Styles = styled.div`
font-family: "Georgia", sans-serif;
// background-color: #ffdeb2;
`;

class Book8 extends React.Component{
    render(){
        return (
            <Styles>
                <div className="container-fluid p-2">
                <div className="row no-gutters justify-content-center align-items-center">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <br/>
                            <h2 className="py-2" style={{fontWeight:'bold'}}>tuesdays with Morrie</h2>
                            <br/>

                            <span style={{color:'blue', fontWeight:'bold'}}><em>Jan 2022</em></span>
                            <br/><br/>
                            {/* <div className="text-center justify-content-center d-flex">
                            <Image src={bookCover} style={{height:'130px', width:'130px'}} className="shadow" style={{transform: 'rotate(270deg)', height:'200px', width:'260px'}}/>
                            </div> */}
                            {/* <br/><br/><br/> */}
                            <p style={{color: '#000000', fontSize:'1.1em'}}>
                                <em>an old man, a young man, and life's greatest lesson...</em>
                            </p>

                            <p style={{color: '#000000', fontSize:'1.1em'}}>
                                Mitch Albom, is about to take the last and the greatest lesson of his life from his favorite
                                professor, Morrie Schwartz. After graduating from Brandeis University 20 years ago, Mitch gets 
                                a chance to reunite with his favorite university professor, just not in the way he imagined.
                            </p>

                            <p style={{color: '#000000', fontSize:'1.1em'}}>
                                Morrie is dying, getting weaker day by day. He is diagnosed with ALS(Amyotrophic Lateral Sclerosis),
                                the same disease <a href="https://en.wikipedia.org/wiki/Stephen_Hawking" style={{color:'blue'}}><u>Stephen Hawking</u></a> had.
                                He and his student sit together on tuesdays to talk about things a lot of people need clarity about:
                                death, fear, aging, greed, marriage, family, society, forgiveness, a meaningful life, regrets, money,
                                culture.
                            </p>
                            <p style={{color: '#000000', fontSize:'1.1em'}}>
                                A wonderful read!
                            </p>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </Styles>
        )
    }
}
export default Book8;
