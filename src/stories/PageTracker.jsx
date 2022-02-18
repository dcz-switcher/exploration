import React from "react";
import PropTypes from 'prop-types';


export const PageTracker = ({steps}) => {
    return (
        <div>A page tracker with {steps} steps</div>
    );
};

PageTracker.PropTypes = {
    steps: PropTypes.number
}

PageTracker.defaultProps = {
    steps: 2
};