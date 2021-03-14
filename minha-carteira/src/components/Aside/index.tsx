import React from 'react';
import logImg from '../../assets/logo.svg';
import {
        Container,
        Header, 
        LogImg,
        Title,
        MenuConteiner,
        MenuItemLink
        
    } from './styles';

import {
        MdDashboard,
        MdArrowDownward,
        MdArrowUpward,
        MdExitToApp
    
    } from 'react-icons/md'

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogImg src={logImg} alt="Logo minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuConteiner>
                <MenuItemLink href="#">
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="#">
                    <MdArrowUpward/>
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="#">
                    <MdArrowDownward/>
                    Saídas
                </MenuItemLink>
                <MenuItemLink href="#">
                    <MdExitToApp/>
                    Sair
                </MenuItemLink>    
            </MenuConteiner>

        </Container>
    );
}

export default Aside;