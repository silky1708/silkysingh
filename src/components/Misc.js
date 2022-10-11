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
                    {/* align-items-center aligns vertically; justify-content-center places stuff horizontally */}
                    <div className="row no-gutters justify-content-center">
                    <div className="col-md-5 p-2" style={{paddingTop: '0px'}}>
                        {/* (under construction. You may find some of the links empty; figuring out how to collect & present information.) */}
                        <br/>
                        <IoMdSquare size={20} style={{color:'orange'}}/>: Tech, <IoMdSquare size={20} style={{color:'yellow'}}/>: Psychology, <IoMdSquare size={20} style={{color:'blue'}}/>: Thoughts/Collection
                        <br/><br/>
                        <ol>
                            <li className="links"><NavLink to="/silkysingh/misc/_1" style={{color:'#000000'}} activeStyle={{color:'#e2498a'}}><IoMdSquare size={20} style={{color:'orange'}}/><span style={{textDecoration:'underline'}}> git cheatsheet</span></NavLink></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_2" style={{color:'#000000'}} activeStyle={{color:'#e2498a'}}><IoMdSquare size={20} style={{color:'orange'}}/><span style={{textDecoration:'underline'}}> Linear Algebra basics for ML/DL</span></NavLink></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_3" style={{color:'#000000'}} activeStyle={{color:'#e2498a'}}><IoMdSquare size={20} style={{color:'orange'}}/><span style={{textDecoration:'underline'}}> Understanding Flask-based server</span></NavLink></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_4" style={{color:'#000000'}} activeStyle={{color:'#e2498a'}}><IoMdSquare size={20} style={{color:'yellow'}}/><span style={{textDecoration:'underline'}}> Eye witnesses are not always right!</span></NavLink></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_5" style={{color:'#000000'}} activeStyle={{color:'#e2498a'}}><IoMdSquare size={20} style={{color:'orange'}}/><span style={{textDecoration:'underline'}}> Softmax activation function</span></NavLink></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_6" style={{color:'#000000'}} activeStyle={{color:'#e2498a'}}><IoMdSquare size={20} style={{color:'yellow'}}/><span style={{textDecoration:'underline'}}> Serial Position Effect</span></NavLink></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_7" style={{color:'#000000'}} activeStyle={{color:'#e2498a'}}><IoMdSquare size={20} style={{color:'yellow'}}/><span style={{textDecoration:'underline'}}> Bystander apathy</span></NavLink></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_8" style={{color:'#000000'}} activeStyle={{color:'#e2498a'}}><IoMdSquare size={20} style={{color:'yellow'}}/><span style={{textDecoration:'underline'}}> Why do we want to be perfect?</span></NavLink></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_9" style={{color:'#000000'}} activeStyle={{color:'#e2498a'}}><IoMdSquare size={20} style={{color:'orange'}}/><span style={{textDecoration:'underline'}}> Markov Decision Processes</span></NavLink></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_10" style={{color:'#000000'}} activeStyle={{color:'#e2498a'}}><IoMdSquare size={20} style={{color:'orange'}}/><span style={{textDecoration:'underline'}}> Fano Plane</span></NavLink> </li>
                            <li className="links"><NavLink to="/silkysingh/misc/_11" style={{color:'#000000'}} activeStyle={{color:'#e2498a'}}><IoMdSquare size={20} style={{color:'orange'}}/><span style={{textDecoration:'underline'}}> My Courses at IITD</span></NavLink> </li>
                            <li className="links"><NavLink to="/silkysingh/misc/_12" style={{color:'#000000'}} activeStyle={{color:'#e2498a'}}><IoMdSquare size={20} style={{color:'blue'}}/><span style={{textDecoration:'underline'}}> Lessons Learnt being an undergrad</span></NavLink> </li>
                            <li className="links"><NavLink to="/silkysingh/misc/_13" style={{color:'#000000'}} activeStyle={{color:'#e2498a'}}><IoMdSquare size={20} style={{color:'blue'}}/><span style={{textDecoration:'underline'}}>  Ph.D: To do or not to do!</span></NavLink></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_14" style={{color:'#000000'}} activeStyle={{color:'#e2498a'}}><IoMdSquare size={20} style={{color:'blue'}}/><span style={{textDecoration:'underline'}}> What would happen when Earth dies?</span></NavLink> </li>
                            <li className="links"><NavLink to="/silkysingh/misc/_15" style={{color:'#000000'}} activeStyle={{color:'#e2498a'}}><IoMdSquare size={20} style={{color:'blue'}}/><span style={{textDecoration:'underline'}}> Summer Internships: My Experiences</span></NavLink> </li>
                            <li className="links"><NavLink to="/silkysingh/misc/_16" style={{color:'#000000'}} activeStyle={{color:'#e2498a'}}><IoMdSquare size={20} style={{color:'orange'}}/><span style={{textDecoration:'underline'}}> Computer Networks</span></NavLink> </li>
                            
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
                            <li>Crime and Punishment <em>by Fyodor Dostoyevsky</em></li>
                            <li>the picture of Dorian Gray <em>by Oscar Wilde</em></li>
                            <li>Outliers <em>by Malcom Gladwell</em></li>

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
                        <li className="links"><NavLink to="/silkysingh/misc/books/section_3/8" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>tuesdays with Morrie</NavLink> <em>by Mitch Albom</em></li>
                        
                        <li className="links"><NavLink to="/silkysingh/misc/books/section_3/8" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>The Silent Patient</NavLink> <em>by Alex Michaelides</em></li>
                        <li className="links"><NavLink to="/silkysingh/misc/books/section_3/8" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Love etc</NavLink> <em>by Julian Barnes</em></li>
                        <li className="links"><NavLink to="/silkysingh/misc/books/section_3/8" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Hullabaloo in the Guava Orchard</NavLink> <em>by Kiran Desai</em></li>
                        <li className="links"><NavLink to="/silkysingh/misc/books/section_3/8" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>38 Bahadurabad</NavLink> <em>by Zeeba Sadiq</em></li>
                        <li className="links"><NavLink to="/silkysingh/misc/books/section_3/8" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Moonwalking with Einstein</NavLink> <em>by Joshua Foer</em></li>
                        <li className="links"><NavLink to="/silkysingh/misc/books/section_3/8" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>The Mystery of the Blue Train</NavLink> <em>by Agatha Christie</em></li>
                        <li className="links"><NavLink to="/silkysingh/misc/books/section_3/8" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Alibaba</NavLink> <em>by Duncan Clark</em></li>
                        <li className="links"><NavLink to="/silkysingh/misc/books/section_3/8" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Range</NavLink> <em>by David Epstein</em></li>
                        <li className="links"><NavLink to="/silkysingh/misc/books/section_3/8" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Predictably Irrational</NavLink> <em>by Dan Ariely</em></li>
                        <li className="links"><NavLink to="/silkysingh/misc/books/section_3/8" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Norwegian Wood</NavLink> <em>by Haruki Murakami</em></li>
                        <li className="links"><NavLink to="/silkysingh/misc/books/section_3/8" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>So Good They Can't Ignore You</NavLink> <em>by Cal Newport</em></li>
                        <li className="links"><NavLink to="/silkysingh/misc/books/section_3/8" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Men without Women</NavLink> <em>by Haruki Murakami</em></li>
                        <li className="links"><NavLink to="/silkysingh/misc/books/section_3/8" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>The Great Gatsby</NavLink> <em>by F. Scott Fitzgerald</em></li>
                        
                        
                        
                        </ol>

                        
                    </div>
                    </div>
                </div>
                <Footer/>
            </Styles>
        )}}
export default Misc;