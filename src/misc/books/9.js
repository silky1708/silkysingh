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
                                A man is found dead, and his wife refuses to speak about the night her 
                                husband was shot. She is admitted to a psychiatry centre.

                                <br/><br/>
                                6 years pass by, a psychologist starts taking special interest in the case.
                                He is adamant to get her to speak and is quite confident about it. 
                                He starts visiting her at the centre, and her family members. Slowly, she starts
                                to open up to him, shares her diary with him too. Will she ever confess?
                                
                                <br/><br/>
                                <em>SPOILERS!</em><br/><br/>
                                Turns out the psychologist himself was involved in the case. The night her husband died,
                                the psychologist was there already when she reached home, finding her husband tied to
                                a chair. The psychologist reached their home following the patient's husband, who his
                                wife was cheating him with. 

                                With the sense of betrayal he felt, he asked the husband if he loved his wife. By then,
                                she was home and listening to all the conversation. The psychologist handed the gun to 
                                her, and left the place...




                                
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