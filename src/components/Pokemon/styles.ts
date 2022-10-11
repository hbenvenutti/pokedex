import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  padding: 1rem;
  transition: padding 0.3s;
  
  &:hover {
    padding: 0;
    
    .link {
      background: var(--flying-1);
    }
  }

  img {
    width: 100%;
    margin: auto;
  }

  strong {
    font-size: 1.5rem;
  }

  > span {
    color: var(--gray-500);
    font-size: 0.7rem;
    font-weight: 700;
  }

  .link {
    width: 100%;
    display: flex;
    justify-content: center;
    background: var(--gray-100);
    border-radius: 8px;
    transition: background-color 0.3s;
  }

  .types {
    display: flex;
    gap: 0.5rem;

    span {
      border-radius: 3px;
      line-height: 1.125rem;
      text-align: center;
      width: 50%;
      font-size: 0.8rem;
      font-weight: 700;
      padding: 0.1rem;
      color: var(--white);
    }
  }
  
  .bug {
    background: var(--bug);
  }

  .dark {
    background: var(--dark);
  }

  .dragon {
    background: linear-gradient(180deg, var(--dragon-1) 50%, var(--dragon-2) 50%);
    background-color: var(--dragon-1);
  }

  .electric {
    background: var(--electric);
  }

  .fairy {
    background: var(--fairy);
  }

  .fighting {
    background: var(--fighting);
  }

  .fire {
    background: var(--fire);
  }

  .flying {
    background: linear-gradient(180deg, var(--flying-1) 50%, var(--flying-2) 50%);
    background-color: var(--flying-1);
  }

  .ghost {
    background: var(--ghost);
  }

  .grass {
    background: var(--grass);
  }

  .ground {
    background: linear-gradient(180deg, var(--ground-1) 50%, var(--ground-2) 50%);
    background-color: var(--ground-1);
  }

  .ice {
    background: var(--ice);
  }

  .normal {
    background: var(--normal);
  }

  .poison {
    background: var(--poison);
  }

  .psychic {
    background: var(--psychic);
  }

  .rock {
    background: var(--rock);
  }

  .steel {
    background: var(--steel);
  }

  .water {
    background: var(--water);
  }
`
