import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  width: 100%;
  background-color: #7178fc;
  padding-bottom: 10%;

  .box {
    margin: 0 10%;
    height: 630px;
    overflow: hidden;
    padding: 10px 0 40px 60px;
  }

  .box ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: relative;
    transition: all 0.5s linear;
    top: 0;
  }

  .box ul:last-of-type {
    top: 80px;
  }

  .box ul:before {
    content: '';
    display: block;
    width: 0;
    height: 100%;
    border: 1px dashed #fff;
    position: absolute;
    top: 0;
    left: 30px;
  }

  .box ul li {
    margin: 20px 60px 60px;
    position: relative;
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.3);
    color: #fff;
    border-radius: 10px;
    line-height: 20px;
    width: 35%;
  }

  .box ul li > span {
    content: '';
    display: block;
    width: 0;
    height: 100%;
    border: 1px solid #fff;
    position: absolute;
    top: 0;
    left: -30px;
  }

  .box ul li > span:before,
  .box ul li > span:after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ff6d6d;
    border: 2px solid #fff;
    position: absolute;
    left: -7.5px;
  }

  .box ul li > span:before {
    top: -10px;
  }
  .box ul li > span:after {
    top: 95%;
  }

  .box .title {
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .box .info:first-letter {
    text-transform: capitalize;
    line-height: 1.7;
  }

  .box .name {
    margin-top: 10px;
    text-transform: capitalize;
    font-style: italic;
    text-align: right;
    margin-right: 20px;
  }

  .box .time span {
    position: absolute;
    left: -100px;
    color: #fff;
    font-size: 80%;
    font-weight: bold;
  }
  .box .time span:first-child {
    top: -16px;
  }
  .box .time span:last-child {
    top: 94%;
  }

  .arrow {
    position: absolute;
    top: 105%;
    left: 22%;
    cursor: pointer;
    height: 20px;
    width: 20px;
  }

  .arrow:hover {
    -webkit-animation: arrow 1s linear infinite;
    -moz-animation: arrow 1s linear infinite;
    -o-animation: arrow 1s linear infinite;
    animation: arrow 1s linear infinite;
  }

  .box ul:last-of-type .arrow {
    position: absolute;
    top: 105%;
    left: 22%;
    transform: rotateX(180deg);
    cursor: pointer;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @keyframes arrow {
    0%,
    100% {
      top: 105%;
    }
    50% {
      top: 106%;
    }
  }

  @-webkit-keyframes arrow {
    0%,
    100% {
      top: 105%;
    }
    50% {
      top: 106%;
    }
  }

  @-moz-keyframes arrow {
    0%,
    100% {
      top: 105%;
    }
    50% {
      top: 106%;
    }
  }

  @-o-keyframes arrow {
    0%,
    100% {
      top: 105%;
    }
    50% {
      top: 106%;
    }
  }
`;
