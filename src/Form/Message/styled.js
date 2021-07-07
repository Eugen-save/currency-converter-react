import styled, {keyframes, css} from "styled-components";

const circleAnimation = keyframes`
  0% {opacity: 1;}
  100% {opacity: 0}
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${({theme}) => theme.colors.white};
`;

export const Text = styled.p`
  text-align: center;
`;

export const Circle = styled.div`
  color: ${({theme}) => theme.colors.chatamsBlue};
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

export const Animation = styled.div`
  transform-origin: 40px 40px;
  animation: ${circleAnimation} 1.2s linear infinite;

  &:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: #0f4c81;
  };

  ${({circle1}) => circle1 && css`
    transform: rotate(0deg);
    animation-delay: -1.1s;
  `};

  ${({circle2}) => circle2 && css`
    transform: rotate(30deg);
    animation-delay: -1s;
  `};

  ${({circle3}) => circle3 && css`
    transform: rotate(60deg);
    animation-delay: -0.9s;
  `};

  ${({circle4}) => circle4 && css`
    transform: rotate(90deg);
    animation-delay: -0.8s;
  `};

  ${({circle5}) => circle5 && css`
    transform: rotate(120deg);
    animation-delay: -0.7s;
  `};

  ${({circle6}) => circle6 && css`
    transform: rotate(150deg);
    animation-delay: -0.6s;
  `};
  
  ${({circle7}) => circle7 && css`
    transform: rotate(180deg);
    animation-delay: -0.5s;
  `};

  ${({circle8}) => circle8 && css`
    transform: rotate(210deg);
    animation-delay: -0.4s;
  `};

  ${({circle9}) => circle9 && css`
    transform: rotate(240deg);
    animation-delay: -0.3s;
  `};

  ${({circle10}) => circle10 && css`
    transform: rotate(270deg);
    animation-delay: -0.2s;
  `};

  ${({circle11}) => circle11 && css`
    transform: rotate(300deg);
    animation-delay: -0.1s;
  `};

  ${({circle12}) => circle12 && css`
    transform: rotate(330deg);
    animation-delay: 0s;
  `};
`;
