import React, { useState } from 'react';
import { Container,ToogleLabel,ToogleSelector } from './styles';



const Toogle: React.FC = () => {
    const [online, setOnline] = useState(false);
    return(
    <Container>
        <ToogleLabel>Light</ToogleLabel>
        <ToogleSelector
            checked = {online} 
            onChange={()=> setOnline(!online)} 
            uncheckedIcon={false}
            checkedIcon={false}
        /> 
        <ToogleLabel>Dark</ToogleLabel>
    </Container>
    );
    }

export default Toogle;

