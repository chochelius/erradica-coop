import React from 'react'

function PostCard({ title, content, imgurl, user, likes, created, updated }) {
    return (
        <div>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imgurl} className="img-fluid rounded-start" alt={title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{content}</p>
                            <p className="card-text"><small className="text-body-secondary">created {created} | updated {updated} | by {user} | {likes} likes</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard