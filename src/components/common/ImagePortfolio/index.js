import React from 'react';
import ReactTooltip from 'react-tooltip';
import { FaGithub, FaBehance, FaGlobe, FaPlay } from 'react-icons/fa';

import { Grid } from './styles';

function ImagePortfolio({ image, name, boldName, description, github, behance, url, video }) {
  return (
    <div className="content">
      <Grid>
        <figure className="effect-zoe">
          <img src={image} alt={`${name} ${boldName || ''}`} />
          <figcaption>
            <h2>
              <span>{boldName}</span>
              {name}
            </h2>
            <p className="icon-links">
              {github ? (
                <a href={github} data-tip data-for="github" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={18} color="#000" style={{ marginRight: 5 }} />
                </a>
              ) : (
                ''
              )}
              {behance ? (
                <a href={behance} data-tip data-for="behance" target="_blank" rel="noopener noreferrer">
                  <FaBehance size={18} color="#000" style={{ marginRight: 5 }} />
                </a>
              ) : (
                ''
              )}
              {url ? (
                <a href={url} data-tip data-for="website" target="_blank" rel="noopener noreferrer">
                  <FaGlobe size={18} color="#000" style={{ marginRight: 5 }} />
                </a>
              ) : (
                ''
              )}
              {video ? (
                <a href={video} data-tip data-for="video" target="_blank" rel="noopener noreferrer">
                  <FaPlay size={18} color="#000" style={{ marginRight: 5 }} />
                </a>
              ) : (
                ''
              )}
            </p>
            {description ? <p className="description">{description}</p> : ''}
          </figcaption>
        </figure>
      </Grid>

      <ReactTooltip id="github" type="dark" effect="solid">
        <span>Github Repository</span>
      </ReactTooltip>
      <ReactTooltip id="behance" type="dark" effect="solid">
        <span>Behance Presentation</span>
      </ReactTooltip>
      <ReactTooltip id="website" type="dark" effect="solid">
        <span>Visit the Website</span>
      </ReactTooltip>
      <ReactTooltip id="behance" type="dark" effect="solid">
        <span>Watch this Video</span>
      </ReactTooltip>
    </div>
  );
}

export default ImagePortfolio;
