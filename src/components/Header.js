import Filter from './Filter.js';

function Header({filter}) {

    return (
        <div className="Header" >
            <div style={{height:"200px",backgroundImage:"url(/images/azur-real.jpg)", marginBottom:"-20px", boxShadow: "0px -40px 40px 0px inset black"}}>
            </div>
            <Filter list={filter}/>

        </div>
    )
}

export default Header;