
const Card = (props) =>{
    return(
        <>
            <div className="card container-fluid w-70" id="card">
                <img className="card-img"  src={props.url} alt="levantamiento arrancada" />
                <h5 className="card-title text-center">{props.title}</h5>
                <p className="card-text text-center "><a className="text-decoration-none" href={props.href} target="_blank">{props.athlete}</a></p>
            </div>
        </>
    )
}

export default Card;