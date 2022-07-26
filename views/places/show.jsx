const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <br />
                <div className='row'>
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name} />
                    </div>
                    <div className="col-sm-6">
                        <h1>{data.place.name}</h1>
                        <h2>Rating</h2>
                        <p className="text-center">Not Rated</p>
                        <h2>Description</h2>
                        <p className="text-center">
                            Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}
                        </p>

                    </div></div>
                <hr />
                <h2>comments</h2>
                <p className="text-center">currenty no comments</p>
            </main>
            <div className='row'>
                <div className='col-sm-6'>
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>
                </div>
                <div className='col-sm-6'>
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                </div>
            </div>
        </Def>
    )
}

module.exports = show

