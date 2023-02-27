import styled from "styled-components";

export const Container = styled.div`
    border: 2px solid yellow;
    margin-top: 4rem;
    
    table{
        border-spacing: 0 0.5rem;
				width: 100%;

				th{
					color: var(--text-body);
					font-weight: 400;
					padding: 1rem 2rem;
					text-align: left;
					line-height: 1.4rem;
					
				}

				td{
					padding: 1rem 2rem;
          border: 0;
          background:  #ffff;
          border-radius: 0.2543mm;

        &:first-child{
          color: #363f5f;
        }
        &.negativo{
          color: red;
        }
        &.positivo{
          color: green;
        }
      }
    }
`