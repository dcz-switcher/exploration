import React, { useState } from "react";
import PropTypes from 'prop-types';
//import React, { Component } from 'react';
//import { number, string, arrayOf, bool, shape } from 'prop-types';
import classNames from 'classnames';
//import { createMacifComponent } from './ThemeProvider';
import './fwk_macif.min.css';


export const Stepbar = ({mcfPrefix, sections, activeIndex, modify}) => {

  const getClass = index => {
    if (activeIndex > index) {
      return 'mcf-section--completed';
    }

    if (activeIndex === index) {
      return 'mcf-section--active';
    }

    return '';
  };


  //const { mcfPrefix, sections, activeIndex, modify } = this.props;

  let styleClasses = '';
  styleClasses += modify.color ? `${mcfPrefix}--${modify.color} ` : '';
  styleClasses += modify.reverse ? `${mcfPrefix}--reverse ` : '';

  if (modify.desktop) {
    styleClasses += modify.desktop.reverse
      ? `${mcfPrefix}--md--reverse `
      : `${mcfPrefix}--md `;
    styleClasses += modify.desktop.color
      ? `${mcfPrefix}--md--${modify.color} `
      : '';
  }

  const classes = classNames(mcfPrefix, styleClasses);
  
  return (
    <div className={classes}>
      <ol>
        {sections.map((step, idx) => (
          <li key={idx} className={getClass(idx)}>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <span className="mcf-section">{sections[activeIndex]}</span>
    </div>
  );
};

Stepbar.propTypes = {
  /** @default 'mcf-stepbar' */
  mcfPrefix: PropTypes.string,
  /**
   * Index de la section courante
   */
  activeIndex: PropTypes.number.isRequired,
  /**
   * Liste des sections (noms des sections)
   */
  sections: PropTypes.arrayOf(PropTypes.string),
  /**
   *  Modification sur le stepbar
   */
  modify: PropTypes.shape({
    color: PropTypes.string,
    reverse: PropTypes.bool,
    desktop: PropTypes.shape({
      color: PropTypes.string,
      reverse: PropTypes.bool,
    }),
  }),
};

Stepbar.defaultProps = {
  mcfPrefix: "mcf-stepbar",
  activeIndex: 0,
  sections: [],
  modify: {},
};