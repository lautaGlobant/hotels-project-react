import Filter from './Filter.js';
import data from './data.js';
import image from './images/azur-real.jpg'

function Header(props) {
    const lists = {
        countries : [ {value:'Todos los paises',name:'Todos los paises'}, {value:'Argentina',name:'Argentina'}, {value:'Chile',name:'Chile'}, {value:'Brasil',name:'Brasil'} ],
        prices : [ {value:'Cualquier precio',name:'Cualquier precio'},{value:4,name:'Mas caro'},{value:3,name:'Caro'},{value:2,name:'Economico'},{value:1,name:'Barato'} ],
        sizes : [ {value:'Todos los tamaños',name:'Todos los tamaños'},{value:10,name:'Hotel chico'},{value:20,name:'Hotel mediano'},{value:30,name:'Hotel grande'} ]
    }

    return (
        <div className="Header" >
            <div style={{height:"200px",backgroundImage:"url("+image+")", marginBottom:"-20px", boxShadow: "0px -40px 40px 0px inset black"}}>
            </div>
            <Filter data={lists}/>

        </div>
    )
}

export default Header;