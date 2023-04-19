const mostraLabel = (label) => {
    alert('a label desse button é: '+label)
}


const Button = (props) => {
    return(
        <button className="button" onClick={() => mostraLabel(props.label)}>{props.label}</button>
    )
}

export default Button