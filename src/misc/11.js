import React from 'react';
import styled from 'styled-components';
// import Codeblock from '../components/Codeblock.js';

const Styles = styled.div`
font-family: "Georgia", sans-serif;
`;

class Page11 extends React.Component{
    render(){
        return (
            <Styles>
                <div className="container-fluid p-2">
                <div className="row no-gutters justify-content-center align-items-center">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 my-2">
                            <h2 className="p-1" style={{color: '#000000', backgroundColor:'#87ceeb'}}>And Then There Were None</h2>
                            <br/>
                            <span style={{color:'blue', fontWeight:'bold'}}>Book Reviews./</span>
                            <br/><br/>
                            <p style={{color: '#000000', fontSize:'1.1em'}}>
                                I recently finished reading the Agatha Christie's masterpiece "And Then There Were None".
                                Well, it was mind blowing.. Ten people are baited to come to a rumored island. None of them 
                                know the owners of the house, in fact none have seen them(Mr. & Mrs. Owen, do they even exist?).
                                Each have a guilty conscience, they were part of someone's murder directly/indirectly knowingly/unknowingly. The 
                                owner(s) of the house have planned to murder them one by one following an ominous poem painted in
                                each of the guest's room. I'll leave you with this, one of them is the killer: who could it be?
                            </p>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </Styles>
        )
    }
}
export default Page11;