import styled from 'styled-components';

const Spinner = () => {
  const Spinner = styled.span`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: inline;
    border-top: 3px solid #fff;
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 22;
  `;

  return (
    <Overlay>
      <Spinner />
    </Overlay>
  );
};

export default Spinner;
