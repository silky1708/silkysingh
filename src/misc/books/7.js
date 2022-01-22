import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';

const Styles = styled.div`
font-family: "Georgia", sans-serif;
// background-color: #ffdeb2;
`;

class Book7 extends React.Component{
    render(){
        return (
            <Styles>
                <div className="container-fluid p-2">
                <div className="row no-gutters justify-content-center align-items-center">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <br/>
                            <h2 className="py-2" style={{fontWeight:'bold'}}>The Psychology of Money</h2>
                            <br/>

                            <span style={{color:'blue', fontWeight:'bold'}}><em>Jan 2022</em></span>
                            <br/><br/>
                            {/* <div className="text-center justify-content-center d-flex">
                            <Image src={bookCover} style={{height:'130px', width:'130px'}} className="shadow" style={{transform: 'rotate(270deg)', height:'200px', width:'260px'}}/>
                            </div> */}
                            {/* <br/><br/><br/> */}
                            <p style={{color: '#000000', fontSize:'1.1em'}}>
                                The book cover says <em>Timeless Lessons on Wealth, Greed and Happiness</em>. As usual, we should take advices with a pinch of salt.
                                <br/><br/>
                                <p>
                                    This book deals with the psychological side of creating and maintaining wealth.
                                    People tend to have different thoughts about money because of their cumulative, widely different experiences with <em>money</em>. 
                                    Someone could be born in the middle of the 2008 Housing crisis. They'd have different opinions and say than the person who has lived
                                    during the 90s tech boom.
                                </p>


                                <p>
                                    The book is divided into 20 small chapters, each focused on different aspects of money:
                                    <ol>
                                        <br/>
                                        <li>No One's Crazy</li>
                                        <em>Your personal experiences with money make up maybe 0.00000001% of what's happened in the world, but maybe
                                            80% of how you think the world works.
                                        </em>
                                        <br/><br/>

                                        <li>Luck & Risk</li>
                                        <em>
                                            Nothing is as good or as bad as it seems.
                                        </em>
                                        <br/><br/>

                                        <li>Never Enough</li>
                                        <em>
                                            Some real-life incidents depicting what happens when people don't have a sense of enough..
                                        </em>
                                        <br/><br/>

                                        <li>Confounding Compunding</li>
                                        <em>
                                            The power of compounding.. $81.5 billion of Warren Buffet's $84.5 billion net worth came after
                                            his 65th birthday.
                                        </em>
                                        <br/><br/>

                                        <li>Getting Wealthy vs. Staying Wealthy</li>
                                        <em>
                                            Good investing is not necessarily about making good decisions. It's about consistently not screwing up.
                                            Getting money is one thing, but keeping it is another.
                                        </em>
                                        <br/><br/>

                                        <li>Tails, You Win</li>
                                        <em>
                                            Tails(outliers) drive everything. Anything that is huge, profitable, famous, or influential is the result 
                                            of a tail event- an outlying one-in-thousands or millions event.
                                        </em>
                                        <br/><br/>

                                        <li>Freedom</li>
                                        <em>
                                            Controlling your time is the highest dividend money pays. Having a strong sense of controlling one's life 
                                            is a more dependable predictor of positive feelings of wellbeing than any of the objective conditions of 
                                            life we have considered.
                                        </em>
                                        <br/><br/>

                                        <li>Man in the Car Paradox</li>
                                        <em>
                                            People tend to want wealth to signal to others that they should be liked and admired. But in reality those
                                            other people often bypass admiring you, not because they don't think wealth is admirable, but because they use your
                                            wealth as a benchmark for their own desire to be liked and admired.
                                        </em>
                                        <br/><br/>

                                        <li>Wealth is What You Don't See</li>
                                        <em>
                                            Spending moeny to show people how much money you have is the fastest way to have less money.
                                        </em>
                                        <br/><br/>

                                        <li>Save Money</li>
                                        <em>
                                            Building wealth has little to do with your income or investment returns, and lots to do with your savings rate.
                                        </em>
                                        <br/><br/>

                                        <li>Reasonable > Rational</li>
                                        <em>
                                            Aim to be reasonable instead of coldly rational.
                                        </em>
                                        <br/><br/>

                                        <li>Surprise!</li>
                                        <li>Room for Error</li>
                                        <em>
                                            The most important part of every plan is planning on your plan not going according to plan.
                                        </em>
                                        <br/><br/>

                                        <li>You'll Change</li>
                                        <em>
                                            Long-term planning is harder than it seems because peopl's goals and desires change over time.
                                        </em>
                                        <br/><br/>

                                        <li>Nothing's Free</li>
                                        <em>
                                            Think of market volatility as a fee rather than a fine is an important part of developing the kind of 
                                            mindset that lets you stick around long enough for investing gains to work in your favor.
                                        </em>
                                        <br/><br/>

                                        <li>You {'&'} Me</li>
                                        <em>
                                            Beware taking financial cues from people playing a different game than you are.
                                        </em>
                                        <br/><br/>

                                        <li>The Seduction of Pessimism</li>
                                        <em>
                                            "For reasons I have never understood, people like to hear that the world is going to hell."
                                        </em>
                                        <br/><br/>

                                        <li>When You'll Believe Anything</li>
                                        <em>
                                            Stories are more powerful than statistics. The more you want something to be true, the more likely 
                                            you are to believe a story that overestimates the odds of it being true.
                                        </em>
                                        <br/><br/>

                                        {/* <li>All Together Now</li>
                                        <li>Confessions</li> */}
                                        The last two chapters are a summary of the whole book, and the author's own investment strategies.
                                    </ol>
                                </p>
                            </p>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </Styles>
        )
    }
}
export default Book7;