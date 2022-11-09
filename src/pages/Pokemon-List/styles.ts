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
  transition: background-color 0.1s;

  ${props => props.isActive && css`cursor: default;`}
  
  &:hover {
    background: ${props => !props.isActive && css`var(--flying-1)`};
  }

  &:focus {
    box-shadow: none;
  }
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
  
  .loading {
    margin: auto;
    margin-top: 10rem;
  }
  
  @media (max-width: 620px) {
    .regions {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
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
  width: 17rem;

  button {
    border: 0;
    background: none;
    border-radius: 3px;
    color: var(--gray-800);
    width: 2.1rem;
    height: 2.1rem;
    padding: 0.1rem;

    transition: color 0.05s;

    svg {
      height: 1.5rem;
      width: 1.5rem;
    }

    &:focus {
      box-shadow: none;
      color: var(--dragon-2);
    }
  }

  input {
    box-sizing: content-box;
    flex: 1;
    border: 0;
    border-bottom: solid var(--gray-800) 2px;
    height: 2rem;

    transition: border-color 0.15s;

    &:focus {
      box-shadow: none;
      border-color: var(--dragon-2);
    }
  }
`
