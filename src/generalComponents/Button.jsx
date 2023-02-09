import '../css/button.css';

function Button({name, secondClass}) {
    return(
        <button className={`button ${secondClass}`}>{name}</button>
    )
}

export default Button