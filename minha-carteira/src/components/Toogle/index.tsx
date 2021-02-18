import React from 'react';
import { Container,ToogleLabel,ToogleSelector } from './styles';



const Toogle: React.FC = () => (
    <Container>
        <ToogleLabel>Light</ToogleLabel>
        <ToogleSelector
            checked = {true}
            onChange={()=> console.log('mudou')} 
        /> 
        <ToogleLabel>Dark</ToogleLabel>
    </Container>
)

export default Toogle;

