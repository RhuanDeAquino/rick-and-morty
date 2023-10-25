import { styled } from "styled-components";

export const Content = styled.section`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  > p {
    color: #fff;
    margin-top: 1.5rem;
  }
`;

export const BoxContent = styled.div`
  box-shadow: inset 0 0px 10px 0px #fff;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 0 3rem;
  max-width: 1300px;
  width: 90vw;
  height: 85vh;
  padding: 1rem;
  animation-name: example;
  animation-duration: 2s;

  @keyframes example {
    0% {
      margin-top: -40rem;
    }
    50% {
      margin-top: 8rem;
    }
    100% {
      margin-top: 2.5rem;
    }
  }

  > div {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #008000;
  display: none;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 4rem 0;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 3rem;
    overflow: hidden;
    border-radius: 20px;
    border: 2px solid #008000;
    padding: 0 0 0 1rem;
    background: #fff;
    border: .5vmin solid #05060f;
    box-shadow: .4rem .4rem #05060f;

    @media (max-width: 700px) {
      width: 100%;
    }

    > input {
      width: calc(70% - 1px);
      border-radius: 20px 0 0 20px;
      border: 0;
      outline: 0;
      font-weight: 600;
      color: #008000;
    }

    > button {
      width: calc(30% + 10px);
      height: 100%;
      border: 0;
      background: #008000;
      color: #fff;
      font-weight: 600;
    }
  }
`;

export const Loading = styled.img`
  width: 200px;
`;

export const ListCard = styled.div`
  width: 100%;
  padding-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Card = styled.div`
  width: 200px;
  height: 284px;
  background-color: ${(props) => (props.die ? 'gray' : '#008000')};
  padding: 1rem;
  border-radius: 1rem;
  border: .5vmin solid #05060f;
  box-shadow: .4rem .4rem #05060f;
  overflow: hidden;
  color: black;

  > img {
    width: 100%;
    height: 150px;
    border: .5vmin solid #05060f;
    border-radius: 1rem;
    filter: ${(props) => props.die && 'gray'};
    -webkit-filter: ${(props) => props.die && 'grayscale(100%)'};
    filter: ${(props) => props.die && 'grayscale(100%)'};
  }

  > h3 {
    color: #fff;
    font-size: 0.875rem;
    height: 1.5rem;
    display: flex;
    font-weight: 400;
    font-family: 'Lilita One', sans-serif;

    > p {
      padding-left: 0.5rem;
      font-size: 0.8rem;
      font-weight: 300;
    }
  }
`;

export const ModalContent = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background: #00000099;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  width: 800px;
  height: 800px;
  border-radius: 20px;
  border: .5vmin solid #05060f;
  box-shadow: .4rem .4rem #05060f;
  background: #008000;
  overflow: hidden;
  z-index: 9;
  animation-name: example;
  animation-duration: 2s;

  @keyframes example {
    0% {
      margin-top: -40rem;
    }
    50% {
      margin-top: 8rem;
    }
    100% {
      margin-top: 2.5rem;
    }
  }

  @media (max-width: 700px) {
    width: 90%;
  }

  > h2 {
    width: 100%;
    padding: 1rem;
    background: #fff;
    font-family: 'Lilita One', sans-serif;
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }

  > p {
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    background: red;
  }
`;

export const BoxModal = styled.div`
  border-radius: 17px;
  width: 100%;
  height: 100%;
`;

export const BoxTitle = styled.div`
  width: 100%;
  height: 300px;
  display: flex;

  @media (max-width: 700px) {
   flex-direction: column; 
  }

  > figure {
    width: 40%;
    height: 300px;
    border-bottom: .5vmin solid #05060f;
    position: relative;
    overflow: hidden;

    @media (max-width: 700px) {
      width: 100%;
      height: auto;
  }

    > span {
      display: ${(props) => (props.die ? 'flex' : 'none')};
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      background: #ff000090;
      width: 100%;
      height: 100px;
      left: 0;
      font-family: 'Lilita One', sans-serif;
      font-size: 1.2rem;
      color: #fff;
      box-shadow: 5px 5px 37px 17px #ff000090;
      font-size: 2rem;
      font-weight: 600;
    }

    > img {
      width: 100%;
      height: 100%;
      filter: ${(props) => props.die && 'gray'};
      -webkit-filter: ${(props) => props.die && 'grayscale(100%)'};
      filter: ${(props) => props.die && 'grayscale(100%)'};
    }
  }

  > h2 {
    width: 62%;
    height: 100%;
    background: #05060f;
    text-align: center;
    padding-top: 5rem;
    color: #fff;
    font-family: 'Lilita One', sans-serif;

    @media (max-width: 700px) {
    padding-top: 1rem;
    width: 100%;
    height: 30%;
  }
  }
`;
