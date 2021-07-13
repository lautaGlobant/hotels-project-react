import "./EnterDate.css";

function EnterDate(props) {
    return (
        <div className="EnterDate field">
            <div className="control has-icons-left">
                <div className="input" style={ {width: '200px'} }>
                    <input type="date" style={{border:"none"}} onChange={(e) => { let date; if(e.target.value != ''){ date = new Date(e.target.value).valueOf() }else{ date = undefined }; console.log(date); props.handleDate(date); }}/>
                </div>
                
                <div className="icon is-left">
                    <i className={"fas " + props.icon}></i>
                </div>
            </div>
        </div>
    )
}

export default EnterDate;