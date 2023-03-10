import styled from 'styled-components'

export const Container = styled.header`
    background: blue;
 `

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 0 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: #ffff;
        background: greenyellow;
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9)
        }

    }
    `