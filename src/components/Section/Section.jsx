import React from 'react';
import css from './section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section>
    <h2 className={css.title}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;