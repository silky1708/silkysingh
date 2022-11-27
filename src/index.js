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
import Book6 from './misc/books/6.js';
import Book7 from './misc/books/7.js';
import Book8 from './misc/books/8.js';
import Book9 from './misc/books/9.js';
import Book10 from './misc/books/10.js';
import Book11 from './misc/books/11.js';
import Book12 from './misc/books/12.js';
import Book13 from './misc/books/13.js';
import Book14 from './misc/books/14.js';
import Book15 from './misc/books/15.js';
import Book16 from './misc/books/16.js';
import Book17 from './misc/books/17.js';
import Book18 from './misc/books/18.js';
import Book19 from './misc/books/19.js';
import Book20 from './misc/books/20.js';
import Book21 from './misc/books/21.js';

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
        <Route exact path="/silkysingh/misc/books/section_3/6" component={Book6}/>
        <Route exact path="/silkysingh/misc/books/section_3/7" component={Book7}/>
        <Route exact path="/silkysingh/misc/books/section_3/8" component={Book8}/>
        <Route exact path="/silkysingh/misc/books/section_3/9" component={Book9}/>
        <Route exact path="/silkysingh/misc/books/section_3/10" component={Book10}/>
        <Route exact path="/silkysingh/misc/books/section_3/11" component={Book11}/>
        <Route exact path="/silkysingh/misc/books/section_3/12" component={Book12}/>
        <Route exact path="/silkysingh/misc/books/section_3/13" component={Book13}/>
        <Route exact path="/silkysingh/misc/books/section_3/14" component={Book14}/>
        <Route exact path="/silkysingh/misc/books/section_3/15" component={Book15}/>
        <Route exact path="/silkysingh/misc/books/section_3/16" component={Book16}/>
        <Route exact path="/silkysingh/misc/books/section_3/17" component={Book17}/>
        <Route exact path="/silkysingh/misc/books/section_3/18" component={Book18}/>
        <Route exact path="/silkysingh/misc/books/section_3/19" component={Book19}/>
        <Route exact path="/silkysingh/misc/books/section_3/20" component={Book20}/>
        <Route exact path="/silkysingh/misc/books/section_3/21" component={Book21}/>


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
