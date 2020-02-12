import styled from 'styled-components';

export const Timeline = styled.section`
  & ul li {
    list-style-type: none;
    position: relative;
    width: 6px;
    margin: 0 auto;
    padding-top: 50px;
    background: #fff;
  }
  & ul li::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%) rotate(45deg);
    width: 20px;
    height: 20px;
    z-index: 2;
    background: #eee;
  }
  & ul li div {
    position: relative;
    bottom: 0;
    width: 400px;
    padding: 20px;
    background: #fff;
    box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
    border-radius: 5px;
    display: flex;
    align-items: center;
  }
  & ul li div time {
    position: absolute;
    background: #f5af19;
    width: 80px;
    height: 30px;
    top: -15px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 2px;
  }
  & ul li div div {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & ul li div div p {
    text-align: center;
  }
  & ul li div .discovery {
    margin-right: 10px;
  }
  & ul li:nth-of-type(odd) > div {
    left: 45px;
  }
  & ul li:nth-of-type(even) > div {
    left: -439px;
  }

  & ul li div {
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
  & ul li:nth-of-type(odd) div {
    transform: translate3d(100px, -10px, 0) rotate(10deg);
  }
  & ul li:nth-of-type(even) div {
    transform: translate3d(-100px, -10px, 0) rotate(10deg);
  }
  & ul li.in-view div {
    transform: none;
    visibility: visible;
    opacity: 1;
  }

  @media screen and (max-width: 900px) {
    & ul li div {
      width: 250px;
      flex-direction: column;
    }
    & ul li div div {
      width: 80%;
      margin: 10px;
    }
    & ul li:nth-of-type(even) > div {
      left: -289px;
    }
  }
  @media screen and (max-width: 600px) {
    body {
      background: #8bfff4;
    }

    & ul li {
      margin-left: 20px;
    }
    & ul li div {
      width: calc(100vw - 91px);
    }
    & ul li:nth-of-type(even) > div {
      left: 45px;
    }
  }
`;
