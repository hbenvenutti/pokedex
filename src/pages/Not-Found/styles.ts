import styled from "styled-components";

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  margin: 0 auto;
  
  @media(max-width:600px) {
    width: 25rem;
  }

  @media(max-width: 390px) {
    width: 18.75rem;
    font-size: 0.8rem;
  }

  span {
    color: var(--gray-500);
    font-size: 3rem;
    font-weight: 700;
  }

  img {
    width: 100%;
  }
`
