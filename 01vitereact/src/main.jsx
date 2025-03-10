import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

function MyApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)



const anotherUser = " chai aur sip.."

const reactElement = React.createElement(  {/* comment---  createElement() by default automatically inject hojata hai aur usse inject karta hai 'Babel'   and ye element 4 cheeze maagta hai -> i) Type ii) keys iii) refs iv) props ---  */},
    'a', 
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherUser              ,{/* ---  Evalauted expressions  ---  */}
)

ReactDOM.createRoot(document.getElementById('root')).
render(
    reactElement    
);
