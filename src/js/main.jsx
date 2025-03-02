import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
//import Home from './components/Home';
import SimpleCounter from './components/SimpleCounter';

let counter = 0;

setInterval(() => {
    const digitOne = Math.floor(counter % 10);
    const digitTwo = Math.floor((counter / 10) % 10);
    const digitThree = Math.floor((counter / 100) % 10);
    const digitFour = Math.floor((counter / 1000) % 10);

    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <SimpleCounter 
                digitOne={digitOne} 
                digitTwo={digitTwo} 
                digitThree={digitThree} 
                digitFour={digitFour} 
            />
        </React.StrictMode>
    );

    counter++;
}, 1000);