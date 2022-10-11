import React from 'react';
import styled from 'styled-components';


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
                            <h2 className="" style={{color: '#000000', fontWeight:'bold'}}>My Courses at IITD</h2>
                            <br/>
                            <span style={{color:'blue', fontWeight:'bold'}}>Collection/</span>
                            <br/><br/>
                            <p style={{color: '#000000', fontSize:'1.1em'}}>
                               Compiling all the 
                               courses I've done during my undergrad at IITD.
                               {/* The following list will be incomplete until I graduate.  */}
                               
                               <br/><br/>
                               <h3 style={{fontWeight:'bold'}}>8th semester</h3>
                               <ul>
                                   <li>MTL782: Data Mining</li>
                                   <li>MTL730: Cryptography</li>
                                   <li>MTD421: Bachelor's Thesis Project</li>
                               </ul>

                               <br/><br/>
                               <h3 style={{fontWeight:'bold'}}>7th semester</h3>
                               <ul>
                                   <li>MTL783: Theory of Computation</li>
                                   <li>MTL146: Combinatorics</li>
                                   <li>MTL712: Computational Methods for Differential Equations</li>
                                   <li>MTL744: Mathematical Theory of Coding</li>
                                   <li>MTQ310: Seminar Course on Linear Algebra</li>
                                   <li>COD310: Mini Project</li>
                                   <li>MTD350: Mini Project</li>
                               </ul>

                               <br/><br/>
                               <h3 style={{fontWeight:'bold'}}>6th semester</h3>
                               <ul>
                                   <li>MTL458: Operating Systems</li>
                                   <li>HUL242: Intro. to Psychology</li>
                                   <li>MTL145: Number Theory</li>
                                   <li>MTL390: Statistical Methods</li>
                                   <li>MTL411: Functional Analysis</li>
                                   <li>MTL103: Optimization Methods & Applications</li>
                                   <li>ELP305: Design and System Laboratory</li>
                               </ul>

                               <br/><br/>
                               <h3 style={{fontWeight:'bold'}}>5th semester</h3>
                               <ul>
                                   <li>MTL105: Algebra</li>
                                   <li>ELL409: Machine Learning & Applications</li>
                                   <li>MTL342: Analysis & Design of Algorithms</li>
                                   <li>ELL305: Computer Architecture</li>
                                   <li>COL761: Data Mining</li>
                                   <li>HUL311: Applied Game Theory</li>
                                   <li>MTL107: Numerical Methods & Computation</li>
                                   <li>ESQ309: Seminar Course on Alternative Fuels for Transportation</li>
                               </ul>


                               <br/><br/>
                               <h3 style={{fontWeight:'bold'}}>4th semester</h3>
                               <ul>
                                   <li>MTL122: Real & Complex Analysis</li>
                                   <li>MTL106: Probability & Stochastic Processes</li>
                                   <li>MTP290: Computing Laboratory</li>
                                   <li>ELL201: Digital Electronics</li>
                                   <li>MTL102: Differential Equations</li>
                                   <li>CVL100: Environmental Science</li>
                                   <li>HUL211: Intro. to Economics</li>
                               </ul>

                               <br/><br/>
                               <h3 style={{fontWeight:'bold'}}>3rd semester</h3>
                               <ul>
                                   <li>HUL242: Fundamentals of Language Science</li>
                                   <li>COL106: Data Structures & Algorithms</li>
                                   <li>MTN101: Intro. to Mathematics & Computing</li>
                                   <li>PYL102: Principles of Electrical Materials</li>
                                   <li>MTL104: Linear Algebra & Applications</li>
                                   <li>SBL100: Intro. to Biology for Engineers</li>
                                   <li>MTL180: Discrete Mathematical Structures</li>
                               </ul>

                               <br/><br/>
                               <h3 style={{fontWeight:'bold'}}>2nd semester</h3>
                               <ul>
                                   <li>MTL101: Linear Algebra & Differential Equations</li>
                                   <li>CMP100: Chemistry Laboratory</li>
                                   <li>CML100: Intro. to Chemistry</li>
                                   <li>NEN101: Professional Ethics & Social Responsibility-2</li>
                                   <li>MCP101: Product Realization by Manufacturing</li>
                                   <li>MCP100: Engineering Visualization & Communication</li>
                                   <li>NLN101: Language & Writing Skills-2</li>
                                   <li>APL100: Engineering Mechanics</li>
                               </ul>


                               <br/><br/>
                               <h3 style={{fontWeight:'bold'}}>1st semester</h3>
                               <ul>
                                   <li>COL100: Intro. to Computer Science</li>
                                   <li>PYL100: Electromagnetic Waves & Quantum Mechanics</li>
                                   <li>NIN100: Intro. to Engineering</li>
                                   <li>ELL100: Intro. to Electrical Engineering</li>
                                   <li>PYP100: Physics Laboratory</li>
                                   <li>MTL100: Calculus</li>
                                   <li>NLN100: Language & Writing Skills-1</li>
                                   <li>NEN100: Professional Ethics & Social Responsibility-1</li>
                               </ul>



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