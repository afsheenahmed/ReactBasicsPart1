function Cards({ name, age }) {
    return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Age: {age}</p>
                </div>
            </div>
        </div>
    );
}
export default Cards;