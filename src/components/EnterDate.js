import "./EnterDate.css";

function EnterDate(props) {
    return (
        <div className="EnterDate field">
            <div className="control has-icons-left">
                <div className="input" style={ {width: '200px'} }>
                    <input type="date" style={{border:"none"}} onChange={(e) => props.handleDate(new Date(e.target.value).valueOf()) }/>
                </div>
                
                <div className="icon is-left">
                    <i className={"fas " + props.icon}></i>
                </div>
            </div>
        </div>
    )
}

export default EnterDate;