import React from 'react';
import './App.css';
import Image from 'react-bootstrap/Image'
import mypic from './images/my_pic_3.png';
import {FaLinkedin} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import {FaGithub} from 'react-icons/fa';
import {FaHackerrank} from 'react-icons/fa';
import {BiCopyright} from 'react-icons/bi';
import VisitCount from './components/VisitCount';
// import {NavLink} from 'react-router-dom';


// import styled from styled-components;

// const Styles = styled.div`
//   .header{
//     background = black;
//     height = 50px;
//   }

// `;


function App() {
  return (
    <div className='outer-container'>
      <div className="header row no-gutters w-100" style={{height:'50px', backgroundColor:'black'}}>


      </div>
      <div className="row no-gutters justify-content-center text-center p-3 m-1">
        <h2>Hi there! I am Silky Singh.</h2>
      </div>
      <div className="row align-items-center no-gutters mid-section">
          <div className="col-md-4"></div>
          <div className="col-md-4 align-items-center text-center p-2">
            <Image src={mypic} roundedCircle />
          </div>
          <div className="col-md-4 ">
          </div>
      </div>
      <hr height='2px'/>
      <div className="row no-gutters p-2 current-section">
          <div className="education col-md-5 mx-auto">
              <h3>Education</h3><br/>
              <ul style={{color:'grey'}}>
                <li>B.Tech, Indian Institute of Technology Delhi</li>
                 Mathematics and Computing, 2018-present

              </ul>
              <ul style={{color:'grey'}}>
                <li>Higher Secondary, Central Academy</li>
                Grade- 94.2%
              </ul>
              <ul style={{color:'grey'}}>
                <li>High School, Deoria Senior Secondary School</li>
                GPA- 10.0/10.0
              </ul>
          </div>
          <div className="internships col-md-5 mx-auto">
              <h3>Internships</h3><br/>
              <ul style={{color:'grey'}}>
                <li>MateRate Education Pvt Ltd, New Delhi</li>
                 Frontend Developer, May 2020-July 2020
                  
              </ul>
              <ul style={{color:'grey'}}>
              <li> 
                    Upcoming Research Intern at Adobe Systems
                  </li>
                  Summer of 2021
              </ul>
              
          </div>
      </div>
      <hr height='2px'/>
      <div className="row no-gutters align-items-center justify-content-center p-2 footer" style={{marginTop:'auto'}}>
          <div className="col-md-auto p-1">
              <a href='https://www.linkedin.com/in/silky-singh-29578518b/' style={{textDecoration:'None', color: 'black', opacity:'1'}}><FaLinkedin size={20}/></a>
          </div>
          <div className="col-md-auto p-1">
          <a href='mailto:silky1708@gmail.com' style={{textDecoration:'None', color: 'black', opacity:'1'}} activeStyle={{color:'black', opacity:'0.8'}}><SiGmail size={20}/></a>
          </div>
          <div className="col-md-auto p-1">
          <a href='https://github.com/silky1708' style={{textDecoration:'None', color: 'black', opacity:'1'}} activeStyle={{color:'black', opacity:'0.8'}}><FaGithub size={20}/></a>
          </div>
          <div className="col-md-auto p-1">
          <a href='https://www.hackerrank.com/silky1708' style={{textDecoration:'None', color: 'black', opacity:'1'}} activeStyle={{color:'black', opacity:'0.8'}}><FaHackerrank size={20}/></a>
          </div>
      </div>

      <div className="row px-2 py-1 no-gutters justify-content-center align-items-center text-right" >
        <VisitCount/>
      </div>
      

      <div className="row no-gutters copyright p-3 mb-0" style={{background:'#DCDCDC', color:'black', marginTop:'50vh'}}>
      <BiCopyright size={15}/> Copyright 2021, Silky Singh. All rights reserved.
      </div>
      
     
            
    </div>
  ); 
}

export default App;
