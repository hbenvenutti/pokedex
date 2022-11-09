import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  width: 60rem;
  gap: 5rem;

  @media(max-width: 970px) {
    width: 90%;
  }

  /* @media(max-width: 700px) {
    width: 30rem;
  }

  @media(max-width: 540px) {
    width: 20rem;
  }

  @media(max-width: 400px) {
    width: 10rem;
  } */

  .name {
    display: flex;
    flex-direction: row;
    gap: 2rem;

    span {
      color: var(--gray-500);
      font-weight: 600;
      font-size: 2rem;
    }
  }

  img {
    background-color: var(--gray-100);
    border-radius: 8px;
    height: 30rem;

    @media (max-width: 970px) {
      width: 100%;
      height: auto;
    }
  }

  .profile {
    gap: 2rem;
    display: flex;
    flex-direction: row;
    /* margin-top: 5rem; */

    @media(max-width: 970px) {
      flex-direction: column;
    }
  }
  .rightColumn {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    
    height: 30rem;

    p {
      text-align: justify;
    }
  }

  .attributes {
    display: flex;
    /* flex-direction: column; */
    margin-top: 2rem;
    gap: 5rem;
    /* justify-content: space-between; */

    background: var(--water);
    border-radius: 8px;

    width: 100%;
    padding: 1.5rem;

    strong {
      color: var(--white);
      font-size: 1.2rem;
    }
  }

  .attributes-column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .attribute {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .typesContainer {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 0.5rem;

    width: 100%;
    /* height: 30%; */

    strong {
      font-size: 1.5rem;
    }
  }

  .types {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    
    width: 100%;

    span {
      border-radius: 5px;
      line-height: 2rem;
      width: 7rem;
      justify-content: center;
      text-align: center;
      color: var(--white);
      font-weight: 600;
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
