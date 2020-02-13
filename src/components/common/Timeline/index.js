import React from 'react';
import PropTypes from 'prop-types';

function Timeline({ title, description, name, start, sup, end }) {
  return (
    <div className="box">
      <ul id="first-list">
        <li>
          <span></span>
          <div className="title">{title}</div>
          <div className="info">{description}</div>
          <div className="name">{name}</div>
          <div className="time">
            <span>
              {start}
              <sup>{sup}</sup>
            </span>
            <span>{end}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

Timeline.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  start: PropTypes.string,
  sup: PropTypes.string,
  end: PropTypes.string,
};

export default Timeline;
