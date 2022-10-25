import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './header.styles'

interface HeaderProps {
    handleOnClick: () => void;
}


export function Header({handleOnClick}: HeaderProps) {

    
    
    return(
        <Container>               
            <Content>
                <img src={logoImg} alt="dt money" />
                <button 
                    type="button"
                    onClick={handleOnClick}
                > 
                        Nova Transação
                </button>
            </Content>    
                         
        </Container>
    )
}