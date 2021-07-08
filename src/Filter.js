import EnterDate from './EnterDate.js';
import Select from './Select.js';
import './Filter.css';

function Filter(props) {

    let filter = {
        enterDate : new Date(),
        exitDate : new Date(),
        price : undefined,
        country : undefined,
        size : undefined
    }

    return (
        <div className="Filter" >
            <EnterDate handleDate={(date) => filter.enterDate = date} icon="fa-sign-in-alt"/>
            <EnterDate handleDate={(date) => filter.exitDate = date}icon="fa-sign-out-alt"/>
            <Select list={props.data.countries} handleOption={(o) => filter.country = o} icon="globe-americas" />
            <Select list={props.data.prices}  handleOption={(o) => filter.price = o} icon="dollar-sign" />
            <Select list={props.data.sizes}  handleOption={(o) => filter.size = o} icon="bed" />
        </div>
    )
}

export default Filter;