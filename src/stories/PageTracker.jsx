import React, { useState } from "react";
import PropTypes from 'prop-types';
import './pageTracker.css';


/**
 * > Module de visualisation et de gestion de l'avancement dans un tunnel à plusieurs étapes
 */
export const PageTracker = ({count, current}) => {
    const [currentStep, setCurrentStep] = useState(current);

    const stepElements = [...Array(count)].map((e, i) => 
            <div key={i} className="page-tracker--steper" onClick={clickHandler} data-index={i+1}>
                <div className={"page-tracker--steper--status " + ( (i < currentStep) ? 'active' : '') }></div>
                <span className="page-tracker--stepper--step">{i+1}</span>
            </div>
    )

    function clickHandler(e){
        setCurrentStep(e.currentTarget.dataset.index);
    }

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