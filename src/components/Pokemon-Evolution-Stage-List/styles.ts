import styled from "styled-components";

export const PokemonEvolutionStageListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    color: var(--gray-800);
    
    @media(max-width: 850px) {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-auto-flow: row;
      align-items: flex-start;
      column-gap: 0.1rem;
      row-gap: 2rem;
    }
    
    @media(max-width: 550px) {
      display: grid;
      grid-template-columns: auto auto;
      /* align-items: flex-start; */
      align-items: flex-start;
      justify-content: center;
    }
    
    .pokemon {
      display: flex;
      flex: 1;
      align-items: center;
      text-align: center;

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

        .image {
          background-color: var(--gray-100);
          box-shadow: 0px 8px 8px 0 rgba(0,0,0,0.2);

          border: 5px solid var(--gray-800);
          border-radius: 50%;

          overflow: hidden;
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

          img {
            background-color: transparent;
            width: 9rem;
            height: 9rem;
          }
        }

      }

      svg {
        margin-top: -1rem;
        font-size: 5rem;
      }
    }
`
