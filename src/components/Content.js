import { connect } from 'react-redux';
import Hotel from './Hotel.js';

const mapStateToProps = (state) => {
    return { hotels :state.hotels };
} 

function ConnectedContent({hotels}) {
    return (
        <div className='Content'>
            <div className='columns' style={{overflowX:'scroll'}}>
                {hotels.map((h) => {
                    return (<div key={h.name} className='column'><Hotel hotel={h} /></div>)
                })}
            </div>
        </div>
    )
}

const Content = connect(mapStateToProps)(ConnectedContent);
export default Content;