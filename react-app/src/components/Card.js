import './Card.css'

function Card(props) {
    const classes = 'card ' + props.className;
    console.log(props.children);
    return (
        <div>
            <div className={classes}>{props.children}</div>
        </div>
    )
}

export default Card;