import EnterDate from './EnterDate.js';
import Select from './Select.js';
import './Filter.css';
import { connect } from 'react-redux';
import { addFilter } from '../js/actions/addFilter';

const mapStateToProps = (state) => {
    return { filters: state.filter }
}

const mapDispatchToProps = (dispatch) => {
    return { addFilter: (filter, filterType) => dispatch(addFilter(filter, filterType))}
}

function ConnectedFilter (props){
    return (
        <div className="Filter" >
            <EnterDate handleDate={(d) => props.addFilter(d, 'enter')} icon="fa-sign-in-alt"/>
            <EnterDate handleDate={(d) => props.addFilter(d, 'exit')} icon="fa-sign-out-alt"/>
            <Select list={props.filters.countries} handleOption={(o) => props.addFilter(o, 'countries')} icon="globe-americas" />
            <Select list={props.filters.prices}  handleOption={(o) => props.addFilter(o, 'prices')} icon="dollar-sign" />
            <Select list={props.filters.sizes}  handleOption={(o) => props.addFilter(o, 'sizes')} icon="bed" />
        </div>
    )
}

const Filter = connect(mapStateToProps,mapDispatchToProps)(ConnectedFilter);
export default Filter;