import React from 'react'
import styled from 'styled-components';

const Styles = styled.div`
.code-block{
    border-radius: 10px;
    background-color: #ffe9ec;
    font-family: 'Source Code Pro', monospace;
}

`;

class Codeblock extends React.Component{
    render(){
        return (
            <Styles>
                <div className="code-block row no-gutters align-items-center pl-3 p-2">
                    {this.props.content}
                </div>
            </Styles>
        )
    }
}
export default Codeblock;