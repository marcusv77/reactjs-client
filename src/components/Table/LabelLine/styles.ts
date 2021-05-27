import styled from 'styled-components';

export const Line = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const LabelLine = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;

  @media screen and (max-width: 950px){
    width: 70%;
  }
`;

export const Label = styled.div`
  width: 33.3%;
  display: flex;
  align-self: flex-start;
  padding-right: 40px;
  padding-top: 15px;
  padding-bottom: 15px;

  p{
    color: var(--cor-blue-text);
  }

  .hide{
    visibility: visible;
  }

  @media screen and (max-width: 950px){
    width: 100%;

    .hide{
      visibility: hidden;
    }
  }
`;