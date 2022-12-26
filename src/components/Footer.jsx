const Footer = (props) => {
    return (
        <div>
            <div className="d-grid gap-2 col-6 mx-auto">
                <a className="btn btn-primary text-center mb-5" href={props.href} target="_blank" role="button">{props.direction}</a>
            </div>
        </div>

    )
}

export default Footer