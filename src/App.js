import React from 'react';
import './App.css';
import Image from 'react-bootstrap/Image'
import mypic from './images/my_pic_3.png';
import {FaLinkedin} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import {FaGithub} from 'react-icons/fa';
import {FaHackerrank} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';


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
      <div className="container text-center p-3 m-1">
        <h2 style={{}}>Hi there! I am Silky Singh.</h2>
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
                <br/> Mathematics and Computing, 2018-present

              </ul>
          </div>
      </div>
      <hr height='2px'/>
      <div className="row no-gutters align-items-center justify-content-center p-2 footer">
          <div className="col-md-auto p-1">
              <NavLink to='https://www.linkedin.com/in/silky-singh-29578518b/' style={{textDecoration:'None', color: 'black', opacity:'1'}} activeStyle={{color:'black', opacity:'0.8'}}><FaLinkedin style={{size:'10'}}/></NavLink>
          </div>
          <div className="col-md-auto p-1">
          <NavLink to='mailto:silky1708@gmail.com' style={{textDecoration:'None', color: 'black', opacity:'1'}} activeStyle={{color:'black', opacity:'0.8'}}><SiGmail/></NavLink>
          </div>
          <div className="col-md-auto p-1">
          <NavLink to='https://github.com/silky1708' style={{textDecoration:'None', color: 'black', opacity:'1'}} activeStyle={{color:'black', opacity:'0.8'}}><FaGithub/></NavLink>
          </div>
          <div className="col-md-auto p-1">
          <NavLink to='https://www.hackerrank.com/silky1708' style={{textDecoration:'None', color: 'black', opacity:'1'}} activeStyle={{color:'black', opacity:'0.8'}}><FaHackerrank/></NavLink>
          </div>
      </div>
      <div className="row copyright p-3 mb-0" style={{background:'grey', color:'black'}}>
         &#169; Copyright 2021, Silky Singh. All rights reserved.
      </div>
    </div>
  ); 
}

export default App;
