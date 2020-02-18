import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  & .card {
    position: relative;
    width: 90%;
    max-width: 800px;
    height: 200px;
    background-color: #fff;
    overflow: hidden;
    margin-bottom: 4px;
  }
  & .card:before {
    content: '';
    z-index: 99;
    position: absolute;
    top: -10px;
    left: 32px;
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 16px;
    background-color: #e6e5e1;
  }
  & .card:after {
    content: '';
    z-index: 99;
    position: absolute;
    bottom: -10px;
    left: 32px;
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 16px;
    background-color: #e6e5e1;
  }
  & .card ul {
    z-index: 99;
    position: absolute;
    left: 39px;
    top: 5px;
    list-style-type: none;
  }
  & .card ul li {
    width: 2px;
    height: 2px;
    border-radius: 2px;
    margin: 6px 0;
    background-color: #e6e5e1;
  }
  & .card h2 {
    z-index: 99;
    font-family: 'Poppins', sans-serif;
    position: absolute;
    bottom: 0;
    right: 25%;
    font-size: 60px;
    font-weight: 700;
    color: #fff;
  }
  & .card .fa-arrow-right {
    z-index: 100;
    position: absolute;
    right: 75px;
    bottom: 25px;
    font-size: 40px;
    cursor: pointer;
  }
  & .card p {
    z-index: 99;
    position: absolute;
    top: 20px;
    right: 70px;
    font-weight: bold;
    color: #333;
    opacity: 0.7;
    font-size: 16px;
    letter-spacing: 1px;
    writing-mode: vertical-lr;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  & .card .pic {
    z-index: 100;
    width: 80%;
    object-fit: cover;
    height: 200px;
    background-image: url('https://images.unsplash.com/photo-1525543907410-b2562b6796d6?ixlib=rb-0.3.5&s=9ff8e5e718a6a40cbd0e1471235912f4&auto=format&fit=crop&w=3452&q=80');
    background-size: 100% 100%;
    filter: grayscale(100%);
  }
  & .card .social {
    position: absolute;
    left: 60px;
    top: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 180px;
    height: 64px;
    border-radius: 80px;
  }
  & .card .social i:nth-of-type(1) {
    -webkit-transition-delay: 0.4s;
    transition-delay: 0.4s;
  }
  & .card .social i:nth-of-type(2) {
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
  }
  & .card .social i:nth-of-type(3) {
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }
  & .card .social i:nth-of-type(4) {
    -webkit-transition-delay: 0.1s;
    transition-delay: 0.1s;
  }
  & .card:hover i {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  & .card button {
    position: absolute;
    right: 14px;
    bottom: 14px;
    width: 30px;
    height: 30px;
    background-color: #da4d1d;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    outline: none;
    transition: all 0.3s ease;
    mix-blend-mode: hard-light;
  }
  & .card button i {
    font-size: 3rem;
  }
  & .card:hover button {
    transform: scale(16.5);
  }
  & .card:hover p {
    color: #fff;
  }
  & .card:hover .pic {
    filter: grayscale(0);
  }
  & .card2 .pic {
    background-image: url('https://images.unsplash.com/photo-1528785198459-ec50485704c7?ixlib=rb-0.3.5&s=3a2fc3039516555bbb2e9cd2967bd321&auto=format&fit=crop&w=1537&q=80');
  }
  & .card2 button {
    background-color: #2b26c3;
  }

  .dr {
    position: absolute;
    bottom: 16px;
    right: 16px;
    width: 100px;
  }

  @media only screen and (max-width: 960px) {
    & {
      min-width: 500px;
    }
  }

  @media only screen and (max-width: 568px) {
    & {
      min-width: 350px;
    }

    & .card h2 {
      bottom: 0;
      right: 90px;
      font-size: 40px;
      font-weight: 700;
      color: #fff;
    }
  }
`;
