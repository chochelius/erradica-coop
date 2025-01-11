

function PostCard(props) {
    return (
        <div className="container mt-5">
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.imgurl} className="img-fluid rounded-start" alt={props.title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.content}</p>
                            <p className="card-text"><small className="text-body-secondary">created {props.created} | updated {props.updated} | by {props.user} | {props.likes} likes</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard