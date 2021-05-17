import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styled from 'styled-components';

const Styles = styled.div`
font-family: "Yusei Magic", sans-serif;
`;

class About extends React.Component{
    render(){
        return (
            <Styles>
                <Navbar/>
                <span className="p-2 m-2"><h3>&nbsp; About Me</h3></span>
                <div className="row p-2 no-gutters">
                    <div className="m-2 shadow p-3 mb-5 bg-white rounded">
                        <p><br/>
                        My name is Silky Singh. I'm currently a junior undergrad at <a href="https://home.iitd.ac.in/" style={{color:'#e2498a'}}><u>IIT Delhi</u></a>, 
                        pursuing a major in Mathematics and Computing. 
                        <br/><br/>
                        Now, how did this website(or webapp or whatever) took shape? Thanks to Covid-19, I was tinkering with web designs {'&'} front-end development
                        (that's how I got that summer's front-end development internship). I like building things from scratch so that I know every 
                        nook and corner of it. It's also good to have a place where I can put notes for myself:)
                        There are some things I'm curious about, I will try to put them in the Misc. section. Or randomly, anything from
                        my class notes I find interesting or took time for me to understand.

                        <br/><br/>
                        I believe that explaining things to people can further consolidate the concept. With
                        that purpose in mind, let's see how the blog shapes up!
                        
                        <br/>
                        </p>
                    </div>
                </div>
                <Footer/>
            </Styles>
        )
    }
}
export default About;
