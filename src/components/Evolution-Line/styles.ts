import styled from "styled-components";

export const EvolutionLineContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

  .evolutions {
    display: flex;  
    align-items: center;
    justify-content: center;
    gap: 2rem;
    
    padding: 2rem;
    
    /* background-color: var(--gray-800); */
    border-radius: 8px;

    @media(max-width: 850px) {
      padding: 10%;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
    
    svg {
      font-size: 5rem;
      
      @media(max-width: 850px) {
        rotate: 90deg;
      }
    }
  }
`
