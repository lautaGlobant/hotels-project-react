function EnterDate(props) {
    return (
        <div className="control has-icon">
            <span className="icon">
                <i className={"fas " + props.icon}></i>
            </span>
            <input type="date" onChange={(e) => props.handleDate(e.target.value)}/>
        </div>
    )
}

export default EnterDate;