import styled from "styled-components";

export const Container = styled.div`
    border: 2px solid red;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: -10rem;
    gap: 2rem;
    background: 	#A9A9A9;

    div{
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: while;

        header{
            display: block;
            align-items: center;
            justify-content: space-between;
        }

        strong{
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: normal;
            line-height: 3rem;
        }

        &.summary-total{
            background: green;
        }
    }

`