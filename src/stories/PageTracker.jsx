import React from "react";
import PropTypes from 'prop-types';
import './pageTracker.css';


/**
 * > Module de visualisation et de gestion de l'avancement dans un tunnel à plusieurs étapes
 */
export const PageTracker = ({count, current}) => {

    const stepElements = [...Array(count)].map((e, i) =>
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
    count: PropTypes.number,
    current: PropTypes.number
}

PageTracker.defaultProps = {
    count: 3,
    current: 0
};