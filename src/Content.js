import Hotel from './Hotel.js';
import { useEffect, useState } from 'react';

function Content(props) {

    const [hotels, setHotels] = useState(props.hotels);

    useEffect(() => {
        let res = props.hotels;
        
        if(props.filter.country != undefined) {
            if(props.filter.country === 'Todo'){
                res = res.filter((h) => h.country != props.filter.country);
            }else{
                res = res.filter((h) => h.country == props.filter.country);
            }
        }
        
        if(props.filter.price != undefined){
            if(props.filter.price === 'Todo'){
                res = res.filter((h) => h.price != props.filter.price);
            }else{
                res = res.filter((h) => h.price <= props.filter.price);
            }
        }

        if(props.filter.rooms != undefined){
            if(props.filter.rooms === 'Todo'){
                res = res.filter((h) => h.rooms != props.filter.rooms);
            }else{
                res = res.filter((h) => h.rooms <= props.filter.rooms);
            }
        }
        
        if(props.filter.dateFrom != undefined){
            res = res.filter((h) => h.availabilityFrom <= props.filter.dateFrom);
        }

        if(props.filter.dateTo != undefined){
            res = res.filter((h) => h.availabilityTo >= props.filter.dateTo);
        }

        if(res.length > 0){
            setHotels(res);
        }else{
            setHotels(res);
            console.log('ta vacio hacer componente')
        }
        
    }, [props.filter])

    return (
        <div className='Content'>
            <div className='columns' style={{overflowX:'scroll'}}>
                {hotels.map((h) => {
                    return (<div key={h.slug} className='column'><Hotel hotel={h} /></div>)
                })}
            </div>
        </div>
    )
}

export default Content;