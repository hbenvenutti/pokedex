import styled from "styled-components";

export const PokemonEvolutionStageListContainer = styled.div`
    display: flex;
    align-items: center;
    /* font-size: 5rem; */

    .pokemon {
      display: flex;
      align-items: center;


      a {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      img {
        background-color: var(--ice);

        border: 5px solid var(--gray-800);
        border-radius: 50%;
        
        width: 10rem;
        height: 10rem;
      }

      svg {
        font-size: 5rem;
      }
    }
`
