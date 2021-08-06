import data from '../../data';

const initialState = {
    hotels: data.hotels,
    filter: data.filters,
    filteredBy: { enter:undefined, exit:undefined, country:'Todo', price:'Todo', size:'Todo' }
}

function rootReducer(state = initialState, action) {
    let filterState = Object.create(state);
    let hotelsState = Object.create(initialState);
    
    switch (action.type) {
        case 'ADD_FILTER':
            if(action.payload.filterType === 'countries') {
                filterState.filteredBy.country = action.payload.filter; 
            }else if(action.payload.filterType === 'prices') {
                filterState.filteredBy.price = action.payload.filter; 
            }else if(action.payload.filterType === 'sizes') {
                filterState.filteredBy.size = action.payload.filter; 
            }else if(action.payload.filterType === 'enter') {
                filterState.filteredBy.enter = action.payload.filter; 
            }else if(action.payload.filterType === 'exit') {
                filterState.filteredBy.exit = action.payload.filter; 
            }
            break;
        default:
            return state;
    }

    if(filterState.filteredBy.country !== 'Todo') {
        hotelsState.hotels = hotelsState.hotels.filter(h => h.country === filterState.filteredBy.country)
    }
    
    if(filterState.filteredBy.price !== 'Todo') {
        hotelsState.hotels = hotelsState.hotels.filter(h => h.price.toString() === filterState.filteredBy.price)
    }
    
    if(filterState.filteredBy.size !== 'Todo') {
        hotelsState.hotels = hotelsState.hotels.filter(h => h.rooms.toString() <= filterState.filteredBy.size)
    }
    
    if(filterState.filteredBy.enter !== undefined && !isNaN(filterState.filteredBy.enter)) {
        hotelsState.hotels = hotelsState.hotels.filter(h => h.availabilityFrom <= filterState.filteredBy.enter)
    }

    if(filterState.filteredBy.exit !== undefined && !isNaN(filterState.filteredBy.exit)) {
        hotelsState.hotels = hotelsState.hotels.filter(h => h.availabilityTo >= filterState.filteredBy.exit)
    }

    hotelsState.filteredBy = filterState.filteredBy;
    console.log(hotelsState);
    return hotelsState;
}

export default rootReducer;