import { Link } from "react-router-dom";

function Card({ title, description, icon, link }: { title: string; description: string; icon?: string; link?: string }) {

    return (
        <div className="" style={{ width: '25rem' }}>
            <div className="card text-center shadow-lg border-0 rounded">
                <div className="card-body d-flex flex-column justify-content-center" style={{ height: '200px' }}>
                    <h4 className="card-title text-primary">
                        {icon && <span><i className={`bi bi-${icon}`}></i> </span>} {title}</h4>
                    <p className="card-text text-muted">{description}</p>
                    <Link to={`/${link}`} className="btn btn-primary btn-sm mx-5">Dive in</Link>
                </div>
            </div>
        </div>
    )
}

export default Card;    