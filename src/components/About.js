import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image'
import mypic from '../images/about_me.png';

const Styles = styled.div`
font-family: "Yusei Magic", sans-serif;
`;

class About extends React.Component{
    render(){
        return (
            <Styles>
                <Navbar/>
                <div className="p-2 m-2 pt-4 row no-gutters align-items-center justify-content-center">
                    {/* <div className="col-md-9 d-flex align-items-center justify-content-center">
                        <h3>&nbsp;About Me</h3>
                    </div>
                    <div className="col-md-3 d-flex align-items-center justify-content-left">
                        <Image src={mypic} style={{height:'130px', width:'130px'}} className="shadow" roundedCircle/>
                    </div> */}
                     </div>
                <div className="row p-2 no-gutters">
                    <div className="col-md-4 d-flex justify-content-center pt-5">
                        <Image src={mypic} style={{height:'130px', width:'130px'}} className="shadow" roundedCircle/>
               
                    </div>
                    <div className="col-md-6 m-1 p-4">
                    {/* shadow bg-white rounded */}
                        <p><br/>
                        My name is Silky Singh. I'm currently a junior undergrad at <a href="https://home.iitd.ac.in/" style={{color:'#e2498a'}}><u>IIT Delhi</u></a>, 
                        pursuing a major in Mathematics and Computing. 
                        <br/><br/>
                        Now, how did this website take shape? Thanks to Covid-19, I was tinkering with web designs {'&'} front-end development.
                        I realized this is somewhere I can put my imagination to work. Also, I like building things from scratch so that I know every nook and corner of it.
                        It's also good to have a place where I can put notes for myself:)
                        <br/><br/>
                        There are some things I'm curious about, I will try to put them in the Misc. section. Or randomly, anything from
                        my class notes I find interesting or took time for me to understand. Caution: Please note that these will be mostly based on my
                        own taste or style so take these with a pinch of salt.

                        <br/><br/>
                        I'll use the blog section to share some experiences or simply explain a concept in detail(unlike Misc.). With
                        this purpose in mind, let's see how the blog shapes up! If you find any bugs or have any suggestion, do drop
                        me an email: <a href="mailto:silky1708@gmail.com" style={{color:'#e2498a'}}><u>silky1708@gmail.com</u></a>
                        
                        <br/>
                        </p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <Footer/>
            </Styles>
        )
    }
}
export default About;
