import React from 'react'
import {NavLink} from 'react-router-dom';
import {FaHome} from 'react-icons/fa';
import styled from 'styled-components';

const Styles = styled.div`
  font-family: "Yusei Magic", sans-serif; 
  .header {
    display: flex;
    position: sticky;
    top: 0;
    // left: 0;
    // // z-index: 2;
    // background-color: transparent;

  }
  .navbar:hover{
    color: #e2498a !important;
    opacity: 0.93 !important;
    transition: .2s !important;
  }

`;

class Navbar extends React.Component{
    render(){
        return (
            <Styles>
            <div className="parent">
              <div className="header row no-gutters w-100 align-items-center" style={{height:'50px', backgroundColor:'black'}}>
                  <div className="col-md-7 text-left pt-2 pl-2" style={{color:'white'}}></div>
                  <NavLink className="navbar" exact to="/silkysingh/" style={{color:'white', textDecoration: 'none'}} activeStyle={{color:'#e2498a',fontWeight:'bold'}}>
                    <FaHome size={20}/>
                  </NavLink>
                  <NavLink to="/silkysingh/about" style={{color:'white', textDecoration: 'none'}} activeStyle={{color:'#e2498a',fontWeight:'bold'}}>
                    <div className="navbar col-md-1 text-center">About</div>
                  </NavLink>

                  <NavLink to="/silkysingh/projects" style={{color:'white',textDecoration: 'none'}} activeStyle={{color:'#e2498a',fontWeight:'bold'}}>
                    <div className="navbar col-md-1 text-center">Projects</div>
                  </NavLink>
                  
                  {/* <a href="https://drive.google.com/file/d/1H5-jF4THJVzlFT-216PEFm72EC8hg9IJ/view?usp=sharing" style={{color:'white',textDecoration: 'none'}}>
                    <div className="navbar col-md-1 text-center">Resumé</div>
                  </a> */}
                  <NavLink to="/silkysingh/misc" style={{color:'white',textDecoration: 'none'}} activeStyle={{color:'#e2498a',fontWeight:'bold'}}>
                    <div className="navbar col-md-1 text-center">Misc.</div>
                  </NavLink>
                  {/* <NavLink to="/silkysingh/blog" style={{color:'white',textDecoration: 'none'}} activeStyle={{color:'#e2498a',fontWeight:'bold'}}>
                    <div className="navbar col-md-1 text-center">Blog</div>
                  </NavLink> */}

                  

              </div>
            </div>
            </Styles>
        )}}
export default Navbar;