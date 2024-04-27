
import React from 'react';
import css from './notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <p className={css.notification}>{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
