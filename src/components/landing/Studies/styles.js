import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 50px;
  padding: 0 10%;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 10%;

  @media (max-width: 960px) {
    flex-direction: column;
  }

  & .ui.image.label .detail {
    width: 100% !important;
  }

  & .ui .blue .image .label {
    margin-left: -20px;
  }
`;

export const CardsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1340px) {
    display: grid;
    width: 100%;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 410px) {
    display: grid;
    width: 100%;
    align-items: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
  }
`;

export const SkillCard = styled.div`
  padding: 20px;
  /* width: 15em; */
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  transition: box-shadow 0.3s;
  /* margin: 20px; */

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);
  }
  &:hover .skill-card__header {
    height: 40px;
  }
  &:hover .skill-card__header .skill-card__icon {
    -webkit-transform: translateX(-50%) translateY(-50%) scale(3);
    transform: translateX(-50%) translateY(-50%) scale(3);
  }
  &:hover .skill-card__body {
    height: 300px;
  }
  & .skill-card__body .skill-card__knowledge li {
    list-style: none;
  }
  &:hover .skill-card__body .skill-card__knowledge li {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-transition-timing-function: cubic-bezier(0, 1.5, 1, 1);
    transition-timing-function: cubic-bezier(0, 1.5, 1, 1);
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
  }
  &:hover .skill-card__body .skill-card__knowledge li:nth-child(1) {
    -webkit-transition-delay: 0.25s;
    transition-delay: 0.25s;
  }
  &:hover .skill-card__body .skill-card__knowledge li:nth-child(2) {
    -webkit-transition-delay: 0.5s;
    transition-delay: 0.5s;
  }
  &:hover .skill-card__body .skill-card__knowledge li:nth-child(3) {
    -webkit-transition-delay: 0.75s;
    transition-delay: 0.75s;
  }
  &:hover .skill-card__body .skill-card__knowledge li:nth-child(4) {
    -webkit-transition-delay: 1s;
    transition-delay: 1s;
  }
  &:hover .skill-card__body .skill-card__knowledge li:nth-child(5) {
    -webkit-transition-delay: 1.25s;
    transition-delay: 1.25s;
  }
  &:hover .skill-card__body .skill-card__knowledge li:nth-child(6) {
    -webkit-transition-delay: 1.5s;
    transition-delay: 1.5s;
  }
  & .grey {
    background-color: #666;
    border-radius: 4px;
    padding: 5px;
  }
  & .orange {
    background-color: #eb6c3f;
    border-radius: 4px;
    padding: 5px;
  }
  & .yellow {
    background-color: #ebc744;
    border-radius: 4px;
    padding: 5px;
  }
  & .blue {
    background-color: #3fb3eb;
    border-radius: 4px;
    padding: 5px;
  }
  & .purple {
    background-color: #3f5ceb;
    border-radius: 4px;
    padding: 5px;
  }
  & .red {
    background-color: #eb3f3f;
    border-radius: 4px;
    padding: 5px;
  }
  & .green {
    background-color: #3feb5c;
    border-radius: 4px;
    padding: 5px;
  }
  & .skill-card__header {
    position: relative;
    height: 170px;
    margin: -20px -20px 20px -20px;
    -webkit-transition: height 0.5s;
    transition: height 0.5s;
    overflow: hidden;
  }

  & .skill-card__header .skill-card__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateY(-50%) translateX(-50%);
    transform: translateY(-50%) translateX(-50%);
    display: block;
    width: 128px;
    height: 128px;
    -webkit-transition: -webkit-transform 0.5s;
    transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
    transition: transform 0.5s, -webkit-transform 0.5s;
  }
  & .skill-card__body {
    height: 40px;
    -webkit-transition: height 0.5s;
    transition: height 0.5s;
    overflow: hidden;
  }
  & .skill-card__body .skill-card__title {
    font-size: 1.4em;
    font-weight: 600;
    text-transform: uppercase;
  }
  & .skill-card__body .skill-card__company {
    font-size: 0.9em;
    display: flex;
    color: #fff;
    margin-bottom: 10px;
  }
  & .skill-card__body .skill-card__duration {
    color: #9e9e9e;
    font-style: italic;
  }
  & .skill-card__body .skill-card__knowledge {
    margin-top: 10px;
    color: #424242;
    margin-left: 0px;
  }
  & .skill-card__body .skill-card__knowledge li {
    margin-top: 5px;
    -webkit-transition-duration: 0;
    transition-duration: 0;
    -webkit-transition-delay: 0.5s;
    transition-delay: 0.5s;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
`;
