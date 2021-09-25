import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image'
import bookCover from '../../images/theinimitablejeeves.png';

const Styles = styled.div`
font-family: "Georgia", sans-serif;
background-color: #ffdeb2;
`;

class Book5 extends React.Component{
    render(){
        return (
            <Styles>
                <div className="container-fluid p-2">
                <div className="row no-gutters justify-content-center align-items-center">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h2 className="p-2" style={{color: '#ffffff', backgroundColor:'#000000'}}>The Inimitable Jeeves</h2>
                            <br/>
                            <span style={{color:'blue', fontWeight:'bold'}}><em>Sep. 2021</em></span>
                            <br/><br/>

                            <div className="text-center justify-content-center d-flex">
                            <Image src={bookCover} style={{height:'130px', width:'130px'}} className="shadow" style={{ height:'260px', width:'210px'}}/>
                            </div>

                            <br/><br/>
                            <p style={{color: '#000000', fontSize:'1.1em'}}>
                                An extremely funny collection of short stories by Wodehouse! The novel has been 
                                written in first person, narrated by Mr. Bertie Wooster, also known to be a looney among his relatives. 
                                He is an idle-rich living in London with nothing much to do except to solve problems of his pal, Mr. Little aka Bingo
                                and bet on horse races(loses every time).

                                <br/><br/>
                                He thinks highly of Jeeves, a young lad and his valet. Jeeves prepares his food, keeps his  
                                house clean and most importantly, has a solution for all his problems.

                                <br/><br/>
                                Not to mention Wooster's Aunt Agatha, who is the source of most of his problems. 
                                Needless to say, Wooster avoids meeting her. But if he is called upon, he knows he has to be
                                there even if it's the end of the world.

                                <br/><br/>
                                Mr. Little lives on the pocket money provided by his uncle, which obviously he thinks is too 
                                less to survive on. He has an additional problem of falling in love with every second woman he meets.
                                Luckily, he has a happy ending, and with that Bertie and Jeeves can take rest for some time..

                                <br/><br/>
                                Bertie has two extremely mischievous nephews: Claude and Eustace. Following a prank on one of 
                                their school tutors, they are expelled from Oxford and sent to one of the British colonies
                                 in S. Africa.

                                <br/><br/>
                                Overall, a fun read..                                

                            </p>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </Styles>
        )
    }
}
export default Book5;