import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    /*root{
        --background: #f8f2f5;
        --red: #e52e5d;
        --blue: #5429CC

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #ffff;
        */
    
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

    body, input, textarea , button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    } 
 
    button{
        cursor: pointer;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }
    
    [disables]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background: rgba(0,0,0,0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: whitesmoke;
        padding: 3rem;
        border-radius: relative;
        border-radius: 0.24rem;

    
    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

    }
}
`