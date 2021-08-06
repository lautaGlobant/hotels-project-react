import './Hotel.css';
import Price from './Price.js';

function Hotel(props) {
    return (
    <div className="Hotel card" style={{width:'300px', marginLeft:'15px'}} >
        <div className='card-header' style={{display:'initial'}}>
            <div className='card-header-title'>
                <p>{props.hotel.name}</p>
            </div>
            <div className='country'>
                <p>{props.hotel.country}</p>
            </div>
        </div>
        <div className="card-image">
            <figure className="image is-4by3">
                <img src={props.hotel.photo} alt={props.hotel.name} />
            </figure>
            <div className='details'>
                <div className="icon has-icon-left rooms" style={{marginLeft:'1.5rem'}}>
                    <i className="fas fa-bed"></i>
                    <span style={{marginLeft:'1rem'}}>{props.hotel.rooms}</span>
                </div>
                <Price price={props.hotel.price} />
            </div>
        </div>
        <div className="card-content">
            <div className="content">
                <p>{props.hotel.description}</p>
            </div>
        </div>
        <div>
            <button class="button is-success is-large is-fullwidth">Reservar</button>
        </div>
    </div>
    )
}

export default Hotel;