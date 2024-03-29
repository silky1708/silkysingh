import React from 'react';
import './Home.css';
import News from './components/News.js';
import Image from 'react-bootstrap/Image'
import mypic from './images/silky_18.png';
import {FaLinkedin} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import {FaGithub} from 'react-icons/fa';
import {FaHackerrank} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {SiLeetcode} from 'react-icons/si';
// import {SiDevpost} from 'react-icons/si';
// import VisitCount from './components/VisitCount';
import styled from 'styled-components';
// import {NavLink} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const Styles = styled.div`
  .linkedin:hover {
    color: #0072b1;
  }

  .gmail:hover {
    color: #c71610;
  }

  .youtube:hover {
    color: #c71610;
  }

  .hackerrank:hover {
    color: #4dc247;
  }

  .github:hover {
    color: #211f1f;
  }

  .leetcode:hover {
    color: #ffbf00;
  }

  .devpost:hover {
    color: #00003f;
  }
`;


function App() {
  return (
    <div className='outer-container'>
      <Styles>
      <Navbar/>
      <div className="container-fluid">
        <div className="row no-gutters justify-content-center text-center p-1 m-1">
          <h2>Hi there! I am Silky Singh.</h2>
        </div>
        <div className="row no-gutters align-items-center justify-content-center p-1 footer" style={{marginTop:'auto'}}>
            <div className="col-sm-auto secondary-color">Find me here: &nbsp; </div>
            <div className="col-sm-auto d-flex ">
              <div className="px-1">
                <a href='https://www.linkedin.com/in/silky1708/' style={{textDecoration:'None', color: '#e2498a', opacity:'1'}}><FaLinkedin size={20} className="linkedin"/></a>
              </div>
              <div className="px-1">
              <a href='mailto:silky1708@gmail.com' style={{textDecoration:'None', color: '#e2498a', opacity:'1'}} activeStyle={{color:'black', opacity:'0.8'}}><SiGmail size={20} className="gmail"/></a>
              </div>
              <div className="px-1">
              <a href='https://github.com/silky1708' style={{textDecoration:'None', color: '#e2498a', opacity:'1'}} activeStyle={{color:'black', opacity:'0.8'}}><FaGithub size={20} className="github"/></a>
              </div>
              <div className="px-1">
              <a href='https://www.hackerrank.com/silky1708' style={{textDecoration:'None', color: '#e2498a', opacity:'1'}} activeStyle={{color:'black', opacity:'0.8'}}><FaHackerrank size={20} className="hackerrank"/></a>
              </div>
              <div className="px-1">
                <a href="https://leetcode.com/silky1708/" style={{textDecoration:'None', color: '#e2498a', opacity:'1'}}><SiLeetcode size={20} className="leetcode"/></a>
              </div>
              {/* <div className='px-1'>
                <a href='https://devpost.com/silky1708?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav' style={{textDecoration:'None', color: '#e2498a', opacity:'1'}}><SiDevpost size={20} className="devpost"/></a>
              </div> */}
              <div className="px-1">
                <a href='https://www.youtube.com/channel/UCZ9VXq-hlbZHVVbdXlddJ_g' style={{textDecoration:'None', color: '#e2498a', opacity:'1'}} activeStyle={{color:'black', opacity:'0.8'}}><FaYoutube size={20} className="youtube"/></a>
              </div>


            </div>
        </div>
        <div className="row align-items-center p-1 mt-2 no-gutters mid-section">
          <div className="col-md-1"></div>
            <div className="col-md-4 align-items-center text-center p-2"><Image src={mypic} className="shadow p-3 mb-2 bg-white rounded"/>
            <br/>
            New Delhi, 2019.
            </div>
            <div className="col-md-5 p-1 align-items-center text-center p-2">
              <News/>
            </div>
            <div className="col-md-1"></div>
            
        </div>
      </div>
      {/* <div className="row px-2 py-1 no-gutters justify-content-center align-items-center text-right" >
        <VisitCount/>
      </div> */}
     
      <Footer/>
      </Styles>      
    </div>
  ); 
}

export default App;
