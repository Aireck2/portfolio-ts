import styled from 'styled-components'

export const StyledTechStack = styled.div`
  display: flex;
  grid-gap: 30px;
  position: relative;
  padding: 20px;
  .background {
    position: absolute;
    z-index: 200;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    grid-gap: 30px;
    border-radius: 16px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.06);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }
  .tool {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 20px;
    font-size: calc(6rem * var(--scale));
    padding: 0 0.5rem;
    cursor: default;

    font-size: calc(6rem * var(--scale));
    padding: 0 0.5rem;
    cursor: default;

    position: relative;
    top: calc((6rem * var(--scale) - 6rem) / 2 * -1);

    transition: all 0.5 ease-in-out;
    &:hover + .caption {
      opacity: 1;
    }
    &:hover {
      .image {
        transform: scale(120%);
      }
    }
  }
  .image {
    z-index: 300;
  }
  .caption {
    all: unset;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    font-family: 'Gilmer', Geneva, Tahoma, Helvetica, Verdana, sans-serif;
    letter-spacing: 10px;
    font-weight: bolder;
    text-transform: uppercase;
    font-size: 56px;
    transition: all 0.2s ease-in;
  }
`
