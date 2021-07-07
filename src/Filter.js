import EnterDate from './EnterDate.js';

function Filter() {
    let filter = {
        enterDate : new Date(),
        exitDate : new Date(),
        price : undefined,
        country : undefined
    }

    return (
        <div className="Filter">
            <EnterDate handleDate={(date) => filter.enterDate = date} icon="fa-sign-in-alt"/>
            <EnterDate handleDate={(date) => filter.exitDate = date}icon="fa-sign-out-alt"/>

            <button onClick={() => console.log(filter)} value="Click">Click</button>
        </div>
    )
}

export default Filter;