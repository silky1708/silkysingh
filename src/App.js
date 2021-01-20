import React from 'react';
import './App.css';
import styled from styled-components;

const Styles = styled.div`
  .header{
    background = black;
    height = 50px;
  }

`


function App() {
  return (
    <div className='outer-container '>
      <div className="header row">


      </div>
      <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            {/* my pic here */}
          </div>
          <div className="col-md-4">
          </div>
      </div>
    </div>
  );
}

export default App;
