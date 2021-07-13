import { render } from "@testing-library/react";

function Price(props){
    let price = [];

    for(var i = 0; i < props.price; i++){
        price.push(<div key={i} className="icon"><i className="fas fa-dollar-sign"></i></div>); 
    }

    return (
        <div className='Price'>
            {price}
        </div>
    )
}

export default Price;