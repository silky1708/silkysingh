import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Home';
import About from './components/About.js';
import Blog from './components/Blog.js';
import Misc from './components/Misc.js';
import Resume from './components/Resume.js';
import Projects from './components/Projects.js';

import Page1 from './misc/1.js';
import Page2 from './misc/2.js';
import Page3 from './misc/3.js';
import Page4 from './misc/4.js';
import Page5 from './misc/5.js';
import Page6 from './misc/6.js';
import Page7 from './misc/7.js';
import Page8 from './misc/8.js';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route, 
  Link, 
  Switch
} from "react-router-dom";

// const prefix = "/silkysingh"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/silkysingh/" component={App}/>
        <Route exact path="/silkysingh/about" component={About}/>
        <Route exact path="/silkysingh/resume" component={Resume}/>
        <Route exact path="/silkysingh/misc" component={Misc}/>
        <Route exact path="/silkysingh/blog" component={Blog}/>
        <Route exact path="/silkysingh/projects" component={Projects}/>


        <Route exact path="/silkysingh/misc/_1" component={Page1}/>
        <Route exact path="/silkysingh/misc/_2" component={Page2}/>
        <Route exact path="/silkysingh/misc/_3" component={Page3}/>
        <Route exact path="/silkysingh/misc/_4" component={Page4}/>
        <Route exact path="/silkysingh/misc/_5" component={Page5}/>
        <Route exact path="/silkysingh/misc/_6" component={Page6}/>
        <Route exact path="/silkysingh/misc/_7" component={Page7}/>
        <Route exact path="/silkysingh/misc/_8" component={Page8}/>

      </Switch>
    {/* <App /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
