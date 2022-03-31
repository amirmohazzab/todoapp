import React from "react";

const About = ({ teachersName }) => {
    return (
        <div className="card text-center">
            <div className="card-header"> About creator </div>
            <div className="card-body">
                <h5 className="card-title">React Course</h5>
                <p className="card-text"> Teacher: {teachersName}</p>
            </div>
            <div className="card-footer text-muted">
               Course will finish very soon
            </div>
        </div>
    );
};

export default About;
