import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card } from 'components/common';
import starIcon from 'assets/icons/star.svg';
import forkIcon from 'assets/icons/fork.svg';
import { Wrapper, Grid, Item, Content, Stats } from './styles';

import api from '../../../services/api';

export const Projects = () => {
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    async function loadGithub() {
      const response = await api.get('/users/LeuAlmeida/repos');

      const data = response.data.sort((a, b) => (a.stargazers_count > b.stargazers_count ? -1 : 1)).slice(0, 6);

      setEdges(data);
    }

    loadGithub();
  }, []);

  return (
    <Wrapper as={Container} id="pinned">
      <h2>Top Starred Repositories</h2>
      <Grid>
        {edges.map(node => (
          <Item key={node.id} as="a" href={node.html_url} target="_blank" rel="noopener noreferrer">
            <Card>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <Stats>
                <div>
                  <img src={starIcon} alt="stars" />
                  <span>{node.stargazers_count}</span>
                </div>
                <div>
                  <img src={forkIcon} alt="forks" />
                  <span>{node.forks_count}</span>
                </div>
              </Stats>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
