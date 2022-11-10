import styled from "styled-components";

export const SearchFormContainer = styled.form`
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
