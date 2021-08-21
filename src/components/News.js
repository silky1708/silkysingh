import React from 'react';
// import {NavLink} from 'react-router-dom';

class News extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="news text-left">
                <h4 style={{}}><u>News</u></h4><br/>
                <ul>
                    <li><span style={{color:'black', backgroundColor:'#ffefd5'}}>Aug 2021:</span> Teaching Assistant for the course <span style={{color:'#e2498a'}}>Introduction to Computer Science</span> for Fall semester, 2021</li>
                    <li><span style={{color:'black', backgroundColor:'#ffdab9'}}>May 2021:</span> Joined <a href="https://research.adobe.com/research/" style={{color:'#e2498a'}}><u>Adobe Research</u></a> Bangalore as Summer Research Intern!</li>
                    <li><span style={{color:'black', backgroundColor:'#ffefd5'}}>Apr 2021:</span> Completed the research fellowship at MPI-SWS, see my final presentation <a href="https://drive.google.com/file/d/1kM9qTqSy-AouZm8gXWr2uNjmyZ3PqVsK/view?usp=sharing" style={{color:'#e2498a'}}><u>here</u></a></li>
                    <li><span style={{color:'black', backgroundColor:'#ffdab9'}}>Jan 2021:</span> Joined AVA group at <a href="https://mpi-sws.org/" style={{color:'#e2498a'}}><u>MPI-SWS</u></a> as a part-time research fellow, under the supervision of <a href="https://people.mpi-sws.org/~eva/" style={{color:'#e2498a'}}><u>Eva Darulova</u></a> & Anastasiia Izycheva</li>
                    <li><span style={{color:'black', backgroundColor:'#ffefd5'}}>July 2020:</span> Appointed as the coordinator of the <a href="https://tnp.iitd.ac.in/ocs/department.php" style={{color:'#e2498a'}}><u>Nucleus Team(OCS)</u></a>, Dept. of Mathematics IIT Delhi</li>
                    <li><span style={{color:'black', backgroundColor:'#ffdab9'}}>May 2020:</span> Joined <span style={{color:'#e2498a'}}>MateRate Education Pvt. Ltd.</span> as a Front-end developer intern for the summer</li>
                    <li><span style={{color:'black', backgroundColor:'#ffefd5'}}>July 2019:</span> Serving as academic mentor(for the course: <span style={{color:'#e2498a'}}>Linear Algebra & Differential Equations</span>) for the Fall semester!</li>
                    <li><span style={{color:'black', backgroundColor:'#ffdab9'}}>July 2018:</span> Joined <a href="https://home.iitd.ac.in" style={{color:'#e2498a'}}><u>IIT Delhi</u></a> as an engineering undergrad, Major- Mathematics and Computing</li>
                </ul>
                </div>
            </React.Fragment>
        )
    }
}
export default News;