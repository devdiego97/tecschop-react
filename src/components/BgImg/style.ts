import styled from "styled-components";

type Props = {
    src: string;
    width: string | number;
    height: string | number;
  };
  
  export const Box = styled.div<Props>`
  transition: all ease .3s;
    background-image: url(${(props) => props.src});
    width: ${(props) =>
      typeof props.width === "number" ? `${props.width}px` : props.width};
    height: ${(props) =>
      typeof props.height === "number" ? `${props.height}px` : props.height};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  `;