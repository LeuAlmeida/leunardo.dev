import React from 'react';
import { FaCode, FaPencilRuler, FaDownload, FaEllipsisH } from 'react-icons/fa';
import PropTypes from 'prop-types';

function Tag({ name, color, icon, url }) {
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
  url: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
};

export default Tag;
