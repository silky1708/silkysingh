import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
// import Image from 'react-bootstrap/Image';
// import koala from '../images/koala.jpg';
import {NavLink} from 'react-router-dom';

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
                <div className="container-fluid p-1">
                    <div className="row no-gutters justify-content-center align-items-center">
                    <div className="col-md-5 p-2">
                        <ol>
                            <li className="links"><NavLink to="/silkysingh/misc/_1" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>git cheatsheet</NavLink></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_2" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Linear Algebra basics for ML/DL</NavLink></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_3" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Understanding Flask-based server</NavLink></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_4" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Eye witnesses are not always right!</NavLink></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_5" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Softmax activation function</NavLink></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_6" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Serial Position Effect</NavLink></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_7" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Understanding Flask</NavLink></li>
                            <li className="links"><NavLink to="/silkysingh/misc/_8" style={{textDecoration:'underline', color:'#000000'}} activeStyle={{color:'#e2498a'}}>Why do we want to be perfect?</NavLink></li>
                            
                            
                        
                        </ol>
                    </div>
                    <div className="col-md-5 p-2">
                        <br/>
                        

                        
                    </div>
                    </div>
                </div>
                <Footer/>
            </Styles>
        )}}
export default Misc;