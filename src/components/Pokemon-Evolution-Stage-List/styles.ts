import styled from "styled-components";

export const PokemonEvolutionStageListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    color: var(--gray-800);

    @media(max-width: 850px) {
      flex-direction: row;
    }

    .pokemon {
      display: flex;
      align-items: center;

      a {
        gap: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        &:focus {
          box-shadow: none;
          img {
            border-color: var(--gray-500);
          }
        }

        img {
          background-color: var(--gray-100);
  
          border: 5px solid var(--gray-800);
          border-radius: 50%;
          
          width: 10rem;
          height: 10rem;
  
          transition: background-color 0.15s;
  
          &:hover {
            background-color: var(--flying-1);
          }
  
          @media(max-width: 850px) {
            flex: 1;
            height: auto;
          }
        }
      }

      svg {
        margin-top: -1rem;
        font-size: 5rem;
      }
    }
`
