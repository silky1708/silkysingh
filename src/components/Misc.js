import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
// import Image from 'react-bootstrap/Image';
// import koala from '../images/koala.jpg';
import {NavLink} from 'react-router-dom';
import {IoMdSquare} from 'react-icons/io';
import {ImBooks} from 'react-icons/im';
// import {IoBookSharpAlt} from 'react-icons/io';

const Styles = styled.div`
font-family: "Yusei Magic", sans-serif;

.links:hover{
    opacity: 0.94 !important;
    transition: .2s !important;
}
`;

class Misc extends React.Component{
    render(){
        return (
            <Styles>
                <Navbar/>
                <div className="container-fluid">
                    <div className="row no-gutters justify-content-center align-items-center">
                        
                    <div className="col-md-5 p-2">
                        (under construction. You may find some of the links empty; figuring out how to present & collect information.)
                        <br/><br/>
                        

                        <ol>
                            <li className="links"><NavLink to="/silkysingh/misc/_1" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>git cheatsheet</NavLink>&nbsp;<IoMdSquare size={20} style={{color:'orange'}}/></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_2" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Linear Algebra basics for ML/DL</NavLink></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_3" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Understanding Flask-based server</NavLink></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_4" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Eye witnesses are not always right!</NavLink>&nbsp;<IoMdSquare size={20} style={{color:'yellow'}}/></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_5" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Softmax activation function</NavLink></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_6" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Serial Position Effect</NavLink>&nbsp;<IoMdSquare size={20} style={{color:'yellow'}}/></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_7" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Bystander apathy</NavLink>&nbsp;<IoMdSquare size={20} style={{color:'yellow'}}/></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_8" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Why do we want to be perfect?</NavLink>&nbsp;<IoMdSquare size={20} style={{color:'yellow'}}/></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_9" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Markov Decision Processes</NavLink>&nbsp;<IoMdSquare size={20} style={{color:'orange'}}/></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_10" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Fano Plane</NavLink>&nbsp;<IoMdSquare size={20} style={{color:'orange'}}/> </li>
                            <li className="links"><NavLink to="/silkysingh/misc/_11" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>My Courses at IITD</NavLink>&nbsp;<IoMdSquare size={20} style={{color:'orange'}}/> </li>
                            {/* <li className="links"><NavLink to="/silkysingh/misc/_12" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Lessons Learnt being an undergrad</NavLink>&nbsp;<IoMdSquare size={20} style={{color:'blue'}}/> </li> */}
                            <li className="links"><NavLink to="/silkysingh/misc/_13" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Ph.D: To do or not to do!</NavLink>&nbsp;<IoMdSquare size={20} style={{color:'blue'}}/> </li>
                            <li className="links"><NavLink to="/silkysingh/misc/_14" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>What would happen when Earth dies?</NavLink>&nbsp;<IoMdSquare size={20} style={{color:'blue'}}/> </li>
                            <li className="links"><NavLink to="/silkysingh/misc/_15" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Summer Internships: My Experiences</NavLink>&nbsp;<IoMdSquare size={20} style={{color:'blue'}}/> </li>
                            <li className="links"><NavLink to="/silkysingh/misc/_16" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Computer Networks</NavLink>&nbsp;<IoMdSquare size={20} style={{color:'orange'}}/> </li>
                            
                        </ol>
                    </div>
                    <div className="col-md-5 p-2">
                        <br/>
                        {/* <u style={{color:'#d80000'}}><h3 style={{color:'#d80000'}}>| My Bookshelf |</h3></u><br/> */}
                        {/* <h4>Currently Reading</h4><br/>
                        <ol>
                            <li>...</li>
                        </ol>
                        <br/> */}
                        <h4>Currently Reading <ImBooks style={{color:'red'}}/></h4><br/>
                        <ol>
                            <li>Ikigai <em>by Yukari Mitsuhashi</em></li>
                        </ol>
                        <br/>
                        <h4>Read & Enjoyed <ImBooks style={{color:'green'}}/></h4><br/>
                        <ol>
                        <li className="links"><NavLink to="/silkysingh/misc/books/section_3/5" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>The Inimitable Jeeves</NavLink> <em>by P. G. Wodehouse</em></li>
                        <li className="links"><NavLink to="/silkysingh/misc/books/section_3/1" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Murder on the Orient Express</NavLink> <em>by Agatha Christie</em></li>
                        <li className="links"><NavLink to="/silkysingh/misc/books/section_3/2" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>And Then There Were None</NavLink> <em>by Agatha Christie</em></li>
                        <li className="links"><NavLink to="/silkysingh/misc/books/section_3/3" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Origin</NavLink> <em>by Dan Brown</em></li>
                        <li className="links"><NavLink to="/silkysingh/misc/books/section_3/4" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>The Girl on the Train</NavLink> <em>by Paula Hawkins</em></li>
                        <li className="links"><NavLink to="/silkysingh/misc/books/section_3/6" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Surely You're Joking, Mr. Feynman</NavLink> <em>by Richard P. Feynman</em></li>
                        <li className="links"><NavLink to="/silkysingh/misc/books/section_3/7" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>The Psychology of Money</NavLink> <em>by Morgan Housel</em></li>
                        
                        </ol>

                        
                    </div>
                    </div>
                </div>
                <Footer/>
            </Styles>
        )}}
export default Misc;