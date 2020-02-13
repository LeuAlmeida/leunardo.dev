import React from 'react';
import { FaCode, FaPencilRuler, FaDownload } from 'react-icons/fa';
import PropTypes from 'prop-types';

function Tag({ name, color, icon, url }) {
  if (icon === 'certificate') {
    return (
      <a
        className={`ui ${color} image label`}
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDownload color="#FFF" size={14} />
        <div className="detail">{name}</div>
      </a>
    );
  }

  return (
    <a
      className={`ui ${color} image label`}
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {icon === 'code' ? <FaCode color="#FFF" size={14} /> : <FaPencilRuler color="#FFF" size={14} />}
      <div className="detail">{name}</div>
    </a>
  );
}

Tag.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
};

export default Tag;
