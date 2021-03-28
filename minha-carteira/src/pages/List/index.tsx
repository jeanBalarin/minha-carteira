import React from 'react';
import {Container} from './styles'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/Selectinput'

const options = [
    {value: 'jean', label: 'jean'},
    {value: 'jean2', label: 'jean2'},
    {value: 'jean3', label: 'jean4'}
];

const List: React.FC = () => {
    return (
        <Container>
            <ContentHeader title="List" lineColor="#fff">
                <SelectInput options={options}/>
            </ContentHeader>
        </Container>
    );
}

export default List;