import React from 'react';
import styled from 'styled-components';
// import Codeblock from '../components/Codeblock.js';

const Styles = styled.div`
font-family: "Georgia", sans-serif;
`;

class Page6 extends React.Component{
    render(){
        return (
            <Styles>
                <div className="container-fluid p-2">
                <div className="row no-gutters justify-content-center align-items-center">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 my-2">
                            <h2 className="p-1" style={{color: '#000000', backgroundColor:'yellow'}}>Serial Position Effect</h2>
                            <br/>
                            <span style={{color:'blue', fontWeight:'bold'}}>Psych./</span>
                            <br/><br/>
                            <p style={{color: '#000000', fontSize:'1.1em'}}>
                                It is a theory in the psychology of memory pertaining to how we store 
                                sequential information. Before diving deep, we have three stages of memory processing:
                                the Sensory memory(storing info for few instants), the Short Term Memory(STM) stores
                                info for about 15-25s if it passes through the Sensory memory, and finally the Long Term Memory(LTM)
                                that can store info for lifetime.

                                <br/>
                                <br/>
                                Now, the tendency of a person to remember the beginning & the end of a
                                sequential information and to forget the middle information in the sequence is what
                                is known as Serial Position Effect. We remember the beginning of a sequence due to
                                extensive processing done by our brain: the information has passed from sensory memory
                                to LTM(primacy effect), and the end of a sequence is still in the STM and can be recalled
                                (recency effect) when asked.

                            </p>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </Styles>
        )
    }
}
export default Page6;