import EnterDate from './EnterDate.js';
import Select from './Select.js';
import './Filter.css';

function Filter(props) {
    return (
        <div className="Filter" >
            <EnterDate handleDate={(date) => { props.addEnterDate(date) }} icon="fa-sign-in-alt"/>
            <EnterDate handleDate={(date) => { props.addExitDate(date) }}icon="fa-sign-out-alt"/>
            <Select handleSelect={(country) => { props.addCountry(country) }} list={props.data.countries} icon="globe-americas" />
            <Select handleSelect={(price) => { props.addPrice(price) }} list={props.data.prices} icon="dollar-sign" />
            <Select handleSelect={(rooms) => { props.addRooms(rooms) }} list={props.data.sizes} icon="bed" />
        </div>
    )
}

export default Filter;