import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
    padding-top: 2rem;
`

export const Content = styled.div`
    margin: 0 auto; //alinha horizontalmente
    max-width: 1120px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 1rem 12rem; //top / sides / bottom

    button {
        font-size: 1rem;
        background: var(--blue-light);
        border: 0;
        color: var(--shape);
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;
                
        &:hover {
            filter: brightness(0.9)
        }
    }
    

    
`