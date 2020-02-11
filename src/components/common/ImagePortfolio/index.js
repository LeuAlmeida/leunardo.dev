import React from 'react';

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
              {name}
              <span>{boldName}</span>
            </h2>
            <p className="icon-links">
              {github ? (
                <a href={github}>
                  <FaGithub size={18} color="#000" style={{ marginRight: 5 }} />
                </a>
              ) : (
                ''
              )}
              {behance ? (
                <a href={behance}>
                  <FaBehance size={18} color="#000" style={{ marginRight: 5 }} />
                </a>
              ) : (
                ''
              )}
              {url ? (
                <a href={url}>
                  <FaGlobe size={18} color="#000" style={{ marginRight: 5 }} />
                </a>
              ) : (
                ''
              )}
              {video ? (
                <a href={video}>
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
    </div>
  );
}

export default ImagePortfolio;
