import Hotel from './Hotel.js';

function Content(props) {
    return (
        <div className='Content'>
            <div className='columns' style={{overflowX:'scroll'}}>
                {props.hotels.map((h) => {
                    return (<div className='column'><Hotel hotel={h} /></div>)
                })}
            </div>
        </div>
    )
}

export default Content;