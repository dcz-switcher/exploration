import React from "react";
import PropTypes from 'prop-types';
import './pageTracker.css';



export const PageTracker = ({steps}) => {

    const stepElements = [...Array(steps)].map((e, i) =>
        <div className="page-tracker--steper">
            <span className="page-tracker--stepper--step">{i+1}</span>
        </div>
    )

    return (
        <div className="page-tracker">
            {stepElements}
        </div>   
    );
};

PageTracker.propTypes = {
    steps: PropTypes.number
}

PageTracker.defaultProps = {
    steps: 3
};