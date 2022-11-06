import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);    
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto; //alinha horizontalmente
    
    padding: 2rem 1rem 12rem; //top / sides / bottom

    display: flex;
    justify-content: space-between;
    align-items: center;

    

    button {
        font-size: 1rem;
        background: var(--blue-light);
        color: $FFF;
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