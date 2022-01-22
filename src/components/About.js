import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import mypic from '../images/about_me.png';

const Styles = styled.div`
font-family: "Yusei Magic", sans-serif;
`;

class About extends React.Component{
    render(){
        return (
            <Styles>
                <Navbar/>
                {/* <div className="p-2 m-2 pt-4 row no-gutters align-items-center justify-content-center"> */}
                    {/* <div className="col-md-9 d-flex align-items-center justify-content-center">
                        <h3>&nbsp;About Me</h3>
                    </div>
                    <div className="col-md-3 d-flex align-items-center justify-content-left">
                        <Image src={mypic} style={{height:'130px', width:'130px'}} className="shadow" roundedCircle/>
                    </div> */}
                {/* </div> */}
                <div className="row p-2 no-gutters">
                    <div className="col-md-4 d-flex justify-content-center pt-5">
                        <div className="pic">
                        <Image src={mypic} style={{height:'130px', width:'130px'}} className="shadow" roundedCircle/>
                        <br/>
                        Haridwar, 2019.
                        </div>
               
                    </div>
                    <div className="col-md-6 m-1 p-4">
                    {/* shadow bg-white rounded */}
                        <p><br/>
                        <h4>Who am I?</h4>
                        My name is Silky Singh. I'm a senior undergrad at the <a href="https://home.iitd.ac.in/" style={{color:'#e2498a'}}><u>Indian Institute of Technology Delhi</u></a>, 
                        doing my Bachelor's in Mathematics and Computing.
                        <br/><br/>
                        The picture on the left, is me trying to click a selfie on a mini roller-coaster ride when I was in Haridwar spending the mid-semester break.
                        <br/><br/>
                        <h4>What's the point of this website?</h4>
                        
                        It's good to have a place where I can put notes for myself:)
                        <br/><br/>
                        There are some things(a lot!) I'm curious about- life philosophy, human behavior, how to get famous?, how do large companies function? etc. 
                        I will try to put my thoughts on these in the Misc. section. Or randomly, anything from
                        my class notes I find interesting or took time for me to understand.
                        <br/><br/>
                        <h4>Reach Out</h4>
                        The best way to reach out to me is via email, I look at my emails at least once a day: <a href="mailto:silky1708@gmail.com" style={{color:'#e2498a'}}><u>silky1708@gmail.com</u></a>. I occasionally
                        open my <a href="https://www.linkedin.com/in/silky-singh-29578518b/" style={{color:'#e2498a'}}><u>LinkedIn</u></a> too.
                        
                        <br/><br/>
                        <h4>Some Facts About Me</h4>
                        <ol>
                        <li>My favorite color is Orange.</li>
                        <li>Born on a Thursday, August 17.</li>
                        {/* <li>My Nana sees more value in the Civil Services than my engineering degree.</li> */}
                        {/* <li>I try to follow the American English(since the words have lesser alphabets than the British English words).</li> */}
                        <li>In my free time, I like to read books(mostly fiction & thrillers; paperbacks preferable), get inspired
                            & work on this website or simply think.</li>
                        {/* <li>I am not on Instagram or Twitter, and I emptied my Facebook in 2020.</li> */}
                        </ol>
                        </p>

                        <br/><br/>
                        <h4>What I'm doing now?</h4>
                        I'm studying for my 8th semester, along with completing my Bachelor's Thesis Project. Sometimes, I come here to update the
                        Misc. section.
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <Footer/>
            </Styles>
        )
    }
}
export default About;
