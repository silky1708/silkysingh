import React from 'react';
import {NavLink} from 'react-router-dom';

class News extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="news text-left">
                <h4 style={{}}><u>News</u></h4><br/>
                <ul>
                    <li><span style={{color:'black', backgroundColor:'#ffefd5'}}>Apr 2021:</span> Completed the research fellowship at MPI-SWS, see my informal presentation <a href="https://drive.google.com/file/d/1kM9qTqSy-AouZm8gXWr2uNjmyZ3PqVsK/view?usp=sharing" style={{color:'#e2498a'}}><u>here</u></a></li>
                    <li><span style={{color:'black', backgroundColor:'#ffdab9'}}>Jan 2021:</span>  Joined <a href="https://mpi-sws.org/" style={{color:'#e2498a'}}><u>MPI-SWS</u></a> as a part-time research fellow, under supervision of <a href="https://people.mpi-sws.org/~eva/" style={{color:'#e2498a'}}><u>Eva Darulova</u></a></li>
                    <li><span style={{color:'black', backgroundColor:'#ffefd5'}}>July 2020:</span> Appointed as the coordinator of the <a href="https://tnp.iitd.ac.in/ocs/department.php" style={{color:'#e2498a'}}><u>Nucleus Team(OCS)</u></a>, Dept. of Mathematics IIT Delhi</li>
                    <li><span style={{color:'black', backgroundColor:'#ffdab9'}}>May 2020:</span> Joined <a href="https://mathmaterate.com/" style={{color:'#e2498a'}}><u>MateRate Education Pvt. Ltd.</u></a> as a Front-end developer intern for the summer</li>
                    <li><span style={{color:'black', backgroundColor:'#ffefd5'}}>July 2019:</span> Serving as academic mentor for the Fall semester!</li>
                    <li><span style={{color:'black', backgroundColor:'#ffdab9'}}>July 2018:</span> Joined IIT Delhi as an engineering undergrad, Major- Mathematics and Computing</li>
                </ul>
                </div>
            </React.Fragment>
        )
    }
}
export default News;