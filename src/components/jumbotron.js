import React from "react";

function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-center">Clicky Game!</h1>
                <p className="lead text-center">Click on an image to earn points, but don't click on an image more than once!</p>
                <p className="display-4 text-center">Score: {props.counter} | Top Score: {props.totalCounter}</p>
            </div>
        </div>
    )
}

export default Jumbotron;