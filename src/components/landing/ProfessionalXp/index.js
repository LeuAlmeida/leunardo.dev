import React from 'react';

import { Container } from './styles';

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

export function ProfessionalXp() {
  return (
    <>
      <Container>
        <Timeline
          title="comment #01"
          description="the best animation , the best toturials you would ever see ."
          name="- dr. mohamed -"
          start="JUN, 17"
          sup="th"
          end="12:00 AM"
        />
      </Container>
    </>
  );
}
