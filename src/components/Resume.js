import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import koala from '../images/koala.jpg';

const Styles = styled.div`
font-family: "Yusei Magic", sans-serif;
`;

class Resume extends React.Component{
    render(){
        return (
            <Styles>
                <Navbar/>
                <div className="p-2 mx-auto text-center">
                    <h3>Hang in there! Coming soon..</h3>
                </div>
                <div className="row no-gutters p-2">
                    <div className="col-md-5 p-2">
                    <Image src={koala} style={{height:'150', width:'200'}} className="shadow p-3 mb-5 bg-white rounded"/>
                    </div>
                    <div className="col-md-auto p-2">
                        
                    </div>
                </div>
                <Footer/>
            </Styles>
        )}}
export default Resume;