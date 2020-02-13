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
`;

export const SkillCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
  padding: 20px;
  width: 15em;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  &:hover .skill-card__header {
    height: 40px;
  }
  &:hover .skill-card__header .skill-card__icon {
    -webkit-transform: translateX(-50%) translateY(-50%) scale(3);
    transform: translateX(-50%) translateY(-50%) scale(3);
  }
  &:hover .skill-card__body {
    height: 170px;
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
  & .skill-card__header {
    position: relative;
    background-color: #eb6c3f;
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
  & .skill-card__body .skill-card__duration {
    color: #9e9e9e;
    font-style: italic;
  }
  & .skill-card__body .skill-card__knowledge {
    margin-top: 10px;
    color: #424242;
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
