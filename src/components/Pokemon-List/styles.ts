import styled, {css} from "styled-components";

interface CustomButtonProps {
  isActive: boolean
}

export const Button = styled.button<CustomButtonProps>`
  border: 0;
  background: ${props => props.isActive ? css`var(--dragon-2)` : css`var(--water)`};
  border-radius: 4px;
  height: 2rem;
  width: 4rem;
  font-weight: 700;
  color: var(--white);
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  .regions {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 0.2rem;
  }
`

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-flow: row;
  row-gap: 2rem;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 730px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 470px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  button {
    border: 0;
    background: none;
    border-radius: 3px;
    color: var(--gray-800);
    width: 2.1rem;
    height: 2.1rem;
    padding: 0.1rem;

    svg {
      height: 2rem;
      width: 2rem;
    }
  }

  input {
    box-sizing: content-box;
    border: solid var(--gray-800) 2px;
    border-radius: 8px;
    height: 2rem;
  }
`
