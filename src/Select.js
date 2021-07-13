import "./EnterDate.css";

function Select(props){
    return (
    <div className="field Select">
        <div className="control has-icons-left">
            <div className="select" style={ {width: '200px'} }>
                <select onChange={(e) => props.handleSelect(e.target.value)}>
                    {props.list.map((l) => {
                        return <option key={l.name} value={l.value}>{l.name}</option>
                    })}
                </select>
            </div>
            <div className="icon is-left">
                <i className={"fas fa-" + props.icon}></i>
            </div>
        </div>
    </div>

    )
}

export default Select;