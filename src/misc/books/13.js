import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';

const Styles = styled.div`
font-family: "Georgia", sans-serif;
background-color: #ffdeb2;
`;

class Book13 extends React.Component{
    render(){
        return (
            <Styles>
                <div className="container-fluid p-2">
                <div className="row no-gutters justify-content-center align-items-center">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <br/>
                            <h2 className="py-2" style={{fontWeight:'bold'}}>Moonwalking with Einstein</h2>
                            <br/>

                            <span style={{color:'blue', fontWeight:'bold'}}><em>2022</em></span>
                            <br/><br/>
                            <p style={{color: '#000000', fontSize:'1.1em'}}>
                                Real story of a journalist, Joshua Foer, who got into memory training after he
                                attended USA Memory Championship in 2005. He practiced memory training since then
                                & won the next US Memory Championship held in 2006 with just one year training.
                                <br/><br/>

                                The concept introduced in his book is that of memory palace. We as humans have
                                a great spatial memory. A memory palace is a technique utilising this fact to 
                                memorize things faster & retain them for long. Picture walking in any location
                                that you know very well (could be your home, office, nearby park), now plant 
                                memorable images at various locations as you walk. 
                                <br/><br/>

                                Suppose, you need to remember multiple digits, club them into tuples of 3, make an 
                                image per tuple and plant them in one of your memory palaces. When it's time to recall,
                                walk through the same memory palace and decode the images back to numbers. <em>Voila!</em>
                                <br/><br/>

                                I'll explain a technique to remember numbers below: it's called PAO (Person-Action-Object).
                                Associate a person, performing an action with an object with each of the numbers 0,1,...,9.
                                We must remember this by heart, and we're good to go to remember any number however long.
                                For example, you could associate yourself moonwalking with Einstein with the number 0.

                                <br/><br/>
                                Now, for any number, for example 3498275928562956298, divide it into triplets like
                                349-827-592-856-295-629-8, pick the person from the first digit of a triplet, action from
                                the second digit, and object from the third digit and form a very vivid, non-forgettable
                                image, place it in your memory palace. Do it sequentially for all the triplets.
                                Being able to form these images quickly is where we could use our creative energies.

                                <br/><br/>
                                 
                            </p>

                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </Styles>
        )
    }
}
export default Book13;