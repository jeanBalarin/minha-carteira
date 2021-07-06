import React, { useMemo, useState, useEffect } from 'react';


import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/Selectinput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import {Container, Content, Filters} from './styles';



import Gains from '../../repositories/gains';
import Expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurency';
import formatDate from '../../utils/formatDate';


interface IRouteParams {
    match: {
        params: {
            type: string;  // parametros da roda definido no app.routes
        }
    }
}

interface IDate{
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dataFormatted: string;
    tagColor: string;
}

const List: React.FC<IRouteParams> = ({match}) => {   

    const [data, setData] = useState<IDate[]>([]);

    const {type} = match.params; //caso tiver mais parametros é apenas add nas chaves.
    const title = useMemo(() => {
        return type === 'entry-balance' ? {   //caso for exatamente igual 
            title: 'Entradas',
            lineColor: '#F7931B'
        } : {
            title: 'Saídas',
            lineColor: '#E44C4E'
        }
    }, [type]);

    const months = [
        {value: 6, label: 'Junho'},
        {value: 7, label: 'Julho'},
        {value: 8, label: 'Agosto'},
        {value: 9, label: 'Setembro'}
    ];
    
    const years = [
        {value: 2021, label: 2021},
        {value: 2020, label: 2020},
        {value: 2019, label: 2019}
    ];

    const listData = useMemo(()=> {
        return type === 'entry-balance'? Gains : Expenses;
    }, [type]);

    useEffect(() => {
       const response = listData.map(item =>{
            return{
                id:String(Math.random () * data.length),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dataFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
            }
        })




        setData(response);
    },[]);

    return (
        <Container>
            <ContentHeader title={title.title} lineColor={title.lineColor}>
                <SelectInput options={months}/>
                <SelectInput options={years}/>
            </ContentHeader>
            <Filters>
                <button
                    type="button"
                    className="tag-filter tag-filter-recurrent"
                >
                    Recorrentes
                </button>
                <button
                    type="button"
                    className="tag-filter tag-filter-eventual"
                >
                    Eventuais
                </button>
            </Filters>

            <Content>
                {
                    data.map( item =>(
                        <HistoryFinanceCard
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dataFormatted}
                            amount={item.amountFormatted}
                        />
                    ))
                }
            </Content>
        </Container>
    );
}

export default List;