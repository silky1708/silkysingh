import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Home';
import About from './components/About.js';
import Blog from './components/Blog.js';
import Misc from './components/Misc.js';
import Resume from './components/Resume.js';
import Projects from './components/Projects.js';

// General Misc. Links
import Page1 from './misc/1.js';
import Page2 from './misc/2.js';
import Page3 from './misc/3.js';
import Page4 from './misc/4.js';
import Page5 from './misc/5.js';
import Page6 from './misc/6.js';
import Page7 from './misc/7.js';
import Page8 from './misc/8.js';
import Page9 from './misc/9.js';
import Page10 from './misc/10.js';
import Page11 from './misc/11.js';
import Page12 from './misc/12.js';
import Page13 from './misc/13.js';
import Page14 from './misc/14.js';
import Page15 from './misc/15.js';
import Page16 from './misc/16.js';

// Books
import Book1 from './misc/books/1.js';
import Book2 from './misc/books/2.js';
import Book3 from './misc/books/3.js';
import Book4 from './misc/books/4.js';
import Book5 from './misc/books/5.js';

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

        {/* Misc. links */}
        <Route exact path="/silkysingh/misc/_1" component={Page1}/>
        <Route exact path="/silkysingh/misc/_2" component={Page2}/>
        <Route exact path="/silkysingh/misc/_3" component={Page3}/>
        <Route exact path="/silkysingh/misc/_4" component={Page4}/>
        <Route exact path="/silkysingh/misc/_5" component={Page5}/>
        <Route exact path="/silkysingh/misc/_6" component={Page6}/>
        <Route exact path="/silkysingh/misc/_7" component={Page7}/>
        <Route exact path="/silkysingh/misc/_8" component={Page8}/>
        <Route exact path="/silkysingh/misc/_9" component={Page9}/>
        <Route exact path="/silkysingh/misc/_10" component={Page10}/>
        <Route exact path="/silkysingh/misc/_11" component={Page11}/>
        <Route exact path="/silkysingh/misc/_12" component={Page12}/>
        <Route exact path="/silkysingh/misc/_13" component={Page13}/>
        <Route exact path="/silkysingh/misc/_14" component={Page14}/>
        <Route exact path="/silkysingh/misc/_15" component={Page15}/>
        <Route exact path="/silkysingh/misc/_16" component={Page16}/>

        {/* Bookshelf links */}
        <Route exact path="/silkysingh/misc/books/section_3/1" component={Book1}/>
        <Route exact path="/silkysingh/misc/books/section_3/2" component={Book2}/>
        <Route exact path="/silkysingh/misc/books/section_3/3" component={Book3}/>
        <Route exact path="/silkysingh/misc/books/section_3/4" component={Book4}/>
        <Route exact path="/silkysingh/misc/books/section_3/5" component={Book5}/>


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
