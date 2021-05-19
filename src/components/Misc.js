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
                        </ol>
                    </div>
                    <div className="col-md-5 p-2">
                        
                    </div>
                    </div>
                </div>
                <Footer/>
            </Styles>
        )}}
export default Misc;