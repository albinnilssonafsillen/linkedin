
const Input = props => {
    return (
        <input className="txtInput" value={props.ref} onChange={props.onChange} placeholder={props.placeHolder} type={props.type}></input>
    );
}

export default Input
