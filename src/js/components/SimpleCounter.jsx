import React from 'react';

function SimpleCounter({ digitFour, digitThree, digitTwo, digitOne }) {
    return (
        <div className="bigCounter d-flex justify-content-center align-items-center fs-1 p-3 bg-dark text-white">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="four">{digitFour % 10}</div>
            <div className="three">{digitThree % 10}</div>
            <div className="two">{digitTwo % 10}</div>
            <div className="one">{digitOne % 10}</div>
        </div>
    );
}

export default SimpleCounter;
