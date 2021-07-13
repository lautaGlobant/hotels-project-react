import Filter from './Filter.js';

function Header(props) {
    const lists = {
        countries : [ {value:'Todo',name:'Todos los paises'}, {value:'Argentina',name:'Argentina'}, {value:'Chile',name:'Chile'}, {value:'Brasil',name:'Brasil'}, {value:'Uruguay',name:'Uruguay'} ],
        prices : [ {value:'Todo',name:'Cualquier precio'},{value:4,name:'Mas caro'},{value:3,name:'Caro'},{value:2,name:'Economico'},{value:1,name:'Barato'} ],
        sizes : [ {value:'Todo',name:'Todos los tamaños'},{value:10,name:'Hotel chico'},{value:20,name:'Hotel mediano'},{value:30,name:'Hotel grande'} ]
    }

    return (
        <div className="Header" >
            <div style={{height:"200px",backgroundImage:"url(/images/azur-real.jpg)", marginBottom:"-20px", boxShadow: "0px -40px 40px 0px inset black"}}>
            </div>
            <Filter data={lists} addEnterDate={(enter) => {props.handleEnterDate(enter)}} addExitDate={(exit) => {props.handleExitDate(exit)}} addCountry={(country) => props.handleCountry(country)} addPrice={(price) => props.handlePrice(price)} addRooms={(rooms) => props.handleRooms(rooms)} />

        </div>
    )
}

export default Header;