import React, {useMemo} from 'react';
import { Container, Profile, Welcome, UserName } from './styles';
import emojis from '../../utils/emojis'
import Toogle from '../Toogle';

const MainHeader: React.FC = () => {
    const emoji = useMemo (() => {
        const indice = Math.floor(Math.random()* emojis.length);
        return emojis[indice];
    }, []);


    return (
        <Container>
            <Toogle />
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Jean Marcos</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;