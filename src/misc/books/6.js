import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image'
import bookCover from '../../images/theinimitablejeeves.png';

const Styles = styled.div`
font-family: "Georgia", sans-serif;
// background-color: #ffdeb2;
`;

class Book6 extends React.Component{
    render(){
        return (
            <Styles>
                <div className="container-fluid p-2">
                <div className="row no-gutters justify-content-center align-items-center">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h2 className="py-2" style={{}}>Surely You're Joking, Mr. Feynman</h2>
                            <br/>
                            <span style={{color:'blue', fontWeight:'bold'}}><em>Dec 2021</em></span>
                            <br/><br/>

                
                            <p>
                               Richard P. Feynman, one of the greatest physicists of all time. It was enlightening to
                               read about his life in this much detail..
                            </p>

                            <p>
                                One of the most entertaining incidents was when Feynman used to pick locks of his
                                colleagues. Sometimes he got lucky enough to open other people's safes within 5 
                                minutes, forcing others to prohibit him from coming near their safes.
                            </p>

                            <p>
                                Another amusing incident described is that of communication between Feynman and his 
                                wife, when he was working on the Manhattan Project during the World War II. All the letters sent and
                                received went through checks to make sure there was no leakage. Feynman and his wife
                                ended up developing their own secret language to communicate through the letters, while
                                the contents seemed ordinary to the guards.
                            </p>

                            <p>
                                It is just crazy how the people he mentioned could do mental math so quickly those days, 
                                and he himself learned them later on.
                                There are some very cool tricks(given in the book) you can use to impress people with your
                                 math prowess! :)
                            </p>

                            <p>
                                I really liked the way the book is written. It's like Feynman himself is commenting on his life story
                                in each of the chapters. It is a very, very interesting book.
                            </p>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </Styles>
        )
    }
}
export default Book6;