import React from 'react';
import styled from 'styled-components';
import Footer from './Footer.js';
import Navbar from './Navbar.js';


const Styles = styled.div`

font-family: "Yusei Magic", sans-serif;

// .georgia{
//      font-family: "Yusei Magic", sans-serif;
// }

// li{
//     color: #9b111e;
// }
`;


class Projects extends React.Component{
    render(){
        return (
            <Styles>
                <Navbar/>
                <div className="container-fluid p-2">
                <div className="row no-gutters justify-content-center align-items-center">
                        <div className="col-md-2"></div>
                        <div className="col-md-7 my-2">
                            <br/>
                            <em>"Research is formalized curiosity. It is poking and prying with a purpose." - Zora N. Hurston</em><br/>
                            <em>"What I cannot create, I do not understand." - R. Feynman</em>
                            
                            <br/>
                            <br/>
                            <ul>
                                <li>
                                    <div className="row no-gutters w-100 d-flex align-items-center">
                                        <div className="pro-name col-sm-9 text-left">
                                            <span className="georgia" style={{color:'#9b111e'}}>
                                            <em><h4><u>Adversarial Testing of Deep Neural Networks</u></h4>
                                            with <a href="https://subodhvsharma.github.io" style={{color:"#9b111e"}}><u>Prof. Subodh Sharma</u></a>, IIT Delhi
                                            </em>
                                            </span>
                                            <br/>
                                            <br/>
                                            - Part of MTD350 Mini Project
                                        </div>
                                        <div className="pro-dates col-sm-3 text-right">
                                            <bold><h5>Aug 2021<br/> -Jan 2022</h5></bold>
                                        </div>
                                    </div>
                                </li>
                                <br/>
                                <br/>

                                <li>
                                    <div className="row no-gutters w-100 d-flex align-items-center">
                                        <div className="pro-name col-sm-9 text-left">
                                            <span className="georgia" style={{color:'#9b111e'}}>
                                            <em><h4><u>Image Editing</u></h4>
                                            (as a part of my internship at Adobe Research)
                                            </em>
                                            </span>
                                            <br/>
                                            <br/>
                                            - Mentors: <a href="https://kuldeepkulkarni.github.io" style={{color:'#9b111e'}}><u>Kuldeep Kulkarni</u></a>, Aniruddha Mahapatra
                                            <br/>
                                            - Continued as COD310 Mini Project
                                        </div>
                                        <div className="pro-dates col-sm-3 text-right">
                                            <bold><h5>May 2021<br/> -Aug 2021</h5></bold>
                                            <bold><h5>Aug 2021<br/> -Dec 2021</h5></bold>
                                        </div>
                                    </div>
                                </li>
                                <br/>
                                <br/>

                                <li>
                                    <div className="row no-gutters w-100 d-flex align-items-center">
                                        <div className="pro-name col-sm-8 text-left">
                                            <span className="georgia" style={{color:'#9b111e'}}><em>
                                            <h4><u>Enumerative synthesis of floating-point & real-valued programs</u></h4>
                                            (as a part of my internship at MPI-SWS)
                                            </em>
                                            </span>
                                            <br/>
                                            <br/>
                                            - There is simply no program synthesis tool for generating floating-point programs based on certain semantic constraints, which is also a highlight of this project.
                                            <br/>
                                            - Worked extensively with Scala, SMT solvers(z3, cvc4) and parsing tools(Antlr) to synthesize & verify programs.
                                            <br/>
                                            - Prior work: Bester(Best-Effort Synthesis), ECOOP 2020

                                        </div>
                                        <div className="pro-dates col-sm-4 text-right">
                                            <bold><h5>Jan 2021<br/> -Apr 2021</h5></bold>
                                        </div>
                                    </div>
                                </li>
                                <br/>
                                <br/>

                                <li>
                                    <div className="row no-gutters w-100 d-flex align-items-center">
                                        <div className="pro-name col-sm-9 text-left">
                                            <span className="georgia" style={{color:'#9b111e'}}><em>
                                            <h4><u>Front-end development using ReactJS</u></h4>
                                            (as a part of my internship at MateRate Education Pvt. Ltd.)
                                            </em>
                                            </span>
                                            <br/>
                                            <br/>
                                            - Was part of the web development team.
                                            <br/>
                                            - Extensively worked with the ReactJS framework, Bootstrap5, JavaScript to build the front-end for Math-MateRate
                                            <br/>
                                            - Also experimented with animations, various react modules(such as for graphical representations) and
                                            made the webpages responsive.
                                        </div>
                                        <div className="pro-dates col-sm-3 text-right">
                                            <bold><h5>May 2020<br/> -July 2020</h5></bold>
                                        </div>
                                    </div>
                                </li>
                                <br/>
                                <br/>

                                <li>
                                    <div className="row no-gutters w-100 d-flex align-items-center">
                                        <div className="pro-name col-sm-9 text-left">
                                            <span className="georgia" style={{color:'#9b111e'}}>
                                            <em><h4><u>Algorithms & Graphs</u></h4>
                                            with <a href="https://web.iitd.ac.in/~minati/" style={{color:"#9b111e"}}><u>Prof. Minati De</u></a>, IIT Delhi
                                            </em>
                                            </span>
                                            <br/>
                                            <br/>
                                            - Problem statement: "Given a region with <em>n</em> points, find a maximum area staircase polygon containing at most <em>k</em> points"
                                            <br/>
                                            - Devised a step-by-step algorithm to find such a staircase polygon
                                            <br/>
                                            - Future Work: To improve the space and time complexity of the proposed algorithm


                                        </div>
                                        <div className="pro-dates col-sm-3 text-right">
                                            <bold><h5>Dec 2019<br/> -Mar 2020</h5></bold>
                                        </div>
                                    </div>
                                </li>

                                
                            </ul>

                            <br/>
                            <br/>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>

                <Footer/>
            </Styles>
        )
    }
}

export default Projects ;