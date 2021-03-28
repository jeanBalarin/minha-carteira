import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/Selectinput';
import {Container} from './styles';

const Dashboard: React.FC = () => {
    const options = [
        {value: 'jean', label: 'jean'},
        {value: 'jean2', label: 'jean2'},
        {value: 'jean3', label: 'jean4'}
    ];


    return (
       <Container>
           <ContentHeader title="DashBoard" lineColor="#fff">
               <SelectInput options={options}/>
           </ContentHeader>
       </Container>
    );
}

export default Dashboard;