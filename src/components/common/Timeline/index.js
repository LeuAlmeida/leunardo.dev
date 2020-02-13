import React from 'react';
import PropTypes from 'prop-types';

function Timeline({ title, description, company, start, end }) {
  return (
    <li>
      <span></span>
      <div className="title">{title}</div>
      <div className="info">{description}</div>
      <div className="name">{company}</div>
      <div className="time">
        <span>{end}</span>
        <span>{start}</span>
      </div>
    </li>
  );
}

Timeline.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  company: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
};

export default Timeline;
