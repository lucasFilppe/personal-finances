import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f8f2f5;
        --red: #e52e5d;
        --blue: #5429CC

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #ffff;
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1980px){
            font-size: 93.75%
        }

        @media (max-width: 720px){
            font-size: 87.5%
        }
    }
    /*rem = 1rem =font-size*/

    body{
        background: var(--background);
    }

    button{
        cursor: pointer;
    }
    
    [disables]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`