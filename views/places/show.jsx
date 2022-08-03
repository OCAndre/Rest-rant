const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <br />
                <div className='row'>
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name} />
                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                    <div className="col-sm-6">
                        <h1>{data.place.name}</h1>
                        <h2>Rating</h2>
                        <p className="text-center">Not Rated</p>
                        <h2>Description</h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                        <div className="row">
                            <div className="col-sm-6"><a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                                Edit
                            </a></div>
                            <div className="col-sm-6">
                                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                                    <button type="submit" className="btn btn-danger">
                                        Delete
                                    </button>
                                </form>
                            </div></div>
                    </div></div>
                <hr />
                <h2>comments</h2>
                {comments}
                <h2>Got Your Own Rant or Rave?</h2>
                <form action={`/places/${data.place.id}/comment`} method="POST">
                    <label htmlFor="content">Content</label>
                    <textarea className="form-control" id="content" name="content" />
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="author">Author</label>
                            <input className="form-control" id="author" name="author" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="starts">Star Rating</label>
                            <input type="range" step="0.5" min="1" max="5" className="form-control" id="stars" name="stars" />
                        </div>
                        {/* checkbox will not go onto the same row as above so made a seperate line */}
                        <br />

                        <label htmlFor="rant">Rant? </label>
                        <input type="checkbox" value="rant" id="rant" />

                    </div>
                    <br />
                    <input type="submit" className="btn btn-primary" value="Add Comment" />
                </form>
            </main>
        </Def>
    )
}


module.exports = show

