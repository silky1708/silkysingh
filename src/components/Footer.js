import React from 'react'
import {BiCopyright} from 'react-icons/bi';
import styled from 'styled-components';

const Styles = styled.div`
font-family: "Yusei Magic", sans-serif;
`;

class Footer extends React.Component{
    render(){
        return (
            <Styles>
            <div className="row no-gutters copyright p-3" style={{background:'#DCDCDC', color:'black', marginTop:'20vh'}}>
                <BiCopyright size={15}/> <div className="">Copyright 2022, Silky Singh. All rights reserved.</div>
                <div className="ml-auto"><span style={{color:'gray', fontSize:'14px'}}>Last updated: Nov 2022</span></div>
            </div>
            </Styles>
        )}}
export default Footer;