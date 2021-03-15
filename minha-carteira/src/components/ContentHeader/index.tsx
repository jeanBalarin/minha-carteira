import React from 'react';
import { 
    Container,
    TitleContainer,
    Controllers
} from './styles';


const ContentHeader: React.FC = () => {
    return (
        <Container>
            <TitleContainer>
                <h1>Título</h1>
            </TitleContainer>
            <Controllers>
                <button type="button">Botão a</button>
                <button type="button">Botão b</button>
            </Controllers>

        </Container>
    );
}

export default ContentHeader; 