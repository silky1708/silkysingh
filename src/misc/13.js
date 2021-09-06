import React from 'react';
import styled from 'styled-components';
// import Codeblock from '../components/Codeblock.js';

const Styles = styled.div`
font-family: "Georgia", sans-serif;
`;

class Page13 extends React.Component{
    render(){
        return (
            <Styles>
                <div className="container-fluid p-2">
                <div className="row no-gutters justify-content-center align-items-center">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h2 className="mt-2" style={{color: '#000000'}}>Ph.D: To do or not to do</h2>
                            <br/><br/>
                            <span style={{color:'blue', fontWeight:'bold'}}>Thoughts/</span>
                            <br/><br/>
                            <p style={{color: '#000000', fontSize:'1.1em'}}>
                            <em>Disclaimer: I am neither encouraging nor discouraging anyone to do a Ph.D.</em>
                            <br/><br/>
                            If you've been accepted for a Ph.D, congrats! Do check out this post by Andrej Karpathy on navigating your Ph.D:
                             <a href="https://karpathy.github.io/2016/09/07/phd/">https://karpathy.github.io/2016/09/07/phd/</a>
                            <br/><br/>
                            These are just a bunch of thoughts analyzed with the limited knowledge I have about research:

                            <br/><br/>
                            <span style={{fontWeight:'bold'}}>Q: No one cares about research. Why would anyone waste the precious years of their lives sitting 
                                somewhere in the world thinking about problems no one wants to solve? 
                            </span>
                            <br/><br/>
                            Not bad, but there are some fallacies here. First, a lot of people <em>do</em> care about research.
                            Think about all the large organizations- Google, Amazon, Apple, Microsoft, NVIDIA, Adobe, ByteDance; they
                            all have huge research & development teams spread around the world, working on things that can improve their 
                            products, and ultimately the market dominance. On the way, they also invest in research fellowships
                            to promote research in the areas of their interests. Good. How do researchers fit here?- If the researchers produce 
                            good enough results, they can be translated to a feature in the company's products. Win win for both!
                            <br/>  
                            For some, doing Ph.D might be a waste of time. For other who do take it up, it is an investment in their future.
                            Roughly 10,000 hours of working in an area(over ~5 years) would certainly make them an expert in the area. 

                            
                            

                            </p>
                            
                        </div>
                        <div className="col-md-3"></div>
                </div>
                </div>
            </Styles>
        )
    }
}
export default Page13;