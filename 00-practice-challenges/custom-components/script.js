/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

import React from 'react';
import ReactDOM from 'react-dom';


function CustomPage() {
    return (
        <div>
            <ol>
                <li>New learning</li>
                <li>In demand</li>
                <li>Upskilling</li>
            </ol>
        </div>
    )
};

ReactDOM.render(<CustomPage />, document.getElementById('root'));