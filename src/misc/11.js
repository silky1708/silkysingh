import React from 'react';
import styled from 'styled-components';
// import Codeblock from '../components/Codeblock.js';
import fano_img from '../images/fano.png';

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
                            <h2 className="p-1" style={{color: '#000000', backgroundColor:'#87ceeb'}}>Fano Plane</h2>
                            <br/>
                            <span style={{color:'blue', fontWeight:'bold'}}>Math/</span>
                            <br/><br/>
                            <p style={{color: '#000000', fontSize:'1.1em'}}>
                                Fano Plane is the smallest Finite Projective Plane(FPP) with 7 "points" and 7 "lines". 
                                Note that these "lines" are not the same as Euclidean lines that we know- a straight
                                line stretching to infinity on both the sides. Imagine a circle inscribed inside a triangle, take 
                                3 points where the circle touches the triangle, another 3 points being the vertices of
                                the triangle, and finally the center of the inscribed circle makes up the 7th point.
                                Interestingly, in Fano plane, the outline of the circle is also considered a line.
                                <br/>
                                <br/>
                                There are some interesting properties of the Fano plane: exactly 3 points lie on each line, and 
                                exactly 3 lines pass through each point. In a general FPP of order <em>n</em>, there are 
                                always <em>(n+1)</em> lines passing through each point, and exactly <em>(n+1)</em> points lie on
                                each line.
                                <br/>
                                <br/>

                            </p>
                            <div className="mx-auto text-center align-items-center">
                                <img src={fano_img} style={{width:'200px', height:'200px'}}/>
                                <br/>
                                <b>Fig:</b> Fano Plane(Source: wiki)
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </Styles>
        )
    }
}
export default Page11;